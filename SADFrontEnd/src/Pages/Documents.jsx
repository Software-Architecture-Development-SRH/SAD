import React from 'react';
import CvComponent from '../components/CvComponent'; // Adjust the path as needed
import CoverLetterComponent from '../components/CoverLetterComponent'; // Adjust the path as needed
import CertificatesComponent from '../components/CertificatesComponent'; // Adjust the path as needed

const Documents = () => {
  return (
    <div>
      <h1>Documents</h1>
      <CvComponent />
      <CoverLetterComponent />
      <CertificatesComponent />
    </div>
  );
};

export default Documents;
