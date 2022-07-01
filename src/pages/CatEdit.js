import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatEdit extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: this.props.cat ? this.props.cat.name : "",
        age: this.props.cat ? this.props.cat.age : "",
        enjoys: this.props.cat ? this.props.cat.enjoys : "",
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }

  handleSubmit = () => {
    this.props.updateCat(this.state.form, this.props.id)
    this.setState({submitted: true})
  }
  render() {
    
    return (
      <div className="page-body">
        <h3>Update Cat Information</h3>
        <Form>
          <FormGroup>
            <Label for="name">
              Cat's Name
            </Label>
            <Input
              name="name"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">
              Cat's Age
            </Label>
            <Input
              name="age"
              type="number"
              min="0"
              max="20"
              onChange={this.handleChange}
              value={this.state.form.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">
              Cat's Hobbies and Enjoyment
            </Label>
            <Input
              name="enjoys"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.enjoys}
            />
          </FormGroup>
          <Button
            onClick={this.handleSubmit}
            name="submit"
          >
            Update Cat
          </Button>
        </Form>
        {this.state.submitted && <Redirect to={`/catshow/${this.props.cat.id}`} />}
      </div>
    )
  }

}
export default CatEdit