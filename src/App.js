import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
// import mockCats from './mockCats.js'
import './App.css'

 class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: []
    }
  }

  // react life cycle method that will automatically run the custom methods
  componentDidMount() {
    this.readCat()
  }

  // matches with the index controller from backend
  readCat = () => {
    fetch("http://localhost:3000/cats")
    .then(response => response.json())
    .then(catsArray => this.setState({cats: catsArray}))
    .catch(errors => console.log("Cat read errors:", errors))
  }

  createCat = (newCat) => {
    fetch("http://localhost:3000/cats", {
          // converting an object to a string
      body: JSON.stringify(newCat),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "POST"
    })
    .then(response => response.json())
    // use the payload to set the state of the cat Array
    .then(payload => this.readCat())
    .catch(errors => console.log("Cat read errors:", errors))
  }

  updateCat = (editCat) => {
    console.log("Cat has been updated", editCat)
  }

  deleteCat = (catId) => {
    console.log("Cat has been deleted", catId)
  }

  render() {
    console.log(this.state.cats)
    return (

      <Router>
        <Header/>
        <h1>Welcome to Cat Tinder </h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catindex" render={(props)=><CatIndex cats={this.state.cats}/>}/>
          <Route path="/catshow/:id" render= {(props)=>{
            //create two variables to identify and pass a cat into the show route
            let id = props.match.params.id
            let cat = this.state.cats.find((catObject)=> catObject.id == id)
            return <CatShow cat={cat} deleteCat={this.deleteCat}/>
          }} />
          <Route 
            path="/catnew" 
            render={(props) => <CatNew createCat={this.createCat}/> } 
          />
          <Route
            path="/catedit/:id"
            render={(props) => {
              let id = props.match.params.id
              let cat = this.state.cats.find(c => c.id === +id)
              return <CatEdit cat={cat} updateCat={this.updateCat } id={id} />
            }}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer/>
      </Router>

    )
  }
}
export default App