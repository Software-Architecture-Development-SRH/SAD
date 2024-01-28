import styled from "styled-components";

const Wrapper = styled.section`
  .nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    
    background-color: #b148d2;
    
  }
  .nav-cont {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    
  }
  .logo-cont{

    flex-grow:1;
    margin: 0;
  }
  .logo{
    width: 150px;
    display: flex;
    
  }
  
  

  .box {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    
  }
  .page{
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  

  h1 {
    font-weight: 900;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
    font-size: 2.3rem; 
  }
  p {
    line-height: 3;
    font-size: 1.2rem;
    font-style: italic;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 1.0rem 1rem;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
    .logo{
    width: 180px;
    display: flex;
    margin: 1.75rem 17.8rem; 
  }
  }
`;
export default Wrapper;
