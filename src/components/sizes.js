// eslint-disable-next-line
export default {
    // up(size) {
    //    const points = {
    //         xs: '320px', //mobile
    //         sm: '600px', //mobile landscape
    //         md: '768px', //tablet portrait
    //         lg: '1024px', //tablet landscape
    //         xl: '1366px', //laptop display
    //         // desk: '1680', //desktop display
    //    }
    //    return `@media (min-width: ${points[size]})`
    // },
    down(size) {
        const sizes = {
            //these will be the breakpoints
            xs: '479.98x',
            sm: '768.98px',
            md: '1023.98px',
            lg: '1299.98px',
            xl: '1408.98px', //desktop display
    //not including xl because our current styles cater to xl devices.
       } 
       return `@media (max-width: ${sizes[size]})`
    }
}

