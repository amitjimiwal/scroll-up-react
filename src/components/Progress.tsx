import * as React from "react";
import { useEffect, useState } from "react";
type ProgressProps = {
  color1?: string;
  color2?: string;
  size?: string;
};
const Progress: React.FC<ProgressProps> = ({ color1, color2, size }) => {
  const [progress, setprogress] = useState<number>(
    document.documentElement.scrollTop
  );
  const [height, setHeight] = useState<number>(
    document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  );

  useEffect(() => {
    const onScroll = () => {
      let scrollheight = document.documentElement.scrollTop;
      setprogress((scrollheight / height) * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [progress, height]);
  return (
    <div
      style={{
        height: `${size || "8px"}`,
        width: "100%",
        borderRadius: "3px",
        position: "fixed",
        top: "0px",
        left: "0",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          borderRadius: "3px",
          background: `linear-gradient(30deg, ${color1 || "#3c3c3c"}, ${
            color2 || "#28935c"
          })`,
          transition: "width 0.1s",
        }}
      ></div>
    </div>
  );
};

export { Progress };
