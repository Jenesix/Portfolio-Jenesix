import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";


export default function Navbar() {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 768px)');


    return (
        <header className="top-0 p-5 w-full flex  items-start justify-between">
            <motion.div initial={{ y: -500, opacity: 0, scale: 0.5, }} animate={{ y: 0, opacity: 1, scale: 1, }} transition={{ duration: 1.5, }} className='md:ml-16 xl:ml-24 flex flex-row items-center'>
                <h1 className="text-3xl mt-1 font-F6">Portfolio</h1>
            </motion.div>
            <motion.div initial={{ y: -500, opacity: 0, scale: 0.5, }} animate={{ y: 0, opacity: 1, scale: 1, }} transition={{ duration: 1.5, }} className='flex flex-row items-center'>
                {isDesktop ? (
                    <div className="gap-11 flex xl:mr-32 md:mr-28">
                        <Link href="/About" className=" text-xl font-abc  mt-1  font-F6">About</Link>
                        <Link href="/Skills" className=" text-xl font-abc mt-1  font-F6">Skills</Link>
                        <Link href="/contact" className=" text-xl font-abc mt-1  font-F6">Contact</Link>
                    </div>
                ) : (<button
                    className="rounded-full bg-red p-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                    <FaBars className="text-3xl" />
                </button>)}

                {!isDesktop && isMenuToggled && (
                    <motion.div initial={{ x: 500, opacity: 0, scale: 1, }} animate={{ x: 0, opacity: 1, scale: 1, }} transition={{ duration: 1.5, }} className="fixed right-0 bottom-0 h-full bg-white w-[300px]">
                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <ImCross className="text-2xl" />
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                            <Link href="/About" className=" text-xl font-abc  mt-1  font-F6">About</Link>
                            <Link href="/Skills" className=" text-xl font-abc mt-1  font-F6">Skills</Link>
                            <Link href="/contact" className=" text-xl font-abc mt-1  font-F6">Contact</Link>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </header >
    )
}