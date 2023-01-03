import React from "react";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { getImageTextLeftRightData } from "../../api/getData";
import { TWO_COLUMN_COMPONENT_YEAR_TITLE } from "../../constants/componentTypes";
import styles from "../ImageTextLeftRight/ImageTextLeftRight.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: "55%",
    textAlign: "center",
  },
};

function ImageTextLeftRight({componentID}) {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState(null);
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [imageAlt, setImageAlt] = useState(null);

  useEffect(() => {
    getImageTextLeftRightData(setYear, setTitle,setDescription,setPosition, setImage, setImageAlt, setLink, TWO_COLUMN_COMPONENT_YEAR_TITLE, componentID, setLoading);
  });

  return (
    <>
      {loading ? null : (
        <>
        {position === "right" ? (
          <div
            className={`container-fluid ${styles.imagetextleftright__container}`}
          >
            <div className="row align-items-center">
              <div className="col-md-6">
                <span className={styles.year}>{year}</span>
                <h2>{title}</h2>
                {link !== null ? (
                  <>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: description.substring(0, 100) + "...",
                      }}
                    />
                    <button className="btn__green">{link}</button>
                  </>
                ) : (
                  <>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: description,
                      }}
                    />
                  </>
                )}
              </div>

              <div className="col-md-6">
                <img className={styles.style__img} src={image} alt={imageAlt}/>
              </div>
              <Modal
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                style={styles.customStyles}
              >
                <div className={styles.close__button}>
                  <button onClick={() => setModalOpen(false)}>&#10005;</button>
                </div>
                <span className={styles.year}>{year}</span>
                <br />
                <h2 className="text-center">{title}</h2>
                <br />
                <p
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                />
              </Modal>
            </div>
          </div>
        ) : (
          <div
            className={`container-fluid ${styles.imagetextleftright__container}`}
          >
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className={styles.style__img} src={image} alt={imageAlt}/>
              </div>
              <div className="col-md-6">
                <span className={styles.year}>{year}</span>
                <h2>{title}</h2>
                {link !== null ? (
                  <>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: description.substring(0, 100) + "...",
                      }}
                    />
                    <button onClick={setModalOpen} className="btn__green">
                      {link}
                    </button>
                  </>
                ) : (
                  <>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: description,
                      }}
                    />
                  </>
                )}
              </div>
              <Modal
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                style={customStyles}
              >
                <div className={styles.close__button}>
                  <button onClick={() => setModalOpen(false)}>&#10005;</button>
                </div>
                <span className={styles.year}>{year}</span>
                <br />
                <h2 className="text-center">{title}</h2>
                <br />
                <p
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                />
              </Modal>
            </div>
          </div>
        )}
        </>
      )}
    </>
  );
}

export default ImageTextLeftRight;
