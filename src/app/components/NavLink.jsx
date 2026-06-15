import Link from "next/link";
const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="relative block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:bg-transparent md:p-0 hover:text-white transition-colors duration-200 group"
    >
      {title}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300 rounded-full" />
    </Link>
  );
};

export default NavLink;