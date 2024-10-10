import Image from 'next/image'
import Link from 'next/link'

import { siteConfig } from '@/config/site'

import { cn } from '@/lib/utils'

import { AvatarsGroup } from '@/components/ui/avatar-group'
import { buttonVariants } from '@/components/ui/button'
import StarRating from '@/components/ui/star-rating'

import SparklesText from '@/components/magicui/sparkles-text'

export default function HeroRegular() {
  const twitterLink = siteConfig.social?.links?.twitter

  return (
    <section>
      <section className="space-y-6 pb-12 pt-16 lg:py-28">
        <div className="container relative flex max-w-5xl flex-col items-center gap-5 text-center">
          <div className="my-6 flex items-center justify-center rounded bg-black">
            <div className="relative">
              <div className="absolute -inset-1 rounded bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur"></div>
              {/* <Link
                href={twitterLink.href}
                className="relative flex rounded bg-black px-7 py-4 font-semibold text-white"
                target="_blank"
              >
                <div className="flex items-center">
                  Follow on <Icons.twitter className="ml-2 size-4" />
                </div>
              </Link> */}
              <Image
                src={'/disney_images/image .jpg'}
                className="relative flex rounded-2xl bg-black p-2 font-semibold text-white"
                alt="ccc"
                width={400}
                height={300}
              />
            </div>
          </div>

          <h1
            className="my-6 flex animate-fade-up text-balance font-urban text-5xl font-extrabold tracking-tight opacity-0 sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
          >
            Disney <SparklesText text="Filter" />
          </h1>

          <p
            className="mb-8 max-w-4xl animate-fade-up text-balance text-lg leading-normal text-muted-foreground opacity-0 sm:text-lg sm:leading-8"
            style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
          >
            Use AI Disney filter to turn selfies and pet photos into Disney
            characters online in no time.
          </p>

          <div
            className="z-50 flex animate-fade-up justify-center space-x-2 opacity-0 md:space-x-4"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <Link
              href="/pricing"
              className={cn(buttonVariants({ size: 'lg' }))}
            >
              Apply Disney Filter
            </Link>
          </div>
          <div className="mb-6 mt-4 flex flex-col items-center justify-center gap-2 md:flex-row">
            <div className="flex flex-col items-center">
              <AvatarsGroup />
            </div>
            <div className="flex flex-col items-center gap-1 md:items-start">
              <StarRating />
              <p className="text-sm font-medium">loved by 10,000+ users</p>
            </div>
          </div>
          {/* <div className="mx-auto my-6 flex w-full justify-center">
            <a
              href="https://www.producthunt.com/posts/next-saas-template?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-next&#0045;saas&#0045;template"
              target="_blank"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=464422&theme=light"
                alt="Next&#0032;SaaS&#0032;Template - Launching&#0032;your&#0032;SaaS&#0032;success&#0032;story | Product Hunt"
                style={{ width: '250px', height: '54px' }}
                width="250"
                height="54"
              />
            </a>
          </div> */}
          <div className="absolute inset-0 top-[calc(100%-16rem)] mx-auto h-10 max-w-xs bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600 blur-[118px] dark:from-rose-400 dark:via-fuchsia-500 dark:to-indigo-500"></div>
        </div>
      </section>
    </section>
  )
}
