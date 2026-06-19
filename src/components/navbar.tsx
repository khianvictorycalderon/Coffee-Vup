import { useState } from "react";

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
  ClassName = "bg-transparent",
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderDesktopMenu = (items: MenuItem[]) =>
    items.map((item, index) => (
      <li key={index} className="relative group">
        <button
          onClick={item.OnClick}
          className="font-sans text-[13px] tracking-[0.08em] uppercase font-medium hover:text-copper transition-colors py-2"
        >
          {item.Label}
        </button>
        {item.Submenu && (
          <ul className="absolute left-0 top-full hidden group-hover:block bg-espresso border border-bean/20 rounded-sm min-w-40 py-1 shadow-lg">
            {item.Submenu.map((subItem, subIndex) => (
              <li key={subIndex}>
                <button
                  onClick={subItem.OnClick}
                  className="w-full text-left px-4 py-2 font-sans text-sm hover:text-copper hover:bg-bean/10 transition-colors"
                >
                  {subItem.Label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </li>
    ));

  const renderMobileMenu = (items: MenuItem[]) =>
    items.map((item, index) => (
      <li key={index}>
        {item.Submenu ? (
          <details>
            <summary className="font-sans text-sm tracking-wide uppercase py-2 cursor-pointer">
              {item.Label}
            </summary>
            <ul className="pl-4">
              {item.Submenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <button
                    onClick={() => {
                      subItem.OnClick?.();
                      setMobileOpen(false);
                    }}
                    className="w-full text-left py-2 font-sans text-sm"
                  >
                    {subItem.Label}
                  </button>
                </li>
              ))}
            </ul>
          </details>
        ) : (
          <button
            onClick={() => {
              item.OnClick?.();
              setMobileOpen(false);
            }}
            className="w-full text-left py-2.5 font-sans text-sm tracking-[0.08em] uppercase font-medium"
          >
            {item.Label}
          </button>
        )}
      </li>
    ));

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 transition-colors duration-300 ${ClassName}`}
    >
      <div className="flex items-center justify-between py-3 max-w-7xl mx-auto">
        {/* Brand */}
        <a className="flex items-center cursor-pointer select-none">
          <span className="font-display text-2xl font-semibold tracking-tight">
            {Brand}
          </span>
          <span className="hidden sm:inline-block ml-2 font-mono text-[10px] tracking-[0.2em] uppercase text-copper border border-copper/40 rounded-full px-2 py-0.5">
            Est. 2019
          </span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {renderDesktopMenu(MenuItems)}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          {CtaButton && (
            <button
              onClick={CtaButton.OnClick}
              className={
                CtaButton.ClassName ||
                "rounded-full bg-copper hover:bg-copper/90 text-paper font-sans text-[13px] tracking-wide uppercase font-medium px-5 py-2.5 transition-colors"
              }
            >
              {CtaButton.Label}
            </button>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((open) => !open)}
          className="lg:hidden p-2 -mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown panel */}
      {mobileOpen && (
        <div className="lg:hidden bg-espresso border-t border-bean/20 px-4 pb-4">
          <ul className="flex flex-col divide-y divide-bean/10">
            {renderMobileMenu(MenuItems)}
          </ul>
          {CtaButton && (
            <button
              onClick={() => {
                CtaButton.OnClick?.();
                setMobileOpen(false);
              }}
              className="mt-4 w-full rounded-full bg-copper hover:bg-copper/90 text-paper font-sans text-[13px] tracking-wide uppercase font-medium px-5 py-2.5 transition-colors"
            >
              {CtaButton.Label}
            </button>
          )}
        </div>
      )}
    </div>
  );
}