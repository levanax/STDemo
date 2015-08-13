This folder contains the views


*1.每增加一个 View 都需要在 app.js 里 列出来，这样才会加载

*2.勿用关键字['container']

Ext.navigation.View 是可以套 Ext.tab.Panel,在cofig处设置 title 更改title
--
View.push({
                        title: 'Setting',
                        html: 'this is Setting view!'
                    });
