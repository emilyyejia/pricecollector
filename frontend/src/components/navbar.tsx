import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BorderColorIcon from "@mui/icons-material/BorderColor";

type Props = {
  drawerWidth: number;
  content: React.ReactNode;
};

const Navbar: React.FC<Props> = (props) => {
  const { drawerWidth, content } = props;
  const location = useLocation();
  const path = location.pathname;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "white",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "green",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            Price Collector
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem>
              <ListItemButton component={Link} to="/" selected={"/" === path}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>

                <ListItemText primary={"Home"} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                component={Link}
                to="/create"
                selected={"/create" === path}
              >
                <ListItemIcon>
                  <BorderColorIcon />
                </ListItemIcon>

                <ListItemText primary={"Add Item"} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                component={Link}
                to="/about"
                selected={"/about" === path}
              >
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>

                <ListItemText primary={"About"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {content}
      </Box>
    </Box>
  );
};

export default Navbar;
