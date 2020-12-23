import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { Loader, Footer, Nav, Social, Email } from 'components';

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function Layout({ children }) {
  const location = useRouter();
  const isHome = location.pathname === '/';
  const [isLoading, setLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.asPath.startsWith('/#')) {
      const id = location.asPath.substring(2);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
          element.focus();
        }
      }, 0);
    }
  }, [isLoading]);

  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    handleExternalLinks();
  }, []);

  return (
    <>
      <div id="root">
        <ThemeProvider theme={theme}>
          {isLoading && isHome ? (
            <Loader finishLoading={() => setLoading(false)} />
          ) : (
            <StyledContent>
              <Nav isHome={isHome} />
              <Social isHome={isHome} />
              <Email isHome={isHome} />

              <div id="content">
                {children}
                <Footer />
              </div>
            </StyledContent>
          )}
        </ThemeProvider>
      </div>
    </>
  );
}
