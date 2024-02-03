import React, { useState, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import Wrapper from '../assets/styles/Documents';
import FileTable from '../components/ViewDocument';
import { FileContext } from '../components';

const Documents = (props) => {
  const { fileList, addFile, removeFile } = useContext(FileContext);
  const [cvFiles, setCvFiles] = useState([]);
  const [certificateFiles, setCertificateFiles] = useState([]);
  const [coverLetterFiles, setCoverLetterFiles] = useState([]);
  const [activeZone, setActiveZone] = useState(null);

  const handleDrop = (files, category) => {
    const newFiles = files.map(file => ({ name: file.name, size: file.size }));
    switch (category) {
      case 'cv':
        setCvFiles(prevFiles => [...prevFiles, ...newFiles]);
        break;
      case 'certificates':
        setCertificateFiles(prevFiles => [...prevFiles, ...newFiles]);
        break;
      case 'coverLetters':
        setCoverLetterFiles(prevFiles => [...prevFiles, ...newFiles]);
        break;
      default:
        break;
    }
  };

  const handleClose = () => {
    setActiveZone(null);
  };

  const renderFiles = (files) => (
    <div>
      <h3>File List</h3>
      <table>
        <thead>
          <tr>
            <th>File Name</th>
            <th>File Size</th>
            {/* Add more columns if needed */}
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>{file.name}</td>
              <td>{file.size} bytes</td>
              {/* Add more cells based on your file object */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const DropZone = ({ title, category, files }) => {
    const { getRootProps, getInputProps } = useDropzone({
      onDrop: (acceptedFiles) => handleDrop(acceptedFiles, category),
      accept: ['image/jpeg', 'image/png'],
    });

    return (
      <div>
        <div className={`dropzone ${activeZone === category ? 'active' : ''}`} style={dropzoneStyles} {...getRootProps()}>
          <button className="close-btn" onClick={handleClose}>
            <strong>X</strong>
          </button>
          <input {...getInputProps()} />
          <p>Drag & drop {title} files here, or click to select files</p>
        </div>
        {renderFiles(files)} {/* Call renderFiles with the files */}
      </div>
    );
  };

  const dropzoneStyles = {
    border: '2px dashed #e79aff',
    borderRadius: '4px',
    padding: '5rem',
    textAlign: 'center',
    cursor: 'pointer',
    margin: '2rem',
  };

  return (
    <Wrapper>
      <h2>Documents</h2>
      <div className='buttonContainer'>
        <button className="btn cv-btn" onClick={() => setActiveZone('cv')}>CV/Resumes</button>
        <button className="btn certificate-btn" onClick={() => setActiveZone('certificates')}>Certificates</button>
        <button className="btn letter-btn" onClick={() => setActiveZone('coverLetters')}>Cover Letters</button>
      </div>
      {activeZone === 'cv' && <DropZone title="CV/Resumes" category="cv" files={cvFiles} />}
      {activeZone === 'certificates' && <DropZone title="Certificates" category="certificates" files={certificateFiles} />}
      {activeZone === 'coverLetters' && <DropZone title="Cover Letters" category="coverLetters" files={coverLetterFiles} />}
    </Wrapper>
  );
};

export default Documents;
