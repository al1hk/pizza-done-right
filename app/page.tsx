import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Items from "./components/navbar/items/Items";
import About from "./components/About/About";
import Hours from "./components/Hours/Hours";
import Contact from "./components/Contact/Contact";



export default function Home() {
  return (
    <div>
      <Navbar/>
      <Menu/>
      <Items/>
      <About/>
      <Hours/>
      <Contact/>
    </div>
  )
}
