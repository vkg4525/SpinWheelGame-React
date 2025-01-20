Usage Example:
const segmentswheel = [
    { number: "100", color: "#db7093" },
    { number: "50", color: "#20b2aa" },
    { number: "Try Again", color: "#daa520" },
    { number: "1000", color: "#ff340f" },
    { number: "Better Luck Next Time", color: "#ff7f50" },
  ];
  
const handleSpinStart = () => {
  console.log("Spin started!");
};

const handleSpinStop = (result) => {
  console.log(`Spin stopped! Result: ${result}`);
};

<SpinWheel
  segments={segmentswheel}
  onSpinStart={handleSpinStart}
  onSpinStop={handleSpinStop}
/>
