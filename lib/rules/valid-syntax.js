/**
 * @fileoverview Validates ECMAScript syntax
 * @author Nicholas C. Zakas
 * @copyright 2014 Nicholas C. Zakas. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var options = context.options[0] || {},
        edition = options.ecmascript || Infinity,
        jsx = options.jsx || false;

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        "Property": function(node) {

            // flags get/set literal syntax
            if (edition < 5) {
                if (node.kind !== "init") {
                    context.report(node, "Syntax error: Unexpected token (space).");
                }
            }

            // flags computed property names
            if (edition < 6) {
                if (node.computed) {
                    context.report(node, "Syntax error: Unexpected token [.");
                }
            }
        },

        "YieldExpression": function(node) {
            if (edition < 6) {
                context.report(node, "Syntax error: Unexpected identifier.");
            }
        },

        "XJSElement": function(node) {
            if (!jsx) {
                context.report(node, "Syntax error: Unexpected token <.");
            }
        }

    };

};
