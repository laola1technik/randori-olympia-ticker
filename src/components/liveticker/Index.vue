<template>
    <div>
        <div class="full-width">
            <h2>LIVE</h2>
            <div class="filter">
                <section class="select-wrapper filter-sportart single-filter">
                    <label class="custom-select">
                        Filtern nach Sportart:
                        <sports-types-filter
                            :options="sportsTypes"
                            v-model="selectedSportsType">
                        </sports-types-filter>
                    </label>
                </section>
            </div>
            <div class="content_container">
                <message-entry
                        v-for="message in filteredMessages"
                        :message="message"
                        :key="message.id">
                </message-entry>
            </div>
        </div>

        <div class="paging-container">
            <a href="javascript:void(0)" class="boxarrow right">
                mehr anzeigen
            <span>
            <img src="static/img/arrow-right.png" alt="next"/>
            </span>
            </a>
        </div>
    </div>
</template>

<script>
    import MessageEntry from './Message.vue';
    import SportsTypesFilter from './SportsTypesFilter.vue';

    import Loader from '@/Loader';
    import Parser from '@/Parser';

    let loader = new Loader();
    let parser = new Parser();

    let intervalId = null;

    export default {
        name: 'LiveTicker',
        components: {
            MessageEntry,
            SportsTypesFilter
        },
        data() {
            return {
                url: '/feeds/messages.json',
                messages: [],
                selectedSportsType: ""
            };
        },
        created() {
            this.refreshTicker();
            intervalId = setInterval(this.refreshTicker, 10 * 1000);

        },
        destroyed() {
            clearInterval(intervalId);
        },
        methods: {
            refreshTicker() {
                loader.load(this.url)
                        .then(json => {
                    //debugger
                    this.messages = parser.parse(json);
            });
            }
        },
        computed: {
            sportsTypes() {
                if(!this.messages.length) {
                    return [];
                }

                let map = new Map();
                this.messages.map(message => {
                    if(message.sportsTypeId && !map.has(message.sportsTypeId)) {
                        map.set(parseInt(message.sportsTypeId), message.sportsType);
                    }

                });

                return Array.from(map);
            },
            filteredMessages() {
                if(this.selectedSportsType === '') {
                    return this.messages;
                }

                return this.messages
                    .filter(message => {
                        return message.sportsTypeId == this.selectedSportsType;
                    })
            }
        }
    }
</script>
