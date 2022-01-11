<script>
    import { post, browserSet } from '$lib/req_utils'
		import Signup from '/src/components/Signup.svelte'


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

<Signup />
