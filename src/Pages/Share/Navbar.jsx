import { Link, useLocation } from 'react-router-dom';
import LogoImage from "../../../public/img/logo.png"
const Navbar = () => {
  const location = useLocation(); 
  const activeClass = 'text border-b-2 border-[#FEF5DB]'; 

  return (
    <nav className="bg-gradient-to-r from-[#BA927C] to-[#738F9B] py-3 px-6 shadow-md sticky top-0 z-50 shadow-black/20 lora">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={LogoImage} alt="Logo" className="md:h-18 w-auto" /> 
        </div>

        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`text-lg ${location.pathname === '/' ? activeClass : 'text-[#FEF5DB]'}`}
          >
            Home
          </Link>
       

          
<Link
  to="/may_memorials"
  className={`text-lg ${
    location.pathname.startsWith('/may_memorials')
    //  ||
    // location.pathname === '/create_memorial'
      ? activeClass
      : 'text-[#FEF5DB]'
  }`}
>
  May Memorials
</Link>
        
          <Link
            to="/create_memorial"
            className={`text-lg ${location.pathname === '/create_memorial' ? activeClass : 'text-[#FEF5DB]'}`}
          >
           Create Memorial
          </Link>
          <Link
             to="/create_digital"
  className={`text-lg ${
    location.pathname.startsWith('/create_digital')
     ||
    location.pathname === '/download_page'
      ? activeClass
      : 'text-[#FEF5DB]'
  }`}
          >
             Create Digital Wills
          </Link>
        </div>

        <div className="md:flex items-center space-x-4">
          <Link
            to="/login"
            className="text  border border-[#FEF5DB] py-2 px-4 rounded-full"
          >
            Log in
          </Link>
          <Link
            to="/login"
            className=" text-[#BA927C] bg-[#FEF5DB] py-2 px-4 rounded-full"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
