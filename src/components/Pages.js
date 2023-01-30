import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import axios from 'axios'
import APIS from '../config/api'
import Meta from '../components/Meta'
import ComponentDecider from "./themeComponents/ComponentDecider"

export default function Pages(props) {
let { id } = useParams();
let location = useLocation();
const [pageData, setPageData] = useState([])
const [pageDetail, setPageDetail] = useState({})
const getPageDetails = (id) => {
    axios.get(`${APIS.page_detail}?filter[field_page_url][value]=${id}`).then((res) => {
        const page = res.data.data[0]
        const webSections = page.relationships?.field_web_page_sections?.data
        setPageDetail(page)
        setPageData(webSections)
      }).catch(() => {
        // console.log('error')
      }).then(() => {
        // console.log('error')
      })
}
useEffect(() => {
    getPageDetails(window.location.pathname)
}, [location])

  return (
    <>
        <Meta title={`${pageDetail?.attributes?.title}`}/>
        <ComponentDecider items={pageData}></ComponentDecider>
    </>
  )
}
