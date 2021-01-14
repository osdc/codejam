<script>
	import pgnParser from 'pgn-parser';
	import * as Tone from 'tone'
	import { Note, Scale } from "@tonaljs/tonal";
	// const pgnParser = require('pgn-parser');

	export let name;
	let files;
	let len; let i; 
	var notes1 = []
	var Cmajor = ['C4','D4','E4','F4','G4','A4','B4','C5'];
	function upload() {
  var reader = new FileReader();
  reader.onload = function(evt) {
	// console.log(evt.target.result);
	const [result] = pgnParser.parse(evt.target.result);
	len = result.moves.length
	//var notes1 = []
	for(i=0;i<len;i++) {
		notes1[i] = result.moves[i].move.slice(-1);
	}
	//console.log(notes1)
	console.log(result)
	  //create a synth and connect it to the main output (your speakers)
	  const synth = new Tone.Synth().toDestination();
	//play a middle 'C' for the duration of an 8th note
	const now = Tone.now()
	for( i=0; i <notes1.length;i++) {
		synth.triggerAttackRelease(Cmajor[notes1[i]-1], "0.5", now + (0.5*i));	  
	}
  };
  reader.readAsText(files[0]);
}
</script>

<main>
	<input type="file" bind:files>
	{#if files}
   		<button on:click={upload}>Submit</button>
	{:else}
    	<button on:click={upload} disabled>Submit</button>
	{/if}
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>