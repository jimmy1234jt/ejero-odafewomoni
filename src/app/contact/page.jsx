import Image from "next/image";
import styles from "./contact.module.css"

const Contact = () => {
    return(
        <div className={styles.container} >
            <div className={styles.imgContainer}>
                <Image src="https://i.pinimg.com/564x/46/63/0e/46630e22923aa721d42d803a4e4e8087.jpg" alt="" fill className={styles.img} />
            </div>
            <div className={styles.formContainer}>
                <h1 className={styles.title} >CONTACT</h1>
                <form action="" className={styles.form} >
                    <input type="text" placeholder="Name and Surname" />
                    <input type="Email" placeholder="Email Address" />
                    <input type="text" placeholder="Phone Number (Optional)" />
                    <textarea name="" id="" cols={30} rows={10} placeholder="Message"></textarea>
                    <button >Send</button>
                </form>
                <div className={styles.socials} >
                    <h2>Socials :</h2>
                    <div className={styles.icons} >
                        <a><Image src="/x.svg" width={30} height={30} alt="" /></a>
                        <a href="mailto:ejeroodafewomoni@gmail.com"><Image src="/gmail.svg" width={50} height={50} alt="" /></a>
                        <a><Image src="/github.svg" width={30} height={30} alt="" /></a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default Contact;