import React from 'react';

function Service({ requirements }) {
  return (
    <div className="bg-gray-100 flex flex-col items-center p-2">
      <h2 className="text-2xl font-bold mb-4 text-D48166">Services</h2>
      {requirements.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {requirements.map(service => (
            <div key={service.id} className="bg-white shadow rounded overflow-hidden">
              <div className="px-4 py-2">
                <div className="font-bold text-lg mb-1 text-D48166">{service.name}</div>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg mt-4">No services found.</p>
      )}
    </div>
  );
}

export default Service;
