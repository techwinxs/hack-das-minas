import { Container, ListCards, ListCardsItem, ListCardsButton } from "./styles"
import OptionsCharacteristic from "../Options"
import { characteristics } from '../../../../helpers/characteristics'
import { useGlobalContext } from '../../../../hooks/globalContext'

interface ICustomAvatar {
    type: string
}

const CustomAvatar: React.FC<ICustomAvatar> = ({ type }) => {
    const data = characteristics.filter(({type: typeOfCharacteristic}) => typeOfCharacteristic === type)
    const typeCharacteristic = data[0]?.type
    const { updateCustomCharateristic } = useGlobalContext()

    if (!data.length) {
        return null
    }

    function saveCustom(specification: any){
        updateCustomCharateristic(typeCharacteristic, specification)
    }


    return (
        <Container>
            <ListCards>
                {data[0].specification?.map((spec: any, idx) => {
                    return (
                        <ListCardsItem key={idx}>
                            <ListCardsButton onClick={() => saveCustom(spec)}>
                                <OptionsCharacteristic type={typeCharacteristic} specifications={spec} />
                            </ListCardsButton>
                        </ListCardsItem>
                    )
                })}
            </ListCards>
        </Container>
    )
}

export default CustomAvatar