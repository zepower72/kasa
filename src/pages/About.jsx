
import React from 'react'
import Header from "../components/Header"
import Banner from "../components/Banner"
import Main from "../components/Main"
import Collapse from "../components/Collapse"

import "../styles/Header.css"
import "../styles/Banner.css"
import "../styles/Main.css"
import "../styles/Collapse.css"

function About() {
	return (
		<div>
			<Main>
				<Header />
				<Banner />
				<Collapse/>
			</Main>
		</div>
	)
}

export default About
