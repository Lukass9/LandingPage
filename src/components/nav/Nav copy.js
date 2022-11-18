import styled from "styled-components"

export const Navigation = styled.nav`
    position: sticky;
    background-color: #fff;
    top: 0;
    width: 100vw;
    box-shadow: 0px 5px 5px 0px rgba(104, 104, 104, .5);
    z-index: 10;
`
export const List = styled.ul`
    margin: 0;
    display: flex;
    justify-content: center;

    @media (min-width: 768px) {
        justify-content:flex-end;
        margin-right: 5%;
    }
`
export const ListItem = styled.li` 
    color: #686868;
    list-style-type: none;
    padding: 20px;
    cursor: pointer;
`