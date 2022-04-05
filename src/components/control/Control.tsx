import React from "react";
import Search from "../search/Search";
import Sort from "../sort/Sort";
import "./control.scss";

interface IControl {
  setSort: React.Dispatch<
    React.SetStateAction<{
      name: string;
      order: string;
    }>
  >;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const Control: React.FC<IControl> = (props) => {
  const { setSort, setKeyword } = props;
  return (
    <div className="control">
      <Search setKeyword={setKeyword} />
      <Sort setSort={setSort} />
    </div>
  );
};

export default Control;
