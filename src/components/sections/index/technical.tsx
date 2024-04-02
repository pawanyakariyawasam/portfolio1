
// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges'
import CopyBlock from '../../blocks/about.copy'

// Section scss
import technical from '../../../styles/scss/sections/index/about.module.scss'


export default function Technical() {
	return (
		<Section classProp={`${technical.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hard Skills"
					subTitle="As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages."
				/>
				<section className={`${technical.content} ${technical.container}`}>
					<div className={technical.copy}>
						

						<BadgesBlock
							title="Software I love to work with"
							copy="As a self-taught programmer with a passion for project development, I have a deep and intuitive understanding of how the interfaces of the best software products in the world are designed. I particularly enjoy working with tools like VS Code and JetBrains software to create exceptional projects."
							list={software}
							block="software"
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={technical.container}
							headerIcon={technical.icon} invertedColor={undefined}						/>


					</div>
					<div className={`${technical.image} ${technical.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="data string background"   loading="eager" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}
{/*Badge Block*/}
const software = [
	{ key: 'photoshop', 	name: 'Photoshop', 			type: 'devicon' },
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{key:'androidstudio',name:'AndroidStudio',type:'devicon'},
]


