import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 4rem;
  text-align: center;
  button {
    border-color: black;
    padding: 0.5rem 0.9rem;
    border-radius: 20px;
    text-transform: capitalize;
    color: var(--primary-500);
    font-size: 1.25rem;
    cursor: pointer;
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
`;

export default Wrapper;