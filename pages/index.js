import Head from 'next/head';
import Layout from '../components/layout';
import styled from 'styled-components';
import Hero from '../components/sections/hero';
import dynamic from 'next/dynamic';
import Header from 'components/head';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

export default function Home({ location }) {
  const About = dynamic(() => import('../components/sections/about'), { ssr: false });
  const Contact = dynamic(() => import('../components/sections/contact'), { ssr: false });
  return (
    <Layout location={location}>
      <StyledMainContainer className="fillHeight">
        <Header />
        <Hero />
        <About />
        <Contact />
      </StyledMainContainer>
    </Layout>
  );
}
