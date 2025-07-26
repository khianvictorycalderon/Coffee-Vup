import { useEffect, useState } from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About from "./static_component/about";
import { slideToID, useOnScrollAt } from "./Utility";
import Service from "./static_component/service";
import Footer from "./static_component/footer";
import CardList from "./components/card_list";
import ContactUs from "./static_component/contact";

const menuData = [
  {
    Name: "Espresso",
    Description: "Strong and bold shot of pure coffee.",
    Image: "/images/menu/espresso.jpg",
    OnClick: () => alert("Buying Espresso"),
  },
  {
    Name: "Latte",
    Description: "Smooth espresso mixed with steamed milk.",
    Image: "/images/menu/latte.jpg",
    OnClick: () => alert("Buying Latte"),
  },
  {
    Name: "Cappuccino",
    Description: "A balance of espresso, steamed milk, and foam.",
    Image: "/images/menu/cappuccino.jpg",
    OnClick: () => alert("Buying Cappuccino"),
  },
  {
    Name: "Americano",
    Description: "Espresso diluted with hot water for a milder taste.",
    Image: "/images/menu/americano.jpg",
    OnClick: () => alert("Buying Americano"),
  },
  {
    Name: "Cold Brew",
    Description: "Smooth and less acidic, steeped for 12+ hours.",
    Image: "/images/menu/coldbrew.jpg",
    OnClick: () => alert("Buying Cold Brew"),
  },
  {
    Name: "Mocha",
    Description: "Chocolatey espresso blend topped with milk.",
    Image: "/images/menu/mocha.jpg",
    OnClick: () => alert("Buying Mocha"),
  }
];

const testimonialsData = [
  {
    Name: "Sophia Reyes",
    Description: `"Coffee Vup changed my mornings forever. Their cold brew is the smoothest I’ve ever had!"`,
    Image: "/images/testimonials/sophia.jpg",
  },
  {
    Name: "Liam Cruz",
    Description: `"As a barista myself, I'm impressed with their quality beans and friendly staff. Highly recommended!"`,
    Image: "/images/testimonials/liam.jpg",
  },
  {
    Name: "Isabella Santos",
    Description: `"Warm ambiance, top-tier coffee, and the perfect playlist. Coffee Vup is my go-to cafe now."`,
    Image: "/images/testimonials/isabella.jpg",
  },
];

export default function App() {

  const [menuBGColor, setMenuBGColor] = useState<string>("bg-transparent");
  
  useOnScrollAt(
    "hero",
    () => setMenuBGColor("bg-transparent"),
    () => setMenuBGColor("bg-gray-800")
  );

  useEffect(() => {
    alert("This is a demo website created for presentation purposes only and does not represent a real business.");
  },[]);

  return (
    <>
      <Navbar
        Brand="CoffeeVup"
        ClassName={`${menuBGColor} text-white`}
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
            OnClick: () => slideToID("testimonials"),
          },
          {
            Label: "Contact",
            OnClick: () => slideToID("contact"),
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
            OnClick: () => slideToID("menu")
          }}
        />
      </div>
      <div id="about"/>
      <About/>
      <div id="service"/>
      <Service/>
      <div id="menu"/>
      <CardList Title="Our Coffee Menu" Classname="bg-slate-900 pt-8" Data={menuData}/>
      <div id="testimonials"/>
      <CardList Title="Testimonials" Classname="bg-gray-100 text-slate-900 pt-8" Data={testimonialsData} ButtonEnabled={false} />
      <div id="contact"/>
      <ContactUs/>
      <Footer/>
    </>
  )
}