import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap'

class CatShow extends Component {
  render() {
    const { cat } = this.props
    console.log("SHOW", cat);
    return (
      <>
      {cat && 
            <Card >
              <CardImg top width="100%" src={cat.image} />
              <CardBody>
                <CardTitle>Hi, my name is {cat.name}</CardTitle>
                <CardSubtitle>{cat.age}</CardSubtitle>
                <CardText>{cat.enjoys}</CardText>
              </CardBody>
            </Card>
        }
      </>
    )
  }
}
export default CatShow