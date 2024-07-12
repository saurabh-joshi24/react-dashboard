import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex;
    width: 90%;
    justify-content: center;
    // max-height: 60px;
    align-item: center;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom:
`

const StyledUl = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;
    padding-inline-start: 0px;
    margin-left: 20px;
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

const StyledInput = styled.input `
    width: 70px;
    padding: 10px;
`

const StyledLabel = styled.label`
    font-weight: 400;
    margin-right: 5px;
`

const StyledDiv = styled.div `
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 1em 0 1em;
`

export { StyledNav, StyledUl, StyledLi, StyledButton, StyledInput, StyledLabel, StyledDiv}