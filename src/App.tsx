import React from 'react';
import Layout from 'components/Layout';
import SearchBar from 'components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <SearchBar />
      </Layout>
    </div>
  );
}

export default App;
