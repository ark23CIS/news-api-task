import React from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { fetchNews } from "../redux/actions";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HealthIcon from "@material-ui/icons/LocalHospital";
import BusinessIcon from "@material-ui/icons/Business";
import SportsIcon from "@material-ui/icons/SportsSoccer";
import HomeIcon from "@material-ui/icons/Home";
import EntertainmentIcon from "@material-ui/icons/SportsEsports";
import TechnologyIcon from "@material-ui/icons/Computer";
import ScienceIcon from "@material-ui/icons/School";
import { green, red, grey, purple } from "@material-ui/core/colors";
import { useStyles } from "./NavbarStyles";

export default function Navbar() {
  const dispatch = useDispatch();
  const [activePage, setActivePage] = React.useState("home");
  const searchRef = React.useRef();
  const onChange = React.useCallback(
    (e) => {
      e.preventDefault();
      var key = e.keyCode || e.which;
      if (key !== 13) return;
      console.log(
        `${activePage === "home" ? "general" : activePage}&q=${e.target.value
          .split(new RegExp(`[ ,.?!:;]`))
          .filter((val) => val !== "")
          .join("%20")}`
      );
      dispatch(
        fetchNews(
          `${activePage === "home" ? "general" : activePage}&q=${e.target.value
            .split(new RegExp(`[ ,.?!:;]`))
            .filter((val) => val !== "")
            .join("%20")}`
        )
      );
    },
    [dispatch, activePage]
  );
  const onClickCategory = React.useCallback(
    (e) => {
      searchRef.current.value = "";
      let current = Array.from(
        e.currentTarget.childNodes
      )[0].innerHTML.toLowerCase();
      setActivePage(current);
      dispatch(fetchNews(current === "home" ? "general" : current));
    },
    [dispatch]
  );
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            News
          </Typography>
          <input
            type="text"
            placeholder="Search"
            className="input-search"
            onKeyUp={onChange}
            ref={searchRef}
          />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key={"Home"}>
            <ListItemIcon>
              <HomeIcon color="action" />
            </ListItemIcon>
            <ListItemText primary={"Home"} onClick={onClickCategory} />
          </ListItem>
          <ListItem button key={"Business"}>
            <ListItemIcon>
              <BusinessIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"Business"} onClick={onClickCategory} />
          </ListItem>
          <ListItem button key={"Science"}>
            <ListItemIcon>
              <ScienceIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={"Science"} onClick={onClickCategory} />
          </ListItem>
          <ListItem button key={"Entertainment"}>
            <ListItemIcon>
              <EntertainmentIcon style={{ color: green[500] }} />
            </ListItemIcon>
            <ListItemText primary={"Entertainment"} onClick={onClickCategory} />
          </ListItem>
          <ListItem button key={"Health"}>
            <ListItemIcon>
              <HealthIcon style={{ color: red[500] }} />
            </ListItemIcon>
            <ListItemText primary={"Health"} onClick={onClickCategory} />
          </ListItem>
          <ListItem button key={"Sports"}>
            <ListItemIcon>
              <SportsIcon style={{ color: grey[900] }} />
            </ListItemIcon>
            <ListItemText primary={"Sports"} onClick={onClickCategory} />
          </ListItem>
          <ListItem button key={"Technology"}>
            <ListItemIcon>
              <TechnologyIcon style={{ color: purple[600] }} />
            </ListItemIcon>
            <ListItemText primary={"Technology"} onClick={onClickCategory} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
