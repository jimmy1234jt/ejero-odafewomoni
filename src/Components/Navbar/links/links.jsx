"use client"
import { useState } from "react";
import styles from "./links.module.css"
import Navlink from "./navlink/navlink";
import Image from "next/image";
    
    const links = [
        {
            title: "Homepage",
            path: "/",
        },{
            title: "About",
            path: "/about",
        },
        {
            title: "Projects",
            path: "/projects",
        },
        {
            title: "Contact",
            path: "/contact",
        },
    ]
const Links = () => {
    const [open, setOpen] = useState(false)



    return(
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link => (
                    <Navlink item={link} key={link.title}/>
                )))} 
                
            </div>
            
            <Image src="/menu.png" alt="" width={30} height={30} className={styles.menuButton} onClick={() => setOpen((prev) => !prev)} />
            {
                open && <div className={styles.mobilelinks}>
                    {links.map((link => (
                        <Navlink item={link} key={link.title}/>
                    )))}
                </div>
            }
        </div>
    )
}
export default Links;