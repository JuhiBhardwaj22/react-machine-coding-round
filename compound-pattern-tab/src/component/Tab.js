import React, { useContext } from "react";
import { createContext } from "react";
import "./Tab.css";

const TabConext = createContext();

const Tab = ({ children, onChange, value }) => {
  return (
    <div>
      <TabConext.Provider value={{ onChange, value }}>
        {children}
      </TabConext.Provider>
    </div>
  );
};

export function TabHeads({ children }) {
  return <div className="tab-heads">{children}</div>;
}
export function TabHeadsItem({ label, index }) {
  const { onChange, value } = useContext(TabConext);
  const handleClick = () => {
    onChange(index);
  };
  return (
    <div
      className={`tab-item ${index === value ? "active" : ""}`}
      onClick={handleClick}
    >
      {label}
    </div>
  );
}

export function TabContentWrapper({ children }) {
  return <div className="contentWrapper">{children}</div>;
}

export function TabContent({ index, children }) {
  const { value } = useContext(TabConext);
  console.log("val", value);
  return index === value && <div>{children}</div>;
}

export default Tab;
