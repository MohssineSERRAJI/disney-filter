import HeroRegular from '@/components/hero/hero-regular'
import { BlockTitle } from '@/components/layout/main-title'
import FAQ from '@/components/marketing/faq'
import Features from '@/components/marketing/features'
import PlansMarketing from '@/components/marketing/plans'

export default async function IndexPage() {
  return (
    <>
      <HeroRegular />
      {/* <section
        className="animate-fade-up bg-gray-50 py-8 text-zinc-500 opacity-0 dark:bg-black dark:text-zinc-700 dark:opacity-50"
        style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}
      >
        <div className="container mx-auto">
          <h2 className="mb-6 text-center text-sm font-semibold uppercase">
            Trusted by
          </h2>

          <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-10 gap-y-8 lg:max-w-6xl lg:gap-14">
            <CarouselLogos />
          </div>
        </div>
      </section> */}
      <Features className="my-0 mb-24" />
      {/* <BentoGrid className="mb-36" /> */}
      <section className="mb-36">
        <BlockTitle.Wrapper className="mb-36">
          <BlockTitle.Header elementType="h1">
            Card Pricing table
          </BlockTitle.Header>
          <BlockTitle.Title elementType="h2">
            One card for all your needs
          </BlockTitle.Title>
          <BlockTitle.Description>
            Pariatur laborum dolor ea commodo sit aute aliquip qui et cillum
            excepteur.
          </BlockTitle.Description>
          <BlockTitle.Background />
        </BlockTitle.Wrapper>
        <PlansMarketing />
      </section>
      {/* <section className="mb-36">
        <BlockTitle.Wrapper className="mb-20">
          <BlockTitle.Header elementType="h1">Testimonial</BlockTitle.Header>
          <BlockTitle.Title elementType="h2">
            See what our customers are saying
          </BlockTitle.Title>
          <BlockTitle.Background />
        </BlockTitle.Wrapper>
        <TestimonialCards testimonials={testimonialsData} />
      </section> */}
      {/* <Powered />
      <LatestFromBlog />
      <CtaSocialMedia /> */}
      <section className="mx-auto flex w-full flex-col p-6 md:w-10/12 md:py-40 lg:max-w-4xl">
        <div className="container mx-auto text-center">
          <BlockTitle.Wrapper className="mb-10">
            <BlockTitle.Header elementType="h1">FAQ</BlockTitle.Header>

            <BlockTitle.Title elementType="h2">
              Freequently Asked Questions
            </BlockTitle.Title>

            <BlockTitle.Description>
              Explore our comprehensive FAQ to find quick answers to common
              inquiries. If you need further assistance, don&apos;t hesitate to
              contact us for personalized help.
            </BlockTitle.Description>

            <BlockTitle.Background />

            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
          <FAQ />
        </div>
      </section>

      {/* <CtaSubscribe /> */}
    </>
  )
}
