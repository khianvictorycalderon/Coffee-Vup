interface HeroProps {
  BGImage: string;
  Title: string;
  Description: string;
  Button?: {
    Label: string;
    OnClick?: () => void;
  };
}

export default function Hero({ BGImage, Title, Description, Button }: HeroProps) {
  return (
    <div className="relative h-screen min-h-[640px] w-full overflow-hidden bg-espresso">
      <img
        src={BGImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-espresso/30" />

      {/* Batch stamp — signature element */}
      <div className="absolute top-28 right-6 sm:right-12 hidden sm:flex flex-col items-end gap-1 rotate-3 font-mono text-copper/80">
        <span className="text-[11px] tracking-[0.2em] uppercase border border-copper/40 rounded-full px-3 py-1">
          Batch No. 0142
        </span>
        <span className="text-[11px] tracking-[0.2em] uppercase">Roasted Daily</span>
      </div>

      <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 sm:px-12 max-w-4xl">
        <span className="font-mono text-copper text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">
          Single-origin &middot; Small-batch &middot; Manila
        </span>
        <h1 className="font-display text-6xl sm:text-8xl font-semibold text-paper leading-[0.95] tracking-tight">
          {Title}
        </h1>
        <p className="font-sans text-lg sm:text-xl text-parchment/80 mt-6 max-w-md">
          {Description}
        </p>
        {Button && (
          <button
            onClick={Button.OnClick}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-copper hover:bg-copper/90 text-paper font-sans text-sm tracking-[0.08em] uppercase font-medium px-8 h-12 transition-colors"
          >
            {Button.Label}
          </button>
        )}
      </div>

      <div className="absolute bottom-8 left-6 sm:left-12 z-10 flex items-center gap-3 text-parchment/60 font-mono text-[11px] tracking-widest uppercase">
        <span className="inline-block h-px w-8 bg-parchment/40" />
        Scroll to explore
      </div>
    </div>
  );
}