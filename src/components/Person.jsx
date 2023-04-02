import React, { useState } from "react";
import axios from "axios";

function Person({ id, firstName, lastName, address, toggleHelper }) {
  const [editMode, setEditMode] = useState(false);
  const [editFormInfo, setEditFormInfo] = useState({
    praenomens: firstName,
    cognomen: lastName,
    number: address.number,
    street: address.street,
    city: address.city,
    state: address.state,
    zip: address.zip,
  });

  const { praenomens, cognomen, number, street, city, state, zip } =
    editFormInfo;

  const onChange = (e) => {
    if (e.target.name === "praenomens") {
      setEditFormInfo((p) => ({
        ...p,
        [e.target.name]: e.target.value.split(),
      }));
    } else {
      setEditFormInfo((p) => ({
        ...p,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const onEditSubmit = async (e, id) => {
    e.preventDefault();

    const res = await axios.patch(
      `http://localhost:8080/api/v1/people/${id}`,
      editFormInfo
    );
    console.log(res);
    setEditMode(!editMode);
    toggleHelper();
  };

  const cancelEdit = () => {
    setEditFormInfo({
      praenomens: firstName,
      cognomen: lastName,
      number: address.number,
      street: address.street,
      city: address.city,
      state: address.state,
      zip: address.zip,
    });
    setEditMode(!editMode);
  };

  const onDeleteHandler = async (id) => {
    const res = await axios.delete(`http://localhost:8080/api/v1/people/${id}`);
    console.log(res);
    toggleHelper();
  };

  return (
    <div>
      {!editMode ? (
        <>
          {" "}
          <h2>
            {id}: {firstName} {lastName}
          </h2>
          <p>
            {address.number} {address.street}
          </p>
          <p>
            {address.city} {address.state} {address.zip}
          </p>
          <button onClick={() => setEditMode(!editMode)}>Edit</button>
          <button onClick={() => onDeleteHandler(id)}>Delete</button>{" "}
        </>
      ) : (
        <form>
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
            placeholder="Zip"
            required
          />
          <button onClick={(e) => onEditSubmit(e, id)}>Submit Edit</button>
          <button onClick={cancelEdit}>Cancel</button>
        </form>
      )}
    </div>
  );
}

export default Person;
