import { useEffect } from "react";

const SoundBar = () => {
  useEffect(() => {
    const el = document.querySelector(".soundBars");
    if (el) {
      el.onclick = function () {
        this.classList.toggle("play");
      };
    }
  }, []);

  return (
    <div className="soundBars link top-1 right-14 flex items-center justify-center">
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};

export default SoundBar;