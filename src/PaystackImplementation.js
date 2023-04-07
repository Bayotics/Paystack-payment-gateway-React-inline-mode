import { useState } from "react"
import PaystackPop from "@paystack/inline-js"
const PaystackImplementation = () => {

    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const payWithPaystack = (event) => {
        event.preventDefault()
        console.log("Working Fine!!!!!!!!!!!!!!!!!")
        const paystack = new PaystackPop();
        paystack.newTransaction ({
            key: "pk_test_8d9e427702c5b457180503dd7a71fc3c41e276de",
            amount: amount * 100,
            email,
            firstName,
            lastName
        })
    }

    return(
        <div>
            <div>This is the PaystackImplementation Component</div>
            <form id="paymentForm" onSubmit={payWithPaystack}>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" value={email} onChange = {(e) => setEmail(e.target.value)} id="email-address" required />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={amount} onChange = {(e) => setAmount(e.target.value)} id="email-address" required />
                </div>
                <div className="form-group">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" value={firstName} onChange = {(e) => setFirstName(e.target.value)} id="email-address" required />
                </div>
                <div className="form-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" value={lastName} onChange = {(e) => setLastName(e.target.value)} id="email-address" required />
                </div>
                <div className="form-submit">
                    <button type="submit"> Pay </button>
                </div>
            </form>
        </div>
        
    )
}

export default PaystackImplementation