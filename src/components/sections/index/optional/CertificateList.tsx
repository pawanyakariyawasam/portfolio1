import React from 'react';

interface Certificate {
  name: string;
  imageUrl: string;
}

const certificates: Certificate[] = [
  { name: 'Certificate 1', imageUrl: '/path/to/certificate1.jpg' },
  { name: 'Certificate 2', imageUrl: '/path/to/certificate2.jpg' },
  // Add more certificates as needed
];

const CertificateList: React.FC = () => {
  return (
    <div>
      <h3>Certificates</h3>
      <div>
        {certificates.map((certificate, index) => (
          <div key={index}>
            <h4>{certificate.name}</h4>
            <img src={certificate.imageUrl} alt={certificate.name} />
          </div>
        ))}
      </div>
      {/* Add badges if needed */}
      {/* <BadgeList list={certificates} block="stack" fullContainer="fullContainer" /> */}
    </div>
  );
};

export default CertificateList;
