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
import { NavLink } from 'react-router-dom'

class CatShow extends Component {
  render() {
    const { cat } = this.props
    // console.log("SHOW", cat);
    return (
      <>
        <div className="page-body">
          {cat && 
            <Card body className="card-show">
              <CardImg top width="100%" src={cat.image} />
              <CardBody>
                <CardTitle>Hi, my name is {cat.name}</CardTitle>
                <CardSubtitle>{cat.age}</CardSubtitle>
                <CardText>{cat.enjoys}</CardText>
                <NavLink to={`/catedit/${cat.id}`}>
                  <Button>Edit Cat Profile</Button>
                </NavLink>
                <br />
                <br />
                <NavLink to="/catindex">
                  <Button onClick={() => this.props.deleteCat(cat.id)}>
                    Delete Cat Profile
                  </Button>
                </NavLink>
              </CardBody>
            </Card>
          }
        </div>
      </>
    )
  }
}
export default CatShow