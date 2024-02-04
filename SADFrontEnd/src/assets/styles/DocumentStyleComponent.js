import styled from "styled-components";

const Wrapper = styled.section`

.container-window{
  background: var(--background-color);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 3rem 2rem 4rem;
}
.text-here{
  margin: 1rem;
  justify-content: center;
  allign-item: center;
  color:--text-color;
}

#dropArea {
  border: 2px dashed #d16aff;
  padding: 5rem;
  cursor: pointer;
  text-align: center;
}

#cvInput {
  display: none;
}

label {
  display: block;
  margin: 10px 0;
  color: --text-color;
  font-size: 16px;
  cursor: pointer;
}

.upload{
  color: --text-color;
  cursor: pointer;
  margin-top: 1rem;
}

table {
  width: 100%;
  margin-top: 3rem;
}

th, td {
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: left;
}

th {
  background-color: var(--primary-800);
  color: --text-color;
}

a {
  text-decoration: none;
}

a:hover {
  color: #2980b9;
}

button.view-btn {
  background-color: transparent;

}

`;
export default Wrapper;