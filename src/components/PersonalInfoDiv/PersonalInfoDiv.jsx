import React from 'react';
import './PersonalInfoDiv.css';
import { Input } from 'antd';

export function PersonalInfoDiv({ firstName, lastName, email, setFormValues }) {
  const onInputChange = (event, name) => {
    setFormValues((prevState) => {
      return {
        ...prevState,
        [name]: event.target.value,
      };
    });
  };

  return (
    <div className="personal-info-form">
      <Input
        value={firstName}
        onChange={(event) => onInputChange(event, 'firstName')}
        placeholder="First name"
        className="personal-info-form-control"
      />
      <Input
        value={lastName}
        onChange={(event) => onInputChange(event, 'lastName')}
        placeholder="Last name"
        className="personal-info-form-control"
      />
      <Input
        value={email}
        onChange={(event) => onInputChange(event, 'email')}
        type="Email"
        placeholder="Email"
        className="personal-info-form-control"
      />
    </div>
  );
}
