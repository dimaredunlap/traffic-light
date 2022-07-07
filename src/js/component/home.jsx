import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ selectedColor, setSelectedColor] = useState("red");
	return (
		<div className="traffic-light">
			<div
				onClick={() => setSelectedColor("red")}
				class={"light red"+((selectedColor === "red") ? "glow" : "")
			}></div>
			<div
				onClick={() => setSelectedColor("yellow")}
			 	class={"light yellow"+((selectedColor === "yellow") ? "glow" : "")
			}></div>
			<div
				onClick={() => setSelectedColor("green")}
			 	class={"light green"+((selectedColor === "green") ? "glow" : "")
			}></div>
		</div>
	);
};

export default Home;
