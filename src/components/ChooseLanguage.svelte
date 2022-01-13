<script>
    import { Menu, Button, List, ListItem } from 'svelte-materialify';
    import { onMount } from 'svelte'
    import translations from '../multi_langs/translations'
    import { locale, dict } from '../lib/i18n'
    $: dict.set(translations);
    export let langSelected = "ja";
    let langIcon = "/lang/jp.svg";
    const langs = [
        {
            code: "ja",
            icon: "/lang/jp.svg"
        },
        {
            code: "vi",
            icon: "/lang/vn.svg"
        },
        {
            code: "en",
            icon: "/lang/uk.svg"
        },
    ];
    let userId = '';
    onMount(async() => {
        if (!localStorage.getItem('jwt')) return;
        const res = await fetch('http://localhost:1337/api/user-info',{
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            },
        })
        const json = await res.json();
        userId = json.id
        langSelected = json.LangCode;
        $locale=langSelected;
        langIcon =langs.find(x => x.code === langSelected).icon;
    })
    const changeUserLangCode = async (code) => {
        if (!userId) return;
        let headers = {}
        headers["Authorization"] = 'Bearer ' + localStorage.getItem('jwt')

        headers['Content-Type'] = 'application/json'
        let res = await fetch("http://localhost:1337/api/users/"+userId, {
                method: 'PUT',
                body: JSON.stringify({
                    LangCode: code
                }),
                headers
            }
        )
        let json = await res.json();
    }
    function handleClick(code) {
        langSelected = code;
        $locale=langSelected;
        changeUserLangCode(code);
        langIcon =langs.find(x => x.code === code).icon;
    }
    
  </script>
<div style="min-width: 60px;">
    <Menu>
        <div slot="activator">
          <Button tile size="small"><img class="choose-lang-item-img" src="{langIcon}" alt="" /></Button>
        </div>
        <List dense>
          <ListItem on:click={() => handleClick("ja")}>
              <div slot="prepend" class="lang-item-img">
              <img class="choose-lang-item-img" src="/lang/jp.svg" alt="" />
            </div>
            <div class="lang-item">
            日本語
        </div>
            </ListItem>
          <ListItem on:click={() => handleClick("vi")}>
              <div slot="prepend" class="lang-item-img">
              <img class="choose-lang-item-img" src="/lang/vn.svg" alt="" />
            </div>
            <div class="lang-item">
            TIẾNG VIỆT
            </div>
            </ListItem>
          <ListItem on:click={() => handleClick("en")}>
              <div slot="prepend" class="lang-item-img">
              <img class="choose-lang-item-img" src="/lang/uk.svg" alt="" />
            </div>
            <div class="lang-item">
            English
            </div>
            </ListItem>
        </List>
      </Menu>
  </div>
  <style>
      .choose-lang-item-img {
          width: 30px;
          height: 18px;
          padding: 0px !important;
      }
      .lang-item {
         width: 67px;
          text-align: center;
      }
      .lang-item-img {
          padding: 0px;
      }
  </style>