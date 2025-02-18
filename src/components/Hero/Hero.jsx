import heroParagraphs from "../../assets/heroParagraphs";
import imageReaper from "../../assets/reaper.avif";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>Hi, I&apos;m Isutomu</h1>
        <p className={styles.heroParagraph}>{heroParagraphs.paragraph1.text}</p>
        <p className={styles.heroParagraph}>{heroParagraphs.paragraph2.text}</p>
      </div>
      <img className={styles.heroImage} src={imageReaper} alt=""></img>
    </header>
  );
}

export default Hero;
