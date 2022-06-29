// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import CatNew from './CatNew.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When CatNew Renders", () => {

  let catNewRender
  beforeEach(() => {
    catNewRender = shallow(<CatNew />)
  })
  it("displays a heading", ()=>{
    const catNewHeading = catNewRender.find("h3")
    expect(catNewHeading.length).toEqual(1)
    expect(catNewHeading.text()).toEqual("Tell us about that fur!")
  })
  it("displays a form", ()=>{
    const catNewForm = catNewRender.find("Form")
    expect(catNewForm.length).toEqual(1)
  })
  it("displays an input for cat name", ()=>{
    const catNewNameInput = catNewRender.find('[name="name"]')
    expect(catNewNameInput.length).toEqual(1)
  })
  it("displays an input for cat age", ()=>{
    const catNewAgeInput = catNewRender.find('[name="age"]')
    expect(catNewAgeInput.length).toEqual(1)
  })
  it("displays an input for cat enjoys", ()=>{
    const catNewEnjoysInput = catNewRender.find('[name="enjoys"]')
    expect(catNewEnjoysInput.length).toEqual(1)
  })
  it("displays an input for cat image", ()=>{
    const catNewImageInput = catNewRender.find('[name="image"]')
    expect(catNewImageInput.length).toEqual(1)
  })      
})