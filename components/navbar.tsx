import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import paths from "../app/data/paths";
import navItems from "../app/data/nav-items";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 md:sticky md:top-0 md:bottom-auto md:px-6 md:pt-4">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-center rounded-2xl border border-white/10 bg-[#202024]/95 px-3 py-2 shadow-2xl shadow-black/30 backdrop-blur-md md:justify-between md:rounded-full md:px-5"
      >
        <Link
          href="#home"
          className="hidden items-center gap-3 rounded-full text-white md:flex"
          aria-label="Dominic Chen, back to home"
        >
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-offPrimary p-1.5">
            <Image src={paths.logo} width={32} height={32} alt="" priority />
          </span>
          <span className="text-sm font-semibold tracking-wide">Dominic Chen</span>
        </Link>

        <ul className="flex w-full items-center justify-around gap-1 md:w-auto md:justify-end md:gap-2">
          {navItems.map((navItem) => (
            <li key={navItem.name}>
              <Link
                href={navItem.location}
                aria-label={navItem.name}
                className="flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full px-3 text-sm font-medium text-lightText transition-colors hover:bg-offPrimary hover:text-white"
              >
                <FontAwesomeIcon icon={navItem.icon} className="h-4 w-4 text-secondary" />
                <span className="hidden lg:inline">{navItem.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
