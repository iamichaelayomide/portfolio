import Link from "next/link";
import BrandMark from "@/components/ui/BrandMark";

const socialLinks = [
  { label: "Behance", href: "https://behance.net/michaelayomide1" },
  { label: "LinkedIn", href: "https://linkedin.com/in/michael-ayomide" },
  { label: "X", href: "https://x.com/starmikeee" },
  { label: "Email", href: "mailto:iamichaelayomide@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-base py-10">
      <div className="section-shell space-y-8">
        <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">
          <div className="space-y-3">
            <Link href="/" className="inline-flex">
              <BrandMark withName />
            </Link>
            <p className="font-body text-body-sm text-text-secondary">Design that works.</p>
          </div>
          <div className="flex flex-col gap-3 font-body text-body-sm text-text-secondary">
            <Link href="/work" className="transition-colors hover:text-text-primary">
              Work
            </Link>
            <Link href="/about" className="transition-colors hover:text-text-primary">
              About
            </Link>
            <Link href="/contact" className="transition-colors hover:text-text-primary">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-3 font-body text-body-sm text-text-secondary">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-border-subtle pt-5 text-center font-body text-body-xs text-text-secondary md:text-left">
          (c) 2025 Michael Ayomide | Built with intention.
        </div>
      </div>
    </footer>
  );
}
