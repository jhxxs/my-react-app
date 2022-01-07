/*
 * @LastEditTime: 2021-10-15 17:57:38
 * @Date: 2021-10-15 17:13:03
 * @Author: Kyle
 * @LastEditors: Kyle
 */
import styled from "styled-components"
interface ButtonProps {
	/** 主按钮？ */
	primary?: boolean
}

const Button = styled.button<ButtonProps>`
	background: ${(props) => (props.primary ? "palevioletred" : "white")};
	color: ${(props) => (props.primary ? "white" : "palevioletred")};
	font-size: 16px;
	margin: 0.2em;
	padding: 0.25em 0.6em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`

export const TomatoButton = styled(Button)`
	color: tomato;
	border-color: tomato;
`

export default Button
