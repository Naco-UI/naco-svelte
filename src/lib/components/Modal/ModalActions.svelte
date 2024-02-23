<div class="modal-actions">
  <slot />
</div>

<style lang="scss">
  .modal-actions {
    position: sticky;
    bottom: 0;

    display: flex;
    justify-content: flex-end;

    padding: var(--modal-padding) 0;

    border-top: 1px solid var(--color-border-main);
  }
</style>
