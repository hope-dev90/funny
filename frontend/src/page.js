import { useState, useEffect, useRef } from "react";

const trendingItems = [
  { id: "01", icon: "🎵", title: "Espresso", subtitle: "Sabrina Carpenter", tag: "Song", section: "Music" },
  { id: "02", icon: "🎬", title: "Deadpool & Wolverine", subtitle: "Marvel Studios", tag: "Movie", section: "Movies" },
  { id: "03", icon: "💃", title: "The Rizzler Dance", subtitle: "TikTok Trend", tag: "Dance", section: "Dance" },
  { id: "04", icon: "🎮", title: "GTA VI", subtitle: "Rockstar Games", tag: "Game", section: "Games" },
  { id: "05", icon: "📺", title: "Squid Game S2", subtitle: "Netflix", tag: "TV Show", section: "TV Shows" },
  { id: "06", icon: "🎵", title: "APT.", subtitle: "ROSÉ ft. Bruno Mars", tag: "Song", section: "Music" },
];

const categories = [
  { id: "music", section: "Music", icon: "🎵", title: "Best Songs", desc: "Top hits dominating the charts right now", tags: ["Sabrina Carpenter", "Billie Eilish", "Kendrick Lamar", "Doja Cat"], accent: "#c084fc", img: "🎧" },
  { id: "dance", section: "Dance", icon: "💃", title: "Viral Dances", desc: "TikTok moves everyone's doing", tags: ["Rizzler", "Apple Dance", "Mamushi", "Gata Only"], accent: "#fb923c", img: "🕺" },
  { id: "movies", section: "Movies", icon: "🎬", title: "Blockbuster Movies", desc: "Must-watch films you can't miss", tags: ["Inside Out 2", "Wicked", "Moana 2", "Dune Part 2"], accent: "#f87171", img: "🎥" },
  { id: "games", section: "Games", icon: "🎮", title: "Epic Games", desc: "Most-played titles right now", tags: ["GTA VI", "Fortnite", "Minecraft", "Elden Ring"], accent: "#4ade80", img: "🕹️" },
  { id: "tv", section: "TV Shows", icon: "📺", title: "Binge-Worthy Shows", desc: "Can't-stop-watching series", tags: ["Squid Game S2", "The Bear", "Severance", "House of Dragon"], accent: "#a78bfa", img: "📡" },
];

const sectionDetails = {
  Music: {
    hero: { emoji: "🎧", title: "Best Songs", subtitle: "Top hits dominating the charts right now", accent: "#c084fc" },
    items: [
      { rank: "01", icon: "🎵", title: "Espresso", sub: "Sabrina Carpenter", tag: "Pop", embedType: "youtube", embedId: "eVli-tstM5E" },
      { rank: "02", icon: "🎵", title: "APT.", sub: "ROSÉ ft. Bruno Mars", tag: "K-Pop", embedType: "youtube", embedId: "ekr2nIex040" },
      { rank: "03", icon: "🎵", title: "Not Like Us", sub: "Kendrick Lamar", tag: "Hip-Hop", embedType: "youtube", embedId: "SZcSHBGaO4I" },
      { rank: "04", icon: "🎵", title: "Birds of a Feather", sub: "Billie Eilish", tag: "Alt-Pop", embedType: "youtube", embedId: "QRMeEL_3oEA" },
      { rank: "05", icon: "🎵", title: "Paint the Town Red", sub: "Doja Cat", tag: "Hip-Hop", embedType: "youtube", embedId: "a-q6S6_VHAw" },
      { rank: "06", icon: "🎵", title: "Cruel Summer", sub: "Taylor Swift", tag: "Pop", embedType: "youtube", embedId: "ic8j13piAhQ" },
    ],
  },
  Dance: {
    hero: { emoji: "🕺", title: "Viral Dances", subtitle: "TikTok moves everyone's doing", accent: "#fb923c" },
    items: [
      { rank: "01", icon: "💃", title: "The Rizzler", sub: "TikTok Trend", tag: "Viral", embedType: "youtube", embedId: "nMnzz1Y7Ypg" },
      { rank: "02", icon: "💃", title: "Apple Dance Tutorial", sub: "Charli XCX", tag: "Choreo", embedType: "youtube", embedId: "xFMr0P1INVY" },
      { rank: "03", icon: "💃", title: "Mamushi Move", sub: "Megan Thee Stallion", tag: "Viral", embedType: "youtube", embedId: "6sT5Sbxe498" },
      { rank: "04", icon: "💃", title: "Gata Only Slide", sub: "FloyyMenor", tag: "Latin", embedType: "youtube", embedId: "eFjnjnFxDEs" },
      { rank: "05", icon: "💃", title: "Demure Walk", sub: "TikTok Trend", tag: "Viral", embedType: "youtube", embedId: "mHwkD6bkLfE" },
      { rank: "06", icon: "💃", title: "Hips Don't Lie Dance", sub: "Shakira Classic", tag: "Classic", embedType: "youtube", embedId: "DUT5rEU6pqM" },
    ],
  },
  Movies: {
    hero: { emoji: "🎥", title: "Blockbuster Movies", subtitle: "Watch official trailers", accent: "#f87171" },
    items: [
      { rank: "01", icon: "🎬", title: "Deadpool & Wolverine", sub: "Marvel Studios", tag: "Action", embedType: "youtube", embedId: "73_1biulkYk" },
      { rank: "02", icon: "🎬", title: "Inside Out 2", sub: "Pixar", tag: "Animation", embedType: "youtube", embedId: "LEjhY15eCx0" },
      { rank: "03", icon: "🎬", title: "Wicked", sub: "Universal", tag: "Musical", embedType: "youtube", embedId: "6COmYeLyRKw" },
      { rank: "04", icon: "🎬", title: "Moana 2", sub: "Disney", tag: "Animation", embedType: "youtube", embedId: "3rAVRQvXRSo" },
      { rank: "05", icon: "🎬", title: "Dune Part 2", sub: "Warner Bros.", tag: "Sci-Fi", embedType: "youtube", embedId: "Way9Dexny3w" },
      { rank: "06", icon: "🎬", title: "Alien: Romulus", sub: "20th Century", tag: "Horror", embedType: "youtube", embedId: "eSqzHZMHRb0" },
    ],
  },
  Games: {
    hero: { emoji: "🕹️", title: "Epic Games", subtitle: "Play free browser games instantly", accent: "#4ade80" },
    items: [
      { rank: "01", icon: "🎮", title: "2048", sub: "Classic Puzzle Game", tag: "Puzzle", embedType: "game", embedUrl: "https://play2048.co/" },
      { rank: "02", icon: "🎮", title: "Wordle", sub: "NYT Word Game", tag: "Word", embedType: "game", embedUrl: "https://www.nytimes.com/games/wordle/index.html" },
      { rank: "03", icon: "🎮", title: "Chess", sub: "Chess.com", tag: "Strategy", embedType: "game", embedUrl: "https://www.chess.com/play/computer" },
      { rank: "04", icon: "🎮", title: "Pac-Man", sub: "Google Classic", tag: "Arcade", embedType: "game", embedUrl: "https://www.google.com/logos/2010/pacman10-i.html" },
      { rank: "05", icon: "🎮", title: "Flappy Bird", sub: "Browser Clone", tag: "Casual", embedType: "game", embedUrl: "https://flappybird.io/" },
      { rank: "06", icon: "🎮", title: "Tic Tac Toe", sub: "2-Player Classic", tag: "Classic", embedType: "builtin", embedId: "tictactoe" },
    ],
  },
  "TV Shows": {
    hero: { emoji: "📡", title: "Binge-Worthy Shows", subtitle: "Watch official trailers & clips", accent: "#a78bfa" },
    items: [
      { rank: "01", icon: "📺", title: "Squid Game S2", sub: "Netflix", tag: "Thriller", embedType: "youtube", embedId: "oqxAJKy0ii4" },
      { rank: "02", icon: "📺", title: "The Bear S3", sub: "FX / Hulu", tag: "Drama", embedType: "youtube", embedId: "QWdJYGSAJTk" },
      { rank: "03", icon: "📺", title: "Severance S2", sub: "Apple TV+", tag: "Sci-Fi", embedType: "youtube", embedId: "ODin2B8XPG4" },
      { rank: "04", icon: "📺", title: "House of the Dragon", sub: "HBO", tag: "Fantasy", embedType: "youtube", embedId: "DotnJ7tTA34" },
      { rank: "05", icon: "📺", title: "The Last of Us S2", sub: "HBO", tag: "Drama", embedType: "youtube", embedId: "wFBM-qKEXFw" },
      { rank: "06", icon: "📺", title: "Stranger Things S5", sub: "Netflix", tag: "Sci-Fi", embedType: "youtube", embedId: "oBFsHarW7eU" },
    ],
  },
};

const tagAccents = { Song: "#c084fc", Movie: "#f87171", Dance: "#fb923c", Game: "#4ade80", "TV Show": "#a78bfa" };
const NAV_SECTIONS = ["Music", "Dance", "Movies", "Games", "TV Shows"];

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const calculateWinner = (s) => {
    for (let [a,b,c] of [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]])
      if (s[a] && s[a]===s[b] && s[a]===s[c]) return s[a];
    return null;
  };
  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(Boolean);
  const handleClick = (i) => {
    if (board[i] || winner) return;
    const next = board.slice(); next[i] = xIsNext ? "X" : "O";
    setBoard(next); setXIsNext(!xIsNext);
  };
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height:"100%", background:"#0a0612", padding:"24px" }}>
      <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"22px", color:"#e8c84a", marginBottom:"8px", letterSpacing:"0.1em" }}>Tic Tac Toe</div>
      <div style={{ fontFamily:"'Crimson Pro',serif", fontSize:"14px", fontStyle:"italic", color: winner?"#4ade80":isDraw?"#fb923c":"#c4a888", marginBottom:"20px" }}>
        {winner ? `🎉 Player ${winner} wins!` : isDraw ? "🤝 It's a draw!" : `Player ${xIsNext?"X":"O"}'s turn`}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"8px", marginBottom:"20px" }}>
        {board.map((cell,i) => (
          <button key={i} onClick={()=>handleClick(i)} style={{ width:80, height:80, background:cell?"rgba(140,30,30,0.3)":"rgba(140,30,30,0.1)", border:"1px solid rgba(180,60,60,0.4)", borderRadius:"4px", cursor:cell||winner?"default":"pointer", fontSize:"28px", fontWeight:900, color:cell==="X"?"#f87171":"#a78bfa", transition:"all 0.15s" }}>{cell}</button>
        ))}
      </div>
      <button onClick={()=>{setBoard(Array(9).fill(null));setXIsNext(true);}} style={{ background:"linear-gradient(135deg,#8b0000,#5a0000)", color:"#e8c84a", border:"none", borderRadius:"2px", padding:"10px 28px", fontFamily:"'Crimson Pro',serif", fontSize:"12px", letterSpacing:"0.18em", textTransform:"uppercase", cursor:"pointer" }}>New Game</button>
    </div>
  );
}

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');
  * { box-sizing:border-box; margin:0; padding:0; }
  .fh-root { background:#06040a; min-height:100vh; font-family:'Crimson Pro',Georgia,serif; color:#e8ddd0; overflow-x:hidden; }

  /* NAV */
  .fh-nav { position:fixed; top:0; left:0; right:0; z-index:100; display:flex; align-items:center; justify-content:space-between; padding:0 32px; height:56px; background:rgba(6,4,10,0.92); backdrop-filter:blur(24px); border-bottom:1px solid rgba(180,80,80,0.15); gap:16px; }
  .fh-logo { display:flex; align-items:center; gap:9px; cursor:pointer; font-family:'Playfair Display',serif; flex-shrink:0; }
  .fh-logo-reel { width:30px; height:30px; border-radius:50%; background:radial-gradient(circle,#c0392b 0%,#6b0000 100%); display:flex; align-items:center; justify-content:center; font-size:13px; box-shadow:0 0 14px rgba(192,57,43,0.7); animation:reelPulse 3s ease-in-out infinite; flex-shrink:0; }
  @keyframes reelPulse { 0%,100%{box-shadow:0 0 14px rgba(192,57,43,0.7)} 50%{box-shadow:0 0 28px rgba(220,80,60,1)} }
  .fh-logo-text { font-size:17px; font-weight:900; letter-spacing:0.05em; background:linear-gradient(90deg,#e8c84a,#c0392b); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
  .fh-breadcrumb { display:flex; align-items:center; gap:6px; font-size:12px; color:rgba(180,140,100,0.5); letter-spacing:0.1em; flex-shrink:0; }
  .fh-breadcrumb-sep { color:rgba(140,80,60,0.4); font-size:10px; }
  .fh-breadcrumb-current { color:#e8c84a; font-style:italic; }
  .fh-nav-links { display:flex; gap:22px; align-items:center; }
  .fh-nav-btn { background:none; border:none; cursor:pointer; font-family:'Crimson Pro',serif; font-size:12px; font-weight:400; letter-spacing:0.14em; text-transform:uppercase; color:rgba(220,200,180,0.45); transition:color 0.25s; padding:4px 0; position:relative; white-space:nowrap; }
  .fh-nav-btn:hover,.fh-nav-btn.active { color:#e8c84a; }
  .fh-nav-btn.active::after { content:''; position:absolute; bottom:-4px; left:0; right:0; height:1px; background:linear-gradient(90deg,#e8c84a,transparent); }
  .fh-home-btn { display:flex; align-items:center; gap:6px; background:rgba(140,30,30,0.15); border:1px solid rgba(180,60,60,0.3); border-radius:2px; padding:5px 14px; color:#e8c84a; cursor:pointer; font-family:'Crimson Pro',serif; font-size:11px; letter-spacing:0.16em; text-transform:uppercase; transition:all 0.22s; flex-shrink:0; }
  .fh-home-btn:hover { background:rgba(180,50,50,0.28); border-color:rgba(220,80,60,0.55); transform:translateX(-2px); }

  /* HERO */
  .fh-hero { position:relative; min-height:100vh; display:flex; align-items:center; justify-content:center; overflow:hidden; background:radial-gradient(ellipse 90% 70% at 50% 40%,#2a0808 0%,#130506 45%,#06040a 100%); }
  .fh-hero-orb { position:absolute; border-radius:50%; pointer-events:none; }
  .fh-hero-content { text-align:center; position:relative; z-index:2; padding:0 24px; opacity:0; transform:translateY(32px); transition:opacity 0.9s cubic-bezier(0.34,1.3,0.64,1),transform 0.9s cubic-bezier(0.34,1.3,0.64,1); }
  .fh-hero-content.visible { opacity:1; transform:translateY(0); }
  .fh-hero-badge { display:inline-flex; align-items:center; gap:8px; background:rgba(200,60,60,0.1); border:1px solid rgba(200,60,60,0.25); border-radius:100px; padding:7px 18px; margin-bottom:32px; font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:rgba(220,180,160,0.7); }
  .fh-hero-title { font-family:'Playfair Display',serif; font-size:clamp(72px,14vw,130px); font-weight:900; letter-spacing:-4px; line-height:0.95; margin-bottom:26px; }
  .fh-hero-title .gold { color:#e8c84a; }
  .fh-hero-title .crimson { background:linear-gradient(135deg,#c0392b,#8b0000); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
  .fh-hero-sub { font-size:15px; color:rgba(220,200,180,0.48); font-style:italic; letter-spacing:0.06em; max-width:480px; margin:0 auto 44px; line-height:1.75; }
  .fh-hero-cta { background:linear-gradient(135deg,#c0392b,#8b0000); color:#e8c84a; border:none; border-radius:2px; padding:15px 42px; font-size:12px; font-weight:600; letter-spacing:0.22em; text-transform:uppercase; cursor:pointer; font-family:'Crimson Pro',serif; box-shadow:0 0 40px rgba(192,57,43,0.5); transition:transform 0.2s,box-shadow 0.2s; }
  .fh-hero-cta:hover { transform:translateY(-2px); box-shadow:0 6px 50px rgba(192,57,43,0.8); }
  .fh-stars { position:absolute; inset:0; pointer-events:none; overflow:hidden; }
  .fh-star { position:absolute; color:#e8c84a; animation:starTwinkle 2.5s ease-in-out infinite; }
  @keyframes starTwinkle { 0%,100%{opacity:0.25;transform:scale(1)} 50%{opacity:1;transform:scale(1.3)} }

  /* TICKER */
  .fh-ticker { background:rgba(0,0,0,0.5); border-top:1px solid rgba(180,60,60,0.2); border-bottom:1px solid rgba(180,60,60,0.2); padding:9px 28px; display:flex; align-items:center; gap:16px; }
  .fh-ticker-badge { background:linear-gradient(135deg,#8b0000,#5a0000); color:#e8c84a; font-size:10px; letter-spacing:0.2em; text-transform:uppercase; padding:3px 10px; border-radius:1px; font-family:'Playfair Display',serif; border:1px solid rgba(200,100,60,0.3); white-space:nowrap; flex-shrink:0; }
  .fh-ticker-text { font-style:italic; font-size:12px; color:rgba(180,160,140,0.55); letter-spacing:0.1em; flex:1; text-align:center; }

  /* DIVIDER */
  .fh-divider { display:flex; align-items:center; gap:14px; margin-bottom:40px; }
  .fh-divider-line { flex:1; height:1px; background:linear-gradient(90deg,rgba(140,40,40,0.6),transparent); }
  .fh-divider-line.right { background:linear-gradient(90deg,transparent,rgba(140,40,40,0.6)); }
  .fh-divider-title { font-family:'Playfair Display',serif; font-size:22px; font-weight:700; color:#c4a888; letter-spacing:0.08em; text-transform:uppercase; white-space:nowrap; }

  /* GENRE GRID */
  .fh-genre-grid { display:grid; grid-template-columns:1fr 1fr; gap:11px; }
  .fh-genre-card { background:linear-gradient(135deg,#130808 0%,#0e0505 100%); border:1px solid rgba(100,30,30,0.4); border-radius:2px; padding:20px 18px; cursor:pointer; position:relative; overflow:hidden; transition:transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94),border-color 0.35s,box-shadow 0.35s; }
  .fh-genre-card::before { content:''; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent,rgba(200,60,60,0.7),transparent); opacity:0; transition:opacity 0.3s; }
  .fh-genre-card:hover { transform:translateY(-3px); border-color:rgba(160,50,50,0.7); box-shadow:0 12px 36px rgba(120,20,20,0.45); }
  .fh-genre-card:hover::before { opacity:1; }
  .fh-genre-header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px; }
  .fh-genre-name { font-family:'Playfair Display',serif; font-size:13px; font-weight:700; color:#d4b8a0; letter-spacing:0.12em; text-transform:uppercase; }
  .fh-genre-icon { font-size:26px; transition:transform 0.3s,filter 0.3s; filter:drop-shadow(0 0 6px rgba(200,60,60,0.3)); }
  .fh-genre-card:hover .fh-genre-icon { transform:scale(1.18); filter:drop-shadow(0 0 14px rgba(220,80,60,0.9)); }
  .fh-genre-rule { width:26px; height:1px; margin-bottom:8px; background:linear-gradient(90deg,#8b2020,transparent); }
  .fh-genre-desc { font-size:11px; font-style:italic; line-height:1.65; color:rgba(160,130,110,0.72); transition:color 0.3s; }
  .fh-genre-card:hover .fh-genre-desc { color:rgba(200,170,140,0.9); }
  .fh-genre-tags { display:flex; flex-wrap:wrap; gap:5px; margin-top:12px; }
  .fh-genre-tag { background:rgba(140,40,40,0.18); border:1px solid rgba(140,40,40,0.3); border-radius:1px; padding:2px 7px; font-size:9px; letter-spacing:0.12em; text-transform:uppercase; color:rgba(180,130,110,0.7); }

  /* REEL */
  .fh-reel-center { display:flex; flex-direction:column; align-items:center; margin-bottom:36px; }
  .fh-reel-btn { width:82px; height:82px; border-radius:50%; background:radial-gradient(circle,#c0392b 0%,#8b0000 55%,#3d0000 100%); display:flex; align-items:center; justify-content:center; font-size:2rem; border:3px solid rgba(100,20,20,0.8); box-shadow:0 0 40px rgba(192,57,43,0.6),0 0 80px rgba(192,57,43,0.18); animation:reelPulse 3s ease-in-out infinite; cursor:default; }
  .fh-reel-label { margin-top:12px; font-family:'Playfair Display',serif; font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:rgba(180,140,100,0.55); }

  /* TRENDING */
  .fh-trend-row { display:flex; align-items:center; gap:18px; padding:15px 12px; border-bottom:1px solid rgba(100,30,30,0.2); cursor:pointer; border-radius:3px; transition:background 0.2s,transform 0.2s; }
  .fh-trend-row:hover { background:rgba(140,30,30,0.1); transform:translateX(6px); }
  .fh-trend-num { font-family:'Playfair Display',serif; font-size:17px; font-weight:700; min-width:32px; color:rgba(180,130,100,0.22); transition:color 0.2s; }
  .fh-trend-row:hover .fh-trend-num { color:#e8c84a; }
  .fh-trend-emoji { font-size:20px; }
  .fh-trend-info { flex:1; min-width:0; }
  .fh-trend-title { font-size:14px; font-weight:600; color:#e0d0c0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .fh-trend-sub { font-size:11px; font-style:italic; color:rgba(160,130,110,0.5); margin-top:1px; }
  .fh-trend-tag { border-radius:1px; padding:3px 10px; font-size:10px; letter-spacing:0.12em; text-transform:uppercase; white-space:nowrap; flex-shrink:0; }
  .fh-trend-arrow { font-size:13px; color:rgba(180,130,100,0.22); transition:color 0.2s,transform 0.2s; flex-shrink:0; }
  .fh-trend-row:hover .fh-trend-arrow { color:#e8c84a; transform:translateX(4px); }

  /* LIVE */
  .fh-live-dot { width:6px; height:6px; border-radius:50%; display:inline-block; animation:livePulse 1.5s infinite; }
  @keyframes livePulse { 0%,100%{opacity:1} 50%{opacity:0.2} }
  .fh-live-badge { display:inline-flex; align-items:center; gap:5px; border-radius:100px; padding:3px 10px; font-size:10px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; }

  /* SECTION PAGE */
  .fh-section-hero { position:relative; height:260px; display:flex; align-items:center; justify-content:center; overflow:hidden; background:linear-gradient(135deg,#0a0608 0%,#120812 50%,#06040a 100%); }
  .fh-section-row { display:flex; align-items:center; gap:16px; padding:14px 14px; border-bottom:1px solid rgba(100,30,30,0.18); border-radius:3px; transition:background 0.2s; }
  .fh-section-row:hover { background:rgba(140,30,30,0.1); }
  .fh-play-btn { display:flex; align-items:center; gap:5px; background:linear-gradient(135deg,#8b0000,#5a0000); border:1px solid rgba(200,80,60,0.4); border-radius:2px; padding:6px 14px; color:#e8c84a; cursor:pointer; font-family:'Crimson Pro',serif; font-size:10px; letter-spacing:0.16em; text-transform:uppercase; transition:all 0.2s; white-space:nowrap; flex-shrink:0; }
  .fh-play-btn:hover { background:linear-gradient(135deg,#c0392b,#8b0000); box-shadow:0 0 16px rgba(192,57,43,0.5); transform:scale(1.04); }

  /* MODAL */
  .fh-modal-overlay { position:fixed; inset:0; z-index:999; background:rgba(3,2,6,0.95); backdrop-filter:blur(16px); display:flex; flex-direction:column; align-items:center; justify-content:flex-start; padding:0; overflow-y:auto; animation:fadeIn 0.25s ease; }
  @keyframes fadeIn { from{opacity:0} to{opacity:1} }

  /* modal top bar */
  .fh-modal-topbar { width:100%; background:rgba(8,4,14,0.98); border-bottom:1px solid rgba(160,50,50,0.25); padding:0 32px; height:52px; display:flex; align-items:center; justify-content:space-between; flex-shrink:0; gap:16px; position:sticky; top:0; z-index:10; }
  .fh-modal-back { display:flex; align-items:center; gap:7px; background:rgba(140,30,30,0.18); border:1px solid rgba(180,60,60,0.32); border-radius:2px; padding:6px 16px; color:#e8c84a; cursor:pointer; font-family:'Crimson Pro',serif; font-size:11px; letter-spacing:0.18em; text-transform:uppercase; transition:all 0.2s; flex-shrink:0; }
  .fh-modal-back:hover { background:rgba(200,50,50,0.3); transform:translateX(-3px); }
  .fh-modal-crumb { display:flex; align-items:center; gap:6px; font-size:11px; letter-spacing:0.1em; overflow:hidden; }
  .fh-modal-crumb-home { color:rgba(160,120,80,0.55); cursor:pointer; transition:color 0.2s; white-space:nowrap; }
  .fh-modal-crumb-home:hover { color:#e8c84a; }
  .fh-modal-crumb-sep { color:rgba(120,70,50,0.4); font-size:10px; flex-shrink:0; }
  .fh-modal-crumb-section { color:rgba(180,140,100,0.55); font-style:italic; white-space:nowrap; }
  .fh-modal-crumb-title { color:#e8c84a; font-style:italic; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:180px; }
  .fh-modal-close { background:rgba(140,30,30,0.2); border:1px solid rgba(180,60,60,0.35); border-radius:2px; color:#e8c84a; cursor:pointer; font-size:16px; width:34px; height:34px; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:all 0.2s; }
  .fh-modal-close:hover { background:rgba(200,50,50,0.35); transform:scale(1.1); }

  /* modal body */
  .fh-modal-body { width:100%; max-width:980px; margin:0 auto; padding:24px 24px 40px; display:flex; flex-direction:column; gap:16px; }
  .fh-modal-info { display:flex; align-items:center; gap:14px; }
  .fh-modal-title { font-family:'Playfair Display',serif; font-size:22px; font-weight:700; color:#e8c84a; letter-spacing:0.04em; }
  .fh-modal-sub { font-size:12px; font-style:italic; color:rgba(180,140,100,0.6); margin-top:3px; letter-spacing:0.06em; }
  .fh-modal-frame { width:100%; border-radius:4px; overflow:hidden; border:1px solid rgba(140,40,40,0.4); box-shadow:0 0 80px rgba(120,20,20,0.5); background:#000; }
  .fh-modal-hint { text-align:center; font-size:10px; color:rgba(120,90,70,0.4); letter-spacing:0.14em; text-transform:uppercase; font-style:italic; }

  /* EXPLORE NAV */
  .fh-section-nav { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:48px; }
  .fh-section-pill { display:flex; align-items:center; gap:6px; background:rgba(140,30,30,0.1); border:1px solid rgba(140,30,30,0.28); border-radius:2px; padding:10px 20px; color:#c4a888; cursor:pointer; font-family:'Crimson Pro',serif; font-size:13px; font-weight:600; letter-spacing:0.08em; transition:all 0.22s; }
  .fh-section-pill:hover { background:rgba(180,50,50,0.22); border-color:rgba(200,60,60,0.5); transform:translateY(-2px); color:#e8c84a; }
  .fh-footer { border-top:1px solid rgba(100,30,30,0.22); padding:22px 28px; text-align:center; }
`;

// ── MODAL ─────────────────────────────────────────────────────────
function MediaModal({ item, activeSection, onClose, onGoHome }) {
  const overlayRef = useRef();

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  const isYT      = item.embedType === "youtube";
  const isGame    = item.embedType === "game";
  const isBuiltin = item.embedType === "builtin";
  const frameH    = "520px";

  return (
    <div className="fh-modal-overlay" ref={overlayRef}>

      {/* ── Sticky top bar: ← Back  |  Breadcrumb  |  ✕ ── */}
      <div className="fh-modal-topbar">

        {/* ← Back */}
        <button className="fh-modal-back" onClick={onClose}>
          <span style={{ fontSize:"14px" }}>←</span> Back
        </button>

        {/* Breadcrumb: Home › Section › Title */}
        <div className="fh-modal-crumb">
          <span className="fh-modal-crumb-home" onClick={onGoHome}>Home</span>
          <span className="fh-modal-crumb-sep">›</span>
          <span className="fh-modal-crumb-section">{activeSection}</span>
          <span className="fh-modal-crumb-sep">›</span>
          <span className="fh-modal-crumb-title">{item.title}</span>
        </div>

        {/* ✕ Close */}
        <button className="fh-modal-close" onClick={onClose}>✕</button>
      </div>

      {/* ── Body ── */}
      <div className="fh-modal-body">

        {/* Title + tag */}
        <div className="fh-modal-info">
          <div style={{ fontSize:"32px" }}>{item.icon}</div>
          <div>
            <div className="fh-modal-title">{item.title}</div>
            <div className="fh-modal-sub">{item.sub} · <span style={{ color: tagAccents[item.tag] || "#e8c84a" }}>{item.tag}</span></div>
          </div>
        </div>

        {/* Embed */}
        <div className="fh-modal-frame" style={ isYT ? { paddingBottom:"56.25%", position:"relative", height:0 } : { height: frameH } }>
          {isYT && (
            <iframe
              style={{ position:"absolute", top:0, left:0, width:"100%", height:"100%", border:"none" }}
              src={`https://www.youtube.com/embed/${item.embedId}?autoplay=1&rel=0`}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
          {isGame && (
            <iframe
              style={{ width:"100%", height:frameH, border:"none", display:"block" }}
              src={item.embedUrl}
              title={item.title}
              allow="fullscreen"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          )}
          {isBuiltin && item.embedId === "tictactoe" && (
            <div style={{ height: frameH }}><TicTacToe /></div>
          )}
        </div>

        {/* ESC hint */}
        <p className="fh-modal-hint">
          Press <kbd style={{ background:"rgba(140,40,40,0.2)", border:"1px solid rgba(140,40,40,0.3)", borderRadius:"2px", padding:"1px 6px", fontSize:"10px", color:"#c4a888" }}>ESC</kbd> · click <strong style={{ color:"rgba(160,100,80,0.6)" }}>← Back</strong> · or tap outside the bar to dismiss
        </p>
      </div>
    </div>
  );
}

// ── APP ROOT ──────────────────────────────────────────────────────
export default function FunHub() {
  const [activeNav,    setActiveNav]    = useState(null);
  const [mounted,      setMounted]      = useState(false);
  const [pageVisible,  setPageVisible]  = useState(true);
  const [playingItem,  setPlayingItem]  = useState(null);

  useEffect(() => { setTimeout(() => setMounted(true), 120); }, []);

  const navigate = (section) => {
    setPlayingItem(null);
    setPageVisible(false);
    setTimeout(() => { setActiveNav(section); setPageVisible(true); window.scrollTo({ top:0, behavior:"smooth" }); }, 240);
  };
  const goHome = () => navigate(null);

  // Close modal and go all the way home
  const modalGoHome = () => { setPlayingItem(null); goHome(); };

  return (
    <div className="fh-root" style={{ opacity: pageVisible ? 1 : 0, transition:"opacity 0.24s ease" }}>
      <style>{STYLES}</style>

      {/* MODAL */}
      {playingItem && (
        <MediaModal
          item={playingItem}
          activeSection={activeNav || "Home"}
          onClose={() => setPlayingItem(null)}
          onGoHome={modalGoHome}
        />
      )}

      {/* NAV */}
      <nav className="fh-nav">
        <div className="fh-logo" onClick={goHome}>
          <div className="fh-logo-reel">🎬</div>
          <span className="fh-logo-text">FUNHUB</span>
        </div>
        {activeNav && (
          <div className="fh-breadcrumb">
            <span style={{ color:"rgba(180,140,100,0.4)", fontSize:"11px", letterSpacing:"0.1em" }}>Home</span>
            <span className="fh-breadcrumb-sep">›</span>
            <span className="fh-breadcrumb-current">{activeNav}</span>
          </div>
        )}
        <div className="fh-nav-links">
          {NAV_SECTIONS.map(item => (
            <button key={item} className={`fh-nav-btn ${activeNav===item?"active":""}`} onClick={() => navigate(item)}>{item}</button>
          ))}
          {activeNav && (
            <button className="fh-home-btn" onClick={goHome}>
              <span style={{ fontSize:"13px" }}>←</span> Home
            </button>
          )}
        </div>
      </nav>

      {activeNav
        ? <SectionPage section={activeNav} data={sectionDetails[activeNav]} onNav={navigate} onHome={goHome} onPlay={setPlayingItem} />
        : <HomePage mounted={mounted} onNav={navigate} />}
    </div>
  );
}

// ── HOME PAGE ─────────────────────────────────────────────────────
function HomePage({ mounted, onNav }) {
  return (
    <>
      <section className="fh-hero">
        <div className="fh-hero-orb" style={{ width:160, height:160, top:"8%", left:"6%", background:"radial-gradient(circle,rgba(180,120,20,0.65) 0%,rgba(120,70,0,0.28) 50%,transparent 70%)", filter:"blur(10px)" }} />
        <div className="fh-hero-orb" style={{ width:270, height:270, top:"42%", left:"4%", transform:"translateY(-50%)", background:"radial-gradient(circle,rgba(120,20,20,0.45) 0%,transparent 70%)", filter:"blur(24px)" }} />
        <div className="fh-hero-orb" style={{ width:200, height:200, top:"50%", right:"5%", transform:"translateY(-30%)", background:"radial-gradient(circle,rgba(160,120,10,0.42) 0%,transparent 70%)", filter:"blur(18px)" }} />
        <div className="fh-stars">
          {[{top:"14%",left:"10%",size:"1.1rem",delay:"0s"},{top:"28%",right:"22%",size:"0.8rem",delay:"0.7s"},{top:"55%",left:"28%",size:"0.65rem",delay:"1.3s"},{top:"20%",right:"40%",size:"1.3rem",delay:"0.4s"},{bottom:"30%",right:"12%",size:"0.9rem",delay:"1s"},{top:"70%",left:"15%",size:"0.7rem",delay:"1.8s"}]
            .map((s,i) => <span key={i} className="fh-star" style={{...s,fontSize:s.size,animationDelay:s.delay}}>★</span>)}
        </div>
        <div className={`fh-hero-content ${mounted?"visible":""}`}>
          <div className="fh-hero-badge"><span style={{color:"#e8c84a"}}>★</span> Your Ultimate Entertainment Destination</div>
          <h1 className="fh-hero-title"><span className="gold">FUN</span><span className="crimson">HUB</span></h1>
          <p className="fh-hero-sub">Discover the hottest songs, craziest dances, blockbuster movies,<br />epic games & binge-worthy TV shows — all in one place</p>
          <button className="fh-hero-cta" onClick={() => document.getElementById("vibe-section")?.scrollIntoView({behavior:"smooth"})}>Explore Now ↓</button>
        </div>
      </section>

      <div className="fh-ticker">
        <span className="fh-ticker-badge">Now Trending</span>
        <p className="fh-ticker-text">Enjoy your day and discover the best entertainment in every corner</p>
        <span style={{color:"#e8c84a",fontSize:"1rem",flexShrink:0}}>★</span>
      </div>

      <div id="vibe-section" style={{padding:"64px 28px 36px",maxWidth:880,margin:"0 auto"}}>
        <div className="fh-reel-center">
          <div className="fh-reel-btn">🎬</div>
          <span className="fh-reel-label">Browse Genres</span>
        </div>
        <div className="fh-divider">
          <div className="fh-divider-line" />
          <span className="fh-divider-title">What's Your Vibe?</span>
          <div className="fh-divider-line right" />
        </div>
        <div className="fh-genre-grid">
          {categories.map(cat => <GenreCard key={cat.id} cat={cat} onNav={onNav} />)}
        </div>
      </div>

      <div style={{padding:"36px 28px 72px",maxWidth:880,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"14px",marginBottom:"28px"}}>
          <div className="fh-divider-line" style={{flex:"unset",width:"22px"}} />
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"24px",fontWeight:700,color:"#c4a888",letterSpacing:"0.06em",textTransform:"uppercase"}}>Trending Now</h2>
          <span className="fh-live-badge" style={{background:"rgba(180,40,40,0.12)",border:"1px solid rgba(180,40,40,0.28)",color:"#f87171"}}>
            <span className="fh-live-dot" style={{background:"#f87171"}} /> Live
          </span>
        </div>
        {trendingItems.map(item => <TrendingRow key={item.id} item={item} onNav={onNav} />)}
      </div>

      <div className="fh-footer">
        <div style={{display:"flex",justifyContent:"center",gap:"5px",marginBottom:"7px"}}>
          {[1,2,3,4,5].map(i=><span key={i} style={{color:"#e8c84a",fontSize:"0.6rem",opacity:i<=4?1:0.22}}>★</span>)}
        </div>
        <p style={{fontFamily:"'Crimson Pro',serif",fontSize:"10px",color:"rgba(100,60,60,0.55)",letterSpacing:"0.22em",textTransform:"uppercase"}}>Entertainment for every taste</p>
      </div>
    </>
  );
}

// ── SECTION PAGE ──────────────────────────────────────────────────
function SectionPage({ section, data, onNav, onHome, onPlay }) {
  const { hero, items } = data;
  const others = NAV_SECTIONS.filter(s => s !== section);
  const getPlayLabel = (type) => {
    if (type === "youtube") return section === "Music" || section === "Dance" ? "▶ Play" : "▶ Trailer";
    if (type === "game" || type === "builtin") return "🎮 Play Now";
    return "▶ Open";
  };

  return (
    <div style={{paddingTop:"56px"}}>
      <div className="fh-section-hero">
        <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse 70% 80% at 50% 50%,${hero.accent}18 0%,transparent 70%)`}} />
        <div style={{position:"absolute",width:260,height:260,borderRadius:"50%",top:"50%",left:"8%",transform:"translateY(-50%)",background:`radial-gradient(circle,${hero.accent}22 0%,transparent 70%)`,filter:"blur(28px)"}} />
        <div style={{textAlign:"center",position:"relative",zIndex:2}}>
          <div style={{fontSize:"52px",marginBottom:"10px"}}>{hero.emoji}</div>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"38px",fontWeight:900,letterSpacing:"-1.5px",color:"#e8ddd0",marginBottom:"8px"}}>{hero.title}</h1>
          <p style={{color:"rgba(200,180,160,0.42)",fontStyle:"italic",fontSize:"13px",letterSpacing:"0.06em"}}>{hero.subtitle}</p>
        </div>
      </div>

      <div style={{maxWidth:840,margin:"0 auto",padding:"44px 28px 72px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"22px"}}>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"20px",fontWeight:700,color:"#c4a888",letterSpacing:"0.06em",textTransform:"uppercase"}}>Top {section}</h2>
          <span className="fh-live-badge" style={{background:`${hero.accent}15`,border:`1px solid ${hero.accent}30`,color:hero.accent}}>
            <span className="fh-live-dot" style={{background:hero.accent}} /> Live
          </span>
        </div>

        {items.map((item,i) => (
          <div key={i} className="fh-section-row">
            <span style={{fontFamily:"'Playfair Display',serif",fontSize:"15px",fontWeight:700,color:`${hero.accent}50`,minWidth:"30px"}}>{item.rank}</span>
            <span style={{fontSize:"20px"}}>{item.icon}</span>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontWeight:600,fontSize:"14px",color:"#e0d0c0"}}>{item.title}</div>
              <div style={{color:"rgba(160,130,110,0.48)",fontSize:"11px",fontStyle:"italic",marginTop:"2px"}}>{item.sub}</div>
            </div>
            <span style={{background:`${hero.accent}15`,border:`1px solid ${hero.accent}28`,borderRadius:"1px",padding:"3px 9px",fontSize:"10px",letterSpacing:"0.1em",textTransform:"uppercase",color:hero.accent,flexShrink:0}}>{item.tag}</span>
            <button className="fh-play-btn" onClick={() => onPlay(item)}>{getPlayLabel(item.embedType)}</button>
          </div>
        ))}

        <div style={{marginTop:"56px"}}>
          <div className="fh-divider" style={{marginBottom:"18px"}}>
            <div className="fh-divider-line" style={{opacity:0.45}} />
            <span style={{fontFamily:"'Playfair Display',serif",fontSize:"12px",color:"rgba(160,120,80,0.45)",letterSpacing:"0.2em",textTransform:"uppercase",whiteSpace:"nowrap"}}>Explore More</span>
            <div className="fh-divider-line right" style={{opacity:0.45}} />
          </div>
          <div className="fh-section-nav">
            <button className="fh-section-pill" onClick={onHome} style={{borderColor:"rgba(200,160,60,0.3)",color:"#e8c84a"}}>← Home</button>
            {others.map(s => {
              const cat = categories.find(c => c.section === s);
              return <button key={s} className="fh-section-pill" onClick={() => onNav(s)}><span style={{fontSize:"16px"}}>{cat?.img}</span> {s}</button>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function GenreCard({ cat, onNav }) {
  return (
    <div className="fh-genre-card" onClick={() => onNav(cat.section)}>
      <div className="fh-genre-header">
        <span className="fh-genre-name">{cat.title}</span>
        <span className="fh-genre-icon">{cat.img}</span>
      </div>
      <div className="fh-genre-rule" />
      <p className="fh-genre-desc">{cat.desc}</p>
      <div className="fh-genre-tags">{cat.tags.map(t=><span key={t} className="fh-genre-tag">{t}</span>)}</div>
    </div>
  );
}

function TrendingRow({ item, onNav }) {
  const accent = tagAccents[item.tag] || "#e8c84a";
  return (
    <div className="fh-trend-row" onClick={() => onNav(item.section)}>
      <span className="fh-trend-num">{item.id}</span>
      <span className="fh-trend-emoji">{item.icon}</span>
      <div className="fh-trend-info">
        <div className="fh-trend-title">{item.title}</div>
        <div className="fh-trend-sub">{item.subtitle}</div>
      </div>
      <span className="fh-trend-tag" style={{background:`${accent}15`,border:`1px solid ${accent}30`,color:accent}}>{item.tag}</span>
      <span className="fh-trend-arrow">→</span>
    </div>
  );
}