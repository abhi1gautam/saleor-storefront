import { IPaymentGateway } from "@types";

export const paymentGateways: IPaymentGateway[] = [
  {
    config: [
      {
        field: "store_customer_card",
        value: "false",
      },
    ],
    id: "mirumee.payments.dummy",
    name: "Dummy",
  },
  {
    config: [
      {
        field: "store_customer_card",
        value: "false",
      },
    ],
    id: "abhi1gautam.payments.cash_on_delivery",
    name: "CashOnDelivery",
  },
  {
    config: [
      {
        field: "api_key",
        value: "pk_test_6pRNASCoBOKtIshFeQd4XMUh",
      },
      {
        field: "store_customer_card",
        value: "false",
      },
    ],
    id: "mirumee.payments.stripe",
    name: "Stripe",
  },
];

export const PROPS = {
  paymentGateways,
};
