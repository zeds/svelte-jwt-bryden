<script lang="ts">
    import Button from '@smui/button'
import CloseIcon from '/src/components/CloseIcon.svelte';
import Contacts from './profile/contacts.svelte';
</script>

<h3>Homepage</h3>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!--<h4>HOST:{import.meta.env.HOST}</h4>-->


<Button on:click={() => alert('It worked')}>Click Me!</Button>
<Button on:click={() => alert('It worked')} color="secondary">Click Me!</Button>
    