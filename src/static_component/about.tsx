export default function About() {
  return (
    <div className="bg-paper text-espresso py-24 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
        <div>
          <span className="font-mono text-copper text-xs tracking-[0.3em] uppercase">
            Our story
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold mt-3 leading-[1.05]">
            Roasted in small batches, since day one.
          </h2>
        </div>

        <div className="space-y-6 font-sans text-base sm:text-lg leading-relaxed text-espresso/80">
          <p>
            Coffee Vup started as a single drum roaster in a converted garage,
            chasing one idea: that a cup of coffee should taste like where it
            came from. Every bag we sell still carries the farm, the altitude,
            and the process behind it &mdash; because we think you should know
            what you're drinking.
          </p>
          <p>
            We work directly with smallholder farms across the Philippines and
            beyond, roasting in batches small enough to taste the difference
            and large enough to share it. From bean to cup, nothing here is
            mass-produced.
          </p>
          <p>
            Our baristas are trained roasters first &mdash; they can tell you
            the cupping notes of whatever's in your hand, and they probably
            want to.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-dashed border-bean/40 font-mono">
            <div>
              <div className="text-3xl font-bold text-copper">12</div>
              <div className="text-[11px] tracking-wide uppercase text-bean mt-1">
                Origins sourced
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-copper">06</div>
              <div className="text-[11px] tracking-wide uppercase text-bean mt-1">
                Years roasting
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-copper">100%</div>
              <div className="text-[11px] tracking-wide uppercase text-bean mt-1">
                Direct trade
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}