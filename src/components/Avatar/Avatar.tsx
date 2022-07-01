import CardAvatar from "./CardAvatar/CardAvatar"
import CustomAvatar from "./CustomAvatar/CustomAvatar"

import { Container } from "./styles"

const Avatar : React.FC = () => {
    return (
       <Container>
            <CardAvatar />
            <CustomAvatar />
       </Container>
    )
}

export default Avatar