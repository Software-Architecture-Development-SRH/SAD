import React, { useState, useEffect } from 'react';
import { useDashboardContext } from '../Pages/DashboardLayout';
import customFetch3 from '../Utils/customFetch3';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CvComponent = () => {
  const { user } = useDashboardContext();
  const [cvFile, setCvFile] = useState(null);
  const [cvResources, setCvResources] = useState([]);

  useEffect(() => {
    const fetchCvResources = async () => {
      try {
        const response = await customFetch3.get('/getCV', { params: { email: user.email } });
        setCvResources(response.data.resources || []);
      } catch (error) {
        console.error('Error fetching CV resources:', error);
        toast.error(error?.response?.data?.error || 'Error fetching CV resources');
      }
    };

    fetchCvResources();
  }, [user.email]);

  const handleFileChange = (event) => {
    handleFiles(event.target.files);
  };

  const handleFiles = (files) => {
    const file = files[0];
    // Check if the file is an image
    if (file && file.type.startsWith('image/')) {
      setCvFile(file);
    } else {
      toast.error('Please upload a valid image file.');
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFiles(files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUpload = async () => {
    try {
      // Check if the user is a demo user
      if (user.email === 'testuser@gmail.com') {
        toast.error('Demo user cannot upload files. Please sign in.');
        return;
      }

      if (!cvFile) {
        toast.error('Choose an image first.');
        return;
      }

      // Additional safety measures
      const maxSizeInBytes = 10 * 1024 * 1024; // 10MB
      if (cvFile.size > maxSizeInBytes) {
        toast.error('File size exceeds the maximum limit (10MB).');
        return;
      }

      const formData = new FormData();
      formData.append('email', user.email);
      formData.append('file', cvFile);

      // Ensure only images are uploaded
      if (!cvFile.type.startsWith('image/')) {
        toast.error('Please upload a valid image file.');
        return;
      }

      await customFetch3.post('/pushCV', formData);

      // Refetch resources after upload
      const response = await customFetch3.get('/getCV', { params: { email: user.email } });
      setCvResources(response.data.resources || []);

      toast.success('CV uploaded successfully!');
    } catch (error) {
      console.error('Error uploading CV:', error);
      toast.error(error?.response?.data?.error || 'Error uploading CV');
    }
  };

  return (
    <div>
      <h2>CVs</h2>
      <p>Upload image CVs only. You can also drag and drop files here.</p>
      <div
        id="dropArea"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{ border: '2px dashed #ccc', padding: '20px', cursor: 'pointer' }}
      >
        <input type="file" id="cvInput" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
        <label htmlFor="cvInput">Click to select or drag and drop files here.</label>
      </div>
      <button onClick={handleUpload}>Upload CV</button>
      <table>
        <thead>
          <tr>
            <th>CV Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cvResources.map((resource, index) => (
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

export default CvComponent;
