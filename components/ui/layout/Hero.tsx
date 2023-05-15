"use client";
import { useState } from "react";
import Contact from "../modal/contact";
const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  function toggeContact() {
    setOpen(!isOpen);
  }

  return (
    <>
      <Contact show={isOpen} onClose={toggeContact} />
      <div className="container">
        <div className="flex flex-col space-y-2 mt-24">
          <div className="max-w-2xl space-y-4">
            <div>
              <h1 className="big-title">Hey, I&apos;m Scott</h1>
            </div>
            <div>
              <p className="text-lg text-gray-300">
                {" "}
                Experienced web developer Based in California, USA. Passionate
                about creating functional, beautiful, user friendly websites.
              </p>
            </div>
            <div>
              <button
                onClick={toggeContact}
                className="border-b animate-pulse uppercase"
              >
                contact me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
