interface CardItem {
  Name: string;
  Description: string;
  Image: string;
  OnClick?: () => void;
  Origin?: string;
  Process?: string;
  Notes?: string;
}

interface CardListProps {
  Title: string;
  Eyebrow?: string;
  Data: CardItem[];
  ButtonEnabled?: boolean;
  Classname?: string;
  Variant?: "roast" | "quote";
}

export default function CardList({
  Title,
  Eyebrow,
  Data,
  Classname,
  ButtonEnabled = true,
  Variant = "roast",
}: CardListProps) {
  return (
    <div className={`${Classname || "bg-paper text-espresso"} pb-24 pt-20 px-6 sm:px-8`}>
      <div className="max-w-6xl mx-auto mb-14 text-center">
        {Eyebrow && (
          <span className="font-mono text-copper text-xs tracking-[0.3em] uppercase">
            {Eyebrow}
          </span>
        )}
        <h2 className="font-display text-4xl sm:text-5xl font-semibold mt-3">{Title}</h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
        {Data.map((item, index) =>
          Variant === "roast" ? (
            <div
              key={index}
              className="group relative w-80 bg-espresso text-parchment rounded-sm overflow-hidden border border-bean/30"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.Image}
                  alt={item.Name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.2em] uppercase bg-espresso/80 text-copper border border-copper/40 rounded-full px-2.5 py-1">
                  No. {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold mb-2">{item.Name}</h3>
                <p className="font-sans text-sm text-parchment/70 leading-relaxed mb-4">
                  {item.Description}
                </p>

                <div className="border-t border-dashed border-bean/40 pt-4 grid grid-cols-2 gap-y-2 font-mono text-[11px] tracking-wide text-bean">
                  <span className="uppercase text-parchment/40">Origin</span>
                  <span className="text-parchment/70 text-right">{item.Origin ?? "House blend"}</span>
                  <span className="uppercase text-parchment/40">Process</span>
                  <span className="text-parchment/70 text-right">{item.Process ?? "Washed"}</span>
                </div>

                {ButtonEnabled && (
                  <button
                    onClick={item?.OnClick}
                    className="mt-5 w-full btn btn-sm border border-copper/50 bg-transparent hover:bg-copper hover:border-copper rounded-full font-sans text-xs tracking-[0.1em] uppercase font-medium text-copper hover:text-paper transition-colors"
                  >
                    Add to order
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="w-80 bg-paper border border-bean/20 rounded-sm p-7 flex flex-col"
            >
              <span className="font-display text-5xl text-copper/30 leading-none mb-2">
                &ldquo;
              </span>
              <p className="font-display text-lg italic text-espresso/90 leading-snug mb-6 -mt-4">
                {item.Description.replace(/^"|"$/g, "")}
              </p>
              <div className="mt-auto flex items-center gap-3 pt-4 border-t border-bean/15">
                <img
                  src={item.Image}
                  alt={item.Name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="font-sans text-sm font-medium text-espresso">
                  {item.Name}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}