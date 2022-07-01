import { Container, ListCards, ListCardsItem, ListCardsButton } from "./styles"
import { ShirtOne } from "../Options"

const CustomAvatar: React.FC = () => {
    return (
        <Container>
            <ListCards>
                <ListCardsItem>
                    <ListCardsButton>
                        <ShirtOne />
                    </ListCardsButton>
                </ListCardsItem>
                <ListCardsItem>
                    <ListCardsButton>
                        <ShirtOne color="#000" />
                    </ListCardsButton>
                </ListCardsItem>
                <ListCardsItem>
                    <ListCardsButton>
                        <ShirtOne color="red" />
                    </ListCardsButton>
                </ListCardsItem>
                <ListCardsItem>
                    <ListCardsButton>
                        <ShirtOne color="yellow" />
                    </ListCardsButton>
                </ListCardsItem>
            </ListCards>
        </Container>
    )
}

export default CustomAvatar