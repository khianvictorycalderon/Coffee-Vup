interface CardItem {
    Name: string;
    Description: string;
    Image: string;
    OnClick?: () => void;
}

interface CardListProps {
    Title: string;
    Data: CardItem[];
    ButtonEnabled?: boolean;
    Classname?: string;
}

export default function CardList({ Title, Data, Classname, ButtonEnabled = true }: CardListProps) {
  return (
    <div className={`${Classname || "bg-gray-100 text-slate-900"} pb-16 px-8`}>
      <h1 className="text-4xl font-bold mb-10 text-center">{Title}</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {Data.map((item, index) => (
          <div key={index} className="card w-80 bg-white shadow-md">
            <figure>
              <img
                src={item.Image}
                alt={item.Name}
                className="h-52 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-slate-900">{item.Name}</h2>
              <p className="text-slate-900">{item.Description}</p>
              <div className="card-actions justify-end">
                {ButtonEnabled && (
                    <button
                    className="btn btn-primary"
                    onClick={item?.OnClick}
                    >
                    Buy Now
                    </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
