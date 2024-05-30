import Image from "next/image";
import styles from  "./about.module.css"

const AboutPage = () => {
    return(
        <div className={styles.container} >
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Ejero</h2>
                <h1 className={styles.title}>Hello! I&apos;m Ejero, Your Frontend Enthusiast</h1>
                <p className={styles.desc}>Over the years, I have worked on a variety of projects, from small business websites to large-scale web applications. Each project has taught me the importance of user-centered design, clean code, and performance optimization. I believe that the best digital experiences are built at the intersection of design and technology. I&apos;m always eager to take on new challenges and collaborate with others to bring innovative ideas to life. Let&apos;s build something amazing together!</p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>5+</h1>
                        <p>Years of experience</p>
                        <p>as a Shopify Dev</p>
                    </div>
                    <div className={styles.box}>
                        <h1>5+</h1>
                        <p>Years of experience</p>
                        <p>as a Front-end Dev</p>
                    </div>
                    <div className={styles.box}>
                        <h1>3+</h1>
                        <p>Years of experience</p>
                        <p>as a UI/UX Designer</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="https://i.pinimg.com/564x/a0/b6/d8/a0b6d8cb72b317efc93a3726866b72e8.jpg" alt="about page" fill className={styles.img}/>
            </div>
        </div>
    )
}


export default AboutPage;