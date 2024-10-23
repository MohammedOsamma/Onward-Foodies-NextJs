import Link from "next/link";
import Logo from "@/assets/logo.png";
import MainHeaderBackground from "./min-header-background";
import classes from "./main-header.module.css";
import Image from "next/image";
import NavLink from "./nav-link";
const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={Logo} alt="A plate on food on it" priority />
          NextLevel food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
