import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showMenu } from "../../redux/menuReducer";
import "./MenuLink.css";

const MenuLink = ({ title, to }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pushLink = () => {
    dispatch(showMenu(false));
    navigate(to);
  };

  return (
    <button className="menu-link-button" onClick={pushLink}>
      {title}
    </button>
  );
};

export { MenuLink };
