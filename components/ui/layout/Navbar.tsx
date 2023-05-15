"use client";
import { useState } from "react";
import { IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";
import { VscChromeClose, VscMenu } from "react-icons/vsc";
import Headroom from "react-headroom";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "./Logo";
import Menu from "../modal/menu";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const pathname = usePathname();

  const links = [
    {
      id: 1,
      href: "/",
      text: "home",
    },
    {
      id: 2,
      href: "/projects",
      text: "projects",
    },
    {
      id: 3,
      href: "/contact",
      text: "contact",
    },
  ];

  return (
    <>
      <Menu show={isMenuOpen} onClose={toggleMenu} links={links} />
      <Headroom>
        <nav className="py-2">
          <div className="container">
            <div className="flex justify-between">
              {/* LOGO */}
              <div>
                {/* <Glow /> */}
                <Logo />
              </div>
              <div className="hidden items-center justify-center md:flex space-x-8">
                {links.map((link) => (
                  <Link
                    className="relative text-lg capitalize"
                    key={link.id}
                    href={link.href}
                  >
                    {link.href === pathname && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 top-full block h-[2px] w-full bg-white rounded-xl "
                      />
                    )}
                    {link.text}
                  </Link>
                ))}
              </div>

              {/* mob button */}
              <button
                onClick={toggleMenu}
                className="flex items-center md:hidden"
              >
                {isMenuOpen ? (
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <VscChromeClose className="text-3xl" />
                  </motion.div>
                ) : (
                  <motion.div>
                    <VscMenu className="text-3xl" />
                  </motion.div>
                )}
              </button>
            </div>
          </div>
        </nav>
      </Headroom>
    </>
  );
};

export default Navbar;
