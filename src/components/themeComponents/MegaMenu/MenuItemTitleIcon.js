import React, { useEffect, useState } from 'react'
import axios from 'axios'
import APIS from '../../../config/api'
import Image from '../Image'
import { Link } from "react-router-dom";
import Utils from '../../../config/utils'

export default function MenuItemTitleIcon(props) {
  const [componentDetail, setComponentDetails] = useState({})
  function getComponentDetails (id) {
    axios.get(APIS.MEGA_MENU_ITEM + id).then((res) => {
      const data = res.data.data
      setComponentDetails(data)
      console.log(data);
    }).catch(() => {
      // console.log('error')
    }).then(() => {
      // console.log('error')
    })
  }
  useEffect(() => {
    getComponentDetails(props.keyId)
  }, [props.keyId])

  return (
    <div className="col-lg-4 col-md-6 col-xs-12 nav-list">
      <Link to={Utils.parseDrupalURL(componentDetail?.attributes?.field_mega_menu_link?.uri)}>
        <div className="row">
          <div className="col-lg-3">
            <div className="map-icon">
            { (componentDetail?.relationships?.field_mega_menu_icon?.data?.id) ? <Image type="file" baseurl='https://packimpex-cms.zmallplanet.com/' imageid={componentDetail?.relationships?.field_mega_menu_icon?.data?.id}></Image> : null }
            </div>
          </div>
          <div className="col-lg-9 text-left">
            <h3>{componentDetail?.attributes?.field_mega_menu_title}</h3>
            <div className="small-text">{componentDetail?.attributes?.field_mega_menu_link?.title}<span
              className="bi-arrow-right"></span></div>
          </div>
        </div>
      </Link>
    </div>
  )
}
