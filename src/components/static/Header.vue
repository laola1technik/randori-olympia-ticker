<template>
    <header>
        <div class="header_logocontainer config_json_aktualisieren">
            <div class="header_logo">
                <p class="header_logo_bewerb">Live-Ticker Olympische Spiele</p>
                <a target="_blank" href="http://liveticker.laola1.at">
                    <img class="header_logo_img" src="static/img/laola1_liveticker_small.png">
                </a>
                <div class="header_logo_aktualisieren">
                    aktualisieren
                    <div class="progressbar">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="header_spcontainer2 config_json_nav" id="liveticker-menu"><!-- Container for Game Navigation -->

            <div class="header_sp2"><!-- Game Navigation-->
                <div class="header_sp_nextbuttonlinks2 icon- inactive">&laquo;</div>

                <ul class="slider1">
                    <router-link
                            tag="li"
                            :to="{name: 'LiveTicker'}"
                            class="header_sp_spielbutton2 slide active">
                        <p class="header_sp_spielbutton_nav2">
                            <span>Live</span>
                        </p>
                    </router-link>
                    <router-link
                            tag="li"
                            :to="{path: '/xxx'}"
                            class="header_sp_spielbutton2 slide">
                        <p class="header_sp_spielbutton_nav2">
                            <span>Programm</span>
                        </p>
                    </router-link>
                </ul>
                <div class="header_sp_nextbuttonrechts2 icon- inactive">&raquo;</div>
            </div>
        </div>

    </header>
</template>