import { useState } from 'react'
import Input from '../../ui/Form/Input'
import OptionsIcons from './OptionsIcons'
import { 
    Container, 
    ContentInput, 
    Button, 
    ContentInputTitle,
    ListOptionsInputs,
    InputItem,
    Label,
    ContentButton
} from './styles'

import { optionsFormEditStatus } from '../../../helpers/optionsFormEditStatus'

const FormMood : React.FC = () => {
    const [dataForm, setDataForm] = useState<any[]>([{
        name: 'date',
        value: '02/06/2022'
    }])
    const data = optionsFormEditStatus
    
    if(!data.length){
        return null
    }

    const handleSubmitForm = (e: any) => {
        e.preventDefault()

        localStorage.setItem('useStatus', JSON.stringify(dataForm))
    }

    return (
        <Container>
            {data.map(({title, type, options}, id) => {
                return(
                    <ContentInput key={`${title}-${id}`}>
                        <ContentInputTitle>{title}</ContentInputTitle>
                        <ListOptionsInputs>
                            {
                                options.map(({label, name}, idx) => {
                                    return(
                                        <InputItem key={`${label}-${idx}`} className={`${name}`}>
                                            <Label className={`${dataForm.some(item => item.value === name) ? 'active' : ''}`}>
                                                <OptionsIcons type={name} />
                                                <Input type={type} value={name} name={title} setDataForm={setDataForm} dataForm={dataForm} initialValue={options[0].name} />
                                                <span>{label}</span>
                                            </Label>
                                        </InputItem>
                                    )
                                })
                            }
                        </ListOptionsInputs>
                    </ContentInput>
                )
            })}     
            <ContentButton>
                <Button onClick={(e) => handleSubmitForm(e)}>Registrar Humor</Button>
            </ContentButton>       
        </Container>
    )
}

export default FormMood