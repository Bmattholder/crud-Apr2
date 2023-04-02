import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Person from "./Person";

function Home(props) {
  const [toggle, setToggle] = useState(false);
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:8080/api/v1/people");
      const data = res.data;
      setPeopleList(data.content);
    };

    getData();
  }, [toggle]);

  const toggleHelper = () => {
    setToggle(!toggle);
  };

  return (
    <Fragment>
      {peopleList.map((person) => {
        return (
          <Person
            key={person.id}
            id={person.id}
            firstName={person.personalName.givenNames[0].value}
            lastName={person.personalName.surname.value}
            address={person.address}
            toggleHelper={toggleHelper}
          />
        );
      })}
    </Fragment>
  );
}

export default Home;
