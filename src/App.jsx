import { useEffect, useState } from 'react';

const App = () => {
  const [user, setUser] = useState({});
  
  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  }, []);
  
  return (
    <div className="flex justify-center items-center mt-60">
      <div className="card w-[580px] card-side bg-gray-200 text-black shadow-xl">
        <figure>
          <img
            className="p-5"
            src={user.picture ? user.picture.large : ''}
            alt="User"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{`${user.name?.title} ${user.name?.first} ${user.name?.last}`}</h2>
          <p>{user.gender}</p>
          <p>{user.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
