export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Coffee Vup</h2>
          <p className="text-gray-400 text-sm">
            Brewed with passion, served with love. Bringing coffee culture to life — one cup at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <button onClick={() => alert("Home clicked")} className="hover:text-white">Home</button>
            </li>
            <li>
              <button onClick={() => alert("About clicked")} className="hover:text-white">About</button>
            </li>
            <li>
              <button onClick={() => alert("Service clicked")} className="hover:text-white">Services</button>
            </li>
            <li>
              <button onClick={() => alert("Contact clicked")} className="hover:text-white">Contact</button>
            </li>
          </ul>
        </div>

        {/* Image Credit Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Image Credit</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            By Bex Walton –{" "}
            <a
              href="//commons.wikimedia.org/wiki/File:Piccolo_at_filter_coffee_at_Wood_St_Coffee,_Walthamstow.jpg"
              title="File:Piccolo at filter coffee at Wood St Coffee, Walthamstow.jpg"
              className="underline text-blue-400 hover:text-white"
              target="_blank" rel="noopener noreferrer"
            >
              Wikimedia Commons
            </a>, at{" "}
            <a
              href="https://www.flickr.com/photos/bexwalton/51333376222/"
              className="underline text-blue-400 hover:text-white"
              target="_blank" rel="noopener noreferrer"
            >
              Flickr
            </a>,{" "}
            <a
              href="https://creativecommons.org/licenses/by/2.0"
              className="underline text-blue-400 hover:text-white"
              target="_blank" rel="noopener noreferrer"
            >
              CC BY 2.0
            </a>,{" "}
            <a
              href="https://commons.wikimedia.org/w/index.php?curid=122469412"
              className="underline text-blue-400 hover:text-white"
              target="_blank" rel="noopener noreferrer"
            >
              Link
            </a>.
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <ul className="flex gap-4">
            <li>
              <button onClick={() => alert("Facebook clicked")} className="hover:text-white">Facebook</button>
            </li>
            <li>
              <button onClick={() => alert("Instagram clicked")} className="hover:text-white">Instagram</button>
            </li>
            <li>
              <button onClick={() => alert("Twitter clicked")} className="hover:text-white">Twitter</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Coffee Vup. All rights reserved.
      </div>
    </footer>
  );
}
