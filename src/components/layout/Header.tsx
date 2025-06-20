
'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react'; // Removed X as SheetContent provides its own close button
import { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'; // Removed SheetClose
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 shadow-lg backdrop-blur-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-3xl font-headline font-bold text-primary hover:text-primary/80 transition-colors">
            AdVenture Growth
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors relative",
                  pathname === link.href ? "text-primary font-semibold" : "text-foreground/80"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-primary rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-primary" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-6">
                {/* SheetContent includes its own close button with an X icon */}
                <SheetTitle asChild>
                  <Link href="/" className="text-2xl font-headline font-bold text-primary mb-6 block text-center">
                    AdVenture Growth
                  </Link>
                </SheetTitle>
                <nav className="flex flex-col space-y-4">
                  {NAV_LINKS.map((link) => (
                    // SheetClose is not needed here if links are just for navigation
                    // If an action needs to close the sheet, wrap that specific element
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-lg font-medium hover:text-primary transition-colors py-2 text-center block",
                        pathname === link.href ? "text-primary font-semibold" : "text-foreground/90"
                      )}
                      onClick={() => {
                        // Assuming clicking a link should close the sheet.
                        // If Sheet component doesn't close automatically on nav,
                        // you might need to manage its open state.
                        // For now, Radix usually handles this with router changes.
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild variant="secondary" size="lg" className="w-full mt-8">
                  {/* SheetClose can wrap this if needed, but often not for primary action */}
                  <Link href="/contact">Let's Work Together</Link>
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
