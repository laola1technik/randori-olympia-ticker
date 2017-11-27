<template>
    <select :value="value" @input="onChange">
        <option :value="option[0]"
            v-for="option in sortAsc">
            {{option[1]}}
        </option>
    </select>
</template>
<script>
    export default {
        props: ['options', 'value'],
        methods: {
          onChange(event) {
              this.$emit('input', event.target.value);
          }
        },
        computed: {
            sortAsc() {
                let sorted = this.options
                    .sort((a,b) => {
                        if (a[1] < b[1]) {
                            return -1;
                        }

                        if ( a[1] > b[1]) {
                            return 1;
                        }

                        return 0
                    });

                sorted.unshift(['', 'bitte auswählen']);

                return sorted;
            }
        }
    }
</script>