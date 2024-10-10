import { cn } from '@/lib/utils'

import { BlockTitle } from '@/components/layout/main-title'

import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
} from 'react-icons/tb'

export default function Features({ className }: { className?: string }) {
  return (
    <section className={cn(className) + ' w-full'}>
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-4 px-4 sm:gap-y-24 sm:px-6 lg:px-8">
          <p className="text-balance text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"></p>
          <BlockTitle.Wrapper>
            {/* <BlockTitle.Header elementType="h2">Features</BlockTitle.Header> */}

            <BlockTitle.Title elementType="h3">
              How to Use an AI Disney Filter
            </BlockTitle.Title>

            {/* <BlockTitle.Description>
              Our features are designed to enhance your productivity and
              streamline your workflow.
            </BlockTitle.Description> */}

            {/* <BlockTitle.Background /> */}

            <BlockTitle.Separator className="mt-4" />
          </BlockTitle.Wrapper>
          <div className="mx-auto w-full max-w-full space-y-4">
            <div className="grid-row grid animate-fade-up gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <div className="rounded-full p-2">
                  <TbCircleNumber1Filled className="mb-2 size-8" />
                </div>
                <h2 className="text-xl font-bold">Upload a Photo</h2>
                <p className="text-center">
                  Select a photo of yourself, a landscape, or your pet that you
                  want to apply filter to
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <div className="rounded-full p-2">
                  <TbCircleNumber2Filled className="mb-2 size-8" />
                </div>
                <h2 className="text-xl font-bold">Choose a Filter</h2>
                <p className="text-center">
                  Explore the diverse range of AI filters available and select
                  the filter or write a custom prompt to create your own filter
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <div className="rounded-full p-2">
                  <TbCircleNumber3Filled className="mb-2 size-8" />
                </div>
                <h2 className="text-xl font-bold">Generate and Download</h2>
                <p className="text-center">
                  Click on &quot;Generate&quot; to apply the filter. Download
                  the generated image to the device
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
