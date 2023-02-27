import React from "react";
import ReactApexChart from "react-apexcharts";
import { Typography, Box, Stack } from "@pankod/refine-mui";
import { PieChartProps } from "interfaces/home";

const PieChart = ({ title, value, series, colors }: PieChartProps) => {
  return (
    <Box
      id="chart"
      flex={1}
      display="flex"
      bgcolor="#D3D3D3"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      pl={3.5}
      py={2}
      gap={2}
      borderRadius="15px"
      minHeight="110px"
      width="fit-content"
      boxShadow="2px 1px 2px #7393B3"
          
    >
      <Stack direction="column">
        <Typography fontSize={14}>{title}</Typography>
        <Typography fontSize={24} color="#11142d" fontWeight={700} mt={1}>
          {value}
        </Typography>
      </Stack>
        <ReactApexChart
          options = {{
            // options to design the chart
            chart: {type: "donut"},
            colors,
            legend: {show: false },
            dataLabels: {enabled: false  },
            plotOptions: {
              pie: {
                expandOnClick: false,
                donut: {
                  size: '55%'
                },
              }
            }
          }}
          // using the data from props 
          series={series}
          type="donut"
          width="130px"
        />
    </Box>
  );
};

export default PieChart;
