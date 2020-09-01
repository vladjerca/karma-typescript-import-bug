module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: [
            'jasmine',
            'karma-typescript',
        ],
        files: [
            'src/**/*.ts',
        ],
        client: { clearContext: false },
        plugins: [
            'karma-spec-reporter',
            'karma-jasmine',
            'karma-typescript',
            'karma-jasmine-html-reporter',
            'karma-chrome-launcher',
        ],
        preprocessors: {
            'src/**/*.ts': 'karma-typescript',
        },
        reporters: [ 'spec', 'kjhtml', 'karma-typescript' ],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: [ 'Chrome' ],
        singleRun: false,
        concurrency: Infinity,
        karmaTypescriptConfig: {
            tsconfig: './tsconfig.json',
            bundlerOptions: {
                sourceMap: true,
            },
            coverageOptions: {
                instrumentation: true,
                exclude: [
                    /\.(d|spec|test)\.ts$/i
                ],
            },
        },
    });
};
