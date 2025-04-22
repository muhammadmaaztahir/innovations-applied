import React from 'react';
import styled from 'styled-components';

const Switch = () => {
  return (
    <StyledWrapper>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider">
          <svg
            className="slider-icon"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
          >
            <path
              fill="none"
              d="m4 16.5 8 8 16-16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    font-size: 10px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 1.5em;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #b0b0b0;
    border: 1px solid #b0b0b0;
    transition: 0.4s;
    border-radius: 32px;
    outline: none;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    outline: 2px solid #b0b0b0;
    left: -1px;
    bottom: -1px;
    background-color: #fff;
    transition: transform 0.25s ease-in-out 0s;
  }

  .slider-icon {
    opacity: 0;
    height: 12px;
    width: 12px;
    stroke-width: 8;
    position: absolute;
    z-index: 999;
    stroke: #222222;
    right: 60%;
    top: 5%;
    transition: right ease-in-out 0.3s, opacity ease-in-out 0.5s;
  }

  input:checked + .slider {
    background-color: #4EB3DE;
  }

  input:checked + .slider .slider-icon {
    opacity: 1;
    right: 7%;
    top: 5%;
  }

  input:checked + .slider:before {
    transform: translateX(1.8em);
    outline-color: #181818;
  }
`;

export default Switch;
