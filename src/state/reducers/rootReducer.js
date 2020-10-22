const initialState = {
  mainPageGreeting: "Hello Main Page!",
  secondPageGreeting: {
    title: "Hello Second Page!",
    body: "This is pretty cool right?"
  }
}

const rootReducer = (state = initialState) => {
  return state
}

export default rootReducer;