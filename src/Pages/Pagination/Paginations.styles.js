import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex;
    width: 90%;
    justify-content: center;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom:
`

const StyledUl = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;
`

const StyledLi = styled.li`
    min-width: 30px;
    background: ${props => props.active ? "dodgerblue" : "#fff"};
    border: 1px solid #ddd;
    margin: 0px 5px 0px;
    color: ${props => props.disabled ? 'gray' : 'inherit'};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    opacity: ${props => props.disabled ? 0.7 : 1};
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};

`

const StyledButton = styled.button`
    width: 100%;
    cursor: pointer;
    padding: 10px;
    background: transparent;
    color: ${props => props.active ? "#fff" : "inherit"};
    border: none;
`

export { StyledNav, StyledUl, StyledLi, StyledButton}