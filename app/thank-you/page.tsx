export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#071C14] px-6 text-white">
      <div className="w-full max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-[#4FAF7B]">
          Inquiry received
        </p>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
          Thank you.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/50">
          Your project inquiry has been received. I&apos;ll review the details
          and get back to you as soon as possible.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/"
            className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-white/80"
          >
            Back to Website
          </a>

          <a
            href="https://wa.link/cswrei"
            className="rounded-full border border-[#1F6B49]/60 bg-[#1F6B49]/10 px-7 py-4 text-sm font-semibold text-[#8CC9A9] transition hover:bg-[#1F6B49] hover:text-white"
          >
            Chat on WhatsApp →
          </a>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-xs uppercase tracking-[0.2em] text-white/30">
            MANUEL TIMI
          </p>
          <p className="mt-2 text-sm text-white/30">
            Websites • Shopify • Ecommerce • Marketing
          </p>
        </div>
      </div>
    </main>
  );
}