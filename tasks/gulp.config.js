module.exports.configuration = {
    paths: {
        src: {
            entry: 'src',
            get html() {
                return `${this.entry}/index.html`
            },
            get js() {
                return [`${this.entry}/assets/scripts/**/*.js`]
            },
            get scss() {
                return [`${this.entry}/assets/sass/**/*.scss`]
            }
        },
        dist: {
            entry: 'dist',
            get css() {
                return [`${this.entry}/*.css`]
            },
            get html() {
                return `${this.entry}/index.html`
            },
            get js() {
                return [`${this.entry}/**/*.js`]
            },
        }
    }
};