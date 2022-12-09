const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require('sass'));

const pathSCSCC = 'src/scss/**/*.scss';
const pathDestination = 'build/css';

function css(done) {

    src(pathSCSCC) // Didentificar el archivo de SASS (src function)
        .pipe( sass() ) // Compila (pipe function)
        .pipe( dest(pathDestination) ); //Almacena en el disco duro (dest function)

    done(); // Callback que avisa a gulp cuando llegamos al final de la función
}

function dev(done) {
    // Se agrega un watch para ejecutar la función css() para compilar el archivo de SASS
    watch(pathSCSCC, css);

    done();
}

exports.css = css;
exports.dev = dev;