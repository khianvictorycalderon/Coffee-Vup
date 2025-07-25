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
        }
    ];

    return (
        <div className="bg-gray-100 text-slate-900 pb-16 px-8">
            <h1 className="text-4xl font-bold mb-10 text-center">Our Coffee Menu</h1>
            <div className="flex flex-wrap justify-center gap-8">
                {menuItems.map((item, index) => (
                <div key={index} className="card w-80 bg-white shadow-md">
                    <figure>
                    <img src={item.image} alt={item.name} className="h-52 w-full object-cover" />
                    </figure>
                    <div className="card-body">
                    <h2 className="card-title text-slate-900">{item.name}</h2>
                    <p className="text-slate-900">{item.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => alert(`Buying ${item.name}`)}>Buy Now</button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}
