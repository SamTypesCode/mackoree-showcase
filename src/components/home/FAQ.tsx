import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FAQType {
  question: string;
  answer: string | string[];
}

const FAQs: FAQType[] = [
  {
    question: "Getting Started",
    answer:
      "Discover the fundamental concepts of Motion-Primitives. This section guides you through installation and provides an overview of integrating these components into your projects.",
  },
  {
    question: "Animation Properties",
    answer:
      "Explore the range of animation properties available. Learn how to manipulate timing, easing, and delays to create smooth, dynamic animations.",
  },
  {
    question: "Advanced Usage",
    answer:
      "Dive deeper into advanced techniques: chaining animations, creating complex sequences, and utilizing motion sensors for interactive animations.",
  },
  {
    question: "Community and Support",
    answer:
      "Engage with the Motion-Primitives community to gain support. Participate in discussions, contribute to the project, and access shared resources.",
  },
  {
    question: "Troubleshooting",
    answer:
      "Learn how to debug common issues and errors that arise when using Motion-Primitives. Tips include checking configuration, reviewing docs, and testing animations step by step.",
  },
  {
    question: "Future Updates",
    answer:
      "Stay informed about upcoming features and improvements. Understand the roadmap and how new functionalities will enhance the library.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="w-full pt-16 pb-24 max-md:py-16">
      <div className="max-w-[1440px] mx-auto px-12 max-md:px-5">
        <h2 className="mx-auto mb-9 max-md:mb-6 text-[54px] max-md:text-3xl text-center font-medium max-w-lg md:leading-[60px]">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto w-full max-w-[662px] flex flex-col items-center">
          <Accordion
            className="flex w-full flex-col border-y border-zinc-200 divide-y divide-zinc-200"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {FAQs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="py-2">
                <AccordionTrigger className="w-full text-left text-zinc-950 flex justify-between items-center py-3">
                  <span className="text-lg md:text-xl font-medium">
                    {faq.question}
                  </span>
                  <div className="w-[30px] h-[30px] rounded-full bg-neutral-200 flex items-center justify-center">
                    <Plus className="w-4 h-4 group-data-expanded:hidden" />
                    <Minus className="w-4 h-4 hidden group-data-expanded:block" />
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-zinc-500 leading-relaxed pb-3">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-7 flex justify-center w-full">
            <a href="#contact-us">
              <Button className="text-[0.73rem] font-medium rounded-full bg-black text-white py-[21px] px-6">
                NEED HELP? CONTACT US!
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
