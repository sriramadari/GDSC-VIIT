import { useEffect, useState } from "react";

export default function ScrollButton() {
  const [show, setShow] = useState(false);

  function scrollUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollSpy() {
    setShow(window.scrollY > 250);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollSpy);
    return () => {
      window.removeEventListener("scroll", scrollSpy);
    };
  }, []);

  return (
    <>
      <button
        onClick={scrollUp}
        className={`${ show ? "opacity-100 translate-y-0" : "" } 
        fixed bottom-5 right-3 text-light dark:text-dark bg-black bg-opacity-50 dark:bg-light dark:bg-opacity-80 rounded-full w-8 h-8 outline-none border-none opacity-0 translate-y-2 transition-all duration-300 cursor-pointer p-0 grid place-items-center`}
        aria-label="Scroll Up"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="w-5 h-5"
        >
          <path
            fill="currentColor"
            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
          />
        </svg>
      </button>
    </>
  );
}
