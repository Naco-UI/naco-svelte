<div class="modal-actions">
  <slot />
</div>

<style lang="scss">
  .modal-actions {
    display: flex;
    justify-content: flex-end;

    width: calc(100% + (var(--modal-padding) * 2));
    margin-top: var(--modal-padding);
    margin-left: calc(var(--modal-padding) * -1);
    padding: var(--modal-padding) var(--modal-padding) 0;

    border-top: 1px solid var(--color-border-main);
  }
</style>
