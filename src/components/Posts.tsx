import React, { useReducer } from "react";
import * as bl from "react-bulma-components";
import { InitialState  } from "../scripts/scripts"


const Posts = () => {
  return (
    <div>
      <p>{InitialState.count}</p>
    </div>
  );
};

export default Posts;
