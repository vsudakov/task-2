import React, { useEffect, useState, useCallback } from 'react';
import { Modal, Steps } from 'antd';
import './App.css';
import { PersonalInfoDiv } from 'components/PersonalInfoDiv/PersonalInfoDiv';
import { ActionButtons } from 'components/ActionButtons/ActionButtons';
import { DateTimeForm } from './components/DateTimeForm/DateTimeForm';
import { constants } from './constants/constants';

const App = () => {
  const [current, setCurrent] = useState(0);

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    date: '',
    time: '',
  });

  useEffect(() => {
    fetch(constants.FETCH_URL)
      .then((res) =>
        res.status === constants.SUCCESS_CODE ? res.json() : Promise.reject(res)
      )
      .then(({ data }) => {
        const [firstName, lastName] = data?.name?.split(' ');
        const { email = '' } = data;
        setFormValues({ ...formValues, firstName, lastName, email });
      })
      .catch((err) => {
        // accordingly to task description - suppress an error message here
        console.error(err.message);
      });
  }, []);

  const showError = ({ title, content }) => {
    Modal.error({
      title,
      content,
    });
  };

  const nextAction = useCallback(() => {
    setCurrent(current + 1);
  }, [current]);

  const prevAction = useCallback(() => {
    setCurrent(current - 1);
  }, [current]);

  const submitAllData = () => {
    fetch(constants.POST_URL, {
      method: 'POST',
      body: JSON.stringify(formValues),
    })
      .then((res) => {
        if (res.status === constants.SUCCESS_CODE) nextAction();
        else
          showError({
            title: 'Could not submit data to the server',
            content: `${res.body}`,
          });
      })
      .catch((err) => {
        showError({
          title: 'Could not submit data to the server',
          content: `${err}`,
        });
      });
  };

  const steps = [
    {
      title: 'Login',
      content: (
        <form>
          <PersonalInfoDiv
            firstName={formValues.firstName}
            lastName={formValues.lastName}
            email={formValues.email}
            setFormValues={setFormValues}
          />
          <ActionButtons
            current={current}
            secondaryAction={prevAction}
            primaryAction={nextAction}
            primaryActionName="Next"
          />
        </form>
      ),
    },
    {
      title: 'Date',
      content: (
        <div>
          <DateTimeForm setFormValues={setFormValues} />
          <ActionButtons
            current={current}
            secondaryAction={prevAction}
            primaryAction={submitAllData}
            primaryActionName="Submit"
          />
        </div>
      ),
    },
    {
      title: 'Finish',
      content: <div>Done!</div>,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <div className="app">
      <Steps
        className="app-stepper"
        current={current}
        items={items}
        direction="vertical"
        labelPlacement="vertical"
      />
      <div>{steps[current].content}</div>
      <div className="div-footer"></div>
    </div>
  );
};

export default App;
