const fs = require('fs');

fs.readFile('cypress/orderring/orderingWindows.ts', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const _data = data.replace(/\\/g, "/");
    console.log(_data);

    fs.writeFile('cypress/orderring/converted.ts', _data, (err) => {
        if (err) {
            console.error(err);
        }
        console.log('File writtten Task Done');

    });

});
