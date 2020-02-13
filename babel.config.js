const presets = [
    ["@babel/env", {
        targets: {
            edge: '17',
            firefox: '60',
            chrome: '67',
            safri: '11.1'
        }
    }]
];
module.exports = { presets };