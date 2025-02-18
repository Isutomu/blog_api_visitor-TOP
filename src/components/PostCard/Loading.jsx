import ContentLoader from "react-content-loader";
import styles from "./PostCard.module.css";

function Loading() {
  return (
    <ContentLoader className={styles.postArticle}>
      <rect x="0" y="0" rx="0" ry="0" width="24%" height="100%" />
      <rect x="26%" y="10%" rx="3" ry="3" width="50%" height="20" />
      <rect x="26%" y="32%" rx="3" ry="3" width="71%" height="10" />
      <rect x="26%" y="42%" rx="3" ry="3" width="71%" height="10" />
      <rect x="26%" y="52%" rx="3" ry="3" width="71%" height="10" />
      <rect x="26%" y="62%" rx="3" ry="3" width="71%" height="10" />
      <rect x="26%" y="72%" rx="3" ry="3" width="50%" height="10" />
      <rect x="26%" y="87%" rx="3" ry="3" width="30%" height="7" />
    </ContentLoader>
  );
}

export default Loading;
