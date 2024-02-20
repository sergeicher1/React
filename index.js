const rootNode = document.getElementById("app"); // React app rendering element
// We get the root element
const root = ReactDOM.createRoot(rootNode);
// Rendering to the Root Element
root.render( /*#__PURE__*/React.createElement("h1", null, "Hello React") // the element we want to create
);
