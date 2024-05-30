import Link from "next/link";
import Links from "./links/links";
import styles from "./navbar.module.css"

const Navbar = () => {
    return(
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Ejero Odafewomoni</Link>
            <Link href="/" className={styles.minilogo}>Ejero </Link>
            <div>
                <Links/>
            </div>
        </div>
    )
}


export default Navbar;