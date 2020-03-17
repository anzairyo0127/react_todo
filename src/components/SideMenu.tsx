import React, { useState, useReducer } from "react";

import * as Bl from "react-bulma-components";

import { InitialState, testValue } from "../scripts/scripts";

const SideMenu = () => {
  const classes = ["sideMenu", "is-fullheight", "is-hidden-mobile"].join(" ");
  const [state, dispatch] = useReducer(testValue, InitialState);
  return (
    <Bl.Columns.Column size={2}>
      <Bl.Menu className={classes}>
        <Bl.Menu.List title="Menu">
          <Bl.Menu.List.Item>Top</Bl.Menu.List.Item>
          <Bl.Menu.List.Item>Post</Bl.Menu.List.Item>
          <Bl.Menu.List.Item
            onClick={() => {
              dispatch({ type: "add" });
            }}
          >
            AddCount
          </Bl.Menu.List.Item>
          <Bl.Menu.List.Item>PiyoPiyo</Bl.Menu.List.Item>
        </Bl.Menu.List>
      </Bl.Menu>
    </Bl.Columns.Column>
  );
};

export default SideMenu;
