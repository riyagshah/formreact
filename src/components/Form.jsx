import React, { useState } from "react";
import Table from "./Table";

const Form = () => {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const onChange = (e) => {
    let { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      setForm({
        ...form,
        [name]: files,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(form)
    fetch(`http://localhost:3040/data`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({...form}),
    })
      .then((r) => r.json())
      .then((d) => {
        setData({...form, d});
        setForm("");
      });
  };
  return (
    <div>
      <h1>React Form</h1>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label htmlFor="age">Age :</label>
            <input
              type="number"
              name="age"
              id="age"
              value={form.age}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address :</label>
            <input
              type="text"
              name="address"
              id="address"
              value={form.address}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label htmlFor="department">Department :</label>
            <select
              name="department"
              id="department"
              value={form.department}
              onChange={onChange}
              required
            >
              <option value="">Select Department</option>
              <option value="Manager">Manager</option>
              <option value="Executive Officer">Executive Officer</option>
              <option value="Officer">Officer</option>
              <option value="Junior Officer">Junior Officer</option>
              <option value="Assistant Officer">Assistant Officer</option>
            </select>
          </div>
          <div>
            <label htmlFor="salary">Salary :</label>
            <input
              type="number"
              name="salary"
              id="salary"
              value={form.salary}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label>Material State :</label>
            <input
              type="checkbox"
              name="married"
              id="married"
              checked={form.married}
              onChange={onChange}
            />
            <label htmlFor="married">Married</label>
            <input
              type="checkbox"
              name="unmarried"
              id="unmarried"
              checked={form.unmarried}
              onChange={onChange}
            />
            <label htmlFor="unmarried">Unmarried</label>
          </div>
          <div>
            <label htmlFor="profile">Profile :</label>
            <input
              type="file"
              name="profile"
              id="profile"
              files={form.profile}
              onChange={onChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Table setData={setData} data={data} />
    </div>
  );
};

export default Form;
