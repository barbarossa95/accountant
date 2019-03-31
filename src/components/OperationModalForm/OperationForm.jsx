import React from 'react';

import { Form, Field } from 'react-final-form';

import * as c from '../../helpers/constants';
import { operationName } from '../../helpers/functions';

const OperationForm = ({ onCreateOperation }) => {
  const options = [c.OPERATION_CREDIT, c.OPERATION_DEBIT];

  const onSubmit = (values, form) => {
    onCreateOperation({
      ...values,
      timestamp: new Date().getTime(),
    });
    form.reset();
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form className="operation-form" onSubmit={handleSubmit}>
          <div className="operation-form_row">
            <label htmlFor="type">Type of operation</label>
            <Field id="type" name="type" component="select">
              {options.map((option, key) => (
                <option key={key} value={option}>
                  {operationName(option)}
                </option>
              ))}
            </Field>
          </div>

          <div className="operation-form_row">
            <label htmlFor="amount">amount</label>
            <Field
              id="amount"
              name="amount"
              component="input"
              type="text"
              placeholer="amount"
            />
          </div>

          <div className="operation-form_row">
            <label htmlFor="description">description</label>
            <Field
              id="description"
              name="description"
              component="textarea"
              placeholer="description"
            />
          </div>
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
