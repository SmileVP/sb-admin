import { Actions } from "./action";

// setting the initialValues
export let initialValues = {
  data: [],
};

export function TodoReducer(state, action) {
  switch (action.type) {

    case Actions.ADD:
      var newData = [...state.data]; //to get the old data
      newData.push({
        //pushing the new data
        name: action.payload,
        completed: false,
      });

      return { ...state, data: newData };

    case Actions.CHANGE:
      var newData = [...state.data];//to get the old data

      //to reverse the completed value
      newData[action.payload.index].completed = action.payload.completed;
      return { ...state, data: newData };

    case Actions.CLEAR:
      return initialValues;
      
    default:
      return initialValues;
  }
}
