import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
//import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import Logo from "@/assets/Logo.png";
import Link from "./Link";

type Props = {
    selectedPage: SelectedPage; //SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isMobile = false;

  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    <img alt="logo" src={Logo} className="h-10 w-10" />

                    {!isMobile ? (
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                               <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                               <Link page="Budget" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                               <Link page="Players" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                               <Link page="Photos" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <Link page="Sign In" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <button>Sign Up</button>                               
                            </div>
                        </div>
                        ) : (
                        <button
                            className="rounded-full bg-secondary-500 p-2"
                            //onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className="h-6 w-6 text-white" />
                        </button>
                        )}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar