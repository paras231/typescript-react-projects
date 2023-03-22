import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

type providerProps = {
  children: React.ReactNode;
};

const initialState = {
  data: [],
  loading: false,
};

export const ApiContext = createContext(initialState);

export const ApiContextProvider = ({ children }: providerProps) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setLoading(false);
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={{ data, loading }}>
      {children}
    </ApiContext.Provider>
  );
};
