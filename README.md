# Console.oof

## Installation and usage

Ever felt like your console.log messages weren't fun enough? \\
Your code not bullying you enough? \\
Want something more interesting than "BROKEN HERE" in your log messages? \\
Deathly afraid of the debugger?

Fear not, for this is the package for you! Simply require the module and let the Oof's flow free. 

```bash
npm install @henrym2/console.oof@0.1.0
```

```javascript
const oof = require("console.oof")
oof()
```
It's as simple as that!

## Contribution

Please feel free to contribute you're own prime "Oofs" to the package. All styling is randomized and examples can be found both in the index.js folder and below!. This package is free to be forked, changed and modified but completely at their own risk as per the GLWT (Good Luck With That) Public License.

### Phrase examples

Phrases should be formatted in the following way:
```javascript
"%c YOUR TEXT HERE %c SOME MORE TEXT \n %c SOME MORE TEXT"
```
Any text following a \%c will have random styling applied to it, so you can either style everything the same or randomize the styling across the text! I might add more styling options later or configuration, but for now this serves its purpose.  