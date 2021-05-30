/*
  filename: integralui.listview.js
  version : 21.1.0
  Copyright © 2016-2021 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
"use strict";var __extends=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)if(e.hasOwnProperty(i))t[i]=e[i]})(e,i)};return function(e,i){t(e,i);function r(){this.constructor=e}e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),integralui_dragdrop_service_1=require("../services/integralui.dragdrop.service"),integralui_filter_service_1=require("../services/integralui.filter.service"),integralui_base_list_1=require("./integralui.base.list"),integralui_listitem_1=require("./integralui.listitem"),i0=require("@angular/core"),i1=require("../services/integralui.data.service"),i2=require("../services/integralui.dragdrop.service"),i3=require("../services/integralui.common.service"),i4=require("../services/integralui.filter.service"),i5=require("./integralui.core"),i6=require("@angular/common"),i7=require("./integralui.scrollbar"),_c0=["content"],_c1=["itemElem"],_c2=function(t,e){return{height:t,width:e}},_c3=function(t){return{"iui-listitem-animate-select iui-listitem-animate-select-left":t}},_c4=function(t){return{height:t}};function IntegralUIListView_span_3_li_2_span_5_Template(t,e){if(1&t){i0.ɵɵelementStart(0,"span",16);i0.ɵɵelement(1,"span",17);i0.ɵɵelementEnd()}if(2&t){var i=i0.ɵɵnextContext().$implicit,r=i0.ɵɵnextContext(2);i0.ɵɵproperty("ngStyle",i0.ɵɵpureFunction2(3,_c2,r.animateItemSize.height+"px",i.clickPos.x+"px"));i0.ɵɵadvance(1);i0.ɵɵproperty("ngClass",i0.ɵɵpureFunction1(6,_c3,i.isClicked))("ngStyle",i0.ɵɵpureFunction1(8,_c4,r.animateItemSize.height+"px"))}}var _c5=function(t,e,i){return{left:t,height:e,width:i}},_c6=function(t){return{"iui-listitem-animate-select iui-listitem-animate-select-right":t}};function IntegralUIListView_span_3_li_2_span_6_Template(t,e){if(1&t){i0.ɵɵelementStart(0,"span",16);i0.ɵɵelement(1,"span",17);i0.ɵɵelementEnd()}if(2&t){var i=i0.ɵɵnextContext().$implicit,r=i0.ɵɵnextContext(2);i0.ɵɵproperty("ngStyle",i0.ɵɵpureFunction3(3,_c5,i.clickPos.x+"px",r.animateItemSize.height+"px",r.animateItemSize.width-i.clickPos.x+"px"));i0.ɵɵadvance(1);i0.ɵɵproperty("ngClass",i0.ɵɵpureFunction1(7,_c6,i.isClicked))("ngStyle",i0.ɵɵpureFunction1(9,_c4,r.animateItemSize.height+"px"))}}var _c7=function(t,e,i){return{"iui-listitem-general":t,"iui-listviewitem-animate-suspended":e,"iui-listviewitem-animate-enter-suspended":i}},_c8=function(t,e){return{width:t,height:e}},_c9=function(t){return{$implicit:t}};function IntegralUIListView_span_3_li_2_Template(t,e){if(1&t){var i=i0.ɵɵgetCurrentView();i0.ɵɵelementStart(0,"li",10,11);i0.ɵɵlistener("mouseenter",function(t){i0.ɵɵrestoreView(i);var r=e.$implicit;return i0.ɵɵnextContext(2).itemMouseEnter(t,r)})("mouseleave",function(t){i0.ɵɵrestoreView(i);var r=e.$implicit;return i0.ɵɵnextContext(2).itemMouseLeave(t,r)});i0.ɵɵelementStart(2,"div",12);i0.ɵɵlistener("click",function(t){i0.ɵɵrestoreView(i);var r=e.$implicit;return i0.ɵɵnextContext(2).itemClickEvent(t,r)})("dblclick",function(t){i0.ɵɵrestoreView(i);var r=e.$implicit;return i0.ɵɵnextContext(2).itemDblClickEvent(t,r)})("contextmenu",function(t){i0.ɵɵrestoreView(i);var r=e.$implicit;return i0.ɵɵnextContext(2).itemRightClickEvent(t,r)})("mousedown",function(t){i0.ɵɵrestoreView(i);var r=e.$implicit;return i0.ɵɵnextContext(2).itemMouseDown(t,r)})("mouseup",function(t){i0.ɵɵrestoreView(i);var r=e.$implicit;return i0.ɵɵnextContext(2).itemMouseUp(t,r)})("dragstart",function(t){i0.ɵɵrestoreView(i);var r=e.$implicit;return i0.ɵɵnextContext(2).itemDragStart(t,r)})("dragover",function(t){i0.ɵɵrestoreView(i);var r=e.$implicit,o=e.index;return i0.ɵɵnextContext(2).itemDragOver(t,r,o,!0)})("drop",function(t){i0.ɵɵrestoreView(i);var r=e.$implicit;return i0.ɵɵnextContext(2).itemDragDrop(t,r)})("touchstart",function(t){i0.ɵɵrestoreView(i);var r=e.$implicit;return i0.ɵɵnextContext(2).itemTouchStart(t,r)})("touchmove",function(t){i0.ɵɵrestoreView(i);var r=e.$implicit;return i0.ɵɵnextContext(2).itemTouchMove(t,r)})("touchend",function(t){i0.ɵɵrestoreView(i);var r=e.$implicit;return i0.ɵɵnextContext(2).itemTouchEnd(t,r)});i0.ɵɵelementStart(3,"div",13);i0.ɵɵlistener("focus",function(){i0.ɵɵrestoreView(i);var t=e.$implicit;return i0.ɵɵnextContext(2).itemGotFocus(t)})("blur",function(){i0.ɵɵrestoreView(i);var t=e.$implicit;return i0.ɵɵnextContext(2).itemLostFocus(t)})("keydown",function(t){i0.ɵɵrestoreView(i);var r=e.$implicit;return i0.ɵɵnextContext(2).itemKeyDown(t,r)})("keypress",function(t){i0.ɵɵrestoreView(i);var r=e.$implicit;return i0.ɵɵnextContext(2).itemKeyPress(t,r)})("keyup",function(t){i0.ɵɵrestoreView(i);var r=e.$implicit;return i0.ɵɵnextContext(2).itemKeyUp(t,r)});i0.ɵɵelement(4,"span",14);i0.ɵɵelementEnd();i0.ɵɵelementEnd();i0.ɵɵtemplate(5,IntegralUIListView_span_3_li_2_span_5_Template,2,10,"span",15);i0.ɵɵtemplate(6,IntegralUIListView_span_3_li_2_span_6_Template,2,11,"span",15);i0.ɵɵelementEnd()}if(2&t){var r=e.$implicit,o=i0.ɵɵnextContext(2);i0.ɵɵproperty("ngClass",i0.ɵɵpureFunction3(11,_c7,!o.allowAnimation,o.allowAnimation,o.allowAnimation&&r.data==o.hoverItem))("ngStyle",r.inlineStyle);i0.ɵɵadvance(2);i0.ɵɵproperty("ngClass",r.style.general)("ngStyle",i0.ɵɵpureFunction2(15,_c8,r.inlineStyle.width,r.inlineStyle.height));i0.ɵɵadvance(1);i0.ɵɵpropertyInterpolate("tabindex",r.tabIndex);i0.ɵɵproperty("ngClass",r.style.content)("iuiFocus",r.data==o.currentFocusItem);i0.ɵɵadvance(1);i0.ɵɵproperty("iuiTemplateOutlet",o.itemTemplate)("iuiTemplateOutletContext",i0.ɵɵpureFunction1(18,_c9,r.data));i0.ɵɵadvance(1);i0.ɵɵproperty("ngIf",o.allowAnimation&&r.isClicked);i0.ɵɵadvance(1);i0.ɵɵproperty("ngIf",o.allowAnimation&&r.isClicked)}}function IntegralUIListView_span_3_iui_scrollbar_3_Template(t,e){if(1&t){var i=i0.ɵɵgetCurrentView();i0.ɵɵelementStart(0,"iui-scrollbar",18,19);i0.ɵɵlistener("valueChanged",function(t){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext(2).onVerticalScrollChanged(t)})("scrollStart",function(t){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext(2).onVerticalScrollStart(t)})("scrollEnd",function(t){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext(2).onVerticalScrollEnd(t)});i0.ɵɵelementEnd()}if(2&t){var r=i0.ɵɵnextContext(2);i0.ɵɵproperty("enabled",r.enabled)("value",r.currentScrollPos.y)("max",r.maxScrollPos.y)("largeChange",r.scrollLargeChange.y)("height",r.scrollBarSize.height)}}function IntegralUIListView_span_3_iui_scrollbar_4_Template(t,e){if(1&t){var i=i0.ɵɵgetCurrentView();i0.ɵɵelementStart(0,"iui-scrollbar",20,21);i0.ɵɵlistener("valueChanged",function(t){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext(2).onHorizontalScrollChanged(t)})("scrollStart",function(t){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext(2).onHorizontalScrollStart(t)})("scrollEnd",function(t){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext(2).onHorizontalScrollEnd(t)});i0.ɵɵelementEnd()}if(2&t){var r=i0.ɵɵnextContext(2);i0.ɵɵproperty("enabled",r.enabled)("orientation",r.horScrollOrientation)("value",r.currentScrollPos.x)("max",r.maxScrollPos.x)("width",r.scrollBarSize.width)}}function IntegralUIListView_span_3_div_5_Template(t,e){if(1&t)i0.ɵɵelement(0,"div",22)}var _c10=function(t,e,i,r){return{left:t,top:e,width:i,height:r}};function IntegralUIListView_span_3_Template(t,e){if(1&t){var i=i0.ɵɵgetCurrentView();i0.ɵɵelementStart(0,"span");i0.ɵɵelementStart(1,"ul",5);i0.ɵɵlistener("touchstart",function(t){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext().ctrlTouchStart(t)})("touchend",function(t){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext().ctrlTouchEnd(t)});i0.ɵɵtemplate(2,IntegralUIListView_span_3_li_2_Template,7,20,"li",6);i0.ɵɵelementEnd();i0.ɵɵtemplate(3,IntegralUIListView_span_3_iui_scrollbar_3_Template,2,5,"iui-scrollbar",7);i0.ɵɵtemplate(4,IntegralUIListView_span_3_iui_scrollbar_4_Template,2,5,"iui-scrollbar",8);i0.ɵɵtemplate(5,IntegralUIListView_span_3_div_5_Template,1,0,"div",9);i0.ɵɵelementEnd()}if(2&t){var r=i0.ɵɵnextContext();i0.ɵɵadvance(1);i0.ɵɵproperty("ngStyle",i0.ɵɵpureFunction4(5,_c10,0-r.contentPos.left+"px",0-r.contentPos.top+"px",r.contentSize.width+"px",r.contentSize.height+"px"));i0.ɵɵadvance(1);i0.ɵɵproperty("ngForOf",r.scrollItemList);i0.ɵɵadvance(1);i0.ɵɵproperty("ngIf",r.isVerScrollVisible());i0.ɵɵadvance(1);i0.ɵɵproperty("ngIf",r.isHorScrollVisible());i0.ɵɵadvance(1);i0.ɵɵproperty("ngIf",r.isVerScrollVisible()&&r.isHorScrollVisible())}}function IntegralUIListView_span_4_Template(t,e){if(1&t){i0.ɵɵelementStart(0,"span");i0.ɵɵelementStart(1,"ul",23,2);i0.ɵɵprojection(3);i0.ɵɵelementEnd();i0.ɵɵelementEnd()}}var _c11=["*"],IntegralUIListView=function(t){__extends(e,t);function e(e,i,r,o,n,l,s,c){var a=t.call(this,e,i,r,o,n,l)||this;a.dataService=e;a.dragDropService=i;a.elemRef=r;a.elemRenderer=o;a.commonService=n;a.filterService=l;a.cmpResolver=s;a.baseService=c;a.clientSpace={width:0,height:0};a.contentPos={top:0,left:0};a.currentItemSize={width:0,height:0};a.itemsPerColumn=0;a.itemsPerRow=0;a.numColumns=0;a.numRows=0;a.currentScrollMode=integralui_core_1.IntegralUIScrollMode.Horizontal;a.overflowSettings={horizontal:"auto",vertical:"auto"};a.tRef=null;a.itemList=[];return a}Object.defineProperty(e.prototype,"itemSize",{get:function(){return this.currentItemSize},set:function(t){if(t){this.currentItemSize={width:t.width>0?t.width+4:0,height:t.height>0?t.height+4:0};this.updateLayout()}},enumerable:!0,configurable:!0});Object.defineProperty(e.prototype,"scrollMode",{get:function(){return this.currentScrollMode},set:function(t){if(this.currentScrollMode!=t){this.currentScrollMode=t;this.contentPos={top:0,left:0};this.currentIndex=0;this.currentScrollPos={x:0,y:0};this.updateLayout()}},enumerable:!0,configurable:!0});e.prototype.updateOverflowSettings=function(){if(0!=this.virtualMode)this.overflowSettings={horizontal:"hidden",vertical:"hidden"};else if(this.currentScrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal)this.overflowSettings={horizontal:"auto",vertical:"hidden"};else this.overflowSettings={horizontal:"hidden",vertical:"auto"}};e.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.updateData();this.updateCurrentList();this.generalClassName="iui-listview";this.itemClassName="iui-listitem";this.itemContentClassName=this.itemClassName+"-content";this.initStyle()};e.prototype.updateData=function(){this.dataService.init([{data:this.items,fields:this.options.dataFields}])};e.prototype.ngAfterViewInit=function(){var t=this,e=setTimeout(function(){var i=t.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUITComponent);if(i&&t.contentRef)t.tRef=t.contentRef.createComponent(i);clearTimeout(e)},100)};e.prototype.ngAfterContentInit=function(){this.updateLayout()};e.prototype.ngOnDestroy=function(){this.removeDropMark();this.resetLayoutTimer();if(this.tRef)this.tRef.destroy()};e.prototype.ngAfterContentChecked=function(){this.clientRect={width:this.elemRef.nativeElement.firstElementChild.clientWidth,height:this.elemRef.nativeElement.firstElementChild.clientHeight};if(this.clientRect.width!=this.prevClientRect.width){this.updateLayout();this.prevClientRect.width=this.clientRect.width}else if(this.clientRect.height!=this.prevClientRect.height){this.updateLayout();this.prevClientRect.height=this.clientRect.height}};e.prototype.addItem=function(t){this.callEventAdd("add",t)};e.prototype.clearItems=function(){this.dataService.clear();this.clear.emit(null)};e.prototype.insertItemAt=function(t,e){this.callEventAdd("at",t,e)};e.prototype.removeItemAt=function(t){return this.callEventRemove(null,t)};e.prototype.itemDragOver=function(t,e,i,r){if(this.isEnabled){var o=this.getItemElemList();if(o&&i>=0&&i<o.length){var n=this.commonService.getPageRect(o[i].nativeElement),l={x:n.left,y:n.top,width:n.right-n.left,height:n.bottom-n.top};this.processDragOver(t,e.data,l,r,this.currentScrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal?"vertical":"horizontal")}}t.stopPropagation()};e.prototype.addItemToCurrentList=function(t){t.type="item";if(!t[this.options.dataFields.id])t[this.options.dataFields.id]=this.commonService.getUniqueId();if(this.isItemAllowed(t))this.currentList.push({data:t})};e.prototype.loadData=function(t,e){this.processLoadData(t,null,e)};e.prototype.updateCurrentList=function(){var t=this;t.currentList.length=0;var e=t.dataService.getList();if(e){t.applySorting(e);e.forEach(function(e){t.addItemToCurrentList(e)})}};e.prototype.updateScrollItemList=function(){this.scrollItemList.length=0;for(var t={x:0,y:0},e=0,i=this.currentIndex;i<this.currentList.length&&i<this.currentIndex+this.visibleRange;i++,e++){var r=this.currentList[i],o={clickPos:{x:0,y:0},data:r.data,index:i-this.currentIndex,position:{x:0,y:0},inlineStyle:this.getItemInlineStyle(r),style:{},tabIndex:e};if(this.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal){if(t.y+this.currentItemSize.height>this.clientSpace.height)t={x:t.x+this.currentItemSize.width,y:0};o.position={x:t.x,y:t.y};t.y+=this.currentItemSize.height}else{if(t.x+this.currentItemSize.width>this.clientSpace.width)t={x:0,y:t.y+this.currentItemSize.height};o.position={x:t.x,y:t.y};t.x+=this.currentItemSize.width}this.updateItemStyle(o);this.scrollItemList.push(o)}};e.prototype.getItem=function(t){if(this.items){this.updateItemList();var e=this.itemList.indexOf(t);if(e>=0&&e<this.items.length)return this.items[e]}return null};e.prototype.getItemFromComponent=function(t){if(t&&t.data)return t.data;if(this.items){this.updateItemList();var e=this.itemList.indexOf(t);if(e>=0&&e<this.items.length)return this.items[e]}return null};e.prototype.getItemIndex=function(t){return this.itemList&&this.itemList.length>0?this.itemList.indexOf(t):-1};e.prototype.updateItemList=function(){if(this.contentList)this.itemList=this.contentList.toArray()};e.prototype.invokeEvent=function(t,e){if(this.isEnabled)if(e){switch(t){case"ITEM_HOVER":this.itemHover.emit({item:e})}}return!0};e.prototype.isDropPosHorizontal=function(){return this.currentScrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal?!1:!0};e.prototype.processDownArrowKey=function(t,e){var i=this.getDownItem(t);if(i){this.currentFocusItem=i.data;var r=this,o=setTimeout(function(){r.processSelection(e,i.data);clearTimeout(o)},1),n=Math.floor(this.visibleRange/2);if(r.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal){if(i.index>=n-this.itemsPerColumn)this.scrollPos({x:this.currentScrollPos.x+this.itemSize.width,y:this.currentScrollPos.y})}else if(i.index>=n-this.itemsPerRow)this.scrollPos({x:this.currentScrollPos.x,y:this.currentScrollPos.y+this.itemSize.height})}return i};e.prototype.processEndKey=function(t,e){var i=null,r=this;if(r.scrollItemList.length>0){if(r.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal)r.scrollPos({x:r.maxScrollPos.x,y:r.currentScrollPos.y});else r.scrollPos({x:r.currentScrollPos.x,y:r.maxScrollPos.y});setTimeout(function(){i=r.scrollItemList[r.scrollItemList.length-1];r.currentFocusItem=i.data;var t=setTimeout(function(){r.processSelection(e,i.data);clearTimeout(t)},1)},1)}return i};e.prototype.processHomeKey=function(t,e){var i=null,r=this;if(r.scrollItemList.length>0){if(r.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal)r.scrollPos({x:0,y:r.currentScrollPos.y});else r.scrollPos({x:r.currentScrollPos.x,y:0});setTimeout(function(){i=r.scrollItemList[0];r.currentFocusItem=i.data;var t=setTimeout(function(){r.processSelection(e,i.data);clearTimeout(t)},1)},1)}return i};e.prototype.processLeftArrowKey=function(t,e){var i=this.getLeftItem(t);if(i){this.currentFocusItem=i.data;var r=this,o=setTimeout(function(){r.processSelection(e,i.data);clearTimeout(o)},1);if(r.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal){if(i.index<this.itemsPerColumn)this.scrollPos({x:this.currentScrollPos.x-this.itemSize.width,y:this.currentScrollPos.y})}else if(i.index<this.itemsPerRow)this.scrollPos({x:this.currentScrollPos.x,y:this.currentScrollPos.y-this.itemSize.height})}return i};e.prototype.processPageDownKey=function(t,e){var i=null,r=this;if(r.scrollItemList.length>0){var o=0;if(r.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal){o=Math.floor((this.visibleRange-2*this.itemsPerColumn)/2);if(r.itemsPerColumn>0)r.scrollPos({x:r.currentScrollPos.x+Math.floor(o*r.itemSize.width/this.itemsPerColumn),y:r.currentScrollPos.y})}else{o=Math.floor((this.visibleRange-2*this.itemsPerRow)/2);if(r.itemsPerRow>0)r.scrollPos({x:r.currentScrollPos.x,y:r.currentScrollPos.y+Math.floor(o*r.itemSize.height/this.itemsPerRow)})}setTimeout(function(){var o=t.index>=0&&t.index<r.scrollItemList.length?t.index:r.scrollItemList.length-1;o=r.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal?r.currentScrollPos.x==r.maxScrollPos.x?r.scrollItemList.length-1:o:r.currentScrollPos.y==r.maxScrollPos.y?r.scrollItemList.length-1:o;i=r.scrollItemList[o];r.currentFocusItem=i.data;var n=setTimeout(function(){r.processSelection(e,i.data);clearTimeout(n)},1)},1)}return i};e.prototype.processPageUpKey=function(t,e){var i=null,r=this;if(r.scrollItemList.length>0){var o=0;if(r.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal){o=Math.floor((this.visibleRange-2*this.itemsPerColumn)/2);if(r.itemsPerColumn>0)r.scrollPos({x:r.currentScrollPos.x-Math.floor(o*r.itemSize.width/this.itemsPerColumn),y:r.currentScrollPos.y})}else{o=Math.floor((this.visibleRange-2*this.itemsPerRow)/2);if(r.itemsPerRow>0)r.scrollPos({x:r.currentScrollPos.x,y:r.currentScrollPos.y-Math.floor(o*r.itemSize.height/this.itemsPerRow)})}setTimeout(function(){var o=t.index>=0&&t.index<r.scrollItemList.length?t.index:0;o=r.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal?0==r.currentScrollPos.x?0:o:0==r.currentScrollPos.y?0:o;i=r.scrollItemList[o];r.currentFocusItem=i.data;var n=setTimeout(function(){r.processSelection(e,i.data);clearTimeout(n)},1)},1)}return i};e.prototype.processRightArrowKey=function(t,e){var i=this.getRightItem(t);if(i){this.currentFocusItem=i.data;var r=this,o=setTimeout(function(){r.processSelection(e,i.data);clearTimeout(o)},1),n=Math.floor(this.visibleRange/2);if(r.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal){if(i.index>=n-this.itemsPerColumn)this.scrollPos({x:this.currentScrollPos.x+this.itemSize.width,y:this.currentScrollPos.y})}else if(i.index>=n-this.itemsPerRow)this.scrollPos({x:this.currentScrollPos.x,y:this.currentScrollPos.y+this.itemSize.height})}return i};e.prototype.processUpArrowKey=function(t,e){var i=this.getUpItem(t);if(i){this.currentFocusItem=i.data;var r=this,o=setTimeout(function(){r.processSelection(e,i.data);clearTimeout(o)},1);if(r.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal){if(i.index<this.itemsPerColumn)this.scrollPos({x:this.currentScrollPos.x-this.itemSize.width,y:this.currentScrollPos.y})}else if(i.index<this.itemsPerRow)this.scrollPos({x:this.currentScrollPos.x,y:this.currentScrollPos.y-this.itemSize.height})}return i};e.prototype.getDownItem=function(t){var e=t.index>=0&&t.index<this.scrollItemList.length-1?t.index+1:-1;if(this.scrollMode!=integralui_core_1.IntegralUIScrollMode.Horizontal)e=(e=t.index+this.itemsPerRow)>=0&&e<this.scrollItemList.length?e:-1;return e>=0?this.scrollItemList[e]:null};e.prototype.getLeftItem=function(t){var e=t.index-this.itemsPerColumn;e=e>=0&&e<this.scrollItemList.length?e:-1;if(this.scrollMode!=integralui_core_1.IntegralUIScrollMode.Horizontal)e=t.index>0?t.index-1:-1;return e>=0&&e<this.scrollItemList.length?this.scrollItemList[e]:null};e.prototype.getRightItem=function(t){var e=t.index+this.itemsPerColumn;e=e>=0&&e<this.scrollItemList.length?e:-1;if(this.scrollMode!=integralui_core_1.IntegralUIScrollMode.Horizontal)e=t.index>=0&&t.index<this.scrollItemList.length-1?t.index+1:-1;return e>=0&&e<this.scrollItemList.length?this.scrollItemList[e]:null};e.prototype.getUpItem=function(t){var e=t.index>0?t.index-1:-1;if(this.scrollMode!=integralui_core_1.IntegralUIScrollMode.Horizontal)e=(e=t.index-this.itemsPerRow)>=0&&e<this.scrollItemList.length?e:-1;return e>=0?this.scrollItemList[e]:null};e.prototype.itemMouseDown=function(t,e){if(this.isEnabled){this.isItemClicked=!0;if(this.options.allowFocus&&1==t.buttons)this.currentFocusItem=e.data;this.processSelection(t,e.data);if(this.prevClickedObj)this.prevClickedObj.isClicked=!1;e.isClicked=!0;var i=this.commonService.getShiftPos(),r=this.commonService.getMousePos(t);r.x-=i.x;r.y-=i.y;var o=this.commonService.getPageRect(this.elemRef.nativeElement.firstElementChild);e.clickPos.x=Math.abs(r.x-o.left-e.position.x);this.prevClickedObj=e}t.stopPropagation()};e.prototype.getContentSize=function(){return this.contentElem?{width:this.contentElem.nativeElement.offsetWidth,height:this.contentElem.nativeElement.offsetHeight}:{width:0,height:0}};e.prototype.updateLayout=function(){if(this.allowUpdate){this.updateOverflowSettings();if(0!=this.virtualMode)this.updateLayoutVirtual();else{this.updateLayoutNormal();var t=this;setTimeout(function(){t.updateLayoutNormal()},10)}}};e.prototype.updateLayoutNormal=function(){var t=this;t.resetLayoutTimer();t.updateTimer=setTimeout(function(){t.updateCurrentList();t.updateItemList();if(t.itemList&&t.itemList.length>0){var e={x:0,y:0},i=0,r=0;if(t.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal)t.itemList.forEach(function(r){var o=r.getSize(),n={width:r.size.width?r.size.width:o.width,height:r.size.height?r.size.height:o.height},l=r.spacing?r.spacing:t.itemSpacing;if(e.y+n.height>t.elemRef.nativeElement.firstElementChild.clientHeight){e={x:e.x+i+l,y:0};i=0}if(i<n.width)i=n.width;r.updatePos(e);e.y+=n.height+l});else t.itemList.forEach(function(i){var o=i.getSize(),n={width:i.size.width?i.size.width:o.width,height:i.size.height?i.size.height:o.height},l=i.spacing?i.spacing:t.itemSpacing;if(e.x+n.width>t.elemRef.nativeElement.firstElementChild.clientWidth){e={x:0,y:e.y+r+l};r=0}if(r<n.height)r=n.height;i.updatePos(e);e.x+=n.width+l})}if(t.selectedItem)t.updateSelectedItem(t.selectedItem);t.updateComplete.emit(null);clearTimeout(t.updateTimer)},10)};e.prototype.updateLayoutVirtual=function(){var t=this;t.resetLayoutTimer();t.updateTimer=setTimeout(function(){t.updateCurrentList();if(0==t.currentList.length)t.currentScrollPos={x:0,y:0};t.clientRect={width:t.elemRef.nativeElement.firstElementChild.clientWidth,height:t.elemRef.nativeElement.firstElementChild.clientHeight};t.updateScrollItemList();var e=setTimeout(function(){t.updateBlockSize();t.avgItemHeight=t.itemSize.height;t.animateItemSize={width:t.itemSize.width,height:t.itemSize.height};t.updateScrollSize();t.updateVisibleRange();t.updateScrollItemList();t.refresh();t.updateComplete.emit(null);clearTimeout(e)},1);clearTimeout(t.updateTimer)},100)};e.prototype.updateScrollSize=function(){this.contentSize={width:this.clientRect.width,height:this.clientRect.height};if(this.currentScrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal){this.itemsPerColumn=Math.floor(this.clientRect.height/this.itemSize.height);var t=this.itemsPerColumn>0?this.currentList.length/this.itemsPerColumn:0;this.numColumns=Math.floor(t);if(this.numColumns<t)this.numColumns++;var e=this.numColumns*this.itemSize.width-this.clientRect.width+2;if(e>0){this.itemsPerColumn=Math.floor((this.clientRect.height-16)/this.itemSize.height);t=this.itemsPerColumn>0?this.currentList.length/this.itemsPerColumn:0;this.numColumns=Math.floor(t);if(this.numColumns<t)this.numColumns++;e=this.numColumns*this.itemSize.width-this.clientRect.width+2}this.scrollSize.width=e;this.contentSize.width+=this.itemSize.width}else{this.itemsPerRow=Math.floor(this.clientRect.width/this.itemSize.width);var i=this.itemsPerRow>0?this.currentList.length/this.itemsPerRow:0;this.numRows=Math.floor(i);if(this.numRows<i)this.numRows++;var r=this.numRows*this.itemSize.height-this.clientRect.height+2;if(r>0){this.itemsPerRow=Math.floor((this.clientRect.width-16)/this.itemSize.width);i=this.itemsPerRow>0?this.currentList.length/this.itemsPerRow:0;this.numRows=Math.floor(i);if(this.numRows<i)this.numRows++;r=this.numRows*this.itemSize.height-this.clientRect.height+2}this.scrollSize.height=r;this.contentSize.height+=this.itemSize.height}if(this.isVerScrollVisible()){this.contentSize.width-=18;if(this.scrollSize.width>0)this.scrollSize.width+=16}if(this.isHorScrollVisible())this.scrollSize.height+=16;this.scrollSize.width=this.scrollSize.width>0?this.scrollSize.width:0;this.scrollSize.height=this.scrollSize.height>0?this.scrollSize.height:0;this.maxScrollPos={x:this.scrollSize.width,y:this.scrollSize.height};if(this.currentScrollPos.x>this.maxScrollPos.x)this.changeHorizontalScrollPos(this.maxScrollPos.x);if(this.currentScrollPos.y>this.maxScrollPos.y)this.changeVerticalScrollPos(this.maxScrollPos.y);this.scrollBarSize={width:this.isVerScrollVisible()?this.clientRect.width-20:this.clientRect.width-4,height:this.isHorScrollVisible()?this.clientRect.height-20:this.clientRect.height-4};this.scrollLargeChange={x:this.scrollBarSize.width,y:this.scrollBarSize.height};this.clientSpace={width:this.clientRect.width,height:this.clientRect.height};if(this.isHorScrollVisible())this.clientSpace.height-=16;if(this.isVerScrollVisible())this.clientSpace.width-=16};e.prototype.updateVisibleRange=function(){this.visibleRange=1;var t=this.getItemElemList();if(t&&t.length>0)if(this.currentScrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal)this.visibleRange=2*Math.floor(this.clientSpace.height/this.itemSize.height)*(Math.floor(this.clientSpace.width/this.itemSize.width)+1);else this.visibleRange=2*(Math.floor(this.clientSpace.height/this.itemSize.height)+1)*Math.floor(this.clientSpace.width/this.itemSize.width)};e.prototype.getItemElemList=function(){return this.itemElems?this.itemElems.toArray():null};e.prototype.changeHorizontalScrollPos=function(t){this.currentScrollPos.x=Math.max(0,Math.min(t,this.maxScrollPos.x));if(this.currentScrollPos.x!=this.prevScrollPos.x){this.updateView();this.scrollPosChanged.emit({value:this.scrollPos()});this.prevScrollPos.x=this.currentScrollPos.x}};e.prototype.isVerScrollVisible=function(){if(!this.virtualMode||this.currentScrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal)return!1;else return this.isEnabled&&this.scrollSize.height>0?!0:!1};e.prototype.isHorScrollVisible=function(){if(!this.virtualMode||this.currentScrollMode==integralui_core_1.IntegralUIScrollMode.Vertical)return!1;else return this.isEnabled&&this.scrollSize.width>0?!0:!1};e.prototype.onHorizontalScrollChanged=function(t){this.changeHorizontalScrollPos(t.value)};e.prototype.updateView=function(){if(this.currentScrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal){var t=Math.floor(this.clientSpace.height/this.itemSize.height),e=Math.floor(this.currentScrollPos.x/this.itemSize.width);this.contentPos.left=this.currentScrollPos.x-e*this.itemSize.width;this.currentIndex=e*t}else{var i=Math.floor(this.clientSpace.width/this.itemSize.width),r=Math.floor(this.currentScrollPos.y/this.itemSize.height);this.contentPos.top=this.currentScrollPos.y-r*this.itemSize.height;this.currentIndex=r*i}if(this.currentIndex!=this.prevIndex){this.updateScrollItemList();this.prevIndex=this.currentIndex}};e.prototype.listViewMouseWheel=function(t){if(this.isEnabled)this.processMouseWheel(t,this.scrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal)};e.prototype.scrollTo=function(t){if(0!=this.virtualMode&&t){var e=this.getItemCurrentIndex(t);if(e>=0){var i=0;if(this.currentScrollMode==integralui_core_1.IntegralUIScrollMode.Horizontal){if(this.itemsPerColumn>0&&this.itemSize.width>0){i=this.itemSize.width*(e/this.itemsPerColumn-Math.floor(this.clientSpace.width/this.itemSize.width)+1);this.scrollPos({x:i,y:this.currentScrollPos.y})}}else if(this.itemsPerRow>0&&this.itemSize.height>0){i=this.itemSize.height*(e/this.itemsPerRow-Math.floor(this.clientSpace.height/this.itemSize.height)+1);this.scrollPos({x:this.currentScrollPos.x,y:i})}this.updateLayout()}}};e.prototype.clearSelection=function(){this.updateItemList();if(this.itemList&&this.itemList.length>0)this.itemList.forEach(function(t){t.state&=~integralui_core_1.IntegralUIObjectState.selected});this.clearPrevSelection();this.currentSelection=null;this.updateSelectContentPos();this.refresh()};e.prototype.selectItem=function(t){if(t){this.clearSelection();t.state|=integralui_core_1.IntegralUIObjectState.selected}};e.prototype.updateSelectedItemFromElem=function(t){if(this.itemList&&this.itemList.length>0){var e=-1;if(t)e=this.itemList.indexOf(t);if(e>=0&&e<this.items.length)this.selectedItem=this.items[e]}};e.prototype.updateSelectedItem=function(t){if(this.items&&this.items.length>0){var e=-1;if(t)e=this.items.indexOf(t);if(e>=0&&e<this.itemList.length)this.selectItem(this.itemList[e])}};e.prototype.getControlStyle=function(){var t={cursor:this.ctrlCursor,"overflow-x":this.overflowSettings.horizontal,"overflow-y":this.overflowSettings.vertical};if(this.ctrlSize.width>0)t.width=this.ctrlSize.width+"px";if(this.ctrlSize.height>0)t.height=this.ctrlSize.height+"px";return t};e.prototype.getItemInlineStyle=function(t){var e=t.data[this.options.dataFields.style]||{};e.position="absolute";if(t.position){e.top=t.position.y+"px";e.left=t.position.x+"px"}e.width=this.currentItemSize.width-4+"px";e.height=this.currentItemSize.height-4+"px";return e};e.prototype.resetRefresh=function(){if(this.refreshTimer)clearTimeout(this.refreshTimer);this.refreshTimer=null};e.prototype.refresh=function(t){this.resetRefresh();if(0!=this.virtualMode){this.updateControlClass();for(var e=0;e<this.scrollItemList.length;e++){var i=this.scrollItemList[e];this.updateItemStyle(i)}}else{this.updateItemList();this.clearComponentSelection();for(e=0;e<this.currentSelectedItems.length;e++){var r=this.getItemCurrentIndex(this.currentSelectedItems[e]);if(this.isComponentIndexInRange(r))this.itemList[r].state|=integralui_core_1.IntegralUIObjectState.selected}}};e.ɵfac=function(t){return new(t||e)(i0.ɵɵdirectiveInject(i1.IntegralUIDataService),i0.ɵɵdirectiveInject(i2.IntegralUIDragDropService),i0.ɵɵdirectiveInject(i0.ElementRef),i0.ɵɵdirectiveInject(i0.Renderer2),i0.ɵɵdirectiveInject(i3.IntegralUICommonService),i0.ɵɵdirectiveInject(i4.IntegralUIFilterService),i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver),i0.ɵɵdirectiveInject(i5.IntegralUIBaseService))};e.ɵcmp=i0.ɵɵdefineComponent({type:e,selectors:[["iui-listview"]],contentQueries:function(t,e,i){if(1&t){i0.ɵɵcontentQuery(i,core_1.TemplateRef,!0);i0.ɵɵcontentQuery(i,integralui_listitem_1.IntegralUIListItem,!0)}if(2&t){var r;i0.ɵɵqueryRefresh(r=i0.ɵɵloadQuery())&&(e.itemTemplate=r.first);i0.ɵɵqueryRefresh(r=i0.ɵɵloadQuery())&&(e.contentList=r)}},viewQuery:function(t,e){if(1&t){i0.ɵɵviewQuery(_c0,!0,core_1.ViewContainerRef);i0.ɵɵviewQuery(_c0,!0,core_1.ElementRef);i0.ɵɵviewQuery(_c1,!0,core_1.ElementRef)}if(2&t){var i;i0.ɵɵqueryRefresh(i=i0.ɵɵloadQuery())&&(e.contentRef=i.first);i0.ɵɵqueryRefresh(i=i0.ɵɵloadQuery())&&(e.contentElem=i.first);i0.ɵɵqueryRefresh(i=i0.ɵɵloadQuery())&&(e.itemElems=i)}},inputs:{allowDrag:"allowDrag",allowDrop:"allowDrop",allowFilter:"allowFilter",allowFocus:"allowFocus",appRef:"appRef",controlStyle:"controlStyle",data:"data",enabled:"enabled",items:"items",name:"name",selectedItem:"selectedItem",sorting:"sorting",state:"state",virtualMode:"virtualMode",itemSize:"itemSize",scrollMode:"scrollMode"},outputs:{afterSelect:"afterSelect",beforeEdit:"beforeEdit",beforeSelect:"beforeSelect",change:"change",clear:"clear",dragEnter:"dragEnter",dragDrop:"dragDrop",dragDropComplete:"dragDropComplete",dragLeave:"dragLeave",dragOver:"dragOver",itemAdding:"itemAdding",itemAdded:"itemAdded",itemHover:"itemHover",itemRemoving:"itemRemoving",itemRemoved:"itemRemoved",keyDown:"keyDown",keyPress:"keyPress",keyUp:"keyUp",loadComplete:"loadComplete",scrollPosChanged:"scrollPosChanged",selectionChanged:"selectionChanged",updateComplete:"updateComplete"},features:[i0.ɵɵProvidersFeature([integralui_core_1.IntegralUIBaseService,integralui_data_service_1.IntegralUIDataService]),i0.ɵɵInheritDefinitionFeature],ngContentSelectors:_c11,decls:5,vars:4,consts:[[3,"ngClass","ngStyle","DOMMouseScroll","mousewheel","mouseenter","mouseleave","dragenter","dragleave","dragover","drop","dragend","scroll"],[3,"ngSwitch"],["content",""],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[2,"position","absolute","margin","0","padding","0",3,"ngStyle","touchstart","touchend"],[3,"ngClass","ngStyle","mouseenter","mouseleave",4,"ngFor","ngForOf"],[3,"enabled","value","max","largeChange","height","valueChanged","scrollStart","scrollEnd",4,"ngIf"],[3,"enabled","orientation","value","max","width","valueChanged","scrollStart","scrollEnd",4,"ngIf"],["style","background:#f5f5f5;position:absolute;right:0;bottom:0;width:16px;height:16px;",4,"ngIf"],[3,"ngClass","ngStyle","mouseenter","mouseleave"],["itemElem",""],["draggable","true",3,"ngClass","ngStyle","click","dblclick","contextmenu","mousedown","mouseup","dragstart","dragover","drop","touchstart","touchmove","touchend"],[3,"ngClass","tabindex","iuiFocus","focus","blur","keydown","keypress","keyup"],[3,"iuiTemplateOutlet","iuiTemplateOutletContext"],["class","iui-listitem-animate-select-block",3,"ngStyle",4,"ngIf"],[1,"iui-listitem-animate-select-block",3,"ngStyle"],[3,"ngClass","ngStyle"],[3,"enabled","value","max","largeChange","height","valueChanged","scrollStart","scrollEnd"],["verScroll",""],[3,"enabled","orientation","value","max","width","valueChanged","scrollStart","scrollEnd"],["horScroll",""],[2,"background","#f5f5f5","position","absolute","right","0","bottom","0","width","16px","height","16px"],[2,"margin","0","padding","0"]],template:function(t,e){if(1&t){i0.ɵɵprojectionDef();i0.ɵɵelementStart(0,"div",0);i0.ɵɵlistener("DOMMouseScroll",function(t){return e.listViewMouseWheel(t)})("mousewheel",function(t){return e.listViewMouseWheel(t)})("mouseenter",function(t){return e.onCtrlMouseEnter(t)})("mouseleave",function(t){return e.onCtrlMouseLeave(t)})("dragenter",function(t){return e.ctrlDragEnter(t)})("dragleave",function(t){return e.ctrlDragLeave(t)})("dragover",function(t){return e.ctrlDragOver(t)})("drop",function(t){return e.ctrlDragDrop(t)})("dragend",function(t){return e.ctrlDragEnd(t)})("scroll",function(t){return e.onScroll(t)});i0.ɵɵelementStart(1,"div",1,2);i0.ɵɵtemplate(3,IntegralUIListView_span_3_Template,6,10,"span",3);i0.ɵɵtemplate(4,IntegralUIListView_span_4_Template,4,0,"span",4);i0.ɵɵelementEnd();i0.ɵɵelementEnd()}if(2&t){i0.ɵɵproperty("ngClass",e.getControlClass())("ngStyle",e.getControlStyle());i0.ɵɵadvance(1);i0.ɵɵproperty("ngSwitch",e.virtualMode);i0.ɵɵadvance(2);i0.ɵɵproperty("ngSwitchCase",!0)}},directives:[i6.NgClass,i6.NgStyle,i6.NgSwitch,i6.NgSwitchCase,i6.NgSwitchDefault,i6.NgForOf,i6.NgIf,i5.IntegralUIFocus,i5.IntegralUITemplateOutlet,i7.IntegralUIScrollBar],encapsulation:2});return e}(integralui_base_list_1.IntegralUIBaseList);exports.IntegralUIListView=IntegralUIListView;