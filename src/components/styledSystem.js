import { styled } from "@mui/system";

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button, InputLabel, Select, TextField } from "@mui/material";

export const ListItemCSS = styled(ListItem)({
  boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: '10px',
  padding: '10px',
  marginTop: '20px',
  background: 'white',
  borderRadius: '5px'
});

export const ListItemTextCSS = styled(ListItemText)(({ theme }) => ({
  '& .MuiListItemText-primary': {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '30px',
    fontWeight: 'bold',
  },
})); 

export const TextFieldCSS = styled(TextField)({
  marginRight: '20px',
  marginTop: '8px',
  width: '600px',
}); 

export const InputLabelCSS = styled(InputLabel)({
  marginTop: '8px !important'
});

export const SelectCSS = styled(Select)({
  marginTop: '8px !important',
  width: '200px',
});

export const ButtonCSS = styled(Button)({
  height: '55px',
  marginTop: '28.5px',
});



