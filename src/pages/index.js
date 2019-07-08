import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <h1>Home</h1>
    <Link to="/about">About Me</Link>
  </Layout>
);

export default Index;
