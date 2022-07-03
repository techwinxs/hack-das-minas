export const optionsFormEditStatus = [
    {
        title: 'Humor',
        type: 'checkbox',
        options: [
            {
                label: 'Triste',
                name: 'sad'
            },
            {
                label: 'Desanimada',
                name: 'discouraged'
            },
            {
                label: 'Raiva',
                name: 'angry'
            }
        ]
    },
    {
        title: 'Sintomas',
        type: 'checkbox',
        options: [
            {
                label: 'Cólica',
                name: 'pain'
            },
            {
                label: 'Acne',
                name: 'acne'
            },
            {
                label: 'Fadiga',
                name: 'fatigue'
            },
            {
                label: 'Nausea',
                name: 'nausea'
            }
        ]
    },
    {
        title: 'Secreção vaginal',
        type: 'radio',
        options: [
            {
                label: 'Sem secreção',
                name: 'noSecretion'
            },
            {
                label: 'Viscosa',
                name: 'slimy'
            },
            {
                label: 'Pastosa',
                name: 'pasty'
            },
            {
                label: 'Clara de Ovo',
                name: 'eggWhite'
            }
        ]
    },
    {
        title: 'Sexo',
        type: 'radio',
        options: [
            {
                label: 'Fiz sexo',
                name: 'hadSex'
            },
            {
                label: 'Não fiz sexo',
                name: 'noHadSex'
            }
        ]
    },
    {
        title: 'Anotações',
        type: 'textarea',
        options: [
            {
                label: '',
                name: 'notes'
            }
        ]
    }
]