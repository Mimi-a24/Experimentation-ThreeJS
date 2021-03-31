import ListItemText from "@material-ui/core/ListItemText";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import ListItem from "@material-ui/core/ListItem";
import Toolbar from "@material-ui/core/Toolbar";
import React, { useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CustomizedSlider from './slider';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
	  display: "flex"
	},
	appBar: {
	  zIndex: theme.zIndex.drawer + 1
	},
	drawer: {
	  width: drawerWidth,
	  flexShrink: 0
	},
	drawerPaper: {
	  width: drawerWidth
	},
	drawerContainer: {
	  overflow: "auto"
	},
	content: {
	  flexGrow: 1,
	  padding: theme.spacing(3)
	}
}));

export default function ClippedDrawer(props) {
	const classes = useStyles();
	var [open, setOpen] = useState(false);

    const manageOpen = () => {
        setOpen(!open);
	}

	return (
		<div className={classes.root}>
    		<CssBaseline />
    		<AppBar position="fixed" className={classes.appBar}>
    			<Toolbar>
        			<IconButton
        				color="inherit"
            			aria-label="open drawer"
        				onClick={manageOpen}
        				edge="start"
        			>
        			<MenuIcon />
        			</IconButton>
        			<Typography variant="h6" noWrap>
          			Animation Model
        			</Typography>
      			</Toolbar>
    		</AppBar>
    		<Drawer
      			className={classes.drawer}
      			variant="persistent"
      			open={open}
      			classes={{
        			paper: classes.drawerPaper
      			}}
    		>
      			<Toolbar />
      			<div className={classes.drawerContainer}>
        			<List>
          				{props.animationName.map((animationNames, index) => (
          				    <ListItem button key={animationNames} alignItems={'flex-start'}>
          				        <ListItemText primary={animationNames} />
          				        <CustomizedSlider upDateAnime={(number) => props.functionAnime(number, index)} />
          				    </ListItem>
          				))}
        			</List>
      			</div>
    		</Drawer>
    		<Toolbar />
		</div>
);
}