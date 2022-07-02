import { UIContainer } from './styles'

interface IContainer {
    children: React.ReactNode
}

const Container: React.FC<IContainer> = ({ children }) => {
    return <UIContainer> {children} </UIContainer>
}

export default Container