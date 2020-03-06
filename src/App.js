import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
//Components
import Navbar from './components/Navbar';
//Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

const theme = createMuiTheme({
  spacing: 1,
  palette: {
    primary: {
      light: '#388e3c',
      main: '#2e7d32',
      dark: '#1b5e20',
      contrastText: '#fff',
    },
    secondary: {
      light: '#7b1fa2',
      main: '#6a1b9a',
      dark: '#4a148c',
      contrastText: '#fff',
    },
  },
  typography: {
    useNextVariants: true
  },
  form: {
    textAlign: 'center',
  },
  image: {
      maxWidth: '100px',
      margin: '20px auto',
  },
  pageTitle: {
      margin: '10px auto'
  },
  textField: {
      margin: '10px auto'
  },
  button: {
      marginTop: '10px',
      position: 'relative'
  },
  customError: {
      color: 'red',
      fontSize: '0.8rem',
  },
  progress: {
      position: 'absolute'
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <div className="container">
              <Navbar />
              <Switch>
                <Route exact path="/" component={home}/>
                <Route exact path="/login" component={login}/>
                <Route exact path="/signup" component={signup}/>
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

//4:44:00
