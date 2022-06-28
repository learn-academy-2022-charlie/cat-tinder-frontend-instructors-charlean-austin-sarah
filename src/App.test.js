// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import App from './App.js'
import Home from './pages/Home'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

// describe takes two arguments 
describe("When App.js renders to the user", ()=>{
  let appRender
  beforeEach(()=>{
    appRender= shallow(<App />)
  })
  it("it displays a header and a footer", ()=>{
    // const appRender = shallow(<App/>)
    const appHeaderRender = appRender.find("Header")
    expect(appHeaderRender.length).toEqual(1)
  })
  it("it displays a footer", () => {
    // const appRender = shallow(<App />)
    const appFooterRender = appRender.find("Footer")
    expect(appFooterRender.length).toEqual(1)
  })
  it("it provides a path to the home component", ()=>{
    // .find() attribute syntax ('[]')
    const renderedHomePath = appRender.find('[path="/"]')
    // .debug()/ .props() allows us to look at the rendered element more clearly to assert on different attributes or facets the element may contain
    console.log("debug", renderedHomePath.debug())
    console.log("props", renderedHomePath.props())
    console.log("Props with component called as a key using dot notation", renderedHomePath.props().component)


    expect(renderedHomePath.length).toEqual(1)
    // home as a component variable must be imported for this assertion to work.
      // this is different from a component call
    expect(renderedHomePath.props().component).toEqual(Home)
  })
})