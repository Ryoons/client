import { Box, Stack, Typography } from "@pankod/refine-mui";
import { propertyReferralsInfo } from "constants/index";

const PropertyReferrals = () => {
  return (
    <Box
      p={4}
      bgcolor="#D3D3D3"
      id="chart"
      display="flex"
      minWidth={400}
      flexDirection="column"
      borderRadius="5px"
      boxShadow="2px 1px 2px #7393B3"
      >
        <Typography fontSize={18} fontWeight={600} color="#000" >
          Property Referrals
        </Typography>
        <Stack my="20px" direction="column" gap={4}>

        </Stack>
    </Box>
  )
}

export default PropertyReferrals