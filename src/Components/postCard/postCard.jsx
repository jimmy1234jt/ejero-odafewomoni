import Image from "next/image";
import styles from "./postCard.module.css"
import Link from "next/link";

const postCard = ({card}) => {
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src={card.img} alt="" fill className={styles.img} />
                </div>
                
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{card.title}</h1>
                <p className={styles.desc}><span>Description : </span>{card.desc}</p>
                <p className={styles.desc}><span>Tool : </span>{card.tool}</p>
                <Link className={styles.link} href={card.link} key={card.id}>View Website</Link>
            </div>
        </div>
    )
}
export default postCard;