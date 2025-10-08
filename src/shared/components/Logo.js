import React from 'react';

const Logo = ({ size = 'medium', className = '' }) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return { width: '120px', height: '40px' };
      case 'large':
        return { width: '200px', height: '67px' };
      default:
        return { width: '150px', height: '50px' };
    }
  };

  const sizeStyles = getSizeStyles();

  return (
    <div className={`logo ${className}`} style={sizeStyles}>
      <img
        src="/tusk-cpa-logo.png"
        alt="TuskCPA Logo"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
  );
};

export default Logo;
