import React from "react";
import ShapeLine from "./shapeLine";

function ExampleShapeLine() {
  return (
    <div>
      <h1>Icon Size Examples</h1>
      <ShapeLine size="small" color="#2F80ED" /> {/* Small Icon */}
      <ShapeLine size="medium" color="#27AE60" /> {/* Medium Icon */}
      <ShapeLine size="large" color="#E2B93B" /> {/* Large Icon */}
      <ShapeLine size="xlarge" color="#EB5757" /> {/* XLarge Icon */}
      <ShapeLine size="xxlarge" color="#092C4C" /> {/* XXLarge Icon */}
    </div>
  );
}

export default ExampleShapeLine;
