var images = ["Father.jpg","mother.jpg","brother.jpg","Tiger.jpg","rishabh.jpg"];
var Names = ["Raghubir Singh","Sita Devi","Dhruv Singh","Tiger Singh","ME(Rishabh singh)"];

var i=0;
function update(){
    document.getElementById("Family_Names").innerHTML=Names[i];
    document.getElementById("Family_member_image").src=images[i];
    i++;
    if(i==5){
        i=0;
    }}


