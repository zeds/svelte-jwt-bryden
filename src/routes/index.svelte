<script lang="ts">
    import Button from '@smui/button'
</script>

<h1>Homepage</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>



<Button on:click={() => alert('It worked')}>Click Me!</Button>
<Button on:click={() => alert('It worked')} color="secondary">Click Me!</Button>
    