import React, { useEffect, useState } from 'react'
import axios from 'axios'
import APIS from '../../config/api'
export default function Space(props) {
  const [componentDetail, setComponentDetails] = useState({})
  const getComponentDetails = (id) => {
    axios.get(APIS.SPACE + id).then((res) => {
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
    <div className={componentDetail?.attributes?.field_class_name}></div>
  )
}
