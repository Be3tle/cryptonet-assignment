import { useEffect } from 'react';

const App = () => {
  useEffect;
  return (
    <div className="flex justify-center items-center mt-60">
      <div className="card w-[580px] card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="p-5"
            src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
            alt="ID"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">John Doe</h2>
          <p>Male</p>
          <p>+880 1912 484 5590</p>
        </div>
      </div>
    </div>
  );
};

export default App;
