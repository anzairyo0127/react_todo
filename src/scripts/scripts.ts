interface IState {
  count: number
};

interface IAction {
  type: "add" | "dell"
};

export const InitialState:IState = {count:0}

export const testValue = (state:IState, action:IAction)=>{
  switch (action.type) {
    case "add":
      console.log(state.count)
      return { count: state.count + 1};
    case "dell":
      return { count: state.count - 1};
    default:
      return { count: state.count };
  };
};
