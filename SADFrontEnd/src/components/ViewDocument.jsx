import React, { useContext } from 'react';
import { FileContext } from '../components';

const FileTable = ({ files, onDelete }) => {
  const formatFileSize = (sizeInBytes) => {
    // Implement logic to format sizeInBytes if needed
    return sizeInBytes;
  };

  const handleViewClick = (file) => {
    // Implement logic to handle viewing the file (e.g., open a modal or navigate to a new page)
    console.log(`Viewing file: ${file.name}`);
  };

  const handleDeleteClick = (file) => {
    // Implement logic to handle deleting the file
    onDelete(file);
  };

  return (
    <div>
      <h3>File List</h3>
      <table>
        <thead>
          <tr>
            <th>File Name</th>
            <th>File Size</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>{file.name}</td>
              <td>{formatFileSize(file.size)} bytes</td>
              <td>
                <button onClick={() => handleViewClick(file)}>View</button>
                <button onClick={() => handleDeleteClick(file)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileTable;
