import React ,{useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {withRouter, Route, Link,Switch} from 'react-router-dom'
import NotFound from './NotFound'
import Country from '../components/country'
import Main from './main'
import Countries from '../components/countries'
import '../App.css'
import {contextProv} from '../components/Contex'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    // background:'#27e16a'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {onChange, lightMode, bright, darkMode} = useContext(contextProv)

  const mode = bright ? lightMode.backgroundColor : darkMode.backgroundColor

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <div >
      <div className={classes.toolbar} style={{background:mode}} />
      <Divider />
      <List>
        {['Today', 'Total'].map((text, index) => (
          <Link to={`/countries/${text}`} key={index} onClick={()=>setMobileOpen(false)}  style={{textDecoration:'none', color:'black'}} >
            <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <div className='mode flex'>
      <input type='checkbox' id='check' className='checkbox' onChange={onChange} />
        <label htmlFor='check' className='lab'>
          <div className='ball'></div>
        </label>
      </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{background:mode}} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            CV-19 Tracker
          </Typography>
          <Typography style={{marginLeft:'auto'}}>
            {props.countryName}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders" style={{background:mode}} >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css" >
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content} style={{minHeight:'85vh'}}>
        {props.load ? 
        <div>
           <div className={classes.toolbar} />
              <Switch>
                <Route path='/' exact>
                  {props.summary && 
                    <Main 
                      summary={props.summary}
                       lat={props.lat} lng={props.lng} 
                       countryName ={props.countryName}
                     />
                  }
                </Route>
                <Route path='/country/:id' exact >
                  <Country text='hello text' />
                </Route>
                <Route path='/countries/:id' exact>
                  <Countries/>
                </Route>
                <Route path='/'>
                  <NotFound/>
                </Route>
              </Switch>
        </div> : (
          <div className="loadingio-spinner-ripple-vd60cwl09kl">
            <div className="ldio-9mvq2pbmqli">
             <div>
               </div>
               
               <div>

              </div>
            </div>
          </div>
        )
        }
      </main>
    </div>
  );
}

export default withRouter(ResponsiveDrawer);