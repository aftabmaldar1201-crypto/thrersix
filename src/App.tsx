import React from "react";
import {
  ArrowRight,
  Building2,
  Calendar,
  Camera,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Cloud,
  LineChart,
  Mail,
  MapPin,
  Maximize2,
  Monitor,
  Phone,
  Play,
  Plus,
  Minus,
  Share2,
  TrendingUp,
} from "lucide-react";

const BLUE = "#1A73E8";
const BLUE_DARK = "#1557B0";

const HERO_IMG = "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=2000&q=80";
const TOUR_PREVIEW_IMG = "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1200&q=80";

const THUMBS: string[] = [
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=300&q=70",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=300&q=70",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=300&q=70",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=300&q=70",
  "https://images.unsplash.com/photo-1505692794403-34d4982f88aa?auto=format&fit=crop&w=300&q=70",
];

const SERVICES = [
  { icon: MapPin, color: "#4285F4", title: "Google 360 Virtual Tours", desc: "Get a fully interactive 360° tour on Google Search and Google Maps." },
  { icon: Camera, color: "#34A853", title: "Interior 360 Photography", desc: "High-quality 360° photos that showcase your space beautifully." },
  { icon: Building2, color: "#FBBC04", title: "Commercial Spaces", desc: "Perfect for restaurants, hotels, offices, stores, and more." },
  { icon: Monitor, color: "#EA4335", title: "Enhanced Online Presence", desc: "Improve SEO, increase engagement, and stand out from competitors." },
  { icon: LineChart, color: "#4285F4", title: "More Views. More Customers.", desc: "360° tours help build trust and convert more visitors into customers." },
];

const CHECKLIST = [
  "Showcase your space 24/7",
  "Build trust with real experiences",
  "Improve Google Search & Maps ranking",
  "Increase foot traffic and bookings",
];

const PROCESS = [
  { icon: Calendar, title: "Book Your Tour", desc: "Choose a date and time that works for you." },
  { icon: Camera, title: "We Capture", desc: "Our experts capture high-quality 360° photos of your space." },
  { icon: Cloud, title: "We Create", desc: "We stitch, enhance, and publish your tour on Google." },
  { icon: TrendingUp, title: "You Grow", desc: "Attract more customers and grow your business." },
];

export default function App() {
  return (
    <main className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "sans-serif", margin: 0, padding: 0, boxSizing: 'border-box' }}>
      {/* NAV */}
      <header className="absolute left-0 right-0 top-0 z-40" style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 40 }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10" style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          <a href="#home" className="flex items-center gap-3" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="grid h-11 w-11 place-items-center rounded-full border-2 text-sm font-bold" style={{ borderColor: BLUE, color: "white", display: 'grid', placeItems: 'center', width: '44px', height: '44px', borderRadius: '50%', border: `2px solid ${BLUE}` }}>
              360
            </span>
            <div className="leading-tight">
              <div className="text-base font-semibold text-white" style={{ color: 'white', fontWeight: 600 }}>Virtual Tours</div>
              <div className="text-[10px] text-white/70" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '10px' }}>See More. Be More.</div>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/90 md:flex" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            {["Home", "Services", "Benefits", "Process", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s/g, "-")}`} style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '14px' }}>
                {l}
              </a>
            ))}
          </nav>
          <a href="#contact" style={{ background: BLUE, color: 'white', textDecoration: 'none', padding: '10px 20px', borderRadius: '6px', fontSize: '14px', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Calendar className="h-4 w-4" style={{ width: '16px', height: '16px' }} />
            Book 360° Tour Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', height: '760px', width: '100%' }}>
          <img src={HERO_IMG} alt="Modern interior" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4))' }} />

          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '150px 20px 0', height: '100%' }}>
            {/* Left Column */}
            <div style={{ color: 'white' }}>
              <div style={{ background: 'white', color: '#334155', padding: '6px 14px', borderRadius: '20px', width: 'fit-content', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 500 }}>
                <GoogleG style={{ width: '16px', height: '16px' }} />
                Google Trusted Photographer
              </div>
              <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', lineHeight: 1.1, margin: '24px 0 20px' }}>
                Immersive 360° <br /> Virtual Tours
              </h1>
              <p style={{ opacity: 0.85, fontSize: '16px', maxWidth: '450px', lineHeight: 1.6, margin: '0 0 30px' }}>
                Showcase your business. Engage more customers. Stand out on Google Maps and Search listings effortlessly.
              </p>

              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <a href="#contact" style={{ background: BLUE, color: 'white', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '14px' }}>
                  Book 360° Photography Now
                </a>
              </div>
            </div>

            {/* Right Column (Viewer Card Preview) */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', overflow: 'hidden', width: '100%', maxWidth: '440px' }}>
                <div style={{ position: 'relative', aspectRatio: '4/3', height: '280px' }}>
                  <img src={TOUR_PREVIEW_IMG} alt="Modern Café tour" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '2px solid white', display: 'grid', placeItems: 'center', color: 'white', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}>
                      <div style={{ fontSize: '20px', fontWeight: 'bold' }}>360°</div>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px', padding: '10px' }}>
                  {THUMBS.map((src, i) => (
                    <div key={i} style={{ borderRadius: '4px', overflow: 'hidden', height: '55px' }}>
                      <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto', background: '#ffffff' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: BLUE, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '12px' }}>Our Services</div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '10px 0 20px', color: '#0f172a' }}>360° Solutions for Every Business</h2>
          <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto 60px' }}>We help businesses create stunning interactive experiences that boost local web engagement and presence.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {SERVICES.map((s, index) => (
              <div key={index} style={{ padding: '30px', border: '1px solid #e2e8f0', borderRadius: '16px', textAlign: 'left', background: '#ffffff', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                <div style={{ background: `${s.color}1A`, color: s.color, width: '48px', height: '48px', borderRadius: '12px', display: 'grid', placeItems: 'center' }}>
                  <s.icon style={{ width: '24px', height: '24px' }} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, margin: '20px 0 10px', color: '#1e293b' }}>{s.title}</h3>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY 360 */}
      <section id="benefits" style={{ padding: '80px 20px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
            <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80" alt="Interior preview" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div>
            <div style={{ color: BLUE, fontWeight: 600, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' }}>Why 360° Tours?</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '10px 0 20px', color: '#1e293b' }}>Turn Digital Views into Real Foot Traffic</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {CHECKLIST.map((c, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '16px 0', color: '#334155', fontSize: '16px' }}>
                  <CheckCircle2 style={{ color: BLUE, width: '22px', height: '22px', flexShrink: 0 }} />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center', background: '#ffffff' }}>
        <div style={{ color: BLUE, fontWeight: 600, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' }}>Our Process</div>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '10px 0 60px', color: '#1e293b' }}>Simple. Smooth. Professional.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
          {PROCESS.map((p, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: `2px solid ${BLUE}`, color: BLUE, display: 'grid', placeItems: 'center', margin: '0 auto 20px' }}>
                <p.icon style={{ width: '26px', height: '26px' }} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, margin: '0 0 10px', color: '#1e293b' }}>{i + 1}. {p.title}</h3>
              <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.5, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0B1A33", color: "white", padding: '60px 20px', marginTop: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '30px' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '32px', height: '32px', border: `2px solid ${BLUE}`, borderRadius: '50%', display: 'grid', placeItems: 'center', fontWeight: 'bold', fontSize: '12px' }}>360</span>
              <span style={{ fontWeight: 600 }}>Virtual Tours</span>
            </div>
            <p style={{ opacity: 0.6, fontSize: '13px', marginTop: '10px', maxWidth: '300px' }}>Helping local organizations capture spaces flawlessly.</p>
          </div>
          
          <div style={{ display: 'flex', gap: '12px' }}>
            {[Share2, Play, GoogleG].map((Icon, i) => (
              <a key={i} href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'grid', placeItems: 'center', color: 'white' }}>
                <Icon style={{ width: '16px', height: '16px' }} />
              </a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.95)', maxWidth: '1200px', margin: '40px auto 0', paddingTop: '20px', fontSize: '13px', opacity: 0.5, textAlign: 'center' }}>
          © 2026 360 Virtual Tours. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

// Custom Render For inline SVG Brand Badge
function GoogleG({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}