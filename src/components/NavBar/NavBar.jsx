import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const NavBar = () => {
    const [open, setOpen] = useState(false);
const routes = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/services", name: "Services" },
  { id: 4, path: "/contact", name: "Contact" },
  { id: 5, path: "/faq", name: "FAQ" }
];



    return (
        <nav className="bg-blue-100 text-black p-4">
            <div className="md:hidden text-2xl" onClick={()=> setOpen(!open)}>
                {
                open ? <AiOutlineClose></AiOutlineClose>
                 : <AiOutlineMenu></AiOutlineMenu>
                }
            </div>
            <ul className={`
             ${open ? "top-14" : "-top-56"}
            md:flex bg-blue-100 text-blue-700 cursor-pointer p-6 absolute rounded-
            transition-all duration-500 ease-in-out

            `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
            
        </nav>
    );
};

export default NavBar;