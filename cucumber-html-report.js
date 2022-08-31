const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json',
	reportPath: './reports/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '103'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'About You project'},
            {label: 'Release', value: '1.0.0'},
        ]
    }
});