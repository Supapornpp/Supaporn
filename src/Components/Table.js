import React, { useState, useEffect } from "react";

const Table = ({ products }) => {
  const [sortProduct, setSortProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const onSortClick = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return a.total_case - b.total_case;
    });

    setSortProduct(res);

    console.log({ res });
  };
  const onSortClick2 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return a.total_case - b.total_case;
    });

    setSortProduct(res);

    console.log({ res });
  };
  const onSortClick3 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return a.total_death - b.total_death;
    });

    setSortProduct(res);
  };
  const onSortClick4 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.total_death - a.total_death;
    });

    setSortProduct(res);
  };

  const onHandleSearch = (event) => {
    setSearchTerm(event.target.value);
    const tempProducts = [...products];

    const filterProducts = tempProducts.filter((item) => {
      return item.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    console.log({ filterProducts });

    setSortProduct(filterProducts);
  };

  useEffect(() => {
    setSortProduct(products);
  }, [products]);

  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          search
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="o_o"
          value={searchTerm}
          onChange={onHandleSearch}
        />
      </div>

      <table className="table table-primary  table-striped shadow">
        <thead>
          <tr>
            <th scope="col">no.</th>
            <th scope="col"></th>
            <th scope="col">province</th>
            <th scope="col">newcase</th>
            <th scope="col">newdeath</th>
            <th scope="col" style={{ width: "200px" }}>
              totalcase{" "}
              <span role="button" className="" onClick={onSortClick}>
                ▲
              </span>
              <span role="button" className="" onClick={onSortClick2}>
                ▼
              </span>
            </th>
            <th scope="col">
              totaldeath
              <span role="button" className="" onClick={onSortClick3}>
                ▲
              </span>
              <span role="button" className="" onClick={onSortClick4}>
                ▼
              </span>
            </th>
            <th scope="col"> be cured</th>
          </tr>
        </thead>
        <tbody>
          {sortProduct.map((items, index) => {
            return (
              <tr className="table">
                <td>{index + 1}</td>
                <td></td>
                <td>{items.province}</td>

                <td>{items.new_case}</td>
                <td>{items.new_death}</td>
                <td>{items.total_case}</td>
                <td>{items.total_death}</td>
                <td>{items.total_case_excludeabroad}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
