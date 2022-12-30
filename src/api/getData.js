import axios from "axios";
import { DRUPAL_API_ENDPOINT, FETCH_ALL_URLS, FETCH_SPECIFIC_COMPONENT, FETCH_MEDIA_FOR_THE_COMPONENT } from "../constants/drupalApiEndPoints";
import { FETCH_MEDIA_DATA } from './../constants/drupalApiEndPoints';

export const getGlobalPageUrls = async (setPageURL) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT+FETCH_ALL_URLS)
  setPageURL(result.data.data) 
};

export const getBannerComponentData = async (setBannerData,setImage,setImageAlt,componentType,componentID,setLoading) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT+FETCH_SPECIFIC_COMPONENT+componentType+'/'+componentID);
  setBannerData(result.data.data.attributes.field_banner_title);
  const mediaResult = await axios.get(DRUPAL_API_ENDPOINT+FETCH_MEDIA_DATA+result.data.data.relationships.field_banner_image.data.id);
  setImageAlt(mediaResult.data.data.relationships.thumbnail.data.meta.alt);
  const mediaData = await axios.get(DRUPAL_API_ENDPOINT+FETCH_MEDIA_FOR_THE_COMPONENT+mediaResult.data.data.relationships.thumbnail.data.id); 
  setImage(DRUPAL_API_ENDPOINT+mediaData.data.data.attributes.uri.url);
  setLoading(false);
};

export const getPageComponents = async (pageID,setPageData,setLoading) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT+FETCH_ALL_URLS+pageID);
  setPageData(result.data.data.relationships.field_web_page_sections);
  setLoading(false);
};