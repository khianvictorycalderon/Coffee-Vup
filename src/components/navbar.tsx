interface MenuItem {
  Label: string;
  OnClick?: () => void;
  Submenu?: MenuItem[];
}

interface NavbarProps {
  Brand?: string | React.ReactNode;
  MenuItems: MenuItem[];
  CtaButton?: {
    Label: string;
    OnClick?: () => void;
    ClassName?: string;
  };
  ClassName?: string; // Allows custom bg, text, etc.
}

export default function Navbar({
  Brand = "Brand",
  MenuItems,
  CtaButton,
  ClassName = "bg-base-100"
}: NavbarProps) {
  const renderMenu = (items: MenuItem[]) =>
    items.map((item, index) =>
      item.Submenu ? (
        <li key={index}>
          <details>
            <summary>{item.Label}</summary>
            <ul className="p-2">
              {item.Submenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <button onClick={subItem.OnClick} className="btn btn-ghost w-full text-left">
                    {subItem.Label}
                  </button>
                </li>
              ))}
            </ul>
          </details>
        </li>
      ) : (
        <li key={index}>
          <button onClick={item.OnClick} className="btn btn-ghost w-full text-left">
            {item.Label}
          </button>
        </li>
      )
    );

  return (
    <div className={`navbar shadow-sm fixed top-0 left-0 z-50 ${ClassName}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box mt-3 w-52 p-2 shadow bg-base-100"
          >
            {renderMenu(MenuItems)}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">{Brand}</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{renderMenu(MenuItems)}</ul>
      </div>

      <div className="navbar-end">
        {CtaButton && (
          <button
            onClick={CtaButton.OnClick}
            className={CtaButton.ClassName || "btn btn-primary"}
          >
            {CtaButton.Label}
          </button>
        )}
      </div>
    </div>
  );
}
