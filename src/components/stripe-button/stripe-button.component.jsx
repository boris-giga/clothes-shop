import StripeCheckout from 'react-stripe-checkout'

const onToken = token => {
  console.log(token);
  alert('Payment Successful!')
}

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price*100
  const publishableKey = 'pk_test_51I8rjTGSKF9TkHzszuQtBwutnVh8dqIxRxNThxx6CVj5AMyCRafOJcVGDBOiTY8vjTPqY2E4cBWar6ADhfHX1qz400oRdGw0mb'
  return (
    <StripeCheckout 
      label="Pay Now"
      name="I.C.Wiener, LTD"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )

}

export default StripeCheckoutButton