import { useState, useEffect } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds
            }`;
    };

    const handlePlay = () => {
        setIsActive(true);
    };

    const handleStop = () => {
        setIsActive(false);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px", color: "green", fontSize: "20px" }}>
            <h1>Simple Timer</h1>
            <div style={{ fontSize: "48px", marginBottom: "20px" }}>
                {formatTime(seconds)}
            </div>
            <div>
                <button onClick={handlePlay} style={{ marginRight: "10px", border: "1px solid grey" }}>
                    Play
                </button>
                <button onClick={handleStop} style={{ marginRight: "10px", border: "1px solid grey" }}>
                    Stop</button>
            </div>
        </div>
    );
};

export default Timer;
