import React, { Profiler } from "react";
import Directory from "../../components/directory/directory.component";

export const HomePage = () => {
  return (
    <div className="homepage">
      <Profiler
        id="directory"
        onRender={(id, phase, actualDuration) =>
          console.log({
            id,
            phase,
            actualDuration,
          })
        }
      >
        <Directory />
      </Profiler>
    </div>
  );
};

export default HomePage;
