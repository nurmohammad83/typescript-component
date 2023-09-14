import Button from "../Components/UI/Button";
import { navLinks } from "../constants";
import { ILink } from "../types/types";

const Header = () => {
  return (
    <div
      className="fixed z-40 w-full bg-white href p-0 lg:border-b transition ease-in"
    >
      <div className="flex justify-between items-center max-w-screen-xl border-b lg:border-none bg-opacity-30 bg-transparent mx-auto lg:px-16 py-5">
        <a href="index.html" className="text-3xl text-black font-extrabold ">
          Extreme
        </a>
        <nav className="hidden lg:block duration-300 ease-in-out overflow-hidden">
          <ul className="lg:flex lg:space-x-4 font-medium  text-black">
            {
                navLinks?.map((link:ILink)=>(
                    <li>
              <a className=" text-black hover:text-orange-500" href={link.link}>
                {link.title}
              </a>
            </li>
                ))
            }
          </ul>
        </nav>
        <div className="hidden items-center justify-end md:flex ">
         <Button variant="outline">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
