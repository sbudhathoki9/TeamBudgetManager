import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
//import useMediaQuery from "@/hooks/useMediaQuery";
import Logo from "@/assets/Logo.png";

type Props = {}

const Navbar = (props: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isMobile = false;

  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    <img alt="logo" src={Logo} />

                    {!isMobile ? (
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                               <p>Test</p>
                               <p>Test 2</p>
                               <p>Test 3</p>
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <p>Sign In</p>                               
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