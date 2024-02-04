import styled from "styled-components";

const Wrapper = styled.section`
/* styles.css */

body {
  font-family: 'Arial', sans-serif;
  background-color: #f8f8f8;
  color: #333;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h2 {
  color: #3498db;
}

p {
  color: #555;
}

#dropArea {
  border: 2px dashed #3498db;
  padding: 20px;
  cursor: pointer;
  text-align: center;
}

#cvInput {
  display: none;
}

label {
  display: block;
  margin: 10px 0;
  color: #3498db;
  font-size: 16px;
  cursor: pointer;
}

button {
  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

th {
  background-color: #3498db;
  color: #fff;
}

a {
  text-decoration: none;
  color: #3498db;
}

a:hover {
  color: #2980b9;
}

button.view-btn {
  background-color: #27ae60;
}

button.view-btn:hover {
  background-color: #219a52;
}

`;
export default Wrapper;