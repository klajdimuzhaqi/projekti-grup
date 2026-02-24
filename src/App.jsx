import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import PropertyCard from './components/PropertyCard';
import LoadingSpinner from './components/LoadingSpinner';
import { propertyAPI } from './services/api';
import { config } from './utils/config';
import mockProperties from './data/mockProperties';

function App() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProperties = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = config.useMockData ? mockProperties : await propertyAPI.getAllProperties();
      setProperties(data);
      setFilteredProperties(data);
    } catch (err) {
      setError('Gabim në lidhje. Duke përdorur të dhëna demo.');
      setProperties(mockProperties);
      setFilteredProperties(mockProperties);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearch = useCallback(async (filters) => {
    try {
      setLoading(true);
      const data = config.useMockData
        ? mockProperties.filter((prop) => {
          const matchesSearch = !filters.search ||
            prop.title.toLowerCase().includes(filters.search.toLowerCase());
          const matchesLocation = !filters.location || prop.location === filters.location;
          let matchesPrice = true;
          if (filters.price) {
            if (filters.price === 'under-100k') matchesPrice = prop.price < 100000;
            else if (filters.price === '100k-300k') matchesPrice = prop.price >= 100000 && prop.price <= 300000;
            else if (filters.price === 'over-300k') matchesPrice = prop.price > 300000;
          }
          return matchesSearch && matchesLocation && matchesPrice;
        })
        : await propertyAPI.searchProperties(filters);
      setFilteredProperties(data);
    } catch (err) {
      setFilteredProperties(properties);
    } finally {
      setLoading(false);
    }
  }, [properties]);

  useEffect(() => {
    loadProperties();
  }, [loadProperties]);

  if (loading) return <LoadingSpinner />;

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <SearchBar onSearch={handleSearch} />
              <main className="container my-5">
                {error && (
                  <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    {error}
                    <button type="button" className="btn-close" onClick={() => setError(null)} />
                  </div>
                )}

                {filteredProperties.length === 0 ? (
                  <div className="text-center py-5 my-5">
                    <div className="display-5 mb-4">🤷‍♂️</div>
                    <h3 className="text-muted mb-3">Nuk u gjetën pronat</h3>
                    <p className="text-muted mb-4">Provoni me kritere të tjera</p>
                    <button className="btn btn-outline-primary" onClick={loadProperties}>
                      🔄 Rifresko Pronat
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3">
                      <h1 className="mb-0">{filteredProperties.length} Prona Gjetur</h1>
                      <div className="d-flex gap-2">
                        <button className="btn btn-outline-secondary" onClick={loadProperties}>🔄 Rifresko</button>
                      </div>
                    </div>
                    <div className="row g-4">
                      {filteredProperties.map((property) => (
                        <div key={property.id} className="col-xl-3 col-lg-4 col-md-6">
                          <PropertyCard property={property} />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </main>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
