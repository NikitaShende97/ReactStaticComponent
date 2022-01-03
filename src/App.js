import images from "./images.jpg";
export default function App() {
  return (
    <div>
      <div className="container-fluid">
        <HeaderTop />
        <HeaderSecond />
        <Body />
      </div>
    </div>
  );
}

function HeaderTop() {
  return (
    <div
      className="row text-light sticky-top "
      style={{ backgroundColor: " #E30047" }}
    >
      <div className="col-6">Brand wali Quality,Bazaar Wali Deal!</div>
      <div className="col-6  ">
        <div className="row">
          <div className="col mx-0 ">
            <a
              href=""
              className="text-decoration-none "
              style={{ color: "white" }}
            >
              Impact@Snapdeal"
            </a>
          </div>
          <div className="col mx-0">
            <a
              href=""
              style={{ color: "white" }}
              className="text-decoration-none"
            >
              Gift Cards
            </a>
          </div>
          <div className="col mx-0">
            <a
              href=""
              className="text-decoration-none"
              style={{ color: "white" }}
            >
              Help Center
            </a>
          </div>
          <div className="col mx-0">
            <a
              href=""
              className="text-decoration-none"
              style={{ color: "white" }}
            >
              Sell On Snapdeal
            </a>
          </div>
          <div className="col mx-0">
            <a
              href=""
              className="text-decoration-none"
              style={{ color: "white" }}
            >
              Download App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderSecond() {
  return (
    <div
      className="row text-white p-2  sticky-top"
      style={{ backgroundColor: " #E30047" }}
    >
      <div className="col-2 fs-2">Snapdeal</div>
      <div className="col-8">
        <input
          type="text"
          placeholder="search products & brands"
          className="w-75"
          style={{ height: "35px" }}
        ></input>
        <input type="button" value="search" className="btn btn-dark"></input>
      </div>
      <div className="col-1">
        <a className="text-decoration-none text-white" href="">
          Cart
        </a>
      </div>
      <div className="col-1">
        <a href="" className="text-decoration-none text-white">
          Sign In
        </a>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="row justify-content-center align-items-center mt-2 ">
      <div className="col-2 mx-1 d-flex flex-column border sticky-top mt-1">
        Top Categories
        <a href="" className="text-decoration-none text-dark mt-2">
          Men's Fashion
        </a>
        <a href="" className="text-decoration-none text-dark mt-2">
          Men's Fashion
        </a>
        <a href="" className="text-decoration-none text-dark mt-2">
          Home & Kitchen
        </a>
        <a href="" className="text-decoration-none text-dark mt-2">
          Toys,kid's Fashion
        </a>
        <a href="" className="text-decoration-none text-dark mt-2">
          Beauty,Health Fashion
        </a>
      </div>
      <div className="col-8">
        <div className="row">
          <div className="col-4">
            <MyCard />
          </div>
          <div className="col-4">
            <MyCard />
          </div>
          <div className="col-4">
            <MyCard />
          </div>
          <div className="col-4">
            <MyCard />
          </div>
        </div>
      </div>
      <div className="col-2"></div>
    </div>
  );
}

function MyCard() {
  return (
    <div className="card">
      <div className="card-body">
        <img src={images} style={{ width: "100%" }}></img>
        <p>
          The Snapdeal Old Logo Colors with Hex & RGB Codes has 2 colors which
          are Pacific Blue (#189FCC) and UE Red (#C00309). This color
          combination was created by user Keshav Naidu
        </p>
        <div className="mb-1">Rs.120</div>
        <span>&#128077;</span> &nbsp;&nbsp;
        <span>0</span>&nbsp;&nbsp;
        <span>&#128078;</span>&nbsp;&nbsp;
        <span>0</span>&nbsp;&nbsp;
      </div>
    </div>
  );
}
