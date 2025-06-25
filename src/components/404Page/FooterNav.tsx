import React from 'react';
import { cn } from '@/lib/utils';
import { Twitter, Youtube, Instagram, Facebook } from 'lucide-react';

const navLinks = [
  { name: 'FigJam', href: '#' },
  { name: 'Enterprise', href: '#' },
  { name: 'Learn', href: '#' },
  { name: 'Education', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Developers', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Downloads', href: '#' },
  { name: 'Releases', href: '#' },
  { name: 'Security', href: '#' },
  { name: 'Legal', href: '#' },
  { name: 'Contact', href: '#' },
] as const;

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
] as const;

interface FooterNavProps {
  className?: string;
}

const FooterNav: React.FC<FooterNavProps> = ({ className }) => {
  return (
    <footer className={cn("w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6", className)}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
          <a href="#" className="text-xl font-bold text-foreground mr-2 shrink-0">Figma</a>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-x-4 shrink-0">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;
