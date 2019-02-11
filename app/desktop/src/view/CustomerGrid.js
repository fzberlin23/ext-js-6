Ext.define('ModernTunes.view.CustomerGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'customergrid',
    requires: [
        'Ext.grid.column.Column',
        'Ext.grid.cell.*'
    ],
    columns: [
        {
            text: 'Kunden-ID',
            dataIndex: 'id',
            flex: 1
        },
        {
            text: 'Kunde',
            dataIndex: 'name',
            flex: 1
        },
        {
            text: 'Adresse',
            dataIndex: 'address',
            flex: 1
        }
    ]
});