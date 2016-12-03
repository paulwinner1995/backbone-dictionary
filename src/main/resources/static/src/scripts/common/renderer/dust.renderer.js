import dust from 'dust';

var DustRenderer = {

    render: function (templateName, data) {
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

export default DustRenderer;