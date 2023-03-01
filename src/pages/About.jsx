import Header from "../components/Header"
import Banner from "../components/Banner"
import Main from "../components/Main"
import Dropdownmap from "../components/Dropdownmap"
import bannerAbout from "../assets/banner-about.png"


function About() {
	return (
		<div className="about">
			<Header />
			<Banner banner={bannerAbout} />
			<Main>
				<Dropdownmap/>
			</Main>
		</div>
	)
}

export default About

