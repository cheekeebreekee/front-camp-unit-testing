module.exports = function(config){
    config.set({
      files: [
          { 
            pattern: 'app.js', 
            mutated: true, 
            included: false
          },
          'test.js'
      ],
      testRunner: 'mocha',
      coverageAnalysis: "off",
      testSelector: null,
      reporter: [
        'clear-text', 
        'progress'
      ]
    });
  }