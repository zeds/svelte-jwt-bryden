<script>
import io from 'socket.io-client'
let STRAPI_ENDPOINT = 'http://localhost:1337'

var socket = io(STRAPI_ENDPOINT);


function onPress(){
	console.log("button pressed!")
	socket.emit('join', "fuga");
}

socket.on('chat message', function(msg) {
	console.log(msg);
  });


</script>

<ul id="messages"></ul>


<button class="error" on:click={() => onPress()}>Press me</button>



<style>
.body {
		margin: 0;
		padding-bottom: 3rem;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.form {
		background: rgba(0, 0, 0, 0.15);
		padding: 0.25rem;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex; height: 3rem; box-sizing: border-box; backdrop-filter: blur(10px); }
.input { border: none; padding: 0 1rem; flex-grow: 1; border-radius: 2rem; margin: 0.25rem; }
.input:focus { outline: none; }
.form > button { background: #333; border: none; padding: 0 1rem; margin: 0.25rem; border-radius: 3px; outline: none; color: #fff; }

.messages { list-style-type: none; margin: 0; padding: 0; }
.messages > li { padding: 0.5rem 1rem; }
.messages > li:nth-child(odd) { background: #efefef; }
</style>



