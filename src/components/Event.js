import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./Astronautas.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import Error from "./Error";
import Loader from "./Loader";

const renderData = (data) => {
  return (
    <div className="car">
      {data.map((el, index) => {
        return (
          <div className="cars" key={index}>
            {<img src={el.feature_image} alt={el.feature_image} />}
            {
              <a href={el.video_url} target="blank" rel="noopener">
                <FontAwesomeIcon
                  icon={faYoutube}
                  size="2x"
                  className="youtube"
                />
              </a>
            }
            <h4>{el.name}</h4>
            <small>{el.date}</small>
          </div>
        );
      })}
    </div>
  );
};

const Event = () => {
  let url = `https://ll.thespacedevs.com/2.0.0/event/?limit=50&offset=50`;
  let { data, isPending, error } = useFetch(url);
  //console.log(data);

  const [currentPage, setCurrentpage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const [pageNumberLimit, setPageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleClick = (e) => {
    setCurrentpage(Number(e.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }
  const indexOfLastItems = currentPage * itemsPerPage;
  const indexOfFirsItem = indexOfLastItems - itemsPerPage;
  const currentItems = data.slice(indexOfFirsItem, indexOfLastItems);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });
  const handleNextbtn = () => {
    setCurrentpage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrevbtn = () => {
    setCurrentpage(currentPage - 1);
    if ((currentPage + 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}>&hellip;</li>;
  }
  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}>&hellip;</li>;
  }

  const handleLoadMore = () => {
    setItemsPerPage(itemsPerPage + 3);
  };
  return (
    <>
      {error === true ? <Error msg="ocurrió un Error" /> : null}
      {isPending === true ? <Loader /> : null}
      {renderData(currentItems)}
      <ul className="pageNumber">
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage === pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageIncrementBtn}
        {renderPageNumbers}
        {pageDecrementBtn}
        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
      <div className="loadmore">
        <button onClick={handleLoadMore} className="btnLoadMore">
          Cargar más
        </button>
      </div>
    </>
  );
};

export default Event;
