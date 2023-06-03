"use client";

import { useState, useEffect, Key } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dropIn, reveal } from "@/lib/animations";
import ReactDOM from "react-dom";
import Overlay from "./overlay";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../layout/Logo";

const Menu = ({ show, onClose, links }: any) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const contactContent = show ? (
    <Overlay onClick={onClose}>
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-200 m-auto rounded-md py-12 w-80 h-100"
      >
        <div className="flex flex-col justify-center items-center space-y-8 w-full h-full">
          <Logo />

          {links.map((link: any, i: any) => (
            <motion.a
              className="relative capitalize text-xl"
              key={link.id}
              href={link.href}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              {link.href === pathname && (
                <span
                  // layoutId="underline"
                  className="absolute left-0 top-full block h-[2px] w-full bg-gray-800 rounded-xl "
                />
              )}
              {link.text}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </Overlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => null}>
        {contactContent}
      </AnimatePresence>,
      //@ts-ignore
      document.getElementById("contact-modal")
    );
  } else {
    return null;
  }
};

export default Menu;
