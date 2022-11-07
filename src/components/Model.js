import React, { Component } from "react";
import "./Model.css";
import { connect } from "react-redux";

class Model extends Component {
  render() {
    const {
      topclothes,
      botclothes,
      hairstyle,
      handbags,
      necklaces,
      shoes,
      background,
    } = this.props.model;
    return (
      <div
        className="contain"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div
          className="body"
          style={{ backgroundImage: "url(images/allbody/bodynew.png" }}
        />
        <div
          className="model"
          style={{ backgroundImage: "url(images/model/1000new.png" }}
        />
        <div
          className="bikinitop"
          style={{ backgroundImage: "url(images/allbody/bikini_branew.png" }}
        />
        <div
          className="bikinitop top-cloth"
          style={{ backgroundImage: `url(${topclothes})` }}
        />
        <div
          className="bikinibottom"
          style={{ backgroundImage: "url(images/allbody/bikini_pantsnew.png" }}
        />
        <div
          className="bikinitop bot-cloth"
          style={{ backgroundImage: `url(${botclothes})` }}
        />
        <div
          className="feetleft"
          style={{
            backgroundImage: "url(images/allbody/feet_high_leftnew.png",
          }}
        />
        <div
          className="feetright"
          style={{
            backgroundImage: "url(images/allbody/feet_high_rightnew.png",
          }}
        />
        <div className="shoes" style={{ backgroundImage: `url(${shoes})` }} />
        <div
          className="hairstyle"
          style={{ backgroundImage: `url(${hairstyle})` }}
        />
        <div
          className="handbag"
          style={{ backgroundImage: `url(${handbags})` }}
        />
        <div
          className="necklace"
          style={{ backgroundImage: `url(${necklaces})` }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    model: state.model.model,
  };
};

export default connect(mapStateToProps)(Model);
