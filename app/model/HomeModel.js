/*
 * File: app/model/HomeModel.js
 *
 * This file was generated by Sencha Architect version 4.2.9.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 7.3.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 7.3.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Demo.model.HomeModel', {
    extend: 'Ext.data.Model',

    alternateClassName: [
        'home'
    ],
    requires: [
        'Ext.data.field.Number'
    ],

    fields: [
        {
            type: 'float',
            name: 'cap'
        },
        {
            type: 'float',
            name: 'vol'
        },
        {
            type: 'float',
            name: 'low'
        },
        {
            type: 'float',
            name: 'high'
        },
        {
            type: 'float',
            name: 'sup'
        },
        {
            type: 'float',
            name: 'rate'
        },
        {
            type: 'int',
            name: 'date'
        },
        {
            type: 'float',
            name: 'close'
        }
    ]
});