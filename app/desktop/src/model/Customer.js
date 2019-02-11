Ext.define('ModernTunes.model.Customer', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            mapping: 'customers.id'
        },
        {
            name: 'name',
            mapping: 'customers.name'
        },
        {
            name: 'address',
            mapping: 'customers.address'
        }
    ],
    proxy: {
        type: 'ajax',
        url: '/customers.json',
        reader: {
            type: 'json',
            rootProperty: 'customers'
        }
    }
});