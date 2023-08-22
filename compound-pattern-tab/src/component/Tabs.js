import React, { useState } from "react";
import Tab, {
  TabHeads,
  TabHeadsItem,
  TabContentWrapper,
  TabContent,
} from "./Tab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleChangeTab = (index) => {
    console.log("cghhgjhjhj", index);
    setActiveTab(index);
  };
  return (
    <div>
      <Tab value={activeTab} onChange={handleChangeTab}>
        <TabHeads>
          <TabHeadsItem label="Tab-1" index={1}>
            Tab-1
          </TabHeadsItem>
          <TabHeadsItem label="Tab-2" index={2}>
            Tab-2
          </TabHeadsItem>
          <TabHeadsItem label="Tab-3" index={3}>
            Tab-3
          </TabHeadsItem>
        </TabHeads>
        <TabContentWrapper>
          <TabContent index={1}>Component - One </TabContent>
          <TabContent index={2}>Component - Two </TabContent>
          <TabContent index={3}>Component - Three </TabContent>
        </TabContentWrapper>
      </Tab>
    </div>
  );
};

export default Tabs;
