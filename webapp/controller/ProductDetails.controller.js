sap.ui.define([
	"./BaseController",
	"sap/ui/core/mvc/Controller",
	"opensap/manageproducts/ManageProducts/model/formatter",
	"sap/m/MessageToast"
], function (BaseController, Controller, formatter, MessageToast) {
	"use strict";

	return BaseController.extend("opensap.manageproducts.ManageProducts.controller.ProductDetails", {

		formatter: formatter,

		onInit: function () {
			this.byId("categoryLabel").setVisible(false);
			this.byId("category").setVisible(false);
		},
		/**
		 * Event handler for the custom rating control.
		 * It is called when the user changed the rating value and pressed the rate button
		 * @public
		 */
		onRatingChanged: function (oEvent) {
			var iValue = oEvent.getParameter("value"),
				sMessage = this.getResourceBundle().getText("productRatingSuccess", [iValue]);

			MessageToast.show(sMessage);
		}
	});

});