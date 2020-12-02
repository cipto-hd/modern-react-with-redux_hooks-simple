import Axios from "axios";
import { useEffect, useState } from "react";

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async (resource) => {
      const response = await Axios.get(
        `https://jsonplaceholder.typicode.com/${resource}?_limit=15`
      );

      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;
};

export default useResources;
