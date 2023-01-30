import React, { useEffect, useState } from 'react'
import axios from 'axios'
import APIS from '../../config/api'
import { Link } from 'react-router-dom'
import Utils from '../../config/utils'
export default function FooterItem(props) {
  const [componentDetail, setComponentDetails] = useState({})
  const getComponentDetails = (id) => {
    axios.get(APIS.FOOTER_MENU_ITEM + id).then((res) => {
      const data = res.data.data
      setComponentDetails(data)
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
    <li>
      <Link to={Utils.parseDrupalURL(componentDetail?.attributes?.field_menu_link?.uri)}>
        <span className='adress'>
          <span className={componentDetail?.attributes?.field_menu_title}></span> {componentDetail?.attributes?.field_menu_link?.title}
        </span>
      </Link>
    </li>
  )
}
