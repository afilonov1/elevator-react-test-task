import {useEffect, useState} from "react";
import {TStyle} from "./types";

function useQueue() {
  const [isMoving, setIsMoving] = useState(false);
  const [queue, setQueue] = useState<Array<number>>([]);
  const [currentFloor, setCurrentFloor] = useState(1);
  const [customStyle, setCustomStyle] = useState<TStyle>({transform: `translateY(0vh)`, transition: `1s linear`});


  useEffect(() => {
    let floorTo: number | undefined;
    if (!isMoving && queue.length !== 0) {
      floorTo = queue[0];
    }
    if (floorTo !== undefined) {
      const timeToMove = Math.abs(floorTo - currentFloor);
      setCurrentFloor(floorTo);
      setCustomStyle({transform: `translateY(-${(floorTo - 1) * 19}vh)`, transition: `${timeToMove}s linear`});
      setIsMoving(true);
      const [, ...withoutFirst] = queue;
      setQueue(withoutFirst);
      setTimeout(() => {
        setIsMoving(false);
      }, 3000 + timeToMove * 1000)
    }
  }, [queue, isMoving]);
  return {
    queue,
    setQueue,
    currentFloor,
    customStyle
  }
}

export default  useQueue;
