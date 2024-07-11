// App.js
import React, { useEffect, useState } from 'react';
import Service from './Service';
import Referrals from './Referrals';

function Api() {
  const [requirements, setRequirements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/requirements.json');
        const data = await response.json();
        setRequirements(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Requirements</h1>
      <Service requirements={requirements} />
      <Referrals requirements={requirements} />
    </div>
  );
}

export default Api;
