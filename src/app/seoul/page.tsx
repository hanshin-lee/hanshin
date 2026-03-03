const neighborhoods = [
  {
    name: "Mapo / Hongdae",
    vibe: "Young, vibrant, street food paradise",
    spots: [
      {
        name: "Menya Sandaime",
        type: "Ramen",
        description: "Top-tier tsukemen spot in Hapjeong. Rich, creamy dipping broth with thick noodles.",
      },
      {
        name: "Hongdae Street Food Alley",
        type: "Street Food",
        description: "Tteokbokki, hotteok, tornado potatoes — the quintessential Korean street food crawl.",
      },
      {
        name: "Yeontabal Hongdae",
        type: "Korean BBQ",
        description: "Premium samgyeopsal (pork belly) grilled to perfection with all the banchan you need.",
      },
    ],
  },
  {
    name: "Gangnam / Seocho",
    vibe: "Upscale dining, hidden gems in back alleys",
    spots: [
      {
        name: "Yukjeon Hoekwan",
        type: "Korean Beef",
        description: "A legendary bulgogi spot that's been serving since 1963. Old-school Seoul at its finest.",
      },
      {
        name: "Tosokchon",
        type: "Samgyetang",
        description: "Iconic ginseng chicken soup near Gyeongbokgung. Best on hot summer days (Korean tradition).",
      },
      {
        name: "Garosu-gil Cafes",
        type: "Cafe Hopping",
        description: "Tree-lined streets packed with aesthetic cafes, perfect for a post-meal coffee.",
      },
    ],
  },
  {
    name: "Jongno / Euljiro",
    vibe: "Old Seoul meets trendy, retro bars and classics",
    spots: [
      {
        name: "Gwangjang Market",
        type: "Market Food",
        description: "Bindaetteok (mung bean pancakes), yukhoe (raw beef tartare), and mayak gimbap — a must-visit.",
      },
      {
        name: "Eulji OB Bear",
        type: "Pub / Hof",
        description: "Retro beer hall vibes in the heart of Euljiro. Pair with fried chicken and dried squid.",
      },
      {
        name: "Jongno 3-ga Gopchang Alley",
        type: "Gopchang (Intestines)",
        description: "Grilled beef intestines on charcoal — adventurous eats that locals swear by.",
      },
    ],
  },
  {
    name: "Itaewon / Hannam",
    vibe: "International flavors, craft cocktails",
    spots: [
      {
        name: "Linus' BBQ",
        type: "American BBQ",
        description: "Seoul's best American-style BBQ — Texas brisket and pulled pork done right.",
      },
      {
        name: "Passion 5",
        type: "Bakery & Patisserie",
        description: "Multi-floor luxury bakery with pastries, chocolates, gelato, and more.",
      },
      {
        name: "Hannam-dong Taco Trucks",
        type: "Tacos",
        description: "Late-night taco spots that hit different after a night out in Itaewon.",
      },
    ],
  },
];

const tips = [
  "Order naengmyeon (cold buckwheat noodles) in summer — it's a revelation",
  "Convenience store kimbap at 2 AM is an essential Seoul experience",
  "Learn to say '이모, 여기요!' (Imo, yeogyo!) to get your server's attention",
  "Soju + beer = somaek. Ask a local to show you the perfect ratio",
  "Don't skip the banchan — it's free refills and half the meal",
];

export default function SeoulPage() {
  return (
    <div className="space-y-16 py-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Seoul Guide<span className="text-accent">.</span>
        </h1>
        <p className="mt-3 text-lg text-muted">
          A food-first guide to one of the best eating cities in the world.
          These are personal picks — not tourist traps.
        </p>
      </div>

      {/* Neighborhoods */}
      {neighborhoods.map((hood) => (
        <section key={hood.name}>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">{hood.name}</h2>
            <p className="text-sm text-muted">{hood.vibe}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hood.spots.map((spot) => (
              <div
                key={spot.name}
                className="group rounded-xl border border-card-border bg-card-bg p-5 transition-colors hover:border-accent/40"
              >
                <span className="text-xs font-medium text-accent">
                  {spot.type}
                </span>
                <h3 className="mt-1 text-lg font-semibold">{spot.name}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {spot.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Tips */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold">
          Local Tips<span className="text-accent">.</span>
        </h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-6">
          <ul className="space-y-3">
            {tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted">
                <span className="mt-0.5 text-accent font-mono text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
