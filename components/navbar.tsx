import Image from "next/image";
import paths from "../app/data/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import navItems from "../app/data/nav-items";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-primary/95 px-3 py-2 shadow-card backdrop-blur-md sm:px-4"
      >
        <Link
          href="#home"
          className="flex shrink-0 items-center gap-3 rounded-xl pr-2 text-white"
          aria-label="Dominic Chen, back to home"
        >
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-line bg-offPrimary p-1.5">
            <Image src={paths.logo} width={36} height={36} alt="" priority />
          </span>
          <span className="hidden leading-tight lg:block">
            <span className="block text-sm font-bold">Dominic Chen</span>
            <span className="block text-[11px] font-medium text-muted">Software Engineer</span>
          </span>
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2">
          {navItems.map((navItem) => (
            <li key={navItem.name}>
              <Link
                href={navItem.location}
                aria-label={navItem.name}
                className="flex min-h-10 min-w-10 items-center justify-center gap-2 rounded-xl px-2.5 text-sm font-medium text-lightText transition-colors hover:bg-offPrimary hover:text-white sm:px-3"
              >
                <FontAwesomeIcon icon={navItem.icon} className="h-4 w-4 text-secondary" />
                <span className="hidden md:inline">{navItem.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
