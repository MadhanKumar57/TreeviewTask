/*
  filename: integralui.dropdownbutton.js
  version : 21.1.0
  Copyright © 2016-2021 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
"use strict";var __extends=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)if(e.hasOwnProperty(i))t[i]=e[i]})(e,i)};return function(e,i){t(e,i);function n(){this.constructor=e}e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),integralui_button_1=require("./integralui.button"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),i0=require("@angular/core"),i1=require("../services/integralui.common.service"),i2=require("@angular/common"),i3=require("../directives/integralui.contextmenu"),_c0=["button"],_c1=["*"],IntegralUIDropDownButton=function(t){__extends(e,t);function e(e,i){var n=t.call(this,e,i)||this;n.elemRef=e;n.commonService=i;n.originalDropDownSettings={};n.dropDownSettings={};n.placementValue=integralui_core_1.IntegralUIPlacement.Right;n.openDirection=integralui_core_1.IntegralUIDirection.Below;n.buttonClass=[];n.itemClick=new core_1.EventEmitter;n.dropDownOpening=new core_1.EventEmitter;n.dropDownOpened=new core_1.EventEmitter;n.dropDownClosed=new core_1.EventEmitter;n.updateDropDownSettings();return n}e.prototype.ngOnInit=function(){this.generalClassName="iui-dropdown-button";this.buttonClassName=this.generalClassName+"-btn";this.initStyle()};e.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},button:{disabled:this.buttonClassName+"-disabled",focused:this.buttonClassName+"-focused",normal:this.buttonClassName,hovered:this.buttonClassName+"-hovered",selected:this.buttonClassName+"-selected"}};this.updateStyle(this.controlStyle);this.updateControlClass();this.updateButtonClass()};e.prototype.ngAfterViewInit=function(){};Object.defineProperty(e.prototype,"placement",{get:function(){return this.placementValue},set:function(t){this.placementValue=t;this.updateAdjustment();this.refresh()},enumerable:!0,configurable:!0});Object.defineProperty(e.prototype,"direction",{get:function(){return this.openDirection},set:function(t){this.openDirection=t;this.updateAdjustment();this.refresh()},enumerable:!0,configurable:!0});Object.defineProperty(e.prototype,"settings",{get:function(){return this.dropDownSettings},set:function(t){this.updateDropDownSettings(t)},enumerable:!0,configurable:!0});e.prototype.getAdjustmentValue=function(t){var e={top:0,right:0,bottom:0,left:0};if(t)e={top:this.commonService.isFieldAvailable(t.top,0),bottom:this.commonService.isFieldAvailable(t.bottom,0),right:this.commonService.isFieldAvailable(t.right,0),left:this.commonService.isFieldAvailable(t.left,0)};return e};e.prototype.updateDropDownSettings=function(t){var e=this,i=setTimeout(function(){if(t)e.originalDropDownSettings={adjustment:e.getAdjustmentValue(t.adjustment),appRef:e.commonService.isFieldAvailable(t.appRef,null),autoClose:e.commonService.isFieldAvailable(t.autoClose,!0),buttonType:1,direction:e.openDirection,enabled:e.commonService.isFieldAvailable(t.enabled,!0),inverse:!1,items:e.commonService.isFieldAvailable(t.items,[]),position:"manual",style:e.commonService.isFieldAvailable(t.style,e.getDefaultDropDownStyle())};else e.originalDropDownSettings={adjustment:e.getAdjustmentValue(),appRef:null,autoClose:!0,buttonType:1,direction:e.openDirection,enabled:!0,inverse:!1,items:[],position:"manual",style:e.getDefaultDropDownStyle()};e.dropDownSettings={adjustment:e.originalDropDownSettings.adjustment,appRef:e.originalDropDownSettings.appRef,autoClose:e.originalDropDownSettings.autoClose,buttonType:1,direction:e.originalDropDownSettings.direction,enabled:e.originalDropDownSettings.enabled,inverse:e.originalDropDownSettings.inverse,items:e.originalDropDownSettings.items,position:e.originalDropDownSettings.position,style:e.originalDropDownSettings.style};e.updateAdjustment();clearTimeout(i)},1)};e.prototype.updateAdjustment=function(){var t={top:0,right:0,bottom:0,left:0};if(this.originalDropDownSettings&&this.originalDropDownSettings.adjustment)t={top:this.originalDropDownSettings.adjustment.top,right:this.originalDropDownSettings.adjustment.right,bottom:this.originalDropDownSettings.adjustment.bottom,left:this.originalDropDownSettings.adjustment.left};if(this.elemRef&&this.buttonElem){var e=this.commonService.getBorderWidth(this.elemRef.nativeElement.firstElementChild),i=this.commonService.getMargin(this.elemRef.nativeElement.firstElementChild),n=this.commonService.getPadding(this.elemRef.nativeElement.firstElementChild);if(this.placementValue==integralui_core_1.IntegralUIPlacement.Left){if(this.openDirection&integralui_core_1.IntegralUIDirection.Left){t.left=t.left-this.buttonElem.nativeElement.offsetWidth-(i.left+e.left+n.left)+1;if(this.openDirection&integralui_core_1.IntegralUIDirection.Below)t.top=t.top-this.buttonElem.nativeElement.offsetHeight-(i.top+e.top+e.bottom+n.top+n.bottom)+1;else if(this.openDirection&integralui_core_1.IntegralUIDirection.Above)t.top=t.top+1}else if(this.openDirection&integralui_core_1.IntegralUIDirection.Right){t.left=t.left-this.buttonElem.nativeElement.offsetWidth-(i.left+e.left+n.left);if(this.openDirection&integralui_core_1.IntegralUIDirection.Above)t.top=t.top-this.buttonElem.nativeElement.offsetHeight-(i.top+e.top+e.bottom+n.top+n.bottom)+2}else if(this.openDirection&integralui_core_1.IntegralUIDirection.Above)t.top=t.top-this.buttonElem.nativeElement.offsetHeight-(i.top+e.top+e.bottom+n.top+n.bottom)+2}else if(this.openDirection&integralui_core_1.IntegralUIDirection.Right){t.left=t.left+(i.right+e.right+n.right);if(this.openDirection&integralui_core_1.IntegralUIDirection.Below)t.top=t.top-this.buttonElem.nativeElement.offsetHeight-(i.top+e.top+e.bottom+n.top+n.bottom)+1;else if(this.openDirection&integralui_core_1.IntegralUIDirection.Above)t.top+=1}else if(this.openDirection&integralui_core_1.IntegralUIDirection.Left){t.left=t.left+(i.right+e.right+n.right);if(this.openDirection&integralui_core_1.IntegralUIDirection.Above)t.top=t.top-this.buttonElem.nativeElement.offsetHeight-(i.top+e.top+e.bottom+n.top+n.bottom)+2}else{t.left=t.left-this.buttonElem.nativeElement.offsetWidth;if(this.openDirection&integralui_core_1.IntegralUIDirection.Above)t.top=t.top-this.buttonElem.nativeElement.offsetHeight-(i.top+e.top+e.bottom+n.top+n.bottom)+2}}if(this.dropDownSettings){this.dropDownSettings.adjustment=t;this.dropDownSettings.direction=this.openDirection;this.dropDownSettings.inverse=this.placementValue==integralui_core_1.IntegralUIPlacement.Left&&!(this.openDirection&integralui_core_1.IntegralUIDirection.Right)&&(this.openDirection&integralui_core_1.IntegralUIDirection.Above||this.openDirection&integralui_core_1.IntegralUIDirection.Below)?!0:!1}};e.prototype.onButtonContextMenu=function(t){t.preventDefault()};e.prototype.onDropDownItemClick=function(t){this.itemClick.emit(t)};e.prototype.onDropDownOpening=function(t){this.dropDownOpening.emit(t)};e.prototype.onDropDownOpened=function(t){this.state|=integralui_core_1.IntegralUIObjectState.selected;this.refresh();this.dropDownOpened.emit(t)};e.prototype.onDropDownClosed=function(t){this.state&=~integralui_core_1.IntegralUIObjectState.selected;this.refresh();this.dropDownClosed.emit(t)};e.prototype.getControlStyle=function(){var t={};if(this.ctrlSize.width>0)t.width=this.ctrlSize.width+"px";if(this.ctrlSize.height>0)t.height=this.ctrlSize.height+"px";return t};e.prototype.getDefaultDropDownStyle=function(){return{general:{normal:"iui-dropdown-button-list"}}};e.prototype.updateButtonClass=function(){this.buttonClass.length=0;this.buttonClassName;if(this.placementValue==integralui_core_1.IntegralUIPlacement.Left){this.buttonClass.push(this.buttonClassName+"-left");if(this.openDirection&integralui_core_1.IntegralUIDirection.Left)this.buttonClass.push(this.generalClassName+"-open-left");else if(this.openDirection&integralui_core_1.IntegralUIDirection.Above)this.buttonClass.push(this.generalClassName+"-open-above")}else{this.buttonClass.push(this.buttonClassName+"-right");if(this.openDirection&integralui_core_1.IntegralUIDirection.Right)this.buttonClass.push(this.generalClassName+"-open-right");else if(this.openDirection&integralui_core_1.IntegralUIDirection.Above)this.buttonClass.push(this.generalClassName+"-open-above")}if(this.options.currentStyle){this.buttonClass.push(this.options.currentStyle.button.normal);if(this.state&integralui_core_1.IntegralUIObjectState.disabled)this.buttonClass.push(this.options.currentStyle.button.disabled);else if(this.state&integralui_core_1.IntegralUIObjectState.focused)this.buttonClass.push(this.options.currentStyle.button.focused);else if(this.state&integralui_core_1.IntegralUIObjectState.selected)this.buttonClass.push(this.options.currentStyle.button.selected);else if(this.state&integralui_core_1.IntegralUIObjectState.hovered)this.buttonClass.push(this.options.currentStyle.button.hovered)}};e.prototype.getButtonClass=function(){return this.buttonClass};e.prototype.getButtonStyle=function(t){if(this.commonService.isString(t))return t;else if(t)return{disabled:this.commonService.isFieldAvailable(t.disabled,this.buttonClassName+"-disabled"),focused:this.commonService.isFieldAvailable(t.focused,this.buttonClassName+"-focused"),hovered:this.commonService.isFieldAvailable(t.hovered,this.buttonClassName+"-hovered"),normal:this.commonService.isFieldAvailable(t.normal,this.buttonClassName),selected:this.commonService.isFieldAvailable(t.selected,this.buttonClassName+"-selected")};else return{disabled:this.defaultStyle.button.disabled,focused:this.defaultStyle.button.focused,hovered:this.defaultStyle.button.hovered,normal:this.defaultStyle.button.normal,selected:this.defaultStyle.button.selected}};e.prototype.updateStyle=function(t){if(t)this.options.currentStyle={general:this.getGeneralStyle(t.general),button:this.getButtonStyle(t.button)};else this.options.currentStyle={general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},button:{disabled:this.defaultStyle.button.disabled,focused:this.defaultStyle.button.focused,hovered:this.defaultStyle.button.hovered,normal:this.defaultStyle.button.normal,selected:this.defaultStyle.button.selected}}};e.prototype.refresh=function(){var t=this,e=setTimeout(function(){t.updateStyle(t.controlStyle);t.updateControlClass();t.updateButtonClass();clearTimeout(e)},1)};e.ɵfac=function(t){return new(t||e)(i0.ɵɵdirectiveInject(i0.ElementRef),i0.ɵɵdirectiveInject(i1.IntegralUICommonService))};e.ɵcmp=i0.ɵɵdefineComponent({type:e,selectors:[["iui-dropdown-button"]],viewQuery:function(t,e){if(1&t)i0.ɵɵviewQuery(_c0,!0);if(2&t){var i;i0.ɵɵqueryRefresh(i=i0.ɵɵloadQuery())&&(e.buttonElem=i.first)}},inputs:{controlStyle:"controlStyle",data:"data",enabled:"enabled",name:"name",size:"size",state:"state",placement:"placement",direction:"direction",settings:"settings"},outputs:{itemClick:"itemClick",dropDownOpening:"dropDownOpening",dropDownOpened:"dropDownOpened",dropDownClosed:"dropDownClosed"},features:[i0.ɵɵInheritDefinitionFeature],ngContentSelectors:_c1,decls:5,vars:4,consts:[[3,"ngClass","ngStyle"],[3,"ngClass","iuiContextMenu","contextmenu","menuClick","menuOpening","menuOpened","menuClosed"],["button",""]],template:function(t,e){if(1&t){i0.ɵɵprojectionDef();i0.ɵɵelementStart(0,"div",0);i0.ɵɵprojection(1);i0.ɵɵelementStart(2,"div",1,2);i0.ɵɵlistener("contextmenu",function(t){return e.onButtonContextMenu(t)})("menuClick",function(t){return e.onDropDownItemClick(t)})("menuOpening",function(t){return e.onDropDownOpening(t)})("menuOpened",function(t){return e.onDropDownOpened(t)})("menuClosed",function(t){return e.onDropDownClosed(t)});i0.ɵɵelement(4,"span");i0.ɵɵelementEnd();i0.ɵɵelementEnd()}if(2&t){i0.ɵɵproperty("ngClass",e.getControlClass())("ngStyle",e.getControlStyle());i0.ɵɵadvance(2);i0.ɵɵproperty("ngClass",e.getButtonClass())("iuiContextMenu",e.settings)}},directives:[i2.NgClass,i2.NgStyle,i3.IntegralUIContextMenu],encapsulation:2});return e}(integralui_button_1.IntegralUIButton);exports.IntegralUIDropDownButton=IntegralUIDropDownButton;