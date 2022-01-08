<script>
  export let type = 'primary';
  export let flat = true;
  export let inverse = false;
</script>

<!--<button class:flat={flat} class:inverse={inverse} class={type} on:click>-->
<button class:flat={flat} class:inverse={inverse} class="form__button" on:click>
		<slot></slot>
</button>

<style>
	.form__button {
		font: 500 1rem 'Quicksand', sans-serif;
    width: 100%;
    padding: 1rem 2rem;
    font-weight: bold;
    font-size: 1.1rem;
    color: #ffffff;
    border: none;
    border-radius: var(--border-radius);
    outline: none;
    cursor: pointer;
    background: var(--color-primary);
	}

	.form__button:hover {
			background: var(--color-primary-dark);
	}

	.form__button:active {
			transform: scale(0.98);
	}
  .flat{
    box-shadow: none;
  }
  .primary{
    background: #d91b42;
    color: white;
  }
  .secondary{
    background: #45c496;
    color: white;
  }
  .primary.inverse{
    color: #d91b42;
    background: white;
    border: 2px solid #d91b42;
  }
  .secondary.inverse{
    color: #45c496;
    background: white;
    border: 2px solid #45c496;
  }
</style>