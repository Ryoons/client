import { Box, Typography, FormControl, FormHelperText,
  TextField, TextareaAutosize, Stack, Select, MenuItem, Button, color, fontWeight, fontSize }
  from "@pankod/refine-mui"

import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";

const Form = ({ type, register, handleSubmit,
  handleImageChange, formLoading, onFinishHandler, propertyImage} : FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a Property
      </Typography>
      <Box mt={2.5} borderRadius="5px" padding="20px" bgcolor="#D3D3D3" boxShadow= "2px 1px 2px #7393B3">
        <form style={{
          marginTop:"20px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          }}
          onSubmit={handleSubmit(onFinishHandler)}>
            <FormControl>
              <FormHelperText sx={{
                color: "#5A5A5A",
                fontWeight: 500,
                margin: "10px 0px",
                fontSize: 16,
                }}>Enter Property Name</FormHelperText>

              <TextField
                fullWidth
                required
                id="outlined-basic"
                color="info"
                variant="outlined"
                {...register('title', {required: true})}
               />
            </FormControl>
            <FormControl>
              <FormHelperText sx={{
                color: "#5A5A5A",
                fontWeight: 500,
                margin: "10px 0px",
                fontSize: 16,
                }}>Enter Property Description</FormHelperText>

              <TextareaAutosize
                minRows={5}
                required
                placeholder="Enter a description"
                color="info"
                style={{
                  width: "100%",
                  background: "transparent",
                  fontSize: '16px',
                  borderColor: 'rgba(0,0,0,0.23)',
                  borderRadius: "5px",
                  padding: 8}}
                  {...register('description', {required: true})}
               />
            </FormControl>
            <Stack direction="row" gap={4}>
              <FormControl sx={{
                flex: 1
              }}>
                <FormHelperText sx={{
                  fontWeight: 500,
                  margin: "10px 0px",
                  fontSize: 16,
                  color: '#5A5A5A'                  
                }}>
                  Select Property Type
                </FormHelperText>
                <Select
                variant="outlined"
                color="info" 
                displayEmpty
                required
                inputProps={{ 'area-label': 'Without label' }}
                defaultValue="Apartment"
                {...register('propertyType', {required: true})}
                >
                  <MenuItem value="apartment"> Apartment </MenuItem>
                  <MenuItem value="villa"> Villa </MenuItem>
                  <MenuItem value="farmhouse"> Farm House </MenuItem>
                  <MenuItem value="condo"> Condominium </MenuItem>
                  <MenuItem value="townhouse"> Town House </MenuItem>
                  <MenuItem value="duplex"> Duplex </MenuItem>
                  <MenuItem value="studio"> Studio </MenuItem>
                  <MenuItem value="fulldetached"> Fully Detached </MenuItem>
                  
                </Select>
              </FormControl>
            </Stack>
        </form>
      </Box>
    </Box>
  )
}

export default Form