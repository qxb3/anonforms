<script>
</script>

<nav class="uk-navbar uk-navbar-container" uk-navbar="dropbar: true; offset: 23;">
  <div class="uk-navbar-left uk-padding-small">
    <div class="logo">
      <img class="uk-margin-remove"src="/logo.png" alt="Logo" width="32px" height="32px"/>
      <a href="/">
        <h1 class="uk-text-lead uk-margin-remove">AnonForms</h1>
      </a>
    </div>
  </div>

  <div class="uk-navbar-right uk-padding-small">
    <a on:click|preventDefault href="#sidenav" uk-toggle="overlay: true;">
      <i class="fa fa-bars fa-lg"></i>
    </a>
  </div>
</nav>

<div id="sidenav" uk-offcanvas="overlay: true;">
  <div class="uk-offcanvas-bar">
    <h6 class="uk-margin-remove">Navigation</h6>
    <hr class="uk-margin-remove-top">

    <ul class="uk-nav uk-margin-bottom">
      <li>
        <a href="/">
          <li class="fa fa-home"></li>
          Home
        </a>
      </li>

      <li>
        <a href="/forms">
          <li class="fa fa-list"></li>
          Forms
        </a>
      </li>
    </ul>

    <h6 class="uk-margin-remove">Others</h6>
    <hr class="uk-margin-remove-top">

    <button class="uk-button uk-button-primary">
      Create Form
      <i class="fa fa-plus"></i>
    </button>

    <button class="uk-button uk-button-primary uk-margin-top">
      Random Form
      <i class="fa fa-random"></i>
    </button>
  </div>
</div>

<style>
  .logo {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  a {
    text-decoration: none;
  }
</style>
