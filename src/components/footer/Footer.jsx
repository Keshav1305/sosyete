import React from 'react';
import fb from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import mail from '../../assets/images/gmail.png';

import "./Footer.styles.scss"

export default function Footer() {
	const returnToTop = () => {
		var element = document.getElementById("Main");
		element.scrollIntoView();
	}
	return (
		<footer>
			<div className="footer-return">
				<a href="#Main" onClick={(e) => {
					e.preventDefault();
					returnToTop();
				}} >
					<span className="return-to-top-js simple-link arrow">
						<svg id="arrow-up" viewBox="0 0 32 32" width="14px" height="100%">
							<title>Arrow up</title>
							<polygon points="9,8 16,0 23,8"></polygon>
							<line stroke="#000" x1="16" y1="4.228" x2="16" y2="32"></line>
						</svg>
						<span className="footer-return-text">Return to top</span>
					</span>
				</a>
			</div>
			<div className="footer">
				<div className="footer-text">
					<div>
						<span>© Sosyete Zero Gaspiyaz 2021&nbsp;All Rights Reserved.&nbsp;</span>
					</div>
				</div>
				<ul>
					<li>
						<a href="/"><img src={mail} alt="Gmail" /></a>
					</li>
					<li>
						<a href="/"><img src={instagram} alt="Instagram" /></a>
					</li>
					<li>
						<a href="/"><img src={fb} alt="Facebook" /></a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
