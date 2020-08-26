import React from "react";

function DrumKey(props) {
  const keys = props.keys.map((key, index) => (
    <div className="key" key={index}>
      {key}
    </div>
  ));
  return <div className="group-keys">{keys}</div>;
}

export default DrumKey;
