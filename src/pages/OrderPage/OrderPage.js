import React from "react";
import { useParams } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "./OrderPage.css";

const OrderPage = () => {
  const { id } = useParams();
  const items = 1;
  const price = "12000";
  const img = "/images/detail.svg";

  return (
    <React.Fragment>
      <Header
        title={"Оформление заказа"}
        showBackIcon={true}
        showButtons={false}
      />
      <section className="order">
        <div className="order-header">
          <h3>Заказ</h3>
          <span>{items} товар</span>
        </div>
        <img className="order-img" src={img} alt="order" />
        <form className="order-form">
          <div className="order-form-controll">
            <input
              className="order-text"
              type="text"
              placeholder="Введите имя"
            />
            <img className="order-form-img" src="/icons/user.svg" alt="user" />
          </div>
          <div className="order-form-controll">
            <input
              className="order-text"
              type="text"
              placeholder="+7(xxx)xxx xx xx"
            />
            <img
              className="order-form-img"
              src="/icons/phone-gray.svg"
              alt="phone"
            />
          </div>
          <div className="order-delivery">
            <h3>Доставка</h3>
            <div className="order-delivery-location">
              <label className="order-delivery-btn">
                <input type="radio" className="order-radio" name="radio" />
                <div className="order-delivery-wrapper">
                  <h4>По Алматы</h4>
                  <h5>от 1 дня, 1000 ₸</h5>
                </div>
              </label>
              <label className="order-delivery-btn">
                <input type="radio" className="order-radio" name="radio" />
                <div className="order-delivery-wrapper">
                  <h4>В другие города Казахстана</h4>
                  <h5>от 7 дней, 1000 ₸</h5>
                </div>
              </label>
            </div>
            <div className="order-form-controll">
              <input
                type="text"
                className="order-text"
                placeholder="Введите адрес"
              />
              <img
                className="order-form-img"
                src="/icons/location.svg"
                alt="location"
              />
            </div>
          </div>
          <div className="order-price">
            <div className="order-price-items">
              <h3>{items} товар на сумму</h3>
              <span>{price} ₸</span>
            </div>
            <div className="order-price-items">
              <h3>Сумма доставки</h3>
              <span>1000 ₸</span>
            </div>
            <div className="order-price-items">
              <h3>Общая сумма</h3>
              <span>{+price + 1000} ₸</span>
            </div>
          </div>
          <CustomButton text={"Заказать"} isPrimary={false} isPrevent={true} />
        </form>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export { OrderPage };
