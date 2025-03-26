import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        element: <ChatPage />,
        path: "/chat",
      },
      {
        element: <ProfilePage />,
        path: "/profile",
      },
      {
        element: <SearchPage />,
        path: "/search",
      },
    ],
  },
]);

export default router;
