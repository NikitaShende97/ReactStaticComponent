export default function App() {
  let list = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="container-fluid">
      <div className="row bg-dark text-white sticky-top ">
        <div className="col d-flex justify-content-center align-items-center p-2">
          React
        </div>
      </div>

      <div className="row mt-2 ">
        {list.map((item) => (
          <div className="col-sm-12 col-md-4 mb-2">
            <MyCard />
          </div>
        ))}
      </div>
    </div>
  );
}

function MyCard() {
  return (
    <div className="card">
      <div className="card-header">Card1</div>
      <div className="card-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, vel
          eligendi. Laborum debitis, eaque autem voluptatibus quod nihil sint
          omnis.
        </p>
        <input
          type="button"
          value="Buy Now"
          className="btn btn-outline-primary"
        ></input>
        <input
          type="button"
          value="Add to Cart"
          className="btn btn-outline-primary"
        ></input>
      </div>
    </div>
  );
}
