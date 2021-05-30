import { ComponentFactoryResolver, ElementRef, EventEmitter, QueryList, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService, IntegralUIPlacement, IntegralUIPopup, IntegralUISpeedMode, IntegralUITemplate } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import * as i0 from "@angular/core";
export declare class IntegralUISideContentPopup extends IntegralUIPopup {
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
    templateObj: any;
    headerHeight: number;
    headerOffsetHeight: number;
    placement: IntegralUIPlacement;
    title: string;
    closed: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    open(): void;
    close(): void;
    processClose(): void;
    getContentStyle(): any;
    getHeaderStyle(): any;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUISideContentPopup, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<IntegralUISideContentPopup, "iui-side-content-popup", never, { "headerHeight": "headerHeight"; "headerOffsetHeight": "headerOffsetHeight"; "placement": "placement"; "title": "title"; }, { "closed": "closed"; }, never, never>;
}
export declare class IntegralUISideBar extends IntegralUIBaseComponent {
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
    protected cmpResolver?: ComponentFactoryResolver;
    protected baseService?: IntegralUIBaseService;
    private closeTimer;
    private openTimer;
    contentData: Array<any>;
    headerData: Array<any>;
    private isTouchProcessed;
    barOpacity: number;
    private barSize;
    currentHeaderBlockPos: number;
    private currentPlacement;
    contentSize: any;
    currentSize: any;
    headerBlockSize: any;
    headerHeight: number;
    headerOffsetHeight: number;
    maxCtrlSize: any;
    minCtrlSize: any;
    private expandValue;
    protected isPopupVisible: boolean;
    private popupValue;
    templates: QueryList<IntegralUITemplate>;
    headerRef: ViewContainerRef;
    headerElem: ElementRef;
    headerButtonElem: ElementRef;
    headerBlockElem: ElementRef;
    contentElem: ElementRef;
    private templateList;
    private popupRef;
    private popupCmp;
    private tRef;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService, cmpResolver?: ComponentFactoryResolver, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    private updateTemplate;
    removeCloseTimer(): void;
    removeOpenTimer(): void;
    ngOnDestroy(): void;
    animationSpeed: IntegralUISpeedMode;
    appRef: any;
    set isExpanded(value: boolean);
    get isExpanded(): boolean;
    set placement(value: IntegralUIPlacement);
    get placement(): IntegralUIPlacement;
    set popup(value: boolean);
    get popup(): boolean;
    title: string;
    collapsed: EventEmitter<any>;
    collapsing: EventEmitter<any>;
    expanded: EventEmitter<any>;
    expanding: EventEmitter<any>;
    protected addPopup(): void;
    protected removePopup(): void;
    protected hidePopup(): void;
    protected showPopup(): void;
    headerMouseDown(e: any): void;
    headerTouchStart(e: any): void;
    private toggleButtonClicked;
    private getCtrlSpace;
    getMaxSize(): {
        width: any;
        height: any;
    };
    getMinSize(): {
        width: any;
        height: any;
    };
    updateLayout(): void;
    getAnimationFactor(value: number, isClosing?: boolean): number;
    close(): void;
    private closeNormal;
    protected closeFromLeft(): void;
    protected closeFromTop(): void;
    closePopup(): void;
    protected closePopupFromBottom(): void;
    protected closePopupFromLeft(): void;
    protected closePopupFromTop(): void;
    protected closePopupFromRight(): void;
    open(): void;
    private openNormal;
    protected openFromLeft(): void;
    protected openFromTop(): void;
    openPopup(): void;
    protected openPopupFromBottom(): void;
    protected openPopupFromLeft(): void;
    protected openPopupFromTop(): void;
    protected openPopupFromRight(): void;
    toggle(): void;
    getControlStyle(): any;
    getContentStyle(): any;
    getHeaderStyle(): any;
    protected updateControlClass(): void;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUISideBar, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<IntegralUISideBar, "iui-sidebar", never, { "controlStyle": "controlStyle"; "data": "data"; "enabled": "enabled"; "name": "name"; "size": "size"; "state": "state"; "animationSpeed": "animationSpeed"; "appRef": "appRef"; "isExpanded": "isExpanded"; "placement": "placement"; "popup": "popup"; "title": "title"; }, { "collapsed": "collapsed"; "collapsing": "collapsing"; "expanded": "expanded"; "expanding": "expanding"; }, ["templates"], never>;
}
