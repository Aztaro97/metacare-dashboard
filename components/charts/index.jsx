import { DatePicker } from "antd";
import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Container, Aside, ChartContainer } from "./chartStyling";

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
            <Tooltip />
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

export default ChartComponents;
