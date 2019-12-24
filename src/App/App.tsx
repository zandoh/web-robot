import React, { Fragment, useState } from "react";
import { GlobalStyles, AppWrapper, RoboCam, RoboStick } from "./styled";
import { Joystick } from "react-joystick-component";
import { IJoystickUpdateEvent } from "react-joystick-component/build/lib/Joystick";

const App: React.FC = () => {
  const [moving, setMoving] = useState(false);
  const [direction, setDirection] = useState("");
  const handleStart = (event: IJoystickUpdateEvent) => {
    console.log("Started ", event);
    setMoving(true);
  };
  const handleMove = (event: IJoystickUpdateEvent) => {
    console.log("Moved ", event);
    setMoving(true);
    setDirection(event.direction ?? "");
  };
  const handleStop = (event: IJoystickUpdateEvent) => {
    console.log("Stopped ", event);
    setMoving(false);
  };

  return (
    <Fragment>
      <GlobalStyles />
      <AppWrapper>
        <RoboCam src="https://via.placeholder.com/600x400" />
        <RoboStick>
          <Joystick
            baseColor={"#CCC"}
            stickColor={"#E2062C"}
            start={handleStart}
            throttle={500}
            move={handleMove}
            stop={handleStop}
          />
        </RoboStick>
        <code hidden={moving}>Robot is stopped</code>
        <code hidden={!moving}>Moving {direction}</code>
      </AppWrapper>
    </Fragment>
  );
};

export default App;
