import cards, { getCards } from "@/lib/data";
import PostCard from "@/Components/postCard/postCard";
import styles from "./projects.module.css"



const ProjectsPage = async () => {

    const cards = await getCards()

    return(
        <div className={styles.container} >
            {cards.map((card) => (
                <div className={styles.post} key={card.id} >
                    <PostCard card={card} />
                </div>
            ))}
        </div>
    )
}


export default ProjectsPage;