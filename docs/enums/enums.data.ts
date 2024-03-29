export default {
    load() {
        return {
            "damage" : {
                "description" : "Enum describing various damage types",
                "list" : [
                    {
                        "value" : 0,
                        "name" : "OFF"
                    },
                    {
                        "value" : 1,
                        "name" : "VISUAL_ONLY"
                    },
                    {
                        "value" : 2,
                        "name" : "PERFORMANCEIMPACTING"
                    },
                    {
                        "value" : 3,
                        "name" : "FULL"
                    }
                ]
            },
            "damage_scale" : {
                "description" : "Enum describing damage scale levels",
                "list" : [
                    {
                        "value" : 0,
                        "name" : "LOW"
                    },
                    {
                        "value" : 1,
                        "name" : "MEDIUM"
                    },
                    {
                        "value" : 2,
                        "name" : "HIGH"
                    },
                    {
                        "value" : 3,
                        "name" : "MAX"
                    }
                ]
            },
            "random_failures" : {
                "description" : "Enum describing random failure levels",
                "list" : [
                    {
                        "value" : 0,
                        "name" : "OFF"
                    },
                    {
                        "value" : 1,
                        "name" : "STANDARD"
                    },
                    {
                        "value" : 2,
                        "name" : "SYNC_TO_RACE"
                    },
                    {
                        "value" : 3,
                        "name" : "X2"
                    },
                    {
                        "value" : 4,
                        "name" : "X3"
                    },
                    {
                        "value" : 5,
                        "name" : "X4"
                    },
                    {
                        "value" : 6,
                        "name" : "X5"
                    },
                    {
                        "value" : 7,
                        "name" : "X10"
                    }
                ]
            },
            "tire_wear" : {
                "description" : "Enum describing various tier wear options",
                "list" : [
                    {
                        "value" : 2,
                        "name" : "X5"
                    },
                    {
                        "value" : 3,
                        "name" : "X4"
                    },
                    {
                        "value" : 4,
                        "name" : "X3"
                    },
                    {
                        "value" : 5,
                        "name" : "X2"
                    },
                    {
                        "value" : 6,
                        "name" : "STANDARD"
                    },
                    {
                        "value" : 8,
                        "name" : "OFF"
                    }
                ]
            },
            "fuel_usage" : {
                "description" : "Enum describing various fuel usage options",
                "list" : [
                    {
                        "value" : 0,
                        "name" : "STANDARD"
                    },
                    {
                        "value" : 2,
                        "name" : "OFF"
                    },
                    {
                        "value" : 3,
                        "name" : "X5"
                    },
                    {
                        "value" : 4,
                        "name" : "X4"
                    },
                    {
                        "value" : 5,
                        "name" : "X3"
                    },
                    {
                        "value" : 6,
                        "name" : "X2"
                    }
                ]
            },
            "penalties" : {
                "description" : "Enum describing various penalty options",
                "list" : [
                    {
                        "value" : 0,
                        "name" : "NONE"
                    },
                    {
                        "value" : 1,
                        "name" : "FULL"
                    }
                ]
            },
            "game_mode" : {
                "description" : "Enum describing all supported game modes",
                "list" : [
                    {
                        "value" : 1337347477,
                        "name" : "SP_RaceWeekend"
                    },
                    {
                        "value" : -681570992,
                        "name" : "SP_Practice"
                    },
                    {
                        "value" : 822926980,
                        "name" : "SP_TimeAttack"
                    },
                    {
                        "value" : 1699969765,
                        "name" : "SP_Championship"
                    },
                    {
                        "value" : 773000055,
                        "name" : "RX_Championship"
                    },
                    {
                        "value" : -330496358,
                        "name" : "RS_Practice"
                    },
                    {
                        "value" : 105458512,
                        "name" : "MP_Race"
                    },
                    {
                        "value" : -1958878043,
                        "name" : "MP_RaceWeekend"
                    },
                    {
                        "value" : -324857384,
                        "name" : "MP_OCRaceWeekend"
                    },
                    {
                        "value" : 743993042,
                        "name" : "RallyCross"
                    },
                    {
                        "value" : -603314990,
                        "name" : "MP_RallyCross"
                    }
                ]
            },
            "allowed_view" : {
                "description" : "Enum describing all allowed view settings",
                "list" : [
                    {
                        "value" : 0,
                        "name" : "Any"
                    },
                    {
                        "value" : 2,
                        "name" : "CockpitHelmet"
                    }
                ]
            },
            "grid_positions" : {
                "description" : "Enum describing grid position setting",
                "list" : [
                    {
                        "value" : 0,
                        "name" : "Default"
                    },
                    {
                        "value" : 1,
                        "name" : "PlayerFirst"
                    },
                    {
                        "value" : 2,
                        "name" : "PlayerMiddle"
                    },
                    {
                        "value" : 3,
                        "name" : "PlayerLast"
                    },
                    {
                        "value" : 4,
                        "name" : "Random"
                    }
                ]
            },
            "pit_control" : {
                "description" : "Enum describing pit control override setting",
                "list" : [
                    {
                        "value" : 0,
                        "name" : "Auto"
                    },
                    {
                        "value" : 1,
                        "name" : "Manual"
                    }
                ]
            },
            "livetrack_preset" : {
                "description" : "Enum describing scheduled full course yellow settings",
                "list" : [
                    {
                        "value" : 0,
                        "name" : "Default Progressing"
                    },
                    {
                        "value" : 1349535451,
                        "name" : "Wet"
                    },
                    {
                        "value" : 875514911,
                        "name" : "Damp"
                    },
                    {
                        "value" : -1183931915,
                        "name" : "Green"
                    },
                    {
                        "value" : 368565426,
                        "name" : "Light Rubber"
                    },
                    {
                        "value" : -1697720237,
                        "name" : "Medium Rubber"
                    },
                    {
                        "value" : 1455398808,
                        "name" : "Heavy Rubber"
                    }
                ]
            },
            "online_rep" : {
                "description" : "Enum describing online reputation rank setting",
                "list" : [
                    {
                        "value" : 0,
                        "name" : "U"
                    },
                    {
                        "value" : 1,
                        "name" : "F"
                    },
                    {
                        "value" : 2,
                        "name" : "E"
                    },
                    {
                        "value" : 3,
                        "name" : "D"
                    },
                    {
                        "value" : 4,
                        "name" : "C"
                    },
                    {
                        "value" : 5,
                        "name" : "B"
                    },
                    {
                        "value" : 6,
                        "name" : "A"
                    },
                    {
                        "value" : 7,
                        "name" : "S"
                    }
                ]
            },
            "weather" : {
                "description" : "Enum describing all weather conditions",
                "list" : [
                    {
                        "value" : -934211870,
                        "name" : "Clear"
                    },
                    {
                        "value" : 296956818,
                        "name" : "LightCloud"
                    },
                    {
                        "value" : 888299130,
                        "name" : "MediumCloud"
                    },
                    {
                        "value" : 129238383,
                        "name" : "HeavyCloud"
                    },
                    {
                        "value" : -1293634875,
                        "name" : "Overcast"
                    },
                    {
                        "value" : 270338437,
                        "name" : "LightRain"
                    },
                    {
                        "value" : 1461703858,
                        "name" : "Rain"
                    },
                    {
                        "value" : -1592958063,
                        "name" : "Storm"
                    },
                    {
                        "value" : -2112363295,
                        "name" : "ThunderStorm"
                    },
                    {
                        "value" : 2067843977,
                        "name" : "Foggy"
                    },
                    {
                        "value" : -358600329,
                        "name" : "FogWithRain"
                    },
                    {
                        "value" : -754279862,
                        "name" : "HeavyFog"
                    },
                    {
                        "value" : -1604560069,
                        "name" : "HeavyFogWithRain"
                    },
                    {
                        "value" : -1299791789,
                        "name" : "Hazy"
                    },
                    {
                        "value" : 1275961519,
                        "name" : "Random"
                    }
                ]
            }
        }
    }
}