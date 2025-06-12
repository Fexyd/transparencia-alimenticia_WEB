import HeroImage from "./Header/HeroImage";
import Advice from "./body/Advice";
import Choise from "./body/Choise";
import Context from "./body/Context";
import Prevention from "./body/Prevention";

import StampTypes from "./body/StampTypes";
import { useEffect } from "react";
import Footer from "./footer/footer";

export default function Layout() {
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header>
        <HeroImage />
      </header>
      <main>
        <Context></Context>
        <StampTypes></StampTypes>
        <Advice></Advice>
        <Prevention></Prevention>
        <Choise></Choise>
      </main>
      <Footer></Footer>
    </>
  );
}
