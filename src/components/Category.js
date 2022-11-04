import React, { Component } from "react";
import { connect } from "react-redux";

class Category extends Component {
  render() {
    return (
      <div className="btn-group d-flex justify-content-center mb-3">
        {this.props.categoryList.map((item) => {
          return (
            <button key={item.tabName} className="btn btn-secondary">
              {item.showName}
            </button>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categoryList: state.category.categories,
  };
};

export default connect(mapStateToProps)(Category);
