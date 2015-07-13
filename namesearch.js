/*jshint multistr:true */
var text= "jfcbsj cskcnk csbkbc vis bcisab bbsbk vis sdbkbc b \ iscbskbc vis" ;


var myName= "vis";
var hits=[];

for(i = 0; i <text.length; i++){
    if(text[i] === "v"){
        for(j = i; j <(i + myName.length); j++){
            hits.push(text[j]);
        }
    }
    
}

if(hits.length === 0){
    console.log("Your name wasn't found!");
}
    else{
    console.log(hits);
    }
