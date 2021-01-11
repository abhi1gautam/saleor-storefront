import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { CashOnDeliveryPayment } from ".";

const processPayment = action("processPayment");

storiesOf("@components/organisms/CashOnDeliveryPayment", module)
  .addParameters({ component: CashOnDeliveryPayment })
  .add("default", () => (
    <CashOnDeliveryPayment processPayment={processPayment} />
  ));
