//
var vel=8192;//divisor velocidad
var freq=64;//divisor frecuencia
var sinte=new Tone.PolySynth(6, Tone.Synth).toMaster();
var sinteTierra=new Tone.MonoSynth().toMaster();

sinte.volume.value=-16;
sinte.set({
  "oscillator"  : {
    "type"  : "triangle"
  },
  "envelope"  : {
    "attack"  : 0.25 ,
    "decay"  : 0.5 ,
    "sustain"  : 0.3 ,
    "release"  : 8
  }
});

sinteTierra.volume.value=-32;
sinteTierra.set({
  "oscillator"  : {
    "type"  : "sawtooth"
  },
  "envelope"  : {
    "attack"  : 0.05 ,
    "decay"  : 0.6 ,
    "sustain"  : 0.2 ,
    "release"  : 0.1
  }
});

mercurioT=87.9583;//Traslación de Marte en dias
venusT=224.7083;
tierraT=365.25;
marteT=686.971;
jupiterT=4332.7;
saturnoT=10759.25;
uranoT=30688.375
neptunoT=60181.2916;

mercurioF=4878;
venusF=12100;
tierraF=12756;
marteF=6786;
jupiterF=143200;
saturnoF=120536;
uranoF=51118;
neptunoF=49528;

//schedule a few notes
var loopMer = new Tone.Loop(function(time){
	sinte.triggerAttackRelease(mercurioF/freq, "64n", time)
}, mercurioT/vel);

var loopVen = new Tone.Loop(function(time){
	sinte.triggerAttackRelease(venusF/freq, "64n", time)
}, venusT/vel);

var loopTie = new Tone.Loop(function(time){
	sinteTierra.triggerAttackRelease(tierraF/freq, "32n", time)
}, tierraT/vel);

var loopMar = new Tone.Loop(function(time){
	sinte.triggerAttackRelease(marteF/freq, "32n", time)
}, marteT/vel);

var loopJup = new Tone.Loop(function(time){
	sinte.triggerAttackRelease(jupiterF/freq, "2n", time)
}, jupiterT/vel);

var loopSat = new Tone.Loop(function(time){
	sinte.triggerAttackRelease(saturnoF/freq, "2n", time)
}, saturnoT/vel);

var loopUra = new Tone.Loop(function(time){
	sinte.triggerAttackRelease(uranoF/freq, "4n", time)
}, uranoT/vel);

var loopNep = new Tone.Loop(function(time){
	sinte.triggerAttackRelease(neptunoF/freq, "4n", time)
  console.log("neptunoF")
}, neptunoT/vel)

loopMer.start(0);
loopVen.start(0);
loopTie.start(0);
loopMar.start(0);
loopJup.start(0);
loopSat.start(0);
loopUra.start(0);
loopNep.start(0);


function dale(){
  Tone.Transport.start();
}
//set the transport to repeat
//Tone.Transport.loopEnd = '1m'
//Tone.Transport.loop = true
