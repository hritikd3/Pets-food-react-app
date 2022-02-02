import "./styles.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Category from "./Components/Category";
import Featured from "./Components/Featured";
import Deal from "./Components/Deal";
import Latest from "./Components/Latest";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Category />
      <Featured />
      <Deal />
      <Latest />
      <Contact />
    </div>
  );
}
