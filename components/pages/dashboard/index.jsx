import React from "react";
import { Tabs } from "antd";
import styled from "styled-components";
import Efficiency from "./efficienty";
import VolumeComponent from "./volume";
import BacklogComponent from "./backlog";
import SatisfactionComponent from "./satisfaction";

const { TabPane } = Tabs;

const Dashboard = () => {
  const callback = (key) => {
    console.log(key);
  };
  return (
    <TabsContainer defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Efficiency" key="1">
        <Efficiency />
      </TabPane>
      <TabPane tab="Volume" key="2">
        <VolumeComponent />
      </TabPane>
      <TabPane tab="Customer Satisfaction" key="3">
        <SatisfactionComponent />
      </TabPane>
      <TabPane tab="Backlog" key="4">
        <BacklogComponent />
      </TabPane>
    </TabsContainer>
  );
};

const TabsContainer = styled(Tabs)`
  //   padding: 1rem;

  & .ant-tabs-nav {
    padding: 0 2.5rem;
  }

  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: var(--black-color);
  }

  & .ant-tabs-tab {
    &:hover {
      color: var(--black-color);
    }
  }
`;

export default Dashboard;
