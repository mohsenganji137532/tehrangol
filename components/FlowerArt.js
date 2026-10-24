// تصویر موقت گل‌ها به‌صورت SVG. بعداً می‌توان با عکس واقعی محصولات جایگزین کرد.
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const c = (v) => Math.max(0, Math.min(255, v + amt));
  const r = c(n >> 16), g = c((n >> 8) & 255), b = c(n & 255);
  return `rgb(${r},${g},${b})`;
}

function Rose({ x, y, r, color }) {
  const petals = [0, 72, 144, 216, 288];
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill={shade(color, -35)} />
      {petals.map((a) => (
        <ellipse key={a} cx="0" cy={-r * 0.45} rx={r * 0.55} ry={r * 0.62} fill={color} stroke={shade(color, -30)} strokeWidth="1" transform={`rotate(${a})`} />
      ))}
      {petals.map((a) => (
        <ellipse key={"i" + a} cx="0" cy={-r * 0.22} rx={r * 0.3} ry={r * 0.36} fill={shade(color, 18)} stroke={shade(color, -25)} strokeWidth="1" transform={`rotate(${a + 36})`} />
      ))}
      <path d={`M0 0 m${-r * 0.14} 0 a${r * 0.14} ${r * 0.14} 0 1 1 ${r * 0.28} 0 a${r * 0.22} ${r * 0.22} 0 1 1 ${-r * 0.4} ${r * 0.04}`} fill="none" stroke={shade(color, -50)} strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

export default function FlowerArt({ colors = ["#B3202D"], count, label }) {
  const n = Math.min(count || colors.length * 2, 7);
  const spots = [[200,150,52],[130,185,44],[270,185,44],[160,105,40],[240,105,40],[100,130,34],[300,130,34]];
  return (
    <svg viewBox="0 0 400 480" role="img" aria-label={label || "دسته‌گل"} className="h-full w-full">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EEF2E6" /><stop offset="1" stopColor="#DDE7D8" />
        </linearGradient>
      </defs>
      <rect width="400" height="480" fill="url(#bg)" />
      {[[110,215,-40],[290,215,40],[200,225,0],[150,240,-20],[250,240,20]].map(([x,y,a],i)=>(
        <ellipse key={i} cx={x} cy={y} rx="22" ry="62" fill={i%2?"#5E7F63":"#486B4E"} transform={`rotate(${a} ${x} ${y})`} />
      ))}
      <path d="M85 270 L315 270 L225 450 Q200 462 175 450 Z" fill="#E9DDC3" stroke="#CDBE9C" strokeWidth="2" />
      <path d="M85 270 L200 330 L315 270" fill="#F5EDD8" stroke="#CDBE9C" strokeWidth="2" />
      <path d="M185 345 Q200 360 215 345" stroke="#5E7F63" strokeWidth="6" fill="none" strokeLinecap="round" />
      {spots.slice(0, n).map(([x, y, r], i) => (
        <Rose key={i} x={x} y={y} r={r} color={colors[i % colors.length]} />
      ))}
    </svg>
  );
}
