<template>
    <div class="text-box-highlights">
        <div class="left">
            <div class="sportart">
                <span v-if="hasSportsType"
                      class="sprite-actions-small" :class="sportsTypeClass">
                </span>
            </div>
            <div class="zeit">
                <span>{{message.time}}</span>
            </div>
        </div>
        <div class="right">
            <div class="text">
                <p class="title">{{message.title}}</p>
                <span>
                    {{message.text}}
                </span>
            </div>
        </div>
        <div v-if="hasType"
             :class="typeClass">
        </div>
    </div>
</template>
<script>
    export default {
        props: [ 'message' ],
        methods: {},
        computed: {
            hasType() {
                return this.message.type !== '';
            },
            hasSportsType() {
                return this.message.sportsType !== '';
            },
            sportsTypeClass() {
                return this.message.sportsType.toLowerCase();
            },
            typeClass() {
                const typeToClass = {
                    'goldMedal': 'medaille gold'
                };

                if (typeof typeToClass[this.message.type] !== 'undefined') {
                    return typeToClass[this.message.type];
                }

                return '';
            }
        }
    }
</script>