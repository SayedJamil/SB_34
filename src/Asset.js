
const audio = "ee02_ow_tvhd_pl1/audio/"
const bg = "ee02_ow_tvhd_pl1/bg/"
const character = "ee02_ow_tvhd_pl1/character/"
const icons = "ee02_ow_tvhd_pl1/icons/"
const heaxagoniconused = "ee02_ow_tvhd_pl1/icons/hexagon_water_used/"
const heaxagoniconnotused = "ee02_ow_tvhd_pl1/icons/hexagon_water_notused/"
const hilighters = "ee02_ow_tvhd_pl1/icons/hilighters/"
const squareiconswastage = "ee02_ow_tvhd_pl1/icons/square_icons_wastage/"
const squareiconsnowastage = "ee02_ow_tvhd_pl1/icons/square_icons_nowaste/"
const bubbleiconsactive = "ee02_ow_tvhd_pl1/icons/bubble_icons_active/"
const bubbleiconsinactive = "ee02_ow_tvhd_pl1/icons/bubble_icons_inactive/"
const jug = "ee02_ow_tvhd_pl1/jug/"
const text = "ee02_ow_tvhd_pl1/text/"
const lottie = "ee02_ow_tvhd_pl1/lottie/"
const button = "ee02_ow_tvhd_pl1/button/"

const AssetsMap = {
    intro: {
        id: "intro",
        Bg: `${bg}sb_34_intro_bg.svg`,
        sprites: [
            `${bg}sb_34_intro_bg_water_title.svg`,
            `${bg}sb_34_intro_bg_water.svg`,
            `${button}buttons_03.svg`,
        ],
        sounds: [

        ],
        lottie: [
        ]
    },
    explain: {
        id: "explain",
        Bg: `${bg}sb_34_bg_1.svg`,
        sprites: [
            `${character}sb_34_ci_lady_1.svg`,
            `${character}sb_34_ci_lady_eye_1.svg`,
            `${button}buttons_12.svg`,

        ],
        sounds: [

        ],
        lottie: [
            `${lottie}scene_02.json`,
        ]
    },
    // 
    activity01: {
        id: "activitytype01",
        Bg: `${bg}sb_34_bg_1.svg`,
        sprites: [
            `${heaxagoniconused}sb_34_hexagon_icon_water_02.svg`,//00
            `${heaxagoniconused}sb_34_hexagon_icon_water_01.svg`,//01
            `${heaxagoniconused}sb_34_hexagon_icon_water_03.svg`,//02
            `${heaxagoniconused}sb_34_hexagon_icon_water_04.svg`,//03
            `${heaxagoniconused}sb_34_hexagon_icon_water_05.svg`,//04
            `${heaxagoniconused}sb_34_hexagon_icon_water_06.svg`,//05
            `${heaxagoniconused}sb_34_hexagon_icon_water_07.svg`,//06
            `${heaxagoniconused}sb_34_hexagon_icon_water_08.svg`,//07
            `${heaxagoniconused}sb_34_hexagon_icon_water_09.svg`,//08
            `${heaxagoniconused}sb_34_hexagon_icon_water_10.svg`,//08+1
            `${heaxagoniconnotused}sb_34_hexagon_icon_nowater_01.svg`,//09+1
            `${heaxagoniconnotused}sb_34_hexagon_icon_nowater_02.svg`,//10+1
            `${heaxagoniconnotused}sb_34_hexagon_icon_nowater_03.svg`,//11+1
            `${heaxagoniconnotused}sb_34_hexagon_icon_nowater_11.svg`,//12+1
            `${heaxagoniconnotused}sb_34_hexagon_icon_nowater_05.svg`,//13+1
            `${heaxagoniconnotused}sb_34_hexagon_icon_nowater_06.svg`,//14+1
            `${heaxagoniconnotused}sb_34_hexagon_icon_nowater_07.svg`,//15+1
            `${heaxagoniconnotused}sb_34_hexagon_icon_nowater_08.svg`,//16+1
            `${heaxagoniconnotused}sb_34_hexagon_icon_nowater_09.svg`,//17+1
            `${heaxagoniconnotused}sb_34_hexagon_icon_nowater_10.svg`,//18+1
            `${hilighters}sb_34_hexagon_icon_green_highlight.svg`,//19+1
            `${hilighters}sb_34_hexagon_icon_red_highlight.svg`,//20+1
            `${jug}sb_34_jug_01.svg`,
            `${jug}sb_34_jug_02.svg`,
            `${jug}sb_34_jug_03.svg`,
            `${jug}sb_34_jug_04.svg`,
            `${jug}sb_34_jug_05.svg`,
            `${jug}sb_34_jug_06.svg`,
        ],
        sounds: [

        ],
        lottie: [

        ]
    },

    activity01end: {
        id: "activitytype01end",
        Bg: `${bg}sb_34_bg_1.svg`,
        sprites: [
            `${jug}sb_34_jug_06.svg`,
            `${button}buttons_12.svg`,
        ],
        sounds: [

        ],
        lottie: [
            `${lottie}scene_15.json`,
            `${lottie}scene_38.json`,
        ]
    },
    activity02end: {
        id: "activitytype02end",
        Bg: `${bg}sb_34_bg_1.svg`,
        sprites: [
            `${jug}sb_34_jug_06.svg`,
            `${button}buttons_12.svg`,
        ],
        sounds: [

        ],
        lottie: [
            `${lottie}scene_53.json`,
        ]
    },

    waterUses: {
        id: "waterusescene",
        Bg: `${bg}sb_34_bg_1.svg`,
        sprites: [
            `${text}sb_34_ti_10.svg`,//0
            `${text}sb_34_ti_11.svg`,//1
            `${text}sb_34_ti_12.svg`,//2
            `${text}sb_34_ti_13.svg`,//3
            `${text}sb_34_ti_14.svg`,//4
            `${text}sb_34_ti_15.svg`,//5
            `${text}sb_34_ti_19.svg`,//6
            `${text}sb_34_ti_26.svg`,//7
            `${text}sb_34_ti_27.svg`,//8
            `${text}sb_34_ti_28.svg`,//9
            `${text}sb_34_ti_29.svg`,//10
            `${text}sb_34_ti_30.svg`,//11
            `${bubbleiconsactive}sb_34_bubble_icon_10.svg`,//12
            `${bubbleiconsactive}sb_34_bubble_icon_11.svg`,//13
            `${bubbleiconsactive}sb_34_bubble_icon_12.svg`,//14
            `${bubbleiconsactive}sb_34_bubble_icon_13.svg`,//15
            `${bubbleiconsactive}sb_34_bubble_icon_14.svg`,//16
            `${bubbleiconsactive}sb_34_bubble_icon_15.svg`,//17
            `${bubbleiconsactive}sb_34_bubble_icon_19.svg`,//18
            `${bubbleiconsactive}sb_34_bubble_icon_26.svg`,//19
            `${bubbleiconsactive}sb_34_bubble_icon_27.svg`,//20
            `${bubbleiconsactive}sb_34_bubble_icon_28.svg`,//21
            `${bubbleiconsactive}sb_34_bubble_icon_29.svg`,//22
            `${bubbleiconsactive}sb_34_bubble_icon_30.svg`,//23
            `${bubbleiconsinactive}sb_34_bubble_icon_10.svg`,//24
            `${bubbleiconsinactive}sb_34_bubble_icon_11.svg`,//25
            `${bubbleiconsinactive}sb_34_bubble_icon_12.svg`,//26
            `${bubbleiconsinactive}sb_34_bubble_icon_13.svg`,//27
            `${bubbleiconsinactive}sb_34_bubble_icon_14.svg`,//28
            `${bubbleiconsinactive}sb_34_bubble_icon_15.svg`,//29
            `${bubbleiconsinactive}sb_34_bubble_icon_19.svg`,//30
            `${bubbleiconsinactive}sb_34_bubble_icon_26.svg`,//31
            `${bubbleiconsinactive}sb_34_bubble_icon_27.svg`,//32
            `${bubbleiconsinactive}sb_34_bubble_icon_28.svg`,//34
            `${bubbleiconsinactive}sb_34_bubble_icon_29.svg`,//35
            `${bubbleiconsinactive}sb_34_bubble_icon_30.svg`,//36
        ],
        sounds: [

        ],
        lottie: [

        ]
    },
    activity02: {
        id: "activitytype02",
        Bg: `${bg}sb_34_bg_2.svg`,
        sprites: [
            `${squareiconsnowastage}left/sb_34_square_icon_nowastage_left_01.svg`,//00//correct
            `${squareiconswastage}right/sb_34_square_icon_wastage_right_01.svg`,//01
            `${squareiconsnowastage}left/sb_34_square_icon_nowastage_left_02.svg`,//02//correct
            `${squareiconswastage}right/sb_34_square_icon_wastage_right_03.svg`,//03
            `${squareiconsnowastage}left/sb_34_square_icon_nowastage_left_03.svg`,//04//correct
            `${squareiconswastage}right/sb_34_square_icon_wastage_right_02.svg`,//05
            `${squareiconswastage}left/sb_34_square_icon_wastage_left_01.svg`,//06
            `${squareiconsnowastage}right/sb_34_square_icon_nowastage_right_01.svg`,//07//correct
            `${squareiconswastage}left/sb_34_square_icon_wastage_left_02.svg`,//08
            `${squareiconsnowastage}right/sb_34_square_icon_nowastage_right_02.svg`,//09//correct
            `${squareiconswastage}left/sb_34_square_icon_wastage_left_03.svg`,//10
            `${squareiconsnowastage}right/sb_34_square_icon_nowastage_right_03.svg`,//11//correct
            `${squareiconswastage}left/sb_34_square_icon_wastage_left_04.svg`,//12
            `${squareiconsnowastage}right/sb_34_square_icon_nowastage_right_04.svg`,//13//correct
            `${hilighters}sb_34_square_icon_left_green_highlight.svg`,//14
            `${hilighters}sb_34_square_icon_left_red_highlight.svg`,//15
            `${hilighters}sb_34_square_icon_right_green_highlight.svg`,//16
            `${hilighters}sb_34_square_icon_right_red_highlight.svg`,//17
            `${jug}sb_34_jug_07.svg`,//18
            `${jug}sb_34_jug_08.svg`,
            `${jug}sb_34_jug_09.svg`,
            `${jug}sb_34_jug_10.svg`,
            `${jug}sb_34_jug_11.svg`,
            `${jug}sb_34_jug_12.svg`,
            `${jug}sb_34_jug_13.svg`,
            `${jug}sb_34_jug_14.svg`,
            `${icons}sb_34_circle_icon.svg`,
        ],
        sounds: [

        ],
        lottie: [

        ]
    },
    saveWater: {
        id: "savewaterscene",
        Bg: `${bg}sb_34_bg_1.svg`,
        sprites: [
            `${text}sb_34_ti_10.svg`,//0
            `${text}sb_34_ti_11.svg`,//1
            `${text}sb_34_ti_12.svg`,//2
            `${text}sb_34_ti_13.svg`,//3
            `${text}sb_34_ti_14.svg`,//4
            `${text}sb_34_ti_15.svg`,//5
            `${text}sb_34_ti_19.svg`,//6
            `${text}sb_34_ti_26.svg`,//7
            `${text}sb_34_ti_27.svg`,//8
            `${text}sb_34_ti_28.svg`,//9
            `${text}sb_34_ti_29.svg`,//10
            `${text}sb_34_ti_30.svg`,//11
            `${bubbleiconsactive}sb_34_bubble_icon_10.svg`,//12
            `${bubbleiconsactive}sb_34_bubble_icon_11.svg`,//13
            `${bubbleiconsactive}sb_34_bubble_icon_12.svg`,//14
            `${bubbleiconsactive}sb_34_bubble_icon_13.svg`,//15
            `${bubbleiconsactive}sb_34_bubble_icon_14.svg`,//16
            `${bubbleiconsactive}sb_34_bubble_icon_15.svg`,//17
            `${bubbleiconsactive}sb_34_bubble_icon_19.svg`,//18
            `${bubbleiconsactive}sb_34_bubble_icon_26.svg`,//19
            `${bubbleiconsactive}sb_34_bubble_icon_27.svg`,//20
            `${bubbleiconsactive}sb_34_bubble_icon_28.svg`,//21
            `${bubbleiconsactive}sb_34_bubble_icon_29.svg`,//22
            `${bubbleiconsactive}sb_34_bubble_icon_30.svg`,//23
            `${bubbleiconsinactive}sb_34_bubble_icon_10.svg`,//24
            `${bubbleiconsinactive}sb_34_bubble_icon_11.svg`,//25
            `${bubbleiconsinactive}sb_34_bubble_icon_12.svg`,//26
            `${bubbleiconsinactive}sb_34_bubble_icon_13.svg`,//27
            `${bubbleiconsinactive}sb_34_bubble_icon_14.svg`,//28
            `${bubbleiconsinactive}sb_34_bubble_icon_15.svg`,//29
            `${bubbleiconsinactive}sb_34_bubble_icon_19.svg`,//30
            `${bubbleiconsinactive}sb_34_bubble_icon_26.svg`,//31
            `${bubbleiconsinactive}sb_34_bubble_icon_27.svg`,//32
            `${bubbleiconsinactive}sb_34_bubble_icon_28.svg`,//34
            `${bubbleiconsinactive}sb_34_bubble_icon_29.svg`,//35
            `${bubbleiconsinactive}sb_34_bubble_icon_30.svg`,//36
        ],
        sounds: [

        ],
        lottie: [

        ]
    },
    end: {
        id: "endscene",
        Bg: `${bg}bg.svg`,
        sprites: [
            `${button}buttons_07.svg`,
        ],
        sounds: [

        ],
        lottie: [
            `${lottie}welldone_1.json`,
            `${lottie}scene_61.json`,
        ]
    },
    savewaterend: {
        id: "swendscene",
        Bg: `${bg}sb_34_bg_1.svg`,
        sprites: [
            `${button}buttons_07.svg`,
        ],
        sounds: [

        ],
        lottie: [
            `${lottie}welldone_1.json`,
            `${lottie}scene_61.json`,
        ]
    },
}

export default AssetsMap;
