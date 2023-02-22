import React from "react";
import { useList } from "@pankod/refine-core/dist/hooks";
import { Typography, Box, Stack } from "@pankod/refine-mui";

// import {
//   PieChart,
//   PropertyReferrals,
//   TotalRevenue,
//   PropertyCard,
//   TopAgent
// } from "components"

const home = () => {
  return (
    <Box>
      <Typography 
      fontSize={25}
      fontWeight={700}
      color="#000"> 
        Dashboard
      </Typography>
    </Box>
  )
};

export default home;
