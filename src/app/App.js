import React, { useState } from 'react';
import { NavBar, People, Planet } from '../components/components';

const App = () => {
  const [page, setPage] = useState('planets');
  return (
    <>
        <div className="App">
            <h1>Star Wars Info</h1>
            <NavBar setPage={setPage} />
            <div className="content">
                {page === 'planets' && <Planet />}
                {page === 'people' && <People />}
            </div>
        </div>
    </>
  );
}

export default App;
