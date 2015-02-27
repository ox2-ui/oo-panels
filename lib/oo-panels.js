ooPanelCallbacks = {};

ooPanelClose = function (panelId, callback) {
  var el = $("#" + panelId);
  el.on(ooTransitionEvent, function(event) {
    Session.set(panelId, false)
    if (callback)
      return callback('success')
  })
  Session.set(panelId + "Open", false)
}

Template.ooPanel.created = function () {
  var self = this;
  self.id = this.data.id ? this.data.id : "";
};

Template.ooPanel.rendered = function () {
  var self = this;
  if (self.data.onClose || self.data.onOpen) {
    var id = self.data.id ? self.data.id : "";
    var el = self.$("#" + id);
    el.on(ooTransitionEvent, function(event) {
      // Use session state to determine 'open' or 'close' callback
      if (Session.equals(id + "Open", true)){

        if (self.data.onOpen) {
          var fn = ooPanelCallbacks[self.data.onOpen];

          if (typeof fn === 'function')
            fn();
          else
            console.log('%c error: onOpen callback not found - ' + self.data.onOpen,  ' background: #BD4F7A; color: white; padding: 1px 15px 1px 5px;', self);
        }
      } else {
        if (self.data.onClose) {
          var fn = ooPanelCallbacks[self.data.onClose];

          if (typeof fn === 'function')
            fn();
          else
            console.log('%c error: onClose callback not found - ' + self.data.onClose,  ' background: #BD4F7A; color: white; padding: 1px 15px 1px 5px;', self);
        }
      }
    });
  }
};

Template.ooPanel.helpers({
  isOpen: function () {
   return Session.get(this.id + "Open") ? "is-open" : "";
  },
  id: function() {
    return Template.instance().id;
  }
});

Template.ooPanel.events({
  'click .js-closePanel' : function (e, t) {
    Session.set(t.id + "Open", false);
  }
});
