module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production' ? true : false,
        content: ['./dist/index.html']
    },
    theme: {},
    variants: {},
    plugins: [],
}
