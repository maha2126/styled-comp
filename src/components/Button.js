import styles from "styled-components";

export const MyButton = styles.button`

&{
    padding: 10px 20px;
    font-sixe: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: monospace;
    background: #ffc107;
    border: ${(props) => props.border}px solid #b88f15;
    outline: none;
    margin: 10px;
    border-radius: 24px 11px;
}
&:hover{
    color: red;
    background: transparent;
}
`
export const BigButton = styles(MyButton)`
    width: 200px;
    height: 100px;
`
export const TextCont = styles.p`
    &{
        color: yellow;
        font-size: 18px;
        line-height: 24px
    }
    &:hover{
        color: red;
    }
`