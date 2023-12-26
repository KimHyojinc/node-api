module.exports = {
    apps: [{
        name: 'app',
        script: './app.js',
        instances: 1,
        exec_mode: 'cluster',
        watch: true,
    }]
}