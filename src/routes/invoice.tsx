import { useNavigate, useParams } from "react-router-dom"
import { deletInvoice, getInvoice } from "../data"

export default function Invoice() {
	const params = useParams<{
		invoiceId: string
	}>()

	const navigate = useNavigate()
	const invoice = getInvoice(params.invoiceId)

	return (
		<main
			style={{
				padding: "1rem"
			}}
		>
			<h2>Total Due: {invoice?.amount}</h2>
			<p>
				{invoice?.name}: {invoice?.number}
			</p>
			<p>Due Date: {invoice?.due}</p>
			<p>
				<button
					onClick={() => {
						deletInvoice(invoice?.number)
						navigate("/invoices")
					}}
				>
					❌
				</button>
			</p>
		</main>
	)
}
