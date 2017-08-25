function HouseholdBuilder() {
    this.household = {
        members: []
    };
}

HouseholdBuilder.prototype = {
    constructor: HouseholdBuilder,
    form: {
        ageInput: document.querySelector('input[name="age"]'),
        relInput: document.querySelector("select"),
        smokeInput: document.querySelector('input[type="checkbox"]')
    },
    createMember: function() {
        var self = this,
            member = {
                age: self.form.ageInput.value,
                rel: self.form.relInput.value,
                smoker: self.form.smokeInput.checked
            };
        return self.validateMember(member);
    },
    validateMember: function(member) {
        var self = this;
        if (!member.age || !member.rel) {
            alert("whoops - age & relationship are required");
        } else
            return self.pushMember(member);
        }
    ,
    pushMember: function(member) {
        var self = this,
            hh = self.household,
            hhArr = self.household.members;
        hhArr.push(member);
        document.querySelector("pre.debug").innerHTML = "<h3>" + JSON.stringify(hh) + "</h3>";
        document.querySelector("form").reset();
    },
    /*
  directions requested the ability to remove an added member
  but no remove button in markup and not supposed to edit index.html
  */
    removeMember: function(member) {
        var self = this,
            hh = self.household,
            hhArr = self.household.members;
        for (var i = hhArr.length - 1; i >= 0; i--) {
            if (myArray[i].field == member)
                myArray.splice(i, 1);
            }
        },
    initAddBtn: function() {
        var self = this,
            addBtn = document.querySelector("button.add");
        addBtn.addEventListener("click", function(event) {
            event.preventDefault();
            self.createMember();
        }.bind(self));
    },
    initSubmitBtn: function() {
        var self = this,
            hh = self.household,
            submitBtn = document.querySelector('button[type="submit"]');
        submitBtn.addEventListener("click", function(event) {
            event.preventDefault();
            return JSON.stringify(hh);
        }.bind(self));
    }
};
document.addEventListener("DOMContentLoaded", function(event) {
    var hhb = new HouseholdBuilder();
    hhb.initAddBtn();
    hhb.initSubmitBtn();
});
