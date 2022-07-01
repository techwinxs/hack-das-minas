import Menu from "../Menu/Menu"
import Person from "../Person/Person"

import { Container } from "./styles"

const CardAvatar : React.FC = () => {
    return (
        <Container>
            <Person />
            <Menu />
        </Container>
    )
}

export default CardAvatar