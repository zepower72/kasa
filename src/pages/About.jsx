import Banner from "../components/Banner"
import Main from "../components/Main"
import Dropdownmap from "../components/Dropdownmap"
import bannerAbout from "../assets/banner-about.png"

import "../styles/About.css"


function About() {
	return (
		<div className="about">
			
			<Banner banner={bannerAbout} />
			<Main>
				<Dropdownmap/>
			</Main>
			
		</div>
	)
}

export default About

