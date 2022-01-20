<script>
    import { scale } from 'svelte/transition';
    import { Row, Col, TextField, Button, Alert, Icon,  Select, Textarea    } from 'svelte-materialify';
    import { mdiCheck } from '@mdi/js';
    import { Datefield } from 'svelte-mui';
    import { locale, t } from '../lib/i18n'
    import { onMount } from 'svelte'
    let profile = {};
    let preview = null;
    let imageEdit = false;
    let alert = false;
    let fieldChanges = [];
    let dateOfBirth = new Date();
    let domain = "http://localhost:1337";
    let zipCodeSearch = "http://zipcloud.ibsnet.co.jp/api/search?zipcode=";
    onMount(async() => {
        console.log("jwt local:", localStorage.getItem('jwt'))
        const res = await fetch(domain+ '/api/user-info',{
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            },
        })
        profile = await res.json();
        var dateOfBirthNode = document.getElementById("dateOfBirth");
        dateOfBirthNode.value = profile.dateOfBirth.toString();
        console.log("d:", new Date());
        console.log("date of Birth:", dateOfBirth);
        console.log("json data:", profile)
        preview = domain + profile.avatar.url
        fieldChanges = [];
    })
    function onClick()
    {
        var element = document.getElementById("chooseAvatar");
        element.click();
    }
    function chooseFile() {
        var element = document.getElementById("chooseAvatar");
        const [file] =  element.files;
        preview = URL.createObjectURL(file);
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    function cloneProfile() {
        var data = {};
        if (!fieldChanges ||  !fieldChanges.length || fieldChanges.length == 0) {
            return data;
        }
        fieldChanges.forEach(function (item) {
            data[item] = profile[item];
        });
        return data;
    }
    const saveProfile = async (e) => {
        e.preventDefault();
        console.log("profile:", profile);
        var element = document.getElementById("chooseAvatar");
        var data = cloneProfile();
        console.log("data push to api:", data);
        if (element && element.files && element.files.length > 0) {
            const formData = new FormData();
            formData.append('files', element.files[0])
            var res = await fetch(domain + "/api/upload", {
                method: 'POST',
                body: formData,
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('jwt')
                }
            });
            var json = await res.json();
            profile.avatar = json[0];
            data.avatar = json[0];
            fieldChanges.push('avatar');
            console.log("upaload res:", json)
        }
        if (!fieldChanges ||  !fieldChanges.length || fieldChanges.length == 0) return;//no change
        fieldChanges = [];
        let headers = {}
        headers["Authorization"] = 'Bearer ' + localStorage.getItem('jwt')

        headers['Content-Type'] = 'application/json'
        res = await fetch(domain + "/api/users/"+profile.id, {
                method: 'PUT',
                body: JSON.stringify(data),
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
    const searchZipCode = async (e) => {
        var zipCode = profile.zipCode;
        const url = zipCodeSearch + zipCode;
        const res = await fetch(url,{
            method: 'GET'
        })
        const json = await res.json();
        console.log("json:", json);
        if (json.results && json.results.length > 0) {
            profile.state = json.results[0].address1;
            profile.city = json.results[0].address2 + json.results[0].address3;
            fieldChanges.push('state');
            fieldChanges.push('city');
        }
    }
    function textInputChange(e) {
        const name = e.target.name;
        if (!name) return;
        if (!fieldChanges.includes(name)) {
            fieldChanges.push(name);
        }
        profile[e.target.name] = e.target.value;
    }
    let format = 'YYYY-MM-DD';
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
        return [year, month, day].join('-');
    }
    const dateOfBirthChange = ({ detail }) => {
        console.log('onchange', detail);
        profile.dateOfBirth = formatDate(detail);
        fieldChanges.push('dateOfBirth');
    };
    function genderChange() {
        fieldChanges.push('gender');
    }
    function countryChange() {
        fieldChanges.push('country');
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
<input id="chooseAvatar" type="file" name="Avatar" on:change={chooseFile}  style="display:none" />

<Row noGutters>
    <Col cols={12} sm={6} md={3}>
        <div class="pa-2">
            <div class="profile-image">
                    <div>{$t('profile.image')}</div>
                    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                    <img class="avatar" src={preview} alt="" on:click={onClick} on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} />
            </div>
        </div>
    </Col>
    <Col cols={12} sm={6} md={9}>
        <div class="pa-2">
            <div class="input-item">
                <TextField name="firstName" placeholder={$t('profile.firstName')} value={profile.firstName} on:change={textInputChange}>{$t('profile.firstName')}</TextField>
            </div>
            <div class="input-item">
            <TextField name="lastName" placeholder={$t('profile.lastName')} value={profile.lastName} on:change={textInputChange}>{$t('profile.lastName')}</TextField>
        </div>
        <div class="input-item">
            <Select bind:value={profile.gender} on:change={genderChange} items={$t('profile.genderList')} >{$t('profile.gender')}</Select>
        </div>
        <div class="input-item">
            <Datefield id="dateOfBirth"
                value={dateOfBirth}
                label={$t('profile.dateOfBirth')}
                format={format} locale={$locale}
                on:date-change={dateOfBirthChange}
                readonly={false}
            />
        </div>
        <div class="input-item">
            <Select bind:value={profile.country} on:change={countryChange} items={$t('profile.countryList')}>{$t('profile.country')}</Select>
        </div>
        <div class="input-item">
            <Row>
                <Col><TextField name="zipCode" placeholder={$t('profile.zipCode')} value={profile.zipCode} on:change={textInputChange}>{$t('profile.zipCode')}</TextField></Col>
                <Col style="max-width:120px;"><Button class="blue white-text" on:click={searchZipCode}>{$t('profile.btnSearch')}</Button></Col>
            </Row>
            
        </div>
        <div class="input-item">
            <TextField name="state" placeholder={$t('profile.state')} value={profile.state} on:change={textInputChange}>{$t('profile.state')}</TextField>
        </div>
        <div class="input-item">
            <TextField name="city" placeholder={$t('profile.city')} value={profile.city} on:change={textInputChange}>{$t('profile.city')}</TextField>
        </div>
        <div class="input-item">
            <TextField name="address" placeholder={$t('profile.address')} value={profile.address} on:change={textInputChange}>{$t('profile.address')}</TextField>
        </div>
        <div class="input-item">
            <TextField name="building" placeholder={$t('profile.building')} value={profile.building} on:change={textInputChange}>{$t('profile.building')}</TextField>
        </div>
        </div>
    </Col>
  </Row>
  <Row>
      <Col>
        <Textarea name="comment" solo placeholder={$t('profile.comment')} value={profile.comment} on:change={textInputChange} />
        <div class="d-flex justify-center">
            <Button class="blue white-text" on:click={saveProfile}>{$t('profile.btnSave')}</Button>
        </div>
    </Col>
  </Row>
<style>
    .input-item {
        margin-top:10px;
    }
    .profile-image {
        max-width:240px;margin-left: auto; margin-right: auto;
    }
    .avatar {
        width:240px;height:240px;display: block;
    }
</style>
