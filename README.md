# Initial Git Process

- $ git remote add origin https://github.com/learn-academy-2022-charlie/cat-tinder-frontend-instructors-charlean-austin-sarah.git
- $ git checkout -b main
- $ git add .            
- $ git commit -m "Initial commit"
- $ git push origin main
- $ yarn add bootstrap
- $ yarn add reactstrap 
- $ yarn add react-router-dom@5.3.0

## Upgrade react-router-dom
- $ yarn remove react-router-dom
- $ yarn add react-router-dom@5.3.3

### Cat Tinder Create 6/29/2022
#### The work flow --- Create a test that will verify that the CatNew page has a form and a heading.
Trello---As a developer, I have test coverage on my new page.
- Bring in test dependencies from jest enzyme
- write test 
``` javascript
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
})
```
- $ yarn test
- Good failure if all tests appear.
#### The work flow --- Add a form and a heading on the CatNew page.
Trello---As a user, I can fill out a form to add a new cat.
- copy code for form and button from reactstrap.github.io
```javascript
<Form>
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
    />
  </FormGroup>
    <Button>
    Submit
  </Button>
</Form>
```
- import all the tags from Reactstrap
```javascript
  import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
```
- Update the form to reflect the input fields for cat's name, age, enjoys, image
- Add the h3 heading as shown on the test
- Remove id attribute from the Input component
```javascript
    return (
      <>
      <h3>Tell us about that fur!</h3>
      <Form>
        <FormGroup>
          <Label for="name">
            Name
          </Label>
          <Input
            name="name"
            placeholder="What is your name?"
            type="text"
          />
        </FormGroup>
        <Button>
          Add that Feline
        </Button>
      </Form>
      </>
    )
```
- Verify the tests passed
- Ctrl + C to stop the tests from auto-running
- A form with the 4 input fields should appear on the CatNew page in the browser
#### The work flow --- Transform CatNew page into a logic component.
Trello---As a developer, I can store the cat object in state
- Constructor method with a state object under the class component. We will also include a nested object that will store the input data for our cats
```javascript
  constructor(props){
    super(props)
    this.state = {
      newCat: {
        name: "",
        age: "",
        enjoys: "",
        image: ""
      }
    }
  }
```
- Collect info with a custom method and event listener. The method will initially just print out the event object produced by the event listener
```javascript
handleChange = (e) => { 
  console.log(e)
}
```
Each input will receive an `onChange` event listener.
```javascript
  <Input
    name="age"
    placeholder="What is your age?"
    type="text"
    onChange={this.handleChange}
  />
```
- update the handleChange() to reflect the e.target.name and e.target.value
- update handleChange() to change the appropriate keys in state with destructuring the newCat object from state, dynamically sharing the key:value pairs, 
  ```javascript
  handleChange = (e) => {
    let { newCat } = this.state
    newCat[e.target.name] = e.target.value
    this.setState({newCat: newCat})
  }
  ```
- Add a `value` attribute to the input field to ensure what the user types is showing visually on the form
```javascript
  <Input
    name="age"
    placeholder="What is your age?"
    type="text"
    onChange={this.handleChange}
    value={this.state.newCat.age}
  />
```
#### The work flow --- Pass info to App.js
Trello---As a developer, I can pass the cat object to App.js on submit and see the cat object logged in the console.
- Create a function on App.js that takes in an argument and prints that out.
```javascript
  createCat = (cat) => {
    console.log("Cat has been created", cat)
  }
```

- Make function available to child component
```javascript
  <Route
    path="/catnew"
    render={(props) => <CatNew createCat={this.createCat} />}
  />
```
- Access the createCat() in CatNew.js by creating a function that calls upon createCat() and passes the newCat object 
```javascript 
handleSubmit = () => {
  this.props.createCat(this.state.newCat)
}
```
- Update the submit button to trigger the handleSubmit()
```javascript
  <Button onClick={this.handleSubmit} name='submit'>
    Add a Cat
  </Button> 
```
#### The work flow --- Redirect CatNew page to the CatIndex page after submitting cat info
Trello---As a user, I can be routed to the index page after I submit the new cat form.
- react-router import
```javascript
import { Redirect } from 'react-router-dom'
```
- Set the condition to be met that will allow a redirect. Initial state ---> submitted: false 
- Use handleSubmit() to update submitted to true when a submission is made
- JavaScript code at the bottom of the JSX that will redirect when submitted is true
```javascript
{this.state.submitted && <Redirect to="/catindex" />}
```

## Fetch

- Fetch a method to request from the front end to grab data from the backend
- Fetch has a promise - pending, fulfilled/resolved, rejected
- Fetch method will be placed on the front end (react). It will be matched with a controller method on the backend (rails).

> CRUD Action ---> controller method

> Create ---> Create

> Read ---> Index

> Update ---> Update

> Delete ---> Destroy

