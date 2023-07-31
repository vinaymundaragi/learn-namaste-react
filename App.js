	// to create an element
    const heading = React.createElement("div", {id: "parent"}, [React.createElement("div", {id: "child"},[React.createElement("h1", {},"I am h1 tag.")],React.createElement("h2", {},"I am h2 tag."))],React.createElement("div", {id: "child2"},[React.createElement("h1", {},"I am h1 tag.")],React.createElement("h2", {},"I am h2 tag.")));

    // console.log(heading);

    //to create a root where all rect code is executed and also is rendered
    const root = ReactDOM.createRoot(document.getElementById("root"));

    console.log(root);

    root.render(heading);