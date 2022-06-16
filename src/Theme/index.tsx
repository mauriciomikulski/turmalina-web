import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Routers from "../routes";


const Theme = () => {
  // const [theme, setTheme] = useState("light");  
  // const handleThemeChange = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // }

  return (
    <div>
      <Header />
      <Routers />
      <Footer />      
    </div>
  );
}

export default Theme;