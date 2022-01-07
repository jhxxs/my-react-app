import { StrictMode } from "react"
import { render } from "react-dom"
import "./index.css"
import App from "./App"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Expenses from "./routes/expenses"
import Invoices from "./routes/invoices"
import Invoice from "./routes/invoice"

render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="expenses" element={<Expenses />} />
					<Route path="invoices" element={<Invoices />}>
						<Route
							index
							element={
								<main
									style={{
										padding: "1rem"
									}}
								>
									<p>Select an invoice</p>
								</main>
							}
						/>
						<Route path=":invoiceId" element={<Invoice />} />
					</Route>
					<Route
						path="*"
						element={
							<main
								style={{
									padding: "1rem"
								}}
							>
								<p>😢There's nothing here!</p>
							</main>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
	document.getElementById("root")
)
