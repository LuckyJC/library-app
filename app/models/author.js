import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';
import Faker from 'faker';

export default DS.Model.extend({
    name: DS.attr('string'),
    //books: DS.hasMany('book')

    books: DS.hasMany('book', {inverse: 'author', async: true}),
    isNotValid: Ember.computed.empty('name'),

    randomize() {
        this.set('name', Faker.name.findName());
        return this;
    }


});
