import SectionWrapper from '@/components/shared/SectionWrapper';
import IconDisplayCard from '@/components/shared/IconDisplayCard';
import { SKILL_ITEMS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Services - AdVenture Growth',
  description: 'Discover our comprehensive range of digital marketing services designed to grow your business.',
};

// Group skills by category
const groupSkillsByCategory = () => {
  const grouped: { [key: string]: typeof SKILL_ITEMS } = {};
  SKILL_ITEMS.forEach(skill => {
    if (!grouped[skill.category]) {
      grouped[skill.category] = [];
    }
    grouped[skill.category].push(skill);
  });
  return grouped;
};

export default function ServicesPage() {
  const groupedSkills = groupSkillsByCategory();

  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-primary">Our Services & Skills</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We offer a comprehensive suite of digital marketing services, leveraging a diverse skillset to deliver impactful results and drive sustainable growth for your business.
        </p>
      </div>

      {Object.entries(groupedSkills).map(([category, skills]) => (
        <div key={category} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left text-foreground/90">{category}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
               <Card key={skill.id} className="flex flex-col items-center text-center p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="p-4 rounded-full bg-accent/50 mb-4 inline-block">
                  <skill.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2">{skill.name}</CardTitle>
              </Card>
            ))}
          </div>
        </div>
      ))}
      
      <div className="text-center mt-16">
        <Button asChild variant="secondary" size="lg" className="shadow-lg hover:shadow-xl transform transition-all hover:scale-105">
          <Link href="/contact">Get Your Custom Strategy</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
