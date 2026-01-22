module.exports = function(grunt) {

    grunt.initConfig({

        // Compilação do LESS
        less: {
            development: {
                files: {
                    "dist/css/main.css": "src/styles/main.less"
                }
            }
        },

        // Compressão do JavaScript
        uglify: {
            target: {
                files: {
                    "dist/js/main.min.js": "src/scripts/main.js"
                }
            }
        },

        // Copiar o index.html para a pasta dist
        copy: {
            html: {
                src: "src/index.html",
                dest: "dist/index.html"
            }
        }

    });

    // Carregar plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Tarefa padrão
    grunt.registerTask('default', ['less', 'uglify', 'copy']);
};
