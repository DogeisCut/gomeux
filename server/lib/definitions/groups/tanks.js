const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeRadialAuto, weaponArray, weaponMirror, makeTurret } = require('../facilitators.js')
const { base, statnames, dfltskl, smshskl } = require('../constants.js')
const { gunGenerators } = require('../gungenerators.js')
require('./generics.js')
const g = require('../gunvals.js')

Class.shell = {
    PARENT: "genericTank",
    SIZE: 16,
    LABEL: "Shell",
}

Class.unarmed = {
    PARENT: "genericTank",
    LABEL: "Unarmed",
}

tier0: {
    bodies: {
        Class.poker = {
            PARENT: "genericTank",
            LABEL: "Poker",
            DANGER: 5,
            BRANCH_LABEL: "Body",
            BODY: {
                DENSITY: 1.1 * base.DENSITY,
                DAMAGE: 1.1 * base.DAMAGE
            },
            PROPS: [
                {
                    TYPE: "star3OffsetDecoBlack",
                    POSITION: {
                        SIZE: 20,
                        X: 0,
                        Y: 0,
                        ANGLE: 0,
                        LAYER: 0,
                    },
                }
            ]
        }

        Class.scope = {
            PARENT: "genericTank",
            LABEL: "Scope",
            DANGER: 5,
            BRANCH_LABEL: "Body",
            BODY: {
                FOV: 1.05 * base.FOV,
            },
            PROPS: [
                {
                    TYPE: "circleDecoGrey",
                    POSITION: {
                        SIZE: 15,
                        X: 0,
                        Y: 0,
                        ANGLE: 0,
                        LAYER: 1,
                    },
                }
            ]
        }
    }

    weapons: {
        Class.shooter = {
            PARENT: "genericTank",
            LABEL: "Shooter",
            DANGER: 4,
            BRANCH_LABEL: "Weapons",
            GUNS: [
                ...gunGenerators.bulletCannon()
            ],
        }

        Class.commander = {
            PARENT: "genericTank",
            STAT_NAMES: statnames.drone,
            LABEL: "Commander",
            DANGER: 5,
            GUNS: [
                ...gunGenerators.droneSpawner()
            ],
        }

        Class.blocker = {
            PARENT: "genericTank",
            LABEL: "Blocker",
            DANGER: 5,
            BRANCH_LABEL: "Weapons",
            GUNS: [
                ...gunGenerators.trapLauncher()
            ],
        }
    }
}

tier1: {
    bodies: {

    }
    
    weapons: {
        Class.hatcher = {
            PARENT: "genericTank",
            STAT_NAMES: statnames.swarm,
            LABEL: "Hatcher",
            DANGER: 5,
            GUNS: [
                ...weaponMirror(gunGenerators.swarmerHatcher({ y: -4 }), 0.5)
            ],
        }
    }
}

tier3: {
    bodies: {

    }
    
    weapons: {

    }
}

tier4: {
    bodies: {

    }
    
    weapons: {

    }
}

Class.shell.UPGRADES_TIER_0 = ["poker", "scope"]
    Class.poker.UPGRADES_TIER_1 = []
    Class.scope.UPGRADES_TIER_1 = []

Class.unarmed.UPGRADES_TIER_0 = ["shooter", "commander", "blocker"]
    Class.shooter.UPGRADES_TIER_1 = []
    Class.commander.UPGRADES_TIER_1 = ["hatcher"]
        Class.hatcher.UPGRADES_TIER_2 = []
    Class.blocker.UPGRADES_TIER_1 = []