import { createSignal, createEffect, For, Show } from "solid-js";

export function TodoView() {
  const [items, setItems] = createSignal([{title: 'sing'}, {title: 'jump'}, {title: 'dance'}]);
  const [openIndexes, setOpenIndexes] = createSignal([0]);

  function toggle(index){
    console.log('toggle', index);
    const newOpenIndexes = openIndexes().includes(index) ? openIndexes().filter(o=> o!== index) : [...openIndexes(), index];
    setOpenIndexes(newOpenIndexes)
  }

  return (
    <ul>
      <For each={items()}>
        {(item, index) => (
        <li onClick={[toggle, index()]}>
          <span>{item.title}</span>
          <Show when={openIndexes().includes(index())}>
            <span>✅</span>
          </Show>
        </li>
        )}
        </For>
    </ul>
  );
}