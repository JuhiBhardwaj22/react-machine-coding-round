const DataProviderParent = ({ render }) => {
  console.log(render);
  const data = "Hello Juhi Bhardwaj !!";

  return render(data);
};

export default DataProviderParent;
