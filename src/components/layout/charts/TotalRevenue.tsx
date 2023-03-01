import ReactApexChart from "react-apexcharts";
import { Typography, Box, Stack } from "@pankod/refine-mui";
import { ArrowCircleUpRounded } from "@mui/icons-material";
import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";

const TotalRevenue = () => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="#D3D3D3"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="5px"
      boxShadow="2px 1px 2px #7393B3"
      >
        <Typography fontSize={18} fontWeight={600} color="#000" >
          Total Revenue
        </Typography>
        <Stack my={20} direction="row" gap={4} flexWrap="wrap">
          <Typography fontSize={28} fontWeight={600} color="black">
            $88,888</Typography>
        </Stack>
    </Box>
  )
}

export default TotalRevenue