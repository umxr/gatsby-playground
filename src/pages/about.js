import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';

const About = () => (
  <Header>
    <h1>About Me</h1>
    <p>This is a p tag</p>
    <Link to="/">Home</Link>
  </Header>
);

export default About;
