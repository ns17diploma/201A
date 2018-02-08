/*After window was load, call the hide_error function*/
window.addEventListener("load", hide_error())

/*the hide error function will loop all the error, and hide them*/
function hide_error(){
    for (var i = 0; i < 14 ; i++) {
    document.getElementById("err" + [i]).style.display = "none"
  }
}


class errorMessage{

  /*Get all error number and show them in index.html*/  
  show_errMessage(err_num){

    /*Before that hide all error first*/
    hide_error()
    
    for (var i = 0; i < err_num.length; i++) {
      document.getElementById('err' + err_num[i]).style.display = "block"
    }
  }
}
module.exports = errorMessage