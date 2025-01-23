import { links } from "@/lib/links";
import Link from "next/link";
import Newsletter from "../Newsletter";

function Footer() {
  return (
    <footer className="h-[500px] border-t text-white"> {/* Added text-white here */}
      <div className="container flex justify-between py-12 max-lg:flex-wrap gap-10 overflow-hidden">
        {/* Logo And Address */}
        <div className="logo-address flex-[2] min-w-[320px]">
          <h3 className="font-bold text-2xl mb-16 max-lg:mb-10">Slonixx.</h3>
          <p>
            xxx street xxx streetno. xxx city <br />
            abc,
            <br /> xxx 235 xxx
          </p>
        </div>

        {/* Links 01 */}
        <div className="links-one flex-1 min-w-[130px]">
          <h6 className="font-medium mb-10 max-lg:mb-4">Links</h6>
          <ul className="links">
            {links.map((link) => {
              return (
                <li key={link.id} className="mt-6 font-medium w-fit">
                  <Link
                    href={link.path}
                    className="block py-2 border-b border-b-transparent hover:border-b-white"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Links 02 */}
        <div className="links-two flex-1 min-w-[130px]">
          <h6 className="font-medium mb-10 max-lg:mb-4">Help</h6>
          <ul className="links">
            <li className="mt-6 font-medium w-fit">
              <Link
                href="#"
                className="block py-2 border-b border-b-transparent hover:border-b-white"
              >
                Payment Options
              </Link>
            </li>
            <li className="mt-6 font-medium w-fit">
              <Link
                href="#"
                className="block py-2 border-b border-b-transparent hover:border-b-white"
              >
                Returns
              </Link>
            </li>
            <li className="mt-6 font-medium w-fit">
              <Link
                href="#"
                className="block py-2 border-b border-b-transparent hover:border-b-white"
              >
                Privacy Policies
              </Link>
            </li>
          </ul>
        </div>

        {/* News Letter */}
        <div className="news-letter flex-[2] min-w-[320px]">
          <h6 className="font-medium mb-10 max-lg:mb-4">Newsletter</h6>
          <Newsletter />
        </div>
      </div>

      {/* Copyright */}
      <div className="container copyright border-t py-8 text-sm">
        &copy; {new Date().getFullYear()} Slonixx. Made By Aeyla.
      </div>
    </footer>
  );
}

export default Footer;
