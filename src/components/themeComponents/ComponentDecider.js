import React from 'react'
import types from "../../config/api_data_type"
import {  MenuContentDesktop, MenuItemTitleIcon, FooterItem } from "../themeComponents"

export default function ComponentDecider(props) {
 
  return (
    props?.items?.length ?
        props?.items?.map((item) => {
            return (
            <>
                { (item.type === types.MGMNU_CONTAINER) ?  <MenuContentDesktop key={item.id} keyId={item.id} /> : null }
                { (item.type === types.MGMNU_ITEM) ?  <MenuItemTitleIcon key={item.id} keyId={item.id} /> : null }
                { (item.type === types.FTR_ITEM) ?  <FooterItem key={item.id} keyId={item.id} /> : null }
            </>
            )
        })
    : null    
  )
}
