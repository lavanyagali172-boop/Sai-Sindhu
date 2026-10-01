import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  Compass,
  LandPlot,
  Leaf,
  Menu,
  Phone,
  Route as RouteIcon,
  ShieldCheck,
  Sparkles,
  Sprout,
  Trees,
  Waypoints,
  Waves,
  X,
} from "lucide-react";

import heroImage from "../assets/sai-sindhu-hero.jpg";
import lifestyleImage from "../assets/sai-sindhu-lifestyle.jpg";
import aerialImage from "../assets/sai-sindhu-aerial.jpg";
import ananthagiriImage from "../assets/sai-sindhu-ananthagiri.jpg";
import vikarabadImage from "../assets/sai-sindhu-vikarabad.jpg";
import founderVisionImage from "../assets/sai-sindhu-founder-vision.jpg";
import moinabadImage from "../assets/sai-sindhu-moinabad.jpg";
import hyderabadConnectivityImage from "../assets/sai-sindhu-hyderabad-connectivity.jpg";
import shankarpallyImage from "../assets/sai-sindhu-shankarpally.jpg";
import amenitiesLifeImage from "../assets/sai-sindhu-amenities-life.jpg";
import realLifeCommunityImage from "../assets/sai-sindhu-real-life-community.jpg";
import neighbourhoodGardenImage from "../assets/sai-sindhu-neighbourhood-garden.jpg";
import hitecCityImage from "../assets/sai-sindhu-hitec-city.jpg";
import airportImage from "../assets/sai-sindhu-airport.jpg";
import jubileeHillsImage from "../assets/sai-sindhu-jubilee-hills.jpg";
import logoAsset from "../assets/sai-sindhu-developers.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sai Sindhu Developers | Residential Plots in Vikarabad" },
      { name: "description", content: "Discover 143 premium residential plots across 13 acres at Kothrepally, Vikarabad, with a clubhouse, landscaped amenities and excellent connectivity." },
      { property: "og:title", content: "Sai Sindhu Developers | A Lifetime of Pleasant Living" },
      { property: "og:description", content: "Premium residential plots in Kothrepally, Vikarabad, surrounded by nature." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  ["About", "#about"], ["Why Us", "#why-us"], ["Founder", "#founder"], ["Master Plan", "#master-plan"], ["Amenities", "#amenities"], ["Nearby", "#nearby"], ["Contact", "#contact"],
];

const amenities = [
  { icon: Building2, title: "Grand Entrance", text: "A distinguished arrival framed by landscape." },
  { icon: ShieldCheck, title: "24×7 Security", text: "CC camera surveillance and compound wall." },
  { icon: RouteIcon, title: "30' & 40' Roads", text: "Wide, well-planned internal road network." },
  { icon: Waves, title: "Water & Harvesting", text: "Plot connections and rainwater harvesting." },
  { icon: Leaf, title: "Tree-lined Footpaths", text: "Green walking paths throughout the community." },
  { icon: Sparkles, title: "Underground Utilities", text: "Electricity, transformer and street lighting." },
];

const recreation = ["Gymnasium", "Library", "Snookers", "Table Tennis", "Board Games", "Multipurpose Hall", "Guest Room", "Landscape Garden", "Yoga Zone", "Walking Track", "Children's Play Area", "Gazebo", "Cricket Net", "Multipurpose Court", "Amphitheatre", "Outdoor Gym"];

const cityConnections = [
  { place: "Hitec City", distance: "55 km", image: hitecCityImage, detail: "Hyderabad’s flagship technology district — offices, malls and leading schools around the Cyber Towers roundabout." },
  { place: "Airport", distance: "55 km", image: airportImage, detail: "Rajiv Gandhi International Airport keeps business trips and family travel comfortably within reach." },
  { place: "Jubilee Hills", distance: "60 km", image: jubileeHillsImage, detail: "The city’s premium address for boutiques, fine dining and lifestyle, and home to our corporate office." },
];

const nearbyHighlights = [
  { place: "Vikarabad", distance: "5 km", image: vikarabadImage, detail: "Everyday shopping, schools, healthcare and rail connectivity within convenient reach." },
  { place: "Ananthagiri Hills", distance: "12 km", image: ananthagiriImage, detail: "A celebrated green escape for forest drives, viewpoints and unhurried weekends." },
  { place: "Shankarpally", distance: "22 km", image: shankarpallyImage, detail: "A growing urban corridor connecting the community towards Hyderabad’s western edge." },
  { place: "Moinabad", distance: "30 km", image: moinabadImage, detail: "A scenic route towards Hyderabad, known for open landscapes, lakes and convenient road access." },
  { place: "Gachibowli", distance: "42 km", image: hyderabadConnectivityImage, detail: "The city’s leading business district keeps employment, education and urban conveniences connected." },
];

const whySaiSindhu = [
  { icon: BadgeCheck, number: "01", title: "Thoughtful planning", text: "A clear layout, practical plot choices and shared spaces designed around comfortable everyday living." },
  { icon: Sprout, number: "02", title: "Nature-led living", text: "Green avenues and generous open areas create a calmer setting close to the natural character of Vikarabad." },
  { icon: ShieldCheck, number: "03", title: "Essential infrastructure", text: "Wide roads, underground utilities, water planning, security and community amenities are built into the vision." },
  { icon: Waypoints, number: "04", title: "Connected location", text: "Vikarabad conveniences, Ananthagiri Hills and Hyderabad’s western growth corridor remain within practical reach." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <main className="overflow-hidden bg-background">
      <header className="absolute inset-x-0 top-0 z-50 border-b border-primary-foreground/20 bg-forest-deep/15 backdrop-blur-md">
        <div className="brand-stripe h-1 w-full" />
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:flex lg:justify-between">
          <a href="#home" aria-label="Sai Sindhu Developers home" className="block min-w-0">
            <img src={logoAsset.url} alt="Sai Sindhu Developers" className="h-16 w-auto object-contain" />
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navItems.map(([label, href]) => <a key={label} href={href} className="text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-70">{label}</a>)}
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <a href="tel:+918747994499" className="flex items-center gap-2 text-xs font-semibold text-primary-foreground"><Phone className="size-4" /> +91 87479 94499</a>
            <a href="#contact" className="inline-flex h-10 items-center gap-2 rounded-sm bg-primary px-5 text-xs font-bold text-primary-foreground shadow-float transition-transform hover:-translate-y-0.5">Get a quote <ArrowUpRight className="size-4" /></a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="grid size-10 shrink-0 place-items-center text-primary-foreground lg:hidden" aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="border-t border-primary-foreground/20 bg-forest-deep px-5 py-5 lg:hidden">{navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-primary-foreground/10 py-3 text-sm font-semibold text-primary-foreground">{label}</a>)}</nav>}
      </header>

      <section id="home" className="relative min-h-[92svh] bg-forest-deep text-primary-foreground">
        <img src={heroImage} alt="Landscaped residential plots near green hills" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 size-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest-deep/60 to-leaf/10" />
        <div className="grid-lines absolute inset-0 opacity-30" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-7xl items-end px-5 pb-20 pt-32 sm:px-8 lg:items-center lg:pb-0">
          <div className="max-w-3xl animate-reveal">
            <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase text-gold"><span className="brand-stripe h-1 w-12" /> Residential plots · Vikarabad</div>
            <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[0.93] text-balance sm:text-7xl lg:text-[6.5rem]">A lifetime of pleasant living.</h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-primary-foreground/80 sm:text-base">Sai Sindhu Developers presents a thoughtfully planned community that places your family closer to nature without leaving the city’s advantages behind.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex h-12 items-center gap-3 rounded-sm bg-primary px-6 text-sm font-bold text-primary-foreground shadow-float transition-transform hover:-translate-y-1">Schedule a site visit <ArrowUpRight className="size-4" /></a>
              <a href="#master-plan" className="inline-flex h-12 items-center gap-3 rounded-sm border border-primary-foreground/45 px-6 text-sm font-bold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/10">Explore the plan <ArrowDown className="size-4" /></a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden w-[36%] grid-cols-3 border-l border-t border-primary-foreground/20 bg-forest-deep/65 backdrop-blur-md lg:grid">
          {[["143", "Premium plots"], ["13", "Green acres"], ["150–650", "Sq. yd. plots"]].map(([n,l]) => <div key={l} className="border-r border-primary-foreground/20 px-7 py-7"><strong className="font-display text-3xl text-primary-foreground">{n}</strong><span className="mt-1 block text-[10px] uppercase text-primary-foreground/65">{l}</span></div>)}
        </div>
      </section>

      <section id="about" className="relative py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase text-primary">About the community</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-tight text-forest-deep sm:text-6xl">Designed for nature worshippers and connoisseurs of fine living.</h2>
            <p className="mt-7 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">This residential community by Sai Sindhu Developers is created around fresh air, meaningful connections and active days. Contemporary homes, abundant greenery and considered amenities come together in one peaceful destination.</p>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {["143 plots", "13 acres", "40' & 30' roads"].map((item) => <div key={item} className="border-l-2 border-primary bg-mist px-4 py-5 text-sm font-bold text-forest-deep">{item}</div>)}
            </div>
          </div>
          <div className="perspective-scene relative mx-auto w-full max-w-xl py-8">
            <div className="absolute -inset-5 rotate-3 rounded-sm border border-primary/20 bg-secondary" />
            <img src={lifestyleImage} alt="Tree-lined walking avenue in the community" loading="lazy" width={1200} height={1600} className="animate-drift relative z-10 max-h-[660px] w-full rounded-sm object-cover drop-shadow-2xl" />
            <div className="absolute bottom-4 left-1/2 z-20 w-48 -translate-x-1/2 rounded-sm bg-card p-4 text-center shadow-float"><Trees className="mx-auto size-6 text-primary" /><span className="mt-2 block text-xs font-bold text-forest-deep">Life rooted in nature</span></div>
          </div>
        </div>
      </section>

      <section id="why-us" className="relative overflow-hidden bg-forest-deep py-24 text-primary-foreground sm:py-32">
        <div className="brand-stripe absolute inset-x-0 top-0 h-1" />
        <div className="grid-lines absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase text-gold">Why Sai Sindhu Developers</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-6xl">A considered place for your next chapter.</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-primary-foreground/70 lg:justify-self-end">Sai Sindhu Developers brings land, landscape and everyday infrastructure together with one clear purpose: to create a community where families can plan confidently, live peacefully and remain connected to opportunity.</p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-primary-foreground/15 bg-primary-foreground/15 md:grid-cols-2 lg:grid-cols-4">
            {whySaiSindhu.map(({ icon: Icon, number, title, text }) => (
              <article key={title} className="group bg-forest-deep/90 p-7 transition-colors hover:bg-primary/25">
                <div className="flex items-center justify-between"><Icon className="size-8 text-gold" /><span className="font-display text-3xl text-primary-foreground/25">{number}</span></div>
                <h3 className="mt-10 text-base font-bold">{title}</h3>
                <p className="mt-3 text-xs leading-6 text-primary-foreground/60">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 border-l-4 border-gold bg-primary/20 p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-7">
            <strong className="font-display text-5xl text-gold">13</strong>
            <p className="max-w-3xl text-sm leading-7 text-primary-foreground/75"><span className="font-bold text-primary-foreground">Acres of possibility.</span> A well-scaled residential setting with 143 plots, green surroundings and spaces planned for both private life and community connection.</p>
          </div>
        </div>
      </section>

      <section id="founder" className="relative overflow-hidden bg-secondary py-24 sm:py-32">
        <div className="absolute inset-y-0 left-0 hidden w-2 brand-stripe lg:block" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-sm border border-primary/25 bg-leaf/10" />
            <img src={founderVisionImage} alt="Property team reviewing a community master plan at the Sai Sindhu Developers site" loading="lazy" width={1408} height={1120} className="relative aspect-[4/5] w-full rounded-sm object-cover shadow-float" />
            <div className="absolute bottom-5 left-5 right-5 rounded-sm border-l-4 border-gold bg-forest-deep/92 p-5 text-primary-foreground shadow-float backdrop-blur-md">
              <p className="font-display text-2xl font-semibold">Pabbathi Tharun Raju</p>
              <p className="mt-1 text-[10px] font-bold uppercase text-gold">Founder & Owner · Sai Sindhu Developers</p>
            </div>
          </div>
          <div className="lg:pl-10">
            <p className="text-xs font-bold uppercase text-primary">A clear vision for better living</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-forest-deep sm:text-6xl">Building places where families can put down lasting roots.</h2>
            <p className="mt-7 text-sm leading-7 text-muted-foreground sm:text-base">As the owner of Sai Sindhu Developers, Pabbathi Tharun Raju leads with a straightforward purpose: to shape thoughtfully planned communities that feel welcoming today and meaningful for years to come.</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">His vision for the Vikarabad community brings together nature, practical infrastructure and well-considered shared spaces. The focus is on creating a setting where every plot becomes the beginning of a home, a future and a stronger connection to place.</p>
            <div className="mt-8 flex items-center gap-4 border-l-2 border-leaf pl-5">
              <Compass className="size-7 shrink-0 text-primary" />
              <p className="font-display text-xl font-semibold leading-snug text-forest-deep">“Thoughtful planning is the foundation of a community that grows well.”</p>
            </div>
          </div>
        </div>
      </section>

      <section id="master-plan" className="bg-forest-deep py-24 text-primary-foreground sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
            <div><p className="text-xs font-bold uppercase text-gold">Master layout</p><h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-6xl">Choose your blank canvas.</h2><p className="mt-5 max-w-md text-sm leading-7 text-primary-foreground/65">Choose the plot you like and take the lead in shaping your dream home, surrounded by greenery and community amenities.</p></div>
            <div className="group perspective-scene relative">
              <div className="absolute inset-0 translate-x-3 translate-y-3 border border-gold/40" />
              <img src={aerialImage} alt="Aerial concept of the planned residential community" loading="lazy" width={1600} height={1104} className="relative w-full rounded-sm object-cover shadow-float transition-transform duration-700 group-hover:[transform:rotateX(2deg)_rotateY(-2deg)_translateZ(20px)]" />
              <a href="#contact" className="absolute bottom-4 right-4 inline-flex size-12 items-center justify-center rounded-sm bg-primary text-primary-foreground shadow-float" aria-label="Ask about the master plan"><ArrowUpRight /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-wash py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase text-leaf">A community made for real life</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-forest-deep sm:text-6xl">More room to move, meet and make memories.</h2>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">From morning walks beneath leafy canopies to evenings in shared gardens, the plan creates everyday opportunities for wellbeing and connection. Open spaces, recreation and essential infrastructure work together to make each day feel considered.</p>
            </div>
            <div className="grid grid-cols-[1.15fr_0.85fr] gap-3 sm:gap-5">
              <img src={realLifeCommunityImage} alt="Family walking and cycling along a green community avenue" loading="lazy" width={1600} height={1104} className="col-span-2 aspect-[16/8] w-full rounded-sm object-cover shadow-float" />
              <img src={neighbourhoodGardenImage} alt="Neighbours sharing an evening in the landscaped community garden" loading="lazy" width={1408} height={1104} className="col-span-2 aspect-[16/7] w-full rounded-sm object-cover shadow-soft sm:col-span-1 sm:aspect-square" />
              <div className="col-span-2 flex min-h-44 flex-col justify-end rounded-sm bg-primary p-6 pr-20 text-primary-foreground shadow-soft sm:col-span-1 sm:pr-6"><Trees className="size-8 text-gold" /><strong className="mt-8 font-display text-3xl leading-tight">Space to live beyond four walls.</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section id="amenities" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase text-primary">Planned in every detail</p><h2 className="mt-4 font-display text-4xl font-semibold text-forest-deep sm:text-6xl">Everyday essentials, thoughtfully built in.</h2></div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {amenities.map(({ icon: Icon, title, text }, i) => <article key={title} className="group bg-card p-7 transition-colors hover:bg-mist"><div className="flex items-start justify-between"><Icon className="size-8 text-primary transition-transform group-hover:-translate-y-1" /><span className="font-display text-2xl text-muted-foreground/35">0{i+1}</span></div><h3 className="mt-8 text-base font-bold text-forest-deep">{title}</h3><p className="mt-2 text-xs leading-6 text-muted-foreground">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-mist py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative min-h-[420px] sm:min-h-[560px]">
              <img src={amenitiesLifeImage} alt="Clubhouse gym, library, pool, play area, yoga lawn and sports court" loading="lazy" width={1600} height={1104} className="absolute inset-0 size-full rounded-sm object-cover shadow-float" />
              <div className="absolute inset-0 rounded-sm bg-gradient-to-t from-forest-deep/55 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-5 rounded-sm bg-primary px-5 py-4 text-primary-foreground shadow-float"><strong className="font-display text-3xl">Club</strong><span className="block text-[10px] uppercase">Life, elevated</span></div>
            </div>
            <div className="lg:pl-10"><p className="text-xs font-bold uppercase text-primary">Indoor & outdoor amenities</p><h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-forest-deep sm:text-6xl">Shades of recreation for every mood.</h2><p className="mt-6 text-sm leading-7 text-muted-foreground">A luxurious club and generous outdoor spaces to enliven your mood, refresh your body and rejuvenate your soul.</p><div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-3">{recreation.map(item => <div key={item} className="flex items-center gap-2 text-xs font-semibold text-forest-deep"><Check className="size-4 shrink-0 text-primary" />{item}</div>)}</div></div>
          </div>
        </div>
      </section>

      <section id="nearby" className="bg-forest-deep py-24 text-primary-foreground sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl"><p className="text-xs font-bold uppercase text-gold">Everything within reach</p><h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-6xl">Close to nature. Connected to opportunity.</h2></div>
            <p className="max-w-sm text-sm leading-7 text-primary-foreground/65">A calm home base near Vikarabad, with direct access to scenic escapes and Hyderabad’s expanding western corridor.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {nearbyHighlights.map(({ place, distance, image, detail }, index) => (
              <article key={place} className={`group overflow-hidden rounded-sm border border-primary-foreground/15 bg-primary-foreground/5 ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={image} alt={`${place} near Sai Sindhu Developers, Vikarabad`} loading="lazy" width={1600} height={1104} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute right-4 top-4 rounded-sm bg-primary px-3 py-2 text-xs font-bold text-primary-foreground shadow-float">{distance}</span>
                  <span className="absolute bottom-4 left-4 font-display text-5xl text-primary-foreground/65">0{index + 1}</span>
                </div>
                <div className="border-t-4 border-leaf p-6"><h3 className="font-display text-3xl font-semibold">{place}</h3><p className="mt-3 text-xs leading-6 text-primary-foreground/65">{detail}</p></div>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {cityConnections.map(({ place, distance, image, detail }) => (
              <article key={place} className="group overflow-hidden rounded-sm border border-primary-foreground/15 bg-primary-foreground/5">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={image} alt={`${place}, connected to Sai Sindhu Developers`} loading="lazy" width={1600} height={1104} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute right-4 top-4 rounded-sm bg-gold px-3 py-2 text-xs font-bold text-forest-deep shadow-float">{distance}</span>
                </div>
                <div className="border-t-4 border-gold p-6"><h3 className="font-display text-2xl font-semibold">{place}</h3><p className="mt-3 text-xs leading-6 text-primary-foreground/65">{detail}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-primary/20 bg-secondary py-5"><div className="animate-marquee flex w-max items-center gap-12 text-sm font-bold uppercase text-forest-deep">{[...recreation, ...recreation].map((item, i) => <span key={`${item}-${i}`} className="flex items-center gap-12">{item}<LandPlot className="size-4 text-primary" /></span>)}</div></div>

      <section id="contact" className="relative bg-surface-dark py-24 text-primary-foreground sm:py-32">
        <div className="brand-stripe absolute inset-x-0 top-0 h-1" />
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="text-xs font-bold uppercase text-gold">We'd love to hear from you</p><h2 className="mt-4 font-display text-5xl font-semibold leading-none sm:text-7xl">Your plot is waiting.</h2><p className="mt-6 max-w-md text-sm leading-7 text-primary-foreground/65">Speak with our team to check availability, understand the layout and schedule a guided site visit.</p><a href="tel:+918747994499" className="mt-10 flex items-center gap-4 text-xl font-semibold"><span className="grid size-12 place-items-center rounded-full bg-primary"><Phone className="size-5" /></span> +91 87479 94499</a></div>
          <form className="grid gap-4 rounded-sm bg-background p-6 text-foreground shadow-float sm:grid-cols-2 sm:p-9" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <label className="text-xs font-bold">Full name<input required className="mt-2 h-12 w-full rounded-sm border border-input bg-card px-4 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" /></label>
            <label className="text-xs font-bold">Phone number<input required type="tel" className="mt-2 h-12 w-full rounded-sm border border-input bg-card px-4 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="+91" /></label>
            <label className="text-xs font-bold sm:col-span-2">Email address<input required type="email" className="mt-2 h-12 w-full rounded-sm border border-input bg-card px-4 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="you@example.com" /></label>
            <label className="text-xs font-bold sm:col-span-2">What would you like to know?<textarea className="mt-2 min-h-28 w-full resize-none rounded-sm border border-input bg-card p-4 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="Plot availability, site visit, pricing…" /></label>
            <p className="text-[10px] leading-5 text-muted-foreground sm:col-span-2">By submitting, you authorize Sai Sindhu Developers and its representatives to contact you by call, SMS, email or WhatsApp about ventures, investment opportunities and offers.</p>
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-primary px-6 text-sm font-bold text-primary-foreground sm:col-span-2">{sent ? <>Request received <Check className="size-4" /></> : <>Request a callback <ChevronRight className="size-4" /></>}</button>
          </form>
        </div>
      </section>

      <footer className="bg-forest-deep text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3"><div><img src={logoAsset.url} alt="Sai Sindhu Developers" className="h-24 w-auto object-contain" /><p className="mt-4 max-w-xs text-xs leading-6 text-primary-foreground/55">One smart decision. A lifetime of pleasant living.</p></div><div><h3 className="text-xs font-bold uppercase text-gold">Corporate office</h3><p className="mt-4 text-xs leading-6 text-primary-foreground/65">3rd & 4th Floor, 108, Road Number 10, Jawahar Colony, Jubilee Hills, Hyderabad, Telangana – 500033</p></div><div><h3 className="text-xs font-bold uppercase text-gold">Site address</h3><p className="mt-4 text-xs leading-6 text-primary-foreground/65">Kothrepally Highway, Vikarabad, Telangana 501101</p><a href="tel:+918747994499" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold"><Phone className="size-4 text-gold" /> +91 87479 94499</a></div></div>
        <div className="border-t border-primary-foreground/10 py-5 text-center text-[10px] text-primary-foreground/40">© 2026 Sai Sindhu Developers. All rights reserved.</div>
      </footer>

      <a href="https://api.whatsapp.com/send?phone=918747994499&text=Hi!%20I%20would%20like%20to%20know%20more%20about%20your%20residential%20plots%20in%20Vikarabad." aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-float transition-transform hover:scale-105"><Phone className="size-5" /></a>
    </main>
  );
}
