<script>
    import { fly } from 'svelte/transition';
    import {
        Button,
        List,
        ListItem,
        Icon,
        Overlay} from 'svelte-materialify';
    import { mdiViewDashboard,mdiAccountBox,mdiGavel } from '@mdi/js';
    import { goto } from '$app/navigation';
    export let active = false;
    function toggleNavigation() {
        active = !active;
    }

    function handleClick(path) {
        goto(`/${path}`)
        active = !active;
  }
  function Close() {
    active = false;
  }
</script>
{#if active}
  <nav transition:fly={{x: 400, opacity: 1}}>
    <div class="close-button">
        <Button depressed on:click={Close}>
            <Icon class="material-icons">close</Icon>
          </Button>
        </div>
    <div class="menubar">
       
        <List>
            <ListItem on:click={() => handleClick('')}>
              <span slot="prepend">
                <Icon path={mdiViewDashboard} />
              </span>
              Home
            </ListItem>
            <ListItem on:click={() => handleClick('profile')}>
              <span slot="prepend">
                <Icon path={mdiAccountBox} />
              </span>
              Profile
            </ListItem>
            <ListItem on:click={() => handleClick('admin')}>
              <span slot="prepend">
                <Icon path={mdiGavel} />
              </span>
              Admin
            </ListItem>
            <ListItem on:click={() => handleClick('about')}>
              <span slot="prepend">
                <Icon path={mdiGavel} />
              </span>
              About
            </ListItem>
            <ListItem on:click={() => handleClick('login')}>
              <span slot="prepend">
                <Icon path={mdiGavel} />
              </span>
              Login
            </ListItem>
          </List>

    </div>
  </nav>
{/if}
<Overlay {active} absolute on:click={toggleNavigation} index={99998} />
<style>
nav {
  z-index: 99999;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  padding: 2rem 1rem 0.6rem;
  border-left: 1px solid #aaa;
  background: #fff;
  overflow: hidden;
  width: 200px;
}
.close-button{
    width: 30px;
    height: 30px;
    top: 0px;
    padding-top: 0 !important;
    margin-left: auto;
    margin-right: 30px;
}
</style>