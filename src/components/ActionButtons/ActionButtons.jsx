import { Button } from 'antd';
import React from 'react';
import './ActionButtons.css';

export function ActionButtons({
  primaryAction,
  secondaryAction,
  current,
  primaryActionName,
}) {
  return (
    <div className="action-buttons">
      <Button disabled={current === 0} onClick={secondaryAction}>
        Prev
      </Button>
      <Button type="primary" onClick={primaryAction}>
        {primaryActionName}
      </Button>
    </div>
  );
}
