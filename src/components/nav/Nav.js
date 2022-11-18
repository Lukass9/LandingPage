import styled from "styled-components"
const Navigation = styled.nav`
    position: sticky;
    background-color: #fff;
    top: 0;
    width: 100vw;
    box-shadow: 0px 5px 5px 0px rgba(104, 104, 104, .5);
    z-index: 10;
`
const List = styled.ul`
    margin: 0;
    display: flex;
    justify-content: center;
`
const ListItem = styled.li` 
    color: #686868;
    list-style-type: none;
    padding: 20px;
`

const Nav = () =>{
    return(
        <Navigation>
            <List>
                <ListItem>Korzyści</ListItem>
                <ListItem>O nas</ListItem>
                <ListItem>Kontakt</ListItem>
            </List>
        </Navigation>
    )
}

export default Nav