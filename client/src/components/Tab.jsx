import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  const activeStyles = () => {
    let styles = {};
    if (!isFilterTab) {
      styles = {
        opacity: 1,
        backgroundColor: "transparent",
      };
    } else {
      if (isActiveTab) {
        styles = {
          opacity: 1,
          backgroundColor: snap.color,
        };
      } else {
        styles = {
          opacity: 0.2,
          backgroundColor: "transparent",
        };
      }
    }
    return styles;
  };

  return (
    <div
      key={tab.name}
      className={`tab-btn ${
        isFilterTab ? "rounded-full glassmorhism" : "rounded-4"
      }`}
      onClick={handleClick}
      style={activeStyles()}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${
          isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12 object-contain"
        }`}
      />
    </div>
  );
};

export default Tab;
