import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { site } from "@/lib/site";

export function InquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const product = String(data.get("product") ?? "");
    const company = String(data.get("company") ?? "");
    toast.success("Inquiry received", {
      description: `We will reply to ${company || "your team"} about ${product.toLowerCase()}.`,
    });
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-1 text-sm">
        <span className="font-medium">Company</span>
        <input
          name="company"
          required
          className="h-12 rounded-sm border border-line bg-surface px-3 outline-none ring-primary/30 focus:ring-2"
        />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium">Work email</span>
        <input
          name="email"
          type="email"
          required
          className="h-12 rounded-sm border border-line bg-surface px-3 outline-none ring-primary/30 focus:ring-2"
        />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium">Product</span>
        <select
          name="product"
          className="h-12 rounded-sm border border-line bg-surface px-3 outline-none ring-primary/30 focus:ring-2"
        >
          <option>Red Shallots</option>
          <option>Green Onions</option>
          <option>Both lines</option>
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium">Volume / month</span>
        <select
          name="volume"
          className="h-12 rounded-sm border border-line bg-surface px-3 outline-none ring-primary/30 focus:ring-2"
        >
          <option>Trial 500 kg – 3 MT</option>
          <option>1 × 20ft FCL</option>
          <option>Monthly program</option>
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium">Message</span>
        <textarea
          name="message"
          rows={4}
          className="rounded-sm border border-line bg-surface px-3 py-2 outline-none ring-primary/30 focus:ring-2"
          placeholder="Destination port, preferred grade, packing…"
        />
      </label>
      <button
        type="submit"
        className="h-12 bg-primary font-medium tracking-wide text-surface transition-colors hover:bg-primary-dark"
      >
        {sent ? "Send another inquiry" : "Request quotation"}
      </button>
      <p className="text-xs text-muted">
        Or write {site.email} / WhatsApp {site.phoneDisplay}. Typical reply within one business day.
      </p>
    </form>
  );
}
