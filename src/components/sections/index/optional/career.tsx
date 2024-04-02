import React from 'react';
import Section from '../../../structure/section';
import Container from '../../../structure/container';
import SectionTitle from '../../../blocks/section.title';
import career from '../../../../styles/scss/sections/index/career.module.scss';
import Education from './education';

interface Certificate {
  name: string;
  imageUrl: string;
  link?: string;
}

const certificates: Certificate[] = [
  { 
    name: 'Certificate 1', 
    imageUrl: 'https://media.licdn.com/dms/image/sync/D4E27AQEmJXLOhmFCDQ/articleshare-shrink_800/0/1711006020224?e=1712242800&v=beta&t=GRJWM-AqhG0G1fZOS5OKjic9Y32sOPeTOUhtjpQluk4', 
    link: 'https://www.linkedin.com/posts/pawanya-kariyawasam-193984230_1000-free-courses-with-free-certificates-activity-7155434279089442818-ga0V?utm_source=share&utm_medium=member_desktop' 
  },
  { 
    name: 'Certificate 2', 
    imageUrl: 'https://media.licdn.com/dms/image/sync/D5610AQEsqyXvdaiepQ/image-shrink_800/0/1704976417384?e=1712253600&v=beta&t=_7cxUE7UEoKK42ZRA_2R0s7B32j3nnuB-x1B4d5GYFo',
    link: 'https://www.linkedin.com/posts/pawanya-kariyawasam-193984230_introduction-to-packet-tracer-was-issued-activity-7151189408317095936-Ptly?utm_source=share&utm_medium=member_desktop'
  },
  // Add more certificates as needed
];

const squareImageStyle: React.CSSProperties = {
  width: '200px', // Adjust width as needed
  height: '200px', // Adjust height as needed
  objectFit: 'cover', // Ensure the image fills the square
  marginRight: '10px', // Add margin between images
};

const Career: React.FC = () => {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
          title="Certificates"
          preTitle="Career"
          subTitle="I am a Full Stack Developer, currently working in the project development field. My primary goal is to enhance my skills and expand my knowledge to gain valuable experience in complex project development. I am dedicated to continuously improving and staying updated with the latest advancements in the industry."
        />
        <div style={{ display: 'flex' }}>
          {certificates.map((certificate, index) => (
            <div key={index} style={{ marginRight: '20px' }}>
              <h4>{certificate.name}</h4>
              {certificate.link ? (
                <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                  <img src={certificate.imageUrl} alt={certificate.name} style={squareImageStyle} />
                </a>
              ) : (
                <img src={certificate.imageUrl} alt={certificate.name} style={squareImageStyle} />
              )}
            </div>
          ))}
        </div>
      </Container>
      <Education />
    </Section>
  );
}

export default Career;
