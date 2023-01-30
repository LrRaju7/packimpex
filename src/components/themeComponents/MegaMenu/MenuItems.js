import React, { useEffect, useState } from 'react'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'
import axios from 'axios'
import APIS from '../../../config/api'

export default function MenuItems() {
  const [menuItems, setMenuItems] = useState([])
  useEffect(() => {
    axios.get(APIS.MEGA_MENU).then((res) => {
      if (res.data?.data.length) {
        setMenuItems(res.data?.data)
      }
    })
  }, [])
  return (
    <div className="header-container">
      <MenuDesktop items={menuItems}></MenuDesktop>
      <MenuMobile items={menuItems}></MenuMobile>
    </div>
  )
}
