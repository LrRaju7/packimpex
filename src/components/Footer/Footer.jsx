import React, { useEffect, useState } from 'react'
import axios from 'axios'
import APIS from '../../config/api'
import ComponentDecider from '../themeComponents/ComponentDecider';
const Footer = () => {
	const [items, setItems] = useState([])
	useEffect(() => {
		axios.get(APIS.FOOTER_MENU).then((res) => {
			const data = res.data.data
			setItems(data)
		})
	}, [])
	const year = new Date().getFullYear();
	return (
		<footer>
			<div className="container block-temp flex-row d-flex align-items-start" id="footer-b">
				{
					items.map((item) => {
						return (
							<div className="col-lg-3 footer-item" key={item.id}>
								<p> {item?.attributes?.field_footer_menu_main_title} <i className="bi bi-chevron-down mobile-show"></i></p>
								<ul>
									<ComponentDecider items={item?.relationships?.field_footer_item?.data}></ComponentDecider>
								</ul>
							</div>
						)
					})
				}
			</div>
		</footer>

	);
};

export default Footer;
