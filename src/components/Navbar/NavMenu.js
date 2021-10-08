import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

const options = [
  'About',
  'Contact'
];

const ITEM_HEIGHT = 48;

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar_menu">
        <IconButton
            aria-label="more"
            id="long-button"
            aria-controls="long-menu"
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick} >

            <MenuIcon sx={{ color: "#fff", fontSize: 35 }} />

      </IconButton>

        <Menu id="long-menu"
            MenuListProps={{
                'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
                style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '100ch',
                },
            }}>

                {options.map((option) => (
                    <MenuItem key={option} onClick={handleClose} 
                        sx={{ fontSize: 15, fontFamily: "'Montserrat', sans-serif"}}>
                        {option}
                    </MenuItem>
                ))}

        </Menu>
    </div>
  );
}