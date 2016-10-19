$('document').ready(function() {
	var options = { videoId: 'vygDls0NZeo', start: 3 };
	$('#index_main').tubular(options);
	
});

function play_trailer(id){
    document.getElementById("trailer_player").style.display = 'block';

    var trailer_kind = id;

    switch (trailer_kind) {
              
      case "main_trailer":
        document.getElementById("trailer_player_content").src ="https://www.youtube.com/embed/H4z7Px68ywk?rel=0&autoplay=1";
        break;
              
      case "main_trailer2":
        document.getElementById("trailer_player_content").src ="https://www.youtube.com/embed/bF1YIF_FknI?rel=0&autoplay=1";
        break;
              
      case "movie_clip1":
        document.getElementById("trailer_player_content").src ="https://www.youtube.com/embed/ezZilTUuzIQ?rel=0&autoplay=1";
        break;
              
      case "movie_clip2":
        document.getElementById("trailer_player_content").src ="https://www.youtube.com/embed/5syeZtqaEg0?rel=0&autoplay=1";
        break;
              
      case "movie_clip3":
        document.getElementById("trailer_player_content").src ="https://www.youtube.com/embed/VDg6Kaawb88?rel=0&autoplay=1";
        break;
      }
          
          
}

function close_trailer(){
    document.getElementById("trailer_player").style.display = 'none';
     document.getElementById("trailer_player_content").src =""
}