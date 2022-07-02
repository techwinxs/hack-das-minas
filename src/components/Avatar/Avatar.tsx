import { useState, useEffect } from "react"

import CustomAvatar from "./CustomAvatar/CustomAvatar"
import Person from "./Person/Person"
import Menu from "./Menu/Menu"

import { useGlobalContext } from './../../hooks/globalContext'
import { initialCharacteres } from "../../helpers/customCharacteristicsInitial"
import { getDataCustomCharacteristics } from '../../helpers/getDataCustomCharacteristics'

import { Container, ContainerAvatar } from "./styles"

const Avatar : React.FC = () => {
    const [tabActive, setTabActive] = useState('skin')
    const { setCustomCharateristic } = useGlobalContext()

    useEffect(() => {
        if(!JSON.parse(getDataCustomCharacteristics()).length){
            setCustomCharateristic(initialCharacteres)
            localStorage.setItem('customCharacteristics', JSON.stringify(initialCharacteres))   
        }else {
            setCustomCharateristic(JSON.parse(getDataCustomCharacteristics()))
        }
    }, [])
    
    return (
       <Container>
            <ContainerAvatar>
                <Person />
                <Menu setTabActive={setTabActive} active={tabActive}/> 
            </ContainerAvatar>
            <CustomAvatar type={tabActive} />
       </Container>
    )
}

export default Avatar