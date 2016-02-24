module.exports = {
  options: {
        spawn: false // add spawn option in watch task
      },
      scss: {
        files: ['scss/*.scss'],
        tasks: ['sass' , 'autoprefixer'],
        }
}