/**
 * Created by Levana.Xue on 8/28/2015.
 */
// load language start
try{
    var startTime, execTime;
    startTime = new Date().getTime();
    var option = {
        resGetPath: 'locales/__lng__/translation.json',
        lng: "zh",
        getAsync: false
    };
    i18n.init(option);
    execTime = new Date().getTime() - startTime;
    console.info('>>>> Language plug-in initialization time is : '+execTime +'ms');
}catch (e){
    console.error(e);
}
// load language end.

//切换语言 可以做遮罩 然后刷新页面来实现