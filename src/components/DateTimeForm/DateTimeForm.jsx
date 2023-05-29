import React from 'react';
import './DateTimeForm.css';
import { DatePicker, TimePicker } from 'antd';
import dayjs from 'dayjs';

export function DateTimeForm({ setFormValues }) {
  const onPickerChange = (data) => {
    setFormValues((prevState) => {
      return {
        ...prevState,
        ...data,
      };
    });
  };

  return (
    <form className="date-time-form">
      <DatePicker
        className="date-time-form-control"
        onChange={(event) => {
          onPickerChange({
            date: dayjs(event.toDate()).format('YYYY-MM-DD'),
          });
        }}
      />
      <TimePicker
        className="date-time-form-control"
        onChange={(event) => {
          onPickerChange({
            time: dayjs(event.toDate()).format('hh:mm:ss'),
          });
        }}
      />
    </form>
  );
}
