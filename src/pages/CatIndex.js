import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
  render() {
    // destructure cats from props
    const { cats } = this.props
    // console.log("INDEX", cats)
    return (
      <>
        <div className="page-body">
          <h3>Here's all the cats</h3>
          <div className="index-cards">
            {cats && cats.map((cat, index) => {
              return (
                <Row key={cat.id}>
                  <Col sm="6">
                    <Card body key={index}>
                      <CardImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUfz0A8uwkUS6y0p-RXL3L1jOIuB7bzI-y96qKWaDnbRIDcJ5-TOAy_ERYyd4PkqHowgk&usqp=CAU" />
                      <CardBody>
                        <CardTitle>Hi, my name is {cat.name}</CardTitle>
                        <CardSubtitle>{cat.age}</CardSubtitle>
                        <NavLink to={`/catshow/${cat.id}`}>
                          <Button>More info here</Button>
                        </NavLink>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              )})
            }
          </div>
        </div>
      </>
    )
  }
}
export default CatIndex