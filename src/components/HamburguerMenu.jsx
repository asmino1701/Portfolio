import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import  Hamburger from "hamburger-react";
import { route as routes } from "../data/routes/route";

export default function HamburguerMenu () {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

return (
    <div ref={ref} className="lg:hidden ">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 border-gray-200 dark:bg-gray-600"
                >
                    <ul className="grid gap-2">
                        {routes.map((route, idx) => {
                            const Icon = route.Icon;

                            return (
                                <motion.li
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        delay: 0.1 + idx / 10,
                                    }}
                                    key={route.title}
                                    className="w-full p-[0.08rem] rounded-l"
                                >
                                    <a
                                        onClick={() => setOpen((prev) => !prev)}
                                        className={
                                            "flex items-center justify-between w-full p-5 rounded-xl md:dark:hover:text-blue-500"
                                        }
                                        href={route.href}
                                    >
                                        <span className="flex gap-1 text-lg">{route.title}</span>
                                    </a>
                                </motion.li>
                            );
                        })}
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);
};