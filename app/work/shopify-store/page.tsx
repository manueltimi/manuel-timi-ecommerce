
import Image from "next/image";

export default function ShopifyStoreCaseStudy() {
  return (
    <main className="min-h-screen bg-[#071C14] text-white">
      {/* Back */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <a
            href="/#work"
            className="text-sm text-white/50 transition hover:text-[#8CC9A9]"
          >
            ← Back to Work
          </a>
        </div>
      </section>

      {/* Hero */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#8CC9A9]">
              Shopify • Ecommerce • Design & Development
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              Pure Radiance
              <br />
              Beauty
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
              A conversion-focused Shopify ecommerce experience designed to
              create a stronger online presence, improve product discovery and
              make it easier for customers to shop.
            </p>
          </div>

          {/* Project Info */}
          <div className="mt-16 grid gap-6 border-y border-white/10 py-8 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                Client
              </p>
              <p className="mt-2 text-base text-white/80">
                Pure Radiance Beauty
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                Platform
              </p>
              <p className="mt-2 text-base text-white/80">Shopify</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                Services
              </p>
              <p className="mt-2 text-base text-white/80">
                Design • Development • Ecommerce
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Screenshot */}
      <section className="border-y border-white/10 bg-[#0B261B]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
            <Image
              src="/projects/pure-radiance-homepage.png"
              alt="Pure Radiance Beauty Shopify homepage"
              width={1600}
              height={1000}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#8CC9A9]">
                The challenge
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Turning an online store into a stronger customer experience.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-white/60">
              <p>
                Ecommerce customers make quick decisions. If a store feels
                unclear, difficult to navigate or visually inconsistent,
                potential customers can leave before discovering the products.
              </p>

              <p>
                The goal was to create a cleaner, more modern ecommerce
                experience that presents the brand professionally while making
                the shopping journey easier for customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#8CC9A9]">
              The approach
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Designed around the customer journey.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <FeatureCard
              number="01"
              title="Clear Presentation"
              text="A cleaner visual structure helps customers understand the brand and products quickly."
            />

            <FeatureCard
              number="02"
              title="Better Product Discovery"
              text="Product-focused layouts make it easier for visitors to explore and find what they want."
            />

            <FeatureCard
              number="03"
              title="Conversion Focus"
              text="The experience was structured around reducing friction between discovering a product and making a purchase."
            />
          </div>
        </div>
      </section>

      {/* Product Screenshot */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#8CC9A9]">
                Product experience
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Product pages built to help customers decide.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/60">
                Product pages are one of the most important parts of an
                ecommerce store. The experience needs to communicate what the
                product is, why it matters and give customers a clear path
                toward purchase.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <Image
                src="/projects/pure-radiance-product.png"
                alt="Pure Radiance Beauty Shopify product page"
                width={1600}
                height={1000}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Execution */}
      <section className="border-y border-white/10 bg-[#0B261B]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#8CC9A9]">
              What I worked on
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              From storefront design to ecommerce experience.
            </h2>
          </div>

          <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            <WorkItem
              title="Shopify Development"
              text="Store structure, theme implementation and ecommerce functionality."
            />

            <WorkItem
              title="UI / UX Design"
              text="A cleaner visual hierarchy and customer-focused shopping experience."
            />

            <WorkItem
              title="Product Pages"
              text="Product presentation structured to support browsing and purchase decisions."
            />

            <WorkItem
              title="Mobile Experience"
              text="Responsive layouts designed to work across different screen sizes."
            />

            <WorkItem
              title="Conversion Optimization"
              text="Reducing unnecessary friction throughout the customer journey."
            />

            <WorkItem
              title="Ecommerce Strategy"
              text="Design decisions aligned with the broader goal of generating sales."
            />
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8 lg:py-32">
          <p className="text-sm uppercase tracking-[0.25em] text-[#8CC9A9]">
            The outcome
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            Not just a stronger digital storefront for the brand but a conversion and revenue making machine.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/40">
            The result is consistent revenue inflow from a more polished Shopify experience designed to
            communicate the brand more effectively, showcase products clearly
            and provide customers with a smoother path from discovery to
            purchase.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8 lg:py-40">
          <p className="text-sm uppercase tracking-[0.25em] text-white/40">
            Have a store that needs work?
          </p>

          <h2 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
            Let&apos;s build a
            <br />
            better store.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/50">
            Whether you need a new Shopify store, a redesign or help improving
            your ecommerce conversion rate, let&apos;s talk.
          </p>

          <a
            href="/#contact"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-white/80"
          >
            Start a Project
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Manuel Timi. All rights reserved.</p>

          <a
            href="/"
            className="transition hover:text-white"
          >
            Back to portfolio →
          </a>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
      <p className="text-sm text-white/30">{number}</p>

      <h3 className="mt-16 text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-white/50">
        {text}
      </p>
    </div>
  );
}

function WorkItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="border-t border-white/10 pt-6">
      <h3 className="text-xl font-medium">{title}</h3>

      <p className="mt-3 leading-7 text-white/50">
        {text}
      </p>
    </div>
  );
}

