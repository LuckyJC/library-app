import DS from 'ember-data';
import Ember from 'ember';
import { hasMany } from 'ember-data/relationships';
import Faker from 'faker';

export default DS.Model.extend({
    name: DS.attr('string'),
    address: DS.attr('string'),
    phone: DS.attr('string'),

    //books: hasMany('books'),
    books: hasMany('book', {inverse: 'library', async: true}),

    isValid: Ember.computed.notEmpty('name'),

    //Faker function to generate dummy data
    randomize() {
        this.set('name', Faker.company.companyName() + ' Library');
        this.set('address', this._fullAddress());
        this.set('phone', Faker.phone.phoneNumber());

        // If you would like to use in chain.
        return this;
    },

    _fullAddress() {
        return `${Faker.address.streetAddress()}, ${Faker.address.city()}`;
    }
});
