import React from "react";
import ".//Topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from "../Sidebar/Sidebar";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function TopBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const [sidebar, setSidebar] = React.useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
 
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topbarLeft">
            <span className="iconbutton">
            <IconButton sx={{ p: '15px', color:'white' }} aria-label="menu" onClick={showSidebar}>
        <MenuIcon/>
      </IconButton>
            {sidebar&&<SideBar/>}
            </span>
            <span className="logo">Employee Management System<SideBar/></span>
          </div>
          <div className="topbarRight">
            <div className="topbarIcon">
              <NotificationsNoneIcon fontSize="medium" />
              <span className="icontop">2</span>
            </div>
            <div className="topbarIcon">
              <SettingsIcon fontSize="medium" />
            </div>
            <div className=" topbarIcon avatarimg">
              <Stack direction="row" spacing={2}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                      fontSize="medium"
                    />
                  </IconButton>
                </Tooltip>
                
              </Stack>
              <Box sx={{ flexGrow: 0 }}>
              <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
