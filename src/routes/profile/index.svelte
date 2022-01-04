<script>
    import { onMount } from 'svelte'
    import { goto } from '$app/navigation'
    let name = ''
    let email = ''

    if(typeof localStorage !== 'undefined') {
        const token = localStorage.getItem('jwt')
        if(!token){
            goto('/')
        }else{
            onMount(async() => {
                const res = await fetch('http://localhost:1337/api/users/me',{
                    method: 'GET',
                    headers: {
                        Authorization: 'Bearer ' + token
                    },
                })
                const json = await res.json();
                name = json.username
                email = json.email
            })
        }
    }

</script>>

<h2>name:{name}</h2>
<h2>email:{email}</h2>

