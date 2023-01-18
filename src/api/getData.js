import axios from "axios";
import {DRUPAL_API_ENDPOINT,FETCH_ALL_URLS,FETCH_SPECIFIC_COMPONENT,FETCH_MEDIA_FOR_THE_COMPONENT,FETCH_MEDIA_DATA} from "../constants/drupalApiEndPoints";

export const getGlobalPageUrls = async (setPageURL) => {
  let pgUrls = [];
  const result = await axios.get(DRUPAL_API_ENDPOINT + FETCH_ALL_URLS);
  let next = result.data.links?.next ? result.data.links.next : null;
  pgUrls.push(result.data.data);
  while(next){
    const nextUrl = next.href;
    const result2 = await axios.get(nextUrl);
    next = result2.data.links?.next ? result2.data.links?.next : null;
    pgUrls.push(result2.data.data);
  }
  setPageURL(pgUrls);
};

export const getPageComponents = async (pageID,setPageData,setPageAttributes,setPageBreadcrumb,setPageBreadcrumbData,setLoading) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT+FETCH_ALL_URLS+pageID);
  const breadcrumbReference = result.data.data.relationships?.field_breadcrumb_section?.data;
  setPageBreadcrumbData(result.data.data.relationships?.field_breadcrumb_section?.data);
  if(breadcrumbReference.length > 0){
    setPageBreadcrumb(true);
  }
  setPageData(result.data.data.relationships.field_web_page_sections);
  setPageAttributes(result.data.data.attributes);
  setLoading(false);
};

export const getBreadcrumbData = async (id ,setPageBreadcrumb ,setLoading) => {
  const breadcrumbData = await axios.get(DRUPAL_API_ENDPOINT+FETCH_SPECIFIC_COMPONENT+"breadcrumb/"+id);
  setPageBreadcrumb(breadcrumbData.data.data.attributes);
  setLoading(false);
};

export const getBannerComponentData = async (setBannerData,setImage,setImageAlt,setSvg,componentType,componentID,setLoading) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT +FETCH_SPECIFIC_COMPONENT +componentType +"/" +componentID);
  setBannerData(result.data.data.attributes.field_banner_title);
  setSvg(result.data.data.attributes.field_svg_code_component?.value);
  const mediaID = result.data.data.relationships?.field_banner_image?.data?.id;
  let mediaFileID = null;
  if(mediaID){
    const mediaResult = await axios.get(DRUPAL_API_ENDPOINT +FETCH_MEDIA_DATA +mediaID);
    setImageAlt(mediaResult.data.data.relationships.thumbnail.data.meta.alt);
    mediaFileID = mediaResult.data.data.relationships?.thumbnail?.data?.id;
  }
  if(mediaFileID){
    const mediaData = await axios.get(DRUPAL_API_ENDPOINT +FETCH_MEDIA_FOR_THE_COMPONENT +mediaFileID);
    setImage(DRUPAL_API_ENDPOINT + mediaData.data.data.attributes.uri.url);
  }
  setLoading(false);
};

export const getBannerWithTitleDescButtonData = async (setData,setBtnTitle, setBtnUrl,setSvg,setImageAlt,setImage,componentType, componentID, setLoading) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT+FETCH_SPECIFIC_COMPONENT+componentType+'/'+componentID);
  setData(result.data);
  setBtnTitle(result.data.data.attributes.field_content_button?.title);
  let buttonUrl = result.data.data.attributes.field_content_button?.uri.replace('internal:','');
  setBtnUrl(buttonUrl);
  setSvg(result.data.data.attributes.field_svg_code_component?.value);
  const mediaID = result.data.data.relationships?.field_content_image?.data?.id;
  let mediaFileID = null;
  if(mediaID){
    const mediaResult = await axios.get(DRUPAL_API_ENDPOINT +FETCH_MEDIA_DATA +mediaID);
    setImageAlt(mediaResult.data.data.relationships?.thumbnail?.data?.meta?.alt);
    mediaFileID = mediaResult.data.data.relationships?.thumbnail?.data?.id;
  }
  if(mediaFileID){
    const mediaData = await axios.get(DRUPAL_API_ENDPOINT +FETCH_MEDIA_FOR_THE_COMPONENT +mediaFileID);
  setImage(DRUPAL_API_ENDPOINT + mediaData.data.data.attributes.uri.url);
  }
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
  const mediaID = result.data.data.relationships?.field_image_2?.data?.id;
  let mediaFileID = null;
  if(mediaID){
    const mediaResult = await axios.get(DRUPAL_API_ENDPOINT +FETCH_MEDIA_DATA +mediaID);
    setImageAlt(mediaResult.data.data.relationships.thumbnail?.data?.meta?.alt);
    mediaFileID = mediaResult.data.data.relationships?.thumbnail?.data?.id;
  }
  if(mediaFileID){
    const mediaData = await axios.get(DRUPAL_API_ENDPOINT +FETCH_MEDIA_FOR_THE_COMPONENT +mediaFileID);
    setImage(DRUPAL_API_ENDPOINT + mediaData.data.data.attributes?.uri?.url);
  }
  setLoading(false);
};

export const getTitleDescriptionData = async (setTitle,setDescription,setSvg,componentType,componentID,setLoading) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT +FETCH_SPECIFIC_COMPONENT +componentType +"/" +componentID);
  setTitle(result.data.data.attributes.field_component_title);
  setDescription(result.data.data.attributes.field_component_description);
  setSvg(result.data.data.attributes.field_svg_code_component?.value);
  setLoading(false);
};

export const getHtmlEditorData = async (setEditor,componentType,componentID,setLoading) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT +FETCH_SPECIFIC_COMPONENT +componentType +"/" +componentID);
  setEditor(result.data.data.attributes.field_html_code.value);
  setLoading(false);
};

export const getCardSliderParentData = async (setDataLenght,setCardSliderData,componentType,componentID,setLoading) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT +FETCH_SPECIFIC_COMPONENT +componentType +"/" +componentID);
  setDataLenght(result.data.data.attributes.field_component_title);
  setCardSliderData(result.data.data.relationships?.field_card_components?.data);
  setLoading(false);
};

export const getCardSliderData = async (setFieldTitle,setBtnUrl,setBtnTitle,setImgUrl,componentType,componentID,setLoading) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT +FETCH_SPECIFIC_COMPONENT +componentType +"/" +componentID);
  setFieldTitle(result.data.data.attributes?.field_title);
  let buttonUrl = result.data.data.attributes?.field_button?.uri.replace('internal:','');
  setBtnUrl(buttonUrl);
  setBtnTitle(result.data.data.attributes?.field_button.title);
  const imgApi = result.data.data.relationships?.field_image?.links?.related?.href;
  if(imgApi){
    const resultImg = await axios.get(imgApi);
    const imgName = resultImg.data.data?.attributes?.name;
    const imgFullDate = resultImg.data.data?.attributes?.created;
    const imgDate = new Date(imgFullDate);
    const imgYear = imgDate.getFullYear();
    const imgMonth = ("0" + (imgDate.getMonth() + 1)).slice(-2);
    if (imgName && imgFullDate) {
      setImgUrl(`${DRUPAL_API_ENDPOINT}/sites/default/files/${imgYear}-${imgMonth}/${imgName}`);
    } else {
      setImgUrl(DRUPAL_API_ENDPOINT + "/sites/default/files/2022-12/Basel-3703.jpg");
    }
  }
  setLoading(false);
};

export const getCardSliderWithTitleData = async (setHeaderData,setCardSliderData,componentType,componentID,setLoading) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT +FETCH_SPECIFIC_COMPONENT +componentType +"/" +componentID);
  setHeaderData(result.data.data.attributes?.field_heading);
  setCardSliderData(result.data.data.relationships?.field_card_components?.data);
  console.log(result.data.data.relationships?.field_card_components?.data);
  setLoading(false);
};

export const getZigzagTriCardData = async (setHeaderData,setZigzagTriCardData,setSvg,componentType,componentID,setLoading) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT +FETCH_SPECIFIC_COMPONENT +componentType +"/" +componentID);
  setHeaderData(result.data.data.attributes.field_title_3);
  setZigzagTriCardData(result.data.data.relationships?.field_card_components_2?.data);
  setSvg(result.data.data.attributes.field_svg_code_component?.value);
  setLoading(false);
};

export const getZigzagHexaCardsData = async (setHeadlineData,setTitleData,setZigzagHexaCardData,setSvg,componentType,componentID,setLoading) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT +FETCH_SPECIFIC_COMPONENT +componentType +"/" +componentID);
  setHeadlineData(result.data.data.attributes?.field_kicker_headline_1);
  setZigzagHexaCardData(result.data.data.relationships?.field_card_components_1?.data);
  setTitleData(result.data.data.attributes?.field_title_1);
  setSvg(result.data.data.attributes?.field_svg_code_component?.value);
  setLoading(false);
};

export const getZigzagCardsData = async (setFieldTitle,setFieldDescription,setBtnUrl,setBtnTitle,setImgUrl,componentType,componentID,setLoading) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT +FETCH_SPECIFIC_COMPONENT +componentType +"/" +componentID);
  setFieldTitle(result.data.data.attributes?.field_card_title);
  setFieldDescription(result.data.data.attributes?.field_card_description?.value);
  setBtnUrl(result.data.data.attributes?.field_card_button?.uri);
  setBtnTitle(result.data.data.attributes?.field_card_button?.title);
  const imgApi =(result.data.data.relationships?.field_card_image?.links?.related?.href);
  if(imgApi){
    const resultImg = await axios.get(imgApi);
    const imgName = resultImg.data.data?.attributes?.name;
    const imgFullDate = resultImg.data.data?.attributes?.created;
    const imgDate = new Date(imgFullDate);
    const imgYear = imgDate.getFullYear();
    const imgMonth = ("0" + (imgDate.getMonth() + 1)).slice(-2);
    if (imgName && imgFullDate) {
      setImgUrl(`${DRUPAL_API_ENDPOINT}/sites/default/files/${imgYear}-${imgMonth}/${imgName}`);
    } else {
      setImgUrl(DRUPAL_API_ENDPOINT + "/sites/default/files/2022-12/Basel-3703.jpg");
    }
  }
  setLoading(false);
};

export const getZigzagTriCardSingleData = async (setFieldTitle,setFieldDescription,setBtnUrl,setBtnTitle,setImgUrl,componentType,componentID,setLoading) => {
  const result = await axios.get(DRUPAL_API_ENDPOINT +FETCH_SPECIFIC_COMPONENT +componentType +"/" +componentID);
  setFieldTitle(result.data.data.attributes?.field_card_title);
  setFieldDescription(result.data.data.attributes?.field_card_description?.value);
  setBtnUrl(result.data.data.attributes?.field_card_button?.uri);
  setBtnTitle(result.data.data.attributes?.field_card_button?.title);
  const imgApi =(result.data.data.relationships?.field_card_image?.links?.related?.href);
  if(imgApi){
    const resultImg = await axios.get(imgApi);
    const imgName = resultImg.data.data?.attributes?.name;
    const imgFullDate = resultImg.data.data?.attributes?.created;
    const imgDate = new Date(imgFullDate);
    const imgYear = imgDate.getFullYear();
    const imgMonth = ("0" + (imgDate.getMonth() + 1)).slice(-2);
    if (imgName && imgFullDate) {
      setImgUrl(`${DRUPAL_API_ENDPOINT}/sites/default/files/${imgYear}-${imgMonth}/${imgName}`);
    } else {
      setImgUrl(DRUPAL_API_ENDPOINT + "/sites/default/files/2022-12/Basel-3703.jpg");
    }
  }
  setLoading(false);
};


