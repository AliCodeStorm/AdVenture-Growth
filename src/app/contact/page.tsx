import SectionWrapper from '@/components/shared/SectionWrapper';
import { ContactForm } from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - AdVenture Growth',
  description: 'Get in touch with AdVenture Growth to discuss your project and marketing needs.',
};

export default function ContactPage() {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-primary">Let's Work Together</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or want to learn more about our services? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h2>
            <p className="text-muted-foreground mb-6">
              Reach out to us directly or visit our office. We're always ready to discuss how we can help your business grow.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-3 text-primary" />
                <a href="mailto:hello@adventuregrowth.com" className="text-foreground hover:text-primary transition-colors">hello@adventuregrowth.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-3 text-primary" />
                <a href="tel:+1234567890" className="text-foreground hover:text-primary transition-colors">(123) 456-7890</a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 text-primary mt-1" />
                <span className="text-foreground">123 Marketing Ave, Growth City, ST 54321</span>
              </div>
            </div>
          </div>
           <div>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Office Hours</h2>
            <p className="text-muted-foreground">
              Monday - Friday: 9:00 AM - 6:00 PM <br/>
              Saturday - Sunday: By Appointment
            </p>
          </div>
        </div>
        
        <div>
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
