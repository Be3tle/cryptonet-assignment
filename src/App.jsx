import { useEffect, useState } from 'react';

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((res) => res.json())
      .then((data) => setUser(data.results[0])); // Accessing the first user object from the array
  }, []);

  return (
    <div className="flex justify-center items-center mt-60">
      <div className="card w-96 bg-gray-200 text-gray-600 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={
              user.picture
                ? user.picture.large
                : 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
            }
            alt="User"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{`${user.name?.title} ${user.name?.first} ${user.name?.last}`}</h2>
          <p>Gender: {user.gender}</p>
          <p>
            Location:{' '}
            {user.location
              ? `${user.location.city}, ${user.location.country}`
              : ''}
          </p>
          <p>Email: {user.email}</p>
          <p>Username: {user.login?.username}</p>
          <p>Phone: {user.phone}</p>
          <p>Cell: {user.cell}</p>
          <p>Date of Birth: {user.dob?.date}</p>
          <p>Registered: {user.registered?.date}</p>
          <p>Nationality: {user.nat}</p>
          <p>
            ID: {user.id?.name}: {user.id?.value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
