import React, { useEffect, useState } from "react";

const Api = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
    
  }, []);

  return (
    <div>
      {
            loading ? 
                (<h1>Loading...</h1>)
             : (
                <div  className="row">
                    {data?.map((user)=>{
                            return(
                               <div className="border rounded shadow-lg m-3 p-3 col">
                                 <h4 key={user.id}>User: {user.id}</h4>
                                 <div key={user.id}>Name: {user.name}</div>
                                 <div key={user.id}>Username: {user.username}</div>
                                 <div key={user.id}>Email: {user.email}</div>
                                 <div key={user.id}>City: {user.address["city"]}</div>
                               </div>
                            )
    })}
                </div>
            )
        }

      
    </div>
  );
};

export default Api;
