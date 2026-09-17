import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceFeature, TrustBar } from "@/components/page-sections";
import { ProjectForm } from "@/components/project-form";
import heroImage from "@/assets/novuk-hero-ontario.jpg";
import fencingImage from "@/assets/novuk-fencing.jpg";
import concreteImage from "@/assets/novuk-concrete-connected.jpg";
import paintingImage from "@/assets/novuk-painting.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Novuk Home Projects | KW General Contractor" },
    { name: "description", content: "Premium fencing, concrete driveways, patios, and residential painting in Kitchener-Waterloo, Cambridge, and Guelph." },
    { property: "og:title", content: "Novuk Home Projects | Your Home. Done Right." },
    { property: "og:description", content: "Professional residential contracting across Kitchener-Waterloo, Cambridge, and Guelph." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

function HomePage() { return <>
  <section className="relative min-h-[720px] overflow-hidden bg-stone text-navy md:min-h-[calc(100svh-5rem)]">
    <img src={heroImage} alt="Finished Novuk residential exterior with cedar fencing and concrete driveway" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center"/>
    <div className="absolute inset-0 bg-[var(--hero-readability-overlay)]"/>
    <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-5 py-20 md:min-h-[calc(100svh-5rem)] lg:px-8"><div className="max-w-3xl text-shadow-hero"><p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-gold">Residential construction · Kitchener-Waterloo</p><h1 className="text-5xl font-extrabold leading-[0.98] text-hero-foreground sm:text-6xl md:text-8xl">Your Home.<br/><span className="text-gold">Done Right.</span></h1><p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-hero-foreground md:text-2xl">Kitchener-Waterloo's premier general contractor for custom fencing, concrete driveways & patios, and interior repaints.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild variant="hero" size="lg"><Link to="/contact">Start Your Project Details <ArrowRight/></Link></Button><Button asChild variant="heroOutline" size="lg"><Link to="/contact">Book Yard Walkthrough</Link></Button></div></div></div>
    <div className="absolute bottom-0 right-0 hidden border-l border-t border-gold/40 bg-background/90 px-7 py-5 text-navy shadow-card backdrop-blur-md md:block"><span className="text-xs font-bold uppercase tracking-[0.14em] text-gold">Serving</span><p className="mt-1 text-sm">KW · Cambridge · Guelph</p></div>
  </section>
  <TrustBar />
  <ServiceFeature eyebrow="01 — Fencing division" title="Property lines, built with confidence." text="From material selection through precise setting and clean completion, we build fence systems for privacy, safety, and long-term performance." image={fencingImage} to="/fencing" items={["Pressure-Treated Wood", "Cedar", "Vinyl / PVC", "Chain Link", "Composite", "Custom Gate Building", '48” Machine-Augered Posts', "Repairs & Post Setting", "50/50 Neighbor Installs"]}/>
  <ServiceFeature reverse eyebrow="02 — Concrete & driveways" title="A durable foundation for daily life." text="Purpose-built exterior concrete with disciplined preparation, grading, reinforcement, and finishing for Ontario conditions." image={concreteImage} to="/concrete-driveways" items={["Custom Driveways", "Extensions & Aprons", "Patio Slabs", "Hot Tub Pads", "Structural Footings", "Decorative Sealing"]}/>
  <ServiceFeature eyebrow="03 — Painting division" title="Refined interiors, professionally finished." text="Clean, organized residential repainting that protects your home and leaves rooms, trim, and doors looking considered and complete." image={paintingImage} to="/painting" items={["Year-Round Interior Repaints", "Trim Refinishing", "Door Refinishing", "Exterior Wood Staining"]}/>
  <ProjectForm />
</> }