import React, { Component } from "react";
const listGlasses = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    image: "./images/v1.png",
    decription:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    detail: './images/n1.jpg'
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    image: "./images/v2.png",
    decription:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    detail: './images/n2.jpg'
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    image: "./images/v3.png",
    decription:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    detail: './images/n3.jpg'
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    image: "./images/v4.png",
    decription:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    detail: './images/n4.jpg'
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    image: "./images/v5.png",
    decription:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    detail: './images/n5.jpg'
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    image: "./images/v6.png",
    decription:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    detail: './images/n6.jpg'
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    image: "./images/v7.png",
    decription:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    detail: './images/n7.jpg'
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    image: "./images/v8.png",
    decription:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    detail: './images/n8.jpg'
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    image: "./images/v9.png",
    decription:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    detail: './images/n9.jpg'
  },
];
export default class AppFeature extends Component {
  state = {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    image: "./images/v9.png",
    decription:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    detail: './images/n9.jpg'
  };

  renderListproduct = () => {
    return listGlasses.map((glass) => {
      return (
        <div
          className="card col-4 mt-5 mx-5"
          style={{ boxShadow: "8px -1px 37px -1px rgba(0,0,0,0.75)" }}
          key={glass.id}
        >
          <h3 className="card-title mt-2 text-center">{glass.name}</h3>
          <div className="card-body">
            <img src={glass.image} alt="" style={{ width: "100%" }} />
            <h4 className="mt-2">Price:{glass.price} $</h4>
            <a href="#product_detail">
            <button
              className="btn btn-primary mt-3 mx-auto d-block text-center mx-auto mb-2"
              onClick={() => {
                this.setState({
                  name: glass.name,
                  price: glass.price,
                  image: glass.image,
                  decription: glass.decription,
                  detail: glass.detail
                });
                
              }}
            >
              View detail
            </button>
            </a>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <nav className="list_title fs-4 mt-2">List Glasses:</nav>
        <div className="list_product">
          <div className="row">
            <div className="col-6">
              <div className="row">{this.renderListproduct()}</div>
            </div>
            <div className="col-4 mt-4">
              <img id="product_detail" src={this.state.detail} alt="..." style={{width:'100%'}} />
              {/* <img src={this.state.image} alt="" /> */}
              <div className="card">
              <h3 className="text-center">Product name: <span className="fs-5 text-danger fw-bold">{this.state.name}</span></h3>
              <div className="card-body">
                <p className="fs-3">Price: <span className="fs-5 text-danger fw-bold">{this.state.price} $</span></p>
                <p className="fs-3">Decription: <span className="fs-5 text-danger fw-bold">{this.state.decription} </span></p>
              </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
