
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, DollarSign, Target, TrendingUp, Mail, Instagram, Megaphone, Pin, FileText, Youtube, Code, Brain, Users, Lightbulb } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Muhammad Noman - AdVenture Growth',
  description: 'Learn more about Muhammad Noman, a passionate Digital Marketer specializing in Google Ads, Meta Ads, and data-driven strategies.',
};

const skills = [
  { name: 'Google Ads', icon: Megaphone, category: 'PPC Advertising' },
  { name: 'Meta Ads (Facebook & Instagram)', icon: Instagram, category: 'Social Media Marketing' },
  { name: 'Data Analytics', icon: Brain, category: 'Strategy & Insights' },
  { name: 'ROAS Optimization', icon: TrendingUp, category: 'Performance Marketing' },
  { name: 'Email Campaigns', icon: Mail, category: 'Direct Marketing' },
  { name: 'Pinterest Strategy', icon: Pin, category: 'Social Media Marketing' },
  { name: 'Content Marketing', icon: FileText, category: 'Content Strategy' },
  { name: 'Video Marketing', icon: Youtube, category: 'Content Strategy' },
  { name: 'Web Development', icon: Code, category: 'Technical Skills' },
];

const achievements = [
  { metric: '3+ Years Experience', value: '', icon: Briefcase, color: 'text-primary' },
  { metric: '$500,000+ Ad Spend Managed', value: '', icon: DollarSign, color: 'text-green-500' },
  { metric: '3x-5x ROAS Achieved', value: '', icon: Target, color: 'text-secondary' },
];

export default function AboutPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary/5 via-background to-accent/10 pt-20 pb-16">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <Avatar className="w-40 h-40 mb-6 border-4 border-primary shadow-lg">
              <AvatarImage src="https://placehold.co/300x300.png" alt="Muhammad Noman" data-ai-hint="professional portrait" />
              <AvatarFallback>MN</AvatarFallback>
            </Avatar>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
              Muhammad Noman
            </h1>
            <p className="text-2xl text-primary font-semibold mb-6">
              Passionate Digital Marketer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I'm dedicated to helping businesses grow through smart, data-driven strategies that deliver actual results. With a strong focus on Google Ads, Meta Ads, and Data Analytics, I specialize in crafting and executing high-performance ad strategies.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="experience">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Journey & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leveraging years of hands-on experience to turn advertising spend into profitable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {achievements.map((ach, index) => (
            <Card key={index} className="text-center p-6 shadow-lg hover:shadow-xl transform transition-all hover:scale-105">
              <ach.icon className={`h-12 w-12 mx-auto mb-4 ${ach.color}`} />
              <CardTitle className="text-xl font-semibold">{ach.metric}</CardTitle>
            </Card>
          ))}
        </div>

        <Card className="bg-muted/30 p-8 shadow-lg">
          <CardContent className="text-lg text-foreground space-y-4">
            <p>
              With over <span className="font-semibold text-primary">3 years of hands-on experience</span>, I’ve successfully managed advertising budgets totaling more than <span className="font-semibold text-primary">$500,000</span>. My focus has consistently been on delivering <span className="font-semibold text-primary">3x to 5x return on ad spend (ROAS)</span> for clients across diverse sectors including eCommerce, SaaS, and lead generation.
            </p>
            <p>
              My approach is rooted in <span className="font-semibold text-secondary">data-driven decision-making</span>, audience precision, and continuous optimization. I believe in a transparent and collaborative process, working closely with clients to understand their unique goals and challenges.
            </p>
            <p>
              Whether you’re looking to scale your brand, launch your first campaign, or optimize existing ones, I bring the expertise and insights needed to help you reach the right audience, reduce wasted spend, and grow profitably.
            </p>
          </CardContent>
        </Card>
      </SectionWrapper>

      <SectionWrapper id="skills" className="bg-background">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Core Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit to tackle any digital marketing challenge.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="flex flex-col items-center text-center p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-3 rounded-full bg-accent/50 mb-4 inline-block">
                <skill.icon className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-lg font-semibold">{skill.name}</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">{skill.category}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Elevate Your Business?</h2>
          <p className="text-lg mb-8">
            Let's work together to take your business to the next level! I'm excited to learn about your goals and how my expertise can contribute to your success.
          </p>
          <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90 font-semibold shadow-lg hover:shadow-xl transform transition-all hover:scale-105">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
