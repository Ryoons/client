import { useState } from 'react'
// useGetIdentity is used to get information about 
// the user like name, email and photo
import { useGetIdentity } from '@pankod/refine-core'
// help to check form for values
import { FieldValues, useForm } from '@pankod/refine-react-hook-form'
import { useNavigate } from '@pankod/refine-react-router-v6'

import Form from 'components/layout/common/Form'

const CreateProperty = () => {

  const navigate = useNavigate();
  //declaring data and renaming it to user.
  // allows us to get info from the form
  const { data: user } = useGetIdentity();
  const [propertyImage, setPropertyImage] = useState({
    name: '',
    url: '',
  })

  const { refineCore: { onFinish, formLoading}, register, handleSubmit } = useForm();

  // file reader found 
  const handleImageChange = (file: File) => {
    const reader = (readFile: File) => new Promise<string>
    ((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result as string);
      fileReader.readAsDataURL(readFile);
    });

    //setting the results from the file to the state
    reader(file).then((result: string) => setPropertyImage ({
      name: file?.name, url: result
    }))

  }
  const onFinishHandler = () => {

  }


  return (

    // self closing form tag so we can start sending some information
    <Form
      type="Create"
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
      propertyImage={propertyImage}

     />
  )
}

export default CreateProperty