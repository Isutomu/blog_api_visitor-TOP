import { createBrowserRouter } from "react-router-dom";
import LogIn from "../components/LogIn/LogIn";
import LogOut from "../components/LogOut/LogOut";
import HomePage from "../pages/HomePage/HomePage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import PostPage from "../pages/PostPage/PostPage";
import SearchResultPage from "../pages/SearchResultPage/SearchResultPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TagsPage from "../pages/TagsPage/TagsPage";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <PageNotFound />,
    },
    { path: "/posts/:postId", element: <PostPage /> },
    { path: "/tags", element: <TagsPage /> },
    { path: "/tags/:tagName", element: <SearchResultPage /> },
    { path: "/signup", element: <SignUpPage /> },
    { path: "/login", element: <LogIn /> },
    { path: "/logout", element: <LogOut /> },
  ],
  { basename: "/blog_api_visitor-TOP/" }
);

export default routes;
