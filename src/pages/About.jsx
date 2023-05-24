import Banner from "../components/Banner"
import Main from "../components/Main"
import DropdownAbout from "../components/DropdownAbout"
import bannerAbout from "../assets/banner-about.png"


function About() {
	return (
		<div className="about">
			
			<Banner banner={bannerAbout} />
			<Main>
				<DropdownAbout/>
			</Main>
			
		</div>
	)
}

export default About

