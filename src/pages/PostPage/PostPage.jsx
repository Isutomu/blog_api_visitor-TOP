import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PostFullView from "../../components/PostFullView/PostFullView";
import CommentEditor from "../../components/CommentEditor/CommentEditor";

function PostPage() {
  const { postId } = useParams();

  return (
    <>
      <Header />
      <PostFullView postId={postId} />
      <CommentEditor />
      <Footer />
    </>
  );
}

export default PostPage;
