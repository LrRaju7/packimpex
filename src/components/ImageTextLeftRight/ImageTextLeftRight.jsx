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

function ImageTextLeftRight({ componentID, isFirst, isLast }) {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState(null);
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [imageAlt, setImageAlt] = useState(null);
  const [visibleRight, setVisibleRight] = useState("");
  const [visibleLeft, setVisibleLeft] = useState("");
  const [winST, setWinST] = useState(null);
  const arrowRefRight = useRef(null);
  const arrowRefLeft = useRef(null);
  const [svg, setSvg] = useState(null);

  useEffect(() => {
    getImageTextLeftRightData(
      setYear,
      setTitle,
      setDescription,
      setPosition,
      setImage,
      setImageAlt,
      setLink,
      setSvg,
      TWO_COLUMN_COMPONENT_YEAR_TITLE,
      componentID,
      setLoading
    );
  }, [componentID]);

  useEffect(() => {
    const handleScroll = () => {
      setWinST(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    const winH = window.innerHeight;
    if (!isLast && position === "right") {
      const offsetTopRight = arrowRefRight?.current?.offsetTop;
      const outerHeightRight = arrowRefRight?.current?.offsetHeight;
      if (winST > offsetTopRight - winH + outerHeightRight) {
        setVisibleRight("visible");
      } else if (winST < offsetTopRight - winH) {
        setVisibleRight("");
      }
    } else if (!isLast && position === "left") {
      const offsetTopLeft = arrowRefLeft?.current?.offsetTop;
      const outerHeightLeft = arrowRefLeft?.current?.offsetHeight;
      if (winST > offsetTopLeft - winH + outerHeightLeft) {
        setVisibleLeft("visible");
      } else if (winST < offsetTopLeft - winH) {
        setVisibleLeft("");
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line
  }, [winST]);

  return (
    <>
      <div className={`${isLast && "pb-100"}`}>
        {isFirst && position === "right" && (
          <div
            className="top-line steps"
            style={{
              position: "absolute",
              right: "0",
              bottom: "-100px",
              overflow: "hidden",
            }}
          >
            <div className="bg_div fadeInAnim visible">
              <div className="svg_arrow visible">
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="843.3"
                  height="412.1"
                  viewBox="0 0 843.3 412.1"
                  preserveAspectRatio="none"
                >
                  <symbol id="pathSymbol">
                    <path
                      id="border"
                      className="path"
                      d="M0,0S-47.5,81.75-135.25,126.25s-156-22-211.5,0c-75.38,29.88-40.346,146.38-117.5,193-83.028,50.169-153.268-25.683-271.75-8-73.35,10.947-109.474,95.3-109.474,125.881"
                      transform="translate(847.474 2.734)"
                    ></path>
                  </symbol>
                  <g>
                    <use xlinkHref="#pathSymbol" className="path1"></use>
                    <use xlinkHref="#pathSymbol" className="path2"></use>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        )}
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
                    <img
                      className={styles.style__img}
                      src={image}
                      alt={imageAlt}
                    />
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
                  {!isLast && (
                    <div
                      className="line_svg_block wow steps animated"
                      style={{ visibility: "visible" }}
                    >
                      <div className="fadeInAnim visible">
                        <div
                          ref={arrowRefRight}
                          className={`svg_arrow arrow2 ${visibleRight}`}
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
                  )}
                </div>
              </div>
            ) : (
              <div
                className={`container ${styles.imagetextleftright__container}`}
              >
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <img
                      className={styles.style__img}
                      src={image}
                      alt={imageAlt}
                    />
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
                {!isLast && (
                  <div>
                    <div
                      className="line_svg_block s2 wow steps animated"
                      style={{ visibility: "visible" }}
                    >
                      <div className="fadeInAnim visible">
                        <div
                          ref={arrowRefLeft}
                          className={`svg_arrow arrow3 ${visibleLeft}`}
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
                )}
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
