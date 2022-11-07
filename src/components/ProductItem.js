import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItem extends Component {
  render() {
    const {
      handleSelectedItem,
      item: { imgSrc_jpg, name, imgSrc_png, type },
    } = this.props;
    return (
      <div>
        <div className="card p-2 mb-3">
          <img src={imgSrc_jpg} alt="" />
          <h3>{name}</h3>
          <button
            className="btn btn-info"
            onClick={() => handleSelectedItem(imgSrc_png, type)}
          >
            Try it on!
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectedItem: (url, type) => {
      dispatch({
        type: "CHANGE_ITEM",
        payload: { url, type },
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
