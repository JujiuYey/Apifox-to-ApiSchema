<template>
  <codemirror
    v-model="code"
    placeholder="Code goes here..."
    :style="{ height: '400px' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    @ready="handleReady"
    @change="log('change', $event)"
    @focus="log('focus', $event)"
    @blur="log('blur', $event)"
  />
</template>

<script lang="ts">
  import { PropType, defineComponent, ref, shallowRef } from 'vue';
  import { Codemirror } from 'vue-codemirror';

  const props = {
    code: {
      // type: Array as PropType<ApiCollectionType>
    },
  };

  export default defineComponent({
    components: {
      Codemirror,
    },
    props,
    setup(props) {
      const code = ref(`console.log('Hello, world!')`);

      // Codemirror EditorView instance ref
      const view = shallowRef();
      const handleReady = (payload: any) => {
        view.value = payload.view;
      };

      // Status is available at all times via Codemirror EditorView
      const getCodemirrorStates = () => {
        const state = view.value.state;
        const ranges = state.selection.ranges;
        const selected = ranges.reduce((r: any, range: any) => r + range.to - range.from, 0);
        const cursor = ranges[0].anchor;
        const length = state.doc.length;
        const lines = state.doc.lines;
        // more state info ...
        // return ...
      };

      return {
        code,
        handleReady,
        log: console.log,
      };
    },
  });
</script>
