import { styled } from "@mui/system";

import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';

export const ListItemCSS = styled(ListItem)({
    boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '10px',
    padding: '10px',
});

export const ListItemTextCSS = styled(ListItemText)(({ theme }) => ({
    '& .MuiListItemText-primary': {
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontSize: '30px',
      fontWeight: 'bold',
    },
  }));