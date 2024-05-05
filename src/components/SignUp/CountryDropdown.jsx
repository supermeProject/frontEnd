import React, { useState } from "react";
import { useRouteLoaderData } from "react-router-dom";

import styled, { css } from "styled-components";

const DropdownBtn = styled.button`
  appearance: none;
  width: 100%;
  padding: 0.6rem;
  flex: 1 1 auto;
  border: 1px solid var(--color-lightgray);
  max-height: 36.8px;
  text-align: left;
  font-family: "Quicksand", sans-serif;
  cursor: pointer;
  color: ${(props) =>
    !props.isSignUp
      ? "#000"
      : props.isSignUp && props.selected
      ? "#000"
      : "#999"};
  background-color: ${(props) => (props.isSignUp ? "white" : "darkgray")};
  position: relative;
`;

const DropdownMenu = styled.div`
  width: 100%;
  padding: 0.6rem 0.6rem 0 0.6rem;
  border: 1px solid var(--color-lightgray);
  background-color: white;
  font-size: 0.85rem;
  z-index: 1; /* 메뉴를 Address input 위로 렌더링 */
  position: absolute;
`;

const Country = styled.div`
  padding-bottom: 0.6rem;
  cursor: pointer;
`;

const options = [
  { value: "Republic of Korea", label: "Republic of Korea" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "United States", label: "United States" },
];

const CountryDropdown = ({ handleCountry, isSignUp, userData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    handleCountry(option);
    setIsOpen(false);
  };

  return (
    <div>
      <DropdownBtn
        onClick={handleToggleDropdown}
        selected={selectedOption !== null}
        isSignUp={isSignUp}
      >
        {isSignUp
          ? selectedOption
            ? selectedOption.label
            : "Select your country"
          : selectedOption
          ? selectedOption.label
          : userData.country}
      </DropdownBtn>
      {isOpen && (
        <DropdownMenu>
          {options.map((option) => (
            <Country
              key={option.value}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </Country>
          ))}
        </DropdownMenu>
      )}
    </div>
  );
};

export default CountryDropdown;
