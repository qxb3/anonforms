<script>
  import Navbar from '$lib/components/Navbar.svelte'
  import FormCard from '$lib/components/FormCard.svelte'

  export let featuredForms
</script>

<Navbar />

<div class="uk-container uk-container-xsmall">
  <section class="intro">
    <img class="logo uk-margin-small-top" src="/logo.png" alt="Logo"/>
    <h1 class="name uk-text-lead uk-margin-remove">AnonForms</h1>
    <p class="description uk-text-meta uk-margin-remove">Anonymously create and answer forms</p>
  </section>

  <hr class="uk-divider-icon uk-margin-medium-top">

  <section class="uk-margin-large-top">
    <h1 class="uk-text-lead">Featured Forms</h1>

    {#each featuredForms as form}
      <FormCard {form} />
    {/each}
  </section>
</div>

<style>
  .intro {
    display: grid;
    place-items: center;
    text-align: center;
  }

  .intro .logo {
    width: 164px;
    height: 164px;
  }

  .intro .name {
    font-size: 2.3rem;
  }

  .intro .description {
    font-size: 1.2rem;
  }
</style>
