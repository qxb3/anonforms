<script>
  import Navbar from '../lib/components/Navbar.svelte'
  import { goto } from '$app/navigation'

  export let featuredForms

  function gotoForm(id) {
    goto(`/form/${id}`)
  }
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
      <div class="uk-padding-small uk-margin" style="border: .5px solid white; border-radius: 8px;">
        <h4 class="uk-margin-remove">Title: {form.title}</h4>
        <h6 class="uk-margin-remove">Description: {form.description}</h6>

        <h6 class="uk-margin-top uk-margin-remove-bottom">Uploaded on: {form.uploadedDate.readable}</h6>
      </div>
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
