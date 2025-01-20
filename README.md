## React Spin Wheel Game Component 🎡

A customizable React Spin Wheel Game component that allows users to create an interactive spinning wheel with dynamic segments and colors. This component supports event callbacks for spin start and stop, and displays the selected segment after each spin.
**Key Features:**

    * Dynamic Segments: Pass custom numbers and colors for each segment via props.
    * Event Callbacks: Trigger actions on spin start (onSpinStart) and spin stop (onSpinStop) events.
    * Interactive Animation: Smooth spinning animation with randomized rotation.
    * Result Display: Automatically calculates and displays the selected segment after the spin.

**Usage:**

    * Add your custom segments (numbers and colors) as props.
    * Handle spin events using onSpinStart and onSpinStop callbacks.
    * Easily integrate into any React project.
    
## Example:
```
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
```

```
<SpinWheel
  segments={segmentswheel}
  onSpinStart={handleSpinStart}
  onSpinStop={handleSpinStop}
/>
```
