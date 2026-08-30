import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-[#f5efe6] px-6 py-24 lg:px-10 lg:py-32"
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
                href="https://www.instagram.com/noma/"
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
            <form className="flex flex-col gap-6">
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
                  className="mt-2 w-full resize-none border-b border-stone-900/20 bg-transparent px-1 py-3 text-sm text-stone-950 outline-none focus:border-stone-950"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-stone-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-800"
              >
                Send Message
              </button>
            </form>

            <div className="mt-12 flex flex-col gap-1 border-t border-stone-950/10 pt-6 text-sm text-stone-600">
              <span>hello@noma.co.za</span>
              <span>Roasted and fulfilled in Dublin, Ireland</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
