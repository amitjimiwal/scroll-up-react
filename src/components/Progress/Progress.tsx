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
    <div className="scroll-indicator">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default Progress;
