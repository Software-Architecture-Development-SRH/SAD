import styled from 'styled-components';

const Wrapper = styled.article`
padding:2rem;
background :var(--background-secondary-color);
border-bottom:5px solid ${(props) => props.color};
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.count {
    display:block;
    font-weight:700;
    font-size: 50px;
    color: ${(props) => props.color};
    line-height:2;
}
.title {
    margin:0;
    text-transform:capitalize;
    letter-spacing:var(--letter-spacing);
    text-align:left;
    margin-top:0.5rem;
    font-size:1.25rem;
}
.icon {
    width:80px;
    height:70px;
    background: ${(props) => props.bcg};
    border-radius:var(--border-radius);
    display:flex;
    align-item:center;
    justify-content:center;
    svg {
        font-size:3rem;
        margin-top:0.5rem;
        ${(props) => props.color};
    }
}
`;

export default Wrapper;