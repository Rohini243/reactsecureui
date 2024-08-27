import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleConnectorClick = (e) => {
    e.preventDefault();  // Prevent the default anchor behavior
    navigate('/connector');  // Navigate to the connector page
  };

  return (
    <div className='headerSection'>
      <div className="left">
        <div className="title">
          <h2>Dashboard</h2>
        </div>
      </div>
      <div className="center">
        <div>
          <a
            href="/connector"
            className="linkStyle"
            onClick={handleConnectorClick}
          >
            Connector
          </a>
        </div>
        <div>
          <a
            href="/playbooks"
            className="linkStyle"
            onClick={() => navigate('/playbooks')}
          >
            Playbooks
          </a>
        </div>
        <div>
          <a
            href="/logs"
            className="linkStyle"
            onClick={() => navigate('/logs')}
          >
            Logs
          </a>
        </div>
      </div>
      <div className="right">
        <div>
          <a
            href="/signin-signup"
            className="linkStyle"
            onClick={() => navigate('/signin-signup')}
          >
            Signin/ Signup
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
