import axios from "axios";
import React, { useState, useEffect } from "react";

function WorksbyComposer() {
  const [works, setWorks] = useState([]);

  const url = `https://api.openopus.org/work/list/composer/129/genre/all.json`;

  useEffect(() => {
    axios.get(url).then((res) => {
      const data = res.data.works;
      console.log(data);
      setWorks(data);
    });
  }, []);

  const worksCard = works.map((workslist) => {
    return <p key={workslist.id}>{workslist.title}</p>;
  });

  return (
    <div>
      <h1>Works by X Composer</h1>
      <div>{worksCard}</div>
    </div>
  );
}

export default WorksbyComposer;
