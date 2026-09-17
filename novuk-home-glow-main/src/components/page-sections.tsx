import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Check, ClipboardList, HardHat, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const trustItems = [
  [HardHat, "Dedicated On-Site Supervision", "Personal general contractor oversight on every project"],
  [ShieldCheck, "Licensed & Fully Insured", "Complete liability protection and safety compliance"],
  [BadgeCheck, "2-Year Written Warranty", "Guaranteed structural craftsmanship"],
  [Sparkles, "Property Respect & Tidy Worksite", "Daily debris removal with a spotless, safe finish"],
  [ClipboardList, "Transparent Written Quotes", "Clear scopes, firm pricing, and zero hidden fees"],
] as const;

export function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-gold">{children}</p>; }

export function TrustBar() { return <section className="border-b border-border bg-stone py-8" aria-label="Project standards"><div className="mx-auto grid max-w-7xl gap-3 px-5 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">{trustItems.map(([Icon,title,sub])=><div key={title} className="flex min-h-40 flex-col border border-gold/35 bg-card px-5 py-6 shadow-card"><Icon className="size-7 shrink-0 text-gold"/><div className="mt-5"><strong className="block text-sm leading-5 text-navy">{title}</strong><span className="mt-2 block text-xs leading-5 text-muted-foreground">{sub}</span></div></div>)}</div></section>; }

export function ServiceFeature({ eyebrow, title, text, items, image, to, reverse=false }: { eyebrow:string; title:string; text:string; items:string[]; image:string; to:"/fencing"|"/concrete-driveways"|"/painting"; reverse?:boolean }) {
  return <section className={reverse ? "bg-stone py-20 lg:py-28" : "bg-background py-20 lg:py-28"}><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
    <div className={reverse ? "lg:order-2" : ""}><Eyebrow>{eyebrow}</Eyebrow><h2 className="max-w-xl text-3xl font-bold leading-tight text-foreground md:text-5xl">{title}</h2><p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">{text}</p><ul className="mt-8 grid gap-3 sm:grid-cols-2">{items.map(item=><li key={item} className="flex items-start gap-3 text-sm font-semibold text-foreground"><span className="mt-0.5 grid size-5 shrink-0 place-items-center bg-gold text-navy"><Check className="size-3.5"/></span>{item}</li>)}</ul><Button asChild variant="default" size="lg" className="mt-9"><Link to={to}>Explore the division <ArrowRight /></Link></Button></div>
    <div className={`relative border border-gold/30 bg-card p-2 shadow-card ${reverse ? "lg:order-1" : ""}`}><div className="absolute -bottom-4 -left-4 h-24 w-24 border-b-2 border-l-2 border-gold"/><img src={image} alt={`${title} by Novuk Home Projects`} loading="lazy" width={1200} height={912} className="relative aspect-[4/3] w-full object-cover"/></div>
  </div></section>;
}

export function PageIntro({ eyebrow, title, text }: { eyebrow:string; title:string; text:string }) { return <section className="border-b border-border bg-stone py-20 text-navy md:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Eyebrow>{eyebrow}</Eyebrow><h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] md:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">{text}</p></div></section>; }

export function DetailPage({ eyebrow, title, text, image, items }: {eyebrow:string; title:string; text:string; image:string; items:string[]}) { return <><PageIntro eyebrow={eyebrow} title={title} text={text}/><section className="bg-background py-20"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8"><div className="border border-gold/30 bg-card p-2 shadow-card"><img src={image} alt={title} width={1200} height={912} className="aspect-[4/3] w-full object-cover"/></div><div><Eyebrow>Complete scope</Eyebrow><h2 className="text-3xl font-bold">Built for Ontario homes.</h2><ul className="mt-8 divide-y divide-border border-y border-border">{items.map(x=><li className="flex items-center gap-3 py-4 font-semibold" key={x}><Check className="size-4 text-gold"/>{x}</li>)}</ul><Button asChild variant="gold" size="lg" className="mt-8"><Link to="/contact">Request a walkthrough <ArrowRight/></Link></Button></div></div></section></> }