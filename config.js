module.exports = {
  email: 'congdaovan94@gmail.com',
  siteMetadata: {
    title: 'Cong Dao',
    description:
      'Cong Dao is a curious and self-motivated software engineer who is skilled in building exceptional websites and applications.',
    siteUrl: 'https://congdv.com', // No trailing slash allowed!
    image: '/og.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@congdv',
  },
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/congdv',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/congdv',
    },
  ],
  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    // {
    //   name: 'Work',
    //   url: '/#projects',
    // },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],
  scrollConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
