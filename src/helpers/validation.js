export const required = value =>
  value ? undefined : 'Поле обязательно для заполнения';
export const mustBeNumber = value =>
  isNaN(value) ? 'Значение должно быть числом' : undefined;
export const minValue = min => value =>
  isNaN(value) || value >= min ? undefined : `Должно быть больше ${min}`;
export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);
