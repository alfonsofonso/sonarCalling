// request MIDI access
var luces;
var ilu=false;
var hayMidi=true;
var entradas=[];
var salidas=[];
var botonesIluminados=[0,0,0,0,0,0,0,0];

var arturiaOut;
var launchpadOut;
var teensi;
var oxygen;
var axiom;

if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess({
        sysex: false // this defaults to 'false' and we won't be covering sysex in this article.
    }).then(onMIDISuccess, onMIDIFailure);
} else {    alert("No MIDI support in your browser."); }
// midi functions
function onMIDISuccess(midiAccess) {
    // when we get a succesful response, run this code
   console.log('MIDI Access Object SIZE=', midiAccess.inputs.size);

    if(midiAccess.inputs.size==0){hayMidi=false;return}
      midi = midiAccess; // this is our raw MIDI data, inputs, outputs, and sysex status
      inputs = midi.inputs.values();
      outputs= midi.outputs.values();
    if(midiAccess.inputs.size==0){hayMidi=false;return}
    // loop over all available inputs and listen for any MIDI input
    for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
        entradas.push(input);
        // each time there is a midi message call the onMIDIMessage function
        input.value.onmidimessage = onMIDIMessage;
    for (var output = outputs.next(); output && !output.done; output = outputs.next()) {
        // each time there is a midi message call the onMIDIMessage function
        salidas.push(output);
    }
    console.log("entradas midi="+entradas.length)
    luces=salidas[0].value;

    for(var i=0;i<salidas.length;i++){
      if(salidas[i].value.manufacturer=="Arturia"){arturiaOut=salidas[i];apagoBotones();}//////////
      else if(salidas[i].value.name=="Launchpad Mini"){launchpadOut=salidas[i]}
      else if(salidas[i].value.name=="Teensy MIDI"){teensi=salidas[i]}
      else if(salidas[i].value.name=="USB Oxygen 8 v2"){oxygen=salidas[i]}
      else if(salidas[i].value.name=="Axiom 25 Axiom USB In"){axiom=salidas[i]}
      else{console.log("hay algo conectado!")}
    }
  }
}

function onMIDIFailure(e) {
    console.log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + e);
}

function onMIDIMessage(message) {
  data = message.data; // this gives us our [command/channel, note, velocity] data.
  console.log("mensaje ");
  if (message.target.name=="Launchpad Mini"){
    log("Launchpad");
  }else if (message.target.name=="Arturia MINILAB"){
    log("Arturia");
  } else if(message.target.name=="USB Oxygen 8 v2"){
      log("oxygen");
  }else if(message.target.name=="Teensy MIDI"){
    log("Teensy");
  }
      //instr.send([data[0],data[1],data[2]])
    //// rojo:0x0f verde: 0x30 ambar:0x13 yellow: 127; verde suave: 0x18...
 console.log("MIDI: "+ data[0] + " "+ data[1]+" "+data[2]); // MIDI data [144, 63, 73]
    //message.target.send( [0x92, 60, 127]);
}

var apagoBotones=function(b){//b es el que no quieres apagar
//  if(b==8){}
  for(var i=0;i<botonesIluminados.length;i++){//no apagues el 8!
    arturiaOut.value.send([145,36+i,0]);
    botonesIluminados[i]=0;
  }
}
