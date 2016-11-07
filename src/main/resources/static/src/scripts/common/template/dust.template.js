'use strict';

define(function (require) {
    const dust = require('dust');

    var Template = {

        renderTemplate: function (templateName, data) {
            var html = {};
            dust.render(templateName, data, function (error, renderedHtml) {
                if (error) {
                    throw new Error(error);
                }

                html = renderedHtml;
            });

            return html;
        }
    };

    return Template;
});