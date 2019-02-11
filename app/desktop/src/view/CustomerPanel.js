Ext.define('ModernTunes.view.CustomerPanel', {
    extend: 'Ext.Panel',
    xtype: 'customerpanel',
    requires: [
        'ModernTunes.view.CustomerController',
        'ModernTunes.view.CustomerModel'
    ],
    controller: 'customercontroller',
    viewModel: {
        type: 'customermodel'
    },
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [
        {
            title: "Kunden",
            xtype: 'customergrid',
            flex: .5,
            bind: {
                store: '{customers}'
            }
        }
    ]
});