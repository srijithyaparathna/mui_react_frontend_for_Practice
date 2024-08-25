import React from 'react';
import { Button, CssBaseline, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';

function App() {
  return (
    <div className="App"  >
      <CssBaseline /> {/* Apply Material-UI's baseline CSS */}
      <Button variant="text">Text</Button>
      <Button startIcon={<SettingsIcon />} variant="contained" color='secondary' size='small'>Contained</Button>
      <Button startIcon={<AddIcon />} variant="contained" color='success' size='small'>Add new post </Button>
      <Button variant="outlined" disabled >Outlined</Button>
      

      <Typography variant="h1" component="h2">
      it uses h1 style but it is a p tag 
</Typography>
<Button variant='contained' sx={{
        backgroundColor:"skyblue",
        color:'#888',
        margin:5,
        "&:hover":{
          backgroundColor:"lightblue"
        },
        "&:disabled":{
          backgroundColor:"gray",
          color:"white"
        }
      }}  > MY Unique Button </Button>


    </div>
  );
}

export default App;
