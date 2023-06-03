"use client";

import { useState, useEffect, Key } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dropIn } from "@/lib/animations";
import ReactDOM from "react-dom";
import Overlay from "../modal/overlay";
import ContactForm from "../forms/ContactForm";

const Contact = ({ show, onClose }: any) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const contactContent = show ? (
    <Overlay onClick={onClose}>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="m-auto w-[500px] px-4 py-8 bg-gray-200 rounded"
      >
        <ContactForm />
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

export default Contact;
