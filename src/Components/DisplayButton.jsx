import React, { useState } from 'react';
import DownSVG from '../assets/down.svg';
import DisplaySVG from '../assets/Display.svg';
import './css/DisplayButton.css';

const DisplayButton = ({ selectedGrouping, selectedOrdering, handleGroupingChange, handleOrderingChange }) => {
  const [formVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  const handleSelectChange = (handler) => (event) => {
    handler(event);
    setFormVisible(false);
  };

  return (
    <div>
      <button onClick={toggleFormVisibility}>
        <span style={{display: 'flex', alignItems: 'center'}}>
        <img src={DisplaySVG} alt="Display options" width="16" height="16" style={{marginLeft: '5px'}} />Display <img src={DownSVG} alt="Display options" width="16" height="16" style={{marginLeft: '5px'}} />
        </span>
      </button>
      {formVisible && (
        <form className="display-button-form">
          <label className="display-button-label">
            Grouping:
            <select value={selectedGrouping} onChange={handleSelectChange(handleGroupingChange)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </label>
          <br />
          <label className="display-label">
            Ordering:
            <select value={selectedOrdering} onChange={handleSelectChange(handleOrderingChange)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </label>
        </form>
      )}
    </div>
  );
};

export default DisplayButton;

