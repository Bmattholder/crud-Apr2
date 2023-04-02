import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PeopleForm(props) {
  const [formData, setFormData] = useState({
    praenomens: [""],
    cognomen: "",
    number: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const { praenomens, cognomen, number, street, city, state, zip } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    if (e.target.name === "praenomens") {
      setFormData((p) => ({
        ...p,
        [e.target.name]: e.target.value.split(),
      }));
    } else {
      setFormData((p) => ({
        ...p,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:8080/api/v1/people",
      formData
    );
    console.log(res);
    setFormData({
      praenomens: [""],
      cognomen: "",
      number: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    });
    navigate("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="praenomens"
        id="praenomens"
        value={praenomens}
        onChange={onChange}
        placeholder="Praenomens"
        required
      />
      <input
        type="text"
        name="cognomen"
        id="cognomen"
        value={cognomen}
        onChange={onChange}
        placeholder="Cognomen"
        required
      />
      <input
        type="text"
        name="number"
        id="number"
        value={number}
        onChange={onChange}
        placeholder="Number"
        required
      />
      <input
        type="text"
        name="street"
        id="street"
        value={street}
        onChange={onChange}
        placeholder="Street"
        required
      />
      <input
        type="text"
        name="city"
        id="city"
        value={city}
        onChange={onChange}
        placeholder="City"
        required
      />
      <input
        type="text"
        name="state"
        id="state"
        value={state}
        onChange={onChange}
        placeholder="State"
        required
      />
      <input
        type="text"
        name="zip"
        id="zip"
        value={zip}
        onChange={onChange}
        placeholder="zip"
        required
      />
      <button>Submit</button>
    </form>
  );
}

export default PeopleForm;
