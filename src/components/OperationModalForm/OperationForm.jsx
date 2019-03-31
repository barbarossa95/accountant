import React from 'react';

import { Form, Field } from 'react-final-form';

import * as c from '../../helpers/constants';
import { operationName } from '../../helpers/functions';

const OperationForm = ({ onCreateOperation }) => {
  const options = [c.OPERATION_CREDIT, c.OPERATION_DEBIT];

  const initialValues = {
    type: c.OPERATION_CREDIT,
    amount: '',
    description: null,
  };

  const onSubmit = (values, form) => {
    onCreateOperation({
      type: values.type,
      amount: Number(values.amount),
      description: values.description,
      timestamp: new Date().getTime(),
    });
    form.reset();
  };

  const required = value => (value ? undefined : 'Required');
  const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined);
  const minValue = min => value =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
  const composeValidators = (...validators) => value =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form className="operation-form" onSubmit={handleSubmit}>
          <Field id="type" name="type" component="select" validate={required}>
            {({ input, meta }) => (
              <div className="operation-form_row">
                <label htmlFor="type">Тип операции</label>
                <select {...input} id="type">
                  {options.map((option, key) => (
                    <option key={key} value={option}>
                      {operationName(option)}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </Field>

          <Field
            name="amount"
            validate={composeValidators(required, mustBeNumber, minValue(0))}>
            {({ input, meta }) => (
              <div className="operation-form_row">
                <label htmlFor="amount">Сумма</label>
                <input {...input} id="amount" type="text" placeholder="Сумма" />
                {meta.error && meta.touched && (
                  <span className="error">{meta.error}</span>
                )}
              </div>
            )}
          </Field>

          <Field
            id="description"
            name="description"
            component="textarea"
            placeholer="description">
            {({ input, meta }) => (
              <div className="operation-form_row">
                <label htmlFor="description">Описание</label>
                <textarea {...input} id="description" cols="30" rows="10" />
              </div>
            )}
          </Field>

          <div className="operation-form_row">
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}>
                Reset
              </button>
            </div>
          </div>
        </form>
      )}
    />
  );
};

export default OperationForm;
