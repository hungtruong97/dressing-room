import React, { Component } from "react";
import { connect } from "react-redux";

class Category extends Component {
  render() {
    const { categoryList, handleSelectedTab, selectedTab } = this.props;
    return (
      <div className="categories btn-group d-flex justify-content-center mb-3">
        {categoryList.map((item) => {
          return (
            <button
              key={item.tabName}
              className={
                item.type === selectedTab
                  ? "btn btn-secondary btn-light"
                  : "btn btn-secondary"
              }
              onClick={() => handleSelectedTab(item.type)}
            >
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
    selectedTab: state.product.selectedTab,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectedTab: (type) => {
      dispatch({
        type: "CHANGE_TAB",
        payload: type,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
