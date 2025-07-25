export default function Menu() {
  
    const menuItems = [
        {
            name: "Espresso",
            description: "Strong and bold shot of pure coffee.",
            image: "/images/menu/espresso.jpg",
        },
        {
            name: "Latte",
            description: "Smooth espresso mixed with steamed milk.",
            image: "/images/menu/latte.jpg",
        },
        {
            name: "Cappuccino",
            description: "A balance of espresso, steamed milk, and foam.",
            image: "/images/menu/cappuccino.jpg",
        },
        {
            name: "Americano",
            description: "Espresso diluted with hot water for a milder taste.",
            image: "/images/menu/americano.jpg",
        },
        {
            name: "Cold Brew",
            description: "Smooth and less acidic, steeped for 12+ hours.",
            image: "/images/menu/coldbrew.jpg",
        },
        {
            name: "Mocha",
            description: "Chocolatey espresso blend topped with milk.",
            image: "/images/menu/mocha.jpg",
        },
        {
            name: "Macchiato",
            description: "Espresso with just a touch of milk foam.",
            image: "/images/menu/macchiato.jpg",
        },
        {
            name: "Flat White",
            description: "Rich espresso and velvety microfoam.",
            image: "/images/menu/flatwhite.jpg",
        },
    ];

    return (
        <section id="menu" className="bg-gray-50 text-slate-900 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-10 text-center">Our Menu</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {menuItems.map((item, index) => (
                    <div key={index} className="card bg-base-100 shadow-md">
                    <figure>
                        <img
                        src={`${item.image}`}
                        alt={item.name}
                        className="w-full h-60 object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">{item.name}</h2>
                        <p className="text-sm text-white">{item.description}</p>
                        <div className="card-actions justify-end">
                        <button
                            className="btn btn-primary"
                            onClick={() => alert(`Ordered: ${item.name}`)}
                        >
                            Buy Now
                        </button>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}
