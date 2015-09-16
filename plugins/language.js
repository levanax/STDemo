/**
 * Created by Levana.Xue on 8/28/2015.
 */
// load language start
var locals = {
    language:'zh'
};
try{
    var startTime, execTime;
    startTime = new Date().getTime();
    var option = {
        resGetPath: 'locales/__lng__/translation.json',
        lng: locals.language,
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