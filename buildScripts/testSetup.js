// this is not transpiled

// babel register should run before mocha so that our code will be transpiled
require('babel-register')(); // excuting bable first

// Disable webpack features that Mocha don't understand
require.extensions['.css'] = () => { }; // it will treat .css as an empty function
