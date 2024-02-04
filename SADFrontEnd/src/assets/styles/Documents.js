import styled from "styled-components";

const Wrapper = styled.section`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  display: grid; 
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  padding: 3rem 2rem 4rem;
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem; /* Adjust the gap between buttons as needed */
    margin:1rem;
  }
  
/* Tab button */
button {
  padding: 0.5rem 0.5rem;
  font-size: 16px;
  border-radius:10%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 1rem 1rem;
}

/* Active tab button */
button.active {
  background-color: var(--primary-800);
  color: white;
}

`;

export default Wrapper;
