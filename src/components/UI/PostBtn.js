import React from "react";

const PostBtn = (props) => {
  return (
    <div>
      <button onClick={props.action}>{props.name}</button>
    </div>
  );
};

export default PostBtn;
