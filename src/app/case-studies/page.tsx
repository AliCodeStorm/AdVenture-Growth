
import SectionWrapper from '@/components/shared/SectionWrapper';
import CaseStudyCard from '@/components/shared/CaseStudyCard';
import { CASE_STUDIES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Case Studies - AdVenture Growth',
  description: 'Explore successful case studies showcasing our expertise in digital marketing and achieving client goals.',
};

const faqs = [
  {
    id: "faq-1",
    question: "What kind of results can I expect?",
    answer: "Results vary based on your industry, budget, and goals. However, our case studies demonstrate our ability to significantly improve key metrics like ROAS, lead generation, and conversion rates. We focus on achieving measurable growth tailored to your specific needs."
  },
  {
    id: "faq-2",
    question: "How long does it take to see results from your marketing campaigns?",
    answer: "While some strategies can yield quick wins within a few weeks, sustainable, long-term growth typically takes a few months to materialize. We prioritize building a strong foundation and continuously optimizing for the best outcomes."
  },
  {
    id: "faq-3",
    question: "Do you work with businesses of all sizes?",
    answer: "Yes, we have experience working with a diverse range of clients, from startups and small local businesses to larger enterprises. Our strategies are adaptable to different budgets and market challenges."
  },
  {
    id: "faq-4",
    question: "How do you measure the success of a campaign?",
    answer: "We define clear KPIs (Key Performance Indicators) at the outset, aligned with your business objectives. Success is measured through data analytics, tracking metrics like conversion rates, cost per acquisition, return on ad spend, website traffic, and engagement. We provide regular, transparent reporting."
  },
  {
    id: "faq-5",
    question: "What makes AdVenture Growth different from other marketing agencies?",
    answer: "Our core differentiator is our personalized, data-driven approach combined with a deep commitment to client success. We don't offer one-size-fits-all solutions. Instead, we act as a dedicated partner, focusing on transparency, continuous learning, and achieving tangible results that contribute to your bottom line."
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <SectionWrapper>
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-primary">Our Success Stories</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dive into detailed accounts of how we've partnered with businesses to overcome challenges and achieve outstanding results. Each case study highlights our strategic approach and commitment to client success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 xl:gap-12">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

        {CASE_STUDIES.length === 0 && (
          <p className="text-center text-muted-foreground text-lg mt-12">
            We are currently compiling our latest success stories. Please check back soon!
          </p>
        )}
        
        <div className="text-center mt-16">
          <Button asChild variant="secondary" size="lg" className="shadow-lg hover:shadow-xl transform transition-all hover:scale-105">
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper id="faq" className="bg-muted/30">
        <div className="text-center mb-12">
          <HelpCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services and approach.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem value={faq.id} key={faq.id}>
                <AccordionTrigger className="text-lg text-left hover:no-underline font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionWrapper>
    </>
  );
}
