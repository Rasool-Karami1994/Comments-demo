import { useState } from "react";
import { addNewComment } from "../sevices/addNewComment";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddNewComment = () => {
  const navigate = useNavigate();

  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    body: "",
  });

  //use one Change handler for all inputs
  const ChangeHandler = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
    console.log(newComment);
  };

  const createCommentHandler = async () => {
    try {
      addNewComment({
        ...newComment,
        postid: 1,
      });
      navigate("/");
      toast.success("نظر شما ثبت گردید!");
    } catch (error) {
      console.log(error);
      toast.error("   خطایی رخ داده است");
    }
  };

  return (
    <div className="add-container">
      <h2>اینجا نظر خود را وارد کنید</h2>
      <div className="input-container">
        <div className="input-sections">
          <label> نام &nbsp; &nbsp;</label>
          <input type="text" onChange={ChangeHandler} name="name"></input>
        </div>
        <div className="input-sections">
          <label>ایمیل </label>
          <input type="email" onChange={ChangeHandler} name="email"></input>
        </div>
        <div className="input-sections">
          <label>محتوا </label>
          <input type="textarea" onChange={ChangeHandler} name="body"></input>
        </div>
      </div>
      <button onClick={createCommentHandler}>ارسال نظر</button>
    </div>
  );
};

export default AddNewComment;
