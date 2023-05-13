import React, { Component } from "react";
const listGlasses = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    image: "./images/v1.png",
    decription:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    image: "./images/v2.png",
    decription:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    image: "./images/v3.png",
    decription:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    image: "./images/v4.png",
    decription:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    image: "./images/v5.png",
    decription:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    image: "./images/v6.png",
    decription:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    image: "./images/v7.png",
    decription:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    image: "./images/v8.png",
    decription:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    image: "./images/v9.png",
    decription:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
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
            <button className="btn btn-primary mt-3 mx-auto d-block text-center mx-auto mb-2" onclick={() => {
                // this.setState({
                //   name: glass.name,
                //   price: glass.price,
                //   image: glass.image,
                //   decription: glass.decription,
                // });
                console.log(123)
              }}>View detail</button>
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
              <img className="model_glasses" src="../images/model.jpg" alt="" />
              <img
                className="glasses"
                style={{ width: 250 }}
                src={this.state.image}
                alt=""
              />
              <br />
              <h3>
                Tên sản phẩm:{" "}
                <span className="text-success">{this.state.name}</span>
              </h3>
              <h3>
                Giá: <span className="text-success">{this.state.price}$</span>
              </h3>
              <h3>
                Mô tả sản phẩm:{" "}
                <span className="text-success">{this.state.decription}</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
