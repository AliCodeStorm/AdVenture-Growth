import Image from 'next/image';
import type { CaseStudy } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

type CaseStudyCardProps = {
  study: CaseStudy;
};

const CaseStudyCard = ({ study }: CaseStudyCardProps) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <div className="relative w-full h-56">
        <Image
          src={study.imageUrl}
          alt={study.title}
          layout="fill"
          objectFit="cover"
          data-ai-hint={study.imageHint}
        />
      </div>
      <CardHeader>
        <Badge variant="outline" className="mb-2 w-fit">{study.clientName}</Badge>
        <CardTitle className="text-2xl font-bold">{study.title}</CardTitle>
        <CardDescription className="text-sm pt-1">{study.challenge}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="font-semibold text-md mb-1 text-primary">Solution:</h4>
        <p className="text-sm text-muted-foreground mb-4">{study.solution}</p>
        
        <h4 className="font-semibold text-md mb-2 text-primary">Key Results:</h4>
        <ul className="space-y-2">
          {study.results.map((result, index) => (
            <li key={index} className="flex items-center text-sm">
              <result.icon className="h-5 w-5 mr-2 text-green-500" aria-hidden="true" />
              <span className="font-medium">{result.metric}:</span>
              <span className="ml-1 text-foreground">{result.value}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        {/* <Button variant="link" className="text-primary p-0">Read Full Study <ArrowRight className="ml-1 h-4 w-4" /></Button> */}
      </CardFooter>
    </Card>
  );
};

export default CaseStudyCard;
