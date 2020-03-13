import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_Q7D5FP7MSNI6x32BWxaKbIqz00dMuPdosV";

  const onToken = token => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      name="The G Store LLC"
      label="pay now"
      amount={priceForStripe}
      panelLabel="pay now"
      billingAddress
      shippingAddress
      allowRememberMe
      description={`Your total is $${price}`}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
