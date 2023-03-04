import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { ReleaseStatuses } from "../../utils/types";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = ReleaseStatuses.map((s) => ({
  key: s.id,
  label: s.label,
}));

const ReleaseStatusTabs: React.FC = () => (
  <Tabs
    tabBarGutter={38}
    defaultActiveKey="1"
    items={items}
    onChange={onChange}
  />
);

export default ReleaseStatusTabs;
