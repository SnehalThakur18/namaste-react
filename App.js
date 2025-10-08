import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 className="heading">Hello world from react element.</h1>
);

const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h2>Data coming from Functional Component</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);