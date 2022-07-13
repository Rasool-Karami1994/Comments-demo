import Comments from "./Comments";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllComments } from "../sevices/getAllCommentsService";
import { Link } from "react-router-dom";

const CommentsList = () => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getAllComments();
        setComments(data);
      } catch (error) {
        setError(true);
      }
    };
    getComments();
    console.log(comments);
  }, []);

  const renderComments = () => {
    let value = <p>Loading</p>;
    if (error) {
      value = <p>Fetching Data Faield!</p>;
      toast.error("دریافت اطلاعات با مشکل مواجه شد؛ دوباره امتحان کنید!");
    }
    if (comments && !error) {
      value = comments.map((c) => (
        <Link to={`/comment/${c.id}`} key={c.id}>
          <Comments name={c.name} email={c.email} />
        </Link>
      ));
    }
    return value;
  };

  return (
    <div className="app-container">
      <div className="comments-container">
        <h2>برای نمایش هر نظر روی آن کلیک کنید</h2>
        {renderComments()}
      </div>
    </div>
  );
};

export default CommentsList;
