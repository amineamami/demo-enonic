import * as thymeleafLib from '/lib/thymeleaf';

const view = resolve( 'demo.html' );


exports.get = ( request ) => {
    return {
        body : thymeleafLib.render( view ),
    }
}
