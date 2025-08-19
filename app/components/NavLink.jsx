import Link from "next/link";
const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-text-middle sm:text-xl rounded md:p-0 hover:text-text-extralight cursor-pointer"
    >
      {title}
    </Link>
  );
};
export default NavLink;
