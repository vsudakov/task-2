import React from 'react';
import './PersonalInfoDiv.css';
import { Input } from 'antd';

export function PersonalInfoDiv({ firstName, lastName, email }) {
  return (
    <div className="personal-info-form">
      <Input
        value={firstName}
        placeholder="First name"
        className="personal-info-form-control"
      />
      <Input
        value={lastName}
        placeholder="Last name"
        className="personal-info-form-control"
      />
      <Input
        value={email}
        type="Email"
        placeholder="Email"
        className="personal-info-form-control"
      />
    </div>
  );
}
