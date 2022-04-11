module.exports = {
  ci: {
    collect: {
      url: ['https://www.americastestkitchen.com/', 'https://www.cookscountry.com/', 'https://www.cooksillustrated.com/', 'https://www.americastestkitchen.com/reviews', 'https://www.americastestkitchen.com/articles', 'https://www.americastestkitchen.com/recipes/13333-cranberry-curd-tart-with-almond-crust'],
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://mn-lighthouse-ci-61324.herokuapp.com',
      token: '377464fe-7164-4f27-8957-0bbdbe2241c5',
    },
  },
};
