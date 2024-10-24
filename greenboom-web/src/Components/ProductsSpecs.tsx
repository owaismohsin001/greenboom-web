import React from "react";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

function ProductsSpecs() {
  const expandIcon = ({ isActive }) => {
    return (
      <span style={{ marginLeft: "10px" }}>
        {isActive ? <MinusOutlined /> : <PlusOutlined />}
      </span>
    );
  };

  return (
    <div className="mt-16 bg-white">
      <Collapse
        accordion // Enable accordion behavior
        expandIconPosition="right"
        expandIcon={expandIcon}
      >
        <Panel header="PRODUCT FEATURES" key="1" className="p-4">
          <p>Feature 1: Description</p>
          <p>Feature 2: Description</p>
          <p>Feature 3: Description</p>
        </Panel>
        <Panel header="US PRODUCT SPECS" key="2" className="p-4">
          <p>Spec 1: Description</p>
          <p>Spec 2: Description</p>
          <p>Spec 3: Description</p>
        </Panel>
        <Panel header="EU PRODUCT SPECS" key="3" className="p-4">
          <p>Spec 1: Description</p>
          <p>Spec 2: Description</p>
          <p>Spec 3: Description</p>
        </Panel>
      </Collapse>
    </div>
  );
}

export default ProductsSpecs;
