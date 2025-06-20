import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type IconDisplayCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColorClassName?: string;
};

const IconDisplayCard = ({ icon: Icon, title, description, iconColorClassName = 'text-primary' }: IconDisplayCardProps) => {
  return (
    <Card className="h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <div className={cn("p-3 rounded-full bg-primary/10", iconColorClassName === 'text-primary' ? 'bg-primary/10' : 'bg-accent/20')}>
          <Icon className={cn("h-8 w-8", iconColorClassName)} aria-hidden="true" />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default IconDisplayCard;
