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

  const required = value =>
    value ? undefined : 'Поле обязательно для заполнения';
  const mustBeNumber = value =>
    isNaN(value) ? 'Значение должно быть числом' : undefined;
  const minValue = min => value =>
    isNaN(value) || value >= min ? undefined : `Должно быть больше ${min}`;
  const composeValidators = (...validators) => value =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form className="operation-form" onSubmit={handleSubmit}>
          <div className="operation-form_row" />

          <div className="operation-form_row">
            <Field id="type" name="type" component="select" validate={required}>
              {({ input }) => (
                <label htmlFor="type">
                  Тип:
                  <select {...input} id="type">
                    {options.map((option, key) => (
                      <option key={key} value={option}>
                        {operationName(option)}
                      </option>
                    ))}
                  </select>
                </label>
              )}
            </Field>
            &nbsp;
            <Field
              name="amount"
              validate={composeValidators(required, mustBeNumber, minValue(0))}>
              {({ input, meta }) => (
                <label htmlFor="amount">
                  Сумма:
                  <input
                    {...input}
                    id="amount"
                    type="text"
                    style={{ width: 35 }}
                    placeholder="10"
                  />
                  ₽
                  {meta.error && meta.touched && (
                    <span className="error">{meta.error}</span>
                  )}
                </label>
              )}
            </Field>
          </div>

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
