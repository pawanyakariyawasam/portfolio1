
// Core packages


// Imports
import Section from '../../structure/section';
import Container from '../../structure/container';

import SectionTitle from '../../blocks/section.title'

import BadgesBlock from '../../blocks/about.badges'
import CopyBlock from '../../blocks/about.copy'

import about from '../../../styles/scss/sections/index/about.module.scss';
import React from "react";

export default function Home() {
	return (
		<Section classProp={about.section}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="From the moment I discovered the power of design, I've been on a mission to blend aesthetics with functionality. With an innate curiosity and a keen eye for detail, I immerse myself in the world of design, continuously pushing boundaries and exploring new horizons. My passion lies in creating seamless user experiences and visually striking designs that leave a lasting impression."
				/>
				<section className={about.content}>
					<div className={about.image}>
					<img src="https://media.licdn.com/dms/image/D5603AQHSKz_oWJIjOw/profile-displayphoto-shrink_800_800/0/1704975316367?e=1717027200&v=beta&t=J13Irs6-qJb_2ZqmxVKPejiQvl9LzdkwzNB0TLcn1Uk" alt="Muhammad Fiaz" width={600} height={800} loading="eager" />
					</div>
					
					<div className={about.copy}>
						<CopyBlock
							title="Softskills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fas', 'user' ]}
							copy="Combining a deep understanding of user psychology with technical proficiency, I excel in translating complex ideas into intuitive interfaces. With effective communication, problem-solving skills, and a collaborative spirit, I thrive in multidisciplinary teams, driving projects from concept to completion."
						/>
						<CopyBlock
							title="UI/UX Design"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'code']}
							copy="As a UI/UX designer, I specialize in crafting intuitive interfaces that delight users and elevate brands. Through user research, wireframing, prototyping, and iterative testing, I ensure that every design decision is rooted in user needs and business objectives."
						/>
					</div>
				</section>
				<section className={about.content}>
					<div className={about.copy}>
						<CopyBlock
							title="Graphic Design"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'shield-alt']}
							copy="In the realm of graphic design, I leverage color theory, typography, and visual hierarchy to create compelling visuals that communicate messages with impact. From branding and marketing materials to digital illustrations and multimedia presentations, I bring ideas to life with creativity and flair."
						/>


					</div>
				</section>
			</Container>
		</Section>
	)
}

