module.exports = {
  ci: {
    collect: {
      url: ['https://www-staging3.cooksillustrated.com/'],
      puppeteerScript: 'puppeteer-script.js',
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://mn-lighthouse-ci-61324.herokuapp.com',
      token: '377464fe-7164-4f27-8957-0bbdbe2241c5',
    },
  },
};
