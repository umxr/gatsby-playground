import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';

const Index = () => (
  <Header>
    <h1>Home</h1>
    <Link to="/about">About Me</Link>
  </Header>
);

export default Index;
