React Compound Pattern

-> Multiple component come together to serve a common functionality
->React compound components are a pattern used in React to manage and encapsulate the logic of a component that is composed of multiple sub-components. This pattern allows you to create more flexible and reusable components.
-> In summary, compound components in React offer a powerful way to build complex UI elements that are modular, customizable, and maintainable. They address issues related to component composition, state management, customization, and reusability, making them a valuable pattern in many React applications, especially those with intricate user interfaces.

-> In other words, when multiple components work together to have a shared state and handle logic together, they are called compound components.

Think of compound components like the <select> and <option> elements in HTML. Apart they don’t do too much, but together they allow you to create the complete experience

---

So in react everything is Object. Even if we use function component that is also object.
Suppose if we have one Parent compoent Tab.js, and we want to enhance the fetures of Tab.js without
changes the Tab.js code then we can do like this way :-
Tab.anotherComponent = ({ children }) => {
return <div className="contentWrapper">{children}</div>;
};

-> This is a way to extend or enhance the behavior of the Tab component.
-> This is achieved by adding properties to a JavaScript object, and in this case, the Tab component is a JavaScript object.
-> When you add a new property to an object in this way, you're effectively extending the object's functionality or capabilities.
