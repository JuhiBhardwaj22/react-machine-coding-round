A prop in a component which is a function and that return a jsx

In React, Render Props is a design pattern used to share code between components by passing a function as a prop to a component, allowing that component to render content controlled by the parent component. This pattern is particularly useful for creating reusable components that provide some behavior or data to their children without enforcing a specific UI structure.

-> create more reusable components
the phrase "A reusable component that provides data to its children using Render Props" means that you have created a component that can be reused in various parts of your application. This component offers a way to share data or functionality with its child components by passing a function (the "render prop") that allows the child components to access and use that data.

<!-- <DataProviderParent
render={(data) => (

<div>
<h1>Render Props Example</h1>
<h5>{data}</h5>
</div>
)}
/> -->

Returning the JSX from the arrow function passed to the render prop.
