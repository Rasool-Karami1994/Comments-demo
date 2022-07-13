import { useState, useEffect } from "react";
import { getOneComment } from "../sevices/getOneComment";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { deleteComment } from "../sevices/deleteCommentService";
import { toast } from "react-toastify";

const Comment = () => {
  const [selectdComment, setSelectedComment] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  const closeHandler = (e) => {
    navigate("/");
  };

  const deleteHandler = async () => {
    try {
      await deleteComment(id);
      toast.success("با موفقیت حذف گردید");
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };

  useEffect(() => {
    if (id)
      getOneComment(id)
        .then((res) => setSelectedComment(res.data))
        .catch();
  }, [id]);
  let commentContent = "";
  if (id) commentContent = <p>loading!</p>;
  if (selectdComment)
    commentContent = (
      <div className="comment-container">
        <button className="close-button" onClick={closeHandler}>
          <AiOutlineCloseCircle />
        </button>
        <p>{selectdComment.name}</p>
        <p> {selectdComment.email}</p>
        <p> {selectdComment.body}</p>
        <button className="delete-button" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    );
  return commentContent;
};

export default Comment;
