"use client";

import { useState } from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="w-full bg-[#f5efe6] px-6 py-24 lg:px-10 lg:py-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-14 border-t border-stone-950/10 pt-16 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5">
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
              Contact
            </span>
            <h2 className="mt-6 text-4xl font-light leading-[1.1] tracking-tight text-stone-950 sm:text-5xl">
              Get in touch.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-7 text-stone-600">
              Questions about an order, a wholesale enquiry, or just want to say
              hello — we&apos;d love to hear from you.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <a
                href="https://www.instagram.com/nolu/"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-900/15 text-stone-700 transition hover:border-stone-950 hover:text-stone-950"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-900/15 text-stone-700 transition hover:border-stone-950 hover:text-stone-950"
              >
                <FaTiktok className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {status === "success" ? (
              <div className="rounded-2xl border border-stone-950/10 bg-white/50 p-6">
                <p className="text-sm text-stone-700">
                  Thanks, {name.split(" ")[0]} — we&apos;ve got your message and
                  will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full border-b border-stone-900/20 bg-transparent px-1 py-3 text-sm text-stone-950 outline-none focus:border-stone-950"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full border-b border-stone-900/20 bg-transparent px-1 py-3 text-sm text-stone-950 outline-none focus:border-stone-950"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-2 w-full resize-none border-b border-stone-900/20 bg-transparent px-1 py-3 text-sm text-stone-950 outline-none focus:border-stone-950"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-700">
                    Something went wrong — please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-stone-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-800 disabled:opacity-50"
                >
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
