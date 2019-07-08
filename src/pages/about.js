import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const About = () => (
  <Layout>
    <h1>About Me</h1>
    <p>This is a p tag</p>
    <Link to="/">Home</Link>
  </Layout>
);

export default About;
