import React from 'react';
import PropTypes from 'prop-types';

import { Form, Field } from 'react-final-form';
import Button from '../UI/Button';
import Loader from '../UI/Loader';

import { required } from '../../helpers/validation';

const LoginForm = ({ login: dispatchLogin, loginMessage, loginLoading }) => {
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
    <React.Fragment>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, form, values, submitting, pristine }) => (
          <form className="login-form" onSubmit={handleSubmit}>
            {loginLoading ? <Loader className="overlay" /> : null}

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
                className="login success"
                type="submit"
                disabled={submitting || pristine}
                tabIndex="3">
                Войти
              </Button>
            </div>
          </form>
        )}
      />
    </React.Fragment>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  loginMessage: PropTypes.string.isRequired,
  loginLoading: PropTypes.bool.isRequired,
};

export default LoginForm;
