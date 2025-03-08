// Local Modules
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import usePostData from "../../utils/customHooks/usePostData";
import styles from "./TagsPage.module.css";

// Container Exclusive Component
const Tag = ({ tagName }) => {
  return (
    <li>
      <Link
        className={styles.tag}
        to={`/tags/${tagName}`}
      >
        <span>{tagName}</span>
      </Link>
    </li>
  );
};

// All Tags Page
export default function TagsPage() {
  // This URL returns an array of the all tags
  const { data, error, loading } = usePostData(
    `${import.meta.env.VITE_API_URL}/tags`
  );

  let mainContent;
  let dataAvailable = true;
  if (error) {
    dataAvailable = false;
    mainContent = <span>{error.message}</span>;
  }
  if (loading) {
    dataAvailable = false;
    mainContent = <span>loading</span>;
  }
  if (!data) {
    dataAvailable = false;
    mainContent = <span>no posts</span>;
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.header}>Tags</h2>
        <ul className={styles.tagsContainer}>
          {dataAvailable
            ? data.map((tag, index) => (
                <Tag
                  key={index}
                  tagName={tag.name}
                />
              ))
            : mainContent}
        </ul>
      </main>
      <Footer />
    </>
  );
}
