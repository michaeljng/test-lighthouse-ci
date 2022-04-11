module.exports = {
  ci: {
    collect: {
      url: ['https://www.americastestkitchen.com/'],
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://mn-lighthouse-ci-61324.herokuapp.com',
      token: process.env.LHCI_BUILD_TOKEN,
    },
  },
};
