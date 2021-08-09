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
    return (
      <div>
        <h3 key={workslist.id}>{workslist.title}</h3>
        <p>{workslist.genre}</p>
      </div>
    );
  });

  return (
    <div>
      <h1>Works by X Composer</h1>
      <div>{worksCard}</div>
    </div>
  );
}

export default WorksbyComposer;
