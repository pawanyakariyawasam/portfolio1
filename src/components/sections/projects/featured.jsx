
import FeaturedProject from '../../blocks/projects/featured'


// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title'

import css from '../../../styles/scss/sections/projects/featured.module.scss'
import content from '../../../content/projects/featured.json'

{/* Featured Projects */}
export default function FeaturedProjects() {

	return (
		<Section classProp={css.hasBg}>	
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Featured Projects"
					preTitle="UX and Full Stack"
					subTitle="Focused on the experience, driven by the engineering."
				/> 				{
				content.map( (data, index) => {
					
				})
				}
			</Container>
			
		</Section>
	)
}