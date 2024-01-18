import React, { useEffect, useState } from "react";
const Progress: React.FC = () => {
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
        height: "5px",
        width: "100%",
        borderRadius: "3px",
        position: 'fixed',
        top: '10px',
        left: '0',
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          borderRadius: "3px",
          background: "linear-gradient(30deg, #21d4fd, #b721ff)",
          transition: "width 0.1s",
        }}
      ></div>
    </div>
  );
};

export default Progress;
