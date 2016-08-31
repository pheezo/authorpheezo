"use strict";
var testing_1 = require('@angular/core/testing');
var author_wizard_component_1 = require('../app/author-wizard.component');
testing_1.beforeEachProviders(function () { return [author_wizard_component_1.AuthorWizardAppComponent]; });
testing_1.describe('App: AuthorWizard', function () {
    testing_1.it('should create the app', testing_1.inject([author_wizard_component_1.AuthorWizardAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'author-wizard works!\'', testing_1.inject([author_wizard_component_1.AuthorWizardAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('author-wizard works!');
    }));
});
//# sourceMappingURL=author-wizard.component.spec.js.map