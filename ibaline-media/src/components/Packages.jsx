import React, { Component } from "react";

/*
First, create the data that we will be implementing.

Now that you've created the data, let's create the elements that will populate our data.

See the format that you created in your notebook.

 */


const PackagesData = [
    {
        id: 1,
        title: "Success" // package name
        subtitle: "For businesses that are just getting started"
        text: "Insert a meaningful description of the first package here."
    },
    {
        id: 2,
        title: "" // package name
        subtitle: "For businesses that are just getting started"
        text: "Insert a meaningful description of the first package here."
    },
    {
        id: 3,
        title: "Success" // package name
        subtitle: "For businesses that are just getting started"
        text: "Insert a meaningful description of the first package here."
    }

];

const PackagesHeader = () => {
    return (<div>
    <h1>This is the title of the package</h1>
</div>);
};



class Packages extends Component {
    render() {

    }
}