import { Container } from "./styles"
import PersonSvg from "./PersonSvg"

const Person: React.FC = () => {
    return (
        <Container>
            <PersonSvg width="240" height="240" />
        </Container>
    )
}

export default Person