import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    email: DS.attr('string'),

    headerMessage: 'Coming Soon',
    responseMessage: '',

    isValid: Ember.computed.match("email", /^.+@.+\..+$/),
    isDisabled: Ember.computed.not("isValid")
});
