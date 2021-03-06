/**
 *  female_mage.js
 *  -----
 *  Friendly assisting units.
 */

ig.module(
    'game.entities.players.female_mage'
)
.requires(
    'game.entities.abstractities.base_player'
)
.defines(function() {
    'use strict';

    ig.global.EntityFemale_mage = ig.global.EntityBase_player.extend({
        entityClassName: ['EntityFemale_mage'],

        name: 'Nino',

        animSheet: new ig.AnimationSheet('media/units/players/newFemaleMage.png', 32, 32),
        statMugshot: new ig.Image('media/statMugshots/players/nino.png'),
        mugshot: new ig.Image('media/mugshots/players/nino.png'),
        modal: new ig.Image('media/modal/nino_modal.png'),
        battleAnim: 'EntityMage_battleanim',

        levelUpStatPercentage: {
            atk: 0.0,
            mag: 0.5,
            skl: 0.55,
            def: 0.15,
            res: 0.5,
            spd: 0.6,
            luk: 0.45
        },

        init: function(x, y, settings) {
            // Stats
            this.level = 1;
            this.health_max = 19;
            this.health = 19;
            this.stat.atk = 7;
            this.stat.skl = 8;
            this.stat.mag = 7;
            this.stat.def = 4;
            this.stat.res = 7;
            this.stat.spd = 11;
            this.stat.luk = 10;
            this.stat.mov = 15;

            // Items
            this.item[0] = ig.game.itemCatalog.tome1;  this.item_uses[0] = this.item[0].uses;
            this.item[1] = ig.game.itemCatalog.tome3;  this.item_uses[1] = this.item[1].uses;
            //this.item[2] = null;  this.item_uses[2] = this.item[2].uses;
            //this.item[3] = null;  this.item_uses[3] = this.item[3].uses;
            //this.item[4] = null;  this.item_uses[4] = this.item[4].uses;

            // IMPORTANT!! Keep these last in the unit's init() method. No exceptions!
            ig.game.recomputeStats(this);
            this.parent(x, y, settings);
        }
    });
});
