import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/shared/SectionWrapper';
import IconDisplayCard from '@/components/shared/IconDisplayCard';
import { EXPERTISE_ITEMS, CASE_STUDIES } from '@/lib/constants';
import { ArrowRight, Facebook, Dribbble, Pin, Linkedin, LayoutGrid } from 'lucide-react';
import CaseStudyCard from '@/components/shared/CaseStudyCard';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-br from-primary/5 via-background to-accent/10 !pt-15 md:!pt-20 lg:!pt-30 !pb-10 md:!pb-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Elevate Your Brand with <span className="text-primary">Data-Driven</span> Marketing
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              At AdVenture Growth, we specialize in crafting bespoke marketing strategies that deliver measurable results. From targeted ad campaigns to in-depth analytics, we unlock your business's full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transform transition-all hover:scale-105">
                <Link href="/contact">Let's Work Together</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary shadow-lg hover:shadow-xl transform transition-all hover:scale-105">
                <Link href="/services">Explore Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative aspect-square">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Marketing strategy illustration"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
              data-ai-hint="marketing analytics"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Expertise Section */}
      <SectionWrapper id="expertise">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Our Core Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We excel in the key areas that drive growth and maximize your return on investment.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERTISE_ITEMS.map((item) => (
            <IconDisplayCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              iconColorClassName={item.id === 'roas-achievements' ? 'text-secondary' : 'text-primary'}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Coming Soon Section */}
      <SectionWrapper id="coming-soon">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Coming Soon......</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay tuned for more updates and exciting content! Follow us on social media.
          </p>
        </div>
        <div className="flex justify-center flex-wrap md:gap-16 gap-6 items-center mb-6">
          <a href="#" aria-label="Facebook" className="text-primary hover:scale-110 transition">
            <Facebook className="w-8 h-8" />
          </a>
          <a href="#" aria-label="Dribbble" className="text-secondary hover:scale-110 transition">
            <Dribbble className="w-8 h-8" />
          </a>
          <a href="#" aria-label="Pinterest" className="text-destructive hover:scale-110 transition">
            <Pin className="w-8 h-8" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-primary hover:scale-110 transition">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="#" aria-label="Behance" className="text-secondary hover:scale-110 transition">
            <LayoutGrid className="w-8 h-8" />
          </a>
        </div>
      </SectionWrapper>

      {/* Featured Case Studies Section */}
      <SectionWrapper id="featured-case-studies" className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Latest Projects Showcase</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses like yours achieve remarkable results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {CASE_STUDIES.slice(0, 2).map((study) => ( // Show first 2 case studies
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary shadow-lg hover:shadow-xl transform transition-all hover:scale-105">
            <Link href="/case-studies">View All Case Studies <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* Call to Action Section */}
      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-lg mb-8">
            Let's discuss your goals and how AdVenture Growth can help you achieve them. Schedule a free consultation today!
          </p>
          <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90 font-semibold shadow-lg hover:shadow-xl transform transition-all hover:scale-105">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
