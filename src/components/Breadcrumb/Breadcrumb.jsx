import React, { useState, useEffect } from "react";
import styles from "../Breadcrumb/Breadcrumb.module.css";
import axios from "axios";
import { getBreadcrumbData } from "../../api/getData";
import {
  DRUPAL_API_ENDPOINT,
  FETCH_SPECIFIC_COMPONENT,
} from "../../constants/drupalApiEndPoints";

const Breadcrumb = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [pageBreadcrumb, setPageBreadcrumb] = useState([]);

  useEffect(() => {
    getBreadcrumbData(id, setPageBreadcrumb, setLoading);
  }, []);
  return (
    <>
      {loading ? null : (
        <>
          <li className="breadcrumb-item">
            <a
              href={
                pageBreadcrumb.field_breadcrumb_url != null
                  ? pageBreadcrumb.field_breadcrumb_url
                  : null
              }
            >
              {pageBreadcrumb.field_breadcrumb_name}
            </a>
          </li>
        </>
      )}
    </>
  );
};

export default Breadcrumb;
