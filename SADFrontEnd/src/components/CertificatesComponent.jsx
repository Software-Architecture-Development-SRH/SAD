import React, { useState, useEffect } from 'react';
import { useDashboardContext } from '../Pages/DashboardLayout';
import customFetch3 from '../Utils/customFetch3';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CertificatesComponent = () => {
  const { user } = useDashboardContext();
  const [certificatesFile, setCertificatesFile] = useState(null);
  const [certificatesResources, setCertificatesResources] = useState([]);

  useEffect(() => {
    const fetchCertificatesResources = async () => {
      try {
        const response = await customFetch3.get('/getCT', { params: { email: user.email } });
        setCertificatesResources(response.data.resources || []);
      } catch (error) {
        console.error('Error fetching Certificates resources:', error);
        toast.error(error?.response?.data?.error || 'Error fetching Certificates resources');
      }
    };

    fetchCertificatesResources();
  }, [user.email]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Check if the file is an image
    if (file && file.type.startsWith('image/')) {
      setCertificatesFile(file);
    } else {
      toast.error('Please upload a valid image file.');
    }
  };

  const handleUpload = async () => {
    try {
      // Check if the user is a demo user
      if (user.email === 'testuser@gmail.com') {
        toast.error('Demo user cannot upload files. Please sign in.');
        return;
      }
  
      if (!certificatesFile) {
        toast.error('Choose an image first.');
        return;
      }
  
      const formData = new FormData();
      formData.append('email', user.email);
      formData.append('file', certificatesFile);
  
      await customFetch3.post('/pushCT', formData);
  
      // Refetch resources after upload
      const response = await customFetch3.get('/getCT', { params: { email: user.email } });
      setCertificatesResources(response.data.resources || []);
  
      toast.success('Certificates uploaded successfully!');
    } catch (error) {
      console.error('Error uploading Certificates:', error);
      toast.error(error?.response?.data?.error || 'Error uploading Certificates');
    }
  };
  

  return (
    <div>
      <h2>Certificates</h2>
      <p>Upload image certificates only.</p>
      <input type="file" id="certificatesInput" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Certificates</button>
      <table>
        <thead>
          <tr>
            <th>Certificate Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {certificatesResources.map((resource, index) => (
            <tr key={index}>
              <td>{resource.original_filename || resource.public_id || resource.original_filename || 'No Name'}</td>
              <td>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  <button>👁️</button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CertificatesComponent;
