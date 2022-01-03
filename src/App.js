import HelloWorld from "./component/HelloWorld";
export default function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <HelloWorld></HelloWorld>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <HelloWorld></HelloWorld>
        </div>
      </div>
    </div>
  );
}
