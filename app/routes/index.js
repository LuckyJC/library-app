import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return this.store.createRecord('invitation');
    },

    actions: {

        saveInvitation(newInvitation) {
            newInvitation.save().then((response) => {
                this.controller.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
                this.controller.set('model.email', '');
            });
       
        }

    }

});
