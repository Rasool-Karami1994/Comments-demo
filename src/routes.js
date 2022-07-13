import React from "react";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Comment from "./pages/Comment";
import AddNewComment from "./pages/AddNewComment";
const routes = [
  { path: "/", element: <HomePage /> },
  {
    path: "/new-comment",
    element: <AddNewComment />,
  },
  { path: "/comment/:id", element: <Comment /> },

  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
