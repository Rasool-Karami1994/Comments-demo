import React from "react";
import { NavLink, useParams } from "react-router-dom";

const Navigation = () => {
  const params = useParams();
  console.log(params);
  const items = [
    { name: "خانه", to: "/" },
    { name: "نظر دادن", to: "/new-comment" },
  ];
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={(navData) => (navData.isActive ? "activeLink" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
