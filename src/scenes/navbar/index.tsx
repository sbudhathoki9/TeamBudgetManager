import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
//import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    selectedPage: SelectedPage;
    isTopOfPage : boolean;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ selectedPage, isTopOfPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "bg-background-light" : "bg-background-light shadow-md"; 

  return (
    <nav className={`${navbarBackground} fixed top-0 z-30 w-full py-6 transition duration-300`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
                <img alt="logo" src={Logo} className="h-10 w-10" />

                {isAboveMediumScreens ? (
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                           <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                           <Link page="Photos" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                           <Link page="Players" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                           <Link page="Budget" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>                                                         
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                            <Link page="Sign In" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <ActionButton setSelectedPage={setSelectedPage}>
                              Sign Up
                            </ActionButton>                               
                        </div>
                    </div>
                    ) : (
                    <button
                        className="rounded-full bg-primary-500 p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <Bars3Icon className="h-6 w-6 text-white" />
                    </button>
                    )}
            </div>
        </div>

        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-background-light shadow-xl">
            {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                    </button>
                </div>

                {/* MENU ITEMS */}
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Photos" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Players" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Budget" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
                </div>
            </div>
      )}
    </nav>
  )
}

export default Navbar