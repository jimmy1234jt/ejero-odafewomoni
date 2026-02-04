import Image from "next/image";
import styles from "./home.module.css"
import DownloadButton from "@/Components/Resume";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer} >
        <h1 className={styles.title}>Frontend Developer Crafting User Experiences</h1>
        <p className={styles.desc}>Hello! As a frontend developer, my mission is to craft exceptional user experiences through meticulous design and coding. I am dedicated to building responsive and interactive websites that not only look great but also perform seamlessly. Dive into my portfolio to see the variety of projects I&apos;ve worked on.</p>
        <div className={styles.buttons}>
          <button className={styles.button}  >Learn More</button>
          {/* <button className={styles.button} >Contact</button> */}
          <DownloadButton filePath="/Ejero Odafewomoni.pdf" fileName="Ejero Odafewomoni.pdf"/>
        </div>
        <div className={styles.brands}>
          <Image src="/css-3.svg" alt="" width={100} height={50}  className={styles.brandImg}/>
          <Image src="/javascript.svg" alt="" width={100} height={50}  className={styles.brandImg}/>
          <Image src="/next-js.svg" alt="" width={100} height={50}  className={styles.brandImg}/>
          <Image src="/react.svg" alt="" width={100} height={50}  className={styles.brandImg}/>
          <Image src="/shopify.svg" alt="" width={100} height={50}  className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imgContainer} >
        <Image src="https://i.pinimg.com/originals/a5/35/60/a53560c8088900e266880f779dacced7.gif" fill alt="" className={styles.homeImg}/>
      </div>
    
  </div>
  );
}
