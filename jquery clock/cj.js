function showTime(){
    // to get current time/ date.
    var date = new Date();
    // to get the current hour
    var h = date.getHours();
      // to get the current minutes
    var m = date.getMinutes();
    //to get the current second
    var s = date.getSeconds();
    var thehours = new Date().getHours();
      var themessage;
    var morning = ('Good morning');
      var afternoon = ('Good afternoon');
      var evening = ('Good evening');
      var night = ('Good night');
  
      if (thehours >= 0 && thehours < 12) {
          themessage = morning; 
  
      } else if (thehours >= 12 && thehours < 17) {
          themessage = afternoon;
  
      } else if (thehours >= 17 && thehours < 21) {
          themessage = evening;
      }
      else{
        themessage = night;
      }
      var thesecond = new Date().getSeconds();
      var sec;
    var odd = ('odd second');
      var even = ('even second');
    if( s% 2 ===0){
      sec= even;
    }
    else{
      sec= odd;
    }
      
     
      
   
    //putting time in one variable
    var time = h + ":" + m + ":" + s+""+themessage+"     "+sec;
    //putting time in our div
    $('#clock').html(time); 
    //to change time in every seconds
    setTimeout( showTime, 1000 );
  }
  showTime();
  
  