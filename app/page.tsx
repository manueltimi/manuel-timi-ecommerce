
export default function Home() {
  return (
    <main className="min-h-screen bg-[#071C14] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-[#071C14]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="text-lg font-semibold tracking-tight">
            MANUEL TIMI
          </div>

          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#process" className="transition hover:text-white">
              Process
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-[#1F6B49]/60 bg-[#1F6B49]/10 px-5 py-2.5 text-sm font-medium text-[#8CC9A9] transition hover:bg-[#1F6B49] hover:text-white"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-8 lg:pb-32 lg:pt-32">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-white/50">
             Web Design • Shopify • Ecommerce • Digital Growth
            </p>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
  We build digital
  <br />
  experiences that
  <br />
  <span className="text-white/40">move businesses forward.</span>
</h1>

<p className="mt-8 max-w-2xl text-lg leading-8 text-white/50 sm:text-xl">
  Websites, Shopify stores and digital growth solutions designed to make
  businesses look credible, attract customers and turn attention into revenue.
</p>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
              We design, build and optimize Shopify stores and ecommerce & business 
              websites that turn visitors into customers and businesses into
              brands.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-black transition hover:bg-white/80"
              >
                Start a Project
              </a>

              <a
                href="#audit"
                className="rounded-full bg-[#1F6B49] px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#4FAF7B]"
              >
                Get a Free Store Audit
              </a>
            </div>
          </div>
        </div>

        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      </section>

      {/* Trust */}
      <section className="border-y border-white/10">
        <div className="grid grid-cols-2 border-y border-white/10 sm:grid-cols-4">
  <div className="border-r border-white/10 px-6 py-8 sm:px-8">
    <p className="text-2xl font-semibold text-white">Web</p>
    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/35">
      Design & Development
    </p>
  </div>

  <div className="border-r border-white/10 px-6 py-8 sm:px-8">
    <p className="text-2xl font-semibold text-white">Shopify</p>
    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/35">
      Ecommerce
    </p>
  </div>

  <div className="border-r border-white/10 px-6 py-8 sm:px-8">
    <p className="text-2xl font-semibold text-white">Creative</p>
    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/35">
      Branding & Product Design
    </p>
  </div>

  <div className="px-6 py-8 sm:px-8">
    <p className="text-2xl font-semibold text-white">Growth</p>
    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/35">
      Marketing & Conversion
    </p>
  </div>
</div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-white/40">
            What we do
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
  Digital experiences
  <br />
  built for growth.
</h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
  <ServiceCard
  number="01"
  title="Web Design & Development"
  description="Strategic websites designed to communicate your value, build trust and turn visitors into customers."
/>

<ServiceCard
  number="02"
  title="Shopify & Ecommerce"
  description="High-converting Shopify stores, redesigns, product experiences and ecommerce systems built around your customers."
/>

<ServiceCard
  number="03"
  title="Branding & Creative"
  description="Visual identities, product creatives, graphics and digital assets that make your business look consistent and professional."
/>

<ServiceCard
  number="04"
  title="Marketing & Growth"
  description="Digital marketing, advertising and conversion-focused strategies designed to attract the right customers and grow your business."
/>
</div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                Selected work
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                Built for brands
                <br />
                that want to grow.
              </h2>
            </div>

            
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
           <ProjectCard
  title="Pure Radiance Beauty"
  category="Shopify • Ecommerce • Design & Development"
  description="A Shopify ecommerce experience built for a beauty brand, with a focus on product discovery, collection structure, customer trust and a smoother path to purchase."
/>

            <ProjectCard
            title="Ecommerce Brand"
            category="Website & Growth"
            description="A modern ecommerce experience focused on brand presentation, customer trust and a smoother path from discovery to purchase."
          />
          </div>
        </div>
      </section>
      
      {/* Why Manuel */}
      <section className="border-y border-white/10 bg-[#0B261B]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            
            {/* Heading */}
            <div className="lg:sticky lg:top-32">
              <p className="text-sm uppercase tracking-[0.25em] text-[#4FAF7B]">
                Why work with me
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Not just a
                <br />
                website.
                <br />
                <span className="text-[#8CC9A9]">
                  A growth partner.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-lg leading-8 text-white/50">
                Your website should do more than look good. It should
                communicate your value, build trust and help move your
                business forward.
              </p>
            </div>

            {/* Reasons */}
            <div className="divide-y divide-white/10 border-y border-white/10">
              
              <WhyCard
                number="01"
                title="Business-first thinking"
                description="I don't start with colors, layouts or animations. I start by understanding your business, your customers and what you need the website to achieve."
              />

              <WhyCard
                number="02"
                title="Design + Development"
                description="You get both the strategy and the execution. I design experiences that look professional and build them into fast, responsive websites that work."
              />

              <WhyCard
                number="03"
                title="Ecommerce expertise"
                description="For Shopify and ecommerce brands, I think beyond the homepage — product discovery, trust, conversion, mobile experience and the customer journey all matter."
              />

              <WhyCard
                number="04"
                title="Built for growth"
                description="Your digital presence should be able to evolve with your business. I build with marketing, conversion and future growth in mind."
              />

            </div>
          </div>
        </div>
      </section>


      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-white/40">
            Our process
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            From idea to growth.
          </h2>
        </div>

        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          <ProcessItem number="01" title="Discover" text="We understand your business, customers and goals." />
          <ProcessItem number="02" title="Design" text="We create an experience around your brand and customers." />
          <ProcessItem number="03" title="Build" text="We develop, integrate and optimize your ecommerce website." />
          <ProcessItem number="04" title="Launch" text="We test everything and get your store ready for customers." />
          <ProcessItem number="05" title="Grow" text="We continuously optimize your digital presence for growth." />
        </div>
      </section>

{/* Audit */}
<section id="audit" className="border-y border-white/10 bg-white/[0.03]">
  <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8 lg:py-32">
    <p className="text-sm uppercase tracking-[0.25em] text-white/40">
      Free store audit
    </p>

    <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
      What&apos;s costing your store sales?
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/50">
      I&apos;ll review your store across design, mobile experience, product
      pages, trust, conversion flow and customer experience — then show you
      the biggest opportunities to improve your sales.
    </p>

    <a
      href="mailto:marketingwithmanuel@gmail.com?subject=Free%20Store%20Audit"
      className="mt-10 inline-block rounded-full bg-[#1F6B49] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#4FAF7B]"
    >
      Get My Free Audit
    </a>
  </div>
</section>

{/* About */}
<section id="about" className="border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
    <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

      {/* Profile Visual */}
      <div className="relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B261B]">
          <img
            src="/images/manuel-profile.png"
            alt="Manuel Timi"
            className="h-full w-full object-cover object-top"
          />
        </div>

        <p className="mt-8 text-sm font-medium uppercase tracking-[0.3em] text-white/40">
          Manuel Timi
        </p>

        <p className="mt-2 text-sm text-white/30">
          Web • Shopify • Ecommerce • Growth
        </p>

       
      </div>

      {/* About Content */}
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-[#4FAF7B]">
          About Manuel
        </p>

        <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          I build digital
          <br />
          experiences that
          <br />
          <span className="text-[#8CC9A9]">help businesses grow.</span>
        </h2>

        <div className="mt-8 max-w-xl space-y-5 text-lg leading-8 text-white/55">
          <p>
            I&apos;m Manuel Timi, a web developer, Shopify and ecommerce
            specialist focused on helping businesses build a stronger online
            presence.
          </p>

          <p>
            I combine web design, development, ecommerce strategy and digital
            marketing to create experiences that are not only visually
            professional, but built around real business goals.
          </p>

          <p>
            Whether you&apos;re launching a new business, redesigning an
            existing website or trying to turn your ecommerce store into a
            better sales channel, I approach every project with the bigger
            picture in mind.
          </p>
        </div>

        {/* Expertise */}
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-y border-white/10 py-8 sm:grid-cols-4">
          <div>
            <p className="text-lg font-semibold text-white">Web</p>
            <p className="mt-1 text-xs text-white/35">
              Design & Development
            </p>
          </div>

          <div>
            <p className="text-lg font-semibold text-white">Shopify</p>
            <p className="mt-1 text-xs text-white/35">
              Ecommerce
            </p>
          </div>

          <div>
            <p className="text-lg font-semibold text-white">Creative</p>
            <p className="mt-1 text-xs text-white/35">
              Branding
            </p>
          </div>

          <div>
            <p className="text-lg font-semibold text-white">Growth</p>
            <p className="mt-1 text-xs text-white/35">
              Marketing
            </p>
          </div>
        </div>

        <a
          href="#contact"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#8CC9A9] transition-all duration-300 hover:gap-4 hover:text-white"
        >
          Work with me
          <span>→</span>
        </a>
      </div>

    </div>
  </div>
</section>
          {/* Project Inquiry */}
<section id="contact" className="border-t border-white/10 bg-[#0B261B]">
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
    <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

      {/* Intro */}
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-[#4FAF7B]">
          Start a project
        </p>

        <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
          Let&apos;s build something
          <br />
          <span className="text-[#8CC9A9]">worth growing.</span>
        </h2>

        <p className="mt-6 max-w-md text-lg leading-8 text-white/50">
          Tell me about your business, what you&apos;re building and where you
          want to go. I&apos;ll get back to you and we&apos;ll take it from there.
        </p>

        <div className="mt-10 space-y-5">
          <a
            href="mailto:marketingwithmanuel@gmail.com"
            className="block text-sm text-white/50 transition hover:text-[#8CC9A9]"
          >
            marketingwithmanuel@gmail.com
          </a>

          <a
            href="https://wa.link/cswrei"
            className="block text-sm text-white/50 transition hover:text-[#8CC9A9]"
          >
            Chat with me on WhatsApp →
          </a>
        </div>
      </div>

      {/* Form */}
      <form
        action="https://formsubmit.co/marketingwithmanuel@gmail.com"
        method="POST"
        className="rounded-3xl border border-white/10 bg-[#071C14] p-6 sm:p-8"
      >
        <input
          type="hidden"
          name="_next"
          value="http://localhost:3000/thank-you"
        />

        <input
          type="hidden"
          name="_subject"
          value="New Project Inquiry — Manuel Timi"
        />

        <input
          type="hidden"
          name="_captcha"
          value="false"
        />

        <input
          type="hidden"
          name="_template"
          value="table"
        />

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="text-sm font-medium text-white/70"
          >
            Your name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            className="mt-3 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-[#1F6B49] focus:bg-[#1F6B49]/5"
          />
        </div>

        {/* Email */}
        <div className="mt-6">
          <label
            htmlFor="email"
            className="text-sm font-medium text-white/70"
          >
            Email address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="mt-3 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-[#1F6B49] focus:bg-[#1F6B49]/5"
          />
        </div>

        {/* Business */}
        <div className="mt-6">
          <label
            htmlFor="business"
            className="text-sm font-medium text-white/70"
          >
            Business / brand
          </label>

          <input
            id="business"
            name="business"
            type="text"
            placeholder="Your brand name"
            className="mt-3 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-[#1F6B49] focus:bg-[#1F6B49]/5"
          />
        </div>

        {/* Website */}
        <div className="mt-6">
          <label
            htmlFor="website"
            className="text-sm font-medium text-white/70"
          >
            Current website
          </label>

          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://yourwebsite.com"
            className="mt-3 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-[#1F6B49] focus:bg-[#1F6B49]/5"
          />
        </div>

        {/* Service */}
        <div className="mt-6">
          <label
            htmlFor="service"
            className="text-sm font-medium text-white/70"
          >
            What do you need help with?
          </label>

          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="mt-3 w-full rounded-2xl border border-white/10 bg-[#0B261B] px-5 py-4 text-sm text-white outline-none transition focus:border-[#1F6B49]"
          >
            <option value="" disabled>
              Select a service
            </option>

            <option value="Website Design">
              Website Design
            </option>

            <option value="Shopify">
              Shopify
            </option>

            <option value="Ecommerce">
              Ecommerce
            </option>

            <option value="Marketing & Growth">
              Marketing & Growth
            </option>

            <option value="Other">
              Something else
            </option>
          </select>
        </div>

        {/* Budget */}
        <div className="mt-6">
          <label
            htmlFor="budget"
            className="text-sm font-medium text-white/70"
          >
            Estimated budget
          </label>

          <select
            id="budget"
            name="budget"
            defaultValue=""
            className="mt-3 w-full rounded-2xl border border-white/10 bg-[#0B261B] px-5 py-4 text-sm text-white outline-none transition focus:border-[#1F6B49]"
          >
            <option value="" disabled>
              Select a range
            </option>

            <option value="Under $500">
              Under $500
            </option>

            <option value="$500 - $1,000">
              $500 - $1,000
            </option>

            <option value="$1,000 - $2,500">
              $1,000 - $2,500
            </option>

            <option value="$2,500 - $5,000">
              $2,500 - $5,000
            </option>

            <option value="$5,000+">
              $5,000+
            </option>
          </select>
        </div>

        {/* Message */}
        <div className="mt-6">
          <label
            htmlFor="message"
            className="text-sm font-medium text-white/70"
          >
            Tell me about the project
          </label>

          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="What are you building? What challenges are you facing? What would success look like?"
            className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-7 text-white outline-none placeholder:text-white/20 transition focus:border-[#1F6B49] focus:bg-[#1F6B49]/5"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-8 w-full rounded-full bg-[#1F6B49] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#4FAF7B]"
        >
          Send Project Inquiry →
        </button>

        <p className="mt-4 text-center text-xs text-white/30">
          I&apos;ll review your inquiry and get back to you.
        </p>
      </form>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#030605]">
  <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
    
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
      
      {/* Brand */}
      <div className="lg:col-span-2">
        <p className="text-lg font-semibold tracking-tight text-white">
          MANUEL TIMI
        </p>

        <p className="mt-5 max-w-md text-sm leading-7 text-white/40">
          Websites, Shopify, ecommerce and digital growth solutions for
          businesses ready to build a stronger online presence.
        </p>
      </div>

      {/* Navigation */}
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
          Explore
        </p>

        <div className="mt-5 flex flex-col gap-3 text-sm text-white/50">
          <a href="#services" className="transition hover:text-[#8CC9A9]">
            Services
          </a>

          <a href="#work" className="transition hover:text-[#8CC9A9]">
            Work
          </a>

          <a href="#process" className="transition hover:text-[#8CC9A9]">
            Process
          </a>

          <a href="#about" className="transition hover:text-[#8CC9A9]">
            About
          </a>
        </div>
      </div>

      {/* Contact */}
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
          Connect
        </p>

        <div className="mt-5 flex flex-col gap-3 text-sm text-white/50">
          <a
            href="mailto:marketingwithmanuel@gmail.com"
            className="transition hover:text-[#8CC9A9]"
          >
            Email
          </a>

          <a
            href="https://wa.link/cswrei"
            className="transition hover:text-[#8CC9A9]"
          >
            WhatsApp
          </a>

          <a
            href="https://instagram.com/the.manueltimi"
            className="transition hover:text-[#8CC9A9]"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} Manuel Timi. All rights reserved.
      </p>

      <p>
        Websites • Shopify • Ecommerce • Marketing
      </p>
    </div>
  </div>
</footer>
    </main>
  );
}

function ServiceCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B261B] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#1F6B49]/60 hover:bg-[#0F2119]">
      
      {/* Green glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#1F6B49]/10 blur-3xl transition-all duration-500 group-hover:bg-[#1F6B49]/20" />

      <div className="relative z-10">
        
        {/* Number + Arrow */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium tracking-[0.2em] text-[#1F6B49]">
            {number}
          </span>

          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 group-hover:border-[#1F6B49] group-hover:bg-[#123D2B] group-hover:text-white">
            →
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-16 text-3xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-[#8CC9A9]">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-5 max-w-md text-base leading-7 text-white/50">
          {description}
        </p>

        {/* Bottom link */}
        <div className="mt-10 flex items-center gap-2 text-sm font-medium text-white/60 transition-all duration-300 group-hover:gap-4 group-hover:text-[#8CC9A9]">
          Explore service
          <span>→</span>
        </div>
      </div>
    </div>
  );
}
  
function ProjectCard({
  title,
  category,
  description,
}: {
  title: string;
  category: string;
  description: string;
}) {
  return (
    <div className="group">
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-[#0B261B] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#1F6B49]/60">
        
                {/* Project Image */}
        <img
          src={
            title === "Pure Radiance Beauty"
              ? "/projects/pure-radiance-homepage.png"
              : "/projects/ecommerce-brand.png.jpeg"
          }
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />

        {/* Floating arrow */}
        <div className="absolute bottom-7 right-7 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#071C14] text-lg text-white transition-all duration-300 group-hover:border-[#4FAF7B] group-hover:bg-[#1F6B49]">
          ↗
        </div>
      </div>

      {/* Project information */}
      <div className="mt-6">
  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#4FAF7B]">
    {category}
  </p>

  <div className="flex items-start justify-between gap-6">
    <div>
      <h3 className="text-2xl font-semibold tracking-tight text-white">
        {title}
      </h3>

      <p className="mt-3 max-w-lg text-sm leading-6 text-white/45">
        {description}
      </p>
    </div>

    <a
  href="/work/shopify-store"
  className="shrink-0 pt-1 text-sm text-white/30 transition hover:text-[#8CC9A9] group-hover:text-white/70"
>
  View project →
</a>
  </div>
</div>
    
    </div>
  );
}

function ProcessItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group grid gap-6 py-10 md:grid-cols-[80px_220px_1fr] md:items-center">
      
      {/* Number */}
      <div>
        <span className="text-sm font-medium tracking-[0.2em] text-[#4FAF7B]">
          {number}
        </span>
      </div>

      {/* Title */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-[#8CC9A9]">
          {title}
        </h3>
      </div>

      {/* Description */}
      <div className="flex items-center justify-between gap-6">
        <p className="max-w-xl text-base leading-7 text-white/45 transition-colors duration-300 group-hover:text-white/65">
          {text}
        </p>

        <span className="hidden text-xl text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#4FAF7B] md:block">
          →
        </span>
      </div>
    </div>
  );
}

function WhyCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group py-8 first:pt-10 last:pb-10">
      <div className="flex gap-6">
        <span className="pt-1 text-sm font-medium tracking-[0.2em] text-[#4FAF7B]">
          {number}
        </span>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-6">
            <h3 className="text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-[#8CC9A9] sm:text-3xl">
              {title}
            </h3>

            <span className="hidden text-xl text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#4FAF7B] sm:block">
              ↗
            </span>
          </div>

          <p className="mt-4 max-w-xl text-base leading-7 text-white/45 transition-colors duration-300 group-hover:text-white/65">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

