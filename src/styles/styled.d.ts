import 'styled-components' 

declare module 'styled-components' { 
    export interface DefaultTheme{		
        colors: {
            primaryPinkDarkest: string
            primaryPinkMedium: string
            secondGrayLight: string

            gradient: string
        }
    }
}