const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        // modifyVars: { '@primary-color': '#ff0000' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],

    externals: {
        'ConfigData': {
            clientID: '1097hy67546hbdy2',
            serverURL: 'https://example.com/api/'
        }

    },
};
