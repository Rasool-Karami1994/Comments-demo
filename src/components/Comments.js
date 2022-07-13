const Comments = ({ name, email, onClick }) => {
  return (
    <div className="comments-container" onClick={onClick}>
      <div>
        <p>نام : {name}</p>
        <p>ایمیل: {email}</p>
      </div>
    </div>
  );
};

export default Comments;
