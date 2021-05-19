const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1f4662' },
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
