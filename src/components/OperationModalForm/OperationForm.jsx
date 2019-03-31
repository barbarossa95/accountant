import React from 'react';

import { Form, Field } from 'react-final-form';

import * as c from '../../helpers/constants';
import { operationName } from '../../helpers/functions';

const OperationForm = ({ onSubmit }) => {
  const options = [c.OPERATION_CREDIT, c.OPERATION_DEBIT];

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="type">Type of operation</label>
          <Field name="type" component="select">
            <option />
            {options.map((option, key) => (
              <option key={key} value={option}>
                {operationName(option)}
              </option>
            ))}
          </Field>

          <label htmlFor="amount">amount</label>
          <Field
            name="amount"
            component="input"
            type="text"
            placeholer="amount"
          />

          <label htmlFor="description">description</label>
          <Field
            name="description"
            component="textarea"
            placeholer="description"
          />

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
            <button type="button" onClick={form.reset}>
              close
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default OperationForm;
