<script>
    import { post, browserSet } from '$lib/req_utils'
    import { Button  } from 'svelte-materialify';
    let username
    let password

    async function handleLogin() {
        let headers = {}
        headers['Content-Type'] = 'application/json'
        const res = await fetch('http://localhost:1337/api/auth/local', {
			method: 'POST',
			body: JSON.stringify({
                identifier: username,
                password
            }),
            headers
		})
        const json = await res.json()
        console.log("data:", json)
        console.log("data jwt:", json.jwt)
        if(json.jwt) {
            browserSet("jwt", json.jwt)
        }
    }
</script>

<div>
    <input type="text" bind:value={username} name="emausername" placeholder="Enter your username" />
    <input type="password" bind:value={password} name="password" placeholder="Enter your password" />

    <Button on:click={handleLogin}>Login</Button>
</div>

<style>
    div {
        margin-top: 20px;
    }
</style>