import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { showMenu } from "../../redux/menuReducer";

import "./Header.css";

const Header = ({
  title,
  showBackIcon = false,
  showAdmin = false,
  showButtons = true,
  showCart = true,
  showFavorite = true,
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
            onClick={() => {
              document.body.classList.add("no-scroll");
              dispatch(showMenu(true));
            }}
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
          {showFavorite && (
            <Link className="header-img-wrapper" to="/favorites">
              <img src="/icons/heart-regular.svg" alt="heart" />
            </Link>
          )}
          {showCart && (
            <Link className="header-img-wrapper" to="/cart">
              <div className="total-cart">
                <img src="/icons/cart.svg" alt="cart" />
                <span className="total-cart-circle">1</span>
              </div>
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export { Header };
