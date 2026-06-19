import { useState } from "react";
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
    Image: "images/menu/espresso.jpg",
    Origin: "Sagada, PH",
    Process: "Washed",
    OnClick: () => alert("Buying Espresso"),
  },
  {
    Name: "Latte",
    Description: "Smooth espresso mixed with steamed milk.",
    Image: "images/menu/latte.jpg",
    Origin: "Benguet, PH",
    Process: "Honey",
    OnClick: () => alert("Buying Latte"),
  },
  {
    Name: "Cappuccino",
    Description: "A balance of espresso, steamed milk, and foam.",
    Image: "images/menu/cappuccino.jpg",
    Origin: "Sidamo, ET",
    Process: "Natural",
    OnClick: () => alert("Buying Cappuccino"),
  },
  {
    Name: "Americano",
    Description: "Espresso diluted with hot water for a milder taste.",
    Image: "images/menu/americano.jpg",
    Origin: "Huila, CO",
    Process: "Washed",
    OnClick: () => alert("Buying Americano"),
  },
  {
    Name: "Cold Brew",
    Description: "Smooth and less acidic, steeped for 12+ hours.",
    Image: "images/menu/coldbrew.jpg",
    Origin: "Sagada, PH",
    Process: "Natural",
    OnClick: () => alert("Buying Cold Brew"),
  },
  {
    Name: "Mocha",
    Description: "Chocolatey espresso blend topped with milk.",
    Image: "images/menu/mocha.jpg",
    Origin: "Bukidnon, PH",
    Process: "Honey",
    OnClick: () => alert("Buying Mocha"),
  },
];

const testimonialsData = [
  {
    Name: "Sophia Reyes",
    Description: `"Coffee Vup changed my mornings forever. Their cold brew is the smoothest I've ever had!"`,
    Image: "images/testimonials/sophia.jpg",
  },
  {
    Name: "Liam Cruz",
    Description: `"As a barista myself, I'm impressed with their quality beans and friendly staff. Highly recommended!"`,
    Image: "images/testimonials/liam.jpg",
  },
  {
    Name: "Isabella Santos",
    Description: `"Warm ambiance, top-tier coffee, and the perfect playlist. Coffee Vup is my go-to cafe now."`,
    Image: "images/testimonials/isabella.jpg",
  },
];

export default function App() {
  const [menuBGColor, setMenuBGColor] = useState<string>("bg-transparent");

  useOnScrollAt(
    "hero",
    () => setMenuBGColor("bg-transparent"),
    () => setMenuBGColor("bg-espresso/95 backdrop-blur-sm shadow-sm")
  );

  return (
    <>
      <Navbar
        Brand="Coffee Vup"
        ClassName={`${menuBGColor} text-parchment`}
        MenuItems={[
          { Label: "About", OnClick: () => slideToID("about") },
          { Label: "Service", OnClick: () => slideToID("service") },
          { Label: "Testimonials", OnClick: () => slideToID("testimonials") },
          { Label: "Contact", OnClick: () => slideToID("contact") },
        ]}
        CtaButton={{
          Label: "Order now",
          OnClick: () => slideToID("menu"),
        }}
      />
      <div id="hero">
        <Hero
          BGImage="images/expresso.jpg"
          Title="Coffee Vup"
          Description="Small-batch roasted, sourced direct from farm to cup."
          Button={{
            Label: "View menu",
            OnClick: () => slideToID("menu"),
          }}
        />
      </div>
      <div id="about" />
      <About />
      <div id="service" />
      <Service />
      <div id="menu" />
      <CardList
        Title="On the menu"
        Eyebrow="Roast list"
        Classname="bg-espresso text-parchment"
        Data={menuData}
        Variant="roast"
      />
      <div id="testimonials" />
      <CardList
        Title="What people are saying"
        Eyebrow="Testimonials"
        Classname="bg-paper text-espresso"
        Data={testimonialsData}
        Variant="quote"
        ButtonEnabled={false}
      />
      <div id="contact" />
      <ContactUs />
      <Footer />
    </>
  );
}