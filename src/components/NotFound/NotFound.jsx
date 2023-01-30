import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function NotFound() {
  return (
    <>
      <section className="not-found pt-100">
        <Container>
          <Row>
            <Col>
              <div className="banner-content animate__animated animate__fadeInUp text-center">
                <span className="text__primary display-1 fw-bold">&#9785;</span>
                <h1 className="pb-5 fw-bolder">We couldn’t find this page</h1>
                <div className="banner-discription pb-3">
                  The link is broken or the page has been moved.
                </div>
                <div>
                  <Link to="/" className="primary-btn pb-3">
                    Back To Main
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
