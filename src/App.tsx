/*
 * @LastEditTime: 2021-10-18 15:38:08
 * @Date: 2021-10-15 17:11:18
 * @Author: Kyle
 * @LastEditors: Kyle
 */
import "normalize.css"
import { useState } from "react"
import styled from "styled-components"
import "./App.css"
import Button, { TomatoButton } from "./components/Button"

import { Link, Outlet } from "react-router-dom"

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`

const Wrapper = styled.section`
	padding: 4em;
	background: papayawhip;
`

const CustomLink: React.FC<{ className?: string }> = ({
	className,
	children
}) => <a className={className}>{children}</a>

const StyledLink = styled(Link)`
	color: palevioletred;
	font-weight: bold;
`
interface InputProps {
	inputColor?: string
}
const Input = styled.input<InputProps>`
	padding: 0.5em;
	margin: 0.5em;
	color: ${(props) => props.inputColor || "palevioletred"};
	background: papayawhip;
	border: none;
	border-radius: 5px;
`

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<header className="App-header">
				<Input defaultValue="@probablyup" type="text" />
				<Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
				<Wrapper>
					<Title>Hello, Vite + React</Title>
					<CustomLink>Unstyled, boring Link</CustomLink>
					<p>
						<StyledLink to="/invoices">Invoices</StyledLink>
					</p>
					<p>
						<StyledLink to="/expenses">Expense</StyledLink>
					</p>

					<Button
						primary
						type="button"
						onClick={() => setCount((count) => count + 1)}
					>
						count is: {count}
					</Button>
					<Button as="a" href="#">
						Normal
					</Button>
					<TomatoButton as="a" href="#">
						Tomato Button
					</TomatoButton>
				</Wrapper>
				<Outlet />
			</header>
		</div>
	)
}

export default App
