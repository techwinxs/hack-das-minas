import { useEffect, useState } from 'react'

interface ICheckbox{
    setDataForm?: React.Dispatch<React.SetStateAction<any[]>>
    dataForm?: any[]
    name: string
}

const TextArea: React.FC<ICheckbox> = ({name, setDataForm, dataForm}) => {
    const [text, setText] = useState('');

    useEffect(() => {
        if(setDataForm && dataForm){
            const info = {
                name: name,
                value: text
            }

            if (dataForm.some((item) => item.name === name)){
                const newData = dataForm.filter((item) => item.name !== name)
                setDataForm(() => [...newData, info])
            } else {
                setDataForm(() => [...dataForm, info])
            }
        }
    }, [text])

    return <textarea value={text} onChange={({target}) => setText(target.value)} name={name}/>
}

export default TextArea