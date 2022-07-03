import { useGlobalContext } from '../../../../hooks/globalContext'
import Face from "./Face"
import Hair from "./Hair"
import Shirt from "./Shirt"
import Skin from "./Skin"

interface IProps {
    width: string
    height: string
}

const PersonSvg: React.FC<IProps> = ({ width, height }: IProps) => {
    const { customCharateristic } = useGlobalContext()
    const customPerson = customCharateristic[0]

    if (!customCharateristic.length) {
        return null
    }

    return (
        <svg width={width} height={height} viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_0_1711" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="280" height="280">
                <rect width="280" height="280" rx="12" fill="white" />
                <rect width="280" height="280" rx="12" stroke="white" />
            </mask>
            <g mask="url(#mask0_0_1711)">
                <Shirt color={customPerson.custom.shirt.color} />
                <Skin color={customPerson.custom.skin.color} />
                <Hair name={customPerson.custom.hair.name} />
                <Face name={customPerson.custom.face.name} />

            </g>
        </svg>
    )
}

export default PersonSvg