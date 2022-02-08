<script>
	import Toasts from "/src/components/Toasts.svelte";
  import { addToast } from "/src/stores";
	import Button from '/src/shared/Button.svelte';

  let message = "Hello, World!";
  let types = ["success", "error", "info"];
  let type = "success";
  let dismissible = true;
  let timeout = 1000;
</script>

<Toasts />

<div class="container">
<form on:submit|preventDefault>
  <p>
    <label>
      Message:
      <input bind:value={message} />
    </label>
  </p>
  <p>
    <label>
      Timeout:
      <input bind:value={timeout} type="number" />
    </label>
  </p>
  <p>
    <label>
      Type:
      <select bind:value={type}>
        {#each types as type}
          <option value={type}>{type}</option>
        {/each}
      </select>
    </label>
  </p>
  <p>
    <label>
      <input bind:checked={dismissible} type="checkbox" />
      Dismissible?
    </label>
  </p>

  <Button on:click={() => addToast({ message, type, dismissible, timeout })}>
    Add toast : {dismissible}
	</Button>

</form>

</div>

<style>
  /*:global(*) {
    box-sizing: border-box;
  }*/

	.container {
		margin-top: 0;
		display: flex;
		align-items: center;

	}
	

  form {
    border: 0 none;
    margin-top: 1rem;
    text-align: center;
		height: 10hv;
  }
</style>
