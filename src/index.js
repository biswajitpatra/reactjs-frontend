import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import App from './App';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CardField from './Components/commentBox';
import Container from '@material-ui/core/Container';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    // backgroundColor: theme.palette.background.orange,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    // backgroundColor: theme.palette.background.orange,
  },
  drawerPaper: {
    width: drawerWidth,
    bgcolor: theme.palette.background.orange,
  },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));


function Main_page(){
    const classes = useStyles();
    return (
      <div className={classes.root}>
      <CssBaseline />
      <BrowserRouter>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {[['Page_1', <InboxIcon /> ],['Page_2', <MailIcon /> ]].map(([text,icon], index) => (
            <ListItem button component={Link} key={text} to={'/'+text}>
              <ListItemIcon> {icon} </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <Switch>
            <Route exact path="/" render={() => <App/>} />
            <Route path="/Page_1" render={() => <App/>} />
            <Route path="/Page_2" render={() => <Container><CardField/></Container>} />
        </Switch>
      </main>
      </BrowserRouter>
    </div>
    )
}


ReactDOM.render(
  <React.StrictMode>
    <Main_page/>
  </React.StrictMode>,
  document.getElementById('root')
);

