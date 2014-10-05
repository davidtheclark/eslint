/**
 * @fileoverview Validates ECMAScript syntax
 * @author Nicholas C. Zakas
 * @copyright 2014 Nicholas C. Zakas. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslint = require("../../../lib/eslint"),
    ESLintTester = require("eslint-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint);
eslintTester.addRuleTest("lib/rules/valid-syntax", {

    valid: [
        "var foo = bar",
        {
            code: "var foo = <bar/>;",
            args: [2, { jsx: true }]
        },
        {
            code: "var foo = { get bar(){} };",
            args: [2, {ecmascript: 5}]
        },
        {
            code: "var foo = { set bar(value){} };",
            args: [2, {ecmascript: 5}]
        },
        {
            code: "var foo = { [bar]: 1 };",
            args: [2, { ecmascript: 6 }]
        }

    ],

    invalid: [
        {
            code: "var foo = <bar/>;",
            errors: [{
                message: "Syntax error: Unexpected token <.",
                type: "XJSElement"
            }]
        },
        {
            code: "var foo = { get bar(){} };",
            args: [2, {ecmascript: 3}],
            errors: [{
                message: "Syntax error: Unexpected token (space).",
                type: "Property"
            }]
        },
        {
            code: "var foo = { set bar(value){} };",
            args: [2, {ecmascript: 3}],
            errors: [{
                message: "Syntax error: Unexpected token (space).",
                type: "Property"
            }]
        },
        {
            code: "var foo = { [bar]: 1 };",
            args: [2, {ecmascript: 3}],
            errors: [{
                message: "Syntax error: Unexpected token [.",
                type: "Property"
            }]
        }

    ]
});
