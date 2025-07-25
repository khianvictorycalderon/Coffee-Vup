interface HeroProps {
  BGImage: string;
  Title: string;
  Description: React.ReactNode;
  Button?: {
    Label: string;
    OnClick?: () => void;
    ClassName?: string;
  };
}

export default function Hero({ BGImage, Title, Description, Button }: HeroProps) {
  return (
    <div
      className="hero min-h-screen bg-fixed bg-center"
      style={{ backgroundImage: `url(${BGImage})` }}
    >
      <div className="hero-overlay bg-opacity-60" />
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{Title}</h1>
          <p className="mb-5">{Description}</p>
          {Button?.Label && (
            <button
              onClick={Button.OnClick}
              className={Button.ClassName || "btn btn-primary"}
            >
              {Button.Label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
