import { Add } from "@mui/icons-material"
import { useTable } from "@pankod/refine-core"
import { Box, Stack, Typography } from "@pankod/refine-mui"
import { useNavigate } from "@pankod/refine-react-router-v6"

import { PropertyCard, CustomButton } from "components/layout"

const AllProperties = () => {

  const navigate = useNavigate();

  const {
    tableQueryResult: { data, isLoading, isError }
  } = useTable();

  const allProperies = data?.data ?? [];

  if(isLoading) return <Typography>Loading.</Typography>
  if(isError) return <Typography>Something went wrong.</Typography>

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={25} fontWeight={700} color="#11142d">
          All Properties
        </Typography>
        <CustomButton
          title="Add Property"
          handleClick={() => navigate('/properties/create')}
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add />}
         />
      </Stack>
      {/* Fetching all properties and displaying them */}
      <Box mt="20x" sx={{ display: "flex", flexWrap: "wrap", gap: 3}}>
        {allProperies.map((property) => (
          <PropertyCard
            key={property._id}
            id={property._id}
            title={property.title}
            price={property.price}
            location={property.location}
            photo={property.photo}
          />
        ))}
      </Box>
    </Box>
  )
}

export default AllProperties