import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cart from "../../components/cart/Cart";
import Control from "../../components/control/Control";
import Filter from "../../components/filter/Filter";
import FoodList from "../../components/food-list/FoodList";
import Pagination from "../../components/pagination/Pagination";
import { URL__API } from "../../constant";
const Home = () => {
  const [limit] = useState(16);
  const [page, setPage] = useState(1);
  const [foodList, setFoodList] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [sort, setSort] = useState({
    name: "",
    order: "",
  });

  const [filter, setFilter] = useState({
    name: null,
    gte: null,
    lte: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const filterString = useCallback(() => {
    if (filter.name) {
      if (!filter.gte) {
        return `&${filter.name}_lte=${filter.lte}`;
      }
      if (!filter.lte) {
        return `&${filter.name}_gte=${filter.gte}`;
      }
      return `&${filter.name}_gte=${filter.gte}&${filter.name}_lte=${filter.lte}`;
    }
  }, [filter]);

  useEffect(() => {
    if (pathname === "/") {
      setIsLoading(true);
      axios
        .get(
          `${URL__API}/burgers?_limit=${limit}&_page=${page}&_sort=${
            sort.name
          }&_order=${sort.order}${filterString()}`
        )
        .then((res) => {
          setFoodList(res.data);
          setIsLoading(false);
          navigate(`burgers?_limit=${limit}&_page=${page}`);
        });
    } else {
      setIsLoading(true);
      axios
        .get(
          `${URL__API}${pathname}?_limit=${limit}&_page=${page}&_sort=${
            sort.name
          }&_order=${sort.order}${filterString()}&${
            keyword && "name_like=" + keyword
          }`
        )
        .then((res) => {
          setFoodList(res.data);
          setIsLoading(false);
          navigate(`${pathname}?_limit=${limit}&_page=${page}`);
        });
    }
  }, [limit, page, navigate, pathname, sort, filter, filterString, keyword]);

  useEffect(() => {
    if (pathname === "/") {
      axios.get(`${URL__API}/pagination`).then((res) => {
        const totalPage = Math.ceil(res.data.burgers / limit);
        setTotalPage(totalPage);
      });
    } else {
      axios.get(`${URL__API}/pagination`).then((res) => {
        const totalPage = Math.ceil(res.data[pathname.slice(1)] / limit);
        setTotalPage(totalPage);
      });
    }
  }, [pathname, limit]);

  return (
    <div className="home">
      <div className="shop container">
        <div className="shop__filter">
          <Filter setFilter={setFilter} />
        </div>
        <div className="shop__content">
          <Control setSort={setSort} setKeyword={setKeyword} />
          {isLoading ? "Loading....." : <FoodList foodList={foodList} />}
          <Pagination
            totalPage={totalPage}
            currentPage={page}
            setPage={setPage}
          />
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default Home;
