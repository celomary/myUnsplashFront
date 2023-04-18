/* eslint-disable react/forbid-prop-types */
import React from 'react';
import propTypes from 'prop-types';
import { FormTextField } from '../authLayout/styled';

export default function Fields({ form, fields }) {
  return (
    <>
      {fields.map((field) => (
        <FormTextField
          label={field.label}
          type={field.type}
          name={field.name}
          value={form.values[field.name]}
          onChange={form.handleChange}
          key={field.name}
          error={
            !!form.errors[field.name] &&
            form.touched[field.name]
          }
          helperText={
            form.touched[field.name] &&
            form.errors[field.name]
          }
        />
      ))}
    </>
  );
}

Fields.propTypes = {
  fields: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      type: propTypes.string,
      label: propTypes.string,
    })
  ).isRequired,
  form: propTypes.shape({
    handleSubmit: propTypes.func.isRequired,
    handleChange: propTypes.func.isRequired,
    values: propTypes.object.isRequired,
    touched: propTypes.object.isRequired,
    errors: propTypes.object.isRequired,
  }).isRequired,
};
