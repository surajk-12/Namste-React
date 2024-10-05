const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World from react"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent = React.createElement(
    "div",{ id: "parent" },
    React.createElement("div",{ id: "child" },
       [ React.createElement("h1", { class: "heading" }, "I am an h1 tag"), 
        React.createElement("h1", { class: "heading" }, "I am an h1 tag")
    ])
);

root.render(parent);
