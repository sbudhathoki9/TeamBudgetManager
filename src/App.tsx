import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "./scenes/home";
import Photos from "./scenes/photos";
import Players from "./scenes/players";
import Budget from "./scenes/budget";


function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }else{
        setIsTopOfPage(false);
      }
      
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage} setSelectedPage={setSelectedPage} 
      />
      <Home setSelectedPage={setSelectedPage} />
      <Photos setSelectedPage={setSelectedPage} />
      <Players setSelectedPage={setSelectedPage} />
      <Budget setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
