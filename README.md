[![Circle CI](https://circleci.com/gh/asilluron/lionjs.svg?style=shield)](https://circleci.com/gh/asilluron/lionjs)

lionjs
======

Lightweight Model Layers for Angular 1.x

## Usage
### JSON Format
Required to start kick off the initial angular module

```
{
    "moduleName": "textForms",
    "form": {
        "firstName": {
            "type": "string",
            "validators": ["alphanum", {
                "min": 3
            }, {
                "max": 30
            }, "required"]
        }
    }
}

```

### Bootstrap
Kick off LionjS
```
var modelConfig = require("modes.json!")
require("lion");
lion(modelConfig);
```

Then register the angular module, this is the name you supplied in the json file under 'moduleName'
```
angular.module("myApp", ["textForms"]);
```

Validation directives are named the same as your fields but with 'Validator' at the end
firstName -> firstNameValidator
```
<input text="type" ng-model="name" first-name-validator/>
```


## Examples
[Example Repo](https://github.com/asilluron/lionjs-gulp-example.git)

