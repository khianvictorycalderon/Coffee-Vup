import { useState } from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About from "./static_component/about";
import { slideToID, useOnScrollAt } from "./Utility";
import Service from "./static_component/service";
import Footer from "./static_component/footer";

export default function App() {

  const [menuBGColor, setMenuBGColor] = useState<string>("bg-transparent");
  
  useOnScrollAt(
    "hero",
    () => setMenuBGColor("bg-transparent"),
    () => setMenuBGColor("bg-gray-800")
  );

  return (
    <>
      <Navbar
        Brand="CoffeeVup"
        ClassName={`${menuBGColor} text-base`}
        MenuItems={[
          {
            Label: "About",
            OnClick: () => slideToID("about"),
          },
          {
            Label: "Service",
            OnClick: () => slideToID("service"),
          },
          {
            Label: "Testimonials",
            OnClick: () => alert("Testimonials Clicked"),
          },
          {
            Label: "Contact",
            OnClick: () => alert("Contact Clicked"),
          },
          // {
          //   Label: "Projects",
          //   Submenu: [
          //     { Label: "Web App", OnClick: () => alert("Web App") },
          //     { Label: "Mobile App", OnClick: () => alert("Mobile App") },
          //   ],
          // },
        ]}
      />
      <div id="hero">
        <Hero
          BGImage="images/expresso.jpg"
          Title="Coffee Vup"
          Description="Make coffee with love."
          Button={{
            Label: "View Menu",
            OnClick: () => alert("Clicked")
          }}
        />
      </div>
      <div id="about"/>
      <About/>
      <div id="service"/>
      <Service/>
      <div id="footer"/>
      <Footer/>
    </>
  )
}