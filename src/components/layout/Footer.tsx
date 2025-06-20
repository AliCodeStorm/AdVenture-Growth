import { Facebook, Instagram, Linkedin, Youtube, Github, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 text-muted-foreground py-8 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="#" aria-label="Facebook" className="text-primary hover:text-primary/80 transition-colors">
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="Instagram" className="text-primary hover:text-primary/80 transition-colors">
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="text-primary hover:text-primary/80 transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="YouTube" className="text-primary hover:text-primary/80 transition-colors">
            <Youtube className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="GitHub" className="text-primary hover:text-primary/80 transition-colors">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="Twitter" className="text-primary hover:text-primary/80 transition-colors">
            <Twitter className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {currentYear} AdVenture Growth. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Expert Marketing Solutions for a Digital World.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
