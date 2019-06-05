"use strict";

class Tabs {
    constructor() {
    };

    loadPage(tab) {
        this.hideAll();
        $(tab).show(tab);
    }

    hideAll() {
        $("#tabs-1").hide();
        $("#tabs-2").hide();
        $("#tabs-3").hide();
        $("#tabs-4").hide();
        $("#tabs-5").hide();
        $("#tabs-6").hide();
    }
    init(){
        $("#tabs-1").show();
    }

}
let tabs = new Tabs();
tabs.hideAll();
tabs.init();
