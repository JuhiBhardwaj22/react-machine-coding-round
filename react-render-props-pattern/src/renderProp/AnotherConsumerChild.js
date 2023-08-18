import DataProviderParent from "./DataProviderParent";

const AnotherConsumerChild = () => {
  return (
    <div>
      <h1> Another Componet </h1>
      <DataProviderParent
        render={(data) => (
          <div>
            <p>Another component we can pass data as per our req</p>
            <h5>Another Child :- {data}</h5>
          </div>
        )}
      />
    </div>
  );
};

export default AnotherConsumerChild;
