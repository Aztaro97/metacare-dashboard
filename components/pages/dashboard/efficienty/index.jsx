import { Select } from "antd";
import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import ChartComponents from "../../../charts";

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
        chartColor="var(--orange-color)"
        label="Average Response Time"
      />
      <ChartComponents
        title="Replies per resolution"
        chartColor="var(--green-color)"
        label="Average Replies"
      />
      <ChartComponents
        title="Average Response Time"
        chartColor="var(--orange-color)"
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

const Container = styled.div`
  padding: 0 1rem;

  & .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 20px;

    & .title {
      font-size: 1.5rem;
      color: var(--black-color);
      font-weight: 600;
      margin-bottom: 0;
    }
    & .form-group-search {
      position: relative;
      & .icon {
        position: absolute;
      }
      & input {
        border: 1px solid #e1e1eb;
        border-radius: 8px;
        padding: 10px;
        &:focus {
          outline: none;
        }
      }
      & .icon {
        position: absolute;
        right: 15px;
        top: 15px;
        bottom: 0;
      }
    }
    & .select-filter {
      & .ant-select-selector {
        height: 44px;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        & .ant-select-selection-item {
          font-weight: 600;
          display: flex;
          align-items: center;
          height: 100%;
        }
      }
    }
    & .form-button {
      width: 105px;
      background: var(--green-color);
      padding: 10px 16px;
      outline: none;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      color: #fff;
      cursor: pointer;
    }
  }

  & .form {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export default Efficiency;
