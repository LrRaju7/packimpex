import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../History/History.module.css";

function History() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");

  // NOTE: using promises

  // useEffect(() => {
  //   axios
  //     .get("http://jsonplaceholder.typicode.com/posts")
  //     .then((response) => setData(response.data))
  //     .catch((error) => setIsError(error.message));
  // }, []);

  // NOTE: using asynsc await

  const getApiData = async () => {
    try {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/posts"
      );

      setData(response.data);
    } catch (error) {
      setIsError(error.message);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      {isError !== "" && <h2>{isError}</h2>}
      {data.slice(0, 1).map((post) => {
        const { id, title, body } = post;
        return (
          <div
            className={`container-fluid ${styles.history__container}`}
            key={id}
          >
            <div className="row">
              <div className="col-md-7">
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default History;
