export default function Footer() {
  return (
    <footer className="bg-espresso text-parchment/70 pt-16 pb-8 px-6 sm:px-12 border-t border-bean/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="font-display text-2xl font-semibold text-parchment mb-3">
            Coffee Vup
          </h2>
          <p className="font-sans text-sm leading-relaxed">
            Small-batch roasted, sourced direct from farm to cup. One roast at
            a time, since 2019.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-[11px] tracking-[0.2em] uppercase text-copper mb-4">
            Quick links
          </h3>
          <ul className="space-y-2.5 font-sans text-sm">
            <li>
              <button onClick={() => alert("Home clicked")} className="hover:text-copper transition-colors">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => alert("About clicked")} className="hover:text-copper transition-colors">
                About
              </button>
            </li>
            <li>
              <button onClick={() => alert("Service clicked")} className="hover:text-copper transition-colors">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => alert("Contact clicked")} className="hover:text-copper transition-colors">
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-[11px] tracking-[0.2em] uppercase text-copper mb-4">
            Image credit
          </h3>
          <p className="font-sans text-xs leading-relaxed text-parchment/50">
            By Bex Walton &mdash;{" "}
            <a
              href="//commons.wikimedia.org/wiki/File:Piccolo_at_filter_coffee_at_Wood_St_Coffee,_Walthamstow.jpg"
              title="File:Piccolo at filter coffee at Wood St Coffee, Walthamstow.jpg"
              className="underline hover:text-copper transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikimedia Commons
            </a>
            , at{" "}
            <a
              href="https://www.flickr.com/photos/bexwalton/51333376222/"
              className="underline hover:text-copper transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flickr
            </a>
            ,{" "}
            <a
              href="https://creativecommons.org/licenses/by/2.0"
              className="underline hover:text-copper transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC BY 2.0
            </a>
            ,{" "}
            <a
              href="https://commons.wikimedia.org/w/index.php?curid=122469412"
              className="underline hover:text-copper transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
            .
          </p>
        </div>

        <div>
          <h3 className="font-mono text-[11px] tracking-[0.2em] uppercase text-copper mb-4">
            Follow us
          </h3>
          <ul className="flex gap-4 font-sans text-sm">
            <li>
              <button onClick={() => alert("Facebook clicked")} className="hover:text-copper transition-colors">
                Facebook
              </button>
            </li>
            <li>
              <button onClick={() => alert("Instagram clicked")} className="hover:text-copper transition-colors">
                Instagram
              </button>
            </li>
            <li>
              <button onClick={() => alert("Twitter clicked")} className="hover:text-copper transition-colors">
                Twitter
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-dashed border-bean/20 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-2 font-mono text-[11px] tracking-wide text-parchment/30">
        <span>&copy; {new Date().getFullYear()} Coffee Vup. All rights reserved.</span>
        <span>
          Demo built by{" "}
          <a
            href="https://khian.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-copper transition-colors"
          >
            Khian Victory D. Calderon
          </a>
        </span>
      </div>
    </footer>
  );
}