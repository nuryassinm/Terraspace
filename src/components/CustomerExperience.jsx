// components/MembershipTiers.jsx
import React, { useState } from 'react';

function MembershipTiers() {
  const [expandedTier, setExpandedTier] = useState(null);

  const tiers = [
    { name: 'BASIC' },
    { name: 'PREMIUM' },
    { name: 'ELITE' },
  ];

  return (
    
    <div className="p-6 md:p-8 w-full ">
      {/* Header */}
      <div className='flex  justify-center w-full flex-col'>
      <h2 className="text-xl font-bold ">THE CLUB</h2>

      {/* Membership Tiers */}
      <div className="space-y-6 w-full ">
        {tiers.map((tier, index) => (
          <div 
            key={index}
            className="border-b border-gray-300"
          >
            <div className="flex items-center justify-between py-4 cursor-pointer"
                 onClick={() => setExpandedTier(expandedTier === index ? null : index)}>
              {/* Tier Name */}
              <h3 className="text-4xl font-bold tracking-tight">{tier.name}</h3>

              {/* Icons */}
              <div className="flex items-center space-x-4">
                {/* Star Icon */}
                <svg 
                  className="w-6 h-6" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Plus Icon */}
                <svg 
                  className={`w-6 h-6 transform transition-transform ${
                    expandedTier === index ? 'rotate-45' : ''
                  }`}
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v14m7-7H5"
                  />
                </svg>
              </div>
            </div>

            {/* Expanded Content */}
            {expandedTier === index && (
              <div className="py-6 text-gray-600">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="space-y-2">
                      {tier.name === 'BASIC' && (
                        <>
                          <li>• Access to main gym area</li>
                          <li>• Basic equipment usage</li>
                          <li>• Locker room access</li>
                        </>
                      )}
                      {tier.name === 'PREMIUM' && (
                        <>
                          <li>• All BASIC features</li>
                          <li>• Group classes included</li>
                          <li>• Personal trainer consultation</li>
                        </>
                      )}
                      {tier.name === 'ELITE' && (
                        <>
                          <li>• All PREMIUM features</li>
                          <li>• Unlimited personal training</li>
                          <li>• Priority booking</li>
                          <li>• Exclusive events access</li>
                        </>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Price:</h4>
                    <p className="text-2xl font-bold">
                      {tier.name === 'BASIC' && '$29/month'}
                      {tier.name === 'PREMIUM' && '$59/month'}
                      {tier.name === 'ELITE' && '$99/month'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default MembershipTiers;

