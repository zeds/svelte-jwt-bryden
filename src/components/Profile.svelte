<script>
    import { scale } from 'svelte/transition';
    import { Row, Col, TextField, Button, Card, Alert, Icon  } from 'svelte-materialify';
    import { mdiCheck, mdiImageEdit  } from '@mdi/js';
    import { onMount } from 'svelte'
    let userName = '';
    let email = '';
    let preview = null;
    let userId = '';
    let imageEdit = false;
    let alert = false;
    onMount(async() => {
        console.log("jwt local:", localStorage.getItem('jwt'))
        const res = await fetch('http://localhost:1337/api/user-info',{
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            },
        })
        const json = await res.json();
        console.log("json data:", json)
        userName = json.username
        email = json.email
        userId = json.id
        preview = "http://localhost:1337" + json.Avatar.url
    })
    function onClick()
    {
        var element = document.getElementById("avatarChoose");
        element.click();
    }
    function chooseFile() {
        var element = document.getElementById("avatarChoose");
        const [file] =  element.files;
        preview = URL.createObjectURL(file);
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const uploadImage = async (e) => {
        e.preventDefault();
        
        const formData = new FormData()
        var element = document.getElementById("avatarChoose");
        formData.append('files', element.files[0])

        var res = await fetch("http://localhost:1337/api/upload", {
            method: 'POST',
            body: formData,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        });
        var json = await res.json();
        console.log("upaload res:", json)
        const imageURL =  json[0].url
        let headers = {}
        headers["Authorization"] = 'Bearer ' + localStorage.getItem('jwt')

        headers['Content-Type'] = 'application/json'
        res = await fetch("http://localhost:1337/api/users/"+userId, {
                method: 'PUT',
                body: JSON.stringify({
                    Avatar: json[0]
                }),
                headers
            }
        )
       json = await res.json();
       alert = true;
       await sleep(2000);
       alert = false;
       console.log("dat:", json);
}
function handleMouseOver() {
    if (!imageEdit) {
        imageEdit = true;
    }
}
function handleMouseOut() {
	if (imageEdit) {
        imageEdit = false;
    }
}
</script>
<Alert dense class="success-color" transition={scale}
transitionOpts={{ duration: 500 }}
bind:visible={alert}>
    <div slot="icon">
      <Icon path={mdiCheck} />
    </div>
    Update success
  </Alert>
<input id="avatarChoose" type="file" name="Avatar" on:change={chooseFile}  style="display:none" />
<div class="d-flex justify-center mt-4 mb-4">
    <div style="max-width:352px;border: 1px solid black;">
<Row>
    <Col>
        <div style="max-width:350px;position: relative;" >
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <img style="width:350px;height:350px;display: block;" src={preview} alt="" on:click={onClick} on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} />
            {#if imageEdit}
            <Icon path={mdiImageEdit} style="position: absolute;;padding: 0px; bottom:0; left:0;" />
            {/if}
          </div>
    </Col>
    <Col>
        <TextField placeholder="User Name" value={userName}>User Name</TextField>
        <TextField placeholder="Email" value={email}>Email</TextField>
        <div class="d-flex justify-center">
            <Button on:click={uploadImage}>Save</Button>
        </div>
    </Col>
  </Row>
</div>
</div>