module.exports = {
  options : {
  	template : 'default.html',
  	ignorePath : 'bower_components/**',
  	addRootSlash : false 	
  },
  local_dependencies : {
  	files : {
  		'default.html' : ['css/*.css' , 'js/*.js']
  	}
  }
}