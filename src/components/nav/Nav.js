import { Link } from 'react-scroll'
import { List, ListItem, Navigation } from './Nav copy'

const Nav = () =>{
    return(
        <Navigation>
            <List>
                <ListItem as={Link} offset={-50} activeClass="active" smooth spy to="benefits">Korzyści</ListItem>
                <ListItem as={Link} offset={-50} activeClass="active" smooth spy to="about">O nas</ListItem>
                <ListItem as={Link} offset={-50} activeClass="active" smooth spy to="contact">Kontakt</ListItem>
            </List>
        </Navigation>
    )
}

export default Nav