'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require('assert')

    /* NPM */
    , noda = require('noda')

    /* in-package */
    , table = noda.inRequire('table')
    ;

describe('table', () => {
    it('basic table', () => {
        const rows = [
            { name: 'Ch-ing', age: 11, gender: 'female' },
            { name: 'Ching', age: 18, gender: 'male' },
        ];
        const columns = [
            { name: 'name', title: 'Name', size: 9 },
            { name: 'age', title: 'Age', align: 'right' },
            { name: 'gender', title: 'Gender', formatter: t => t.toUpperCase() },
        ];
        assert(table(rows, { columns }) instanceof Array);
    });

    it('auto generated column definitions', () => {
        let rows = [
            { name: 'Mary', age: 11, },
            { name: 'Jack', age: 18, },
        ];
        assert(table(rows) instanceof Array);
    });
});