// components/DownloadButton.js
import styles from "./resume.module.css"

const DownloadButton = ({ filePath, fileName }) => {
    return (
      <a href={filePath} download={fileName}>
        <button className={styles.button} type="button">Download CV</button>
      </a>
    );
  };
  
  export default DownloadButton;
  