import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

export default function NavBarDrawer() {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    if (path !== undefined || path === null) {
      navigate(`/${path}`);
    } else {
      navigate(`/`);
    }
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          { title: "Home", path: "" },
          { title: "About Us", path: "about" },
          { title: "Features", path: "feature" },
          { title: "Blogs", path: "blog" },
        ].map((ele, index) => (
          <ListItem key={ele.title} disablePadding>
            <ListItemButton
              onClick={() => {
                handleNavigate(ele.path);
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={ele.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        my={2}
        textAlign="center"
        onClick={() => {
          handleNavigate("contactUs");
        }}
      >
        <PrimaryButton title="Contact Us" />
      </Box>
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      <IconButton size="large" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
