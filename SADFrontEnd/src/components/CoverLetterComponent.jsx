import React, { useState, useEffect } from 'react';
import { useDashboardContext } from '../Pages/DashboardLayout';
import customFetch3 from '../Utils/customFetch3';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CoverLetterComponent = () => {
  const { user } = useDashboardContext();
  const [coverLetterFile, setCoverLetterFile] = useState(null);
  const [coverLetterResources, setCoverLetterResources] = useState([]);

  useEffect(() => {
    const fetchCoverLetterResources = async () => {
      try {
        const response = await customFetch3.get('/getCOVERLETTER', { params: { email: user.email } });
        setCoverLetterResources(response.data.resources || []);
      } catch (error) {
        console.error('Error fetching Cover Letter resources:', error);
        toast.error(error?.response?.data?.error || 'Error fetching Cover Letter resources');
      }
    };

    fetchCoverLetterResources();
  }, [user.email]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Check if the file is an image
    if (file && file.type.startsWith('image/')) {
      setCoverLetterFile(file);
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

      if (!coverLetterFile) {
        toast.error('Choose an image first.');
        return;
      }

      const formData = new FormData();
      formData.append('email', user.email);
      formData.append('file', coverLetterFile);

      await customFetch3.post('/pushCOVERLETTER', formData);

      // Refetch resources after upload
      const response = await customFetch3.get('/getCOVERLETTER', { params: { email: user.email } });
      setCoverLetterResources(response.data.resources || []);

      toast.success('Cover Letter uploaded successfully!');
    } catch (error) {
      console.error('Error uploading Cover Letter:', error);
      toast.error(error?.response?.data?.error || 'Error uploading Cover Letter');
    }
  };

  return (
    <div>
      <h2>Cover Letters</h2>
      <p>Upload image cover letters only.</p>
      <input type="file" id="coverLetterInput" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Cover Letter</button>
      <table>
        <thead>
          <tr>
            <th>Cover Letter Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {coverLetterResources.map((resource, index) => (
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

export default CoverLetterComponent;
