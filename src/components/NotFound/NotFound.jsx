import React from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function NotFound() {
  return (
    <>
      <section className="not-found">
        <Container>
          <Row>
            <Col>
              <div className="banner-content animate__animated animate__fadeInUp">
                <h1>
                  We couldn’t find this page
                </h1>
                <div className="banner-discription">
                  The link is broken or the page has been moved.
                </div>
                <div>
                  <Link
                    to="/"
                    className="primary-btn"
                  >
                    Back To Main
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}