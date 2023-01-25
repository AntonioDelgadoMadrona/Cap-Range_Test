// DEPENDENCIES
import React from "react";

// COMPONENTS
import Range from "./range/range.component";

function App() {
  return (
    <div>
      <Range
        min={1}
        max={1000.0}
        mode="normal"
        onChange={(prop1, prop2) =>
          console.log(prop1.toFixed(2), prop2.toFixed(2))
        }
        // fixedValues={[1.99, 5.99, 10.99, 30.99, 50.99, 70.99]}
      />
    </div>
  );
}

export default App;
