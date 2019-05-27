import React from 'react';
import PropTypes from 'prop-types';

import { Form, Field } from 'react-final-form';
import Button from '../UI/Button';

import { required } from '../../helpers/validation';

const LoginForm = ({ login: dispatchLogin, loginMessage }) => {
  const onSubmit = ({ username, password }, form) => {
      dispatchLogin(username, password)
        .then(() => form.reset())
        .catch(error => console.error(error));
    },
    initialValues = {
      username: '',
      password: '',
    };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, form, values, submitting, pristine }) => (
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form_row">
            <h2>Вход:</h2>
          </div>
          <div className="login-form_row">
            <Field name="username" component="input" validate={required}>
              {({ input }) => (
                <label>
                  Логин:
                  <input
                    {...input}
                    id="login"
                    tabIndex="1"
                    placeholder="логин"
                  />
                </label>
              )}
            </Field>
          </div>
          <div className="login-form_row">
            <Field name="password" component="input" validate={required}>
              {({ input, meta }) => (
                <label>
                  Пароль:
                  <input
                    {...input}
                    id="password"
                    type="password"
                    placeholder="пароль"
                    tabIndex="2"
                  />
                </label>
              )}
            </Field>
          </div>

          {loginMessage ? (
            <div className="login-form_row">
              <span className="error">{loginMessage}</span>
            </div>
          ) : null}

          <div className="login-form_row">
            <Button
              className="login"
              type="submit"
              disabled={submitting || pristine}
              tabIndex="3">
              Войти
            </Button>
          </div>
        </form>
      )}
    />
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  loginMessage: PropTypes.string.isRequired,
};

export default LoginForm;
