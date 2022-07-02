
import Face from "./Face"
import Hair from "./Hair"
import Shirt from "./Shirt"
import Skin from "./Skin"
import { useGlobalContext } from '../../../hooks/globalContext'
import { Container } from "./styles"

const Person : React.FC = () => {
    const { customCharateristic } = useGlobalContext()
    const [{ custom : {hair, face, shirt, skin}}] = customCharateristic

    return (
        <Container>
            <svg width="240" height="240" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_0_1711" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="280" height="280">
                    <rect width="280" height="280" rx="12" fill="white"/>
                    <rect width="280" height="280" rx="12" stroke="white"/>
                </mask>
                <g mask="url(#mask0_0_1711)">
                    <Shirt color={shirt.color} />
                    <Skin color={skin.color} />
                    <Face name={face.name} />
                    <Hair name={hair.name} />
                </g>
            </svg>
        </Container>
    )
}

export default Person