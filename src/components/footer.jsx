import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <footer className=" w-full">
      
      {/* border text content */}
      <div className="flex flex-row p-4 w-full justify-center bg-white">
        <p className="text-2 font-neutral font-extralight text-center">
          Copyright 2023 RECCOIN | All Rights Reserved
        </p>
        <Link to="/privacy-policy" className="text-2 font-neutral font-extralight hover:underline cursor-pointer absolute right-8">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
