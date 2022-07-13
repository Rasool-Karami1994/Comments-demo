import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <h2>404</h2>
      <h2>صفحه ای که به دنبال آن می گردید وجود ندارد</h2>
      <h3>
        <Link to="/">برگشت به صفحه اصلی</Link>
      </h3>
    </>
  );
};

export default NotFound;
