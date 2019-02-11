Ext.define('ModernTunes.view.main.MainView', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainview',
    requires: [
        'ModernTunes.view.main.MainViewController',
        'ModernTunes.view.main.MainViewModel',
        'ModernTunes.view.TunesView'
    ],
    controller: 'mainviewcontroller',
    viewModel: {
        type: 'mainviewmodel'
    },

    /*showAnimation: 'pop',
    layout: {
        type: 'card',
        animation: {
            type: 'flip'
        }
    },*/

    tabBarPosition: 'bottom',
    items: [
        {
            title: "Kunden",
            xtype: 'customerpanel'
        },
        {
            title: "Thumbnails",
            xtype: 'tunesview',
            listeners: {
                select: 'onThumbSelect'
            },
            bind: {
                store: '{tunes}'
            }
        },
        {
            title: "Grid",
            xtype: 'tunesgrid',
            listeners: {
                select: 'onGridSelect'
            },
            bind: {
                store: '{tunes}'
            }
        }
    ]
});