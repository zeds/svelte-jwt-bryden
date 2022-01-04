<script land="ts">
    import { onMount } from 'svelte';
    import IconButton, {Icon} from '@smui/icon-button';
    import { mdiMenu } from '@mdi/js';
    import { Svg } from '@smui/common/elements';

    
</script>

<svelte:head>
  <!-- SMUI Styles -->
  <link rel="stylesheet" href="/smui.css" media="(prefers-color-scheme: light)" />
  <link rel="stylesheet" href="/smui-dark.css" media="screen and (prefers-color-scheme: dark)" />

</svelte:head>


<div style="display: flex; align-items: center;">

    <IconButton>
        <Icon component={Svg} viewBox="0 0 24 24">
            <path fill="currentColor" d={mdiMenu} />
        </Icon>
    </IconButton>

    <nav>
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/profile">Profile</a>
        
    </nav>


</div>



<slot />

<style>
	:global(body) {
		overflow: hidden;
	}

	span {
		position: absolute;
		font-size: 5vw;
		user-select: none;
	}
</style>

<!-- <TopAppBar bind:this={topAppBar} variant="standard">
    <Row>
      <Section>
        <IconButton class="material-icons">menu</IconButton>
        <Title>Standard</Title>
      </Section>
      <Section align="end" toolbar>
        <IconButton class="material-icons" aria-label="Download"
          >file_download</IconButton
        >
        <IconButton class="material-icons" aria-label="Print this page"
          >print</IconButton
        >
        <IconButton class="material-icons" aria-label="Bookmark this page"
          >bookmark</IconButton
        >
      </Section>
    </Row>
  </TopAppBar>
  <AutoAdjust {topAppBar}>
    <slot />
  </AutoAdjust>
   
  <script lang="ts">
    // import TopAppBar, {
    //   Row,
    //   Section,
    //   Title,
    //   AutoAdjust,
    //   TopAppBarComponentDev,
    // } from '@smui/top-app-bar';
    // import IconButton from '@smui/icon-button';
   
    // let topAppBar: TopAppBarComponentDev;
  </script>
   
  <style>
    /* Hide everything above this component. */
    :global(app),
    :global(body),
    :global(html) {
      display: block !important;
      height: auto !important;
      width: auto !important;
      position: static !important;
    }
  </style> -->