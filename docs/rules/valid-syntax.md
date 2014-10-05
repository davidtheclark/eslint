# Validates ECMAScript syntax (valid-syntax)

ECMAScript, the core language upon which JavaScript is based, defines the expected syntax of JavaScript code. ECMAScript is defined in a specification called ECMA-262, which has several editions. Each edition brings with it specific syntax rules that are enforced by JavaScript environments. There are three primary editions that define JavaScript syntax:

* ECMAScript 3
* ECMAScript 5
* ECMAScript 6

Each subsequent edition introduces new syntax that wasn't previously supported. For instance, any JavaScript code that must work in Internet Explorer 8 or earlier must adhere to the ECMAScript 3 syntax to avoid errors.

Additionally, Facebook created a popular syntax extension called [JSX](http://facebook.github.io/jsx/) that augments the ECMAScript syntax to support inline HTML markup. This syntax isn't supported natively by JavaScript environments and so must be precompiled into JavaScript before deployment.

Understanding the syntax that your JavaScript code is expected to adhere to can prevent problems, especially when the code will be run in a number of different environments.

## Rule Details

This rule aims to enforce proper JavaScript syntax based on which ECMAScript editions are to be supported and whether or not JSX syntax is allowed. As such, the rule warns whenever it detects a syntax that would cause a syntax error in the specified ECMAScript edition.

### Options

You can specify which edition of ECMAScript you want to support as well as whether or not to support JSX using the following options:

* `ecmascript` - the number `3`, `5`, or `6`, corresponding to ECMAScript editions. Any other values are interpreted as `6`. Default is `6`.
* `jsx` - a boolean value indicating whether or not JSX syntax is allowed. Default is `false`.

So to configure the rule to support ECMAScript 5 with JSX extensions, use the following:

```json
{
    "valid-syntax": [2, {
        "ecmascript": 5,
        "jsx": true
    }]
}
```

## When Not To Use It

If you want to allow any valid ECMAScript syntax without regard for version or extensions, then you can safely turn this rule off.

## Further Reading

* [JSX](http://facebook.github.io/jsx/)

