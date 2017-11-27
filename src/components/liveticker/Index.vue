<template>
    <div>
        <div class="full-width">
            <h2>LIVE</h2>
            <div class="filter">
                <section class="select-wrapper filter-sportart single-filter">
                    <label class="custom-select">
                        Filtern nach Sportart:
                        <select class="sportsTypeFilter">
                            <option selected="selected" value="0">Alle Sportarten</option>
                            <option value="1">Badminton</option>
                            <option value="2">Baseball</option>
                        </select>
                    </label>
                </section>
            </div>
            <div class="content_container">
                <div class="text-box-highlights">
                    <div class="left">
                        <div class="sportart">
                        </div>
                        <div class="zeit">
                            <span>20:46 Uhr</span>
                        </div>
                    </div>
                    <div class="right">
                        <div class="text">
                            <p class="title">Das waren die Olympischen Spiele in Rio</p>
                                    <span>
                                        Das US-Basketball-Team setzt den Schlusspunkt bei den Spielen 2016! Spannende 16 Wettkampf-Tage liegen hinter uns - 306 Mal ging es um Gold, Silber und Bronze. Aber auch abseits der Medaillen gab es schöne Momente im Zeichen der fünf Ringe. Wir hoffen, ihr hatte Spaß mit unserem Live-Ticker.
                                    </span>
                        </div>
                    </div>
                    <div class=""></div>
                </div>

                <div class="text-box-highlights">
                    <div class="left">
                        <div class="sportart">
                            <span class="sprite-actions-small basketball"></span>
                        </div>
                        <div class="zeit">
                            <span>20:43 Uhr</span>
                        </div>
                    </div>
                    <div class="right">
                        <div class="text">
                            <p class="title">Basketball - Finale Herren</p>
                                    <span>
                                        Die letzte Entscheidung bei diesen Spielen fällt im Basketball. Im Finale der Herren stehen sich die USA und Serbien gegenüber.
                                    </span>
                        </div>
                    </div>
                    <div class="medaille gold"></div>
                </div>

                <div class="text-box-highlights placeholder">
                    <div class="left">
                        <div class="sportart"></div>
                        <div class="zeit"><span></span></div>
                    </div>
                    <div class="">
                        <div class="text">
                            <p class="title"></p>
                            <span>Es wurden keine passenden Einträge gefunden</span>
                        </div>
                    </div>
                    <div class=""></div>
                </div>
                <!--- text-box-highlights ende -->
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
    export default {}
</script>
