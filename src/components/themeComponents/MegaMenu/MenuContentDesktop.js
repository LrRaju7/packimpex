import React, { useEffect, useState } from 'react'
import axios from 'axios'
import APIS from '../../../config/api'
import ComponentDecider from '../ComponentDecider'
export default function MenuContentDesktop(props) {
  const [componentDetail, setComponentDetails] = useState({})
  function loadJqueryFunction () {
    window.jQuery('.lg-nav-item').each(function () {
      window.jQuery(this).hover(function () {
        if (!window.jQuery(this).children('a').hasClass('half-circle')) {
          window.jQuery(this).addClass('half-circle')
          window.jQuery(this).addClass('active');
          window.jQuery(this).attr('circle', 'true')
        }
        window.jQuery(this).children('div.lg-nav-fade').stop().fadeIn()
      }, function () {
        if (window.jQuery(this).attr('circle') == 'true') {
          window.jQuery(this).removeClass('half-circle')
          window.jQuery(this).removeClass('active');
        }
        window.jQuery(this).children('div.lg-nav-fade').stop().fadeOut()
      })
    })
  }
  function getComponentDetails (id) {
    axios.get(APIS.MEGA_MENU_COTAINER + id).then((res) => {
      const data = res.data.data
      setComponentDetails(data)
    }).catch(() => {
      // console.log('error')
    }).then(() => {
      // console.log('error')
    })
  }

  const Load12 = () => {
    return (
      <div className="col-lg-12 font-b nav-block">
        <ComponentDecider items={componentDetail?.relationships?.field_mega_menu_i?.data}></ComponentDecider>
      </div>
    )
  }
  const Load4x8 = () => {
    return (
       <>
        <div className="col-lg-4"></div>
        <div className="col-lg-8 font-b nav-block">
          <ComponentDecider items={componentDetail?.relationships?.field_mega_menu_i?.data}></ComponentDecider>
        </div>
       </>
    )
  }
  useEffect(() => {
    getComponentDetails(props.keyId)
  }, [props.keyId])

  useEffect(() => {
    loadJqueryFunction()
  }, [])
  return (
    <div className="lg-nav-fade">
      <div className="fade-body clearfix padding-clear">
        <div className="row fade-body-hover">
          {
            componentDetail && componentDetail?.attributes?.field_mega_menu_type == "simple items" ? <Load12></Load12> : <Load4x8></Load4x8>
          }
          {/* <div className="col-lg-12 font-b nav-block">
            <div className="row row-flex">
              <div className="col-lg-4 col-md-6 col-xs-12 nav-list">
                <a href="relocation_support.html">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="map-icon">
                        <img src="/packimpex/images/NL_icons/svg_icons/icons_packimpex_night_def_1.svg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-9 text-left">
                      <h3>Why use a relocation service?</h3>

                      <div className="small-text">Supercharge your employee experience<span
                        className="bi-arrow-right"></span></div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12 nav-list">
                <a href="what_we_do.html">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="map-icon">
                        <img src="/packimpex/images/NL_icons/svg_icons/icons_packimpex_night_def_2.svg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-9 text-left">
                      <h3>What Packimpex offers</h3>

                      <div className="small-text">Relocation services in Europe<span
                        className="bi-arrow-right"></span></div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12 nav-list">
                <a href="hire_and_move_the_best_talent.html">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="map-icon">
                        <img src="/packimpex/images/NL_icons/svg_icons/icons_packimpex_night_def_3.svg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-9 text-left">
                      <h3>Hire and move the best talent</h3>

                      <div className="small-text">The easy way to relocate for work<span
                        className="bi-arrow-right"></span></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="row row-flex">
              <div className="col-lg-4 col-md-6 col-xs-12 nav-list">
                <a href="industry_leading_satisfaction_scores.html">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="map-icon">
                        <img src="/packimpex/images/NL_icons/svg_icons/icons_packimpex_night_def_6.svg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-9 text-left">
                      <h3>Industry-leading satisfaction</h3>

                      <div className="small-text">Award winning service<span className="bi-arrow-right"></span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12 nav-list">
                <a href="academy.html">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="map-icon">
                        <img src="/packimpex/images/NL_icons/svg_icons/icons_packimpex_night_def_4.svg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-9 text-left">
                      <h3>Relocation Academy</h3>

                      <div className="small-text">Learning Centre for HR & Mobility<span
                        className="bi-arrow-right"></span></div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12 nav-list">
                <a href="hyper_local_coverage_across_multiple_european_countries.html">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="map-icon">
                        <img src="/packimpex/images/NL_icons/svg_icons/icons_packimpex_night_def_5.svg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-9 text-left">
                      <h3>European coverage</h3>
                      <div className="small-text">Find us wherever you're going<span
                        className="bi-arrow-right"></span></div>
                    </div>
                  </div>
                </a>
              </div>

            </div>
          </div> */}
        </div>
      </div>

      <div className="clear"></div>
      <div className="nav-wave-b">
        <img src="packimpex/images/NL_images/nav-bottom-svg-white.svg" alt="" style={{ width: "100%", height: "auto;" }} />
      </div>
      <div className="nav-shadow-bg"></div>
    </div>
  )
}
