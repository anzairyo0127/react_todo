import React from "react";
import * as Bl from "react-bulma-components";

import Posts from "./Posts";

const Mains = () => {
  const mains = { posts: <Posts /> };
  return <Bl.Columns.Column size={10}>{mains["posts"]}</Bl.Columns.Column>;
};

export default Mains;
