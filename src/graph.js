import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
  ResponsiveContainer,
  Brush,
} from "recharts";
import CustomTooltip from "./tooltip";

export default function Graph(props) {
  const classes = useStyles();
  const { data, handleChartClick, graphKey } = props;

  return (
    <div className={classes.root}>
      <ResponsiveContainer width="99%" height="95%">
        <LineChart data={data} onClick={handleChartClick}>
          <XAxis dataKey="duration" />
          <YAxis />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Brush dataKey="duration" stroke="#8884d8" />
          <Line type="monotone" dataKey={graphKey} stroke="#8884d8" />
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  root: {
    flex: 1,
    marginTop: "0.5rem",
    marginLeft: "-1.5rem",
  },
  graphRoot: {
    marginTop: "0.5rem",
    marginLeft: "-2rem",
    height: "100%",
  },
}));
