const services = [
  {
    Tag: "Bar",
    Title: "Espresso bar",
    Description:
      "Espresso pulled to spec, lattes steamed by hand. Every shot dialed in fresh, not pre-set on a machine.",
  },
  {
    Tag: "Cold",
    Title: "Cold brew & iced",
    Description:
      "Steeped slow for eighteen hours. Smooth enough to drink black, no syrup required.",
  },
  {
    Tag: "Cupping",
    Title: "Coffee tasting",
    Description:
      "Weekly cupping sessions where we open new lots together and talk through what's in the cup.",
  },
  {
    Tag: "Learn",
    Title: "Workshops",
    Description:
      "Hands-on sessions on brewing, dialing in a grinder, and pulling consistent shots at home.",
  },
  {
    Tag: "Subscribe",
    Title: "Bean subscription",
    Description:
      "Fresh roast delivered on your schedule. Pick your origin and roast level, change anytime.",
  },
  {
    Tag: "Events",
    Title: "Event catering",
    Description:
      "A full pop-up bar for weddings, offices, and gatherings &mdash; we bring the grinder.",
  },
];

export default function Service() {
  return (
    <section className="bg-espresso text-parchment py-24 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-16">
          <span className="font-mono text-copper text-xs tracking-[0.3em] uppercase">
            What we do
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold mt-3">
            Beyond the cup
          </h2>
          <p className="font-sans text-base text-parchment/60 mt-4 leading-relaxed">
            From the bar to your countertop, every service traces back to the
            same roastery floor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bean/20 border border-bean/20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-espresso p-8 hover:bg-[#241b14] transition-colors duration-300"
            >
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-copper border border-copper/40 rounded-full px-2.5 py-1">
                {service.Tag}
              </span>
              <h3 className="font-display text-2xl font-semibold mt-5 mb-2">
                {service.Title}
              </h3>
              <p
                className="font-sans text-sm text-parchment/60 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: service.Description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}