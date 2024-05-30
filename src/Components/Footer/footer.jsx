import styles from "./footer.module.css"

const Footer = () => {
    return(
        <div className={styles.container} >
            <div className={styles.logo}>Ejero Odafewomoni</div>
            <div className={styles.text}>
               Ejero Odafewomoni  &copy; All rights reserved.
            </div>
        </div>
    )
}


export default Footer;