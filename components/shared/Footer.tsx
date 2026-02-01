import { Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from '@/assets/logo.png';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const social = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12 pb-12 border-b border-background/20">
          <div>
            <Image 
              src="https://res.cloudinary.com/dtipcangs/image/upload/v1769962469/Quicklogix_pso4ul.png"
              alt="Company Logo" 
              height={100}
              width={100}
              className="h-28 w-auto invert"
            />
          </div>
          
          <nav className="flex flex-wrap gap-8">
            {navigation.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-sm uppercase tracking-wider text-background/70 hover:text-background transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="flex gap-6">
            {social.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-background/70 hover:text-background transition-colors"
                aria-label={item.name}
              >
                <item.icon className="w-5 h-5" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-background/50">
          <p>© {new Date().getFullYear()} QUICLOGIX. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
