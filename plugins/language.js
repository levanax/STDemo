/**
 * Created by Levana.Xue on 8/28/2015.
 */
// load language start
var locals = {
    language:'zh',
    supportLanguages:['zh','en']
};
try{
    var appLanguage = locals.language;//default

    //follow system language
    var language = navigator.language || navigator.browserLanguage || server.languages;
    var preferredLanguage = language.toLowerCase().substring(0,2);
    for(var i= 0;i<locals.supportLanguages.length;i++){
        if(preferredLanguage === locals.supportLanguages[i]){
            appLanguage = preferredLanguage;
            break;
        }
    }

    var startTime, execTime;
    startTime = new Date().getTime();
    var option = {
        resGetPath: 'locales/__lng__/translation.json',
        lng: appLanguage,
        getAsync: false
    };
    i18n.init(option);
    execTime = new Date().getTime() - startTime;
    console.info('>>>> Language plug-in initialization time is : '+execTime +'ms');
}catch (e){
    console.error(e);
}
// load language end.
//切换语言 可以 restart app