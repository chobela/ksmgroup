import React, { useState, useEffect } from "react";
import { v1 as uuid } from "uuid";
import axios from "axios";

const Main = () => {
  const [names, setNames] = useState([]);

  const [data, setData] = useState({
    name: "",
    department: "",
  });

  useEffect(() => {
    axios
      .get(`https://ksmgroup.herokuapp.com/api/employees`, {})
      .then((res) => {
        const data = res.data;
        setNames(data);
      });
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("https://ksmgroup.herokuapp.com/api/employees", {
      name: data.name,
      department: data.department,
    });
  };

  const handleDelete = (event) => {
    event.preventDefault();
    axios.post("https://ksmgroup.herokuapp.com/api/remove", {});
  };

  const handleName = (event) => {
    event.preventDefault();

    setData({
      [event.target.name]: event.target.value,
      department: data.department,
    });
  };

  const handleDepartment = (event) => {
    event.preventDefault();

    setData({
      name: data.name,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">KSM Group</h5>
      </div>

      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={data.name}
                  onChange={handleName}
                  id="name"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="department">Department</label>
                <input
                  type="text"
                  name="department"
                  className="form-control"
                  value={data.department}
                  onChange={handleDepartment}
                  id="department"
                ></input>
              </div>

              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
              <button
                onClick={handleDelete}
                type="submit"
                className="btn btn-danger m-2"
              >
                Delete All
              </button>
            </form>
          </div>
          <div className="col-md-8">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Department</th>
                </tr>
              </thead>
              <tbody>
                {names.map((n) => (
                  <tr key={uuid()}>
                    <td>{n.name}</td>
                    <td>{n.department}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
