import React, { useState } from "react";
import {
  Building2,
  Calendar,
  Camera,
  CheckCircle2,
  Cloud,
  LineChart,
  MapPin,
  Monitor,
  Play,
  Share2,
  TrendingUp,
  Menu,
  X
} from "lucide-react";

const BLUE = "#1A73E8";

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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main style={{ fontFamily: "sans-serif", margin: 0, padding: 0, boxSizing: "border-box", width: "100%", minHeight: "100vh", overflowX: "hidden", background: "#ffffff" }}>
      
      {/* GLOBAL CSS FOR RESPONSIVE HACKS IN INLINE IMPLEMENTATIONS */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .menu-btn { display: block !important; }
          .hero-grid, .benefits-grid { grid-template-columns: 1fr !important; }
          .hero-card-container { justify-content: center !important; }
          .hero-right-card { border-radius: 12px !important; }
        }
      `}</style>

      {/* NAV */}
      <header style={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 40, boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px", maxWidth: "1200px", margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
          <a href="#home" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ borderColor: BLUE, color: "white", display: "grid", placeItems: "center", width: "44px", height: "44px", borderRadius: "50%", border: `2px solid ${BLUE}`, fontWeight: "bold", fontSize: "14px" }}>
              360
            </span>
            <div style={{ lineHeight: "1.2" }}>
              <div style={{ color: "white", fontWeight: 600, fontSize: "16px" }}>Virtual Tours</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "10px" }}>See More. Be More.</div>
            </div>
          </a>

          {/* Desktop Nav Actions */}
          <nav className="desktop-nav" style={{ display: "flex", gap: "30px", alignItems: "center" }}>
            {["Home", "Services", "Benefits", "Process", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s/g, "-")}`} style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none", fontSize: "14px" }}>
                {l}
              </a>
            ))}
          </nav>
          <div className="desktop-nav">
            <a href="#contact" style={{ background: BLUE, color: "white", textDecoration: "none", padding: "10px 20px", borderRadius: "6px", fontSize: "14px", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <Calendar style={{ width: "16px", height: "16px" }} />
              Book 360° Tour Now
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="menu-btn" 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: "none", background: "none", border: "none", color: "white", cursor: "pointer", zIndex: 50 }}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {menuOpen && (
          <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "#0B1A33", zIndex: 45, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "24px" }}>
            {["Home", "Services", "Benefits", "Process", "Contact"].map((l) => (
              <a key={l} onClick={() => setMenuOpen(false)} href={`#${l.toLowerCase().replace(/\s/g, "-")}`} style={{ color: "white", textDecoration: "none", fontSize: "20px", fontWeight: 500 }}>
                {l}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} style={{ background: BLUE, color: "white", textDecoration: "none", padding: "14px 28px", borderRadius: "6px", fontSize: "16px", fontWeight: 500, marginTop: "10px" }}>
              Book 360° Tour Now
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" style={{ position: "relative", width: "100%", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", margin: 0, padding: "100px 0 60px 0" }}>
        <img src={HERO_IMG} alt="Modern interior" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 1 }} />
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.6))", zIndex: 2 }} />

        <div style={{ position: "relative", zIndex: 3, width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 20px", boxSizing: "border-box" }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center", width: "100%" }}>
            
            {/* Left Column */}
            <div style={{ color: "white", width: "100%", boxSizing: "border-box", textAlign: "left" }}>
              <div style={{ background: "white", color: "#334155", padding: "6px 14px", borderRadius: "20px", width: "fit-content", display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: 500 }}>
                <GoogleG style={{ width: "16px", height: "16px" }} />
                Google Trusted Photographer
              </div>
              
              <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: "bold", lineHeight: 1.1, margin: "12px 0" }}>
                Immersive 360° <br /> Virtual Tours
              </h1>
              
              <p style={{ opacity: 0.85, fontSize: "16px", maxWidth: "550px", lineHeight: 1.5, margin: "0 0 24px" }}>
                Showcase your business. Engage more customers. Stand out on Google Maps and Search listings effortlessly.
              </p>

              {/* Feature Points Missing - Added */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", margin: "0 0 30px 0", fontSize: "13px", opacity: 0.8 }}>
                {[
                  { icon: MapPin, text: "Google Street View Trusted" },
                  { icon: LineChart, text: "Boost Visibility & Attract Customers" },
                  { icon: Building2, text: "Immersive Experience Builds Trust" }
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <item.icon style={{ width: "16px", height: "16px", color: BLUE }}/>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center" }}>
                <a href="#contact" style={{ background: BLUE, color: "white", padding: "14px 28px", borderRadius: "6px", textDecoration: "none", fontWeight: 600, fontSize: "14px", width: "fit-content", textAlign: "left", display: "flex", alignItems: "center", gap: "10px" }}>
                  <Calendar style={{width: "18px", height: "18px"}}/>
                  Book 360° Tour Photography Now
                </a>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", opacity: 0.85, cursor: "pointer" }}>
                  <Play style={{ width: "22px", height: "22px", fill: "rgba(255,255,255,0.15)", color: "white" }}/>
                  See How It Works (1:00)
                </div>
              </div>
            </div>

            {/* Right Column Card */}
            <div className="hero-card-container" style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
              <div className="hero-right-card" style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px 0px 0px 12px", overflow: "hidden", width: "100%", maxWidth: "460px" }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "4/3" }}>
                  <img src={TOUR_PREVIEW_IMG} alt="Modern Café tour" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  {/* Tour Metadata (Top left like asset) */}
                  <div style={{ position: "absolute", top: "15px", left: "15px", display: "flex", flexDirection: "column", gap: "2px", color: "white", textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>
                    <div style={{fontSize: "14px", fontWeight: 600}}>Modern Café</div>
                    <div style={{fontSize: "11px", display: "flex", alignItems: "center", gap: "4px"}}>
                      <MapPin style={{width: "12px", height: "12px"}}/>
                      View on Google
                    </div>
                  </div>
                  {/* Top Right Icons (Asset matched) */}
                  <div style={{position: "absolute", top: "15px", right: "15px", display: "flex", gap: "12px", color: "white"}}>
                    <Share2 style={{width: "18px", height: "18px"}}/>
                    <MapPin style={{width: "18px", height: "18px"}}/>
                  </div>
                  {/* Central 360 Indicator */}
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <div style={{ width: "70px", height: "70px", borderRadius: "50%", border: "2px solid white", display: "grid", placeItems: "center", color: "white", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}>
                      <div style={{ fontSize: "18px", fontWeight: "bold" }}>360°</div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "6px", padding: "8px" }}>
                  {THUMBS.map((src, i) => (
                    <div key={i} style={{ borderRadius: "4px", overflow: "hidden", height: "55px" }}>
                      <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "80px 20px", background: "#ffffff", maxWidth: "1200px", margin: "0 auto", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center", width: "100%" }}>
          <div style={{ color: BLUE, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", fontSize: "12px" }}>Our Services</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, margin: "10px 0 20px", color: "#0f172a" }}>360° Solutions for Every Business</h2>
          <p style={{ color: "#64748b", maxWidth: "600px", margin: "0 auto 40px" }}>We help businesses create stunning interactive experiences that boost local web engagement and presence.</p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", width: "100%" }}>
            {SERVICES.map((s, index) => (
              <div key={index} style={{ padding: "30px", border: "1px solid #e2e8f0", borderRadius: "16px", textAlign: "left", background: "#ffffff", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
                <div style={{ background: `${s.color}1A`, color: s.color, width: "48px", height: "48px", borderRadius: "12px", display: "grid", placeItems: "center" }}>
                  <s.icon style={{ width: "24px", height: "24px" }} />
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 600, margin: "20px 0 10px", color: "#1e293b" }}>{s.title}</h3>
                <p style={{ color: "#64748b", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY 360 */}
      <section id="benefits" style={{ padding: "80px 20px", background: "#f8fafc", width: "100%", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="benefits-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center", width: "100%" }}>
            <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)", width: "100%" }}>
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80" alt="Interior preview" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div style={{ width: "100%" }}>
              <div style={{ color: BLUE, fontWeight: 600, textTransform: "uppercase", fontSize: "12px", letterSpacing: "1px" }}>Why 360° Tours?</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, margin: "10px 0 20px", color: "#1e293b" }}>Turn Digital Views into Real Foot Traffic</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {CHECKLIST.map((c, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "12px", margin: "16px 0", color: "#334155", fontSize: "16px" }}>
                    <CheckCircle2 style={{ color: BLUE, width: "22px", height: "22px", flexShrink: 0 }} />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ padding: "80px 20px", textAlign: "center", background: "#ffffff", maxWidth: "1200px", margin: "0 auto", boxSizing: "border-box" }}>
        <div style={{ color: BLUE, fontWeight: 600, textTransform: "uppercase", fontSize: "12px", letterSpacing: "1px" }}>Our Process</div>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, margin: "10px 0 40px", color: "#1e293b" }}>Simple. Smooth. Professional.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "30px", width: "100%" }}>
          {PROCESS.map((p, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", border: `2px solid ${BLUE}`, color: BLUE, display: "grid", placeItems: "center", margin: "0 auto 20px" }}>
                <p.icon style={{ width: "26px", height: "26px" }} />
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 600, margin: "0 0 10px", color: "#1e293b" }}>{i + 1}. {p.title}</h3>
              <p style={{ color: "#64748b", fontSize: "14px", lineHeight: 1.5, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0B1A33", color: "white", padding: "60px 20px", width: "100%", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "30px", width: "100%" }}>
          <div style={{ textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "32px", height: "32px", border: `2px solid ${BLUE}`, borderRadius: "50%", display: "grid", placeItems: "center", fontWeight: "bold", fontSize: "12px" }}>360</span>
              <span style={{ fontWeight: 600 }}>Virtual Tours</span>
            </div>
            <p style={{ opacity: 0.6, fontSize: "13px", marginTop: "10px", maxWidth: "300px" }}>Helping local organizations capture spaces flawlessly.</p>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            {[Share2, Play, GoogleG].map((Icon, i) => (
              <a key={i} href="#" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "grid", placeItems: "center", color: "white" }}>
                <Icon style={{ width: "16px", height: "16px" }} />
              </a>
            ))}
          </div>
        </div>
        <div style={{ maxWidth: "1200px", borderTop: "1px solid rgba(255, 255, 255, 0.15)", margin: "40px auto 0", paddingTop: "20px", fontSize: "13px", opacity: 0.5, textAlign: "center", width: "100%" }}>
          © 2026 360 Virtual Tours. All rights reserved.
        </div>
      </footer>

    </main>
  );
}

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