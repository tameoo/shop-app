import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CustomBox } from "../../components/CustomBox";
import { CustomButton } from "../../components/CustomButton";
import { CustomDropdown } from "../../components/CustomDropdown";
import { SliderCard } from "../../components/SliderCard";
import { Modal } from "../../components/Modal";
import { Tag } from "../../components/Tag";
import { DetailImgSlider } from "../../components/DetailImgSlider";
import "./DetailPage.css";
import { FavoriteButton } from "../../components/FavoriteButton";

const DetailPage = () => {
  const { id } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const slides = [
    "/images/detail.svg",
    "/images/detail.svg",
    "/images/detail.svg",
  ];

  return (
    <React.Fragment>
      <Header title={id} />
      <section className="detail">
        <div className="detail-slider">
          <DetailImgSlider slides={slides} />
          <FavoriteButton changeSize={true} />
        </div>
        <div className="detail-padding">
          <h2 className="detail-title">Платье из бархата с драпировкой</h2>
          <div className="detail-subtitle">
            <div className="card-price-block">
              <span className="card-price">12 490 ₸</span>
              <span className="card-discount">25 990 ₸</span>
            </div>
            <Tag text={"-50%"} tagCard={false} />
          </div>
          <p className="detail-descr">
            Платье миди с круглым вырезом и длинными рукавами со складками.
            Разрез снизу, потайная застежка-молния сзади.
          </p>
          <div className="detail-option">
            <h3>Выберите размер</h3>
            <div className="detail-option-block">
              <CustomBox text={"S"} />
              <CustomBox text={"M"} />
              <CustomBox text={"L"} />
            </div>
          </div>
          <div className="detail-option">
            <h3>Выберите цвет</h3>
            <div className="detail-option-block">
              <div className="color-circle"></div>
              <div className="color-circle"></div>
              <div className="color-circle"></div>
            </div>
          </div>
          <div className="detail-btn-group">
            <CustomButton
              text={"Заказать"}
              clazz={"primary"}
              onPressButton={() => setModalOpen(true)}
            />
            <CustomButton text={"Написать"} icon={"/icons/whatsup.svg"} />
          </div>
          <CustomDropdown
            title={"Характеристика"}
            descr={
              "Стандарт Green to Wear 2.0 направлен на минимизацию воздействия текстильного производства на окружающую среду. Для этого мы разработали программу Inditex The List, которая помогает нам обеспечивать чистоту производственных процессов, а также безопасность и гигиеничность нашей одежды."
            }
          />
          <CustomDropdown
            title={"Доставка"}
            descr={
              "Стандарт Green to Wear 2.0 направлен на минимизацию воздействия текстильного производства на окружающую среду. Для этого мы разработали программу Inditex The List, которая помогает нам обеспечивать чистоту производственных процессов, а также безопасность и гигиеничность нашей одежды."
            }
          />
        </div>
      </section>
      <SliderCard title={"Похожие товары"} />
      <Footer />
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <h2 className="detail-modal-title">Ваш заказ</h2>
          <div className="detail-modal-header">
            <img
              className="detail-modal-img"
              src="/images/detail.svg"
              alt="detail"
            />
            <div className="detail-modal-descr">
              <p>Платье из бархата с драпировкой</p>
              <span>Размер: M-L</span>
              <span>Цвет: Черный</span>
            </div>
          </div>
          <div className="detail-modal-footer">
            <div className="detail-add-item">
              <img src="/icons/minus.svg" alt="sign" />
              <span>1</span>
              <img src="/icons/plus.svg" alt="sign" />
            </div>
            <div className="card-price-block">
              <span className="card-price">12 490 ₸</span>
              <span className="card-discount">25 990 ₸</span>
            </div>
          </div>
          <div className="detail-modal-btn-group">
            <CustomButton
              text={"Заказать сейчас"}
              clazz={"order-now"}
              onPressButton={() => navigate("/order")}
            />
            <CustomButton
              text={"В корзину"}
              clazz={"primary"}
              onPressButton={() => navigate("/cart")}
            />
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export { DetailPage };
