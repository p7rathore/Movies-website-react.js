import React, { useEffect, useState } from "react";
import "./App.css";
import Navbaar from "./component/navbaar";
import ImageSlider from "./component/imageSlider";
import Search from "./component/search";
import Reasult from "./component/result";
import Footer from "./component/footer";

function App() {
  const [search, setSearch] = useState("a");
  const [data, setData] = useState([]);
  const [totalpage, setTotalepage] = useState([]);
  const [lodding ,setLodding] = useState(true)
  const [page, setPage] = useState(1);
  /* let Api = `https://api.themoviedb.org/3/discover/movie?&api_key=04c35731a5ee918f014970082a0088b1&query&page=${page}`; */
  let SEARCHAPI = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}&page=${page}`;

 /*  function hello() {
    fetch(Api)
      .then((res) => res.json())
      .then((discoverData) => {
        setData(discoverData.results);
        setTotalepage(discoverData);
      });
  }
  hello(); */
  useEffect(()=>{
    SerApi()
  })
  const SerApi = () => {
    if (search !== "") {
      fetch(SEARCHAPI)
        .then((res) => res.json())
        .then((serData) => {
          setData(serData.results);
          setTotalepage(serData);
          setLodding(false)
        });
    }
  };

  const valusearch = (value) => {
    setSearch(value);
  };

  const nextFun = () => {
    setPage(page + 1);
    if (page === totalpage.total_pages - 1) {
      setPage(1);
    }
  };
  const preFun = () => {
    setPage(page - 1);
    if (page === 1) {
      setPage(1);
    }
  };
  return (
    <div className="App">
      <Navbaar />
      <ImageSlider />
      <Search  searchValue={valusearch} serData={search} />
      <Reasult MoviesData={data} lodding={lodding}/>
      {/* Pagination */}
      <div className="pagi">
        <div className="comp">
          <button className="pre_page" onClick={() => preFun()}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <div className="pagi_number">
            <h1 className="op">
              {page}/{totalpage.total_pages}
            </h1>
          </div>
          <button className="next_page" onClick={() => nextFun()}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
