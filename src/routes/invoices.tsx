import { NavLink, Outlet, useLocation, useSearchParams } from "react-router-dom"
import { getInvoices } from "../data"
export default function Invoices() {
	let invoices = getInvoices()
	let [searchParams, setSearchParams] = useSearchParams()

	let location = useLocation()

	return (
		<>
			<p>{JSON.stringify(location)}</p>
			<div
				style={{
					display: "flex"
				}}
			>
				<nav
					style={{
						borderRight: "solid 1px",
						padding: "1rem"
					}}
				>
					<input
						value={searchParams.get("filter") || ""}
						onChange={(e) => {
							let filter = e.target.value

							setSearchParams(filter ? { filter } : {})
						}}
					/>
					{invoices
						.filter((v) => {
							let filter = searchParams.get("filter")
							if (!filter) return true

							let name = v.name.toLocaleLowerCase()
							return name.startsWith(filter.toLowerCase())
						})
						.map((v) => (
							<NavLink
								key={v.name}
								style={({ isActive }) => {
									return {
										display: "block",
										margin: "1rem 0",
										color: isActive ? "cyan" : "#fff"
									}
								}}
								to={`/invoices/${v.number}` + location.search}
							>
								{v.name}
							</NavLink>
						))}
				</nav>
				<Outlet />
			</div>
		</>
	)
}
