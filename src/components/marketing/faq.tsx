import { cn } from '@/lib/utils'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type FAQProps = {
  className?: string
}

const pricingFaqData = [
  {
    id: 'item-1',
    question: 'Is there a filter that makes you look like a Disney princess? ',
    answer:
      'Yes, the LightX Pixar filter makes you look like a Disney princess. Disney filter is designed to transform your photos into a magical and enchanting Disney princess-like aesthetic.',
  },
  {
    id: 'item-2',
    question: 'What is the best Disney princess filter?',
    answer:
      'LightX Disney princess filter is one of the best Disney face filters to transform yourself into a princess. Whether you aspire to be Cinderella, Belle, Ariel, or any other beloved Disney Princess, LightX can transform into a Disney cartoon eyes filter or Disney photo effects to achieve that enchanting look.',
  },
  {
    id: 'item-3',
    question: 'How to add a Disney boyfriend filter?',
    answer:
      "Using the LightX Pixar cartoon filter is a fun and creative way to transform your boyfriend's picture into a Disney prince filter.  It adds a touch of enchantment to his features, making him look like a Disney boyfriend. So, simply apply the LightX Disney photo filter to his picture and watch as he becomes the prince or Disney boyfriend.",
  },
  {
    id: 'item-4',
    question: 'What is the filter that makes you look like a Disney character?',
    answer:
      "LightX Disney photo filter transforms your appearance to resemble a Disney character. This filter magically alters your features and adds a touch of Disney magic to your selfies, making you look like you've stepped right out of a Disney animated movie.",
  },
  {
    id: 'item-5',
    question: 'How do you turn a picture into a Disney cartoon filter?',
    answer:
      'You can easily transform any picture into a Disney-themed masterpiece using the LightX Disney filter. LightX Disney cartoon eyes filter works like magic, taking your ordinary photos and giving them that iconic Disney cartoon charm.',
  },
  {
    id: 'item-6',
    question: 'How do I add Winnie the Pooh filter? ',
    answer:
      "LightX can effortlessly give your photo a Winnie the Pooh makeover. Whether you want to add Pooh's signature red shirt, honey pot, or other iconic elements, the LightX Disney cartoon filter provides the features to make your photo transformation a delightful and memorable one.",
  },
  {
    id: 'item-7',
    question: 'How do you transform your pictures into a Mickey Mouse filter?',
    answer:
      'Using LightX Disney Filter you can easily transform your pictures into a mickey mouse. LightX Disney photo effects automatically transform the backgrounds and add iconic Mickey Mouse elements to your photos. ',
  },
]

export default function FAQ({ className }: FAQProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn('w-full text-left ' + className)}
    >
      {pricingFaqData.map((faqItem) => (
        <AccordionItem key={faqItem.id} value={faqItem.id}>
          <AccordionTrigger>{faqItem.question}</AccordionTrigger>
          <AccordionContent>{faqItem.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
