initialState= {
    personData: {},
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
      case "setPersonData": 
        return { ...state, personData: action.value };
      default: 
        return state;
    }
  }

export default reducer