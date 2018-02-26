//cancion1
var tempoBPM=100;
var sonando=false;
var quantization=["2n","4n","4t","8n","8t","16n","16t","32n","64n","128n"];

Tone.Transport.bpm.value=tempoBPM;
Tone.Transport.latencyHint="interactive";
//set the attributes using the set interface


//////////////////////////////////////////     CONEXIONES

tocanota=function(){
  dale();
}

paranota=function(){

}

//////////////////////////////////////    FUNCIONES   ··················


tempo=function(a){
	tempoBPM=a;
	if (tempoBPM<1) {
		tempoBPM=1
	}else if(tempoBPM>1000){tempoBPM=4000}
	Tone.Transport.bpm.value=tempoBPM;
	console.log("tempoBPM= "+tempoBPM)
}


onload=function(){
	initVisual();

	console.log("para empezar usar función: dale()")
}
