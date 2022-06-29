import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
  render() {
    // destructer cats from props
    const { cats } = this.props
    console.log("INDEX", cats)
    return (
      <>
        <h3>Here's all the cats</h3>
        {cats && cats.map((cat, index) => {
          return (
          <Card key={index}>
            <CardImg top width="100%" src="" />
            <CardBody>
              <CardTitle>Hi, my name is {cat.name}</CardTitle>
              <CardSubtitle>{cat.age}</CardSubtitle>
               <NavLink to={`/catshow/${cat.id}`}>
                <Button>More info here</Button>
               </NavLink>
            </CardBody>
          </Card>
          )
        })
        }
      </>
    )
  }
}
export default CatIndex