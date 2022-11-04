import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  render() {
    return (
      <div className="row">
        {this.props.productList.map((item) => {
          return (
            <div key={item.id} className="col-4">
              <ProductItem item={item} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productList: state.product.products,
  };
};

export default connect(mapStateToProps)(ProductList);
