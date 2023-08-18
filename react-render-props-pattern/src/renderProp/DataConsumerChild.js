import DataProviderParent from "./DataProviderParent";

const DataConsumerChild = () => {
  return (
    <div>
      <h1>Child Component Getting Data from Parent</h1>
      <DataProviderParent
        render={(data) => (
          <div>
            <h3>Render Props Example</h3>
            <h5>{data}</h5>
          </div>
        )}
      />
    </div>
  );
};

export default DataConsumerChild;
