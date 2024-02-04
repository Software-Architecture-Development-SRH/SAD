import styled from "styled-components";

const Wrapper = styled.section`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  padding: 3rem 2rem 4rem;

  .buttonContainer {
    margin-top: 3rem;
    display: flex;
    flex-direction: row; /* Default: row layout */

    @media (max-width: 768px) {
      /* Switch to column layout for screens with max width 768px (tablet and below) */
      flex-direction: column;
    }
  }

  .btn {
    margin-right: 1rem;

    @media (max-width: 768px) {
      /* Adjust styling for mobile view */
      margin-right: 0; /* No right margin in mobile view */
      margin-bottom: 1rem; /* Add bottom margin for spacing in mobile view */
    }
  }

  .certificate-btn {
    margin-right: 1rem;

    @media (max-width: 768px) {
      margin-right: 0;
    }
  }

  .cv-btn {
    margin-right: 1rem;
    margin-left: 2rem;

    @media (max-width: 768px) {
      margin-right: 0;
      margin-left: 0; /* Adjust left margin for mobile view */
    }
  }
  .dropzone {
    margin: 2rem;
    position: relative;

    &.active {
      display: block;
    }

    @media (max-width: 768px) {
      padding: 2rem;
    }

    button.close-btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      font-size: 1rem;
      cursor: pointer;
    }
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;
