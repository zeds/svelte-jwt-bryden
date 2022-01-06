<script lang="ts">
    import { post, browserSet } from '$lib/req_utils'
		import Button from '@smui/button'


    let username
    let password

    async function handleLogin() {
        const json = await post(fetch, 'http://localhost:1337/api/auth/local', {
            identifier: username,
            password
        })
        if(json.jwt) {
            browserSet("jwt", json.jwt)
        }
    }
</script>

<div>
    <input type="text" bind:value={username} name="emausername" placeholder="Enter your username" />
    <input type="password" bind:value={password} name="password" placeholder="Enter your password" />

    <button on:click={handleLogin}>Login</button>

		<Button on:click={() => alert('It worked')}>Click Me!</Button>
		<Button on:click={() => alert('It worked')} color="secondary">Click Me!</Button>
		
</div>

<style>
    div {
        margin-top: 20px;
    }
</style>