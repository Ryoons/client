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
                inputProps={{ 'aria-label': 'Without label' }}
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
              <FormControl>
              <FormHelperText sx={{
                color: "#5A5A5A",
                fontWeight: 500,
                margin: "10px 0px",
                fontSize: 16,
                }}>Enter Property Price</FormHelperText>

              <TextField
                fullWidth
                required
                id="outlined-basic"
                color="info"
                variant="outlined"
                type="number"
                {...register('price', {required: true})}
               />
            </FormControl>
            </Stack>
            <FormControl>
              <FormHelperText sx={{
                color: "#5A5A5A",
                fontWeight: 500,
                margin: "10px 0px",
                fontSize: 16,
                }}>Enter Location</FormHelperText>

              <TextField
                fullWidth
                required
                id="outlined-basic"
                color="info"
                variant="outlined"
                {...register('location', {required: true})}
               />
            </FormControl>
            <Stack
              direction="column"
              gap={1}
              justifyContent="center"
              mb={2}
            >
              <Stack direction="row" gap={2}>
                <Typography color="#5A5A5A" fontSize={16}
                  fontWeight={500} my="10px">Property Photo</Typography>
                  <Button component="label" sx={{
                    width: "fit-content",
                    color: "#475be8",
                    textTransform: "capitalize",
                    fontSize: 16
                  }}>
                    Upload *
                    <input
                      hidden
                      accept="image/*" 
                      type="file"
                      // @ts-ignore
                      onChange={(e) => handleImageChange(e.target.files[0])}/>
                  </Button>
              </Stack>
              <Typography
                fontSize={14} color="#5A5A5A" sx={{ wordBreak: 'break-all'}}> 
                {propertyImage?.name}</Typography>
            </Stack>
            <CustomButton
              type="submit"
              title={formLoading ? "Submitting..." : "Submit"}
              backgroundColor="#475be8"
              color="#fff"
             />
        </form>
      </Box>
    </Box>
  )
}

export default Form