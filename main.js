var VideoGroup1 = [ "Pics/Virtual_Camera_1.mp4", 
				   	"Pics/Virtual_Camera_2.mp4",
					"Pics/Virtual_Camera_1.mp4", 
				   	"Pics/Virtual_Camera_2.mp4", 
					"Pics/Virtual_Camera_1.mp4", 
				   	"Pics/Virtual_Camera_2.mp4", 
					"Pics/Virtual_Camera_1.mp4", 
				   	"Pics/Virtual_Camera_2.mp4", 
					"Pics/Virtual_Camera_1.mp4", 
				   	"Pics/Virtual_Camera_2.mp4", 
					"Pics/Virtual_Camera_2.mp4", ];

var VideoGroup2 = [ "Pics/Virtual_Camera_1.mp4", 
				   	"Pics/Virtual_Camera_2.mp4",
					"Pics/Virtual_Camera_3.mp4", 
				   	"Pics/Virtual_Camera_4.mp4"];

var Trajectory1 = [ "Pics/Virtual_Camera_1.mp4", 
				   	"Pics/Virtual_Camera_2.mp4",
					"Pics/Virtual_Camera_1.mp4", ];





var VideoLink = document.getElementById('video');

//Populate camera trajectory buttons from array
var TrajectoryButtons = Trajectory1.map((option,index) => {
      return '<input type="radio" id='+ index +
                     ' value='+ option +
                     ' name="buttonGroup" onclick="VideoLink.src =this.value" onclick="enable_next_step_button()"><label for='+ index +'><img src="Pics/TrajectoryButton/TrajectoryButton'+index+'.png" Class="TrajectoryButton"></label>';
 });

$("#TrajectoryButtonArea").html(TrajectoryButtons.join(""));

//Populate camera trajectory buttons from array

var OriginalVideoButtons = VideoGroup1.map((option,index) => {
      return '<input type="radio" id='+ index +
                     ' value='+ option +
                     ' name="buttonGroup" onclick="VideoLink.src =this.value" onclick="enable_next_step_button()"><label for='+ index +'><video playsinline src='+ option+'#t=0.1 Class="VideoButton"></label>';
 });

$("#OriginalButtonArea").html(OriginalVideoButtons.join(""));


/*
var select = document.getElementsByName('buttonGroup'); 
              
	for(i = 0; i < select.length; i++) { 
	    if(select[i].checked) 
	    document.getElementById('video').src =select[i].value
		document.getElementById("buttonArea").innerHTML
	                        = "Gender: "+select[i].value; 
	} 



*/


//tools page
//Right Tab
document.getElementsByClassName('tablinks')[0].click()
function RightTab(evt, TabName){
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for(i = 0; i<tabcontent.length;i++){
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
  	for (i = 0; i < tablinks.length; i++) {
    	tablinks[i].className = tablinks[i].className.replace(" active", "");
  	}
  	document.getElementById(TabName).style.display = "block";
    evt.currentTarget.className += " active";
}


//next step button
function enable_next_step_button() {
            document.getElementById("next-step-button").disabled = false;
            console.log('Button is Listening');
        }


document.getElementsByClassName('tablinks')[0].click()



//edit page
var canvas = document.getElementById('video');
var ctx = canvas.getContext('2d');
var img = document.createElement('IMG');

img.onload = function() {
    var OwnCanv = new fabric.Canvas('video', {
        isDrawingMode: true
    });

    var imgInstance = new fabric.Image(img, {
        left: 0,
        top: 0,
    });
    OwnCanv.add(imgInstance);

    OwnCanv.freeDrawingBrush.color = "purple"
    OwnCanv.freeDrawingBrush.width = 4

    OwnCanv.on('path:created', function(options) {
        var path = options.path;
        OwnCanv.isDrawingMode = false;
        OwnCanv.remove(imgInstance);
        OwnCanv.remove(path);
        OwnCanv.clipTo = function(ctx) {
            path.render(ctx);
        };
        OwnCanv.add(imgInstance);
    });
}

img.src = document.getElementById(video);







