import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./barChartBox.scss";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

const BarChartBox = (props) => {
  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={100}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ backgroundColor: "transparent", border: "none" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
              position={{ x: 10, y: -27 }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Define PropTypes for the component
BarChartBox.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  chartData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BarChartBox;
