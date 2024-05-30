import Image from "next/image";
import styles from "./postCard.module.css"
import Link from "next/link";

const postCard = ({card}) => {
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://i.pinimg.com/736x/3f/cd/17/3fcd1785622d5eea86a236d9ad795fba.jpg" alt="" fill className={styles.img} />
                </div>
                {/* <span className={styles.date}>31.05.2024</span> */}
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{card.title}</h1>
                <p className={styles.desc}>{card.desc}</p>
                <Link className={styles.link} href={`/blog/${card.id}`} >READ MORE</Link>
            </div>
        </div>
    )
}
export default postCard;