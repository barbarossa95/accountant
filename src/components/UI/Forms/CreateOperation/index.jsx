import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import moment from 'moment';

import * as c from '../../../../helpers/constants';
import { operationName } from '../../../../helpers/functions';
import {
  required,
  mustBeNumber,
  minValue,
  composeValidators,
} from '../../../../helpers/validation';

import './CreateOperation.scss';

const CreateOperation = ({ submitHandler, dismiss = null }) => {
  const options = [c.OPERATION_CREDIT, c.OPERATION_DEBIT],
    initialValues = {
      type: c.OPERATION_CREDIT,
      amount: '',
      description: null,
      isCustomDate: false,
      date: moment().format('YYYY-MM-DD'),
    },
    onSubmit = (value, form) => {
      const timestamp = value.isCustomDate
        ? moment(value.date, 'YYYY-MM-DD').valueOf()
        : moment().valueOf();

      submitHandler({
        ...value,
        amount: Number(value.amount),
        timestamp,
      });
      form.reset();
      dismiss && dismiss();
    };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, form, values, submitting, pristine }) => (
        <form className="operation-form" onSubmit={handleSubmit}>
          <div className="operation-form_row">
            <h2>Добавить:</h2>
          </div>
          <div className="operation-form_row">
            <Field name="type" component="select" validate={required}>
              {({ input }) => (
                <label>
                  Тип:
                  <select {...input} id="type" tabIndex="1">
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
              component="number"
              validate={composeValidators(required, mustBeNumber, minValue(0))}>
              {({ input, meta }) => (
                <label>
                  Сумма:
                  <input
                    {...input}
                    id="amount"
                    type="number"
                    placeholder="в рублях"
                    step="0.1"
                    min="0.1"
                    tabIndex="2"
                  />
                  {meta.error && meta.touched && (
                    <span className="error">{meta.error}</span>
                  )}
                </label>
              )}
            </Field>
          </div>
          <div className="operation-form_row">
            <Field name="isCustomDate" component="checkbox">
              {({ input }) => (
                <label>
                  Добавить задним числом:
                  <input
                    {...input}
                    id="isCustomDate"
                    type="checkbox"
                    tabIndex="3"
                  />
                </label>
              )}
            </Field>
          </div>
          <div className="operation-form_row">
            {!values.isCustomDate ? null : (
              <Field name="date" component="date">
                {({ input }) => (
                  <label>
                    Дата:
                    <input {...input} id="date" type="date" tabIndex="3" />
                  </label>
                )}
              </Field>
            )}
          </div>
          <div className="operation-form_row">
            <Field
              id="description"
              name="description"
              component="textarea"
              placeholer="description">
              {({ input }) => (
                <div className="operation-form_row">
                  <label htmlFor="description">Описание</label>
                  <textarea
                    {...input}
                    id="description"
                    cols="30"
                    rows="10"
                    tabIndex="4"
                  />
                </div>
              )}
            </Field>
          </div>

          <div className="operation-form_row">
            <div className="buttons">
              <button
                className="add"
                type="submit"
                disabled={submitting || pristine}
                tabIndex="5">
                Добавить
              </button>
              <button
                type="button"
                onClick={() => {
                  form.reset();
                  dismiss && dismiss();
                }}
                disabled={submitting}
                tabIndex="6">
                Отмена
              </button>
            </div>
          </div>
        </form>
      )}
    />
  );
};

CreateOperation.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  dismiss: PropTypes.func,
};

export default CreateOperation;
