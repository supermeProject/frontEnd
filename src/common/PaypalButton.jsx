import React, { useState } from "react";
import {
  FUNDING,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

const PaypalButton = () => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  //const [currency, setCurrency] = useState(options.currency);

  //   const onCurrencyChange = ({ target: { value } }) => {
  //     setCurrency(value);
  //     dispatch({
  //       type: "resetOptions",
  //       value: {
  //         ...options,
  //         currency: value,
  //       },
  //     });
  //   };

  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "8.99",
          },
        },
      ],
    });
  };

  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert(`Transaction completed by ${name}`);
    });
  };

  return (
    <div className="checkout">
      {/* {isPending ? (
        <p>LOADING...</p>
      ) : ( */}
      <>
        {/* <select value={currency} onChange={onCurrencyChange}>
          <option value="USD">💵 USD</option>
          <option value="EUR">💶 Euro</option>
        </select> */}
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => onCreateOrder(data, actions)}
          onApprove={(data, actions) => onApproveOrder(data, actions)}
          // paypal 버튼만 보이게. 신용카드버튼 x
          fundingSource={FUNDING.PAYPAL}
        />
      </>
      {/* )} */}
    </div>
  );
};

export default PaypalButton;
