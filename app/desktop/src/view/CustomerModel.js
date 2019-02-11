Ext.define('ModernTunes.view.CustomerModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.customermodel',
    requires: [
        'ModernTunes.model.Customer'
    ],
    stores: {
        customers: {
            model: 'ModernTunes.model.Customer',
            autoLoad: true,
            sorters: ['id']
        }
    }
});