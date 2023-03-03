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
                  padding: 8,

                }}
               />
            </FormControl>
        </form>
      </Box>
    </Box>
  )
}

export default Form