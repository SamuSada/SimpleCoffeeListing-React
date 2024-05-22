import React from 'react';
import DataFetcher from './components/DataFetcher';
import ProductList from './components/ProductList';
import bannerImage from './images/bg-cafe.jpg';
import './App.css';

function App() {
  const jsonUrl = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';

  return (
    <div id="root">
      <div className="app-content">
        <header className="banner">
          <img src={bannerImage} alt="Banner" className="banner-image" />
        </header>
        <DataFetcher
          url={jsonUrl}
          render={(data) => <ProductList products={data} />}
        />
      </div>
    </div>
  );
}

export default App;