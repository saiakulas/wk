import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Service from '../components/Service';
import Referrals from '../components/Referralcard'; 
import { AuthContext } from './AuthContext';

function Candidate() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [referrals, setReferrals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { logout } = useContext(AuthContext);

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

    const fetchReferrals = async () => {
      try {
        const response = await fetch('/referrals.json');
        const data = await response.json();
        setReferrals(data);
      } catch (error) {
        console.error('Error fetching referrals:', error);
      }
    };

    fetchServices();
    fetchReferrals();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredServices = services.filter((service) =>
    service.id.toString().includes(searchTerm)
  );

  const filteredReferrals = referrals.filter((referral) =>
    referral.id.toString().includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-[#f4f4f2] p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-[#911825]">Candidate</h1>
        <button
          onClick={handleLogout}
          className="bg-[#911825] text-[#ffffff] px-4 py-2 rounded hover:bg-[#7b1420]"
        >
          Logout
        </button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by ID..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-2">
        <h2 className="text-2xl font-semibold mb-2 text-[#911825]">Services</h2>
        <img
          src="https://s.clipartkey.com/mpngs/s/82-825261_clip-black-and-white-general-png-icon-free.png"
          alt="Services Icon"
          className="mx-auto mb-4"
          style={{ maxWidth: '100px' }}
        />
        <Service requirements={filteredServices} />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-[#911825]">Referrals</h2>
        <Referrals requirements={filteredReferrals} />
      </div>
    </div>
  );
}

export default Candidate;
