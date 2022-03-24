import { Select } from "antd";
import React from "react";
import { BiSearch } from "react-icons/bi";
import ChartComponents from "../../../charts";
import { Container } from "./efficientyStyling";

const { Option } = Select;

const handleChange = (value) => {
  console.log(value);
};

const handleSubmit = (e) => {
  e.preventDefault();
};

const Efficiency = () => {
  return (
    <Container>
      <div className="header">
        <h1 className="title">Efficiency Analytics</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group-search">
            <BiSearch className="icon" />
            <input type="text" placeholder="Search" />
          </div>
          <Select
            defaultValue="Filter Options"
            style={{ width: 160 }}
            onChange={handleChange}
            className="select-filter"
          >
            <Option value="option1">option 1</Option>
            <Option value="option2">option 2</Option>
            <Option value="option3">option 3</Option>
            <Option value="option4">option 4</Option>
          </Select>
          <button className="form-button">Export</button>
        </form>
      </div>

      <ChartComponents
        title="Average Response Time"
        chartColor="var(--orange-100-color)"
        label="Average Response Time"
      />
      <ChartComponents
        title="Replies per resolution"
        chartColor="var(--green-color)"
        label="Average Replies"
      />
      <ChartComponents
        title="Average Response Time"
        chartColor="var(--red-color)"
        label="Average Response Time"
      />
      <ChartComponents
        title="First contact resolution rate"
        chartColor="var(--bright-color)"
        label="Average Contact Rate"
      />
    </Container>
  );
};

export default Efficiency;
