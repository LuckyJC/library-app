import Ember from 'ember';

export default Ember.Controller.extend({
    isValidEmail: Ember.computed.match("email", /^.+@.+\..+$/),
    hasText: Ember.computed.gte('message.length', 5),
   
    isValid: Ember.computed.and("isValidEmail", 'hasText'),
    isNotValid: Ember.computed.not('isValid'),

    actions: {
        sendMessage() {
            alert(`Sent message:${this.get("message")} to: ${this.get("email")}`);
            this.set("responseMessage", `Sent message:${this.get("message")} to: ${this.get("email")}`);
            //this.set("email", "");
            //this.set("message", "");
        }
}
});
