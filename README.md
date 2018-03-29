#	piui
__Printable UI for Console__

##  Description

__piui__ is a UI (user interface) toolkit for console. The name *piui* is abbreviation of *PrIntable User Interface*.

![piui](./docs/assets/piui.png)

##	ToC

*	[Get Started](#get-started)
*	[Components](#components)
*   [About](#about)
*	[CHANGE LOG](./CHANGELOG.md)
*	[Homepage](https://github.com/YounGoat/nodejs.piui)

##	Get Started

```javascript
// Require the whole toolkit.
const piui = require('piui');

// Or, require a standalone component.
const table = require('piui/table');

const rows = [
    { name: 'Ch-ing', age: 11, gender: 'female' },
    { name: 'Ching', age: 18, gender: 'male' },
];
const columns = [
    { name: 'name', title: 'Name', size: 9 },
    { name: 'age', title: 'Age', align: 'right' },
    { name: 'gender', title: 'Gender', formatter: t => t.toUpperCase() },
];
table.print(rows, { columns });
```

##	Components

*   [__piui/table__](./docs/table.md)  
    Create a printable table or print a table directly in console.   
    ![table](./docs/assets/table.png)

##  About

__piui__ grew out of __[jinang/table](https://www.npmjs.com/package/jinang)__ and __[yuan-console](https://www.npmjs.com/package/yuan-console)__. __jinang__ is an incubator prevent sub modules from depending on 3rd packages. And __yuan-console__ is too heavy for those who only wanna display simple components (e.g. a table or a progress bar) in their cli programs. That is why __piui__ is generated.