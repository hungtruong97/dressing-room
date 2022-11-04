import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { imgSrc_jpg, name } = this.props.item;
    return (
      <div>
        <div className="card p-2 mb-3">
          <img src={imgSrc_jpg} alt="" />
          <h3>{name}</h3>
          <button className="btn btn-info">Try it on</button>
        </div>
      </div>
    );
  }
}
