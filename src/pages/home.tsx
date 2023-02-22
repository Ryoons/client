
import { 
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent } from "components/layout";

import React from "react";
import { useList } from "@pankod/refine-core/dist/hooks";
import { Typography, Box, Stack } from "@pankod/refine-mui";

const home = () => {
  return (
    <Box>
      <Typography 
      fontSize={25}
      fontWeight={700}
      color="#000"> 
        Dashboard
      </Typography>

      <Box mt="20" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for Sale"
          value={684}
          series={[75, 25]}
          colors={['#475be8', '#e4e8ef']}
         />
         <PieChart
          title="Properties for Rent"
          value={550}
          series={[60, 40]}
          colors={['#615re8', '#h4e8ed']}
         />
         <PieChart
          title="Total Customers"
          value={2593}
          series={[90, 10]}
          colors={['#475be8', '#e4e8ef']}
         />
         <PieChart
          title="Properties for Cities"
          value={555}
          series={[75, 25]}
          colors={['#475be8', '#e4e8ef']}
         />
      </Box>
    </Box>
  )
};

export default home;
