import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {
	const [ selectedColor, setSelectedColor] = useState("");
	return (
		<div className="container">
			<div className="cable"></div>
			<div className="traffic-light">
				<div
					onClick={() => setSelectedColor("red")}
					className={"light red"+((selectedColor === "red") ? "light red glowRed" : "light red")
				}></div>
				<div
					onClick={() => setSelectedColor("yellow")}
					className={"light yellow"+((selectedColor === "yellow") ? "light yellow glowYellow" : "light yellow")
				}></div>
				<div
					onClick={() => setSelectedColor("green")}
					className={"light green"+((selectedColor === "green") ? "light green glowGreen" : "light green")
				}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
