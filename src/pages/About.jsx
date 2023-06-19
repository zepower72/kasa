import Banner from "../components/Banner"
import Main from "../components/Main"
import CollapseAbout from "../components/CollapseAbout"
import bannerAbout from "../assets/banner-about.png"


function About() {
	return (
		<div className="about">
			
			<Banner banner={bannerAbout} />
			<Main>
				<CollapseAbout/>
			</Main>
			
		</div>
	)
}

export default About

