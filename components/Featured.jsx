import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";
import { FaTruck, FaLeaf, FaCandyCane, FaQuestionCircle } from "react-icons/fa";
import YouTube from "react-youtube";
import Modal from "react-modal";

Modal.setAppElement('#__next'); // Necesario para accesibilidad con React Modal

const Featured = () => {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1, // Reproduce el video automáticamente
    },
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <div className={styles.content}>
              <h1>PROTEGE TU SALUD</h1>
              <h2>BEBIDAS</h2>
              <h3>100% NATURALES</h3>
              <button>PEDIR YA!</button>
              {/* 
              <ul className={styles.featuresList}>
                <li>
                  <span className={styles.iconContainer}>
                    <FaTruck className={styles.icon} />
                  </span>
                  Contraentrega envio gratis
                </li>
                <li>
                  <span className={styles.iconContainer}>
                    <FaLeaf className={styles.icon} />
                  </span>
                  Producto 100% natural
                </li>
                <li>
                  <span className={styles.iconContainer}>
                    <FaCandyCane className={styles.icon} />
                  </span>
                  0 azúcar
                </li>
              </ul>
              */}
              <div className={styles.faqSection} onClick={toggleModal}>
                <FaQuestionCircle className={styles.faqIcon} />
                <h4>Preguntas Frecuentes</h4>
              </div>
              <Modal
                isOpen={showModal}
                onRequestClose={toggleModal}
                className={styles.modal}
                overlayClassName={styles.overlay}
              >
                <button onClick={toggleModal} className={styles.closeButton}>X</button>
                <YouTube videoId="M7lc1UVf-VE" opts={opts} /> {/* ID del video cambiado */}
              </Modal>
            </div>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;
