import Link from "next/link";
const NavLink = ({ href, title }) => {
  // Check if href is an external url (starts with 'http' or 'https')
  const isExternalLink = href.startsWith('http');
  
  // If it is an external url, use <a>
  if (isExternalLink) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block py-2 pl-3 pr-4 text-text-middle sm:text-xl rounded md:p-0 hover:text-text-extralight cursor-pointer"
      >
        {title}
      </a>
    );
  }
  // If it is an internal anchor link, use Next.js Link component
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
