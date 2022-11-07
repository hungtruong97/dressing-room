import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  render() {
    const { productList, selectedTab } = this.props;
    let productFilter = productList.filter((item) => item.type === selectedTab);
    if (productFilter.length === 0) {
      productFilter = productList;
    }
    return (
      <div className="row">
        {productFilter.map((item) => {
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
    selectedTab: state.product.selectedTab,
  };
};

export default connect(mapStateToProps)(ProductList);
