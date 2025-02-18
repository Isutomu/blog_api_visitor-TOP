import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import PostsCardsWrapper from "../../components/PostsCardsWrapper/PostsCardsWrapper";
import Footer from "../../components/Footer/Footer";
import usePostData from "../../utils/customHooks/usePostData";
import styles from "./HomePage.module.css";
import PostCardLoading from "../../components/PostCard/Loading";

function HomePage() {
  // This URL returns an array of posts previews
  const { data, error, loading } = usePostData(
    `${import.meta.env.VITE_API_URL}/posts`
  );

  let mainContent;
  let dataAvailable = true;
  if (error) {
    dataAvailable = false;
    mainContent = <span>{error.message}</span>;
  }
  if (loading) {
    dataAvailable = false;
    mainContent = <PostCardLoading />;
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <h2 className={styles.recentTitle}>Recent posts</h2>
        {dataAvailable ? <PostsCardsWrapper data={data} /> : mainContent}
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
