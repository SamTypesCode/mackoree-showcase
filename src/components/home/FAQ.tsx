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
    question: "How long will my project take?",
    answer:
      "It depends on how complex your project is. Smaller animations can be done in a few days, while more detailed or story-based ones may take around 2-3 weeks.",
  },
  {
    question: "How much will it cost?",
    answer:
      "The cost depends on your project’s style, length, and details. Once you share your idea with us, we’ll give you a clear and fair price before starting.",
  },
  {
    question:
      "Do you handle full creative work, script, animation, sound, etc.?",
    answer:
      "Yes, we manage the entire process from start to finish, including script, modeling, animation, lighting, music, and final editing.",
  },
  {
    question: "How can I start a project with you?",
    answer:
      "You can start by submitting your email through our website. We’ll reach out to discuss your idea and begin once everything’s confirmed.",
  },
  {
    question: "Do you support long-term projects or partnerships?",
    answer:
      "Yes, we enjoy working with brands and agencies on long-term projects and ongoing content creation. We value consistent creative partnerships.",
  },
  {
    question: "Can I get source files for future use?",
    answer:
      "Yes, if you need the source project files, we can share them with you for an additional charge once the project is complete.",
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
