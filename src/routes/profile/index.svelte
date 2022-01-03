<script>
    import { onMount } from 'svelte'
    let name
    let email

    onMount(async() => {
        const res = await fetch('http://localhost:1337/api/users/me',{
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            },
        })
        const json = await res.json();
        name = json.username
        email = json.email
    })

</script>>

<h2>name:{name}</h2>
<h2>email:{email}</h2>

