import axios from "axios";
import {DRUPAL_API_ENDPOINT,FETCH_ALL_URLS,FETCH_SPECIFIC_COMPONENT,FETCH_MEDIA_FOR_THE_COMPONENT,FETCH_MEDIA_DATA} from "../constants/drupalApiEndPoints";

export const getGlobalPageUrls = async (setPageURL) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT + FETCH_ALL_URLS);
  setPageURL(result.data.data);
};

export const getPageComponents = async (pageID,setPageData,setPageAttributes,setLoading) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT+FETCH_ALL_URLS+pageID);
  setPageData(result.data.data.relationships.field_web_page_sections);
  setPageAttributes(result.data.data.attributes);
  setLoading(false);
};

export const getBannerComponentData = async (setBannerData,setImage,setImageAlt,setSvg,componentType,componentID,setLoading) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT +FETCH_SPECIFIC_COMPONENT +componentType +"/" +componentID);
  setBannerData(result.data.data.attributes.field_banner_title);
  setSvg(result.data.data.attributes.field_svg_code_component?.value);
  const mediaResult = await axios.get(DRUPAL_API_ENDPOINT +FETCH_MEDIA_DATA +result.data.data.relationships.field_banner_image.data.id);
  setImageAlt(mediaResult.data.data.relationships.thumbnail.data.meta.alt);
  const mediaData = await axios.get(DRUPAL_API_ENDPOINT +FETCH_MEDIA_FOR_THE_COMPONENT +mediaResult.data.data.relationships.thumbnail.data.id);
  setImage(DRUPAL_API_ENDPOINT + mediaData.data.data.attributes.uri.url);
  setLoading(false);
};

export const getBannerWithTitleDescButtonData = async (setData,setBtnTitle, setBtnUrl,setSvg,setImageAlt,setImage,componentType, componentID, setLoading) => {
  const response = await axios.get(DRUPAL_API_ENDPOINT+FETCH_SPECIFIC_COMPONENT+componentType+'/'+componentID);
  setData(response.data);
  setBtnTitle(response.data.data.attributes.field_content_button?.title);
  setBtnUrl(response.data.data.attributes.field_content_button?.uri);
  setSvg(response.data.data.attributes.field_svg_code_component?.value);
  const mediaResult = await axios.get(DRUPAL_API_ENDPOINT +FETCH_MEDIA_DATA +response.data.data.relationships.field_content_image?.data?.id);
  setImageAlt(mediaResult.data.data.relationships.thumbnail.data.meta.alt);
  const mediaData = await axios.get(DRUPAL_API_ENDPOINT +FETCH_MEDIA_FOR_THE_COMPONENT +mediaResult.data.data.relationships.thumbnail.data.id);
  setImage(DRUPAL_API_ENDPOINT + mediaData.data.data.attributes.uri.url);
  setLoading(false);
};

export const getImageTextLeftRightData = async (setYear, setTitle,setDescription,setPosition, setImage, setImageAlt, setLink, setSvg, componentType, componentID, setLoading) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT+FETCH_SPECIFIC_COMPONENT+componentType+'/'+componentID);
  setYear(result.data.data.attributes.field_year);
  setTitle(result.data.data.attributes.field_title_2);
  setDescription(result.data.data.attributes.field_description_2.value);
  if (result.data.data.attributes.field_cta_button) {
    setLink(result.data.data.attributes.field_cta_button.title);
  }
  setPosition(result.data.data.attributes.field_image_position);
  setSvg(result.data.data.attributes.field_svg_code_component?.value);
  const mediaResult = await axios.get(DRUPAL_API_ENDPOINT +FETCH_MEDIA_DATA +result.data.data.relationships.field_image_2.data.id);
  setImageAlt(mediaResult.data.data.relationships.thumbnail.data.meta.alt);
  const mediaData = await axios.get(DRUPAL_API_ENDPOINT +FETCH_MEDIA_FOR_THE_COMPONENT +mediaResult.data.data.relationships.thumbnail.data.id);
  setImage(DRUPAL_API_ENDPOINT + mediaData.data.data.attributes.uri.url);
  setLoading(false);
};

export const getTitleDescriptionData = async (setTitle,setDescription,setSvg,componentType,componentID,setLoading) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT +FETCH_SPECIFIC_COMPONENT +componentType +"/" +componentID);
  setTitle(result.data.data.attributes.field_component_title);
  setDescription(result.data.data.attributes.field_component_description);
  setSvg(result.data.data.attributes.field_svg_code_component?.value);
  setLoading(false);
};

export const getCardSliderParentData = async (setDataLenght,componentType,componentID,setLoading) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT +FETCH_SPECIFIC_COMPONENT +componentType +"/" +componentID);
  setDataLenght(result.data.data.attributes.field_component_title);
  setLoading(false);
};

export const getCardSliderData = async (setDataLenght,componentType,componentID,setLoading) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT +FETCH_SPECIFIC_COMPONENT +componentType +"/" +componentID);
  setDataLenght(result.data.data.attributes.field_component_title);
  setLoading(false);
};

export const getCardSliderWithTitleData = async (setDataLenght,componentType,componentID,setLoading) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT +FETCH_SPECIFIC_COMPONENT +componentType +"/" +componentID);
  setDataLenght(result.data.data.attributes.field_component_title);
  setLoading(false);
};


