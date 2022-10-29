<script>
  export let text
  export let placeholder
  export let defaultValue
  export let inputType
</script>

<div class="uk-margin uk-padding-small" style="border: solid 0.5px white; border-radius: 8px;">
  {#if text}
    <p class="uk-text-small">{text}</p>
  {/if}

  <input
    class="uk-input"
    value={defaultValue}
    type={inputType || 'text'}
    placeholder={placeholder}
  >
</div>
