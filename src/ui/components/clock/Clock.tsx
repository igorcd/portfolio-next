import { PropsWithClassName } from "@/core/interfaces/props-with-class-name";
import React, { useEffect, useRef, useState } from "react";
import { format } from "date-fns";

export default function Clock(props: PropsWithClassName) {
  const ONE_SECOND = 1000;
  const ONE_MINUTE = 60 * ONE_SECOND;

  const [time, setTime] = useState(new Date());
  const synchronized = useRef(false);

  function updateClock() {
    setTime(new Date());
  }

  useEffect(() => {
    if (!synchronized.current) return;
    console.log("CAIU AQUI");
    const timeout = setTimeout(() => {}, ONE_MINUTE);

    return () => clearTimeout(timeout);
  }, [time]);

  useEffect(() => {
    const today = new Date();
    const millisecondsToNextMinute =
      ONE_MINUTE - (today.getSeconds() * ONE_SECOND + today.getMilliseconds());

    // Set the initial timeout to sync with the start of the next minute
    const timeoutId = setTimeout(() => {
      synchronized.current = true;
      updateClock();
    }, millisecondsToNextMinute);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <p className={props.className}>
      {Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }).format(time)}
    </p>
  );
}
