import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./chartBox.scss";
import { LineChart, ResponsiveContainer, Line, Tooltip } from "recharts";

const ChartBox = (props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>
          {" "}
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ backgroundColor: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: -20, y: 66 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "red" : "green" }}
          >
            {props.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

ChartBox.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  percentage: PropTypes.number.isRequired,
  chartData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChartBox;
