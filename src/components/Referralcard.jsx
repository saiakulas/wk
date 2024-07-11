import React from 'react';

function Referrals({ requirements }) {
  if (!requirements || requirements.length === 0) {
    return <p className="text-lg text-center mt-8">No referrals found.</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {requirements.map((referral) => (
          <div key={referral.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{ color: '#D48166' }}>
                {referral.company_name}
              </div>
              <p className="text-gray-700 text-base">{referral.position}</p>
              <p className="text-gray-700 text-base">{referral.description}</p>
              <p className="text-gray-700 text-base">
                <strong>Requirements:</strong> {referral.requirements.join(', ')}
              </p>
              <a href={`mailto:${referral.contact_email}`} className="text-blue-500 hover:text-blue-700">
                {referral.contact_email}
              </a>
              <p className="text-xs text-gray-500">
                <small>{referral.posted_date} - {referral.expiry_date}</small>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Referrals;
