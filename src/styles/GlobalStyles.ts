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

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }

    button{
        cursor: pointer;
    }
`;