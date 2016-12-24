//add all libs to config for requirejs
requirejs.config({
    baseUrl:'js',
    paths:{
        bootstrap:'lib/boothstrap.min',
        jquery:'lib/jquery-3.1.1.min',
        jszip:'lib/jszip.min',
        methods:'app/methods'

    }
});

requirejs(['app/ClimateExplorer']);
