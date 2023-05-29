import React from 'react';
import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { PersonalInfoDiv } from './PersonalInfoDiv';

test('renders PersonalInfoDiv component', () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();

  render(
    <PersonalInfoDiv firstName={firstName} lastName={lastName} email={email} />
  );

  expect(screen.getByDisplayValue(firstName)).toBeInTheDocument();
  expect(screen.getByDisplayValue(lastName)).toBeInTheDocument();
  expect(screen.getByDisplayValue(email)).toBeInTheDocument();
});
