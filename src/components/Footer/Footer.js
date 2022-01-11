import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer-logo" src="/icons/logo.svg" alt="logo" />
      <p className="footer-descr">Небольшое описание магазина</p>
      <ul className="footer-list">
        <li className="footer-list-item">Контакты</li>
        <li className="footer-list-item">
          <img src="/icons/phone.svg" alt="phone" />
          <a className="footer-tellink" href="tel:+7 (7172) 252 262">
            +7 (7172) 252 262
          </a>
        </li>
        <li className="footer-list-item">
          <img src="/icons/whatsup.svg" alt="phone" />
          <a className="footer-tellink" href="tel:+7 708 4 252 262">
            +7 708 4 252 262
          </a>
        </li>
        <li className="footer-list-item">
          <img src="/icons/instagram.svg" alt="phone" />
          <img src="/icons/telegram.svg" alt="phone" />
          <img src="/icons/whatsup.svg" alt="phone" />
        </li>
      </ul>
      <p className="footer-descr">Политика конфединциальности</p>
      <p className="copyright">©2021. Все права защищены.</p>
    </footer>
  );
};

export { Footer };
