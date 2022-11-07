const initialState = {
  model: {
    topclothes: "images/clothes/topcloth2.png",
    botclothes: "images/clothes/botcloth1.png",
    hairstyle: "images/hairstyle/hairstyle1.png",
    handbags: "images/handbags/handbag1.png",
    necklaces: "images/necklaces/necklace1.png",
    shoes: "images/shoes/shoes1.png",
    background: "images/background/background1.jpg",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_ITEM": {
      const newModel = { ...state.model };
      newModel[action.payload.type] = action.payload.url;
      console.log(newModel);
      return { ...state, model: newModel };
    }
    default:
      return state;
  }
};

export default reducer;
