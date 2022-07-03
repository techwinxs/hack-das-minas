import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { BannerIntimus } from "../../components/BannerIntimus"
import { PrimaryButton } from "../../components/Button"
import { Card } from "../../components/Cards"
import PersonSvg from "../../components/Sections/Avatar/Person/PersonSvg"
import { ReactComponent as Task } from "../../assets/dashboard/tasks.svg"
import { ReactComponent as Star } from "../../assets/dashboard/Star.svg"
import { ReactComponent as Lapis } from "../../assets/dashboard/lapis.svg"
import { Modal } from "../../components/Modal"
import { useModal } from "../../hooks/useModal"
import { useNavigate } from "react-router-dom"

type PropFlex = {
    mobile?: boolean
}

const Title = styled.h5<PropFlex>`
    font-size:${({ mobile }) => (mobile ? "1rem" : "2rem")};
    margin-bottom:${({ mobile }) => (mobile ? "10px" : "32px")};
    `
const Subtitle = styled.h6`
    color: ${props => props.theme.colors.primaryPinkMedium};
    `
const DivFlex = styled.div`
    display: flex;
    flex-direction: column ;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div<PropFlex>`
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    justify-content: ${({ mobile }) => (mobile ? "space-around" : "center")};
`
const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 20px;
`
const Link = styled.a`
    color: ${props => props.theme.colors.primaryPinkMedium};
    text-decoration: underline;
    margin-left: 10px ;
    cursor: pointer;
`
const Background = styled.img<PropFlex>`
    width:40vw;
    max-width: 300px;
    position: relative;
    z-index: -100;
    bottom: ${({ mobile }) => (mobile ? "91%" : "88%")};
    left:  25px;
`
const DivWrap = styled.div<PropFlex>`
    height: 52%;
    width: ${({ mobile }) => (mobile ? "100%" : "114%")};
`
const DivRelative = styled.div<PropFlex>`
    position: relative;
    left: ${({ mobile }) => (mobile ? "76%" : "88%")};
    bottom: ${({ mobile }) => (mobile ? "80%" : "10%")};
`
const Small = styled.small`
    color: ${props => props.theme.colors.primaryPinkDarkest};
`
export default function DashInicial(props: any) {
    const [isNarrowScreen, setIsNarrowScreen] = useState(false);
    const navigate = useNavigate();
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

    function handleClick() {
        navigate('/avatar')
    }
    const { isShown, toggle } = useModal();

    const content = <React.Fragment><DivFlex>
        <div>
            <DivRow><Star /><p>Preencha o seu calendário</p></DivRow>
            <DivRow><Star /><p>Compartilhe com amigos</p></DivRow>
            <DivRow><Star /><p>Alterar um item do seu avatar.</p></DivRow></div>
        <Small>Após concluir as tarefas você ganhará</Small>
        <h2 style={{ color: "#F62459" }}>10 pontos</h2>
    </DivFlex></React.Fragment>;
    const header = "Atividades da Semana"
    if (isNarrowScreen) {
        var size = "150"
        var mobile = true;
    } else {
        var size = "300"
        var mobile = false;
    }
    return (
        <>
            <Wrapper mobile={mobile}>
                <Modal isShown={isShown} hide={toggle} modalContent={content} headerText={header} />
                <DivFlex>
                    <Title mobile={mobile}>Olá, <b>Ana Carolina</b></Title>
                    <DivWrap mobile={mobile}>
                        <Task style={{ position: "relative", bottom: "58%", left: "18%", cursor: "pointer" }} onClick={toggle} />
                        <PersonSvg width={size} height={size} />
                        <DivRelative>
                            <Lapis onClick={handleClick} style={{ cursor: "pointer" }} /></DivRelative>
                        <Background mobile={mobile} src={require("../../assets/dashboard/elipse.PNG")} alt="" />
                    </DivWrap>
                    <DivRow><Subtitle>Você possui</Subtitle><Link href="/pontos">70 pontos</Link></DivRow>
                </DivFlex>
                <DivFlex>
                    <img src={require("../../assets/dashboard/calendar_big.PNG")} style={{ width: "50vw", maxWidth: "400px" }} alt="" />
                    <PrimaryButton width="80%">Editar Ciclo</PrimaryButton>
                </DivFlex>
            </Wrapper>
            <BannerIntimus />
            <Card conteudo titulo="conteúdo" content="uma variedade de conteúdos sobre autoconhecimento feminino" descricao="meus assuntos de interesse" />
            <Card shopping titulo="shopping" content="em nosso shopping você encontra produtos especiais. além disso, você também pode criar seus kits personalizados" descricao="visite agora!" />
            <Card chama titulo="chama a Kira" content="dúvidas sobre saúde íntima? chama a Kira! aqui você encontra dúvidas já respondidas por ginecologistas" descricao="conheça mais" link="/chamakira" />
        </>
    )
}