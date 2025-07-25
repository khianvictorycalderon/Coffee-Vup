import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About from "./static_component/about";
import { slideToID } from "./Utility";

export default function App() {
  return (
    <>
      <Navbar
        Brand="CoffeeVup"
        ClassName="bg-transparent text-base"
        MenuItems={[
          {
            Label: "About",
            OnClick: () => slideToID("about"),
          },
          {
            Label: "Service",
            OnClick: () => alert("Testimonials Clicked"),
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
      <Hero
        BGImage="images/expresso.jpg"
        Title="Coffee Vup"
        Description="Make coffee with love."
        Button={{
          Label: "View Menu",
          OnClick: () => alert("Clicked")
        }}
      />
      <div id="about"/>
      <About/>
    </>
  )
}