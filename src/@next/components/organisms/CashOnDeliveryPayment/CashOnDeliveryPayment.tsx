import { Formik } from "formik";
import React from "react";

import { Radio } from "@components/atoms";

import * as S from "./styles";
import { IProps } from "./types";

export const statuses_COD = [
  { token: "agree", label: "I agree to pay the amount" },
];

/**
 * Dummy payment gateway.
 */
const CashOnDeliveryPayment: React.FC<IProps> = ({
  processPayment,
  formRef,
  formId,
  initialStatus,
}: IProps) => {
  return (
    <Formik
      initialValues={{ status: initialStatus || statuses_COD[0].token }}
      onSubmit={(values, { setSubmitting }) => {
        processPayment(values.status);
        setSubmitting(false);
      }}
    >
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        isSubmitting,
        isValid,
      }) => (
        <S.Form
          id={formId}
          ref={formRef}
          onSubmit={handleSubmit}
          data-test="CashOnDeliveryPaymentForm"
        >
          {statuses_COD.map(({ token, label }) => {
            return (
              <S.Status key={token}>
                <Radio
                  key={token}
                  type="radio"
                  name="status"
                  value={token}
                  checked={values.status === token}
                  onChange={handleChange}
                >
                  <span>{label}</span>
                </Radio>
              </S.Status>
            );
          })}
        </S.Form>
      )}
    </Formik>
  );
};

export { CashOnDeliveryPayment };
