import { useEffect, useState } from "react"
import styled from "styled-components"

type PropFlex = {
    mobile?: boolean
}

const Wrapper = styled.div`
    margin: 10px auto;
`

const DivRow = styled.div <PropFlex>`
        display: flex;
        align-items: center;
        position: relative;
        top: 2vh;
        left: ${({ mobile }) => (mobile ? "23vw" : "5vh")};
    `
const Title = styled.p`
        color: black;
    `
const Content = styled.p`
        color: ${props => props.theme.colors.secondGrayLight};
    `
const Img = styled.img`
    width: 100%;
    max-width:500px ;
`
export function CardArtigos(props: any) {
    const [isNarrowScreen, setIsNarrowScreen] = useState(false);

    useEffect(() => {
        // set initial value
        const mediaWatcher = window.matchMedia("(max-width: 500px)")
        setIsNarrowScreen(mediaWatcher.matches);

        //watch for updates
        function updateIsNarrowScreen(e: any) {
            setIsNarrowScreen(e.matches);
        }
        mediaWatcher.addEventListener('change', updateIsNarrowScreen)

        // clean up after ourselves
        return function cleanup() {
            mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
        }
    }, []
    );
    if (isNarrowScreen) {
        var mobile = true;
    } else {
        var mobile = false;
    }
    return (
        <Wrapper>
            <DivRow>
                <img src={props.src_foto_gineco} alt=""></img>
                <div>
                    <Title>{props.name}</Title>
                    <Content>Ginecologista</Content>
                </div>
            </DivRow>
            <div>
                <Img src={props.src_foto_manchete} alt=""></Img>
                <small>{props.description}</small>
            </div>
            <div>
                <img src={require("../../assets/chamaakira/comentarios.PNG")} alt=""></img>
            </div>
        </Wrapper>
    )
}