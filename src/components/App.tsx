import React from "react";
import * as Bl from "react-bulma-components";

import SideMenu from "./SideMenu";
import Mains from "./Mains";

const Page = () => {
  const columnsClasses = ["is-fullheight"].join(" ");
  return (
    <Bl.Columns className={columnsClasses}>
      <SideMenu />
      <Mains />
    </Bl.Columns>
  );
};

export default Page;
