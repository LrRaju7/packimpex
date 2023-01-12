import React from "react";
import Modal from "react-modal";
import { useState, useEffect, useRef } from "react";
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

function ImageTextLeftRight({ componentID }) {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState(null);
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [imageAlt, setImageAlt] = useState(null);
  const [visible2, setVisible2] = useState("");
  const [visible3, setVisible3] = useState("");
  const [winST, setWinST] = useState(null);
  const arrowRef2 = useRef(null);
  const arrowRef3 = useRef(null);
  const [svg, setSvg] = useState(null);

  useEffect(() => {
    getImageTextLeftRightData(setYear,setTitle,setDescription,setPosition,setImage,setImageAlt,setLink,setSvg,TWO_COLUMN_COMPONENT_YEAR_TITLE,componentID,setLoading);
  },[componentID]);

  useEffect(() => {
    const handleScroll = () => {
      setWinST(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    const winH = window.innerHeight;
    if (position === "right") {
      const offsetTop2 = arrowRef2.current.offsetTop;
      const outerHeight2 = arrowRef2.current.offsetHeight;
      if (winST > offsetTop2 - winH + outerHeight2) {
        setVisible2("visible");
      } else if (winST < offsetTop2 - winH) {
        setVisible2("");
      }
    } else if (position === "left") {
      const offsetTop3 = arrowRef3.current.offsetTop;
      const outerHeight3 = arrowRef3.current.offsetHeight;
      if (winST > offsetTop3 - winH + outerHeight3) {
        setVisible3("visible");
      } else if (winST < offsetTop3 - winH) {
        setVisible3("");
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [winST]);
  return (
    <>
      <div className="pxy-100">
        {loading ? null : (
          <>
            {position === "right" ? (
              <div
                className={`container ${styles.imagetextleftright__container}`}
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
                      <button
                        className={styles.modal__button}
                        onClick={() => setModalOpen(false)}
                      >
                        &#10005;
                      </button>
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
                <div>
                  <div
                    className="line_svg_block wow steps animated"
                    style={{ visibility: "visible" }}
                  >
                    <div className="fadeInAnim visible">
                      <div
                        ref={arrowRef2}
                        className={`svg_arrow arrow2 ${visible2}`}
                      >
                        <svg
                          version="1.1"
                          width="671.469"
                          height="237.338"
                          viewBox="0 0 671.5 237.3"
                          preserveAspectRatio="none"
                        >
                          <symbol id="pathSymbol2">
                            <path
                              id="border-02"
                              className="path"
                              d="M670.2,1.2c-15.5,52-62.3,91.5-132.4,109.5C401.2,146,311.7,56,161.6,92.7C71.8,114.7,20,166.2,1.2,236.1"
                              transform="translate(1.225 1.244)"
                            ></path>
                          </symbol>
                          <g>
                            <use
                              xlinkHref="#pathSymbol2"
                              className="path1-01"
                            ></use>
                            <use
                              xlinkHref="#pathSymbol2"
                              className="path2-02"
                            ></use>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={`container ${styles.imagetextleftright__container}`}
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
                      <button
                        className={styles.modal__button}
                        onClick={() => setModalOpen(false)}
                      >
                        &#10005;
                      </button>
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
                <div>
                  <div
                    className="line_svg_block s2 wow steps animated"
                    style={{ visibility: "visible" }}
                  >
                    <div className="fadeInAnim visible">
                      <div
                        ref={arrowRef3}
                        className={`svg_arrow arrow3 ${visible3}`}
                      >
                        <svg
                          version="1.1"
                          width="671.469"
                          height="237.338"
                          viewBox="0 0 671.5 237.3"
                          preserveAspectRatio="none"
                        >
                          <symbol id="pathSymbol3">
                            <path
                              id="border-03"
                              className="path"
                              d="M1.2,1.2c0,0,20.4,117.4,177.4,147.2C282,168,383.1,86.1,502.8,96.2C640.2,107.9,664.2,236,664.2,236"
                              transform="translate(1.225 1.244)"
                            ></path>
                          </symbol>
                          <g>
                            <use
                              xlinkHref="#pathSymbol3"
                              className="path1-03"
                            ></use>
                            <use
                              xlinkHref="#pathSymbol3"
                              className="path2-03"
                            ></use>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      {svg !== null && (
        <>
          <div
            className={styles.svg__block__1__up}
            dangerouslySetInnerHTML={{
              __html: svg,
            }}
          />
        </>
      )}
    </>
  );
}
export default ImageTextLeftRight;
