import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Service from '../components/Service';

function Home() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/services.json');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredServices = services.filter(service =>
    service.name && service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-4" style={{ backgroundColor: '#f4f4f2', color: '#911825' }}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">Welcome to Work.io</h1>
        <button
          className="bg-[#911825] hover:bg-[#7b1420] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleLoginClick}
        >
          Login
        </button>
      </div>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search by company name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="shadow appearance-none border rounded w-full md:w-1/2 lg:w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          style={{ backgroundColor: '#ffffff' }}
        />
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Services</h2>
        {filteredServices.length > 0 ? (
          <Service requirements={filteredServices} />
        ) : (
          <p className="text-lg">No services found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
