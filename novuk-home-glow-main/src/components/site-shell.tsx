import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/novuk-logo.png.asset.json";

const links = [
  ["Fencing", "/fencing"], ["Concrete & Driveways", "/concrete-driveways"],
  ["Painting", "/painting"], ["About", "/about"], ["Contact", "/contact"],
] as const;

export function Logo() {
  return <Link to="/" className="flex items-center" aria-label="Novuk Home Projects home">
    <img src="/Novuk.png" alt="Novuk Home Projects" className="h-12 w-auto" width="48" height="48" />
  </Link>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-border bg-background/95 text-navy shadow-sm backdrop-blur-md">
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
      <Logo />
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
        {links.map(([label, to]) => <Link key={to} to={to} className="text-xs font-bold uppercase tracking-[0.08em] text-navy transition-colors hover:text-gold" activeProps={{ className: "text-gold" }}>{label}</Link>)}
      </nav>
      <div className="hidden lg:block"><Button asChild variant="gold" size="lg"><Link to="/contact">Request a Yard Walkthrough <ArrowUpRight /></Link></Button></div>
      <Button variant="ghost" size="icon" className="text-navy lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="border-t border-border bg-background px-5 py-5 shadow-card lg:hidden" aria-label="Mobile navigation">
      <div className="mx-auto grid max-w-7xl gap-1">{links.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="border-b border-border py-3 text-sm font-semibold text-navy">{label}</Link>)}<Button asChild variant="gold" size="lg" className="mt-4"><Link to="/contact" onClick={() => setOpen(false)}>Request a Yard Walkthrough</Link></Button></div>
    </nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="border-t border-border bg-stone text-navy"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
    <div><Logo /><p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">Residential exterior and interior projects managed with precision, clear communication, and respect for your home.</p></div>
    <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">Service Area</p><p className="mt-4 text-sm leading-8 text-muted-foreground">Kitchener · Waterloo<br/>Cambridge · Guelph</p></div>
    <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">Start a Project</p><Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold hover:text-gold">Request a walkthrough <ArrowUpRight className="size-4" /></Link><p className="mt-8 text-xs text-muted-foreground">© 2026 Novuk Home Projects</p></div>
  </div></footer>;
}