export default function Service() {
  return (
    <section className="bg-gray-100 text-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-lg text-gray-700">
            From handcrafted brews to community events, Coffee Vup delivers a full-bodied experience beyond the cup.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">Espresso Bar</h3>
            <p className="text-gray-600">
              Enjoy expertly crafted espresso drinks — from bold shots to smooth lattes made by passionate baristas.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">Cold Brew & Iced</h3>
            <p className="text-gray-600">
              Refresh your senses with our slow-steeped cold brew and iced coffee creations — always smooth, never bitter.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">Coffee Tasting</h3>
            <p className="text-gray-600">
              Join our tasting sessions and explore the flavors and origins of our premium beans in a guided experience.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">Workshops</h3>
            <p className="text-gray-600">
              Learn the art of brewing, latte art, and more in our hands-on barista workshops for all skill levels.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">Bean Subscription</h3>
            <p className="text-gray-600">
              Get fresh, small-batch roasted beans delivered monthly — choose your favorite roast level and origin.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">Event Catering</h3>
            <p className="text-gray-600">
              Bring Coffee Vup to your events with our pop-up brew bar, perfect for weddings, meetups, and office perks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
