/*
 * Design: Precision Shield — Corporate-Minimal
 * The one moment of colour on a test result: a short burst of small fireworks for a pass, a calm
 * amber face for a middle result, a red sad face for a fail. Plays once, then stays still.
 */
import { Frown, Meh, PartyPopper } from "lucide-react";

export type ResultTier = "pass" | "mid" | "fail";

/** Levels are listed best first: the first is a pass, the last is a fail */
export function tierOf(levelIndex: number, levelCount: number): ResultTier {
  if (levelIndex <= 0) return "pass";
  return levelIndex >= levelCount - 1 ? "fail" : "mid";
}

const COLORS = ["#2563EB", "#059669", "#F59E0B", "#DC2626", "#7C3AED"];
const SPARKS = 12;
// Where each burst opens (percent of the box), how far its sparks fly (px) and when it starts (s)
const BURSTS = [
  { x: 50, y: 46, reach: 64, delay: 0 },
  { x: 22, y: 30, reach: 44, delay: 0.35 },
  { x: 78, y: 28, reach: 48, delay: 0.6 },
  { x: 34, y: 70, reach: 36, delay: 0.9 },
  { x: 68, y: 72, reach: 40, delay: 1.1 },
];

function Fireworks() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {BURSTS.map((b, bi) =>
        Array.from({ length: SPARKS }, (_, i) => {
          const angle = (i / SPARKS) * Math.PI * 2;
          return (
            <span
              key={`${bi}-${i}`}
              className="firework-spark"
              style={
                {
                  left: `${b.x}%`,
                  top: `${b.y}%`,
                  backgroundColor: COLORS[(i + bi) % COLORS.length],
                  "--dx": `${Math.cos(angle) * b.reach}px`,
                  "--dy": `${Math.sin(angle) * b.reach}px`,
                  animationDelay: `${b.delay}s`,
                } as React.CSSProperties
              }
            />
          );
        })
      )}
    </div>
  );
}

const LOOK: Record<
  ResultTier,
  { icon: typeof Frown; box: string; ring: string; ink: string; move: string }
> = {
  pass: {
    icon: PartyPopper,
    box: "bg-[#ECFDF5]",
    ring: "border-[#A7F3D0]",
    ink: "text-[#047857]",
    move: "result-pop",
  },
  mid: {
    icon: Meh,
    box: "bg-[#FFFBEB]",
    ring: "border-[#FDE68A]",
    ink: "text-[#B45309]",
    move: "",
  },
  fail: {
    icon: Frown,
    box: "bg-[#FEF2F2]",
    ring: "border-[#FECACA]",
    ink: "text-[#B91C1C]",
    move: "result-shake",
  },
};

export default function ResultMoment({
  tier,
  score,
  total,
  title,
}: {
  tier: ResultTier;
  score: number;
  total: number;
  title: string;
}) {
  const look = LOOK[tier];
  const Icon = look.icon;
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border ${look.box} ${look.ring} px-6 py-8 mb-6 text-center`}
    >
      {tier === "pass" && <Fireworks />}
      <div className="relative">
        <div
          className={`${look.move} mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white border ${look.ring}`}
        >
          <Icon
            className={`h-10 w-10 ${look.ink}`}
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </div>
        <p className={`text-5xl font-bold tabular-nums ${look.ink} mb-2`}>
          <span dir="ltr">
            {score} / {total}
          </span>
        </p>
        <h2 className="text-2xl font-bold text-[#1E293B]">{title}</h2>
      </div>
    </div>
  );
}
