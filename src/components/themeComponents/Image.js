import React, { useEffect, useState } from 'react'
import axios from 'axios'
import APIS from '../../config/api'
export default function Image(props) {
  const [imageDetails, setImageDetail] = useState({})
  useEffect(() => {
    let imageURl
    if (props?.type && props?.type == "file") {
      imageURl = APIS.FILE.replace('{id}', props.imageid)
    } else {
      imageURl = APIS.IMAGE.replace('{id}', props.imageid)
    }
    axios.get(imageURl).then((res) => {
      const data = res.data.data
      setImageDetail(data)
    }).catch(() => {
      // console.log('error')
    }).then(() => {
      // console.log('error')
    })
  }, [props.imageid])
  return (
    <img src={props.baseurl + imageDetails?.attributes?.uri?.url} {...props} />
  )
}
