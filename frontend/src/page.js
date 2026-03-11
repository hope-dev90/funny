import { useState, useEffect } from "react";

const trendingItems = [
  { id: "01", icon: "🎵", title: "Espresso", subtitle: "Sabrina Carpenter", tag: "Song", section: "Music" },
  { id: "02", icon: "🎬", title: "Deadpool & Wolverine", subtitle: "Marvel Studios", tag: "Movie", section: "Movies" },
  { id: "03", icon: "💃", title: "The Rizzler Dance", subtitle: "TikTok Trend", tag: "Dance", section: "Dance" },
  { id: "04", icon: "🎮", title: "GTA VI", subtitle: "Rockstar Games", tag: "Game", section: "Games" },
  { id: "05", icon: "📺", title: "Squid Game S2", subtitle: "Netflix", tag: "TV Show", section: "TV Shows" },
  { id: "06", icon: "🎵", title: "APT.", subtitle: "ROSÉ ft. Bruno Mars", tag: "Song", section: "Music" },
];

const categories = [
  { id: "music", section: "Music", icon: "🎵", title: "Best Songs 🎵", desc: "Top hits dominating the charts right now", tags: ["Sabrina Carpenter", "Billie Eilish", "Kendrick Lamar", "Doja Cat"], bg: "linear-gradient(135deg, #3d1a6e 0%, #6b21a8 50%, #1a0a3e 100%)", img: "🎧" },
  { id: "dance", section: "Dance", icon: "💃", title: "Viral Dances 💃", desc: "TikTok moves everyone's doing", tags: ["Rizzler", "Apple Dance", "Mamushi", "Gata Only"], bg: "linear-gradient(135deg, #78350f 0%, #d97706 50%, #92400e 100%)", img: "🕺" },
  { id: "movies", section: "Movies", icon: "🎬", title: "Blockbuster Movies 🎬", desc: "Must-watch films you can't miss", tags: ["Inside Out 2", "Wicked", "Moana 2", "Dune Part 2"], bg: "linear-gradient(135deg, #0f3460 0%, #0e7490 50%, #0c4a6e 100%)", img: "🎥" },
  { id: "games", section: "Games", icon: "🎮", title: "Epic Games 🎮", desc: "Most-played titles right now", tags: ["GTA VI", "Fortnite", "Minecraft", "Elden Ring"], bg: "linear-gradient(135deg, #0d2818 0%, #15803d 50%, #052e16 100%)", img: "🕹️" },
  { id: "tv", section: "TV Shows", icon: "📺", title: "Binge-Worthy Shows 📺", desc: "Can't-stop-watching series", tags: ["Squid Game S2", "The Bear", "Severance", "House of Dragon"], bg: "linear-gradient(135deg, #1e1b4b 0%, #7c3aed 50%, #312e81 100%)", img: "📡" },
];

const sectionDetails = {
  Music: {
    hero: { emoji: "🎧", title: "Best Songs", subtitle: "Top hits dominating the charts right now", accent: "#f472b6" },
    items: [
      { rank: "01", icon: "🎵", title: "Espresso", sub: "Sabrina Carpenter", tag: "Pop" },
      { rank: "02", icon: "🎵", title: "APT.", sub: "ROSÉ ft. Bruno Mars", tag: "K-Pop" },
      { rank: "03", icon: "🎵", title: "Not Like Us", sub: "Kendrick Lamar", tag: "Hip-Hop" },
      { rank: "04", icon: "🎵", title: "Birds of a Feather", sub: "Billie Eilish", tag: "Alt-Pop" },
      { rank: "05", icon: "🎵", title: "Paint the Town Red", sub: "Doja Cat", tag: "Hip-Hop" },
      { rank: "06", icon: "🎵", title: "Cruel Summer", sub: "Taylor Swift", tag: "Pop" },
    ],
  },
  Dance: {
    hero: { emoji: "🕺", title: "Viral Dances", subtitle: "TikTok moves everyone's doing", accent: "#fb923c" },
    items: [
      { rank: "01", icon: "💃", title: "The Rizzler", sub: "TikTok Trend", tag: "Viral" },
      { rank: "02", icon: "💃", title: "Apple Dance", sub: "Charli XCX", tag: "Choreo" },
      { rank: "03", icon: "💃", title: "Mamushi Move", sub: "Megan Thee Stallion", tag: "Viral" },
      { rank: "04", icon: "💃", title: "Gata Only Slide", sub: "FloyyMenor", tag: "Latin" },
      { rank: "05", icon: "💃", title: "Demure Walk", sub: "TikTok Trend", tag: "Viral" },
      { rank: "06", icon: "💃", title: "Wap Challenge", sub: "Cardi B", tag: "Classic" },
    ],
  },
  Movies: {
    hero: { emoji: "🎥", title: "Blockbuster Movies", subtitle: "Must-watch films you can't miss", accent: "#22d3ee" },
    items: [
      { rank: "01", icon: "🎬", title: "Deadpool & Wolverine", sub: "Marvel Studios", tag: "Action" },
      { rank: "02", icon: "🎬", title: "Inside Out 2", sub: "Pixar", tag: "Animation" },
      { rank: "03", icon: "🎬", title: "Wicked", sub: "Universal", tag: "Musical" },
      { rank: "04", icon: "🎬", title: "Moana 2", sub: "Disney", tag: "Animation" },
      { rank: "05", icon: "🎬", title: "Dune Part 2", sub: "Warner Bros.", tag: "Sci-Fi" },
      { rank: "06", icon: "🎬", title: "Alien: Romulus", sub: "20th Century", tag: "Horror" },
    ],
  },
  Games: {
    hero: { emoji: "🕹️", title: "Epic Games", subtitle: "Most-played titles right now", accent: "#4ade80" },
    items: [
      { rank: "01", icon: "🎮", title: "GTA VI", sub: "Rockstar Games", tag: "Open World" },
      { rank: "02", icon: "🎮", title: "Fortnite", sub: "Epic Games", tag: "Battle Royale" },
      { rank: "03", icon: "🎮", title: "Minecraft", sub: "Mojang", tag: "Sandbox" },
      { rank: "04", icon: "🎮", title: "Elden Ring", sub: "FromSoftware", tag: "RPG" },
      { rank: "05", icon: "🎮", title: "Baldur's Gate 3", sub: "Larian Studios", tag: "RPG" },
      { rank: "06", icon: "🎮", title: "Cyberpunk 2077", sub: "CD Projekt Red", tag: "Open World" },
    ],
  },
  "TV Shows": {
    hero: { emoji: "📡", title: "Binge-Worthy Shows", subtitle: "Can't-stop-watching series", accent: "#a78bfa" },
    items: [
      { rank: "01", icon: "📺", title: "Squid Game S2", sub: "Netflix", tag: "Thriller" },
      { rank: "02", icon: "📺", title: "The Bear S3", sub: "FX / Hulu", tag: "Drama" },
      { rank: "03", icon: "📺", title: "Severance S2", sub: "Apple TV+", tag: "Sci-Fi" },
      { rank: "04", icon: "📺", title: "House of the Dragon", sub: "HBO", tag: "Fantasy" },
      { rank: "05", icon: "📺", title: "The Last of Us S2", sub: "HBO", tag: "Drama" },
      { rank: "06", icon: "📺", title: "Stranger Things S5", sub: "Netflix", tag: "Sci-Fi" },
    ],
  },
};

export default function FunHub() {
  const [activeNav, setActiveNav] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  const handleNav = (section) => {
    setPageVisible(false);
    setTimeout(() => {
      setActiveNav(section);
      setPageVisible(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 250);
  };

  const handleHome = () => {
    setPageVisible(false);
    setTimeout(() => {
      setActiveNav(null);
      setPageVisible(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 250);
  };

  return (
    <div style={{ background: "#080810", minHeight: "100vh", fontFamily: "'Segoe UI', sans-serif", color: "#fff", overflowX: "hidden", opacity: pageVisible ? 1 : 0, transition: "opacity 0.25s ease" }}>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 48px", height: "60px",
        background: "rgba(8,8,16,0.85)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)"
      }}>
        <div onClick={handleHome} style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
          <span style={{ color: "#00e5ff", fontSize: "20px", fontWeight: 900 }}>⚡</span>
          <span style={{ fontWeight: 800, fontSize: "17px", letterSpacing: "-0.5px" }}>
            <span style={{ background: "linear-gradient(90deg, #f472b6, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>FUN</span>
            <span style={{ color: "#fff" }}> HUB</span>
          </span>
        </div>
        <div style={{ display: "flex", gap: "40px" }}>
          {["Music", "Dance", "Movies", "Games", "TV Shows"].map(item => (
            <button key={item} onClick={() => handleNav(item)} style={{
              background: "none", border: "none", cursor: "pointer",
              color: activeNav === item ? "#fff" : "rgba(255,255,255,0.55)",
              fontSize: "14px", fontWeight: activeNav === item ? 700 : 400,
              transition: "color 0.2s", padding: "4px 0", position: "relative",
            }}>
              {item}
              {activeNav === item && (
                <span style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #f472b6, #a78bfa)", borderRadius: "2px" }} />
              )}
            </button>
          ))}
        </div>
      </nav>

      {activeNav ? (
        <SectionPage section={activeNav} data={sectionDetails[activeNav]} onNav={handleNav} />
      ) : (
        <HomePage mounted={mounted} onNav={handleNav} />
      )}

      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.25}}`}</style>
    </div>
  );
}

function HomePage({ mounted, onNav }) {
  return (
    <>
      <section style={{ position: "relative", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "#080810" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(60,20,100,0.25) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", width: 180, height: 180, borderRadius: "50%", top: "8%", left: "14%", background: "radial-gradient(circle, rgba(200,140,20,0.85) 0%, rgba(180,100,0,0.4) 45%, transparent 70%)", filter: "blur(8px)" }} />
        <div style={{ position: "absolute", width: 100, height: 100, borderRadius: "50%", top: "9%", right: "28%", background: "radial-gradient(circle, rgba(140,80,160,0.7) 0%, rgba(100,40,120,0.3) 50%, transparent 70%)", filter: "blur(10px)" }} />
        <div style={{ position: "absolute", width: 320, height: 320, borderRadius: "50%", top: "42%", left: "8%", transform: "translateY(-50%)", background: "radial-gradient(circle, rgba(80,30,120,0.6) 0%, rgba(50,10,80,0.25) 50%, transparent 70%)", filter: "blur(20px)" }} />
        <div style={{ position: "absolute", width: 220, height: 220, borderRadius: "50%", top: "50%", right: "6%", transform: "translateY(-30%)", background: "radial-gradient(circle, rgba(180,200,20,0.55) 0%, rgba(120,160,0,0.25) 50%, transparent 70%)", filter: "blur(14px)" }} />
        <div style={{ position: "absolute", width: 80, height: 80, borderRadius: "50%", bottom: "28%", left: "22%", background: "radial-gradient(circle, rgba(20,180,80,0.6) 0%, transparent 70%)", filter: "blur(8px)" }} />
        <div style={{ position: "absolute", width: 20, height: 20, borderRadius: "50%", bottom: "34%", left: "63%", background: "rgba(120,180,255,0.5)", filter: "blur(4px)" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div style={{ position: "absolute", width: "200%", height: "1.5px", background: "linear-gradient(90deg, transparent 0%, rgba(200,60,240,0.0) 15%, rgba(200,60,240,0.55) 30%, rgba(220,80,255,0.8) 45%, rgba(200,60,240,0.55) 60%, rgba(160,20,200,0.2) 75%, transparent 100%)", top: "38%", left: "-50%", transform: "rotate(-28deg)", filter: "blur(0.5px)" }} />
          <div style={{ position: "absolute", width: "200%", height: "6px", background: "linear-gradient(90deg, transparent 0%, transparent 15%, rgba(180,40,220,0.12) 30%, rgba(200,60,240,0.22) 45%, rgba(180,40,220,0.12) 60%, transparent 75%, transparent 100%)", top: "38%", left: "-50%", transform: "rotate(-28deg) translateY(-2px)", filter: "blur(3px)" }} />
          <div style={{ position: "absolute", width: "200%", height: "1px", background: "linear-gradient(90deg, transparent 0%, transparent 20%, rgba(140,60,200,0.3) 35%, rgba(160,80,220,0.6) 50%, rgba(140,60,200,0.3) 65%, transparent 80%, transparent 100%)", top: "44%", left: "-50%", transform: "rotate(-28deg)" }} />
          <div style={{ position: "absolute", width: "200%", height: "1.5px", background: "linear-gradient(90deg, transparent 0%, transparent 25%, rgba(160,30,180,0.15) 38%, rgba(180,50,200,0.4) 50%, rgba(160,30,180,0.15) 62%, transparent 75%, transparent 100%)", top: "18%", left: "-50%", transform: "rotate(35deg)", filter: "blur(0.5px)" }} />
        </div>

        <div style={{ textAlign: "center", position: "relative", zIndex: 2, opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s cubic-bezier(0.34,1.56,0.64,1)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "100px", padding: "8px 20px", marginBottom: "36px", fontSize: "14px", color: "rgba(255,255,255,0.75)" }}>
            ✨ Your ultimate entertainment destination
          </div>
          <h1 style={{ fontSize: "clamp(80px,13vw,130px)", fontWeight: 900, letterSpacing: "-5px", lineHeight: 1, margin: "0 0 28px" }}>
            <span style={{ background: "linear-gradient(90deg, #f472b6 0%, #c084fc 35%, #a78bfa 60%, #e2e8f0 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>FUN</span>
            <span style={{ color: "#ffffff" }}>HUB</span>
          </h1>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.6)", maxWidth: "580px", lineHeight: 1.65, margin: "0 auto 48px" }}>
            Discover the hottest songs, craziest dances, blockbuster movies,<br />
            epic games &amp; binge-worthy TV shows — all in one place 🔥
          </p>
          <button onClick={() => document.getElementById("vibe-section").scrollIntoView({ behavior: "smooth" })}
            style={{ background: "#00e8ff", color: "#000", border: "none", borderRadius: "100px", padding: "17px 46px", fontSize: "17px", fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "10px", boxShadow: "0 0 50px rgba(0,230,255,0.45)", transition: "transform 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
            Explore Now ↓
          </button>
        </div>
      </section>

      <section id="vibe-section" style={{ padding: "100px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "46px", fontWeight: 800, margin: "0 0 12px", letterSpacing: "-1.5px" }}>What's Your Vibe? ⚡</h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "15px" }}>Pick a category and dive in</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {categories.slice(0, 3).map(cat => <CategoryCard key={cat.id} cat={cat} onNav={onNav} />)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", marginTop: "16px" }}>
          {categories.slice(3).map(cat => <CategoryCard key={cat.id} cat={cat} onNav={onNav} />)}
        </div>
      </section>

      <section style={{ padding: "80px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
          <span style={{ color: "#f472b6", fontSize: "20px" }}>↗</span>
          <h2 style={{ fontSize: "34px", fontWeight: 800, margin: 0, letterSpacing: "-1px" }}>Trending Now</h2>
          <span style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)", color: "#ef4444", borderRadius: "100px", padding: "4px 12px", fontSize: "12px", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ef4444", display: "inline-block", animation: "pulse 1.5s infinite" }} />
            LIVE
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {trendingItems.map(item => <TrendingRow key={item.id} item={item} onNav={onNav} />)}
        </div>
      </section>
    </>
  );
}

function TrendingRow({ item, onNav }) {
  const [hovered, setHovered] = useState(false);

  const tagColors = {
    Song: "#f472b6", Movie: "#22d3ee", Dance: "#fb923c", Game: "#4ade80", "TV Show": "#a78bfa"
  };
  const accent = tagColors[item.tag] || "#fff";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onNav(item.section)}
      style={{
        display: "flex", alignItems: "center", gap: "24px",
        padding: "18px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)",
        cursor: "pointer", borderRadius: "8px",
        background: hovered ? "rgba(255,255,255,0.04)" : "transparent",
        transition: "background 0.2s, transform 0.2s",
        transform: hovered ? "translateX(6px)" : "translateX(0)",
      }}>
      <span style={{ fontSize: "18px", fontWeight: 700, color: hovered ? accent : "rgba(255,255,255,0.2)", minWidth: "36px", transition: "color 0.2s" }}>{item.id}</span>
      <span style={{ fontSize: "22px" }}>{item.icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: "15px" }}>{item.title}</div>
        <div style={{ color: "rgba(255,255,255,0.38)", fontSize: "12px", marginTop: "2px" }}>{item.subtitle}</div>
      </div>
      <span style={{
        background: `${accent}18`, border: `1px solid ${accent}44`,
        borderRadius: "100px", padding: "5px 14px", fontSize: "12px", color: accent,
        transition: "background 0.2s"
      }}>{item.tag}</span>
      <span style={{ color: hovered ? accent : "rgba(255,255,255,0.2)", fontSize: "16px", transition: "color 0.2s, transform 0.2s", transform: hovered ? "translateX(4px)" : "translateX(0)" }}>→</span>
    </div>
  );
}

function SectionPage({ section, data, onNav }) {
  const { hero, items } = data;
  const otherSections = ["Music", "Dance", "Movies", "Games", "TV Shows"].filter(s => s !== section);

  return (
    <div style={{ paddingTop: "60px" }}>
      <div style={{ position: "relative", height: "340px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "linear-gradient(135deg, #0a0a14 0%, #12081e 50%, #080810 100%)" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 70% 80% at 50% 50%, ${hero.accent}22 0%, transparent 70%)` }} />
        <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", top: "50%", left: "10%", transform: "translateY(-50%)", background: `radial-gradient(circle, ${hero.accent}33 0%, transparent 70%)`, filter: "blur(30px)" }} />
        <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", top: "20%", right: "15%", background: `radial-gradient(circle, ${hero.accent}22 0%, transparent 70%)`, filter: "blur(20px)" }} />
        <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <div style={{ fontSize: "72px", marginBottom: "16px" }}>{hero.emoji}</div>
          <h1 style={{ fontSize: "52px", fontWeight: 900, margin: "0 0 12px", letterSpacing: "-2px", color: "#fff" }}>{hero.title}</h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px", margin: 0 }}>{hero.subtitle}</p>
        </div>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 800, margin: 0 }}>Top {section}</h2>
          <span style={{ background: `${hero.accent}22`, border: `1px solid ${hero.accent}44`, color: hero.accent, borderRadius: "100px", padding: "4px 12px", fontSize: "12px", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: hero.accent, display: "inline-block", animation: "pulse 1.5s infinite" }} /> LIVE
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((item, i) => <SectionRow key={i} item={item} accent={hero.accent} />)}
        </div>
        <div style={{ marginTop: "72px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 24px", color: "rgba(255,255,255,0.6)" }}>Explore More</h3>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {otherSections.map(s => {
              const cat = categories.find(c => c.section === s);
              return (
                <button key={s} onClick={() => onNav(s)} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "16px 28px", color: "#fff", cursor: "pointer", fontSize: "15px", fontWeight: 600, display: "flex", alignItems: "center", gap: "8px", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <span style={{ fontSize: "20px" }}>{cat?.img}</span> {s}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionRow({ item, accent }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ display: "flex", alignItems: "center", gap: "24px", padding: "18px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", cursor: "pointer", borderRadius: "10px", background: hovered ? "rgba(255,255,255,0.04)" : "transparent", transition: "background 0.2s" }}>
      <span style={{ fontSize: "18px", fontWeight: 700, color: hovered ? accent : "rgba(255,255,255,0.2)", minWidth: "36px", transition: "color 0.2s" }}>{item.rank}</span>
      <span style={{ fontSize: "24px" }}>{item.icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: "16px" }}>{item.title}</div>
        <div style={{ color: "rgba(255,255,255,0.38)", fontSize: "13px", marginTop: "2px" }}>{item.sub}</div>
      </div>
      <span style={{ background: `${accent}18`, border: `1px solid ${accent}33`, borderRadius: "100px", padding: "5px 14px", fontSize: "12px", color: accent }}>{item.tag}</span>
    </div>
  );
}

function CategoryCard({ cat, onNav }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => onNav(cat.section)}
      style={{ borderRadius: "16px", overflow: "hidden", cursor: "pointer", transform: hovered ? "translateY(-5px)" : "translateY(0)", transition: "transform 0.3s ease, box-shadow 0.3s ease", boxShadow: hovered ? "0 24px 60px rgba(0,0,0,0.6)" : "0 4px 20px rgba(0,0,0,0.4)" }}>
      <div style={{ height: "200px", background: cat.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "80px", position: "relative" }}>
        <span style={{ transition: "transform 0.3s", transform: hovered ? "scale(1.12)" : "scale(1)" }}>{cat.img}</span>
        <div style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(0,0,0,0.35)", borderRadius: "8px", padding: "6px 8px", fontSize: "16px" }}>{cat.icon}</div>
      </div>
      <div style={{ background: "#10101a", padding: "20px" }}>
        <h3 style={{ margin: "0 0 6px", fontSize: "17px", fontWeight: 700 }}>{cat.title}</h3>
        <p style={{ margin: "0 0 14px", color: "rgba(255,255,255,0.45)", fontSize: "13px" }}>{cat.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {cat.tags.map(tag => (
            <span key={tag} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "100px", padding: "4px 12px", fontSize: "12px", color: "rgba(255,255,255,0.65)" }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}