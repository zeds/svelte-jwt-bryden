<script>
    import { onMount } from 'svelte'
    let name
    let email
		let json_obj

    onMount(async() => {
        const res = await fetch('http://localhost:1337/api/users/me',{
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            },
        })
        json_obj = await res.json();
        name = json_obj.username
        email = json_obj.email
    })

</script>

<div class="container">
	<form>
		<h3>name:{name}</h3>
		<h3>email:{email}</h3>
		{JSON.stringify(json_obj)}
	</form>
</div>

<style>
.container{
	width: 100vw;
	height: 100vh;
	background-color: #dddddd;
}

</style>


