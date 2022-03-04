import React, {FC} from "react";
import Elevator from "../elevator/elevator";
import useQueue from "../../useQueue";




const ElevatorShaft: FC = () => {
  const {
    queue,
    setQueue,
    currentFloor,
    customStyle
  } = useQueue();

  const clickHandle = (floorTo: number) => {
    return function () {
      if (!queue.includes(floorTo) && floorTo !== currentFloor) {
        setQueue([...queue, floorTo])
      }
    }
  }

  return (
    <div className="container">
      <div className="shaft">
        <Elevator floor={currentFloor} customStyle={customStyle} />
      </div>
      <section className="buttons">
        <div className="button-wrapper">
          <button onClick={clickHandle(1)}>1</button>
        </div>
        <div className="button-wrapper">
          <button onClick={clickHandle(2)}>2</button>
        </div>
        <div className="button-wrapper">
          <button onClick={clickHandle(3)}>3</button>
        </div>
        <div className="button-wrapper">
          <button onClick={clickHandle(4)}>4</button>
        </div>
        <div className="button-wrapper">
          <button onClick={clickHandle(5)}>5</button>
        </div>
      </section>
    </div>
  )
}
export default ElevatorShaft;
