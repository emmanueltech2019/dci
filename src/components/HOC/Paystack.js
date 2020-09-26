import React from 'react';
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
    
    const config = {
        reference: (new Date()).getTime(),
        email: "emmanueltech2019@gmail.com",
        amount: 200000,
        publicKey: 'pk_test_132f819cd173f23d67936d3844959caba3ab348b',
    };
    
    const PaystackHookExample = () => {
        const initializePayment = usePaystackPayment(config);
        return (
            <div>
                <button onClick={() => {
                    initializePayment()
                }}>Paystack Hooks Implementation</button>
            </div>
        );
    };
    
    function App() {
        const componentProps = {
            ...config,
            text: 'Paystack Button Implementation',
            onSuccess: () => console.log("paid"),
            onClose: () => null
        };
    
      return (
        <div className="App">
            <PaystackHookExample />
            <PaystackButton {...componentProps} />
            <PaystackConsumer {...componentProps} >
                {({initializePayment}) => <button onClick={() => initializePayment()}>Paystack Consumer Implementation</button>}
            </PaystackConsumer>
        </div>
      );
    }
    
    export default App;