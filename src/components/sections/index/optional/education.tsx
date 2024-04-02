
// Section structure
import Section from '../../../structure/section';
import Container from '../../../structure/container';

// Section general blocks
import SectionTitle from '../../../blocks/section.title'

// Career scss
import career from '../../../../styles/scss/sections/index/career.module.scss'


export default function Education() {
    return (
        <Section classProp={`${career.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="Education"
                    preTitle="Formal"
                    subTitle="I am currently studying BSc Degree in IT at University of Sri Jayewardenepura."
                />
                <section className={career.area}>

                    <article className={career.company}>
                        <div className={career.companyContent}>
        <span className={career.companyHeader}>
            <h3>University of Sri Jayewardenepura, Department of ICT</h3>
            <h5>Colombo, Sri Lanka</h5>
        </span>
                            <p>I am currently pursuing my Bachelors degree in Information and communication Technology at University of Sri Jayewardenepura. This four-year program offers a comprehensive curriculum that covers various aspects of ICT and its applications.</p>

                        </div>
                        <div className={career.companyAlt}></div>
                    </article>

                </section>
            </Container>
        </Section>
    )
}

