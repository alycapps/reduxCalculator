const initialState = {
    numbers: [7,8,9,4,5,6,1,2,3],
    operators: ["/","x","-","+"],
    display: "",
    num1: 0,
    num2: 0,
    operatorChosen: false,
    operator: "",
    answerCalculated: false
}

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;