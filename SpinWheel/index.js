import React, { useRef, useState } from "react";
import "./SpinWheel.css"; // External CSS for styling

const SpinWheel = ({ segments, onSpinStart, onSpinStop }) => {
  const wheelRef = useRef(null);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinValue, setSpinValue] = useState(1000);

  const handleSpin = () => {
    if (isSpinning) return; // Prevent multiple spins at the same time

    const rotation = spinValue + Math.ceil(Math.random() * 7200);
    setSpinValue(rotation);
    const segmentAngle = 360 / segments.length;

    setIsSpinning(true);
    if (onSpinStart) onSpinStart(); // Trigger spin start callback

    // wheelRef.current.style.transition = "transform 5s ease-in-out";
    wheelRef.current.style.transform = `rotate(${rotation}deg)`;

    // Calculate the selected number after spin
    setTimeout(() => {
      const normalizedRotation = rotation % 360;
      const selectedIndex =
        Math.floor(segments.length - normalizedRotation / segmentAngle) %
        segments.length;
      const result = segments[selectedIndex].number;

      setSelectedNumber(result);
      setIsSpinning(false);
      if (onSpinStop) onSpinStop(result); // Trigger spin stop callback
    }, 5000);
  };

  return (
    <>
      <div className="wheel-container">
        <div className="spinBtn" onClick={handleSpin}>
          Spin
        </div>
        <div className="spinwheel" ref={wheelRef}>
          {segments.map((segment, index) => {
            const angle = 360 / segments.length;
            let clipPath = ``;
            if (segments.length < 5) {
              clipPath = `polygon(0px 0px, calc(99%) calc(0%), 100% 100%, 0px calc(99%))`;
            } else {
              clipPath = `polygon(
            0 0,
            calc(${angle}% + 7%)
              calc(-${angle}%),
            100% 100%,
            0 calc(${angle}% + 7%)
          )`;
            }
            return (
              <div
                key={index}
                className="number"
                style={{
                  transform: `rotate(${angle * (index + 1)}deg)`,
                  background: segment.color,
                  clipPath: `${clipPath}`,
                }}
              >
                <span>{segment.number}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="prize-display">
        &nbsp;{selectedNumber && `You won: ${selectedNumber}!`}
      </div>
    </>
  );
};

export default SpinWheel;

// Usage example
// <SpinWheel
//   segments={[{ number: 100, color: '#db7093' }, { number: 50, color: '#20`}.... It ablator insert customization style part usage comments %>
