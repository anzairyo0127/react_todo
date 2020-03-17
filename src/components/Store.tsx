import React from "react";

import * as I from "../scripts/Interfaces";
import * as E from "../scripts/Enums";

export const initState: I.State = {
  todos: [],
  visibilityFilter: E.VisualFilter.SHOW_ALL
};

export const Store = React.createContext(initState);
// TODO:https://qiita.com/koralle/items/f4dc71de057bf1b3062a
