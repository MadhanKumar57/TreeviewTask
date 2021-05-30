/*
  filename: integralui.splitcontainer.js
  version : 21.1.0
  Copyright © 2016-2021 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
"use strict";var __extends=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)if(e.hasOwnProperty(i))t[i]=e[i]})(e,i)};return function(e,i){t(e,i);function n(){this.constructor=e}e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),i0=require("@angular/core"),i1=require("../services/integralui.common.service"),i2=require("./integralui.core"),i3=require("@angular/common"),_c0=["buttonBlock"],_c1=["handle"],_c2=["panel1"],_c3=["panel2"],_c4=["splitter"],_c5=["tab1Content"],_c6=["tab2Content"];function IntegralUISplitContainer_span_9_Template(t,e){if(1&t)i0.ɵɵelement(0,"span",15);if(2&t){var i=i0.ɵɵnextContext();i0.ɵɵproperty("ngClass",i.panel1Data.icon)}}function IntegralUISplitContainer_span_10_Template(t,e){if(1&t){i0.ɵɵelementStart(0,"span");i0.ɵɵtext(1);i0.ɵɵelementEnd()}if(2&t){var i=i0.ɵɵnextContext();i0.ɵɵadvance(1);i0.ɵɵtextInterpolate(i.panel1Data.text)}}function IntegralUISplitContainer_span_17_Template(t,e){if(1&t)i0.ɵɵelement(0,"span",15);if(2&t){var i=i0.ɵɵnextContext();i0.ɵɵproperty("ngClass",i.panel2Data.icon)}}function IntegralUISplitContainer_span_18_Template(t,e){if(1&t){i0.ɵɵelementStart(0,"span");i0.ɵɵtext(1);i0.ɵɵelementEnd()}if(2&t){var i=i0.ɵɵnextContext();i0.ɵɵadvance(1);i0.ɵɵtextInterpolate(i.panel2Data.text)}}var _c7=function(t){return{"iui-splitcontainer-button-selected":t}};function IntegralUISplitContainer_div_22_Template(t,e){if(1&t){var i=i0.ɵɵgetCurrentView();i0.ɵɵelementStart(0,"div",16,17);i0.ɵɵelementStart(2,"div",18);i0.ɵɵlistener("click",function(){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext().changeOrientation(!0)});i0.ɵɵelement(3,"span");i0.ɵɵelementEnd();i0.ɵɵelementStart(4,"div",19);i0.ɵɵlistener("click",function(){i0.ɵɵrestoreView(i);return i0.ɵɵnextContext().changeOrientation()});i0.ɵɵelement(5,"span");i0.ɵɵelementEnd();i0.ɵɵelementEnd()}if(2&t){var n=i0.ɵɵnextContext();i0.ɵɵproperty("ngStyle",n.getInlineButtonBlockStyle());i0.ɵɵadvance(2);i0.ɵɵproperty("ngClass",i0.ɵɵpureFunction1(3,_c7,1==n.orientation));i0.ɵɵadvance(2);i0.ɵɵproperty("ngClass",i0.ɵɵpureFunction1(5,_c7,0==n.orientation))}}var _c8=[[["iui-panel1"]],[["iui-panel2"]]],_c9=["iui-panel1","iui-panel2"],IntegralUISplitContainerTags=function(){function t(){}t.ɵfac=function(e){return new(e||t)};t.ɵdir=i0.ɵɵdefineDirective({type:t,selectors:[["iui-panel1"],["iui-panel2"]]});return t}();exports.IntegralUISplitContainerTags=IntegralUISplitContainerTags;var IntegralUISplitContainer=function(t){__extends(e,t);function e(e,i,n,l){var a=t.call(this,i)||this;a.elemRef=e;a.commonService=i;a.cmpResolver=n;a.baseService=l;a.panel1Data={text:"Panel1"};a.panel2Data={text:"Panel2"};a.blockPos={top:"0",right:"auto",bottom:"auto",left:"0"};a.cmdButtonsAllowed=!0;a.maxPos={x:0,y:0};a.swap=!0;a.tabSize={width:0,height:0};a.currentOrientation=integralui_core_1.IntegralUIOrientation.Horizontal;a.currentSplitterDistance=100;a.panel1Size={width:0,height:0};a.panel2Size={width:0,height:0};a.splitterSize={width:0,height:0};a.splitterBlockSize={width:0,height:0};a.splitterButtonBlockSize={width:0,height:0};a.splitterHandleSize={width:0,height:0};a.swapButtonSize={width:0,height:0};a.tab1Size={width:0,height:0};a.tab1ContentSize={width:0,height:0};a.tab2Size={width:0,height:0};a.tab2ContentSize={width:0,height:0};a.buttonClass=[];a.handleClass=[];a.panelClass=[];a.splitterClass=[];a.swapButtonClass=[];a.tabClass=[];a.tRef=null;a.orientationChanged=new core_1.EventEmitter;a.panelsSwapped=new core_1.EventEmitter;a.splitterMoved=new core_1.EventEmitter;a.splitterMoving=new core_1.EventEmitter;a.splitterStartPos={x:0,y:0};a.isSplitterActive=!1;return a}Object.defineProperty(e.prototype,"orientation",{get:function(){return this.currentOrientation},set:function(t){if(this.currentOrientation!=t)var e=this,i=setTimeout(function(){e.currentOrientation=t;e.refresh();e.updateLayout();e.updateLayout();clearTimeout(i)},1)},enumerable:!0,configurable:!0});Object.defineProperty(e.prototype,"panel1",{get:function(){return this.panel1Data},set:function(t){if(this.panel1Data!=t){this.panel1Data=t;this.updateLayout()}},enumerable:!0,configurable:!0});Object.defineProperty(e.prototype,"panel2",{get:function(){return this.panel2Data},set:function(t){if(this.panel2Data!=t){this.panel2Data=t;this.updateLayout()}},enumerable:!0,configurable:!0});Object.defineProperty(e.prototype,"showButtons",{get:function(){return this.cmdButtonsAllowed},set:function(t){if(this.cmdButtonsAllowed!=t)var e=this,i=setTimeout(function(){e.cmdButtonsAllowed=t;e.refresh();e.updateLayout();clearTimeout(i)},100)},enumerable:!0,configurable:!0});Object.defineProperty(e.prototype,"splitterDistance",{get:function(){return this.currentSplitterDistance},set:function(t){if(this.currentSplitterDistance!=t){var e=this;e.updateLayout();var i=setTimeout(function(){if(e.orientation==integralui_core_1.IntegralUIOrientation.Vertical)t=Math.min(Math.max(0,t),e.maxPos.x);else t=Math.min(Math.max(0,t),e.maxPos.y);e.currentSplitterDistance=t;e.splitterMoved.emit({value:t});e.updateLayout();clearTimeout(i)},1)}},enumerable:!0,configurable:!0});e.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.generalClassName="iui-splitcontainer";this.buttonClassName=this.generalClassName+"-button";this.handleClassName=this.generalClassName+"-handle";this.panelClassName=this.generalClassName+"-panel";this.splitterClassName=this.generalClassName+"-splitter";this.swapButtonClassName=this.generalClassName+"-swap-button";this.tabClassName=this.generalClassName+"-tab";this.initStyle()};e.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},panel:{disabled:this.panelClassName+"-disabled",normal:this.panelClassName+"-normal"},splitter:{general:{normal:this.splitterClassName,horizontal:this.splitterClassName+"-horizontal",vertical:this.splitterClassName+"-vertical"},handle:{general:this.handleClassName,horizontal:this.handleClassName+"-horizontal",vertical:this.handleClassName+"-vertical"},swapButton:{disabled:this.swapButtonClassName+"-disabled",hovered:this.swapButtonClassName+"-hovered",normal:this.swapButtonClassName+"-normal",selected:this.swapButtonClassName+"-selected"},tab:{disabled:this.tabClassName+"-disabled",focused:this.tabClassName+"-focused",hovered:this.tabClassName+"-hovered",normal:this.tabClassName+"-normal",selected:this.tabClassName+"-selected"}}};this.updateStyle(this.controlStyle);this.refresh()};e.prototype.ngAfterViewInit=function(){var t=this,e=setTimeout(function(){var i=t.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUITComponent);if(i&&t.splitterRef)t.tRef=t.splitterRef.createComponent(i);clearTimeout(e)},100)};e.prototype.ngAfterContentInit=function(){this.ctrlRect=this.commonService.getPageRect(this.elemRef.nativeElement);this.updateLayout()};e.prototype.ngOnDestroy=function(){if(this.tRef)this.tRef.destroy()};e.prototype.ngAfterContentChecked=function(){this.clientRect={width:this.elemRef.nativeElement.firstElementChild.clientWidth-2,height:this.elemRef.nativeElement.firstElementChild.clientHeight-2};if(this.clientRect.width!=this.prevClientRect.width){this.updateLayout();this.prevClientRect.width=this.clientRect.width}else if(this.clientRect.height!=this.prevClientRect.height){this.updateLayout();this.prevClientRect.height=this.clientRect.height}};e.prototype.swapButtonClicked=function(){if(this.isEnabled){this.swap=!this.swap;var t=this.panel1Data;this.panel1Data=this.panel2Data;this.panel2Data=t;this.panelsSwapped.emit(null);this.updateLayout()}};e.prototype.updateLayout=function(){var t=this,e=setTimeout(function(){t.splitterSize={width:0,height:0};for(var i=t.splitterElem.nativeElement.children,n=0;n<i.length-1;n++){switch(n){case 0:t.tab1Size={width:i[n].offsetWidth,height:i[n].offsetHeight};break;case 1:t.swapButtonSize={width:i[n].offsetWidth,height:i[n].offsetHeight};break;case 2:t.tab2Size={width:i[n].offsetWidth,height:i[n].offsetHeight}}if(t.splitterSize.width<i[0].firstElementChild.offsetHeight)t.splitterSize.width=i[0].firstElementChild.offsetHeight;if(t.splitterSize.height<i[0].offsetHeight)t.splitterSize.height=i[0].offsetHeight}t.tab1ContentSize={width:t.tab1ContentElem.nativeElement.offsetWidth,height:t.tab1ContentElem.nativeElement.offsetHeight};t.tab2ContentSize={width:t.tab2ContentElem.nativeElement.offsetWidth,height:t.tab2ContentElem.nativeElement.offsetHeight};t.splitterSize.width+=2;t.splitterSize.height+=2;t.clientRect={width:t.elemRef.nativeElement.firstElementChild.clientWidth-2,height:t.elemRef.nativeElement.firstElementChild.clientHeight-2};t.panel1Size={width:t.currentSplitterDistance,height:t.currentSplitterDistance};t.panel2Size={width:t.clientRect.width-t.currentSplitterDistance-t.splitterSize.width-4,height:t.clientRect.height-t.currentSplitterDistance-t.splitterSize.height-4};t.splitterButtonBlockSize={width:t.buttonBlockElem.nativeElement.offsetWidth,height:t.buttonBlockElem.nativeElement.offsetHeight};if(t.orientation==integralui_core_1.IntegralUIOrientation.Vertical)t.splitterBlockSize={width:t.splitterElem.nativeElement.clientWidth,height:t.splitterElem.nativeElement.clientHeight-(t.tab1ContentSize.width+t.swapButtonSize.height+t.tab2ContentSize.width+t.splitterButtonBlockSize.height+16)};else t.splitterBlockSize={width:t.splitterElem.nativeElement.clientWidth-(t.tab1Size.width+t.swapButtonSize.width+t.tab2Size.width+t.splitterButtonBlockSize.width+16),height:t.splitterElem.nativeElement.clientHeight};t.splitterHandleSize={width:t.handleElem.nativeElement.offsetWidth,height:t.handleElem.nativeElement.offsetHeight};t.maxPos={x:t.clientRect.width-t.splitterSize.width-4,y:t.clientRect.height-t.splitterSize.height-4};clearTimeout(e)},1)};e.prototype.ctrlMouseMove=function(t){if(this.isEnabled&&1==t.buttons&&this.isSplitterActive){var e=this.commonService.getShiftPos(),i={x:t.pageX-this.ctrlRect.left-e.x,y:t.pageY-this.ctrlRect.top-e.y},n=this.splitterDistance;if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical){n+=i.x-this.splitterStartPos.x;n=Math.min(Math.max(0,n),this.maxPos.x)}else{n+=i.y-this.splitterStartPos.y;n=Math.min(Math.max(0,n),this.maxPos.y)}if(this.currentSplitterDistance!=n){var l={cancel:!1,value:n};this.splitterMoving.emit(l);if(1!=l.cancel){this.currentSplitterDistance=n;this.updateLayout()}}this.splitterStartPos=i}};e.prototype.splitterMouseDown=function(t){if(this.isEnabled){var e=this.commonService.getShiftPos(),i={x:t.pageX-this.ctrlRect.left-e.x,y:t.pageY-this.ctrlRect.top-e.y};if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical){if(i.y>this.tab1Size.height+this.swapButtonSize.height+this.tab2Size.height+10){this.splitterStartPos=i;this.isSplitterActive=!0}}else if(i.x>this.tab1Size.width+this.swapButtonSize.width+this.tab2Size.width+10){this.splitterStartPos=i;this.isSplitterActive=!0}}};e.prototype.onWindowMouseUp=function(t){if(this.isEnabled){this.isSplitterActive=!1;this.splitterMoved.emit({value:this.currentSplitterDistance})}};e.prototype.changeOrientation=function(t){this.orientation=t?integralui_core_1.IntegralUIOrientation.Vertical:integralui_core_1.IntegralUIOrientation.Horizontal};e.prototype.getControlStyle=function(){var t={};if(this.ctrlSize.width>0)t.width=this.ctrlSize.width+"px";if(this.ctrlSize.height>0)t.height=this.ctrlSize.height+"px";return t};e.prototype.getInlinePanel1Style=function(){var t={top:"0",left:"0",width:"auto",height:"auto"};if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical){t.width=this.panel1Size.width+"px";t.height=this.clientRect.height+"px"}else t.height=this.panel1Size.height+"px";return t};e.prototype.getInlinePanel2Style=function(){var t={top:"0",left:"0",width:"auto",height:"auto"};if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical){t.left=this.panel1Size.width+this.splitterSize.width+1+"px";t.width=this.panel2Size.width+"px";t.height=this.clientRect.height+"px"}else{t.height=this.panel2Size.height+"px";t.top=this.panel1Size.height+this.splitterSize.height+"px"}return t};e.prototype.getInlineSplitterStyle=function(){var t={top:"0",left:"0",width:"auto",height:"auto"};if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical){t.left=this.panel1Size.width+"px";t.width=this.splitterSize.width+"px";t.height=this.clientRect.height+"px"}else{t.width=this.clientRect.width+"px";t.height=this.splitterSize.height+"px";t.top=this.panel1Size.height+1+"px"}return t};e.prototype.getInlineTab1Style=function(){var t={top:"-1px",left:"0",width:"auto",height:"auto"};if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical){t.left="-1px";t["border-left"]="0";t.width=this.tab1ContentSize.height+"px";t.height=this.tab1ContentSize.width+"px"}else{t.left="-1px";t["border-top"]="0";t.width=this.tab1ContentSize.width+"px";t.height=this.tab1ContentSize.height+"px"}return t};e.prototype.getInlineTab1ContentStyle=function(){var t={top:"0",left:"0"};if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical){t.top=(this.tab1ContentSize.width-this.tab1ContentSize.height)/2+"px";t.left=(this.tab1ContentSize.height-this.tab1ContentSize.width)/2+"px"}return t};e.prototype.getInlineTab2Style=function(){var t={top:"auto",right:"auto",bottom:"auto",left:"auto",width:"auto",height:"auto"};if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical){t["border-right"]="0";t.right="-1px";t.top=this.tab1ContentSize.width+this.swapButtonSize.height+4+"px";t.width=this.tab2ContentSize.height+"px";t.height=this.tab2ContentSize.width+"px"}else{t.bottom="-1px";t.left=this.tab1ContentSize.width+this.swapButtonSize.width+4+"px";t["border-bottom"]="0";t.width=this.tab2ContentSize.width+"px";t.height=this.tab2ContentSize.height+"px"}return t};e.prototype.getInlineTab2ContentStyle=function(){var t={top:"0",right:"0"};if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical){t.top=(this.tab2ContentSize.width-this.tab2ContentSize.height)/2+"px";t.right=(this.tab2ContentSize.height-this.tab2ContentSize.width)/2+"px"}return t};e.prototype.getInlineHandleBlockStyle=function(){var t={cursor:"ew-resize",width:"auto",height:"auto",top:"auto",left:"auto"};if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical){t.height=this.splitterBlockSize.height+"px";t.top=this.tab1ContentSize.width+this.swapButtonSize.height+this.tab2ContentSize.width+8+"px";t.left=(this.splitterBlockSize.width-this.splitterHandleSize.width)/2+"px"}else{t.cursor="ns-resize";t.width=this.splitterBlockSize.width+"px";t.top=(this.splitterBlockSize.height-this.splitterHandleSize.height)/2+"px";t.left=this.tab1Size.width+this.swapButtonSize.width+this.tab2Size.width+8+"px"}return t};e.prototype.getInlineHandleStyle=function(){var t={"margin-top":"0","margin-left":"0"};if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical)t["margin-top"]=(this.splitterBlockSize.height-this.splitterHandleSize.height)/2+"px";else t["margin-left"]=(this.splitterBlockSize.width-this.splitterHandleSize.width)/2+"px";return t};e.prototype.getInlineSwapButtonStyle=function(){if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical)return{top:this.tab1ContentSize.width+2+"px",left:(this.splitterSize.width-this.swapButtonSize.width)/2+"px"};else return{top:(this.splitterSize.height-this.swapButtonSize.height)/2+"px",left:this.tab1ContentSize.width+2+"px"}};e.prototype.getInlineButtonBlockStyle=function(){var t={top:"auto",right:"auto",bottom:"auto",left:"auto"};if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical){t.bottom="0px";t.left=(this.splitterBlockSize.width-this.splitterButtonBlockSize.width)/2+"px"}else{t.top=(this.splitterBlockSize.height-this.splitterButtonBlockSize.height)/2+"px";t.right="2px"}return t};e.prototype.updateButtonClass=function(){this.buttonClass.length=0;this.buttonClass.push(this.buttonClassName);this.buttonClass.push(this.options.currentStyle.splitter.button.general.normal)};e.prototype.getButtonClass=function(){return this.buttonClass};e.prototype.updateSplitterClass=function(){this.splitterClass.length=0;this.splitterClass.push(this.splitterClassName);this.splitterClass.push(this.options.currentStyle.splitter.general.normal);if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical)this.splitterClass.push(this.options.currentStyle.splitter.general.vertical);else this.splitterClass.push(this.options.currentStyle.splitter.general.horizontal)};e.prototype.getSplitterClass=function(){return this.splitterClass};e.prototype.updateHandleClass=function(){this.handleClass.length=0;this.handleClass.push(this.handleClassName);this.handleClass.push(this.options.currentStyle.splitter.handle.general);if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical)this.handleClass.push(this.options.currentStyle.splitter.handle.vertical);else this.handleClass.push(this.options.currentStyle.splitter.handle.horizontal)};e.prototype.getHandleClass=function(){return this.handleClass};e.prototype.updatePanelClass=function(){this.panelClass.length=0;this.panelClass.push(this.panelClassName);this.panelClass.push(this.options.currentStyle.panel.normal)};e.prototype.getPanelClass=function(){return this.panelClass};e.prototype.updateSwapButtonClass=function(){this.swapButtonClass.length=0;this.swapButtonClass.push(this.swapButtonClassName);this.swapButtonClass.push(this.options.currentStyle.splitter.swapButton.normal);if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical)this.swapButtonClass.push(this.swapButtonClassName+"-vertical")};e.prototype.getSwapButtonClass=function(){return this.swapButtonClass};e.prototype.updateTabClass=function(){this.tabClass.length=0;this.tabClass.push(this.tabClassName);this.tabClass.push(this.options.currentStyle.splitter.tab.selected);if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical)this.tabClass.push(this.tabClassName+"-vertical")};e.prototype.getTabClass=function(){return this.tabClass};e.prototype.getPanelStyle=function(t){if(this.commonService.isString(t))return t;else if(t)return{disabled:this.commonService.isFieldAvailable(t.disabled,this.panelClassName+"-disabled"),normal:this.commonService.isFieldAvailable(t.normal,this.panelClassName)};else return{disabled:this.defaultStyle.panel.disabled,normal:this.defaultStyle.panel.normal}};e.prototype.getSplitterGeneralStyle=function(t){if(this.commonService.isString(t))return t;else if(t)return{normal:this.commonService.isFieldAvailable(t.normal,this.splitterClassName),horizontal:this.commonService.isFieldAvailable(t.horizontal,this.splitterClassName+"-horizontal"),vertical:this.commonService.isFieldAvailable(t.vertical,this.splitterClassName+"-vertical")};else return{normal:this.defaultStyle.splitter.general.normal,horizontal:this.defaultStyle.splitter.general.horizontal,vertical:this.defaultStyle.splitter.general.vertical}};e.prototype.getHandleStyle=function(t){if(this.commonService.isString(t))return t;else if(t)return{general:this.commonService.isFieldAvailable(t.general,this.handleClassName),horizontal:this.commonService.isFieldAvailable(t.horizontal,this.handleClassName+"-horizontal"),vertical:this.commonService.isFieldAvailable(t.vertical,this.handleClassName+"-vertical")};else return{general:this.defaultStyle.splitter.handle.general,horizontal:this.defaultStyle.splitter.handle.horizontal,vertical:this.defaultStyle.splitter.handle.vertical}};e.prototype.getSwapButtonStyle=function(t){if(this.commonService.isString(t))return t;else if(t)return{disabled:this.commonService.isFieldAvailable(t.disabled,this.swapButtonClassName+"-disabled"),hovered:this.commonService.isFieldAvailable(t.hovered,this.swapButtonClassName+"-hovered"),normal:this.commonService.isFieldAvailable(t.normal,this.swapButtonClassName),selected:this.commonService.isFieldAvailable(t.selected,this.swapButtonClassName+"-selected")};else return{disabled:this.defaultStyle.splitter.swapButton.disabled,hovered:this.defaultStyle.splitter.swapButton.hovered,normal:this.defaultStyle.splitter.swapButton.normal,selected:this.defaultStyle.splitter.swapButton.selected}};e.prototype.getTabStyle=function(t){if(this.commonService.isString(t))return t;else if(t)return{disabled:this.commonService.isFieldAvailable(t.disabled,this.tabClassName+"-disabled"),focused:this.commonService.isFieldAvailable(t.focused,this.tabClassName+"-focused"),hovered:this.commonService.isFieldAvailable(t.hovered,this.tabClassName+"-hovered"),normal:this.commonService.isFieldAvailable(t.normal,this.tabClassName),selected:this.commonService.isFieldAvailable(t.selected,this.tabClassName+"-selected")};else return{disabled:this.defaultStyle.splitter.tab.disabled,focused:this.defaultStyle.splitter.tab.focused,hovered:this.defaultStyle.splitter.tab.hovered,normal:this.defaultStyle.splitter.tab.normal,selected:this.defaultStyle.splitter.tab.selected}};e.prototype.getSplitterStyle=function(t){if(this.commonService.isString(t))return t;else if(t)return{general:this.getSplitterGeneralStyle(t.general),handle:this.getHandleStyle(t.handle),swapButton:this.getSwapButtonStyle(t.swapButton),tab:this.getTabStyle(t.tab)};else return this.getDefaultSplitterStyle()};e.prototype.getDefaultStyle=function(){return{general:this.getDefaultGeneralStyle(),panel:this.getDefaultPanelStyle(),splitter:this.getDefaultSplitterStyle()}};e.prototype.getDefaultPanelStyle=function(){return{disabled:this.defaultStyle.panel.disabled,normal:this.defaultStyle.panel.normal}};e.prototype.getDefaultSplitterStyle=function(){return{general:{normal:this.defaultStyle.splitter.general.normal,horizontal:this.defaultStyle.splitter.general.horizontal,vertical:this.defaultStyle.splitter.general.vertical},handle:{general:this.defaultStyle.splitter.handle.general,horizontal:this.defaultStyle.splitter.handle.horizontal,vertical:this.defaultStyle.splitter.handle.vertical},swapButton:{disabled:this.defaultStyle.splitter.swapButton.disabled,hovered:this.defaultStyle.splitter.swapButton.hovered,normal:this.defaultStyle.splitter.swapButton.normal,selected:this.defaultStyle.splitter.swapButton.selected},tab:{disabled:this.defaultStyle.splitter.tab.disabled,focused:this.defaultStyle.splitter.tab.focused,hovered:this.defaultStyle.splitter.tab.hovered,normal:this.defaultStyle.splitter.tab.normal,selected:this.defaultStyle.splitter.tab.selected}}};e.prototype.updateStyle=function(t){if(t)this.options.currentStyle={general:this.getGeneralStyle(t.general),panel:this.getPanelStyle(t.panel),splitter:this.getSplitterStyle(t.splitter)};else this.options.currentStyle=this.getDefaultStyle()};e.prototype.refresh=function(){this.updateControlClass();this.updateSplitterClass();this.updateHandleClass();this.updatePanelClass();this.updateSwapButtonClass();this.updateTabClass()};e.ɵfac=function(t){return new(t||e)(i0.ɵɵdirectiveInject(i0.ElementRef),i0.ɵɵdirectiveInject(i1.IntegralUICommonService),i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver),i0.ɵɵdirectiveInject(i2.IntegralUIBaseService))};e.ɵcmp=i0.ɵɵdefineComponent({type:e,selectors:[["iui-splitcontainer"]],viewQuery:function(t,e){if(1&t){i0.ɵɵviewQuery(_c0,!0);i0.ɵɵviewQuery(_c1,!0);i0.ɵɵviewQuery(_c2,!0);i0.ɵɵviewQuery(_c3,!0);i0.ɵɵviewQuery(_c4,!0);i0.ɵɵviewQuery(_c4,!0,core_1.ViewContainerRef);i0.ɵɵviewQuery(_c5,!0);i0.ɵɵviewQuery(_c6,!0)}if(2&t){var i;i0.ɵɵqueryRefresh(i=i0.ɵɵloadQuery())&&(e.buttonBlockElem=i.first);i0.ɵɵqueryRefresh(i=i0.ɵɵloadQuery())&&(e.handleElem=i.first);i0.ɵɵqueryRefresh(i=i0.ɵɵloadQuery())&&(e.panel1Elem=i.first);i0.ɵɵqueryRefresh(i=i0.ɵɵloadQuery())&&(e.panel2Elem=i.first);i0.ɵɵqueryRefresh(i=i0.ɵɵloadQuery())&&(e.splitterElem=i.first);i0.ɵɵqueryRefresh(i=i0.ɵɵloadQuery())&&(e.splitterRef=i.first);i0.ɵɵqueryRefresh(i=i0.ɵɵloadQuery())&&(e.tab1ContentElem=i.first);i0.ɵɵqueryRefresh(i=i0.ɵɵloadQuery())&&(e.tab2ContentElem=i.first)}},hostBindings:function(t,e){if(1&t)i0.ɵɵlistener("mouseup",function(t){return e.onWindowMouseUp(t)},!1,i0.ɵɵresolveDocument)},inputs:{controlStyle:"controlStyle",data:"data",enabled:"enabled",name:"name",size:"size",state:"state",orientation:"orientation",panel1:"panel1",panel2:"panel2",showButtons:"showButtons",splitterDistance:"splitterDistance"},outputs:{orientationChanged:"orientationChanged",panelsSwapped:"panelsSwapped",splitterMoved:"splitterMoved",splitterMoving:"splitterMoving"},features:[i0.ɵɵProvidersFeature([integralui_core_1.IntegralUIBaseService]),i0.ɵɵInheritDefinitionFeature],ngContentSelectors:_c9,decls:26,vars:24,consts:[[3,"ngClass","ngStyle","mousemove"],[3,"ngClass","ngStyle"],["panel1",""],[3,"ngClass","ngStyle","mousedown"],["splitter",""],[3,"ngStyle"],["tab1Content",""],[3,"ngClass",4,"ngIf"],[4,"ngIf"],[3,"ngClass","ngStyle","click"],["btnSwap",""],["tab2Content",""],["handle",""],["class","iui-splitcontainer-button-block",3,"ngStyle",4,"ngIf"],["panel2",""],[3,"ngClass"],[1,"iui-splitcontainer-button-block",3,"ngStyle"],["buttonBlock",""],[1,"iui-splitcontainer-button","iui-splitcontainer-button-vertical",3,"ngClass","click"],[1,"iui-splitcontainer-button","iui-splitcontainer-button-horizontal",3,"ngClass","click"]],template:function(t,e){if(1&t){i0.ɵɵprojectionDef(_c8);i0.ɵɵelementStart(0,"div",0);i0.ɵɵlistener("mousemove",function(t){return e.ctrlMouseMove(t)});i0.ɵɵelementStart(1,"div",1,2);i0.ɵɵprojection(3);i0.ɵɵelementEnd();i0.ɵɵelementStart(4,"div",3,4);i0.ɵɵlistener("mousedown",function(t){return e.splitterMouseDown(t)});i0.ɵɵelementStart(6,"div",1);i0.ɵɵelementStart(7,"div",5,6);i0.ɵɵtemplate(9,IntegralUISplitContainer_span_9_Template,1,1,"span",7);i0.ɵɵtemplate(10,IntegralUISplitContainer_span_10_Template,2,1,"span",8);i0.ɵɵelementEnd();i0.ɵɵelementEnd();i0.ɵɵelementStart(11,"div",9,10);i0.ɵɵlistener("click",function(){return e.swapButtonClicked()});i0.ɵɵelement(13,"span");i0.ɵɵelementEnd();i0.ɵɵelementStart(14,"div",1);i0.ɵɵelementStart(15,"div",5,11);i0.ɵɵtemplate(17,IntegralUISplitContainer_span_17_Template,1,1,"span",7);i0.ɵɵtemplate(18,IntegralUISplitContainer_span_18_Template,2,1,"span",8);i0.ɵɵelementEnd();i0.ɵɵelementEnd();i0.ɵɵelementStart(19,"div",1);i0.ɵɵelement(20,"span",5,12);i0.ɵɵelementEnd();i0.ɵɵtemplate(22,IntegralUISplitContainer_div_22_Template,6,7,"div",13);i0.ɵɵelementEnd();i0.ɵɵelementStart(23,"div",1,14);i0.ɵɵprojection(25,1);i0.ɵɵelementEnd();i0.ɵɵelementEnd()}if(2&t){i0.ɵɵproperty("ngClass",e.getControlClass())("ngStyle",e.getControlStyle());i0.ɵɵadvance(1);i0.ɵɵproperty("ngClass",e.getPanelClass())("ngStyle",e.getInlinePanel1Style());i0.ɵɵadvance(3);i0.ɵɵproperty("ngClass",e.getSplitterClass())("ngStyle",e.getInlineSplitterStyle());i0.ɵɵadvance(2);i0.ɵɵproperty("ngClass",e.getTabClass())("ngStyle",e.getInlineTab1Style());i0.ɵɵadvance(1);i0.ɵɵproperty("ngStyle",e.getInlineTab1ContentStyle());i0.ɵɵadvance(2);i0.ɵɵproperty("ngIf",e.panel1Data.icon);i0.ɵɵadvance(1);i0.ɵɵproperty("ngIf",e.panel1Data.text);i0.ɵɵadvance(1);i0.ɵɵproperty("ngClass",e.getSwapButtonClass())("ngStyle",e.getInlineSwapButtonStyle());i0.ɵɵadvance(3);i0.ɵɵproperty("ngClass",e.getTabClass())("ngStyle",e.getInlineTab2Style());i0.ɵɵadvance(1);i0.ɵɵproperty("ngStyle",e.getInlineTab2ContentStyle());i0.ɵɵadvance(2);i0.ɵɵproperty("ngIf",e.panel2Data.icon);i0.ɵɵadvance(1);i0.ɵɵproperty("ngIf",e.panel2Data.text);i0.ɵɵadvance(1);i0.ɵɵproperty("ngClass",e.getHandleClass())("ngStyle",e.getInlineHandleBlockStyle());i0.ɵɵadvance(1);i0.ɵɵproperty("ngStyle",e.getInlineHandleStyle());i0.ɵɵadvance(2);i0.ɵɵproperty("ngIf",e.showButtons);i0.ɵɵadvance(1);i0.ɵɵproperty("ngClass",e.getPanelClass())("ngStyle",e.getInlinePanel2Style())}},directives:[i3.NgClass,i3.NgStyle,i3.NgIf],encapsulation:2});return e}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUISplitContainer=IntegralUISplitContainer;