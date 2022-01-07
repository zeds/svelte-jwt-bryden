<script>
    import { Menu, Button, List, ListItem } from 'svelte-materialify';
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
    function handleClick(code) {
        langSelected = code;
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