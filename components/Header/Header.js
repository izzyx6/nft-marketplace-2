import Link from "next/link";
import Image from "next/image"
import PropTypes from "prop-types";
import { useWeb3React } from "@web3-react/core";
import { CubeTransparentIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Button from "../shared/Button/Button";
import useToggleWalletPanel from "../../hooks/contexts/useToggleWalletPanel";

const propTypes = {
  navOptions: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentRoute: PropTypes.string.isRequired,
  isNavOpen: PropTypes.bool.isRequired,
  onSetIsNavOpen: PropTypes.func.isRequired,
};

const Header = ({ navOptions, currentRoute, isNavOpen, onSetIsNavOpen }) => {
  const { setIsWalletPanelOpen } = useToggleWalletPanel();

  const {active} = useWeb3React();

  return (
    <nav className="fixed inset-x-0 top-0 border-b shadow-md p-6 pb-4 z-40 bg-white h-20">
      <div className="flex items-center">
        {/* <h1 className="text-3xl font-bold mr-4">CHAINTUSKER</h1> */}
        <Image src='/logo.png' width={120} height={60}/>
        <div className="flex flex-1 items-center ">
          <div className="hidden lg:block">
            {navOptions.map((option) => {
              const { route, label } = option;
              const isSelected = route === currentRoute;
              return (
                <Link href={route} key={route} passHref>
                  <a
                    className={`p-2 font-bold ${
                      isSelected
                        ? "bg-black rounded-md text-white"
                        : "text-pink-500"
                    }`}
                  >
                    {label}
                  </a>
                </Link>
              );
            })}
          </div>
          <div className="ml-auto flex items-center">
            <div className="lg:hidden flex">
              {!active ? 
                 <Button
            label="Connect"
            icon={
              <CubeTransparentIcon
                className="h-6 w-6 mr-2"
                aria-hidden="true"
              />
            }
            onHandleClick={() => setIsWalletPanelOpen(true)}
            className="mt-auto mr-5 mb-1 p-3 h-8 w40"
          />
               : 
                 <div>
                </div>

              }
              <button
                type="button"
                onClick={() => onSetIsNavOpen((prev) => !prev)}
              >
                <span className="sr-only">Open main menu</span>
                {isNavOpen ? (
                  <XIcon className="block h-7 w-7" aria-hidden="true" />
                ) : (
           
                  <MenuIcon className="block h-7 w-7" aria-hidden="true" />
                )}
              </button>
            </div>
            <Button
              icon={
                <CubeTransparentIcon className="h-6 w-6" aria-hidden="true" />
              }
              onHandleClick={() => setIsWalletPanelOpen((prev) => !prev)}
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = propTypes;
export default Header;
