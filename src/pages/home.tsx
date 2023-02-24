
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
        // values used for donut charts at the top of the page
          title="Properties for Sale"
          value={684}
          series={[75, 25]}
          colors={['#f75be8', '#44e8ef']}
         />
         <PieChart
          title="Properties for Rent"
          value={1284}
          series={[60, 40]}
          colors={['#5EF33A', '#h4e8ed']}
         />
         <PieChart
          title="Total Customers"
          value={25593}
          series={[90, 10]}
          colors={['#475be8', '#009900']}
         />
         <PieChart
          title="Properties for Cities"
          value={328}
          series={[75, 25]}
          colors={['#475be8', '#F726E6']}
         />
      </Box>
    </Box>
  )
};

export default home;
