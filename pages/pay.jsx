import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import Logo from "../public/Logo.svg";

const appUrl = "https://ecommerceappserver.herokuapp.com";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = useCallback((token) => setStripeToken(token), []);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        axios.post(`${appUrl}/api/checkout/payment`, {
          tokenId: stripeToken.id,
          amount: 2000,
        });
      } catch (error) {
        console.log(err);
      }
    };

    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div className="flex justify-center items-center h-screen ">
      <StripeCheckout
        name="Trevor Army"
        image={Logo}
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={process.env.NEXT_PUBLIC_STRIPE_KEY}
      >
        <button className="bg-black py-3 px-5 rounded text-white ">
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
