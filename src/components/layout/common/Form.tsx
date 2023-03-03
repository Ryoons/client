import { Box, Typography, FormControl, FormHelperText,
  TextField, TextareaAutosize, Stack, Select, MenuItem, Button }
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
      <Box mt={2.5} borderRadius="5px" padding="20px" bgcolor="#D3D3D3">
        <form style={{
          marginTop:"20px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px"}}
          onSubmit={handleSubmit(onFinishHandler)}>
            
        </form>
      </Box>
    </Box>
  )
}

export default Form