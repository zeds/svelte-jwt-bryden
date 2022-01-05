<script>
  import {
    AppBar,
    Button,
    List,
    ListItem,
    Icon,
    NavigationDrawer,
    Overlay,
    MaterialApp } from 'svelte-materialify';
  import { mdiMenu,mdiPen,mdiViewDashboard,mdiAccountBox,mdiGavel } from '@mdi/js';
  // import Button from '@smui/button'
  // import List, { Item, Graphic, Separator, Text, Subheader } from '@smui/list';
  import { Item, Graphic, Separator, Text, Subheader } from '@smui/list';
  import { H6 } from '@smui/common/elements';
  import { goto } from '$app/navigation';

  let active = false;
  function toggleNavigation() {
    active = !active;
  }

  function handleClick(path) {
    goto(`/${path}`)
    active = !active;
  }

</script>

<MaterialApp>
<div style="position:relative;height:52px">
  <AppBar>
    <div slot="icon">
      <Button fab depressed on:click={toggleNavigation}>
        <Icon path={mdiMenu} />
      </Button>
    </div>
    <span slot="title"> GIOTA </span>
  </AppBar>
  <!-- <NavigationDrawer style="position: relative" class="primary-color theme--dark" {active}> -->
  <NavigationDrawer absolute {active} style="height: 500px">
    <div class="drawer-container">
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
        <ListItem on:click={() => handleClick('admin')}>
          <span slot="prepend">
            <Icon path={mdiGavel} />
          </span>
          Admin
        </ListItem>
        <ListItem on:click={() => handleClick('admin')}>
          <span slot="prepend">
            <Icon path={mdiGavel} />
          </span>
          Admin
        </ListItem>
      </List>
    </div>
  </NavigationDrawer>
  <Overlay {active} absolute on:click={toggleNavigation} index={1} />
</div>
</MaterialApp>

<slot />

<style>
  /* These classes are only needed because the
    drawer is in a container on the page. */
  .drawer-container {
    margin-top: 50px;
    position: relative;
    display: flex;
    max-width: 600px;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    overflow: hidden;
    z-index: 0;
  }

  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }
 
</style>