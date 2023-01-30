import React from 'react'
import MenuContentMobile from './MenuContentMobile'
export default function MenuMobile(props) {
  return (
    <nav className="nav-drill">
      <ul className="nav-items nav-level-1">
        {
          props?.items?.map((item) => {
            return (
              <li className="nav-item nav-expand" key={item.id}>
                <div className="mb-nav-block">
                  <a className="nav-link nav-expand-link">{item?.attributes?.field_mega_menu_title}</a>
                </div>
              </li>
            )
          })
        }
        <li className="nav-item nav-expand">
          <div className="mb-nav-block">
            <a className="nav-link nav-expand-link">
              Corporate Relocation
            </a>
          </div>
          <MenuContentMobile></MenuContentMobile>
        </li>

      </ul>
    </nav>
  )
}
