import { Box, Typography, Container, Stack, Button } from '@mui/material';
import { useRef, useState } from 'react';
import { findAccByEmai } from '../Api/Authentication';
import UserProfileForm from '../Component/UserProfileForm';
import { constSelector, useRecoilState } from 'recoil';
import { userInfoState } from '../Recoil/Atom';
import {setUserAvata} from "../Api/userManager.js"

export default function Profile() {
  const [save, setSave] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const childFunc = useRef(null)
  const [avata,setAvata] = useState()

  const showChangeAvataInput = () => {

  }

  const selectAvata = (e) =>{
    console.log(e.target.files[0])
  }

  //set save button state
  const checkSave = (is) => {
    console.log(is)
    if (is != save) {
      setSave(is)
    }
  }

  const submit = () => {
    childFunc.update();
  }


  let avataSrc = "../../../../Server/Avata" + userInfo.avata
  const loadAvataForm =
    <div className="flex justify-center ml-20"> 
      <div className="mb-3 w-96">
        <label htmlFor="formFile" className="form-label inline-block mb-2 text-gray-700">Change avata</label>
        <input onChange={(e) =>selectAvata(e)} className="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile" />
      </div>
      <Button onClick={changeAvata} display="outline">Submit</Button>
    </div>

  return (
    <>
      <Box display="flex" justifyContent="center">
        <Container maxWidth="md">
          <Stack spacing={3} direction="column">
            <Typography variant="h5" sx={{ fontSize: 20, fontWeight: 600 }}>
              User Profile
            </Typography>
            <Box className='flex'
              sx={{ width: '100px', height: '100px', backgroundColor: 'coral' }}
            >
              <img className='cursor-pointer' onClick={showChangeAvataInput}
                width={'100px'}
                src={!userInfo.avata ? 'https://static.vecteezy.com/system/resources/previews/002/002/403/large_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg' : avataSrc}
              />
              {loadAvataForm}
            </Box>
            <UserProfileForm checkSave={checkSave} childFunc={childFunc} />
            <div>
              <Button
                onClick={submit}
                disabled={save ? false : true} variant="contained">Save</Button>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
