import { DatePicker } from "antd";
import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";

const data = [
  { name: "Jan", pv: 12, amt: 10 },
  { name: "Feb", pv: 16 },
  { name: "Mar", pv: 50, amt: 50 },
  { name: "Apr", pv: 30, amt: 40 },
  { name: "May", pv: 35 },
  { name: "Jun", pv: 40 },
  { name: "Jul", pv: 30 },
  { name: "Aug", pv: 35 },
];

const ChartComponents = ({ title, chartColor, label }) => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <Container>
      <ChartContainer chartColor={chartColor}>
        <div className="chart-header">
          <div className="head-left">
            <h1 className="title">{title}</h1>
            <div className="rate">
              <span className="rate-value">+4.14%</span>
            </div>
          </div>
          <div className="head-right">
            <div className="status">
              <div className="status-type"></div>
              <h3>High Priority</h3>
            </div>
            <DatePicker
              placeholder="This Month"
              onChange={onChange}
              picker="week"
              className="date-picker"
            />
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width="100%"
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: -30,
              bottom: 10,
            }}
          >
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ECEBF5" strokeDasharray="4  4" />
            <XAxis dataKey="name" />
            <YAxis />
            <Line dataKey="pv" stroke={chartColor} strokeWidth={2} />
            {/* <Line dataKey="uv" stroke="#82ca9d" /> */}
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
      <Aside>
        <div className="box">
          <p>{label}</p>
          <h1>30 Mins</h1>
        </div>
        <div className="box">
          <p>Response Time</p>
          <h1>1 Hour 30 Mins</h1>
        </div>
      </Aside>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Aside = styled.div`
  flex: 1;
  padding: 1rem;
  border-left: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  & .box {
    padding: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fafafa;
    border: 1px solid #ecebf5;
    border-radius: 10px;

    & p {
      font-size: 0.875rem;
      color: var(--gray-color);
    }
    & h1 {
      font-size: 1.25rem;
      color: var(--black-color);
      font-weight: 600;
    }
  }
`;

const ChartContainer = styled.div`
  flex: 4;
  padding: 1rem;

  & .chart-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // padding: 13px;
    width: 100%;

    & .head-left {
      display: flex;
      align-items: center;
      gap: 10px;

      & .rate {
        width: 70px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(37, 187, 135, 0.1);
        & .rate-value {
          font-size: 0.75rem;
          color: var(--green-color);
          font-weight: 600;
        }
      }

      & .title {
        color: var(--black-color);
        font-size: 1.125rem;
        font-weight: 600;
        margin: 0;
      }
    }

    & .head-right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;

      & .status {
        display: flex;
        align-items: center;
        gap: 5px;
        & .status-type {
          width: 10px;
          height: 10px;
          border-radius: 2px;
          background: ${({ chartColor }) => chartColor};
          // background: ;
        }
        & h3 {
          font-size: 0.875rem;
          font-weight: 600;
          margin: 0;
        }
      }
      & .date-picker {
        & input::placeholder {
          font-weight: 600;
          color: var(--black-color) !important;
        }
      }
    }
  }
`;

export default ChartComponents;
