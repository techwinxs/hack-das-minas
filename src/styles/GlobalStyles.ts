import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       border: 0;
       outline: 0;
       font-family: 'Be Vietnam Pro', sans-serif;
    }

    body{
        background: #ECF1F4;
        color: white;
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }

    button{
        cursor: pointer;
        appearance: none;
        background: none;
    }

    h5{
        color: #626162;
    }
`;