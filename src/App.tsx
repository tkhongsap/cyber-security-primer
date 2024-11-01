import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Abstract from './components/sections/Abstract';
import NetworkSecurity from './components/sections/NetworkSecurity';
import EndpointSecurity from './components/sections/EndpointSecurity';
import ApplicationSecurity from './components/sections/ApplicationSecurity';
import DataSecurity from './components/sections/DataSecurity';
import IncidentResponse from './components/sections/IncidentResponse';
import References from './components/sections/References';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Abstract />} />
          <Route path="/network-security" element={<NetworkSecurity />} />
          <Route path="/endpoint-security" element={<EndpointSecurity />} />
          <Route path="/application-security" element={<ApplicationSecurity />} />
          <Route path="/data-security" element={<DataSecurity />} />
          <Route path="/incident-response" element={<IncidentResponse />} />
          <Route path="/references" element={<References />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;