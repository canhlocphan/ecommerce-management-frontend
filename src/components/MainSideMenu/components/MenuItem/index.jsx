// libs
import React from 'react';
// others
import './styles.scss';

const MenuItem = ({ title, icon }) => (
    <div className="menu-item-wrapper">
      <div className="menu-item-icon-wrapper">
        {icon}
      </div>
      <div className="menu-item-title">{title}</div>
    </div>
  )

export default MenuItem;
