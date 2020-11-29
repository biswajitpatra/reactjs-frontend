import React, { useState } from 'react';
import { fade,makeStyles,useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add'
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import ButtonBase from '@material-ui/core/ButtonBase';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line,Legend
} from 'recharts';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

const drawerWidth = 240;

const data = [
  {
     uv: 4000, pv: 2400, amt: 2400,
  },
  {
      uv: 3000, pv: 1398, amt: 2210,
  },
  {
     uv: 2000, pv: 9800, amt: 2290,
  },
  {
     uv: 2780, pv: 3908, amt: 2000,
  },
  {
     uv: 1890, pv: 4800, amt: 2181,
  },
  {
     uv: 2390, pv: 3800, amt: 2500,
  },
  {
     uv: 3490, pv: 4300, amt: 2100,
  },
  {
    uv: 4000, pv: 2400, amt: 2400,
 },
 {
     uv: 3000, pv: 1398, amt: 2210,
 },
 {
    uv: 2000, pv: 9800, amt: 2290,
 },
 {
    uv: 2780, pv: 3908, amt: 2000,
 },
 {
    uv: 1890, pv: 4800, amt: 2181,
 },
 {
    uv: 2390, pv: 3800, amt: 2500,
 },
 {
    uv: 3490, pv: 4300, amt: 2100,
 },
];



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    bgcolor: theme.palette.background.orange,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    marginLeft: 0,
    width: '60%',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: '100%',
  },
  cardroot:{
    borderRadius:'15px',
  },
  fab:{
    position: 'inherit',
  },
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  let query="";
  const [note_data,noteset] = useState(["Lorem ipsum dolor sit amet, consectetur adipi","Lorem ipsum dolor sit amet, consectetur adipi","Lorem ipsum dolor sit amet, consectetur adipi","Lorem ipsum dolor sit amet, consectetur adipi","Lorem ipsum dolor sit amet, consectetur adipi"]); 
  return (

        <>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        
        
        <Grid container spacing={5} style={{paddingTop:20}}>
          <Grid item xs={9}>
            <Box>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card classes={{
                      root:classes.cardroot,
                    }}>
                      <Grid
                      container 
                      direction="row"
                      alignItems="stretch"
                      spacing={0}
                      >
                        <Grid item xs={10}>
                        <Card   >
                          <CardHeader title="Sales Report September 2020"/>
                          <CardContent>
                          <LineChart
                              width={1000}
                              height={300}
                              data={data}
                              margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                              }}
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                          </CardContent>
                        </Card>
                        </Grid>
                        <Grid item xs={2}>  
                            <Card>
                              <CardHeader title="17 Sep"/>
                              <CardContent>
                                <Grid container
                                 alignItems="center"
                                 spacing={3}>
                                   <Grid item xs>
                                     <Box my={4}>
                                      <Card>
                                        <CardContent>
                                            <Typography>$1,204.33</Typography>
                                            <Typography color="textSecondary">Revenue</Typography>
                                        </CardContent>
                                      </Card>
                                      </Box>
                                   </Grid>
                                   <Grid item xs>
                                     <Box my={4}>
                                      <Card>
                                        <CardContent>
                                            <Typography>$1,204.33</Typography>
                                            <Typography color="textSecondary">Revenue</Typography>
                                        </CardContent>
                                      </Card>
                                      </Box>
                                   </Grid>
                                </Grid>
                              </CardContent>
                            </Card>
                        </Grid>
                      </Grid>
                    </Card>
                </Grid>
                <Grid item xs={4} style={{fontSize:14}}>
                    <Card classes={{
                          root:classes.cardroot,
                        }}>
                    <CardHeader title="Notepad"/>
                    <CardContent >
                    <Grid container direction="column" justify="space-around" wrap="nowrap" >
                      {note_data.map((ele)=>(
                        <Grid item ><b>Title</b> {ele}</Grid>
                      ))}
                    </Grid>
                    <Grid   container
                          direction="row"
                          justify="space-between"
                          alignItems="center">
                    <Grid item>        
                    <TextField id="standard-basic" label="Input" onChange={e1=>query=e1.target.value}/>
                    </Grid>
                    <Grid item>
                    <Fab aria-label={'Add'} className={classes.fab} color={'primary'} ml={3} onClick={()=>{noteset(note_data.concat(query))}}>
                        <AddIcon/>
                    </Fab>
                    </Grid>
                    </Grid>
                    </CardContent>  
                    </Card>
                </Grid>
                <Grid item xs={4} style={{fontSize:5}}>
                  <Box my={3}>
                    <Card classes={{root:classes.cardroot}}>
                      <AreaChart
                          width={305}
                          height={204}
                          data={data}
                          margin={{
                            top: 10, right: 0, left: 0, bottom: 0,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Area type="monotone" dataKey="amt" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </Card>
                  </Box>
                  <Box my={3}>
                  <Card classes={{root:classes.cardroot}}>
                      <CardContent>
                      <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        >
                        <Grid item ><Typography >inbox</Typography></Grid>
                        <Grid item style={{fontSize:25}}>23</Grid>
                      </Grid>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>

                <Grid item xs={2}>
                    <Box my={3}>
                      <Card classes={{root:classes.cardroot}}>
                          <CardHeader title="This month" titleTypographyProps={{variant:'body2' }}/>
                          <Divider/>
                          <CardContent>
                          <Grid container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            >
                          <Grid item style={{fontSize:20}}>+7.8%</Grid>
                          <Grid>
                              <LineChart width={70} height={50} data={data}>
                                <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
                              </LineChart>
                          </Grid>
                          </Grid>
                          </CardContent>
                      </Card>
                    </Box>
                    <Box my={3}>
                      <Card classes={{root:classes.cardroot}}>
                          <CardHeader title="This month" titleTypographyProps={{variant:'body2' }}/>
                          <Divider/>
                          <CardContent>
                          <Grid container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            >
                          <Grid item style={{fontSize:20}}>+61.8%</Grid>
                          <Grid>
                              <LineChart width={70} height={50} data={data}>
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                              </LineChart>
                          </Grid>
                          </Grid>
                          </CardContent>
                      </Card>
                      </Box>
                </Grid>

              </Grid>
            </Box>
          </Grid>
          <Grid item xs={3}>
              <Card>
              <Tabs
                  indicatorColor="primary"
                  textColor="primary"
                  value={0}
                  // onChange={handleChange}
                  aria-label="disabled tabs example"
                  centered
                >
                  <Tab label="Notifications" index={0}/>
                  <Tab label="Events" index={1}/>
                </Tabs>
                <CardContent>
                  {
                    Array.apply(null,{length:7}).map((e,i)=>(<Box my={1}>
                              <Grid container spacing={1}>
                                    <Grid item>
                                      <ButtonBase className={classes.image}>
                                        <img className={classes.img} style={{height:45,width:45,padding:5}} alt="complex" src="https://assets.vogue.com/photos/589162067edfa70512d64044/1:1/w_280,h_280,c_limit/4-pink-paint1.jpg" />
                                      </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                      <Grid item xs container direction="column" spacing={0}>
                                        <Grid item xs>
                                          <Typography gutterBottom variant="body2">
                                            Teacher
                                          </Typography>
                                          <Typography variant="body2" color="textSecondary" variant="body1">
                                            Your Faculty uploaded the syllabus.
                                          </Typography>
                                        </Grid>
                                        <Grid item>
                                          <Typography variant="body2" color="textSecondary" variant="caption">
                                            3 minutes ago
                                          </Typography>
                                        </Grid>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Divider/>
                    </Box>))
                  }
                </CardContent>
              </Card>
          </Grid>
        </Grid>
        
      </>
  );
}
