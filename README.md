# rainbow-logger

## Usage
Create a custom logger and keep global default as is.
```
const logger = require('rainbow-console')();
```
Override global default console logger (`console.log`).
```
require('rainbow-console')(true);
```

## Test
```
node test
```
