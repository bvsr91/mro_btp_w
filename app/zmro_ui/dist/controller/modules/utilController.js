sap.ui.define(["sap/m/Dialog","sap/m/Button","sap/m/Label","sap/m/library","sap/m/MessageToast","sap/m/Text","sap/m/TextArea"],function(e,t,i,o,n,a,s){"use strict";var c=o.ButtonType;var l=o.DialogType;return{createDialog:function(o,n){this._RejObj=o.getParent().getBindingContext("notificationData").getObject();if(this.oRejectDialog){this.oRejectDialog.destroy();this.oRejectDialog=undefined}if(!this.oRejectDialog){this.oRejectDialog=new e({title:"Reject",type:l.Message,content:[new i({text:"Do you want to reject "+this._RejObj.id+"?",labelFor:"rejectionNote"}),new s("rejectionNote",{width:"100%",placeholder:"Add note (required)",liveChange:function(e){var t=e.getParameter("value");this.oRejectDialog.getBeginButton().setEnabled(t.length>0)}.bind(this)})],beginButton:new t({type:c.Emphasized,text:"Reject",enabled:false,press:this.onRejOk.bind(this,o)}),endButton:new t({text:"Cancel",press:function(){this.oRejectDialog.close()}.bind(this)})})}return this.oRejectDialog},onRejOk:function(e,t){var i=sap.ui.getCore().byId("rejectionNote").getValue();n.show("Note is: "+i);this.oRejectDialog.close()}}});