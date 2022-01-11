import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showMenu } from "../../redux/menuReducer";

import "./Header.css";

const Header = ({
  title,
  showBackIcon = false,
  showAdmin = false,
  showButtons = true,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-block">
        {showBackIcon ? (
          <img
            src="/icons/arrow-left.svg"
            alt="menu"
            onClick={() => navigate(-1)}
          />
        ) : (
          <img
            src="/icons/menu.svg"
            alt="menu"
            onClick={() => dispatch(showMenu(true))}
          />
        )}
        {title ? (
          <h2 className="header-title">{title}</h2>
        ) : (
          <img src="/icons/logo.svg" alt="logo" />
        )}
      </div>
      {showButtons && (
        <div className="header-block">
          {showAdmin && <button className="text-btn">Админ панель</button>}
          <img src="/icons/heart.svg" alt="heart" />
          <img src="/icons/cart.svg" alt="cart" />
        </div>
      )}
    </header>
  );
};

export { Header };
