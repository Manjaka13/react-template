import React from "react";
import { useTest } from "../hooks";

const App = () => {
	const [status, color] = useTest();

	return (
		<>
			<h1 className="ctn-20-20">Hello from React !</h1>
			<p className="ctn-0-20">
				Service status: <span style={{ color: color }}>{status}</span>
			</p>
			<div className="ctn-20-20">
				<p className="prg">
					Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
					consectetur. Lorem <span className="red">ipsum dolor</span> sit amet
					consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
					amet consectetur. Lorem ipsum dolor sit amet consectetur.{" "}
					<span className="bold">Lorem ipsum</span> dolor sit amet consectetur. Lorem
					ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
					<br />
					<br />
					<span className="italic">Lorem ipsum dolor sit amet consectetur.</span>
				</p>
			</div>
			<div className="ctn-0-20">
				<button className="btn-alt mr-20">Button 1</button>
				<button className="btn">Button 2</button>
			</div>
			<div className="col-10 col-center p-center bg-hex00000066">
				<div className="modal__window ctn-20-20 br-10 bg-white">
					<h2 className="mb-20">This is a modal !</h2>
					<p className="prg">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
					consectetur. Lorem <span className="red">ipsum dolor</span> sit amet
					consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
					amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
				</div>
			</div>
		</>
	);
};

export default App;
