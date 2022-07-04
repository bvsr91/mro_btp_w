sap.ui.define(["./BaseController","sap/ui/model/json/JSONModel","sap/ui/model/Filter","sap/ui/model/Sorter","sap/ui/model/FilterOperator","sap/m/GroupHeaderListItem","sap/ui/Device","sap/ui/core/Fragment","../model/formatter","./modules/utilController"],function(e,o,t,n,i,a,s,r,l,p){"use strict";return e.extend("com.fe.zmroui.controller.MyInbox",{formatter:l,onInit:function(){this.getRouter().getRoute("myInbox").attachPatternMatched(this._onRouteMatched,this)},onNavBack:function(){history.go(-1)},_onRouteMatched:function(){this.setSelKey("myInbox")},handleResponsivePopoverPress:function(e){var o=e.getSource(),t=this.getView();if(!this._pPopover){this._pPopover=r.load({id:t.getId(),name:"com.fe.zmroui.fragments.Popover",controller:this}).then(function(e){t.addDependent(e);return e})}this._pPopover.then(function(e){e.openBy(o)})},handleCloseButton:function(e){this.byId("myPopover").close()},onItemClose:function(e){var o=e.getSource(),t=o.getParent();t.removeItem(o);MessageToast.show("Notification Closed: "+o.getTitle())},onNotificationAction:function(e){var o=e.getSource(),t=o.getParent().getBindingContext("notificationData").getObject();var n=new sap.m.Popover({placement:"Bottom",showHeader:false,content:[new sap.m.HBox({items:[new sap.ui.core.Icon({src:"sap-icon://display",size:"1.0rem",color:"Neutral"}).addStyleClass("sapUiTinyMarginBeginEnd"),new sap.m.Link({text:"Display",press:this.onDisplay.bind(this,o),enabled:true,wrapping:true}).addStyleClass("sapUiNoMarginTop")]}).addStyleClass("sapUiSmallMarginTopBottom linkColorDispaly"),new sap.m.HBox({items:[new sap.ui.core.Icon({src:"sap-icon://accept",size:"1.0rem",color:sap.ui.core.IconColor.Positive}).addStyleClass("sapUiTinyMarginBeginEnd"),new sap.m.Link({text:"Approve",press:this.onApproval.bind(this,o),enabled:true,wrapping:true})]}).addStyleClass("sapUiSmallMarginTopBottom sapUiSmallMarginEnd linkColorApprove"),new sap.m.HBox({items:[new sap.ui.core.Icon({src:"sap-icon://decline",size:"1.0rem",color:"red"}).addStyleClass("sapUiTinyMarginBeginEnd"),new sap.m.Link({text:"Reject",enabled:true,press:this.onReject.bind(this,o),wrapping:true})]}).addStyleClass("sapUiSmallMarginBottom linkColorReject")]});n.openBy(o)},onApproval:function(){},onReject:function(e,o){var t=p.createDialog(e,o);t.open()},onDisplay:function(e,o){},onSearch:function(e){var o=[];var n=e.getSource().getValue();if(n&&n.length>0){var a=new t("author",i.Contains,n);o.push(a)}var s=this.byId("notificationData");var r=s.getBinding("items");r.filter(o,"Application")}})});