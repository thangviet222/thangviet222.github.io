(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module~components-main-content-main-content-module"],{

/***/ "./node_modules/angular-calendar/fesm5/angular-calendar.js":
/*!*****************************************************************!*\
  !*** ./node_modules/angular-calendar/fesm5/angular-calendar.js ***!
  \*****************************************************************/
/*! exports provided: DAYS_OF_WEEK, CalendarModule, CalendarCommonModule, CalendarEventTitleFormatter, MOMENT, CalendarMomentDateFormatter, CalendarNativeDateFormatter, CalendarAngularDateFormatter, CalendarDateFormatter, CalendarUtils, CalendarEventTimesChangedEventType, DateAdapter, CalendarView, CalendarMonthViewComponent, collapseAnimation, CalendarMonthModule, CalendarWeekViewComponent, getWeekViewPeriod, CalendarWeekModule, CalendarDayViewComponent, CalendarDayModule, ɵi, ɵb, ɵc, ɵj, ɵg, ɵf, ɵh, ɵe, ɵd, ɵk, ɵr, ɵq, ɵl, ɵm, ɵa, ɵo, ɵn, ɵp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarCommonModule", function() { return CalendarCommonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventTitleFormatter", function() { return CalendarEventTitleFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOMENT", function() { return MOMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMomentDateFormatter", function() { return CalendarMomentDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarNativeDateFormatter", function() { return CalendarNativeDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarAngularDateFormatter", function() { return CalendarAngularDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDateFormatter", function() { return CalendarDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarUtils", function() { return CalendarUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventTimesChangedEventType", function() { return CalendarEventTimesChangedEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAdapter", function() { return DateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarView", function() { return CalendarView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMonthViewComponent", function() { return CalendarMonthViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseAnimation", function() { return collapseAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMonthModule", function() { return CalendarMonthModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarWeekViewComponent", function() { return CalendarWeekViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekViewPeriod", function() { return getWeekViewPeriod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarWeekModule", function() { return CalendarWeekModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDayViewComponent", function() { return CalendarDayViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDayModule", function() { return CalendarDayModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return CalendarDatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CalendarEventActionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CalendarEventTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return CalendarEventTitlePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return CalendarNextViewDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return CalendarPreviousViewDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return CalendarTodayDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return CalendarTooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return CalendarTooltipWindowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return ClickDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return CalendarDayViewEventComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return CalendarDayViewHourSegmentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return CalendarMonthCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return CalendarMonthViewHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CalendarOpenDayEventsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return CalendarWeekViewEventComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return CalendarWeekViewHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return CalendarWeekViewHourSegmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var calendar_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! calendar-utils */ "./node_modules/calendar-utils/calendar-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function() { return calendar_utils__WEBPACK_IMPORTED_MODULE_1__["DAYS_OF_WEEK"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var positioning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! positioning */ "./node_modules/positioning/dist/positioning.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");











/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var validateEvents$1 = function (events) {
    /** @type {?} */
    var warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.warn.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(['angular-calendar'], args));
    };
    return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_1__["validateEvents"])(events, warn);
};
/**
 * @param {?} outer
 * @param {?} inner
 * @return {?}
 */
function isInside(outer, inner) {
    return (Math.ceil(outer.left) <= Math.ceil(inner.left) &&
        Math.ceil(inner.left) <= Math.ceil(outer.right) &&
        Math.ceil(outer.left) <= Math.ceil(inner.right) &&
        Math.ceil(inner.right) <= Math.ceil(outer.right) &&
        Math.ceil(outer.top) <= Math.ceil(inner.top) &&
        Math.ceil(inner.top) <= Math.ceil(outer.bottom) &&
        Math.ceil(outer.top) <= Math.ceil(inner.bottom) &&
        Math.ceil(inner.bottom) <= Math.ceil(outer.bottom));
}
/**
 * @param {?} amount
 * @param {?} precision
 * @return {?}
 */
function roundToNearest(amount, precision) {
    return Math.round(amount / precision) * precision;
}
/** @type {?} */
var trackByEventId = function (index, event) {
    return event.id ? event.id : event;
};
/** @type {?} */
var trackByWeekDayHeaderDate = function (index, day) {
    return day.date.toISOString();
};
/** @type {?} */
var trackByIndex = function (index) { return index; };
/** @type {?} */
var trackByHourSegment = function (index, segment) { return segment.date.toISOString(); };
/** @type {?} */
var trackByHour = function (index, hour) {
    return hour.segments[0].date.toISOString();
};
/** @type {?} */
var trackByDayOrWeekEvent = function (index, weekEvent) { return (weekEvent.event.id ? weekEvent.event.id : weekEvent.event); };
/** @type {?} */
var MINUTES_IN_HOUR = 60;
/**
 * @param {?} movedY
 * @param {?} hourSegments
 * @param {?} hourSegmentHeight
 * @param {?} eventSnapSize
 * @return {?}
 */
function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize) {
    /** @type {?} */
    var draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
    /** @type {?} */
    var pixelAmountInMinutes = MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight);
    return draggedInPixelsSnapSize * pixelAmountInMinutes;
}
/**
 * @param {?} hourSegments
 * @param {?} hourSegmentHeight
 * @return {?}
 */
function getMinimumEventHeightInMinutes(hourSegments, hourSegmentHeight) {
    return (MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight)) * 30;
}
/**
 * @param {?} dateAdapter
 * @param {?} event
 * @param {?} minimumMinutes
 * @return {?}
 */
function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
    if (event.end) {
        return event.end;
    }
    else {
        return dateAdapter.addMinutes(event.start, minimumMinutes);
    }
}
/**
 * @param {?} dateAdapter
 * @param {?} date
 * @param {?} days
 * @param {?} excluded
 * @return {?}
 */
function addDaysWithExclusions(dateAdapter, date, days, excluded) {
    /** @type {?} */
    var daysCounter = 0;
    /** @type {?} */
    var daysToAdd = 0;
    /** @type {?} */
    var changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
    /** @type {?} */
    var result = date;
    while (daysToAdd <= Math.abs(days)) {
        result = changeDays(date, daysCounter);
        /** @type {?} */
        var day = dateAdapter.getDay(result);
        if (excluded.indexOf(day) === -1) {
            daysToAdd++;
        }
        daysCounter++;
    }
    return result;
}
/**
 * @param {?} newStart
 * @param {?} newEnd
 * @param {?} period
 * @return {?}
 */
function isDraggedWithinPeriod(newStart, newEnd, period) {
    /** @type {?} */
    var end = newEnd || newStart;
    return ((period.start <= newStart && newStart <= period.end) ||
        (period.start <= end && end <= period.end));
}
/**
 * @param {?} dropEvent
 * @param {?} date
 * @param {?} allDay
 * @param {?} calendarId
 * @return {?}
 */
function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
    return (dropEvent.dropData &&
        dropEvent.dropData.event &&
        (dropEvent.dropData.calendarId !== calendarId ||
            (dropEvent.dropData.event.allDay && !allDay) ||
            (!dropEvent.dropData.event.allDay && allDay)));
}
/**
 * @param {?} dateAdapter
 * @param {?} viewDate
 * @param {?} weekStartsOn
 * @param {?=} excluded
 * @param {?=} daysInWeek
 * @return {?}
 */
function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn, excluded, daysInWeek) {
    if (excluded === void 0) { excluded = []; }
    /** @type {?} */
    var viewStart = daysInWeek
        ? dateAdapter.startOfDay(viewDate)
        : dateAdapter.startOfWeek(viewDate, { weekStartsOn: weekStartsOn });
    if (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1) {
        viewStart = dateAdapter.subDays(addDaysWithExclusions(dateAdapter, viewStart, 1, excluded), 1);
    }
    if (daysInWeek) {
        /** @type {?} */
        var viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
        return { viewStart: viewStart, viewEnd: viewEnd };
    }
    else {
        /** @type {?} */
        var viewEnd = dateAdapter.endOfWeek(viewDate, { weekStartsOn: weekStartsOn });
        if (excluded.indexOf(dateAdapter.getDay(viewEnd)) > -1) {
            viewEnd = dateAdapter.addDays(addDaysWithExclusions(dateAdapter, viewEnd, -1, excluded), 1);
        }
        return { viewStart: viewStart, viewEnd: viewEnd };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarEventActionsComponent = /** @class */ (function () {
    function CalendarEventActionsComponent() {
        this.trackByIndex = trackByIndex;
    }
    CalendarEventActionsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-event-actions',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\">\n      <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n        <a\n          class=\"cal-event-action\"\n          href=\"javascript:;\"\n          *ngFor=\"let action of event.actions; trackBy:trackByIndex\"\n          (mwlClick)=\"action.onClick({event: event})\"\n          [ngClass]=\"action.cssClass\"\n          [innerHtml]=\"action.label\">\n        </a>\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event\n      }\">\n    </ng-template>\n  "
                }] }
    ];
    CalendarEventActionsComponent.propDecorators = {
        event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return CalendarEventActionsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarEventTitleComponent = /** @class */ (function () {
    function CalendarEventTitleComponent() {
    }
    CalendarEventTitleComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-event-title',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-view=\"view\">\n      <span\n        class=\"cal-event-title\"\n        [innerHTML]=\"event.title | calendarEventTitle:view:event\">\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\">\n    </ng-template>\n  "
                }] }
    ];
    CalendarEventTitleComponent.propDecorators = {
        event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        view: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return CalendarEventTitleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarTooltipWindowComponent = /** @class */ (function () {
    function CalendarTooltipWindowComponent() {
    }
    CalendarTooltipWindowComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-tooltip-window',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\">\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\">\n    </ng-template>\n  "
                }] }
    ];
    CalendarTooltipWindowComponent.propDecorators = {
        contents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return CalendarTooltipWindowComponent;
}());
var CalendarTooltipDirective = /** @class */ (function () {
    function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
    ) {
        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document //tslint:disable-line
         = document;
        this.placement = 'auto'; // tslint:disable-line no-input-rename
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
    }
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.hide();
    };
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.onMouseOver = /**
     * @return {?}
     */
    function () {
        this.show();
    };
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.onMouseOut = /**
     * @return {?}
     */
    function () {
        this.hide();
    };
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            if (this.appendToBody) {
                this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            }
            requestAnimationFrame(function () {
                _this.positionTooltip();
            });
        }
    };
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
        }
    };
    /**
     * @param {?=} previousPosition
     * @return {?}
     */
    CalendarTooltipDirective.prototype.positionTooltip = /**
     * @param {?=} previousPosition
     * @return {?}
     */
    function (previousPosition) {
        if (this.tooltipRef) {
            this.tooltipRef.changeDetectorRef.detectChanges();
            this.tooltipRef.instance.placement = Object(positioning__WEBPACK_IMPORTED_MODULE_4__["positionElements"])(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody);
            // keep re-positioning the tooltip until the arrow position doesn't make a difference
            if (previousPosition !== this.tooltipRef.instance.placement) {
                this.positionTooltip(this.tooltipRef.instance.placement);
            }
        }
    };
    CalendarTooltipDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[mwlCalendarTooltip]'
                },] }
    ];
    CalendarTooltipDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
    ]; };
    CalendarTooltipDirective.propDecorators = {
        contents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['mwlCalendarTooltip',] }],
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['tooltipPlacement',] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['tooltipTemplate',] }],
        event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['tooltipEvent',] }],
        appendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['tooltipAppendToBody',] }],
        onMouseOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['mouseenter',] }],
        onMouseOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['mouseleave',] }]
    };
    return CalendarTooltipDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
DateAdapter = /** @class */ (function () {
    function DateAdapter() {
    }
    return DateAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var CalendarView = {
    Month: 'month',
    Week: 'week',
    Day: 'day',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Change the view date to the previous view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarPreviousView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Previous
 * </button>
 * ```
 */
var CalendarPreviousViewDirective = /** @class */ (function () {
    function CalendarPreviousViewDirective(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going back by 1 day
         */
        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarPreviousViewDirective.prototype.onClick = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var subFn = {
            day: this.dateAdapter.subDays,
            week: this.dateAdapter.subWeeks,
            month: this.dateAdapter.subMonths
        }[this.view];
        if (this.view === CalendarView.Day) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -1, this.excludeDays));
        }
        else if (this.view === CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
        }
        else {
            this.viewDateChange.emit(subFn(this.viewDate, 1));
        }
    };
    CalendarPreviousViewDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[mwlCalendarPreviousView]'
                },] }
    ];
    CalendarPreviousViewDirective.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    CalendarPreviousViewDirective.propDecorators = {
        view: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        viewDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        excludeDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        daysInWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        viewDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['click',] }]
    };
    return CalendarPreviousViewDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Change the view date to the next view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarNextView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Next
 * </button>
 * ```
 */
var CalendarNextViewDirective = /** @class */ (function () {
    function CalendarNextViewDirective(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going forward by 1 day
         */
        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarNextViewDirective.prototype.onClick = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var addFn = {
            day: this.dateAdapter.addDays,
            week: this.dateAdapter.addWeeks,
            month: this.dateAdapter.addMonths
        }[this.view];
        if (this.view === CalendarView.Day) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, 1, this.excludeDays));
        }
        else if (this.view === CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
        }
        else {
            this.viewDateChange.emit(addFn(this.viewDate, 1));
        }
    };
    CalendarNextViewDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[mwlCalendarNextView]'
                },] }
    ];
    CalendarNextViewDirective.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    CalendarNextViewDirective.propDecorators = {
        view: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        viewDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        excludeDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        daysInWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        viewDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['click',] }]
    };
    return CalendarNextViewDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Change the view date to the current day. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarToday
 *  [(viewDate)]="viewDate">
 *  Today
 * </button>
 * ```
 */
var CalendarTodayDirective = /** @class */ (function () {
    function CalendarTodayDirective(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarTodayDirective.prototype.onClick = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
    };
    CalendarTodayDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[mwlCalendarToday]'
                },] }
    ];
    CalendarTodayDirective.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    CalendarTodayDirective.propDecorators = {
        viewDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        viewDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['click',] }]
    };
    return CalendarTodayDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
 */
var CalendarAngularDateFormatter = /** @class */ (function () {
    function CalendarAngularDateFormatter(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.monthViewColumnHeader = /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(date, 'EEEE', locale);
    };
    /**
     * The month view cell day number
     */
    /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.monthViewDayNumber = /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(date, 'd', locale);
    };
    /**
     * The month view title
     */
    /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.monthViewTitle = /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(date, 'LLLL y', locale);
    };
    /**
     * The week view header week day labels
     */
    /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.weekViewColumnHeader = /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(date, 'EEEE', locale);
    };
    /**
     * The week view sub header day and month labels
     */
    /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.weekViewColumnSubHeader = /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(date, 'MMM d', locale);
    };
    /**
     * The week view title
     */
    /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.weekViewTitle = /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
        var _b = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
        /** @type {?} */
        var format = function (dateToFormat, showYear) {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(dateToFormat, 'MMM d' + (showYear ? ', yyyy' : ''), locale);
        };
        return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
    };
    /**
     * The time formatting down the left hand side of the week view
     */
    /**
     * The time formatting down the left hand side of the week view
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.weekViewHour = /**
     * The time formatting down the left hand side of the week view
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(date, 'h a', locale);
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.dayViewHour = /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(date, 'h a', locale);
    };
    /**
     * The day view title
     */
    /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.dayViewTitle = /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(date, 'EEEE, MMMM d, y', locale);
    };
    CalendarAngularDateFormatter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] }
    ];
    CalendarAngularDateFormatter.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    return CalendarAngularDateFormatter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
 *
 * If you wish, you may override any of the defaults via angulars DI. For example:
 *
 * ```typescript
 * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
 * import { formatDate } from '\@angular/common';
 *
 * class CustomDateFormatter extends CalendarDateFormatter {
 *
 *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
 *     return formatDate(date, 'EEE', locale); // use short week days
 *   }
 *
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *   provide: CalendarDateFormatter,
 *   useClass: CustomDateFormatter
 * }]
 * ```
 */
var CalendarDateFormatter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CalendarDateFormatter, _super);
    /**
     * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
     *
     * If you wish, you may override any of the defaults via angulars DI. For example:
     *
     * ```typescript
     * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
     * import { formatDate } from '@angular/common';
     *
     * class CustomDateFormatter extends CalendarDateFormatter {
     *
     *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
     *     return formatDate(date, 'EEE', locale); // use short week days
     *   }
     *
     * }
     *
     * // in your component that uses the calendar
     * providers: [{
     *   provide: CalendarDateFormatter,
     *   useClass: CustomDateFormatter
     * }]
     * ```
     */
    function CalendarDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarDateFormatter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] }
    ];
    return CalendarDateFormatter;
}(CalendarAngularDateFormatter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * This pipe is primarily for rendering the current view title. Example usage:
 * ```typescript
 * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
 * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
 * ```
 */
var CalendarDatePipe = /** @class */ (function () {
    function CalendarDatePipe(dateFormatter, locale) {
        this.dateFormatter = dateFormatter;
        this.locale = locale;
    }
    /**
     * @param {?} date
     * @param {?} method
     * @param {?=} locale
     * @param {?=} weekStartsOn
     * @param {?=} excludeDays
     * @param {?=} daysInWeek
     * @return {?}
     */
    CalendarDatePipe.prototype.transform = /**
     * @param {?} date
     * @param {?} method
     * @param {?=} locale
     * @param {?=} weekStartsOn
     * @param {?=} excludeDays
     * @param {?=} daysInWeek
     * @return {?}
     */
    function (date, method, locale, weekStartsOn, excludeDays, daysInWeek) {
        if (locale === void 0) { locale = this.locale; }
        if (weekStartsOn === void 0) { weekStartsOn = 0; }
        if (excludeDays === void 0) { excludeDays = []; }
        return this.dateFormatter[method]({
            date: date,
            locale: locale,
            weekStartsOn: weekStartsOn,
            excludeDays: excludeDays,
            daysInWeek: daysInWeek
        });
    };
    CalendarDatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"], args: [{
                    name: 'calendarDate'
                },] }
    ];
    CalendarDatePipe.ctorParameters = function () { return [
        { type: CalendarDateFormatter },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] }
    ]; };
    return CalendarDatePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
 *
 * ```typescript
 * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
 *
 * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
 *
 *   month(event: CalendarEvent): string {
 *     return `Custom prefix: ${event.title}`;
 *   }
 *
 * }
 *
 * // in your component
 * providers: [{
 *  provide: CalendarEventTitleFormatter,
 *  useClass: CustomEventTitleFormatter
 * }]
 * ```
 */
var  /**
 * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
 *
 * ```typescript
 * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
 *
 * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
 *
 *   month(event: CalendarEvent): string {
 *     return `Custom prefix: ${event.title}`;
 *   }
 *
 * }
 *
 * // in your component
 * providers: [{
 *  provide: CalendarEventTitleFormatter,
 *  useClass: CustomEventTitleFormatter
 * }]
 * ```
 */
CalendarEventTitleFormatter = /** @class */ (function () {
    /**
     * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
     *
     * ```typescript
     * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
     *
     * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
     *
     *   month(event: CalendarEvent): string {
     *     return `Custom prefix: ${event.title}`;
     *   }
     *
     * }
     *
     * // in your component
     * providers: [{
     *  provide: CalendarEventTitleFormatter,
     *  useClass: CustomEventTitleFormatter
     * }]
     * ```
     */
    function CalendarEventTitleFormatter() {
    }
    /**
     * The month view event title.
     */
    /**
     * The month view event title.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.month = /**
     * The month view event title.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    function (event, title) {
        return event.title;
    };
    /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.monthTooltip = /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    function (event, title) {
        return event.title;
    };
    /**
     * The week view event title.
     */
    /**
     * The week view event title.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.week = /**
     * The week view event title.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    function (event, title) {
        return event.title;
    };
    /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.weekTooltip = /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    function (event, title) {
        return event.title;
    };
    /**
     * The day view event title.
     */
    /**
     * The day view event title.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.day = /**
     * The day view event title.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    function (event, title) {
        return event.title;
    };
    /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.dayTooltip = /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    function (event, title) {
        return event.title;
    };
    return CalendarEventTitleFormatter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarEventTitlePipe = /** @class */ (function () {
    function CalendarEventTitlePipe(calendarEventTitle) {
        this.calendarEventTitle = calendarEventTitle;
    }
    /**
     * @param {?} title
     * @param {?} titleType
     * @param {?} event
     * @return {?}
     */
    CalendarEventTitlePipe.prototype.transform = /**
     * @param {?} title
     * @param {?} titleType
     * @param {?} event
     * @return {?}
     */
    function (title, titleType, event) {
        return this.calendarEventTitle[titleType](event, title);
    };
    CalendarEventTitlePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"], args: [{
                    name: 'calendarEventTitle'
                },] }
    ];
    CalendarEventTitlePipe.ctorParameters = function () { return [
        { type: CalendarEventTitleFormatter }
    ]; };
    return CalendarEventTitlePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var clickElements = new Set();
var ClickDirective = /** @class */ (function () {
    function ClickDirective(renderer, elm, document) {
        this.renderer = renderer;
        this.elm = elm;
        this.document = document;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](); // tslint:disable-line
    }
    /**
     * @return {?}
     */
    ClickDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        clickElements.add(this.elm.nativeElement);
        /** @type {?} */
        var eventName = typeof window !== 'undefined' && typeof window['Hammer'] !== 'undefined'
            ? 'tap'
            : 'click';
        this.removeListener = this.renderer.listen(this.elm.nativeElement, eventName, function (event) {
            // prevent child click events from firing on parent elements that also have click events
            /** @type {?} */
            var nearestClickableParent = event.target;
            while (!clickElements.has(nearestClickableParent) &&
                nearestClickableParent !== _this.document.body) {
                nearestClickableParent = nearestClickableParent.parentElement;
            }
            /** @type {?} */
            var isThisClickableElement = _this.elm.nativeElement === nearestClickableParent;
            if (isThisClickableElement) {
                _this.click.next(event);
            }
        });
    };
    /**
     * @return {?}
     */
    ClickDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeListener();
        clickElements.delete(this.elm.nativeElement);
    };
    ClickDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[mwlClick]'
                },] }
    ];
    ClickDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
    ]; };
    ClickDirective.propDecorators = {
        click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"], args: ['mwlClick',] }]
    };
    return ClickDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarUtils = /** @class */ (function () {
    function CalendarUtils(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getMonthView = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_1__["getMonthView"])(this.dateAdapter, args);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getWeekViewHeader = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_1__["getWeekViewHeader"])(this.dateAdapter, args);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getWeekView = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_1__["getWeekView"])(this.dateAdapter, args);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getDayView = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_1__["getDayView"])(this.dateAdapter, args);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getDayViewHourGrid = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_1__["getDayViewHourGrid"])(this.dateAdapter, args);
    };
    CalendarUtils.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] }
    ];
    CalendarUtils.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    return CalendarUtils;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var MOMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('Moment');
/**
 * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
 *
 * ```typescript
 * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
 * import moment from 'moment';
 *
 * // in your component
 * provide: [{
 *   provide: MOMENT, useValue: moment
 * }, {
 *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
 * }]
 *
 * ```
 */
var CalendarMomentDateFormatter = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarMomentDateFormatter(moment, dateAdapter) {
        this.moment = moment;
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.monthViewColumnHeader = /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd');
    };
    /**
     * The month view cell day number
     */
    /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.monthViewDayNumber = /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('D');
    };
    /**
     * The month view title
     */
    /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.monthViewTitle = /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('MMMM YYYY');
    };
    /**
     * The week view header week day labels
     */
    /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnHeader = /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd');
    };
    /**
     * The week view sub header day and month labels
     */
    /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnSubHeader = /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('MMM D');
    };
    /**
     * The week view title
     */
    /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.weekViewTitle = /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
        var _b = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
        /** @type {?} */
        var format = function (dateToFormat, showYear) {
            return _this.moment(dateToFormat)
                .locale(locale)
                .format('MMM D' + (showYear ? ', YYYY' : ''));
        };
        return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
    };
    /**
     * The time formatting down the left hand side of the week view
     */
    /**
     * The time formatting down the left hand side of the week view
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.weekViewHour = /**
     * The time formatting down the left hand side of the week view
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('ha');
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.dayViewHour = /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('ha');
    };
    /**
     * The day view title
     */
    /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.dayViewTitle = /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd, D MMMM, YYYY');
    };
    CalendarMomentDateFormatter.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MOMENT,] }] },
        { type: DateAdapter }
    ]; };
    return CalendarMomentDateFormatter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
 *
 * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
 */
var CalendarNativeDateFormatter = /** @class */ (function () {
    function CalendarNativeDateFormatter(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.monthViewColumnHeader = /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The month view cell day number
     */
    /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.monthViewDayNumber = /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
    };
    /**
     * The month view title
     */
    /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.monthViewTitle = /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long'
        }).format(date);
    };
    /**
     * The week view header week day labels
     */
    /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnHeader = /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The week view sub header day and month labels
     */
    /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnSubHeader = /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short'
        }).format(date);
    };
    /**
     * The week view title
     */
    /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.weekViewTitle = /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
        var _b = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
        /** @type {?} */
        var format = function (dateToFormat, showYear) {
            return new Intl.DateTimeFormat(locale, {
                day: 'numeric',
                month: 'short',
                year: showYear ? 'numeric' : undefined
            }).format(dateToFormat);
        };
        return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
    };
    /**
     * The time formatting down the left hand side of the week view
     */
    /**
     * The time formatting down the left hand side of the week view
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.weekViewHour = /**
     * The time formatting down the left hand side of the week view
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.dayViewHour = /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    };
    /**
     * The day view title
     */
    /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.dayViewTitle = /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
        }).format(date);
    };
    CalendarNativeDateFormatter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] }
    ];
    CalendarNativeDateFormatter.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    return CalendarNativeDateFormatter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var CalendarEventTimesChangedEventType = {
    Drag: 'drag',
    Drop: 'drop',
    Resize: 'resize',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
 *
 * ```typescript
 * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
 *
 * \@NgModule({
 *   imports: [
 *     CalendarCommonModule.forRoot(),
 *     CalendarMonthModule
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
var CalendarCommonModule = /** @class */ (function () {
    /**
     * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
     *
     * ```typescript
     * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
     *
     * @NgModule({
     *   imports: [
     *     CalendarCommonModule.forRoot(),
     *     CalendarMonthModule
     *   ]
     * })
     * class MyModule {}
     * ```
     *
     */
    function CalendarCommonModule() {
    }
    /**
     * @param {?} dateAdapter
     * @param {?=} config
     * @return {?}
     */
    CalendarCommonModule.forRoot = /**
     * @param {?} dateAdapter
     * @param {?=} config
     * @return {?}
     */
    function (dateAdapter, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: CalendarCommonModule,
            providers: [
                dateAdapter,
                config.eventTitleFormatter || CalendarEventTitleFormatter,
                config.dateFormatter || CalendarDateFormatter,
                config.utils || CalendarUtils
            ]
        };
    };
    CalendarCommonModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    declarations: [
                        CalendarEventActionsComponent,
                        CalendarEventTitleComponent,
                        CalendarTooltipWindowComponent,
                        CalendarTooltipDirective,
                        CalendarPreviousViewDirective,
                        CalendarNextViewDirective,
                        CalendarTodayDirective,
                        CalendarDatePipe,
                        CalendarEventTitlePipe,
                        ClickDirective
                    ],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                    exports: [
                        CalendarEventActionsComponent,
                        CalendarEventTitleComponent,
                        CalendarTooltipWindowComponent,
                        CalendarTooltipDirective,
                        CalendarPreviousViewDirective,
                        CalendarNextViewDirective,
                        CalendarTodayDirective,
                        CalendarDatePipe,
                        CalendarEventTitlePipe,
                        ClickDirective
                    ],
                    entryComponents: [CalendarTooltipWindowComponent]
                },] }
    ];
    return CalendarCommonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Shows all events on a given month. Example usage:
 *
 * ```typescript
 * <mwl-calendar-month-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-month-view>
 * ```
 */
var CalendarMonthViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarMonthViewComponent(cdr, utils, locale, dateAdapter) {
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view.
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * Whether the events list for the day of the `viewDate` option is visible or not
         */
        this.activeDayIsOpen = false;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * An output that will be called before the view is rendered for the current month.
         * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
         */
        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when the day cell is clicked
         */
        this.dayClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when an event is dragged and dropped
         */
        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * @hidden
         */
        this.trackByIndex = trackByIndex;
        /**
         * @hidden
         */
        this.trackByDate = function (index, day) { return day.date.toISOString(); };
        this.locale = locale;
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.ngOnChanges = /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.viewDate || changes.excludeDays || changes.weekendDays) {
            this.refreshHeader();
        }
        if (changes.events) {
            validateEvents$1(this.events);
        }
        if (changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.weekendDays) {
            this.refreshBody();
        }
        if (changes.activeDayIsOpen ||
            changes.viewDate ||
            changes.events ||
            changes.excludeDays) {
            this.checkActiveDayIsOpen();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @param {?} isHighlighted
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.toggleDayHighlight = /**
     * @hidden
     * @param {?} event
     * @param {?} isHighlighted
     * @return {?}
     */
    function (event, isHighlighted) {
        this.view.days.forEach(function (day) {
            if (isHighlighted && day.events.indexOf(event) > -1) {
                day.backgroundColor =
                    (event.color && event.color.secondary) || '#D1E8FF';
            }
            else {
                delete day.backgroundColor;
            }
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} droppedOn
     * @param {?} event
     * @param {?=} draggedFrom
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.eventDropped = /**
     * @hidden
     * @param {?} droppedOn
     * @param {?} event
     * @param {?=} draggedFrom
     * @return {?}
     */
    function (droppedOn, event, draggedFrom) {
        if (droppedOn !== draggedFrom) {
            /** @type {?} */
            var year = this.dateAdapter.getYear(droppedOn.date);
            /** @type {?} */
            var month = this.dateAdapter.getMonth(droppedOn.date);
            /** @type {?} */
            var date = this.dateAdapter.getDate(droppedOn.date);
            /** @type {?} */
            var newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
            /** @type {?} */
            var newEnd = void 0;
            if (event.end) {
                /** @type {?} */
                var secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
                newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
            }
            this.eventTimesChanged.emit({
                event: event,
                newStart: newStart,
                newEnd: newEnd,
                day: droppedOn,
                type: CalendarEventTimesChangedEventType.Drop
            });
        }
    };
    /**
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.refreshHeader = /**
     * @return {?}
     */
    function () {
        this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    /**
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.refreshBody = /**
     * @return {?}
     */
    function () {
        this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    /**
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.checkActiveDayIsOpen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.activeDayIsOpen === true) {
            this.openDay = this.view.days.find(function (day) {
                return _this.dateAdapter.isSameDay(day.date, _this.viewDate);
            });
            /** @type {?} */
            var index = this.view.days.indexOf(this.openDay);
            this.openRowIndex =
                Math.floor(index / this.view.totalDaysVisibleInWeek) *
                    this.view.totalDaysVisibleInWeek;
        }
        else {
            this.openRowIndex = null;
            this.openDay = null;
        }
    };
    /**
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.refreshAll = /**
     * @return {?}
     */
    function () {
        this.columnHeaders = null;
        this.view = null;
        this.refreshHeader();
        this.refreshBody();
        this.checkActiveDayIsOpen();
    };
    /**
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.emitBeforeViewRender = /**
     * @return {?}
     */
    function () {
        if (this.columnHeaders && this.view) {
            this.beforeViewRender.emit({
                header: this.columnHeaders,
                body: this.view.days,
                period: this.view.period
            });
        }
    };
    CalendarMonthViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-month-view',
                    template: "\n    <div class=\"cal-month-view\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\">\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div *ngFor=\"let rowIndex of view.rowOffsets; trackByIndex\">\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"let day of (view.days | slice : rowIndex : rowIndex + (view.totalDaysVisibleInWeek)); trackBy:trackByDate\"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [customTemplate]=\"cellTemplate\"\n              (mwlClick)=\"dayClicked.emit({ day: day })\"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              dragOverClass=\"cal-drag-over\"\n              (drop)=\"eventDropped(day, $event.dropData.event, $event.dropData.draggedFrom)\"\n              (eventClicked)=\"eventClicked.emit({event: $event.event})\">\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            [eventActionsTemplate]=\"eventActionsTemplate\"\n            (eventClicked)=\"eventClicked.emit({event: $event.event})\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped(openDay, $event.dropData.event, $event.dropData.draggedFrom)\">\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
                }] }
    ];
    CalendarMonthViewComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: CalendarUtils },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] },
        { type: DateAdapter }
    ]; };
    CalendarMonthViewComponent.propDecorators = {
        viewDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        excludeDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        activeDayIsOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        refresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tooltipTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tooltipAppendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        weekStartsOn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        cellTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        openDayEventsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        eventTitleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        eventActionsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        weekendDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        beforeViewRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        dayClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        eventClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        eventTimesChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    return CalendarMonthViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarMonthViewHeaderComponent = /** @class */ (function () {
    function CalendarMonthViewHeaderComponent() {
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    }
    CalendarMonthViewHeaderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-month-view-header',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\">\n      <div class=\"cal-cell-row cal-header\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days; trackBy:trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\">\n          {{ day.date | calendarDate:'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{days: days, locale: locale}\">\n    </ng-template>\n  "
                }] }
    ];
    CalendarMonthViewHeaderComponent.propDecorators = {
        days: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return CalendarMonthViewHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarMonthCellComponent = /** @class */ (function () {
    function CalendarMonthCellComponent() {
        this.highlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.unhighlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.trackByEventId = trackByEventId;
    }
    CalendarMonthCellComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-month-cell',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\">\n      <div class=\"cal-cell-top\">\n        <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>\n        <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events; trackBy:trackByEventId\"\n          [style.backgroundColor]=\"event.color?.primary\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({event: event})\"\n          (mouseleave)=\"unhighlightDay.emit({event: event})\"\n          [mwlCalendarTooltip]=\"event.title | calendarEventTitle:'monthTooltip':event\"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{event: event, draggedFrom: day}\"\n          [dragAxis]=\"{x: event.draggable, y: event.draggable}\"\n          (mwlClick)=\"eventClicked.emit({ event: event })\">\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  ",
                    host: {
                        class: 'cal-cell cal-day-cell',
                        '[class.cal-past]': 'day.isPast',
                        '[class.cal-today]': 'day.isToday',
                        '[class.cal-future]': 'day.isFuture',
                        '[class.cal-weekend]': 'day.isWeekend',
                        '[class.cal-in-month]': 'day.inMonth',
                        '[class.cal-out-month]': '!day.inMonth',
                        '[class.cal-has-events]': 'day.events.length > 0',
                        '[class.cal-open]': 'day === openDay',
                        '[class.cal-event-highlight]': '!!day.backgroundColor',
                        '[style.backgroundColor]': 'day.backgroundColor'
                    }
                }] }
    ];
    CalendarMonthCellComponent.propDecorators = {
        day: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        openDay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tooltipAppendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tooltipTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        highlightDay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        unhighlightDay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        eventClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    return CalendarMonthCellComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var collapseAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('collapse', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: 0, overflow: 'hidden' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '*' }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '*', overflow: 'hidden' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: 0 }))
    ])
]);
var CalendarOpenDayEventsComponent = /** @class */ (function () {
    function CalendarOpenDayEventsComponent() {
        this.isOpen = false;
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.trackByEventId = trackByEventId;
    }
    CalendarOpenDayEventsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-open-day-events',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\"\n      let-isOpen=\"isOpen\">\n      <div class=\"cal-open-day-events\" [@collapse] *ngIf=\"isOpen\">\n        <div\n          *ngFor=\"let event of events; trackBy:trackByEventId\"\n          [ngClass]=\"event?.cssClass\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{event: event}\"\n          [dragAxis]=\"{x: event.draggable, y: event.draggable}\">\n          <span\n            class=\"cal-event\"\n            [style.backgroundColor]=\"event.color?.primary\">\n          </span>\n          &ngsp;\n          <mwl-calendar-event-title\n            [event]=\"event\"\n            [customTemplate]=\"eventTitleTemplate\"\n            view=\"month\"\n            (mwlClick)=\"eventClicked.emit({event: event})\">\n          </mwl-calendar-event-title>\n          &ngsp;\n          <mwl-calendar-event-actions\n            [event]=\"event\"\n            [customTemplate]=\"eventActionsTemplate\">\n          </mwl-calendar-event-actions>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        events: events,\n        eventClicked: eventClicked,\n        isOpen: isOpen\n      }\">\n    </ng-template>\n  ",
                    animations: [collapseAnimation]
                }] }
    ];
    CalendarOpenDayEventsComponent.propDecorators = {
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        eventTitleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        eventActionsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        eventClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    return CalendarOpenDayEventsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarMonthModule = /** @class */ (function () {
    function CalendarMonthModule() {
    }
    CalendarMonthModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarCommonModule],
                    declarations: [
                        CalendarMonthViewComponent,
                        CalendarMonthCellComponent,
                        CalendarOpenDayEventsComponent,
                        CalendarMonthViewHeaderComponent
                    ],
                    exports: [
                        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"],
                        CalendarMonthViewComponent,
                        CalendarMonthCellComponent,
                        CalendarOpenDayEventsComponent,
                        CalendarMonthViewHeaderComponent
                    ]
                },] }
    ];
    return CalendarMonthModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var DRAG_THRESHOLD = 1;
var CalendarDragHelper = /** @class */ (function () {
    function CalendarDragHelper(dragContainerElement, draggableElement) {
        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    CalendarDragHelper.prototype.validateDrag = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var x = _a.x, y = _a.y, snapDraggedEvents = _a.snapDraggedEvents;
        /** @type {?} */
        var isWithinThreshold = Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
        if (snapDraggedEvents) {
            /** @type {?} */
            var newRect = Object.assign({}, this.startPosition, {
                left: this.startPosition.left + x,
                right: this.startPosition.right + x,
                top: this.startPosition.top + y,
                bottom: this.startPosition.bottom + y
            });
            return (isWithinThreshold &&
                isInside(this.dragContainerElement.getBoundingClientRect(), newRect));
        }
        else {
            return isWithinThreshold;
        }
    };
    return CalendarDragHelper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarResizeHelper = /** @class */ (function () {
    function CalendarResizeHelper(resizeContainerElement, minWidth) {
        this.resizeContainerElement = resizeContainerElement;
        this.minWidth = minWidth;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    CalendarResizeHelper.prototype.validateResize = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var rectangle = _a.rectangle;
        if (this.minWidth &&
            Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
            return false;
        }
        return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
    };
    return CalendarResizeHelper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Shows all events on a given week. Example usage:
 *
 * ```typescript
 * <mwl-calendar-week-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-week-view>
 * ```
 */
var CalendarWeekViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarWeekViewComponent(cdr, utils, locale, dateAdapter) {
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The precision to display events.
         * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
         */
        this.precision = 'days';
        /**
         * Whether to snap events to a grid when dragging
         */
        this.snapDraggedEvents = true;
        /**
         * The number of segments in an hour. Must be <= 6
         */
        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */
        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
         */
        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current week.
         * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
         */
        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * @hidden
         */
        this.allDayEventResizes = new Map();
        /**
         * @hidden
         */
        this.timeEventResizes = new Map();
        /**
         * @hidden
         */
        this.eventDragEnter = 0;
        /**
         * @hidden
         */
        this.dragActive = false;
        /**
         * @hidden
         */
        this.calendarId = Symbol('angular calendar week view id');
        /**
         * @hidden
         */
        this.trackByIndex = trackByIndex;
        /**
         * @hidden
         */
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
        /**
         * @hidden
         */
        this.trackByHourSegment = trackByHourSegment;
        /**
         * @hidden
         */
        this.trackByHour = trackByHour;
        /**
         * @hidden
         */
        this.trackByDayOrWeekEvent = trackByDayOrWeekEvent;
        /**
         * @hidden
         */
        this.trackByHourColumn = function (index, column) {
            return column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
        };
        this.locale = locale;
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.ngOnChanges = /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.viewDate ||
            changes.excludeDays ||
            changes.weekendDays ||
            changes.daysInWeek) {
            this.refreshHeader();
        }
        if (changes.events) {
            validateEvents$1(this.events);
        }
        if (changes.viewDate ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.hourSegments ||
            changes.weekStartsOn ||
            changes.weekendDays ||
            changes.excludeDays ||
            changes.hourSegmentHeight ||
            changes.events ||
            changes.daysInWeek) {
            this.refreshBody();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @param {?} eventsContainer
     * @param {?=} minWidth
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.resizeStarted = /**
     * @param {?} eventsContainer
     * @param {?=} minWidth
     * @return {?}
     */
    function (eventsContainer, minWidth) {
        this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
        /** @type {?} */
        var resizeHelper = new CalendarResizeHelper(eventsContainer, minWidth);
        this.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        };
        this.cdr.markForCheck();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} eventsContainer
     * @param {?} timeEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.timeEventResizeStarted = /**
     * @hidden
     * @param {?} eventsContainer
     * @param {?} timeEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    function (eventsContainer, timeEvent, resizeEvent) {
        this.timeEventResizes.set(timeEvent.event, resizeEvent);
        this.resizeStarted(eventsContainer);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} timeEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.timeEventResizing = /**
     * @hidden
     * @param {?} timeEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    function (timeEvent, resizeEvent) {
        var _this = this;
        this.timeEventResizes.set(timeEvent.event, resizeEvent);
        /** @type {?} */
        var adjustedEvents = new Map();
        /** @type {?} */
        var tempEvents = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.events);
        this.timeEventResizes.forEach(function (lastResizeEvent, event) {
            /** @type {?} */
            var newEventDates = _this.getTimeEventResizedDates(event, lastResizeEvent);
            /** @type {?} */
            var adjustedEvent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event, newEventDates);
            adjustedEvents.set(adjustedEvent, event);
            /** @type {?} */
            var eventIndex = tempEvents.indexOf(event);
            tempEvents[eventIndex] = adjustedEvent;
        });
        this.restoreOriginalEvents(tempEvents, adjustedEvents);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} timeEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.timeEventResizeEnded = /**
     * @hidden
     * @param {?} timeEvent
     * @return {?}
     */
    function (timeEvent) {
        this.view = this.getWeekView(this.events);
        /** @type {?} */
        var lastResizeEvent = this.timeEventResizes.get(timeEvent.event);
        this.timeEventResizes.delete(timeEvent.event);
        /** @type {?} */
        var newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
        this.eventTimesChanged.emit({
            newStart: newEventDates.start,
            newEnd: newEventDates.end,
            event: timeEvent.event,
            type: CalendarEventTimesChangedEventType.Resize
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} allDayEventsContainer
     * @param {?} allDayEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.allDayEventResizeStarted = /**
     * @hidden
     * @param {?} allDayEventsContainer
     * @param {?} allDayEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    function (allDayEventsContainer, allDayEvent, resizeEvent) {
        this.allDayEventResizes.set(allDayEvent, {
            originalOffset: allDayEvent.offset,
            originalSpan: allDayEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
        });
        this.resizeStarted(allDayEventsContainer, this.getDayColumnWidth(allDayEventsContainer));
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} allDayEvent
     * @param {?} resizeEvent
     * @param {?} dayWidth
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.allDayEventResizing = /**
     * @hidden
     * @param {?} allDayEvent
     * @param {?} resizeEvent
     * @param {?} dayWidth
     * @return {?}
     */
    function (allDayEvent, resizeEvent, dayWidth) {
        /** @type {?} */
        var currentResize = this.allDayEventResizes.get(allDayEvent);
        if (resizeEvent.edges.left) {
            /** @type {?} */
            var diff = Math.round(+resizeEvent.edges.left / dayWidth);
            allDayEvent.offset = currentResize.originalOffset + diff;
            allDayEvent.span = currentResize.originalSpan - diff;
        }
        else if (resizeEvent.edges.right) {
            /** @type {?} */
            var diff = Math.round(+resizeEvent.edges.right / dayWidth);
            allDayEvent.span = currentResize.originalSpan + diff;
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} allDayEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.allDayEventResizeEnded = /**
     * @hidden
     * @param {?} allDayEvent
     * @return {?}
     */
    function (allDayEvent) {
        /** @type {?} */
        var currentResize = this.allDayEventResizes.get(allDayEvent);
        /** @type {?} */
        var allDayEventResizingBeforeStart = currentResize.edge === 'left';
        /** @type {?} */
        var daysDiff;
        if (allDayEventResizingBeforeStart) {
            daysDiff = allDayEvent.offset - currentResize.originalOffset;
        }
        else {
            daysDiff = allDayEvent.span - currentResize.originalSpan;
        }
        allDayEvent.offset = currentResize.originalOffset;
        allDayEvent.span = currentResize.originalSpan;
        /** @type {?} */
        var newStart = allDayEvent.event.start;
        /** @type {?} */
        var newEnd = allDayEvent.event.end || allDayEvent.event.start;
        if (allDayEventResizingBeforeStart) {
            newStart = this.dateAdapter.addDays(newStart, daysDiff);
        }
        else {
            newEnd = this.dateAdapter.addDays(newEnd, daysDiff);
        }
        this.eventTimesChanged.emit({
            newStart: newStart,
            newEnd: newEnd,
            event: allDayEvent.event,
            type: CalendarEventTimesChangedEventType.Resize
        });
        this.allDayEventResizes.delete(allDayEvent);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} eventRowContainer
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.getDayColumnWidth = /**
     * @hidden
     * @param {?} eventRowContainer
     * @return {?}
     */
    function (eventRowContainer) {
        return Math.floor(eventRowContainer.offsetWidth / this.days.length);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} dropEvent
     * @param {?} date
     * @param {?} allDay
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.eventDropped = /**
     * @hidden
     * @param {?} dropEvent
     * @param {?} date
     * @param {?} allDay
     * @return {?}
     */
    function (dropEvent, date, allDay) {
        if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId)) {
            this.eventTimesChanged.emit({
                type: CalendarEventTimesChangedEventType.Drop,
                event: dropEvent.dropData.event,
                newStart: date,
                allDay: allDay
            });
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} eventsContainer
     * @param {?} event
     * @param {?=} dayEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.dragStarted = /**
     * @hidden
     * @param {?} eventsContainer
     * @param {?} event
     * @param {?=} dayEvent
     * @return {?}
     */
    function (eventsContainer, event, dayEvent) {
        var _this = this;
        this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
        /** @type {?} */
        var dragHelper = new CalendarDragHelper(eventsContainer, event);
        this.validateDrag = function (_a) {
            var x = _a.x, y = _a.y;
            return _this.allDayEventResizes.size === 0 &&
                _this.timeEventResizes.size === 0 &&
                dragHelper.validateDrag({
                    x: x,
                    y: y,
                    snapDraggedEvents: _this.snapDraggedEvents
                });
        };
        this.dragActive = true;
        this.eventDragEnter = 0;
        if (!this.snapDraggedEvents && dayEvent) {
            this.view.hourColumns.forEach(function (column) {
                /** @type {?} */
                var linkedEvent = column.events.find(function (columnEvent) {
                    return columnEvent.event === dayEvent.event && columnEvent !== dayEvent;
                });
                // hide any linked events while dragging
                if (linkedEvent) {
                    linkedEvent.width = 0;
                    linkedEvent.height = 0;
                }
            });
        }
        this.cdr.markForCheck();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} dayEvent
     * @param {?} dragEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.dragMove = /**
     * @hidden
     * @param {?} dayEvent
     * @param {?} dragEvent
     * @return {?}
     */
    function (dayEvent, dragEvent) {
        if (this.snapDraggedEvents) {
            /** @type {?} */
            var newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
            /** @type {?} */
            var originalEvent_1 = dayEvent.event;
            /** @type {?} */
            var adjustedEvent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, originalEvent_1, newEventTimes);
            /** @type {?} */
            var tempEvents = this.events.map(function (event) {
                if (event === originalEvent_1) {
                    return adjustedEvent_1;
                }
                return event;
            });
            this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent_1, originalEvent_1]]));
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} weekEvent
     * @param {?} dragEndEvent
     * @param {?} dayWidth
     * @param {?=} useY
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.dragEnded = /**
     * @hidden
     * @param {?} weekEvent
     * @param {?} dragEndEvent
     * @param {?} dayWidth
     * @param {?=} useY
     * @return {?}
     */
    function (weekEvent, dragEndEvent, dayWidth, useY) {
        if (useY === void 0) { useY = false; }
        this.view = this.getWeekView(this.events);
        this.dragActive = false;
        var _a = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY), start = _a.start, end = _a.end;
        if (this.eventDragEnter > 0 &&
            isDraggedWithinPeriod(start, end, this.view.period)) {
            this.eventTimesChanged.emit({
                newStart: start,
                newEnd: end,
                event: weekEvent.event,
                type: CalendarEventTimesChangedEventType.Drag,
                allDay: !useY
            });
        }
    };
    /**
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.refreshHeader = /**
     * @return {?}
     */
    function () {
        this.days = this.utils.getWeekViewHeader(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, weekendDays: this.weekendDays }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
        this.emitBeforeViewRender();
    };
    /**
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.refreshBody = /**
     * @return {?}
     */
    function () {
        this.view = this.getWeekView(this.events);
        this.emitBeforeViewRender();
    };
    /**
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.refreshAll = /**
     * @return {?}
     */
    function () {
        this.refreshHeader();
        this.refreshBody();
    };
    /**
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.emitBeforeViewRender = /**
     * @return {?}
     */
    function () {
        if (this.days && this.view) {
            this.beforeViewRender.emit(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ header: this.days }, this.view));
        }
    };
    /**
     * @param {?} events
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.getWeekView = /**
     * @param {?} events
     * @return {?}
     */
    function (events) {
        return this.utils.getWeekView(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ events: events, viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, precision: this.precision, absolutePositionedEvents: true, hourSegments: this.hourSegments, dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            }, dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            }, segmentHeight: this.hourSegmentHeight, weekendDays: this.weekendDays }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
    };
    /**
     * @param {?} weekEvent
     * @param {?} dragEndEvent
     * @param {?} dayWidth
     * @param {?} useY
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.getDragMovedEventTimes = /**
     * @param {?} weekEvent
     * @param {?} dragEndEvent
     * @param {?} dayWidth
     * @param {?} useY
     * @return {?}
     */
    function (weekEvent, dragEndEvent, dayWidth, useY) {
        /** @type {?} */
        var daysDragged = roundToNearest(dragEndEvent.x, dayWidth) / dayWidth;
        /** @type {?} */
        var minutesMoved = useY
            ? getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize)
            : 0;
        /** @type {?} */
        var start = this.dateAdapter.addMinutes(this.dateAdapter.addDays(weekEvent.event.start, daysDragged), minutesMoved);
        /** @type {?} */
        var end;
        if (weekEvent.event.end) {
            end = this.dateAdapter.addMinutes(this.dateAdapter.addDays(weekEvent.event.end, daysDragged), minutesMoved);
        }
        return { start: start, end: end };
    };
    /**
     * @param {?} tempEvents
     * @param {?} adjustedEvents
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.restoreOriginalEvents = /**
     * @param {?} tempEvents
     * @param {?} adjustedEvents
     * @return {?}
     */
    function (tempEvents, adjustedEvents) {
        this.view = this.getWeekView(tempEvents);
        /** @type {?} */
        var adjustedEventsArray = tempEvents.filter(function (event) {
            return adjustedEvents.has(event);
        });
        this.view.hourColumns.forEach(function (column) {
            adjustedEventsArray.forEach(function (adjustedEvent) {
                /** @type {?} */
                var originalEvent = adjustedEvents.get(adjustedEvent);
                /** @type {?} */
                var existingColumnEvent = column.events.find(function (columnEvent) { return columnEvent.event === adjustedEvent; });
                if (existingColumnEvent) {
                    // restore the original event so trackBy kicks in and the dom isn't changed
                    existingColumnEvent.event = originalEvent;
                }
                else {
                    // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
                    column.events.push({
                        event: originalEvent,
                        left: 0,
                        top: 0,
                        height: 0,
                        width: 0,
                        startsBeforeDay: false,
                        endsAfterDay: false
                    });
                }
            });
        });
        adjustedEvents.clear();
    };
    /**
     * @param {?} calendarEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.getTimeEventResizedDates = /**
     * @param {?} calendarEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    function (calendarEvent, resizeEvent) {
        /** @type {?} */
        var minimumEventHeight = getMinimumEventHeightInMinutes(this.hourSegments, this.hourSegmentHeight);
        /** @type {?} */
        var newEventDates = {
            start: calendarEvent.start,
            end: getDefaultEventEnd(this.dateAdapter, calendarEvent, minimumEventHeight)
        };
        var end = calendarEvent.end, eventWithoutEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(calendarEvent, ["end"]);
        /** @type {?} */
        var smallestResizes = {
            start: this.dateAdapter.addMinutes(newEventDates.end, minimumEventHeight * -1),
            end: getDefaultEventEnd(this.dateAdapter, eventWithoutEnd, minimumEventHeight)
        };
        if (resizeEvent.edges.left) {
            /** @type {?} */
            var daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth);
            /** @type {?} */
            var newStart = this.dateAdapter.addDays(newEventDates.start, daysDiff);
            if (newStart < smallestResizes.start) {
                newEventDates.start = newStart;
            }
            else {
                newEventDates.start = smallestResizes.start;
            }
        }
        else if (resizeEvent.edges.right) {
            /** @type {?} */
            var daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth);
            /** @type {?} */
            var newEnd = this.dateAdapter.addDays(newEventDates.end, daysDiff);
            if (newEnd > smallestResizes.end) {
                newEventDates.end = newEnd;
            }
            else {
                newEventDates.end = smallestResizes.end;
            }
        }
        if (resizeEvent.edges.top) {
            /** @type {?} */
            var minutesMoved = getMinutesMoved((/** @type {?} */ (resizeEvent.edges.top)), this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            /** @type {?} */
            var newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);
            if (newStart < smallestResizes.start) {
                newEventDates.start = newStart;
            }
            else {
                newEventDates.start = smallestResizes.start;
            }
        }
        else if (resizeEvent.edges.bottom) {
            /** @type {?} */
            var minutesMoved = getMinutesMoved((/** @type {?} */ (resizeEvent.edges.bottom)), this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            /** @type {?} */
            var newEnd = this.dateAdapter.addMinutes(newEventDates.end, minutesMoved);
            if (newEnd > smallestResizes.end) {
                newEventDates.end = newEnd;
            }
            else {
                newEventDates.end = smallestResizes.end;
            }
        }
        return newEventDates;
    };
    CalendarWeekViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-week-view',
                    template: "\n    <div class=\"cal-week-view\">\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"eventDropped({dropData: $event}, $event.newStart, true)\">\n      </mwl-calendar-week-view-header>\n      <div\n        class=\"cal-all-day-events\"\n        #allDayEventsContainer\n        *ngIf=\"view.allDayEventRows.length > 0\"\n        mwlDroppable\n        (dragEnter)=\"eventDragEnter = eventDragEnter + 1\"\n        (dragLeave)=\"eventDragEnter = eventDragEnter - 1\">\n        <div class=\"cal-day-columns\">\n          <div\n            class=\"cal-time-label-column\"\n            [ngTemplateOutlet]=\"allDayEventsLabelTemplate\">\n          </div>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let day of days; trackBy:trackByWeekDayHeaderDate\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped($event, day.date, true)\">\n          </div>\n        </div>\n        <div\n          *ngFor=\"let eventRow of view.allDayEventRows; trackBy:trackByIndex\"\n          #eventRowContainer\n          class=\"cal-events-row\">\n          <div\n            *ngFor=\"let allDayEvent of eventRow.row; trackBy:trackByDayOrWeekEvent\"\n            #event\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"allDayEvent.event.draggable && allDayEventResizes.size === 0\"\n            [class.cal-starts-within-week]=\"!allDayEvent.startsBeforeWeek\"\n            [class.cal-ends-within-week]=\"!allDayEvent.endsAfterWeek\"\n            [ngClass]=\"allDayEvent.event?.cssClass\"\n            [style.width.%]=\"(100 / days.length) * allDayEvent.span\"\n            [style.marginLeft.%]=\"(100 / days.length) * allDayEvent.offset\"\n            mwlResizable\n            [resizeSnapGrid]=\"{left: dayColumnWidth, right: dayColumnWidth}\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)\"\n            (resizing)=\"allDayEventResizing(allDayEvent, $event, dayColumnWidth)\"\n            (resizeEnd)=\"allDayEventResizeEnded(allDayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{event: allDayEvent.event, calendarId: calendarId}\"\n            [dragAxis]=\"{\n              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,\n              y: !snapDraggedEvents && allDayEvent.event.draggable && allDayEventResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"snapDraggedEvents ? {x: dayColumnWidth} : {}\"\n            [validateDrag]=\"validateDrag\"\n            (dragPointerDown)=\"dragStarted(eventRowContainer, event)\"\n            (dragEnd)=\"dragEnded(allDayEvent, $event, dayColumnWidth)\">\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"allDayEvent.event?.resizable?.beforeStart && !allDayEvent.startsBeforeWeek\"\n              mwlResizeHandle\n              [resizeEdges]=\"{ left: true }\">\n            </div>\n            <mwl-calendar-week-view-event\n              [weekEvent]=\"allDayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              (eventClicked)=\"eventClicked.emit({event: allDayEvent.event})\">\n            </mwl-calendar-week-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"allDayEvent.event?.resizable?.afterEnd && !allDayEvent.endsAfterWeek\"\n              mwlResizeHandle\n              [resizeEdges]=\"{ right: true }\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"cal-time-events\"\n        mwlDroppable\n        (dragEnter)=\"eventDragEnter = eventDragEnter + 1\"\n        (dragLeave)=\"eventDragEnter = eventDragEnter - 1\">\n        <div class=\"cal-time-label-column\" *ngIf=\"view.hourColumns.length > 0\">\n          <div\n            *ngFor=\"let hour of view.hourColumns[0].hours; trackBy:trackByHour; let odd = odd\"\n            class=\"cal-hour\"\n            [class.cal-hour-odd]=\"odd\">\n            <mwl-calendar-week-view-hour-segment\n              *ngFor=\"let segment of hour.segments; trackBy:trackByHourSegment\"\n              [style.height.px]=\"hourSegmentHeight\"\n              [segment]=\"segment\"\n              [segmentHeight]=\"hourSegmentHeight\"\n              [locale]=\"locale\"\n              [customTemplate]=\"hourSegmentTemplate\"\n              [isTimeLabel]=\"true\">\n            </mwl-calendar-week-view-hour-segment>\n          </div>\n        </div>\n        <div\n          class=\"cal-day-columns\"\n          [class.cal-resize-active]=\"timeEventResizes.size > 0\"\n          #dayColumns>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let column of view.hourColumns; trackBy:trackByHourColumn\">\n            <div\n              *ngFor=\"let timeEvent of column.events; trackBy:trackByDayOrWeekEvent\"\n              #event\n              class=\"cal-event-container\"\n              [class.cal-draggable]=\"timeEvent.event.draggable && timeEventResizes.size === 0\"\n              [class.cal-starts-within-day]=\"!timeEvent.startsBeforeDay\"\n              [class.cal-ends-within-day]=\"!timeEvent.endsAfterDay\"\n              [ngClass]=\"timeEvent.event.cssClass\"\n              [hidden]=\"timeEvent.height === 0 && timeEvent.width === 0\"\n              [style.top.px]=\"timeEvent.top\"\n              [style.height.px]=\"timeEvent.height\"\n              [style.left.%]=\"timeEvent.left\"\n              [style.width.%]=\"timeEvent.width\"\n              mwlResizable\n              [resizeSnapGrid]=\"{left: dayColumnWidth, right: dayColumnWidth, top: eventSnapSize || hourSegmentHeight, bottom: eventSnapSize || hourSegmentHeight}\"\n              [validateResize]=\"validateResize\"\n              [allowNegativeResizes]=\"true\"\n              (resizeStart)=\"timeEventResizeStarted(dayColumns, timeEvent, $event)\"\n              (resizing)=\"timeEventResizing(timeEvent, $event)\"\n              (resizeEnd)=\"timeEventResizeEnded(timeEvent)\"\n              mwlDraggable\n              dragActiveClass=\"cal-drag-active\"\n              [dropData]=\"{event: timeEvent.event, calendarId: calendarId}\"\n              [dragAxis]=\"{\n                x: timeEvent.event.draggable && timeEventResizes.size === 0,\n                y: timeEvent.event.draggable && timeEventResizes.size === 0\n              }\"\n              [dragSnapGrid]=\"snapDraggedEvents ? {x: dayColumnWidth, y: eventSnapSize || hourSegmentHeight} : {}\"\n              [ghostDragEnabled]=\"!snapDraggedEvents\"\n              [validateDrag]=\"validateDrag\"\n              (dragPointerDown)=\"dragStarted(dayColumns, event, timeEvent)\"\n              (dragging)=\"dragMove(timeEvent, $event)\"\n              (dragEnd)=\"dragEnded(timeEvent, $event, dayColumnWidth, true)\">\n              <div\n                class=\"cal-resize-handle cal-resize-handle-before-start\"\n                *ngIf=\"timeEvent.event?.resizable?.beforeStart && !timeEvent.startsBeforeDay\"\n                mwlResizeHandle\n                [resizeEdges]=\"{\n                  left: true,\n                  top: true\n                }\">\n              </div>\n              <mwl-calendar-week-view-event\n                [weekEvent]=\"timeEvent\"\n                [tooltipPlacement]=\"tooltipPlacement\"\n                [tooltipTemplate]=\"tooltipTemplate\"\n                [tooltipAppendToBody]=\"tooltipAppendToBody\"\n                [tooltipDisabled]=\"dragActive || timeEventResizes.size > 0\"\n                [customTemplate]=\"eventTemplate\"\n                [eventTitleTemplate]=\"eventTitleTemplate\"\n                [eventActionsTemplate]=\"eventActionsTemplate\"\n                (eventClicked)=\"eventClicked.emit({event: timeEvent.event})\">\n              </mwl-calendar-week-view-event>\n              <div\n                class=\"cal-resize-handle cal-resize-handle-after-end\"\n                *ngIf=\"timeEvent.event?.resizable?.afterEnd && !timeEvent.endsAfterDay\"\n                mwlResizeHandle\n                [resizeEdges]=\"{\n                  right: true,\n                  bottom: true\n                }\">\n              </div>\n            </div>\n\n            <div\n              *ngFor=\"let hour of column.hours; trackBy:trackByHour; let odd = odd\"\n              class=\"cal-hour\"\n              [class.cal-hour-odd]=\"odd\">\n              <mwl-calendar-week-view-hour-segment\n                *ngFor=\"let segment of hour.segments; trackBy:trackByHourSegment\"\n                [style.height.px]=\"hourSegmentHeight\"\n                [segment]=\"segment\"\n                [segmentHeight]=\"hourSegmentHeight\"\n                [locale]=\"locale\"\n                [customTemplate]=\"hourSegmentTemplate\"\n                (mwlClick)=\"hourSegmentClicked.emit({date: segment.date})\"\n                mwlDroppable\n                [dragOverClass]=\"!dragActive || !snapDraggedEvents ? 'cal-drag-over' : null\"\n                dragActiveClass=\"cal-drag-active\"\n                (drop)=\"eventDropped($event, segment.date, false)\">\n              </mwl-calendar-week-view-hour-segment>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
                }] }
    ];
    CalendarWeekViewComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: CalendarUtils },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] },
        { type: DateAdapter }
    ]; };
    CalendarWeekViewComponent.propDecorators = {
        viewDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        excludeDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        refresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tooltipTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tooltipAppendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        weekStartsOn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        eventTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        eventTitleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        eventActionsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        precision: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        weekendDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        snapDraggedEvents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        hourSegments: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        hourSegmentHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        dayStartHour: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        dayStartMinute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        dayEndHour: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        dayEndMinute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        hourSegmentTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        eventSnapSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        allDayEventsLabelTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        daysInWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        dayHeaderClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        eventClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        eventTimesChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        beforeViewRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        hourSegmentClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    return CalendarWeekViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarWeekViewHeaderComponent = /** @class */ (function () {
    function CalendarWeekViewHeaderComponent() {
        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.eventDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    }
    CalendarWeekViewHeaderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-week-view-header',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\">\n      <div class=\"cal-day-headers\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy:trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({day: day})\"\n          mwlDroppable\n          dragOverClass=\"cal-drag-over\"\n          (drop)=\"eventDropped.emit({event: $event.dropData.event, newStart: day.date})\">\n          <b>{{ day.date | calendarDate:'weekViewColumnHeader':locale }}</b><br>\n          <span>{{ day.date | calendarDate:'weekViewColumnSubHeader':locale }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{days: days, locale: locale, dayHeaderClicked: dayHeaderClicked, eventDropped: eventDropped}\">\n    </ng-template>\n  "
                }] }
    ];
    CalendarWeekViewHeaderComponent.propDecorators = {
        days: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        dayHeaderClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        eventDropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    return CalendarWeekViewHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarWeekViewEventComponent = /** @class */ (function () {
    function CalendarWeekViewEventComponent() {
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    CalendarWeekViewEventComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-week-view-event',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDisabled=\"tooltipDisabled\">\n      <div\n        class=\"cal-event\"\n        [style.backgroundColor]=\"weekEvent.event.color?.secondary\"\n        [style.borderColor]=\"weekEvent.event.color?.primary\"\n        [mwlCalendarTooltip]=\"!tooltipDisabled ? (weekEvent.event.title | calendarEventTitle:'weekTooltip':weekEvent.event) : ''\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        (mwlClick)=\"eventClicked.emit()\">\n        <mwl-calendar-event-actions\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\">\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"week\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDisabled: tooltipDisabled\n      }\">\n    </ng-template>\n  "
                }] }
    ];
    CalendarWeekViewEventComponent.propDecorators = {
        weekEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tooltipAppendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tooltipDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        eventTitleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        eventActionsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tooltipTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        eventClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    return CalendarWeekViewEventComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarWeekViewHourSegmentComponent = /** @class */ (function () {
    function CalendarWeekViewHourSegmentComponent() {
    }
    CalendarWeekViewHourSegmentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-week-view-hour-segment',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\"\n      let-isTimeLabel=\"isTimeLabel\">\n      <div\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\">\n        <div class=\"cal-time\" *ngIf=\"isTimeLabel\">\n          {{ segment.date | calendarDate:'weekViewHour':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight,\n        isTimeLabel: isTimeLabel\n      }\">\n    </ng-template>\n  "
                }] }
    ];
    CalendarWeekViewHourSegmentComponent.propDecorators = {
        segment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        segmentHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        isTimeLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return CalendarWeekViewHourSegmentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarWeekModule = /** @class */ (function () {
    function CalendarWeekModule() {
    }
    CalendarWeekModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"],
                        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"],
                        CalendarCommonModule
                    ],
                    declarations: [
                        CalendarWeekViewComponent,
                        CalendarWeekViewHeaderComponent,
                        CalendarWeekViewEventComponent,
                        CalendarWeekViewHourSegmentComponent
                    ],
                    exports: [
                        angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"],
                        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"],
                        CalendarWeekViewComponent,
                        CalendarWeekViewHeaderComponent,
                        CalendarWeekViewEventComponent,
                        CalendarWeekViewHourSegmentComponent
                    ]
                },] }
    ];
    return CalendarWeekModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Shows all events on a given day. Example usage:
 *
 * ```typescript
 * <mwl-calendar-day-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-day-view>
 * ```
 */
var CalendarDayViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarDayViewComponent(cdr, utils, locale, dateAdapter) {
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * The number of segments in an hour. Must be <= 6
         */
        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */
        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * The width in pixels of each event on the view
         */
        this.eventWidth = 150;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * Whether to snap events to a grid when dragging
         */
        this.snapDraggedEvents = true;
        /**
         * Called when an event title is clicked
         */
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current day.
         * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
         */
        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * @hidden
         */
        this.hours = [];
        /**
         * @hidden
         */
        this.width = 0;
        /**
         * @hidden
         */
        this.currentResizes = new Map();
        /**
         * @hidden
         */
        this.eventDragEnter = 0;
        /**
         * @hidden
         */
        this.calendarId = Symbol('angular calendar day view id');
        /**
         * @hidden
         */
        this.trackByEventId = trackByEventId;
        /**
         * @hidden
         */
        this.trackByHour = trackByHour;
        /**
         * @hidden
         */
        this.trackByHourSegment = trackByHourSegment;
        /**
         * @hidden
         */
        this.trackByDayEvent = trackByDayOrWeekEvent;
        this.locale = locale;
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarDayViewComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarDayViewComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    CalendarDayViewComponent.prototype.ngOnChanges = /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.viewDate ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.hourSegments) {
            this.refreshHourGrid();
        }
        if (changes.events) {
            validateEvents$1(this.events);
        }
        if (changes.viewDate ||
            changes.events ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.eventWidth) {
            this.refreshView();
        }
    };
    /**
     * @param {?} dropEvent
     * @param {?} date
     * @param {?} allDay
     * @return {?}
     */
    CalendarDayViewComponent.prototype.eventDropped = /**
     * @param {?} dropEvent
     * @param {?} date
     * @param {?} allDay
     * @return {?}
     */
    function (dropEvent, date, allDay) {
        if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId)) {
            this.eventTimesChanged.emit({
                type: CalendarEventTimesChangedEventType.Drop,
                event: dropEvent.dropData.event,
                newStart: date,
                allDay: allDay
            });
        }
    };
    /**
     * @param {?} event
     * @param {?} resizeEvent
     * @param {?} dayEventsContainer
     * @return {?}
     */
    CalendarDayViewComponent.prototype.resizeStarted = /**
     * @param {?} event
     * @param {?} resizeEvent
     * @param {?} dayEventsContainer
     * @return {?}
     */
    function (event, resizeEvent, dayEventsContainer) {
        this.currentResizes.set(event, {
            originalTop: event.top,
            originalHeight: event.height,
            edge: typeof resizeEvent.edges.top !== 'undefined' ? 'top' : 'bottom'
        });
        /** @type {?} */
        var resizeHelper = new CalendarResizeHelper(dayEventsContainer);
        this.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        };
        this.cdr.markForCheck();
    };
    /**
     * @param {?} event
     * @param {?} resizeEvent
     * @return {?}
     */
    CalendarDayViewComponent.prototype.resizing = /**
     * @param {?} event
     * @param {?} resizeEvent
     * @return {?}
     */
    function (event, resizeEvent) {
        /** @type {?} */
        var currentResize = this.currentResizes.get(event);
        if (resizeEvent.edges.top) {
            event.top = currentResize.originalTop + +resizeEvent.edges.top;
            event.height = currentResize.originalHeight - +resizeEvent.edges.top;
        }
        else if (resizeEvent.edges.bottom) {
            event.height = currentResize.originalHeight + +resizeEvent.edges.bottom;
        }
    };
    /**
     * @param {?} dayEvent
     * @return {?}
     */
    CalendarDayViewComponent.prototype.resizeEnded = /**
     * @param {?} dayEvent
     * @return {?}
     */
    function (dayEvent) {
        /** @type {?} */
        var currentResize = this.currentResizes.get(dayEvent);
        /** @type {?} */
        var resizingBeforeStart = currentResize.edge === 'top';
        /** @type {?} */
        var pixelsMoved;
        if (resizingBeforeStart) {
            pixelsMoved = dayEvent.top - currentResize.originalTop;
        }
        else {
            pixelsMoved = dayEvent.height - currentResize.originalHeight;
        }
        dayEvent.top = currentResize.originalTop;
        dayEvent.height = currentResize.originalHeight;
        /** @type {?} */
        var minutesMoved = getMinutesMoved(pixelsMoved, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
        /** @type {?} */
        var newStart = dayEvent.event.start;
        /** @type {?} */
        var newEnd = getDefaultEventEnd(this.dateAdapter, dayEvent.event, getMinimumEventHeightInMinutes(this.hourSegments, this.hourSegmentHeight));
        if (resizingBeforeStart) {
            newStart = this.dateAdapter.addMinutes(newStart, minutesMoved);
        }
        else {
            newEnd = this.dateAdapter.addMinutes(newEnd, minutesMoved);
        }
        this.eventTimesChanged.emit({
            newStart: newStart,
            newEnd: newEnd,
            event: dayEvent.event,
            type: CalendarEventTimesChangedEventType.Resize
        });
        this.currentResizes.delete(dayEvent);
    };
    /**
     * @param {?} event
     * @param {?} dayEventsContainer
     * @return {?}
     */
    CalendarDayViewComponent.prototype.dragStarted = /**
     * @param {?} event
     * @param {?} dayEventsContainer
     * @return {?}
     */
    function (event, dayEventsContainer) {
        var _this = this;
        /** @type {?} */
        var dragHelper = new CalendarDragHelper(dayEventsContainer, event);
        this.validateDrag = function (_a) {
            var x = _a.x, y = _a.y;
            return _this.currentResizes.size === 0 &&
                dragHelper.validateDrag({
                    x: x,
                    y: y,
                    snapDraggedEvents: _this.snapDraggedEvents
                });
        };
        this.eventDragEnter = 0;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} dayEvent
     * @param {?} dragEndEvent
     * @return {?}
     */
    CalendarDayViewComponent.prototype.dragEnded = /**
     * @param {?} dayEvent
     * @param {?} dragEndEvent
     * @return {?}
     */
    function (dayEvent, dragEndEvent) {
        if (this.eventDragEnter > 0) {
            /** @type {?} */
            var minutesMoved = getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            /** @type {?} */
            var newStart = this.dateAdapter.addMinutes(dayEvent.event.start, minutesMoved);
            if (dragEndEvent.y < 0 && newStart < this.view.period.start) {
                minutesMoved += this.dateAdapter.differenceInMinutes(this.view.period.start, newStart);
                newStart = this.view.period.start;
            }
            /** @type {?} */
            var newEnd = void 0;
            if (dayEvent.event.end) {
                newEnd = this.dateAdapter.addMinutes(dayEvent.event.end, minutesMoved);
            }
            if (isDraggedWithinPeriod(newStart, newEnd, this.view.period)) {
                this.eventTimesChanged.emit({
                    newStart: newStart,
                    newEnd: newEnd,
                    event: dayEvent.event,
                    type: CalendarEventTimesChangedEventType.Drag
                });
            }
        }
    };
    /**
     * @return {?}
     */
    CalendarDayViewComponent.prototype.refreshHourGrid = /**
     * @return {?}
     */
    function () {
        this.hours = this.utils.getDayViewHourGrid({
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            }
        });
        this.emitBeforeViewRender();
    };
    /**
     * @return {?}
     */
    CalendarDayViewComponent.prototype.refreshView = /**
     * @return {?}
     */
    function () {
        this.view = this.utils.getDayView({
            events: this.events,
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            },
            eventWidth: this.eventWidth,
            segmentHeight: this.hourSegmentHeight
        });
        this.emitBeforeViewRender();
    };
    /**
     * @return {?}
     */
    CalendarDayViewComponent.prototype.refreshAll = /**
     * @return {?}
     */
    function () {
        this.refreshHourGrid();
        this.refreshView();
    };
    /**
     * @return {?}
     */
    CalendarDayViewComponent.prototype.emitBeforeViewRender = /**
     * @return {?}
     */
    function () {
        if (this.hours && this.view) {
            this.beforeViewRender.emit({
                body: {
                    hourGrid: this.hours,
                    allDayEvents: this.view.allDayEvents
                },
                period: this.view.period
            });
        }
    };
    CalendarDayViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-day-view',
                    template: "\n    <div class=\"cal-day-view\">\n      <div\n        class=\"cal-all-day-events\"\n        mwlDroppable\n        dragOverClass=\"cal-drag-over\"\n        dragActiveClass=\"cal-drag-active\"\n        (drop)=\"eventDropped($event, view.period.start, true)\">\n        <mwl-calendar-day-view-event\n          *ngFor=\"let event of view.allDayEvents; trackBy:trackByEventId\"\n          [ngClass]=\"event.cssClass\"\n          [dayEvent]=\"{event: event}\"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [customTemplate]=\"eventTemplate\"\n          [eventTitleTemplate]=\"eventTitleTemplate\"\n          [eventActionsTemplate]=\"eventActionsTemplate\"\n          (eventClicked)=\"eventClicked.emit({event: event})\"\n          [class.cal-draggable]=\"!snapDraggedEvents && event.draggable\"\n          mwlDraggable\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{event: event, calendarId: calendarId}\"\n          [dragAxis]=\"{x: !snapDraggedEvents && event.draggable, y: !snapDraggedEvents && event.draggable}\">\n        </mwl-calendar-day-view-event>\n      </div>\n      <div\n        class=\"cal-hour-rows\"\n        #dayEventsContainer\n        mwlDroppable\n        (dragEnter)=\"eventDragEnter = eventDragEnter + 1\"\n        (dragLeave)=\"eventDragEnter = eventDragEnter - 1\">\n        <div class=\"cal-events\">\n          <div\n            #event\n            *ngFor=\"let dayEvent of view?.events; trackBy:trackByDayEvent\"\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"dayEvent.event.draggable\"\n            [class.cal-starts-within-day]=\"!dayEvent.startsBeforeDay\"\n            [class.cal-ends-within-day]=\"!dayEvent.endsAfterDay\"\n            [ngClass]=\"dayEvent.event.cssClass\"\n            mwlResizable\n            [resizeSnapGrid]=\"{top: eventSnapSize || hourSegmentHeight, bottom: eventSnapSize || hourSegmentHeight}\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"resizeStarted(dayEvent, $event, dayEventsContainer)\"\n            (resizing)=\"resizing(dayEvent, $event)\"\n            (resizeEnd)=\"resizeEnded(dayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{event: dayEvent.event, calendarId: calendarId}\"\n            [dragAxis]=\"{x: !snapDraggedEvents && dayEvent.event.draggable && currentResizes.size === 0, y: dayEvent.event.draggable && currentResizes.size === 0}\"\n            [dragSnapGrid]=\"snapDraggedEvents ? {y: eventSnapSize || hourSegmentHeight} : {}\"\n            [validateDrag]=\"validateDrag\"\n            (dragPointerDown)=\"dragStarted(event, dayEventsContainer)\"\n            (dragEnd)=\"dragEnded(dayEvent, $event)\"\n            [style.marginTop.px]=\"dayEvent.top\"\n            [style.height.px]=\"dayEvent.height\"\n            [style.marginLeft.px]=\"dayEvent.left + 70\"\n            [style.width.px]=\"dayEvent.width - 1\">\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"dayEvent.event?.resizable?.beforeStart && !dayEvent.startsBeforeDay\"\n              mwlResizeHandle\n              [resizeEdges]=\"{ top: true }\">\n            </div>\n            <mwl-calendar-day-view-event\n              [dayEvent]=\"dayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              (eventClicked)=\"eventClicked.emit({event: dayEvent.event})\">\n            </mwl-calendar-day-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"dayEvent.event?.resizable?.afterEnd && !dayEvent.endsAfterDay\"\n              mwlResizeHandle\n              [resizeEdges]=\"{ bottom: true }\">\n            </div>\n          </div>\n        </div>\n        <div class=\"cal-hour\" *ngFor=\"let hour of hours; trackBy:trackByHour\" [style.minWidth.px]=\"view?.width + 70\">\n          <mwl-calendar-day-view-hour-segment\n            *ngFor=\"let segment of hour.segments; trackBy:trackByHourSegment\"\n            [style.height.px]=\"hourSegmentHeight\"\n            [segment]=\"segment\"\n            [segmentHeight]=\"hourSegmentHeight\"\n            [locale]=\"locale\"\n            [customTemplate]=\"hourSegmentTemplate\"\n            (mwlClick)=\"hourSegmentClicked.emit({date: segment.date})\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            dragActiveClass=\"cal-drag-active\"\n            (drop)=\"eventDropped($event, segment.date, false)\">\n          </mwl-calendar-day-view-hour-segment>\n        </div>\n      </div>\n    </div>\n  "
                }] }
    ];
    CalendarDayViewComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: CalendarUtils },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] },
        { type: DateAdapter }
    ]; };
    CalendarDayViewComponent.propDecorators = {
        viewDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        hourSegments: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        hourSegmentHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        dayStartHour: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        dayStartMinute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        dayEndHour: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        dayEndMinute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        eventWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        refresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        eventSnapSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tooltipTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tooltipAppendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        hourSegmentTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        eventTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        eventTitleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        eventActionsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        snapDraggedEvents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        eventClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        hourSegmentClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        eventTimesChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        beforeViewRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    return CalendarDayViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarDayViewHourSegmentComponent = /** @class */ (function () {
    function CalendarDayViewHourSegmentComponent() {
    }
    CalendarDayViewHourSegmentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-day-view-hour-segment',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\">\n      <div\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\">\n        <div class=\"cal-time\">\n          {{ segment.date | calendarDate:'dayViewHour':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight\n      }\">\n    </ng-template>\n  "
                }] }
    ];
    CalendarDayViewHourSegmentComponent.propDecorators = {
        segment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        segmentHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return CalendarDayViewHourSegmentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarDayViewEventComponent = /** @class */ (function () {
    function CalendarDayViewEventComponent() {
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    CalendarDayViewEventComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-day-view-event',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-dayEvent=\"dayEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\">\n      <div\n        class=\"cal-event\"\n        [style.backgroundColor]=\"dayEvent.event.color?.secondary\"\n        [style.borderColor]=\"dayEvent.event.color?.primary\"\n        [mwlCalendarTooltip]=\"dayEvent.event.title | calendarEventTitle:'dayTooltip':dayEvent.event\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"dayEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        (mwlClick)=\"eventClicked.emit()\">\n        <mwl-calendar-event-actions\n          [event]=\"dayEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\">\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"dayEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"day\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        dayEvent: dayEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  "
                }] }
    ];
    CalendarDayViewEventComponent.propDecorators = {
        dayEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tooltipAppendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        eventTitleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        eventActionsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tooltipTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        eventClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    return CalendarDayViewEventComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarDayModule = /** @class */ (function () {
    function CalendarDayModule() {
    }
    CalendarDayModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"],
                        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"],
                        CalendarCommonModule
                    ],
                    declarations: [
                        CalendarDayViewComponent,
                        CalendarDayViewHourSegmentComponent,
                        CalendarDayViewEventComponent
                    ],
                    exports: [
                        angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"],
                        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"],
                        CalendarDayViewComponent,
                        CalendarDayViewHourSegmentComponent,
                        CalendarDayViewEventComponent
                    ]
                },] }
    ];
    return CalendarDayModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * The main module of this library. Example usage:
 *
 * ```typescript
 * import { CalenderModule } from 'angular-calendar';
 *
 * \@NgModule({
 *   imports: [
 *     CalenderModule.forRoot()
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
var CalendarModule = /** @class */ (function () {
    /**
     * The main module of this library. Example usage:
     *
     * ```typescript
     * import { CalenderModule } from 'angular-calendar';
     *
     * @NgModule({
     *   imports: [
     *     CalenderModule.forRoot()
     *   ]
     * })
     * class MyModule {}
     * ```
     *
     */
    function CalendarModule() {
    }
    /**
     * @param {?} dateAdapter
     * @param {?=} config
     * @return {?}
     */
    CalendarModule.forRoot = /**
     * @param {?} dateAdapter
     * @param {?=} config
     * @return {?}
     */
    function (dateAdapter, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: CalendarModule,
            providers: [
                dateAdapter,
                config.eventTitleFormatter || CalendarEventTitleFormatter,
                config.dateFormatter || CalendarDateFormatter,
                config.utils || CalendarUtils
            ]
        };
    };
    CalendarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [
                        CalendarCommonModule,
                        CalendarMonthModule,
                        CalendarWeekModule,
                        CalendarDayModule
                    ],
                    exports: [
                        CalendarCommonModule,
                        CalendarMonthModule,
                        CalendarWeekModule,
                        CalendarDayModule
                    ]
                },] }
    ];
    return CalendarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jYWxlbmRhci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi91dGlsLnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvY29tbW9uL2NhbGVuZGFyLWV2ZW50LWFjdGlvbnMuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvY29tbW9uL2NhbGVuZGFyLWV2ZW50LXRpdGxlLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jYWxlbmRhci10b29sdGlwLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9kYXRlLWFkYXB0ZXJzL2RhdGUtYWRhcHRlci50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jYWxlbmRhci12aWV3LmVudW0udHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9jb21tb24vY2FsZW5kYXItcHJldmlvdXMtdmlldy5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9jb21tb24vY2FsZW5kYXItbmV4dC12aWV3LmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jYWxlbmRhci10b2RheS5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9jb21tb24vY2FsZW5kYXItYW5ndWxhci1kYXRlLWZvcm1hdHRlci5wcm92aWRlci50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jYWxlbmRhci1kYXRlLWZvcm1hdHRlci5wcm92aWRlci50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jYWxlbmRhci1kYXRlLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9jb21tb24vY2FsZW5kYXItZXZlbnQtdGl0bGUtZm9ybWF0dGVyLnByb3ZpZGVyLnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvY29tbW9uL2NhbGVuZGFyLWV2ZW50LXRpdGxlLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9jb21tb24vY2xpY2suZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvY29tbW9uL2NhbGVuZGFyLXV0aWxzLnByb3ZpZGVyLnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvY29tbW9uL2NhbGVuZGFyLW1vbWVudC1kYXRlLWZvcm1hdHRlci5wcm92aWRlci50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jYWxlbmRhci1uYXRpdmUtZGF0ZS1mb3JtYXR0ZXIucHJvdmlkZXIudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9jb21tb24vY2FsZW5kYXItZXZlbnQtdGltZXMtY2hhbmdlZC1ldmVudC5pbnRlcmZhY2UudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9jb21tb24vY2FsZW5kYXItY29tbW9uLm1vZHVsZS50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL21vbnRoL2NhbGVuZGFyLW1vbnRoLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvbW9udGgvY2FsZW5kYXItbW9udGgtdmlldy1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvbW9udGgvY2FsZW5kYXItbW9udGgtY2VsbC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9tb250aC9jYWxlbmRhci1vcGVuLWRheS1ldmVudHMuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvbW9udGgvY2FsZW5kYXItbW9udGgubW9kdWxlLnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvY29tbW9uL2NhbGVuZGFyLWRyYWctaGVscGVyLnByb3ZpZGVyLnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvY29tbW9uL2NhbGVuZGFyLXJlc2l6ZS1oZWxwZXIucHJvdmlkZXIudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy93ZWVrL2NhbGVuZGFyLXdlZWstdmlldy5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy93ZWVrL2NhbGVuZGFyLXdlZWstdmlldy1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvd2Vlay9jYWxlbmRhci13ZWVrLXZpZXctZXZlbnQuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvd2Vlay9jYWxlbmRhci13ZWVrLXZpZXctaG91ci1zZWdtZW50LmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL3dlZWsvY2FsZW5kYXItd2Vlay5tb2R1bGUudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9kYXkvY2FsZW5kYXItZGF5LXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvZGF5L2NhbGVuZGFyLWRheS12aWV3LWhvdXItc2VnbWVudC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9kYXkvY2FsZW5kYXItZGF5LXZpZXctZXZlbnQuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvZGF5L2NhbGVuZGFyLWRheS5tb2R1bGUudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9jYWxlbmRhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2FsZW5kYXJFdmVudCxcbiAgRGF5Vmlld0V2ZW50LFxuICBEYXlWaWV3SG91cixcbiAgRGF5Vmlld0hvdXJTZWdtZW50LFxuICB2YWxpZGF0ZUV2ZW50cyBhcyB2YWxpZGF0ZUV2ZW50c1dpdGhvdXRMb2csXG4gIFZpZXdQZXJpb2QsXG4gIFdlZWtEYXksXG4gIFdlZWtWaWV3QWxsRGF5RXZlbnRcbn0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi9kYXRlLWFkYXB0ZXJzL2RhdGUtYWRhcHRlcic7XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUV2ZW50cyA9IChldmVudHM6IENhbGVuZGFyRXZlbnRbXSkgPT4ge1xuICBjb25zdCB3YXJuID0gKC4uLmFyZ3MpID0+IGNvbnNvbGUud2FybignYW5ndWxhci1jYWxlbmRhcicsIC4uLmFyZ3MpO1xuICByZXR1cm4gdmFsaWRhdGVFdmVudHNXaXRob3V0TG9nKGV2ZW50cywgd2Fybik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNJbnNpZGUob3V0ZXI6IENsaWVudFJlY3QsIGlubmVyOiBDbGllbnRSZWN0KTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgTWF0aC5jZWlsKG91dGVyLmxlZnQpIDw9IE1hdGguY2VpbChpbm5lci5sZWZ0KSAmJlxuICAgIE1hdGguY2VpbChpbm5lci5sZWZ0KSA8PSBNYXRoLmNlaWwob3V0ZXIucmlnaHQpICYmXG4gICAgTWF0aC5jZWlsKG91dGVyLmxlZnQpIDw9IE1hdGguY2VpbChpbm5lci5yaWdodCkgJiZcbiAgICBNYXRoLmNlaWwoaW5uZXIucmlnaHQpIDw9IE1hdGguY2VpbChvdXRlci5yaWdodCkgJiZcbiAgICBNYXRoLmNlaWwob3V0ZXIudG9wKSA8PSBNYXRoLmNlaWwoaW5uZXIudG9wKSAmJlxuICAgIE1hdGguY2VpbChpbm5lci50b3ApIDw9IE1hdGguY2VpbChvdXRlci5ib3R0b20pICYmXG4gICAgTWF0aC5jZWlsKG91dGVyLnRvcCkgPD0gTWF0aC5jZWlsKGlubmVyLmJvdHRvbSkgJiZcbiAgICBNYXRoLmNlaWwoaW5uZXIuYm90dG9tKSA8PSBNYXRoLmNlaWwob3V0ZXIuYm90dG9tKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmRUb05lYXJlc3QoYW1vdW50OiBudW1iZXIsIHByZWNpc2lvbjogbnVtYmVyKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKGFtb3VudCAvIHByZWNpc2lvbikgKiBwcmVjaXNpb247XG59XG5cbmV4cG9ydCBjb25zdCB0cmFja0J5RXZlbnRJZCA9IChpbmRleDogbnVtYmVyLCBldmVudDogQ2FsZW5kYXJFdmVudCkgPT5cbiAgZXZlbnQuaWQgPyBldmVudC5pZCA6IGV2ZW50O1xuXG5leHBvcnQgY29uc3QgdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlID0gKGluZGV4OiBudW1iZXIsIGRheTogV2Vla0RheSkgPT5cbiAgZGF5LmRhdGUudG9JU09TdHJpbmcoKTtcblxuZXhwb3J0IGNvbnN0IHRyYWNrQnlJbmRleCA9IChpbmRleDogbnVtYmVyKSA9PiBpbmRleDtcblxuZXhwb3J0IGNvbnN0IHRyYWNrQnlIb3VyU2VnbWVudCA9IChcbiAgaW5kZXg6IG51bWJlcixcbiAgc2VnbWVudDogRGF5Vmlld0hvdXJTZWdtZW50XG4pID0+IHNlZ21lbnQuZGF0ZS50b0lTT1N0cmluZygpO1xuXG5leHBvcnQgY29uc3QgdHJhY2tCeUhvdXIgPSAoaW5kZXg6IG51bWJlciwgaG91cjogRGF5Vmlld0hvdXIpID0+XG4gIGhvdXIuc2VnbWVudHNbMF0uZGF0ZS50b0lTT1N0cmluZygpO1xuXG5leHBvcnQgY29uc3QgdHJhY2tCeURheU9yV2Vla0V2ZW50ID0gKFxuICBpbmRleDogbnVtYmVyLFxuICB3ZWVrRXZlbnQ6IFdlZWtWaWV3QWxsRGF5RXZlbnQgfCBEYXlWaWV3RXZlbnRcbikgPT4gKHdlZWtFdmVudC5ldmVudC5pZCA/IHdlZWtFdmVudC5ldmVudC5pZCA6IHdlZWtFdmVudC5ldmVudCk7XG5cbmNvbnN0IE1JTlVURVNfSU5fSE9VUiA9IDYwO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWludXRlc01vdmVkKFxuICBtb3ZlZFk6IG51bWJlcixcbiAgaG91clNlZ21lbnRzOiBudW1iZXIsXG4gIGhvdXJTZWdtZW50SGVpZ2h0OiBudW1iZXIsXG4gIGV2ZW50U25hcFNpemU6IG51bWJlclxuKTogbnVtYmVyIHtcbiAgY29uc3QgZHJhZ2dlZEluUGl4ZWxzU25hcFNpemUgPSByb3VuZFRvTmVhcmVzdChcbiAgICBtb3ZlZFksXG4gICAgZXZlbnRTbmFwU2l6ZSB8fCBob3VyU2VnbWVudEhlaWdodFxuICApO1xuICBjb25zdCBwaXhlbEFtb3VudEluTWludXRlcyA9XG4gICAgTUlOVVRFU19JTl9IT1VSIC8gKGhvdXJTZWdtZW50cyAqIGhvdXJTZWdtZW50SGVpZ2h0KTtcbiAgcmV0dXJuIGRyYWdnZWRJblBpeGVsc1NuYXBTaXplICogcGl4ZWxBbW91bnRJbk1pbnV0ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNaW5pbXVtRXZlbnRIZWlnaHRJbk1pbnV0ZXMoXG4gIGhvdXJTZWdtZW50czogbnVtYmVyLFxuICBob3VyU2VnbWVudEhlaWdodDogbnVtYmVyXG4pIHtcbiAgcmV0dXJuIChNSU5VVEVTX0lOX0hPVVIgLyAoaG91clNlZ21lbnRzICogaG91clNlZ21lbnRIZWlnaHQpKSAqIDMwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdEV2ZW50RW5kKFxuICBkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXIsXG4gIGV2ZW50OiBDYWxlbmRhckV2ZW50LFxuICBtaW5pbXVtTWludXRlczogbnVtYmVyXG4pOiBEYXRlIHtcbiAgaWYgKGV2ZW50LmVuZCkge1xuICAgIHJldHVybiBldmVudC5lbmQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRhdGVBZGFwdGVyLmFkZE1pbnV0ZXMoZXZlbnQuc3RhcnQsIG1pbmltdW1NaW51dGVzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF5c1dpdGhFeGNsdXNpb25zKFxuICBkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXIsXG4gIGRhdGU6IERhdGUsXG4gIGRheXM6IG51bWJlcixcbiAgZXhjbHVkZWQ6IG51bWJlcltdXG4pOiBEYXRlIHtcbiAgbGV0IGRheXNDb3VudGVyID0gMDtcbiAgbGV0IGRheXNUb0FkZCA9IDA7XG4gIGNvbnN0IGNoYW5nZURheXMgPSBkYXlzIDwgMCA/IGRhdGVBZGFwdGVyLnN1YkRheXMgOiBkYXRlQWRhcHRlci5hZGREYXlzO1xuICBsZXQgcmVzdWx0ID0gZGF0ZTtcbiAgd2hpbGUgKGRheXNUb0FkZCA8PSBNYXRoLmFicyhkYXlzKSkge1xuICAgIHJlc3VsdCA9IGNoYW5nZURheXMoZGF0ZSwgZGF5c0NvdW50ZXIpO1xuICAgIGNvbnN0IGRheSA9IGRhdGVBZGFwdGVyLmdldERheShyZXN1bHQpO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGRheSkgPT09IC0xKSB7XG4gICAgICBkYXlzVG9BZGQrKztcbiAgICB9XG4gICAgZGF5c0NvdW50ZXIrKztcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEcmFnZ2VkV2l0aGluUGVyaW9kKFxuICBuZXdTdGFydDogRGF0ZSxcbiAgbmV3RW5kOiBEYXRlLFxuICBwZXJpb2Q6IFZpZXdQZXJpb2Rcbik6IGJvb2xlYW4ge1xuICBjb25zdCBlbmQgPSBuZXdFbmQgfHwgbmV3U3RhcnQ7XG4gIHJldHVybiAoXG4gICAgKHBlcmlvZC5zdGFydCA8PSBuZXdTdGFydCAmJiBuZXdTdGFydCA8PSBwZXJpb2QuZW5kKSB8fFxuICAgIChwZXJpb2Quc3RhcnQgPD0gZW5kICYmIGVuZCA8PSBwZXJpb2QuZW5kKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkRmlyZURyb3BwZWRFdmVudChcbiAgZHJvcEV2ZW50OiB7IGRyb3BEYXRhPzogeyBldmVudD86IENhbGVuZGFyRXZlbnQ7IGNhbGVuZGFySWQ/OiBzeW1ib2wgfSB9LFxuICBkYXRlOiBEYXRlLFxuICBhbGxEYXk6IGJvb2xlYW4sXG4gIGNhbGVuZGFySWQ6IHN5bWJvbFxuKSB7XG4gIHJldHVybiAoXG4gICAgZHJvcEV2ZW50LmRyb3BEYXRhICYmXG4gICAgZHJvcEV2ZW50LmRyb3BEYXRhLmV2ZW50ICYmXG4gICAgKGRyb3BFdmVudC5kcm9wRGF0YS5jYWxlbmRhcklkICE9PSBjYWxlbmRhcklkIHx8XG4gICAgICAoZHJvcEV2ZW50LmRyb3BEYXRhLmV2ZW50LmFsbERheSAmJiAhYWxsRGF5KSB8fFxuICAgICAgKCFkcm9wRXZlbnQuZHJvcERhdGEuZXZlbnQuYWxsRGF5ICYmIGFsbERheSkpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrVmlld1BlcmlvZChcbiAgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyLFxuICB2aWV3RGF0ZTogRGF0ZSxcbiAgd2Vla1N0YXJ0c09uOiBudW1iZXIsXG4gIGV4Y2x1ZGVkOiBudW1iZXJbXSA9IFtdLFxuICBkYXlzSW5XZWVrPzogbnVtYmVyXG4pOiB7IHZpZXdTdGFydDogRGF0ZTsgdmlld0VuZDogRGF0ZSB9IHtcbiAgbGV0IHZpZXdTdGFydCA9IGRheXNJbldlZWtcbiAgICA/IGRhdGVBZGFwdGVyLnN0YXJ0T2ZEYXkodmlld0RhdGUpXG4gICAgOiBkYXRlQWRhcHRlci5zdGFydE9mV2Vlayh2aWV3RGF0ZSwgeyB3ZWVrU3RhcnRzT24gfSk7XG4gIGlmIChleGNsdWRlZC5pbmRleE9mKGRhdGVBZGFwdGVyLmdldERheSh2aWV3U3RhcnQpKSA+IC0xKSB7XG4gICAgdmlld1N0YXJ0ID0gZGF0ZUFkYXB0ZXIuc3ViRGF5cyhcbiAgICAgIGFkZERheXNXaXRoRXhjbHVzaW9ucyhkYXRlQWRhcHRlciwgdmlld1N0YXJ0LCAxLCBleGNsdWRlZCksXG4gICAgICAxXG4gICAgKTtcbiAgfVxuICBpZiAoZGF5c0luV2Vlaykge1xuICAgIGNvbnN0IHZpZXdFbmQgPSBkYXRlQWRhcHRlci5lbmRPZkRheShcbiAgICAgIGFkZERheXNXaXRoRXhjbHVzaW9ucyhkYXRlQWRhcHRlciwgdmlld1N0YXJ0LCBkYXlzSW5XZWVrIC0gMSwgZXhjbHVkZWQpXG4gICAgKTtcbiAgICByZXR1cm4geyB2aWV3U3RhcnQsIHZpZXdFbmQgfTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgdmlld0VuZCA9IGRhdGVBZGFwdGVyLmVuZE9mV2Vlayh2aWV3RGF0ZSwgeyB3ZWVrU3RhcnRzT24gfSk7XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2YoZGF0ZUFkYXB0ZXIuZ2V0RGF5KHZpZXdFbmQpKSA+IC0xKSB7XG4gICAgICB2aWV3RW5kID0gZGF0ZUFkYXB0ZXIuYWRkRGF5cyhcbiAgICAgICAgYWRkRGF5c1dpdGhFeGNsdXNpb25zKGRhdGVBZGFwdGVyLCB2aWV3RW5kLCAtMSwgZXhjbHVkZWQpLFxuICAgICAgICAxXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4geyB2aWV3U3RhcnQsIHZpZXdFbmQgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQgfSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyB0cmFja0J5SW5kZXggfSBmcm9tICcuL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItZXZlbnQtYWN0aW9ucycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICAjZGVmYXVsdFRlbXBsYXRlXG4gICAgICBsZXQtZXZlbnQ9XCJldmVudFwiPlxuICAgICAgPHNwYW4gKm5nSWY9XCJldmVudC5hY3Rpb25zXCIgY2xhc3M9XCJjYWwtZXZlbnQtYWN0aW9uc1wiPlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzPVwiY2FsLWV2ZW50LWFjdGlvblwiXG4gICAgICAgICAgaHJlZj1cImphdmFzY3JpcHQ6O1wiXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGFjdGlvbiBvZiBldmVudC5hY3Rpb25zOyB0cmFja0J5OnRyYWNrQnlJbmRleFwiXG4gICAgICAgICAgKG13bENsaWNrKT1cImFjdGlvbi5vbkNsaWNrKHtldmVudDogZXZlbnR9KVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiYWN0aW9uLmNzc0NsYXNzXCJcbiAgICAgICAgICBbaW5uZXJIdG1sXT1cImFjdGlvbi5sYWJlbFwiPlxuICAgICAgICA8L2E+XG4gICAgICA8L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICBldmVudDogZXZlbnRcbiAgICAgIH1cIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRXZlbnRBY3Rpb25zQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG5cbiAgQElucHV0KClcbiAgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgdHJhY2tCeUluZGV4ID0gdHJhY2tCeUluZGV4O1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQgfSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ213bC1jYWxlbmRhci1ldmVudC10aXRsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICAjZGVmYXVsdFRlbXBsYXRlXG4gICAgICBsZXQtZXZlbnQ9XCJldmVudFwiXG4gICAgICBsZXQtdmlldz1cInZpZXdcIj5cbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzPVwiY2FsLWV2ZW50LXRpdGxlXCJcbiAgICAgICAgW2lubmVySFRNTF09XCJldmVudC50aXRsZSB8IGNhbGVuZGFyRXZlbnRUaXRsZTp2aWV3OmV2ZW50XCI+XG4gICAgICA8L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgIHZpZXc6IHZpZXdcbiAgICAgIH1cIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRXZlbnRUaXRsZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuXG4gIEBJbnB1dCgpXG4gIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHZpZXc6IHN0cmluZztcbn1cbiIsImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgQ29tcG9uZW50LFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXQsXG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0b3IsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgRWxlbWVudFJlZixcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgSW5qZWN0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUGxhY2VtZW50QXJyYXksIHBvc2l0aW9uRWxlbWVudHMgfSBmcm9tICdwb3NpdGlvbmluZyc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50IH0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItdG9vbHRpcC13aW5kb3cnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgI2RlZmF1bHRUZW1wbGF0ZVxuICAgICAgbGV0LWNvbnRlbnRzPVwiY29udGVudHNcIlxuICAgICAgbGV0LXBsYWNlbWVudD1cInBsYWNlbWVudFwiXG4gICAgICBsZXQtZXZlbnQ9XCJldmVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbC10b29sdGlwXCIgW25nQ2xhc3NdPVwiJ2NhbC10b29sdGlwLScgKyBwbGFjZW1lbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbC10b29sdGlwLWFycm93XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtdG9vbHRpcC1pbm5lclwiIFtpbm5lckh0bWxdPVwiY29udGVudHNcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgY29udGVudHM6IGNvbnRlbnRzLFxuICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgICAgZXZlbnQ6IGV2ZW50XG4gICAgICB9XCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhclRvb2x0aXBXaW5kb3dDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBjb250ZW50czogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHBsYWNlbWVudDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuXG4gIEBJbnB1dCgpXG4gIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXdsQ2FsZW5kYXJUb29sdGlwXSdcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KCdtd2xDYWxlbmRhclRvb2x0aXAnKVxuICBjb250ZW50czogc3RyaW5nOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLWlucHV0LXJlbmFtZVxuXG4gIEBJbnB1dCgndG9vbHRpcFBsYWNlbWVudCcpXG4gIHBsYWNlbWVudDogUGxhY2VtZW50QXJyYXkgPSAnYXV0byc7IC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8taW5wdXQtcmVuYW1lXG5cbiAgQElucHV0KCd0b29sdGlwVGVtcGxhdGUnKVxuICBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjsgLy8gdHNsaW50OmRpc2FibGUtbGluZSBuby1pbnB1dC1yZW5hbWVcblxuICBASW5wdXQoJ3Rvb2x0aXBFdmVudCcpXG4gIGV2ZW50OiBDYWxlbmRhckV2ZW50OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLWlucHV0LXJlbmFtZVxuXG4gIEBJbnB1dCgndG9vbHRpcEFwcGVuZFRvQm9keScpXG4gIGFwcGVuZFRvQm9keTogYm9vbGVhbjsgLy8gdHNsaW50OmRpc2FibGUtbGluZSBuby1pbnB1dC1yZW5hbWVcblxuICBwcml2YXRlIHRvb2x0aXBGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PENhbGVuZGFyVG9vbHRpcFdpbmRvd0NvbXBvbmVudD47XG4gIHByaXZhdGUgdG9vbHRpcFJlZjogQ29tcG9uZW50UmVmPENhbGVuZGFyVG9vbHRpcFdpbmRvd0NvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudCAvL3RzbGludDpkaXNhYmxlLWxpbmVcbiAgKSB7XG4gICAgdGhpcy50b29sdGlwRmFjdG9yeSA9IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgIENhbGVuZGFyVG9vbHRpcFdpbmRvd0NvbXBvbmVudFxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICBvbk1vdXNlT3ZlcigpOiB2b2lkIHtcbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBvbk1vdXNlT3V0KCk6IHZvaWQge1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy50b29sdGlwUmVmICYmIHRoaXMuY29udGVudHMpIHtcbiAgICAgIHRoaXMudG9vbHRpcFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoXG4gICAgICAgIHRoaXMudG9vbHRpcEZhY3RvcnksXG4gICAgICAgIDAsXG4gICAgICAgIHRoaXMuaW5qZWN0b3IsXG4gICAgICAgIFtdXG4gICAgICApO1xuICAgICAgdGhpcy50b29sdGlwUmVmLmluc3RhbmNlLmNvbnRlbnRzID0gdGhpcy5jb250ZW50cztcbiAgICAgIHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS5jdXN0b21UZW1wbGF0ZSA9IHRoaXMuY3VzdG9tVGVtcGxhdGU7XG4gICAgICB0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2UuZXZlbnQgPSB0aGlzLmV2ZW50O1xuICAgICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnRvb2x0aXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLnBvc2l0aW9uVG9vbHRpcCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoaWRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRvb2x0aXBSZWYpIHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5yZW1vdmUoXG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5pbmRleE9mKHRoaXMudG9vbHRpcFJlZi5ob3N0VmlldylcbiAgICAgICk7XG4gICAgICB0aGlzLnRvb2x0aXBSZWYgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcG9zaXRpb25Ub29sdGlwKHByZXZpb3VzUG9zaXRpb24/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50b29sdGlwUmVmKSB7XG4gICAgICB0aGlzLnRvb2x0aXBSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy50b29sdGlwUmVmLmluc3RhbmNlLnBsYWNlbWVudCA9IHBvc2l0aW9uRWxlbWVudHMoXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLnRvb2x0aXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSxcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQsXG4gICAgICAgIHRoaXMuYXBwZW5kVG9Cb2R5XG4gICAgICApO1xuICAgICAgLy8ga2VlcCByZS1wb3NpdGlvbmluZyB0aGUgdG9vbHRpcCB1bnRpbCB0aGUgYXJyb3cgcG9zaXRpb24gZG9lc24ndCBtYWtlIGEgZGlmZmVyZW5jZVxuICAgICAgaWYgKHByZXZpb3VzUG9zaXRpb24gIT09IHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS5wbGFjZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvblRvb2x0aXAodGhpcy50b29sdGlwUmVmLmluc3RhbmNlLnBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRlQWRhcHRlciBhcyBCYXNlRGF0ZUFkYXB0ZXIgfSBmcm9tICdjYWxlbmRhci11dGlscy9kYXRlLWFkYXB0ZXJzL2RhdGUtYWRhcHRlcic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEYXRlQWRhcHRlciBpbXBsZW1lbnRzIEJhc2VEYXRlQWRhcHRlciB7XG4gIGFic3RyYWN0IGFkZFdlZWtzKGRhdGU6IERhdGUgfCBzdHJpbmcgfCBudW1iZXIsIGFtb3VudDogbnVtYmVyKTogRGF0ZTtcblxuICBhYnN0cmFjdCBhZGRNb250aHMoZGF0ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlciwgYW1vdW50OiBudW1iZXIpOiBEYXRlO1xuXG4gIGFic3RyYWN0IHN1YkRheXMoZGF0ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlciwgYW1vdW50OiBudW1iZXIpOiBEYXRlO1xuXG4gIGFic3RyYWN0IHN1YldlZWtzKGRhdGU6IERhdGUgfCBzdHJpbmcgfCBudW1iZXIsIGFtb3VudDogbnVtYmVyKTogRGF0ZTtcblxuICBhYnN0cmFjdCBzdWJNb250aHMoZGF0ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlciwgYW1vdW50OiBudW1iZXIpOiBEYXRlO1xuXG4gIGFic3RyYWN0IGdldElTT1dlZWsoZGF0ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlcik6IG51bWJlcjtcblxuICBhYnN0cmFjdCBzZXREYXRlKGRhdGU6IERhdGUgfCBzdHJpbmcgfCBudW1iZXIsIGRheU9mTW9udGg6IG51bWJlcik6IERhdGU7XG5cbiAgYWJzdHJhY3Qgc2V0TW9udGgoZGF0ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlciwgbW9udGg6IG51bWJlcik6IERhdGU7XG5cbiAgYWJzdHJhY3Qgc2V0WWVhcihkYXRlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyLCB5ZWFyOiBudW1iZXIpOiBEYXRlO1xuXG4gIGFic3RyYWN0IGdldERhdGUoZGF0ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlcik6IG51bWJlcjtcblxuICBhYnN0cmFjdCBnZXRNb250aChkYXRlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyO1xuXG4gIGFic3RyYWN0IGdldFllYXIoZGF0ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlcik6IG51bWJlcjtcblxuICBhYnN0cmFjdCBhZGREYXlzKGRhdGU6IERhdGUgfCBzdHJpbmcgfCBudW1iZXIsIGFtb3VudDogbnVtYmVyKTogRGF0ZTtcblxuICBhYnN0cmFjdCBhZGRIb3VycyhkYXRlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyLCBhbW91bnQ6IG51bWJlcik6IERhdGU7XG5cbiAgYWJzdHJhY3QgYWRkTWludXRlcyhkYXRlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyLCBhbW91bnQ6IG51bWJlcik6IERhdGU7XG5cbiAgYWJzdHJhY3QgYWRkU2Vjb25kcyhkYXRlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyLCBhbW91bnQ6IG51bWJlcik6IERhdGU7XG5cbiAgYWJzdHJhY3QgZGlmZmVyZW5jZUluRGF5cyhcbiAgICBkYXRlTGVmdDogRGF0ZSB8IHN0cmluZyB8IG51bWJlcixcbiAgICBkYXRlUmlnaHQ6IERhdGUgfCBzdHJpbmcgfCBudW1iZXJcbiAgKTogbnVtYmVyO1xuXG4gIGFic3RyYWN0IGRpZmZlcmVuY2VJbk1pbnV0ZXMoXG4gICAgZGF0ZUxlZnQ6IERhdGUgfCBzdHJpbmcgfCBudW1iZXIsXG4gICAgZGF0ZVJpZ2h0OiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyXG4gICk6IG51bWJlcjtcblxuICBhYnN0cmFjdCBkaWZmZXJlbmNlSW5TZWNvbmRzKFxuICAgIGRhdGVMZWZ0OiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyLFxuICAgIGRhdGVSaWdodDogRGF0ZSB8IHN0cmluZyB8IG51bWJlclxuICApOiBudW1iZXI7XG5cbiAgYWJzdHJhY3QgZW5kT2ZEYXkoZGF0ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlcik6IERhdGU7XG5cbiAgYWJzdHJhY3QgZW5kT2ZNb250aChkYXRlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyKTogRGF0ZTtcblxuICBhYnN0cmFjdCBlbmRPZldlZWsoXG4gICAgZGF0ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlcixcbiAgICBvcHRpb25zPzogeyB3ZWVrU3RhcnRzT24/OiBudW1iZXIgfVxuICApOiBEYXRlO1xuXG4gIGFic3RyYWN0IGdldERheShkYXRlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyO1xuXG4gIGFic3RyYWN0IGlzU2FtZURheShcbiAgICBkYXRlTGVmdDogRGF0ZSB8IHN0cmluZyB8IG51bWJlcixcbiAgICBkYXRlUmlnaHQ6IERhdGUgfCBzdHJpbmcgfCBudW1iZXJcbiAgKTogYm9vbGVhbjtcblxuICBhYnN0cmFjdCBpc1NhbWVNb250aChcbiAgICBkYXRlTGVmdDogRGF0ZSB8IHN0cmluZyB8IG51bWJlcixcbiAgICBkYXRlUmlnaHQ6IERhdGUgfCBzdHJpbmcgfCBudW1iZXJcbiAgKTogYm9vbGVhbjtcblxuICBhYnN0cmFjdCBpc1NhbWVTZWNvbmQoXG4gICAgZGF0ZUxlZnQ6IERhdGUgfCBzdHJpbmcgfCBudW1iZXIsXG4gICAgZGF0ZVJpZ2h0OiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyXG4gICk6IGJvb2xlYW47XG5cbiAgYWJzdHJhY3QgbWF4KC4uLmRhdGVzOiBBcnJheTxEYXRlIHwgc3RyaW5nIHwgbnVtYmVyPik6IERhdGU7XG5cbiAgYWJzdHJhY3Qgc2V0SG91cnMoZGF0ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlciwgaG91cnM6IG51bWJlcik6IERhdGU7XG5cbiAgYWJzdHJhY3Qgc2V0TWludXRlcyhkYXRlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyLCBtaW51dGVzOiBudW1iZXIpOiBEYXRlO1xuXG4gIGFic3RyYWN0IHN0YXJ0T2ZEYXkoZGF0ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlcik6IERhdGU7XG5cbiAgYWJzdHJhY3Qgc3RhcnRPZk1pbnV0ZShkYXRlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyKTogRGF0ZTtcblxuICBhYnN0cmFjdCBzdGFydE9mTW9udGgoZGF0ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlcik6IERhdGU7XG5cbiAgYWJzdHJhY3Qgc3RhcnRPZldlZWsoXG4gICAgZGF0ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlcixcbiAgICBvcHRpb25zPzogeyB3ZWVrU3RhcnRzT24/OiBudW1iZXIgfVxuICApOiBEYXRlO1xuXG4gIGFic3RyYWN0IGdldEhvdXJzKGRhdGU6IERhdGUgfCBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXI7XG5cbiAgYWJzdHJhY3QgZ2V0TWludXRlcyhkYXRlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyO1xufVxuIiwiZXhwb3J0IGVudW0gQ2FsZW5kYXJWaWV3IHtcbiAgTW9udGggPSAnbW9udGgnLFxuICBXZWVrID0gJ3dlZWsnLFxuICBEYXkgPSAnZGF5J1xufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vZGF0ZS1hZGFwdGVycy9kYXRlLWFkYXB0ZXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3IH0gZnJvbSAnLi9jYWxlbmRhci12aWV3LmVudW0nO1xuaW1wb3J0IHsgYWRkRGF5c1dpdGhFeGNsdXNpb25zIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHZpZXcgZGF0ZSB0byB0aGUgcHJldmlvdXMgdmlldy4gRm9yIGV4YW1wbGU6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogPGJ1dHRvblxuICogIG13bENhbGVuZGFyUHJldmlvdXNWaWV3XG4gKiAgWyh2aWV3RGF0ZSldPVwidmlld0RhdGVcIlxuICogIFt2aWV3XT1cInZpZXdcIj5cbiAqICBQcmV2aW91c1xuICogPC9idXR0b24+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bENhbGVuZGFyUHJldmlvdXNWaWV3XSdcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJQcmV2aW91c1ZpZXdEaXJlY3RpdmUge1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmlld1xuICAgKi9cbiAgQElucHV0KClcbiAgdmlldzogQ2FsZW5kYXJWaWV3O1xuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2aWV3IGRhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHZpZXdEYXRlOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBEYXlzIHRvIHNraXAgd2hlbiBnb2luZyBiYWNrIGJ5IDEgZGF5XG4gICAqL1xuICBASW5wdXQoKVxuICBleGNsdWRlRGF5czogbnVtYmVyW10gPSBbXTtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBkYXlzIGluIGEgd2Vlay4gSWYgc2V0IHdpbGwgc3VidHJhY3QgdGhpcyBhbW91bnQgb2YgZGF5cyBpbnN0ZWFkIG9mIDEgd2Vla1xuICAgKi9cbiAgQElucHV0KClcbiAgZGF5c0luV2VlazogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdmlldyBkYXRlIGlzIGNoYW5nZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICB2aWV3RGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgY29uc3Qgc3ViRm46IGFueSA9IHtcbiAgICAgIGRheTogdGhpcy5kYXRlQWRhcHRlci5zdWJEYXlzLFxuICAgICAgd2VlazogdGhpcy5kYXRlQWRhcHRlci5zdWJXZWVrcyxcbiAgICAgIG1vbnRoOiB0aGlzLmRhdGVBZGFwdGVyLnN1Yk1vbnRoc1xuICAgIH1bdGhpcy52aWV3XTtcblxuICAgIGlmICh0aGlzLnZpZXcgPT09IENhbGVuZGFyVmlldy5EYXkpIHtcbiAgICAgIHRoaXMudmlld0RhdGVDaGFuZ2UuZW1pdChcbiAgICAgICAgYWRkRGF5c1dpdGhFeGNsdXNpb25zKFxuICAgICAgICAgIHRoaXMuZGF0ZUFkYXB0ZXIsXG4gICAgICAgICAgdGhpcy52aWV3RGF0ZSxcbiAgICAgICAgICAtMSxcbiAgICAgICAgICB0aGlzLmV4Y2x1ZGVEYXlzXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZpZXcgPT09IENhbGVuZGFyVmlldy5XZWVrICYmIHRoaXMuZGF5c0luV2Vlaykge1xuICAgICAgdGhpcy52aWV3RGF0ZUNoYW5nZS5lbWl0KFxuICAgICAgICBhZGREYXlzV2l0aEV4Y2x1c2lvbnMoXG4gICAgICAgICAgdGhpcy5kYXRlQWRhcHRlcixcbiAgICAgICAgICB0aGlzLnZpZXdEYXRlLFxuICAgICAgICAgIC10aGlzLmRheXNJbldlZWssXG4gICAgICAgICAgdGhpcy5leGNsdWRlRGF5c1xuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQoc3ViRm4odGhpcy52aWV3RGF0ZSwgMSkpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vZGF0ZS1hZGFwdGVycy9kYXRlLWFkYXB0ZXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3IH0gZnJvbSAnLi9jYWxlbmRhci12aWV3LmVudW0nO1xuaW1wb3J0IHsgYWRkRGF5c1dpdGhFeGNsdXNpb25zIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHZpZXcgZGF0ZSB0byB0aGUgbmV4dCB2aWV3LiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiA8YnV0dG9uXG4gKiAgbXdsQ2FsZW5kYXJOZXh0Vmlld1xuICogIFsodmlld0RhdGUpXT1cInZpZXdEYXRlXCJcbiAqICBbdmlld109XCJ2aWV3XCI+XG4gKiAgTmV4dFxuICogPC9idXR0b24+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bENhbGVuZGFyTmV4dFZpZXddJ1xufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck5leHRWaWV3RGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZpZXdcbiAgICovXG4gIEBJbnB1dCgpXG4gIHZpZXc6IENhbGVuZGFyVmlldztcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmlldyBkYXRlXG4gICAqL1xuICBASW5wdXQoKVxuICB2aWV3RGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogRGF5cyB0byBza2lwIHdoZW4gZ29pbmcgZm9yd2FyZCBieSAxIGRheVxuICAgKi9cbiAgQElucHV0KClcbiAgZXhjbHVkZURheXM6IG51bWJlcltdID0gW107XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgZGF5cyBpbiBhIHdlZWsuIElmIHNldCB3aWxsIGFkZCB0aGlzIGFtb3VudCBvZiBkYXlzIGluc3RlYWQgb2YgMSB3ZWVrXG4gICAqL1xuICBASW5wdXQoKVxuICBkYXlzSW5XZWVrOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB2aWV3IGRhdGUgaXMgY2hhbmdlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHZpZXdEYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICBjb25zdCBhZGRGbjogYW55ID0ge1xuICAgICAgZGF5OiB0aGlzLmRhdGVBZGFwdGVyLmFkZERheXMsXG4gICAgICB3ZWVrOiB0aGlzLmRhdGVBZGFwdGVyLmFkZFdlZWtzLFxuICAgICAgbW9udGg6IHRoaXMuZGF0ZUFkYXB0ZXIuYWRkTW9udGhzXG4gICAgfVt0aGlzLnZpZXddO1xuXG4gICAgaWYgKHRoaXMudmlldyA9PT0gQ2FsZW5kYXJWaWV3LkRheSkge1xuICAgICAgdGhpcy52aWV3RGF0ZUNoYW5nZS5lbWl0KFxuICAgICAgICBhZGREYXlzV2l0aEV4Y2x1c2lvbnMoXG4gICAgICAgICAgdGhpcy5kYXRlQWRhcHRlcixcbiAgICAgICAgICB0aGlzLnZpZXdEYXRlLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgdGhpcy5leGNsdWRlRGF5c1xuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodGhpcy52aWV3ID09PSBDYWxlbmRhclZpZXcuV2VlayAmJiB0aGlzLmRheXNJbldlZWspIHtcbiAgICAgIHRoaXMudmlld0RhdGVDaGFuZ2UuZW1pdChcbiAgICAgICAgYWRkRGF5c1dpdGhFeGNsdXNpb25zKFxuICAgICAgICAgIHRoaXMuZGF0ZUFkYXB0ZXIsXG4gICAgICAgICAgdGhpcy52aWV3RGF0ZSxcbiAgICAgICAgICB0aGlzLmRheXNJbldlZWssXG4gICAgICAgICAgdGhpcy5leGNsdWRlRGF5c1xuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQoYWRkRm4odGhpcy52aWV3RGF0ZSwgMSkpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vZGF0ZS1hZGFwdGVycy9kYXRlLWFkYXB0ZXInO1xuXG4vKipcbiAqIENoYW5nZSB0aGUgdmlldyBkYXRlIHRvIHRoZSBjdXJyZW50IGRheS4gRm9yIGV4YW1wbGU6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogPGJ1dHRvblxuICogIG13bENhbGVuZGFyVG9kYXlcbiAqICBbKHZpZXdEYXRlKV09XCJ2aWV3RGF0ZVwiPlxuICogIFRvZGF5XG4gKiA8L2J1dHRvbj5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXdsQ2FsZW5kYXJUb2RheV0nXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyVG9kYXlEaXJlY3RpdmUge1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmlldyBkYXRlXG4gICAqL1xuICBASW5wdXQoKVxuICB2aWV3RGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHZpZXcgZGF0ZSBpcyBjaGFuZ2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgdmlld0RhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcikge31cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMudmlld0RhdGVDaGFuZ2UuZW1pdCh0aGlzLmRhdGVBZGFwdGVyLnN0YXJ0T2ZEYXkobmV3IERhdGUoKSkpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDYWxlbmRhckRhdGVGb3JtYXR0ZXJJbnRlcmZhY2UsXG4gIERhdGVGb3JtYXR0ZXJQYXJhbXNcbn0gZnJvbSAnLi9jYWxlbmRhci1kYXRlLWZvcm1hdHRlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gJy4uLy4uL2RhdGUtYWRhcHRlcnMvZGF0ZS1hZGFwdGVyJztcbmltcG9ydCB7IGdldFdlZWtWaWV3UGVyaW9kIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBUaGlzIHdpbGwgdXNlIHRoZSBhbmd1bGFyIGRhdGUgcGlwZSB0byBkbyBhbGwgZGF0ZSBmb3JtYXR0aW5nLiBJdCBpcyB0aGUgZGVmYXVsdCBkYXRlIGZvcm1hdHRlciB1c2VkIGJ5IHRoZSBjYWxlbmRhci5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQW5ndWxhckRhdGVGb3JtYXR0ZXJcbiAgaW1wbGVtZW50cyBDYWxlbmRhckRhdGVGb3JtYXR0ZXJJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyKSB7fVxuXG4gIC8qKlxuICAgKiBUaGUgbW9udGggdmlldyBoZWFkZXIgd2VlayBkYXkgbGFiZWxzXG4gICAqL1xuICBwdWJsaWMgbW9udGhWaWV3Q29sdW1uSGVhZGVyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiBmb3JtYXREYXRlKGRhdGUsICdFRUVFJywgbG9jYWxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbW9udGggdmlldyBjZWxsIGRheSBudW1iZXJcbiAgICovXG4gIHB1YmxpYyBtb250aFZpZXdEYXlOdW1iZXIoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZvcm1hdERhdGUoZGF0ZSwgJ2QnLCBsb2NhbGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBtb250aCB2aWV3IHRpdGxlXG4gICAqL1xuICBwdWJsaWMgbW9udGhWaWV3VGl0bGUoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZvcm1hdERhdGUoZGF0ZSwgJ0xMTEwgeScsIGxvY2FsZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHdlZWsgdmlldyBoZWFkZXIgd2VlayBkYXkgbGFiZWxzXG4gICAqL1xuICBwdWJsaWMgd2Vla1ZpZXdDb2x1bW5IZWFkZXIoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZvcm1hdERhdGUoZGF0ZSwgJ0VFRUUnLCBsb2NhbGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB3ZWVrIHZpZXcgc3ViIGhlYWRlciBkYXkgYW5kIG1vbnRoIGxhYmVsc1xuICAgKi9cbiAgcHVibGljIHdlZWtWaWV3Q29sdW1uU3ViSGVhZGVyKHtcbiAgICBkYXRlLFxuICAgIGxvY2FsZVxuICB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZm9ybWF0RGF0ZShkYXRlLCAnTU1NIGQnLCBsb2NhbGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB3ZWVrIHZpZXcgdGl0bGVcbiAgICovXG4gIHB1YmxpYyB3ZWVrVmlld1RpdGxlKHtcbiAgICBkYXRlLFxuICAgIGxvY2FsZSxcbiAgICB3ZWVrU3RhcnRzT24sXG4gICAgZXhjbHVkZURheXMsXG4gICAgZGF5c0luV2Vla1xuICB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICBjb25zdCB7IHZpZXdTdGFydCwgdmlld0VuZCB9ID0gZ2V0V2Vla1ZpZXdQZXJpb2QoXG4gICAgICB0aGlzLmRhdGVBZGFwdGVyLFxuICAgICAgZGF0ZSxcbiAgICAgIHdlZWtTdGFydHNPbixcbiAgICAgIGV4Y2x1ZGVEYXlzLFxuICAgICAgZGF5c0luV2Vla1xuICAgICk7XG4gICAgY29uc3QgZm9ybWF0ID0gKGRhdGVUb0Zvcm1hdDogRGF0ZSwgc2hvd1llYXI6IGJvb2xlYW4pID0+XG4gICAgICBmb3JtYXREYXRlKGRhdGVUb0Zvcm1hdCwgJ01NTSBkJyArIChzaG93WWVhciA/ICcsIHl5eXknIDogJycpLCBsb2NhbGUpO1xuICAgIHJldHVybiBgJHtmb3JtYXQoXG4gICAgICB2aWV3U3RhcnQsXG4gICAgICB2aWV3U3RhcnQuZ2V0VVRDRnVsbFllYXIoKSAhPT0gdmlld0VuZC5nZXRVVENGdWxsWWVhcigpXG4gICAgKX0gLSAke2Zvcm1hdCh2aWV3RW5kLCB0cnVlKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0aW1lIGZvcm1hdHRpbmcgZG93biB0aGUgbGVmdCBoYW5kIHNpZGUgb2YgdGhlIHdlZWsgdmlld1xuICAgKi9cbiAgcHVibGljIHdlZWtWaWV3SG91cih7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZm9ybWF0RGF0ZShkYXRlLCAnaCBhJywgbG9jYWxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGltZSBmb3JtYXR0aW5nIGRvd24gdGhlIGxlZnQgaGFuZCBzaWRlIG9mIHRoZSBkYXkgdmlld1xuICAgKi9cbiAgcHVibGljIGRheVZpZXdIb3VyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiBmb3JtYXREYXRlKGRhdGUsICdoIGEnLCBsb2NhbGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgdmlldyB0aXRsZVxuICAgKi9cbiAgcHVibGljIGRheVZpZXdUaXRsZSh7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZm9ybWF0RGF0ZShkYXRlLCAnRUVFRSwgTU1NTSBkLCB5JywgbG9jYWxlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2FsZW5kYXJBbmd1bGFyRGF0ZUZvcm1hdHRlciB9IGZyb20gJy4vY2FsZW5kYXItYW5ndWxhci1kYXRlLWZvcm1hdHRlci5wcm92aWRlcic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgYWxsIGZvcm1hdHRpbmcgb2YgZGF0ZXMuIFRoZXJlIGFyZSAzIGltcGxlbWVudGF0aW9ucyBhdmFpbGFibGUsIHRoZSBgQ2FsZW5kYXJBbmd1bGFyRGF0ZUZvcm1hdHRlcmAgKGRlZmF1bHQpIHdoaWNoIHVzZXMgdGhlIGFuZ3VsYXIgZGF0ZSBwaXBlIHRvIGZvcm1hdCBkYXRlcywgdGhlIGBDYWxlbmRhck5hdGl2ZURhdGVGb3JtYXR0ZXJgIHdoaWNoIHdpbGwgdXNlIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvSW50bFwiIHRhcmdldD1cIl9ibGFua1wiPkludGw8L2E+IEFQSSB0byBmb3JtYXQgZGF0ZXMsIG9yIHRoZXJlIGlzIHRoZSBgQ2FsZW5kYXJNb21lbnREYXRlRm9ybWF0dGVyYCB3aGljaCB1c2VzIDxhIGhyZWY9XCJodHRwOi8vbW9tZW50anMuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPm1vbWVudDwvYT4uXG4gKlxuICogSWYgeW91IHdpc2gsIHlvdSBtYXkgb3ZlcnJpZGUgYW55IG9mIHRoZSBkZWZhdWx0cyB2aWEgYW5ndWxhcnMgREkuIEZvciBleGFtcGxlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhbGVuZGFyRGF0ZUZvcm1hdHRlciwgRGF0ZUZvcm1hdHRlclBhcmFtcyB9IGZyb20gJ2FuZ3VsYXItY2FsZW5kYXInO1xuICogaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4gKlxuICogY2xhc3MgQ3VzdG9tRGF0ZUZvcm1hdHRlciBleHRlbmRzIENhbGVuZGFyRGF0ZUZvcm1hdHRlciB7XG4gKlxuICogICBwdWJsaWMgbW9udGhWaWV3Q29sdW1uSGVhZGVyKHtkYXRlLCBsb2NhbGV9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAqICAgICByZXR1cm4gZm9ybWF0RGF0ZShkYXRlLCAnRUVFJywgbG9jYWxlKTsgLy8gdXNlIHNob3J0IHdlZWsgZGF5c1xuICogICB9XG4gKlxuICogfVxuICpcbiAqIC8vIGluIHlvdXIgY29tcG9uZW50IHRoYXQgdXNlcyB0aGUgY2FsZW5kYXJcbiAqIHByb3ZpZGVyczogW3tcbiAqICAgcHJvdmlkZTogQ2FsZW5kYXJEYXRlRm9ybWF0dGVyLFxuICogICB1c2VDbGFzczogQ3VzdG9tRGF0ZUZvcm1hdHRlclxuICogfV1cbiAqIGBgYFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJEYXRlRm9ybWF0dGVyIGV4dGVuZHMgQ2FsZW5kYXJBbmd1bGFyRGF0ZUZvcm1hdHRlciB7fVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgTE9DQUxFX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRGF0ZUZvcm1hdHRlciB9IGZyb20gJy4vY2FsZW5kYXItZGF0ZS1mb3JtYXR0ZXIucHJvdmlkZXInO1xuXG4vKipcbiAqIFRoaXMgcGlwZSBpcyBwcmltYXJpbHkgZm9yIHJlbmRlcmluZyB0aGUgY3VycmVudCB2aWV3IHRpdGxlLiBFeGFtcGxlIHVzYWdlOlxuICogYGBgdHlwZXNjcmlwdFxuICogLy8gd2hlcmUgYHZpZXdEYXRlYCBpcyBhIGBEYXRlYCBhbmQgdmlldyBpcyBgJ21vbnRoJyB8ICd3ZWVrJyB8ICdkYXknYFxuICoge3sgdmlld0RhdGUgfCBjYWxlbmRhckRhdGU6KHZpZXcgKyAnVmlld1RpdGxlJyk6J2VuJyB9fVxuICogYGBgXG4gKi9cbkBQaXBlKHtcbiAgbmFtZTogJ2NhbGVuZGFyRGF0ZSdcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRhdGVGb3JtYXR0ZXI6IENhbGVuZGFyRGF0ZUZvcm1hdHRlcixcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZ1xuICApIHt9XG5cbiAgdHJhbnNmb3JtKFxuICAgIGRhdGU6IERhdGUsXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgbG9jYWxlOiBzdHJpbmcgPSB0aGlzLmxvY2FsZSxcbiAgICB3ZWVrU3RhcnRzT246IG51bWJlciA9IDAsXG4gICAgZXhjbHVkZURheXM6IG51bWJlcltdID0gW10sXG4gICAgZGF5c0luV2Vlaz86IG51bWJlclxuICApOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRhdGVGb3JtYXR0ZXJbbWV0aG9kXSh7XG4gICAgICBkYXRlLFxuICAgICAgbG9jYWxlLFxuICAgICAgd2Vla1N0YXJ0c09uLFxuICAgICAgZXhjbHVkZURheXMsXG4gICAgICBkYXlzSW5XZWVrXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENhbGVuZGFyRXZlbnQgfSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgZGlzcGxheWluZyBhbGwgZXZlbnQgdGl0bGVzIHdpdGhpbiB0aGUgY2FsZW5kYXIuIFlvdSBtYXkgb3ZlcnJpZGUgYW55IG9mIGl0cyBtZXRob2RzIHZpYSBhbmd1bGFycyBESSB0byBzdWl0IHlvdXIgcmVxdWlyZW1lbnRzLiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYWxlbmRhckV2ZW50VGl0bGVGb3JtYXR0ZXIsIENhbGVuZGFyRXZlbnQgfSBmcm9tICdhbmd1bGFyLWNhbGVuZGFyJztcbiAqXG4gKiBjbGFzcyBDdXN0b21FdmVudFRpdGxlRm9ybWF0dGVyIGV4dGVuZHMgQ2FsZW5kYXJFdmVudFRpdGxlRm9ybWF0dGVyIHtcbiAqXG4gKiAgIG1vbnRoKGV2ZW50OiBDYWxlbmRhckV2ZW50KTogc3RyaW5nIHtcbiAqICAgICByZXR1cm4gYEN1c3RvbSBwcmVmaXg6ICR7ZXZlbnQudGl0bGV9YDtcbiAqICAgfVxuICpcbiAqIH1cbiAqXG4gKiAvLyBpbiB5b3VyIGNvbXBvbmVudFxuICogcHJvdmlkZXJzOiBbe1xuICogIHByb3ZpZGU6IENhbGVuZGFyRXZlbnRUaXRsZUZvcm1hdHRlcixcbiAqICB1c2VDbGFzczogQ3VzdG9tRXZlbnRUaXRsZUZvcm1hdHRlclxuICogfV1cbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJFdmVudFRpdGxlRm9ybWF0dGVyIHtcbiAgLyoqXG4gICAqIFRoZSBtb250aCB2aWV3IGV2ZW50IHRpdGxlLlxuICAgKi9cbiAgbW9udGgoZXZlbnQ6IENhbGVuZGFyRXZlbnQsIHRpdGxlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBldmVudC50aXRsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbW9udGggdmlldyBldmVudCB0b29sdGlwLiBSZXR1cm4gYSBmYWxzZXkgdmFsdWUgZnJvbSB0aGlzIHRvIGRpc2FibGUgdGhlIHRvb2x0aXAuXG4gICAqL1xuICBtb250aFRvb2x0aXAoZXZlbnQ6IENhbGVuZGFyRXZlbnQsIHRpdGxlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBldmVudC50aXRsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgd2VlayB2aWV3IGV2ZW50IHRpdGxlLlxuICAgKi9cbiAgd2VlayhldmVudDogQ2FsZW5kYXJFdmVudCwgdGl0bGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGV2ZW50LnRpdGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB3ZWVrIHZpZXcgZXZlbnQgdG9vbHRpcC4gUmV0dXJuIGEgZmFsc2V5IHZhbHVlIGZyb20gdGhpcyB0byBkaXNhYmxlIHRoZSB0b29sdGlwLlxuICAgKi9cbiAgd2Vla1Rvb2x0aXAoZXZlbnQ6IENhbGVuZGFyRXZlbnQsIHRpdGxlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBldmVudC50aXRsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGF5IHZpZXcgZXZlbnQgdGl0bGUuXG4gICAqL1xuICBkYXkoZXZlbnQ6IENhbGVuZGFyRXZlbnQsIHRpdGxlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBldmVudC50aXRsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGF5IHZpZXcgZXZlbnQgdG9vbHRpcC4gUmV0dXJuIGEgZmFsc2V5IHZhbHVlIGZyb20gdGhpcyB0byBkaXNhYmxlIHRoZSB0b29sdGlwLlxuICAgKi9cbiAgZGF5VG9vbHRpcChldmVudDogQ2FsZW5kYXJFdmVudCwgdGl0bGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGV2ZW50LnRpdGxlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50IH0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudFRpdGxlRm9ybWF0dGVyIH0gZnJvbSAnLi9jYWxlbmRhci1ldmVudC10aXRsZS1mb3JtYXR0ZXIucHJvdmlkZXInO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdjYWxlbmRhckV2ZW50VGl0bGUnXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRXZlbnRUaXRsZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYWxlbmRhckV2ZW50VGl0bGU6IENhbGVuZGFyRXZlbnRUaXRsZUZvcm1hdHRlcikge31cblxuICB0cmFuc2Zvcm0odGl0bGU6IHN0cmluZywgdGl0bGVUeXBlOiBzdHJpbmcsIGV2ZW50OiBDYWxlbmRhckV2ZW50KTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jYWxlbmRhckV2ZW50VGl0bGVbdGl0bGVUeXBlXShldmVudCwgdGl0bGUpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmNvbnN0IGNsaWNrRWxlbWVudHMgPSBuZXcgU2V0PEhUTUxFbGVtZW50PigpO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXdsQ2xpY2tdJ1xufSlcbmV4cG9ydCBjbGFzcyBDbGlja0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQE91dHB1dCgnbXdsQ2xpY2snKVxuICBjbGljazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgcHJpdmF0ZSByZW1vdmVMaXN0ZW5lcjogKCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbG06IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnRcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNsaWNrRWxlbWVudHMuYWRkKHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQpO1xuICAgIGNvbnN0IGV2ZW50TmFtZTogc3RyaW5nID1cbiAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3dbJ0hhbW1lciddICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/ICd0YXAnXG4gICAgICAgIDogJ2NsaWNrJztcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LFxuICAgICAgZXZlbnROYW1lLFxuICAgICAgZXZlbnQgPT4ge1xuICAgICAgICAvLyBwcmV2ZW50IGNoaWxkIGNsaWNrIGV2ZW50cyBmcm9tIGZpcmluZyBvbiBwYXJlbnQgZWxlbWVudHMgdGhhdCBhbHNvIGhhdmUgY2xpY2sgZXZlbnRzXG4gICAgICAgIGxldCBuZWFyZXN0Q2xpY2thYmxlUGFyZW50OiBIVE1MRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICFjbGlja0VsZW1lbnRzLmhhcyhuZWFyZXN0Q2xpY2thYmxlUGFyZW50KSAmJlxuICAgICAgICAgIG5lYXJlc3RDbGlja2FibGVQYXJlbnQgIT09IHRoaXMuZG9jdW1lbnQuYm9keVxuICAgICAgICApIHtcbiAgICAgICAgICBuZWFyZXN0Q2xpY2thYmxlUGFyZW50ID0gbmVhcmVzdENsaWNrYWJsZVBhcmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzVGhpc0NsaWNrYWJsZUVsZW1lbnQgPVxuICAgICAgICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQgPT09IG5lYXJlc3RDbGlja2FibGVQYXJlbnQ7XG4gICAgICAgIGlmIChpc1RoaXNDbGlja2FibGVFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5jbGljay5uZXh0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCk7XG4gICAgY2xpY2tFbGVtZW50cy5kZWxldGUodGhpcy5lbG0ubmF0aXZlRWxlbWVudCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEdldE1vbnRoVmlld0FyZ3MsXG4gIE1vbnRoVmlldyxcbiAgR2V0V2Vla1ZpZXdIZWFkZXJBcmdzLFxuICBXZWVrRGF5LFxuICBHZXRXZWVrVmlld0FyZ3MsXG4gIEdldERheVZpZXdBcmdzLFxuICBEYXlWaWV3LFxuICBHZXREYXlWaWV3SG91ckdyaWRBcmdzLFxuICBEYXlWaWV3SG91cixcbiAgV2Vla1ZpZXcsXG4gIGdldERheVZpZXcsXG4gIGdldERheVZpZXdIb3VyR3JpZCxcbiAgZ2V0TW9udGhWaWV3LFxuICBnZXRXZWVrVmlld0hlYWRlcixcbiAgZ2V0V2Vla1ZpZXdcbn0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi9kYXRlLWFkYXB0ZXJzL2RhdGUtYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYWxlbmRhclV0aWxzIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcikge31cblxuICBnZXRNb250aFZpZXcoYXJnczogR2V0TW9udGhWaWV3QXJncyk6IE1vbnRoVmlldyB7XG4gICAgcmV0dXJuIGdldE1vbnRoVmlldyh0aGlzLmRhdGVBZGFwdGVyLCBhcmdzKTtcbiAgfVxuXG4gIGdldFdlZWtWaWV3SGVhZGVyKGFyZ3M6IEdldFdlZWtWaWV3SGVhZGVyQXJncyk6IFdlZWtEYXlbXSB7XG4gICAgcmV0dXJuIGdldFdlZWtWaWV3SGVhZGVyKHRoaXMuZGF0ZUFkYXB0ZXIsIGFyZ3MpO1xuICB9XG5cbiAgZ2V0V2Vla1ZpZXcoYXJnczogR2V0V2Vla1ZpZXdBcmdzKTogV2Vla1ZpZXcge1xuICAgIHJldHVybiBnZXRXZWVrVmlldyh0aGlzLmRhdGVBZGFwdGVyLCBhcmdzKTtcbiAgfVxuXG4gIGdldERheVZpZXcoYXJnczogR2V0RGF5Vmlld0FyZ3MpOiBEYXlWaWV3IHtcbiAgICByZXR1cm4gZ2V0RGF5Vmlldyh0aGlzLmRhdGVBZGFwdGVyLCBhcmdzKTtcbiAgfVxuXG4gIGdldERheVZpZXdIb3VyR3JpZChhcmdzOiBHZXREYXlWaWV3SG91ckdyaWRBcmdzKTogRGF5Vmlld0hvdXJbXSB7XG4gICAgcmV0dXJuIGdldERheVZpZXdIb3VyR3JpZCh0aGlzLmRhdGVBZGFwdGVyLCBhcmdzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FsZW5kYXJEYXRlRm9ybWF0dGVySW50ZXJmYWNlLFxuICBEYXRlRm9ybWF0dGVyUGFyYW1zXG59IGZyb20gJy4vY2FsZW5kYXItZGF0ZS1mb3JtYXR0ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IGdldFdlZWtWaWV3UGVyaW9kIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vZGF0ZS1hZGFwdGVycy9kYXRlLWFkYXB0ZXInO1xuXG5leHBvcnQgY29uc3QgTU9NRU5UOiBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+ID0gbmV3IEluamVjdGlvblRva2VuKCdNb21lbnQnKTtcblxuLyoqXG4gKiBUaGlzIHdpbGwgdXNlIDxhIGhyZWY9XCJodHRwOi8vbW9tZW50anMuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPm1vbWVudDwvYT4gdG8gZG8gYWxsIGRhdGUgZm9ybWF0dGluZy4gVG8gdXNlIHRoaXMgY2xhc3M6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2FsZW5kYXJEYXRlRm9ybWF0dGVyLCBDYWxlbmRhck1vbWVudERhdGVGb3JtYXR0ZXIsIE1PTUVOVCB9IGZyb20gJ2FuZ3VsYXItY2FsZW5kYXInO1xuICogaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuICpcbiAqIC8vIGluIHlvdXIgY29tcG9uZW50XG4gKiBwcm92aWRlOiBbe1xuICogICBwcm92aWRlOiBNT01FTlQsIHVzZVZhbHVlOiBtb21lbnRcbiAqIH0sIHtcbiAqICAgcHJvdmlkZTogQ2FsZW5kYXJEYXRlRm9ybWF0dGVyLCB1c2VDbGFzczogQ2FsZW5kYXJNb21lbnREYXRlRm9ybWF0dGVyXG4gKiB9XVxuICpcbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb21lbnREYXRlRm9ybWF0dGVyXG4gIGltcGxlbWVudHMgQ2FsZW5kYXJEYXRlRm9ybWF0dGVySW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoTU9NRU5UKSBwcm90ZWN0ZWQgbW9tZW50OiBhbnksXG4gICAgcHJvdGVjdGVkIGRhdGVBZGFwdGVyOiBEYXRlQWRhcHRlclxuICApIHt9XG5cbiAgLyoqXG4gICAqIFRoZSBtb250aCB2aWV3IGhlYWRlciB3ZWVrIGRheSBsYWJlbHNcbiAgICovXG4gIHB1YmxpYyBtb250aFZpZXdDb2x1bW5IZWFkZXIoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubW9tZW50KGRhdGUpXG4gICAgICAubG9jYWxlKGxvY2FsZSlcbiAgICAgIC5mb3JtYXQoJ2RkZGQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbW9udGggdmlldyBjZWxsIGRheSBudW1iZXJcbiAgICovXG4gIHB1YmxpYyBtb250aFZpZXdEYXlOdW1iZXIoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubW9tZW50KGRhdGUpXG4gICAgICAubG9jYWxlKGxvY2FsZSlcbiAgICAgIC5mb3JtYXQoJ0QnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbW9udGggdmlldyB0aXRsZVxuICAgKi9cbiAgcHVibGljIG1vbnRoVmlld1RpdGxlKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKVxuICAgICAgLmxvY2FsZShsb2NhbGUpXG4gICAgICAuZm9ybWF0KCdNTU1NIFlZWVknKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgd2VlayB2aWV3IGhlYWRlciB3ZWVrIGRheSBsYWJlbHNcbiAgICovXG4gIHB1YmxpYyB3ZWVrVmlld0NvbHVtbkhlYWRlcih7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tb21lbnQoZGF0ZSlcbiAgICAgIC5sb2NhbGUobG9jYWxlKVxuICAgICAgLmZvcm1hdCgnZGRkZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB3ZWVrIHZpZXcgc3ViIGhlYWRlciBkYXkgYW5kIG1vbnRoIGxhYmVsc1xuICAgKi9cbiAgcHVibGljIHdlZWtWaWV3Q29sdW1uU3ViSGVhZGVyKHtcbiAgICBkYXRlLFxuICAgIGxvY2FsZVxuICB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tb21lbnQoZGF0ZSlcbiAgICAgIC5sb2NhbGUobG9jYWxlKVxuICAgICAgLmZvcm1hdCgnTU1NIEQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgd2VlayB2aWV3IHRpdGxlXG4gICAqL1xuICBwdWJsaWMgd2Vla1ZpZXdUaXRsZSh7XG4gICAgZGF0ZSxcbiAgICBsb2NhbGUsXG4gICAgd2Vla1N0YXJ0c09uLFxuICAgIGV4Y2x1ZGVEYXlzLFxuICAgIGRheXNJbldlZWtcbiAgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgY29uc3QgeyB2aWV3U3RhcnQsIHZpZXdFbmQgfSA9IGdldFdlZWtWaWV3UGVyaW9kKFxuICAgICAgdGhpcy5kYXRlQWRhcHRlcixcbiAgICAgIGRhdGUsXG4gICAgICB3ZWVrU3RhcnRzT24sXG4gICAgICBleGNsdWRlRGF5cyxcbiAgICAgIGRheXNJbldlZWtcbiAgICApO1xuICAgIGNvbnN0IGZvcm1hdCA9IChkYXRlVG9Gb3JtYXQ6IERhdGUsIHNob3dZZWFyOiBib29sZWFuKSA9PlxuICAgICAgdGhpcy5tb21lbnQoZGF0ZVRvRm9ybWF0KVxuICAgICAgICAubG9jYWxlKGxvY2FsZSlcbiAgICAgICAgLmZvcm1hdCgnTU1NIEQnICsgKHNob3dZZWFyID8gJywgWVlZWScgOiAnJykpO1xuICAgIHJldHVybiBgJHtmb3JtYXQoXG4gICAgICB2aWV3U3RhcnQsXG4gICAgICB2aWV3U3RhcnQuZ2V0VVRDRnVsbFllYXIoKSAhPT0gdmlld0VuZC5nZXRVVENGdWxsWWVhcigpXG4gICAgKX0gLSAke2Zvcm1hdCh2aWV3RW5kLCB0cnVlKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0aW1lIGZvcm1hdHRpbmcgZG93biB0aGUgbGVmdCBoYW5kIHNpZGUgb2YgdGhlIHdlZWsgdmlld1xuICAgKi9cbiAgcHVibGljIHdlZWtWaWV3SG91cih7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tb21lbnQoZGF0ZSlcbiAgICAgIC5sb2NhbGUobG9jYWxlKVxuICAgICAgLmZvcm1hdCgnaGEnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGltZSBmb3JtYXR0aW5nIGRvd24gdGhlIGxlZnQgaGFuZCBzaWRlIG9mIHRoZSBkYXkgdmlld1xuICAgKi9cbiAgcHVibGljIGRheVZpZXdIb3VyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKVxuICAgICAgLmxvY2FsZShsb2NhbGUpXG4gICAgICAuZm9ybWF0KCdoYScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgdmlldyB0aXRsZVxuICAgKi9cbiAgcHVibGljIGRheVZpZXdUaXRsZSh7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tb21lbnQoZGF0ZSlcbiAgICAgIC5sb2NhbGUobG9jYWxlKVxuICAgICAgLmZvcm1hdCgnZGRkZCwgRCBNTU1NLCBZWVlZJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENhbGVuZGFyRGF0ZUZvcm1hdHRlckludGVyZmFjZSxcbiAgRGF0ZUZvcm1hdHRlclBhcmFtc1xufSBmcm9tICcuL2NhbGVuZGFyLWRhdGUtZm9ybWF0dGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gJy4uLy4uL2RhdGUtYWRhcHRlcnMvZGF0ZS1hZGFwdGVyJztcbmltcG9ydCB7IGdldFdlZWtWaWV3UGVyaW9kIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBUaGlzIHdpbGwgdXNlIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9JbnRsXCIgdGFyZ2V0PVwiX2JsYW5rXCI+SW50bDwvYT4gQVBJIHRvIGRvIGFsbCBkYXRlIGZvcm1hdHRpbmcuXG4gKlxuICogWW91IHdpbGwgbmVlZCB0byBpbmNsdWRlIGEgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hbmR5ZWFybnNoYXcvSW50bC5qcy9cIj5wb2x5ZmlsbDwvYT4gZm9yIG9sZGVyIGJyb3dzZXJzLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJOYXRpdmVEYXRlRm9ybWF0dGVyXG4gIGltcGxlbWVudHMgQ2FsZW5kYXJEYXRlRm9ybWF0dGVySW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcikge31cblxuICAvKipcbiAgICogVGhlIG1vbnRoIHZpZXcgaGVhZGVyIHdlZWsgZGF5IGxhYmVsc1xuICAgKi9cbiAgcHVibGljIG1vbnRoVmlld0NvbHVtbkhlYWRlcih7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7IHdlZWtkYXk6ICdsb25nJyB9KS5mb3JtYXQoZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG1vbnRoIHZpZXcgY2VsbCBkYXkgbnVtYmVyXG4gICAqL1xuICBwdWJsaWMgbW9udGhWaWV3RGF5TnVtYmVyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHsgZGF5OiAnbnVtZXJpYycgfSkuZm9ybWF0KGRhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBtb250aCB2aWV3IHRpdGxlXG4gICAqL1xuICBwdWJsaWMgbW9udGhWaWV3VGl0bGUoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwge1xuICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgbW9udGg6ICdsb25nJ1xuICAgIH0pLmZvcm1hdChkYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgd2VlayB2aWV3IGhlYWRlciB3ZWVrIGRheSBsYWJlbHNcbiAgICovXG4gIHB1YmxpYyB3ZWVrVmlld0NvbHVtbkhlYWRlcih7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7IHdlZWtkYXk6ICdsb25nJyB9KS5mb3JtYXQoZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHdlZWsgdmlldyBzdWIgaGVhZGVyIGRheSBhbmQgbW9udGggbGFiZWxzXG4gICAqL1xuICBwdWJsaWMgd2Vla1ZpZXdDb2x1bW5TdWJIZWFkZXIoe1xuICAgIGRhdGUsXG4gICAgbG9jYWxlXG4gIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHtcbiAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgbW9udGg6ICdzaG9ydCdcbiAgICB9KS5mb3JtYXQoZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHdlZWsgdmlldyB0aXRsZVxuICAgKi9cbiAgcHVibGljIHdlZWtWaWV3VGl0bGUoe1xuICAgIGRhdGUsXG4gICAgbG9jYWxlLFxuICAgIHdlZWtTdGFydHNPbixcbiAgICBleGNsdWRlRGF5cyxcbiAgICBkYXlzSW5XZWVrXG4gIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgdmlld1N0YXJ0LCB2aWV3RW5kIH0gPSBnZXRXZWVrVmlld1BlcmlvZChcbiAgICAgIHRoaXMuZGF0ZUFkYXB0ZXIsXG4gICAgICBkYXRlLFxuICAgICAgd2Vla1N0YXJ0c09uLFxuICAgICAgZXhjbHVkZURheXMsXG4gICAgICBkYXlzSW5XZWVrXG4gICAgKTtcblxuICAgIGNvbnN0IGZvcm1hdCA9IChkYXRlVG9Gb3JtYXQ6IERhdGUsIHNob3dZZWFyOiBib29sZWFuKSA9PlxuICAgICAgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7XG4gICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgeWVhcjogc2hvd1llYXIgPyAnbnVtZXJpYycgOiB1bmRlZmluZWRcbiAgICAgIH0pLmZvcm1hdChkYXRlVG9Gb3JtYXQpO1xuXG4gICAgcmV0dXJuIGAke2Zvcm1hdChcbiAgICAgIHZpZXdTdGFydCxcbiAgICAgIHZpZXdTdGFydC5nZXRVVENGdWxsWWVhcigpICE9PSB2aWV3RW5kLmdldFVUQ0Z1bGxZZWFyKClcbiAgICApfSAtICR7Zm9ybWF0KHZpZXdFbmQsIHRydWUpfWA7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRpbWUgZm9ybWF0dGluZyBkb3duIHRoZSBsZWZ0IGhhbmQgc2lkZSBvZiB0aGUgd2VlayB2aWV3XG4gICAqL1xuICBwdWJsaWMgd2Vla1ZpZXdIb3VyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHsgaG91cjogJ251bWVyaWMnIH0pLmZvcm1hdChkYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGltZSBmb3JtYXR0aW5nIGRvd24gdGhlIGxlZnQgaGFuZCBzaWRlIG9mIHRoZSBkYXkgdmlld1xuICAgKi9cbiAgcHVibGljIGRheVZpZXdIb3VyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHsgaG91cjogJ251bWVyaWMnIH0pLmZvcm1hdChkYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGF5IHZpZXcgdGl0bGVcbiAgICovXG4gIHB1YmxpYyBkYXlWaWV3VGl0bGUoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwge1xuICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgd2Vla2RheTogJ2xvbmcnXG4gICAgfSkuZm9ybWF0KGRhdGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDYWxlbmRhckV2ZW50IH0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuXG5leHBvcnQgZW51bSBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnRUeXBlIHtcbiAgRHJhZyA9ICdkcmFnJyxcbiAgRHJvcCA9ICdkcm9wJyxcbiAgUmVzaXplID0gJ3Jlc2l6ZSdcbn1cblxuLyoqXG4gKiBUaGUgb3V0cHV0IGAkZXZlbnRgIHR5cGUgd2hlbiBhbiBldmVudCBpcyByZXNpemVkIG9yIGRyYWdnZWQgYW5kIGRyb3BwZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50PE1ldGFUeXBlID0gYW55PiB7XG4gIHR5cGU6IENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudFR5cGU7XG4gIGV2ZW50OiBDYWxlbmRhckV2ZW50PE1ldGFUeXBlPjtcbiAgbmV3U3RhcnQ6IERhdGU7XG4gIG5ld0VuZD86IERhdGU7XG4gIGFsbERheT86IGJvb2xlYW47XG59XG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50QWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItZXZlbnQtYWN0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudFRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci1ldmVudC10aXRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgQ2FsZW5kYXJUb29sdGlwRGlyZWN0aXZlLFxuICBDYWxlbmRhclRvb2x0aXBXaW5kb3dDb21wb25lbnRcbn0gZnJvbSAnLi9jYWxlbmRhci10b29sdGlwLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDYWxlbmRhclByZXZpb3VzVmlld0RpcmVjdGl2ZSB9IGZyb20gJy4vY2FsZW5kYXItcHJldmlvdXMtdmlldy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJOZXh0Vmlld0RpcmVjdGl2ZSB9IGZyb20gJy4vY2FsZW5kYXItbmV4dC12aWV3LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDYWxlbmRhclRvZGF5RGlyZWN0aXZlIH0gZnJvbSAnLi9jYWxlbmRhci10b2RheS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJEYXRlUGlwZSB9IGZyb20gJy4vY2FsZW5kYXItZGF0ZS5waXBlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnRUaXRsZVBpcGUgfSBmcm9tICcuL2NhbGVuZGFyLWV2ZW50LXRpdGxlLnBpcGUnO1xuaW1wb3J0IHsgQ2xpY2tEaXJlY3RpdmUgfSBmcm9tICcuL2NsaWNrLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50VGl0bGVGb3JtYXR0ZXIgfSBmcm9tICcuL2NhbGVuZGFyLWV2ZW50LXRpdGxlLWZvcm1hdHRlci5wcm92aWRlcic7XG5pbXBvcnQgeyBDYWxlbmRhckRhdGVGb3JtYXR0ZXIgfSBmcm9tICcuL2NhbGVuZGFyLWRhdGUtZm9ybWF0dGVyLnByb3ZpZGVyJztcbmltcG9ydCB7IENhbGVuZGFyVXRpbHMgfSBmcm9tICcuL2NhbGVuZGFyLXV0aWxzLnByb3ZpZGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBDYWxlbmRhck1vZHVsZUNvbmZpZyB7XG4gIGV2ZW50VGl0bGVGb3JtYXR0ZXI/OiBQcm92aWRlcjtcbiAgZGF0ZUZvcm1hdHRlcj86IFByb3ZpZGVyO1xuICB1dGlscz86IFByb3ZpZGVyO1xufVxuXG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLWV2ZW50LXRpdGxlLWZvcm1hdHRlci5wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLW1vbWVudC1kYXRlLWZvcm1hdHRlci5wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLW5hdGl2ZS1kYXRlLWZvcm1hdHRlci5wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLWFuZ3VsYXItZGF0ZS1mb3JtYXR0ZXIucHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxlbmRhci1kYXRlLWZvcm1hdHRlci5wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLXV0aWxzLnByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY2FsZW5kYXItZGF0ZS1mb3JtYXR0ZXIuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vY2FsZW5kYXItZXZlbnQtdGltZXMtY2hhbmdlZC1ldmVudC5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi4vLi4vZGF0ZS1hZGFwdGVycy9kYXRlLWFkYXB0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxlbmRhci12aWV3LmVudW0nO1xuXG5leHBvcnQge1xuICBDYWxlbmRhckV2ZW50LFxuICBFdmVudEFjdGlvbiBhcyBDYWxlbmRhckV2ZW50QWN0aW9uLFxuICBEQVlTX09GX1dFRUssXG4gIFZpZXdQZXJpb2QgYXMgQ2FsZW5kYXJWaWV3UGVyaW9kXG59IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcblxuLyoqXG4gKiBJbXBvcnQgdGhpcyBtb2R1bGUgdG8gaWYgeW91J3JlIGp1c3QgdXNpbmcgYSBzaW5ndWxhciB2aWV3IGFuZCB3YW50IHRvIHNhdmUgb24gYnVuZGxlIHNpemUuIEV4YW1wbGUgdXNhZ2U6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2FsZW5kYXJDb21tb25Nb2R1bGUsIENhbGVuZGFyTW9udGhNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWNhbGVuZGFyJztcbiAqXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgQ2FsZW5kYXJDb21tb25Nb2R1bGUuZm9yUm9vdCgpLFxuICogICAgIENhbGVuZGFyTW9udGhNb2R1bGVcbiAqICAgXVxuICogfSlcbiAqIGNsYXNzIE15TW9kdWxlIHt9XG4gKiBgYGBcbiAqXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENhbGVuZGFyRXZlbnRBY3Rpb25zQ29tcG9uZW50LFxuICAgIENhbGVuZGFyRXZlbnRUaXRsZUNvbXBvbmVudCxcbiAgICBDYWxlbmRhclRvb2x0aXBXaW5kb3dDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJUb29sdGlwRGlyZWN0aXZlLFxuICAgIENhbGVuZGFyUHJldmlvdXNWaWV3RGlyZWN0aXZlLFxuICAgIENhbGVuZGFyTmV4dFZpZXdEaXJlY3RpdmUsXG4gICAgQ2FsZW5kYXJUb2RheURpcmVjdGl2ZSxcbiAgICBDYWxlbmRhckRhdGVQaXBlLFxuICAgIENhbGVuZGFyRXZlbnRUaXRsZVBpcGUsXG4gICAgQ2xpY2tEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBDYWxlbmRhckV2ZW50QWN0aW9uc0NvbXBvbmVudCxcbiAgICBDYWxlbmRhckV2ZW50VGl0bGVDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJUb29sdGlwV2luZG93Q29tcG9uZW50LFxuICAgIENhbGVuZGFyVG9vbHRpcERpcmVjdGl2ZSxcbiAgICBDYWxlbmRhclByZXZpb3VzVmlld0RpcmVjdGl2ZSxcbiAgICBDYWxlbmRhck5leHRWaWV3RGlyZWN0aXZlLFxuICAgIENhbGVuZGFyVG9kYXlEaXJlY3RpdmUsXG4gICAgQ2FsZW5kYXJEYXRlUGlwZSxcbiAgICBDYWxlbmRhckV2ZW50VGl0bGVQaXBlLFxuICAgIENsaWNrRGlyZWN0aXZlXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NhbGVuZGFyVG9vbHRpcFdpbmRvd0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21tb25Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBkYXRlQWRhcHRlcjogUHJvdmlkZXIsXG4gICAgY29uZmlnOiBDYWxlbmRhck1vZHVsZUNvbmZpZyA9IHt9XG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ2FsZW5kYXJDb21tb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgZGF0ZUFkYXB0ZXIsXG4gICAgICAgIGNvbmZpZy5ldmVudFRpdGxlRm9ybWF0dGVyIHx8IENhbGVuZGFyRXZlbnRUaXRsZUZvcm1hdHRlcixcbiAgICAgICAgY29uZmlnLmRhdGVGb3JtYXR0ZXIgfHwgQ2FsZW5kYXJEYXRlRm9ybWF0dGVyLFxuICAgICAgICBjb25maWcudXRpbHMgfHwgQ2FsZW5kYXJVdGlsc1xuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25DaGFuZ2VzLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgTE9DQUxFX0lELFxuICBJbmplY3QsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FsZW5kYXJFdmVudCxcbiAgV2Vla0RheSxcbiAgTW9udGhWaWV3LFxuICBNb250aFZpZXdEYXksXG4gIFZpZXdQZXJpb2Rcbn0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQsXG4gIENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudFR5cGVcbn0gZnJvbSAnLi4vY29tbW9uL2NhbGVuZGFyLWV2ZW50LXRpbWVzLWNoYW5nZWQtZXZlbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IENhbGVuZGFyVXRpbHMgfSBmcm9tICcuLi9jb21tb24vY2FsZW5kYXItdXRpbHMucHJvdmlkZXInO1xuaW1wb3J0IHsgdmFsaWRhdGVFdmVudHMsIHRyYWNrQnlJbmRleCB9IGZyb20gJy4uL2NvbW1vbi91dGlsJztcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vZGF0ZS1hZGFwdGVycy9kYXRlLWFkYXB0ZXInO1xuaW1wb3J0IHsgUGxhY2VtZW50QXJyYXkgfSBmcm9tICdwb3NpdGlvbmluZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsZW5kYXJNb250aFZpZXdCZWZvcmVSZW5kZXJFdmVudCB7XG4gIGhlYWRlcjogV2Vla0RheVtdO1xuICBib2R5OiBNb250aFZpZXdEYXlbXTtcbiAgcGVyaW9kOiBWaWV3UGVyaW9kO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyTW9udGhWaWV3RXZlbnRUaW1lc0NoYW5nZWRFdmVudDxcbiAgRXZlbnRNZXRhVHlwZSA9IGFueSxcbiAgRGF5TWV0YVR5cGUgPSBhbnlcbj4gZXh0ZW5kcyBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQ8RXZlbnRNZXRhVHlwZT4ge1xuICBkYXk6IE1vbnRoVmlld0RheTxEYXlNZXRhVHlwZT47XG59XG5cbi8qKlxuICogU2hvd3MgYWxsIGV2ZW50cyBvbiBhIGdpdmVuIG1vbnRoLiBFeGFtcGxlIHVzYWdlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIDxtd2wtY2FsZW5kYXItbW9udGgtdmlld1xuICogIFt2aWV3RGF0ZV09XCJ2aWV3RGF0ZVwiXG4gKiAgW2V2ZW50c109XCJldmVudHNcIj5cbiAqIDwvbXdsLWNhbGVuZGFyLW1vbnRoLXZpZXc+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXdsLWNhbGVuZGFyLW1vbnRoLXZpZXcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjYWwtbW9udGgtdmlld1wiPlxuICAgICAgPG13bC1jYWxlbmRhci1tb250aC12aWV3LWhlYWRlclxuICAgICAgICBbZGF5c109XCJjb2x1bW5IZWFkZXJzXCJcbiAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxuICAgICAgICBbY3VzdG9tVGVtcGxhdGVdPVwiaGVhZGVyVGVtcGxhdGVcIj5cbiAgICAgIDwvbXdsLWNhbGVuZGFyLW1vbnRoLXZpZXctaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbC1kYXlzXCI+XG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHJvd0luZGV4IG9mIHZpZXcucm93T2Zmc2V0czsgdHJhY2tCeUluZGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhbC1jZWxsLXJvd1wiPlxuICAgICAgICAgICAgPG13bC1jYWxlbmRhci1tb250aC1jZWxsXG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBkYXkgb2YgKHZpZXcuZGF5cyB8IHNsaWNlIDogcm93SW5kZXggOiByb3dJbmRleCArICh2aWV3LnRvdGFsRGF5c1Zpc2libGVJbldlZWspKTsgdHJhY2tCeTp0cmFja0J5RGF0ZVwiXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImRheT8uY3NzQ2xhc3NcIlxuICAgICAgICAgICAgICBbZGF5XT1cImRheVwiXG4gICAgICAgICAgICAgIFtvcGVuRGF5XT1cIm9wZW5EYXlcIlxuICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgICAgICAgIFt0b29sdGlwUGxhY2VtZW50XT1cInRvb2x0aXBQbGFjZW1lbnRcIlxuICAgICAgICAgICAgICBbdG9vbHRpcEFwcGVuZFRvQm9keV09XCJ0b29sdGlwQXBwZW5kVG9Cb2R5XCJcbiAgICAgICAgICAgICAgW3Rvb2x0aXBUZW1wbGF0ZV09XCJ0b29sdGlwVGVtcGxhdGVcIlxuICAgICAgICAgICAgICBbY3VzdG9tVGVtcGxhdGVdPVwiY2VsbFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgKG13bENsaWNrKT1cImRheUNsaWNrZWQuZW1pdCh7IGRheTogZGF5IH0pXCJcbiAgICAgICAgICAgICAgKGhpZ2hsaWdodERheSk9XCJ0b2dnbGVEYXlIaWdobGlnaHQoJGV2ZW50LmV2ZW50LCB0cnVlKVwiXG4gICAgICAgICAgICAgICh1bmhpZ2hsaWdodERheSk9XCJ0b2dnbGVEYXlIaWdobGlnaHQoJGV2ZW50LmV2ZW50LCBmYWxzZSlcIlxuICAgICAgICAgICAgICBtd2xEcm9wcGFibGVcbiAgICAgICAgICAgICAgZHJhZ092ZXJDbGFzcz1cImNhbC1kcmFnLW92ZXJcIlxuICAgICAgICAgICAgICAoZHJvcCk9XCJldmVudERyb3BwZWQoZGF5LCAkZXZlbnQuZHJvcERhdGEuZXZlbnQsICRldmVudC5kcm9wRGF0YS5kcmFnZ2VkRnJvbSlcIlxuICAgICAgICAgICAgICAoZXZlbnRDbGlja2VkKT1cImV2ZW50Q2xpY2tlZC5lbWl0KHtldmVudDogJGV2ZW50LmV2ZW50fSlcIj5cbiAgICAgICAgICAgIDwvbXdsLWNhbGVuZGFyLW1vbnRoLWNlbGw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG13bC1jYWxlbmRhci1vcGVuLWRheS1ldmVudHNcbiAgICAgICAgICAgIFtpc09wZW5dPVwib3BlblJvd0luZGV4ID09PSByb3dJbmRleFwiXG4gICAgICAgICAgICBbZXZlbnRzXT1cIm9wZW5EYXk/LmV2ZW50c1wiXG4gICAgICAgICAgICBbY3VzdG9tVGVtcGxhdGVdPVwib3BlbkRheUV2ZW50c1RlbXBsYXRlXCJcbiAgICAgICAgICAgIFtldmVudFRpdGxlVGVtcGxhdGVdPVwiZXZlbnRUaXRsZVRlbXBsYXRlXCJcbiAgICAgICAgICAgIFtldmVudEFjdGlvbnNUZW1wbGF0ZV09XCJldmVudEFjdGlvbnNUZW1wbGF0ZVwiXG4gICAgICAgICAgICAoZXZlbnRDbGlja2VkKT1cImV2ZW50Q2xpY2tlZC5lbWl0KHtldmVudDogJGV2ZW50LmV2ZW50fSlcIlxuICAgICAgICAgICAgbXdsRHJvcHBhYmxlXG4gICAgICAgICAgICBkcmFnT3ZlckNsYXNzPVwiY2FsLWRyYWctb3ZlclwiXG4gICAgICAgICAgICAoZHJvcCk9XCJldmVudERyb3BwZWQob3BlbkRheSwgJGV2ZW50LmRyb3BEYXRhLmV2ZW50LCAkZXZlbnQuZHJvcERhdGEuZHJhZ2dlZEZyb20pXCI+XG4gICAgICAgICAgPC9td2wtY2FsZW5kYXItb3Blbi1kYXktZXZlbnRzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyTW9udGhWaWV3Q29tcG9uZW50XG4gIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2aWV3IGRhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHZpZXdEYXRlOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBldmVudHMgdG8gZGlzcGxheSBvbiB2aWV3LlxuICAgKiBUaGUgc2NoZW1hIGlzIGF2YWlsYWJsZSBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vbWF0dGxld2lzOTIvY2FsZW5kYXItdXRpbHMvYmxvYi9jNTE2ODk5ODVmNTlhMjcxOTQwZTMwYmM0ZTJjNGUxZmVlM2ZjYjVjL3NyYy9jYWxlbmRhclV0aWxzLnRzI0w0OS1MNjNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGV2ZW50czogQ2FsZW5kYXJFdmVudFtdID0gW107XG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGRheSBpbmRleGVzICgwID0gc3VuZGF5LCAxID0gbW9uZGF5IGV0YykgdGhhdCB3aWxsIGJlIGhpZGRlbiBvbiB0aGUgdmlld1xuICAgKi9cbiAgQElucHV0KClcbiAgZXhjbHVkZURheXM6IG51bWJlcltdID0gW107XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGV2ZW50cyBsaXN0IGZvciB0aGUgZGF5IG9mIHRoZSBgdmlld0RhdGVgIG9wdGlvbiBpcyB2aXNpYmxlIG9yIG5vdFxuICAgKi9cbiAgQElucHV0KClcbiAgYWN0aXZlRGF5SXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEFuIG9ic2VydmFibGUgdGhhdCB3aGVuIGVtaXR0ZWQgb24gd2lsbCByZS1yZW5kZXIgdGhlIGN1cnJlbnQgdmlld1xuICAgKi9cbiAgQElucHV0KClcbiAgcmVmcmVzaDogU3ViamVjdDxhbnk+O1xuXG4gIC8qKlxuICAgKiBUaGUgbG9jYWxlIHVzZWQgdG8gZm9ybWF0IGRhdGVzXG4gICAqL1xuICBASW5wdXQoKVxuICBsb2NhbGU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHBsYWNlbWVudCBvZiB0aGUgZXZlbnQgdG9vbHRpcFxuICAgKi9cbiAgQElucHV0KClcbiAgdG9vbHRpcFBsYWNlbWVudDogUGxhY2VtZW50QXJyYXkgPSAnYXV0byc7XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIGV2ZW50IHRvb2x0aXBzXG4gICAqL1xuICBASW5wdXQoKVxuICB0b29sdGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gYXBwZW5kIHRvb2x0aXBzIHRvIHRoZSBib2R5IG9yIG5leHQgdG8gdGhlIHRyaWdnZXIgZWxlbWVudFxuICAgKi9cbiAgQElucHV0KClcbiAgdG9vbHRpcEFwcGVuZFRvQm9keTogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFRoZSBzdGFydCBudW1iZXIgb2YgdGhlIHdlZWtcbiAgICovXG4gIEBJbnB1dCgpXG4gIHdlZWtTdGFydHNPbjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgdG8gcmVwbGFjZSB0aGUgaGVhZGVyXG4gICAqL1xuICBASW5wdXQoKVxuICBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIHRvIHJlcGxhY2UgdGhlIGRheSBjZWxsXG4gICAqL1xuICBASW5wdXQoKVxuICBjZWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIHNsaWRlIGRvd24gYm94IG9mIGV2ZW50cyBmb3IgdGhlIGFjdGl2ZSBkYXlcbiAgICovXG4gIEBJbnB1dCgpXG4gIG9wZW5EYXlFdmVudHNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciBldmVudCB0aXRsZXNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGV2ZW50VGl0bGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciBldmVudCBhY3Rpb25zXG4gICAqL1xuICBASW5wdXQoKVxuICBldmVudEFjdGlvbnNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgZGF5IGluZGV4ZXMgKDAgPSBzdW5kYXksIDEgPSBtb25kYXkgZXRjKSB0aGF0IGluZGljYXRlIHdoaWNoIGRheXMgYXJlIHdlZWtlbmRzXG4gICAqL1xuICBASW5wdXQoKVxuICB3ZWVrZW5kRGF5czogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIEFuIG91dHB1dCB0aGF0IHdpbGwgYmUgY2FsbGVkIGJlZm9yZSB0aGUgdmlldyBpcyByZW5kZXJlZCBmb3IgdGhlIGN1cnJlbnQgbW9udGguXG4gICAqIElmIHlvdSBhZGQgdGhlIGBjc3NDbGFzc2AgcHJvcGVydHkgdG8gYSBkYXkgaW4gdGhlIGJvZHkgaXQgd2lsbCBhZGQgdGhhdCBjbGFzcyB0byB0aGUgY2VsbCBlbGVtZW50IGluIHRoZSB0ZW1wbGF0ZVxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGJlZm9yZVZpZXdSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENhbGVuZGFyTW9udGhWaWV3QmVmb3JlUmVuZGVyRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBkYXkgY2VsbCBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZGF5Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIGRheTogTW9udGhWaWV3RGF5O1xuICB9PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgZXZlbnQgdGl0bGUgaXMgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGV2ZW50Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuICB9PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiBldmVudCBpcyBkcmFnZ2VkIGFuZCBkcm9wcGVkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZXZlbnRUaW1lc0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFxuICAgIENhbGVuZGFyTW9udGhWaWV3RXZlbnRUaW1lc0NoYW5nZWRFdmVudFxuICA+KCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbHVtbkhlYWRlcnM6IFdlZWtEYXlbXTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdmlldzogTW9udGhWaWV3O1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBvcGVuUm93SW5kZXg6IG51bWJlcjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgb3BlbkRheTogTW9udGhWaWV3RGF5O1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICByZWZyZXNoU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHRyYWNrQnlJbmRleCA9IHRyYWNrQnlJbmRleDtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdHJhY2tCeURhdGUgPSAoaW5kZXg6IG51bWJlciwgZGF5OiBNb250aFZpZXdEYXkpID0+IGRheS5kYXRlLnRvSVNPU3RyaW5nKCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHV0aWxzOiBDYWxlbmRhclV0aWxzLFxuICAgIEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZyxcbiAgICBwcml2YXRlIGRhdGVBZGFwdGVyOiBEYXRlQWRhcHRlclxuICApIHtcbiAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24gPSB0aGlzLnJlZnJlc2guc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoQWxsKCk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnZpZXdEYXRlIHx8IGNoYW5nZXMuZXhjbHVkZURheXMgfHwgY2hhbmdlcy53ZWVrZW5kRGF5cykge1xuICAgICAgdGhpcy5yZWZyZXNoSGVhZGVyKCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuZXZlbnRzKSB7XG4gICAgICB2YWxpZGF0ZUV2ZW50cyh0aGlzLmV2ZW50cyk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2hhbmdlcy52aWV3RGF0ZSB8fFxuICAgICAgY2hhbmdlcy5ldmVudHMgfHxcbiAgICAgIGNoYW5nZXMuZXhjbHVkZURheXMgfHxcbiAgICAgIGNoYW5nZXMud2Vla2VuZERheXNcbiAgICApIHtcbiAgICAgIHRoaXMucmVmcmVzaEJvZHkoKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjaGFuZ2VzLmFjdGl2ZURheUlzT3BlbiB8fFxuICAgICAgY2hhbmdlcy52aWV3RGF0ZSB8fFxuICAgICAgY2hhbmdlcy5ldmVudHMgfHxcbiAgICAgIGNoYW5nZXMuZXhjbHVkZURheXNcbiAgICApIHtcbiAgICAgIHRoaXMuY2hlY2tBY3RpdmVEYXlJc09wZW4oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHRvZ2dsZURheUhpZ2hsaWdodChldmVudDogQ2FsZW5kYXJFdmVudCwgaXNIaWdobGlnaHRlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudmlldy5kYXlzLmZvckVhY2goZGF5ID0+IHtcbiAgICAgIGlmIChpc0hpZ2hsaWdodGVkICYmIGRheS5ldmVudHMuaW5kZXhPZihldmVudCkgPiAtMSkge1xuICAgICAgICBkYXkuYmFja2dyb3VuZENvbG9yID1cbiAgICAgICAgICAoZXZlbnQuY29sb3IgJiYgZXZlbnQuY29sb3Iuc2Vjb25kYXJ5KSB8fCAnI0QxRThGRic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgZGF5LmJhY2tncm91bmRDb2xvcjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBldmVudERyb3BwZWQoXG4gICAgZHJvcHBlZE9uOiBNb250aFZpZXdEYXksXG4gICAgZXZlbnQ6IENhbGVuZGFyRXZlbnQsXG4gICAgZHJhZ2dlZEZyb20/OiBNb250aFZpZXdEYXlcbiAgKTogdm9pZCB7XG4gICAgaWYgKGRyb3BwZWRPbiAhPT0gZHJhZ2dlZEZyb20pIHtcbiAgICAgIGNvbnN0IHllYXI6IG51bWJlciA9IHRoaXMuZGF0ZUFkYXB0ZXIuZ2V0WWVhcihkcm9wcGVkT24uZGF0ZSk7XG4gICAgICBjb25zdCBtb250aDogbnVtYmVyID0gdGhpcy5kYXRlQWRhcHRlci5nZXRNb250aChkcm9wcGVkT24uZGF0ZSk7XG4gICAgICBjb25zdCBkYXRlOiBudW1iZXIgPSB0aGlzLmRhdGVBZGFwdGVyLmdldERhdGUoZHJvcHBlZE9uLmRhdGUpO1xuICAgICAgY29uc3QgbmV3U3RhcnQ6IERhdGUgPSB0aGlzLmRhdGVBZGFwdGVyLnNldERhdGUoXG4gICAgICAgIHRoaXMuZGF0ZUFkYXB0ZXIuc2V0TW9udGgoXG4gICAgICAgICAgdGhpcy5kYXRlQWRhcHRlci5zZXRZZWFyKGV2ZW50LnN0YXJ0LCB5ZWFyKSxcbiAgICAgICAgICBtb250aFxuICAgICAgICApLFxuICAgICAgICBkYXRlXG4gICAgICApO1xuICAgICAgbGV0IG5ld0VuZDogRGF0ZTtcbiAgICAgIGlmIChldmVudC5lbmQpIHtcbiAgICAgICAgY29uc3Qgc2Vjb25kc0RpZmY6IG51bWJlciA9IHRoaXMuZGF0ZUFkYXB0ZXIuZGlmZmVyZW5jZUluU2Vjb25kcyhcbiAgICAgICAgICBuZXdTdGFydCxcbiAgICAgICAgICBldmVudC5zdGFydFxuICAgICAgICApO1xuICAgICAgICBuZXdFbmQgPSB0aGlzLmRhdGVBZGFwdGVyLmFkZFNlY29uZHMoZXZlbnQuZW5kLCBzZWNvbmRzRGlmZik7XG4gICAgICB9XG4gICAgICB0aGlzLmV2ZW50VGltZXNDaGFuZ2VkLmVtaXQoe1xuICAgICAgICBldmVudCxcbiAgICAgICAgbmV3U3RhcnQsXG4gICAgICAgIG5ld0VuZCxcbiAgICAgICAgZGF5OiBkcm9wcGVkT24sXG4gICAgICAgIHR5cGU6IENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudFR5cGUuRHJvcFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoSGVhZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuY29sdW1uSGVhZGVycyA9IHRoaXMudXRpbHMuZ2V0V2Vla1ZpZXdIZWFkZXIoe1xuICAgICAgdmlld0RhdGU6IHRoaXMudmlld0RhdGUsXG4gICAgICB3ZWVrU3RhcnRzT246IHRoaXMud2Vla1N0YXJ0c09uLFxuICAgICAgZXhjbHVkZWQ6IHRoaXMuZXhjbHVkZURheXMsXG4gICAgICB3ZWVrZW5kRGF5czogdGhpcy53ZWVrZW5kRGF5c1xuICAgIH0pO1xuICAgIHRoaXMuZW1pdEJlZm9yZVZpZXdSZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaEJvZHkoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3ID0gdGhpcy51dGlscy5nZXRNb250aFZpZXcoe1xuICAgICAgZXZlbnRzOiB0aGlzLmV2ZW50cyxcbiAgICAgIHZpZXdEYXRlOiB0aGlzLnZpZXdEYXRlLFxuICAgICAgd2Vla1N0YXJ0c09uOiB0aGlzLndlZWtTdGFydHNPbixcbiAgICAgIGV4Y2x1ZGVkOiB0aGlzLmV4Y2x1ZGVEYXlzLFxuICAgICAgd2Vla2VuZERheXM6IHRoaXMud2Vla2VuZERheXNcbiAgICB9KTtcbiAgICB0aGlzLmVtaXRCZWZvcmVWaWV3UmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQWN0aXZlRGF5SXNPcGVuKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZURheUlzT3BlbiA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5vcGVuRGF5ID0gdGhpcy52aWV3LmRheXMuZmluZChkYXkgPT5cbiAgICAgICAgdGhpcy5kYXRlQWRhcHRlci5pc1NhbWVEYXkoZGF5LmRhdGUsIHRoaXMudmlld0RhdGUpXG4gICAgICApO1xuICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9IHRoaXMudmlldy5kYXlzLmluZGV4T2YodGhpcy5vcGVuRGF5KTtcbiAgICAgIHRoaXMub3BlblJvd0luZGV4ID1cbiAgICAgICAgTWF0aC5mbG9vcihpbmRleCAvIHRoaXMudmlldy50b3RhbERheXNWaXNpYmxlSW5XZWVrKSAqXG4gICAgICAgIHRoaXMudmlldy50b3RhbERheXNWaXNpYmxlSW5XZWVrO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW5Sb3dJbmRleCA9IG51bGw7XG4gICAgICB0aGlzLm9wZW5EYXkgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaEFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbHVtbkhlYWRlcnMgPSBudWxsO1xuICAgIHRoaXMudmlldyA9IG51bGw7XG4gICAgdGhpcy5yZWZyZXNoSGVhZGVyKCk7XG4gICAgdGhpcy5yZWZyZXNoQm9keSgpO1xuICAgIHRoaXMuY2hlY2tBY3RpdmVEYXlJc09wZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdEJlZm9yZVZpZXdSZW5kZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sdW1uSGVhZGVycyAmJiB0aGlzLnZpZXcpIHtcbiAgICAgIHRoaXMuYmVmb3JlVmlld1JlbmRlci5lbWl0KHtcbiAgICAgICAgaGVhZGVyOiB0aGlzLmNvbHVtbkhlYWRlcnMsXG4gICAgICAgIGJvZHk6IHRoaXMudmlldy5kYXlzLFxuICAgICAgICBwZXJpb2Q6IHRoaXMudmlldy5wZXJpb2RcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdlZWtEYXkgfSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyB0cmFja0J5V2Vla0RheUhlYWRlckRhdGUgfSBmcm9tICcuLi9jb21tb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ213bC1jYWxlbmRhci1tb250aC12aWV3LWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICAjZGVmYXVsdFRlbXBsYXRlXG4gICAgICBsZXQtZGF5cz1cImRheXNcIlxuICAgICAgbGV0LWxvY2FsZT1cImxvY2FsZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbC1jZWxsLXJvdyBjYWwtaGVhZGVyXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImNhbC1jZWxsXCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgZGF5IG9mIGRheXM7IHRyYWNrQnk6dHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlXCJcbiAgICAgICAgICBbY2xhc3MuY2FsLXBhc3RdPVwiZGF5LmlzUGFzdFwiXG4gICAgICAgICAgW2NsYXNzLmNhbC10b2RheV09XCJkYXkuaXNUb2RheVwiXG4gICAgICAgICAgW2NsYXNzLmNhbC1mdXR1cmVdPVwiZGF5LmlzRnV0dXJlXCJcbiAgICAgICAgICBbY2xhc3MuY2FsLXdlZWtlbmRdPVwiZGF5LmlzV2Vla2VuZFwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiZGF5LmNzc0NsYXNzXCI+XG4gICAgICAgICAge3sgZGF5LmRhdGUgfCBjYWxlbmRhckRhdGU6J21vbnRoVmlld0NvbHVtbkhlYWRlcic6bG9jYWxlIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2RheXM6IGRheXMsIGxvY2FsZTogbG9jYWxlfVwiPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb250aFZpZXdIZWFkZXJDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBkYXlzOiBXZWVrRGF5W107XG5cbiAgQElucHV0KClcbiAgbG9jYWxlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlID0gdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlO1xufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9udGhWaWV3RGF5LCBDYWxlbmRhckV2ZW50IH0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgdHJhY2tCeUV2ZW50SWQgfSBmcm9tICcuLi9jb21tb24vdXRpbCc7XG5pbXBvcnQgeyBQbGFjZW1lbnRBcnJheSB9IGZyb20gJ3Bvc2l0aW9uaW5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXdsLWNhbGVuZGFyLW1vbnRoLWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgI2RlZmF1bHRUZW1wbGF0ZVxuICAgICAgbGV0LWRheT1cImRheVwiXG4gICAgICBsZXQtb3BlbkRheT1cIm9wZW5EYXlcIlxuICAgICAgbGV0LWxvY2FsZT1cImxvY2FsZVwiXG4gICAgICBsZXQtdG9vbHRpcFBsYWNlbWVudD1cInRvb2x0aXBQbGFjZW1lbnRcIlxuICAgICAgbGV0LWhpZ2hsaWdodERheT1cImhpZ2hsaWdodERheVwiXG4gICAgICBsZXQtdW5oaWdobGlnaHREYXk9XCJ1bmhpZ2hsaWdodERheVwiXG4gICAgICBsZXQtZXZlbnRDbGlja2VkPVwiZXZlbnRDbGlja2VkXCJcbiAgICAgIGxldC10b29sdGlwVGVtcGxhdGU9XCJ0b29sdGlwVGVtcGxhdGVcIlxuICAgICAgbGV0LXRvb2x0aXBBcHBlbmRUb0JvZHk9XCJ0b29sdGlwQXBwZW5kVG9Cb2R5XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsLWNlbGwtdG9wXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FsLWRheS1iYWRnZVwiICpuZ0lmPVwiZGF5LmJhZGdlVG90YWwgPiAwXCI+e3sgZGF5LmJhZGdlVG90YWwgfX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2FsLWRheS1udW1iZXJcIj57eyBkYXkuZGF0ZSB8IGNhbGVuZGFyRGF0ZTonbW9udGhWaWV3RGF5TnVtYmVyJzpsb2NhbGUgfX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWwtZXZlbnRzXCIgKm5nSWY9XCJkYXkuZXZlbnRzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiY2FsLWV2ZW50XCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgZXZlbnQgb2YgZGF5LmV2ZW50czsgdHJhY2tCeTp0cmFja0J5RXZlbnRJZFwiXG4gICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJldmVudC5jb2xvcj8ucHJpbWFyeVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiZXZlbnQ/LmNzc0NsYXNzXCJcbiAgICAgICAgICAobW91c2VlbnRlcik9XCJoaWdobGlnaHREYXkuZW1pdCh7ZXZlbnQ6IGV2ZW50fSlcIlxuICAgICAgICAgIChtb3VzZWxlYXZlKT1cInVuaGlnaGxpZ2h0RGF5LmVtaXQoe2V2ZW50OiBldmVudH0pXCJcbiAgICAgICAgICBbbXdsQ2FsZW5kYXJUb29sdGlwXT1cImV2ZW50LnRpdGxlIHwgY2FsZW5kYXJFdmVudFRpdGxlOidtb250aFRvb2x0aXAnOmV2ZW50XCJcbiAgICAgICAgICBbdG9vbHRpcFBsYWNlbWVudF09XCJ0b29sdGlwUGxhY2VtZW50XCJcbiAgICAgICAgICBbdG9vbHRpcEV2ZW50XT1cImV2ZW50XCJcbiAgICAgICAgICBbdG9vbHRpcFRlbXBsYXRlXT1cInRvb2x0aXBUZW1wbGF0ZVwiXG4gICAgICAgICAgW3Rvb2x0aXBBcHBlbmRUb0JvZHldPVwidG9vbHRpcEFwcGVuZFRvQm9keVwiXG4gICAgICAgICAgbXdsRHJhZ2dhYmxlXG4gICAgICAgICAgW2NsYXNzLmNhbC1kcmFnZ2FibGVdPVwiZXZlbnQuZHJhZ2dhYmxlXCJcbiAgICAgICAgICBkcmFnQWN0aXZlQ2xhc3M9XCJjYWwtZHJhZy1hY3RpdmVcIlxuICAgICAgICAgIFtkcm9wRGF0YV09XCJ7ZXZlbnQ6IGV2ZW50LCBkcmFnZ2VkRnJvbTogZGF5fVwiXG4gICAgICAgICAgW2RyYWdBeGlzXT1cInt4OiBldmVudC5kcmFnZ2FibGUsIHk6IGV2ZW50LmRyYWdnYWJsZX1cIlxuICAgICAgICAgIChtd2xDbGljayk9XCJldmVudENsaWNrZWQuZW1pdCh7IGV2ZW50OiBldmVudCB9KVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgZGF5OiBkYXksXG4gICAgICAgIG9wZW5EYXk6IG9wZW5EYXksXG4gICAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgICB0b29sdGlwUGxhY2VtZW50OiB0b29sdGlwUGxhY2VtZW50LFxuICAgICAgICBoaWdobGlnaHREYXk6IGhpZ2hsaWdodERheSxcbiAgICAgICAgdW5oaWdobGlnaHREYXk6IHVuaGlnaGxpZ2h0RGF5LFxuICAgICAgICBldmVudENsaWNrZWQ6IGV2ZW50Q2xpY2tlZCxcbiAgICAgICAgdG9vbHRpcFRlbXBsYXRlOiB0b29sdGlwVGVtcGxhdGUsXG4gICAgICAgIHRvb2x0aXBBcHBlbmRUb0JvZHk6IHRvb2x0aXBBcHBlbmRUb0JvZHlcbiAgICAgIH1cIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdjYWwtY2VsbCBjYWwtZGF5LWNlbGwnLFxuICAgICdbY2xhc3MuY2FsLXBhc3RdJzogJ2RheS5pc1Bhc3QnLFxuICAgICdbY2xhc3MuY2FsLXRvZGF5XSc6ICdkYXkuaXNUb2RheScsXG4gICAgJ1tjbGFzcy5jYWwtZnV0dXJlXSc6ICdkYXkuaXNGdXR1cmUnLFxuICAgICdbY2xhc3MuY2FsLXdlZWtlbmRdJzogJ2RheS5pc1dlZWtlbmQnLFxuICAgICdbY2xhc3MuY2FsLWluLW1vbnRoXSc6ICdkYXkuaW5Nb250aCcsXG4gICAgJ1tjbGFzcy5jYWwtb3V0LW1vbnRoXSc6ICchZGF5LmluTW9udGgnLFxuICAgICdbY2xhc3MuY2FsLWhhcy1ldmVudHNdJzogJ2RheS5ldmVudHMubGVuZ3RoID4gMCcsXG4gICAgJ1tjbGFzcy5jYWwtb3Blbl0nOiAnZGF5ID09PSBvcGVuRGF5JyxcbiAgICAnW2NsYXNzLmNhbC1ldmVudC1oaWdobGlnaHRdJzogJyEhZGF5LmJhY2tncm91bmRDb2xvcicsXG4gICAgJ1tzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdJzogJ2RheS5iYWNrZ3JvdW5kQ29sb3InXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb250aENlbGxDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBkYXk6IE1vbnRoVmlld0RheTtcblxuICBASW5wdXQoKVxuICBvcGVuRGF5OiBNb250aFZpZXdEYXk7XG5cbiAgQElucHV0KClcbiAgbG9jYWxlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgdG9vbHRpcFBsYWNlbWVudDogUGxhY2VtZW50QXJyYXk7XG5cbiAgQElucHV0KClcbiAgdG9vbHRpcEFwcGVuZFRvQm9keTogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICB0b29sdGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQE91dHB1dCgpXG4gIGhpZ2hsaWdodERheTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIHVuaGlnaGxpZ2h0RGF5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KClcbiAgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8eyBldmVudDogQ2FsZW5kYXJFdmVudCB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuICB9PigpO1xuXG4gIHRyYWNrQnlFdmVudElkID0gdHJhY2tCeUV2ZW50SWQ7XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgYW5pbWF0ZSxcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IHRyYWNrQnlFdmVudElkIH0gZnJvbSAnLi4vY29tbW9uL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgY29sbGFwc2VBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ2NvbGxhcHNlJywgW1xuICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgc3R5bGUoeyBoZWlnaHQ6IDAsIG92ZXJmbG93OiAnaGlkZGVuJyB9KSxcbiAgICBhbmltYXRlKCcxNTBtcycsIHN0eWxlKHsgaGVpZ2h0OiAnKicgfSkpXG4gIF0pLFxuICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgc3R5bGUoeyBoZWlnaHQ6ICcqJywgb3ZlcmZsb3c6ICdoaWRkZW4nIH0pLFxuICAgIGFuaW1hdGUoJzE1MG1zJywgc3R5bGUoeyBoZWlnaHQ6IDAgfSkpXG4gIF0pXG5dKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXdsLWNhbGVuZGFyLW9wZW4tZGF5LWV2ZW50cycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICAjZGVmYXVsdFRlbXBsYXRlXG4gICAgICBsZXQtZXZlbnRzPVwiZXZlbnRzXCJcbiAgICAgIGxldC1ldmVudENsaWNrZWQ9XCJldmVudENsaWNrZWRcIlxuICAgICAgbGV0LWlzT3Blbj1cImlzT3BlblwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbC1vcGVuLWRheS1ldmVudHNcIiBbQGNvbGxhcHNlXSAqbmdJZj1cImlzT3BlblwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgKm5nRm9yPVwibGV0IGV2ZW50IG9mIGV2ZW50czsgdHJhY2tCeTp0cmFja0J5RXZlbnRJZFwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiZXZlbnQ/LmNzc0NsYXNzXCJcbiAgICAgICAgICBtd2xEcmFnZ2FibGVcbiAgICAgICAgICBbY2xhc3MuY2FsLWRyYWdnYWJsZV09XCJldmVudC5kcmFnZ2FibGVcIlxuICAgICAgICAgIGRyYWdBY3RpdmVDbGFzcz1cImNhbC1kcmFnLWFjdGl2ZVwiXG4gICAgICAgICAgW2Ryb3BEYXRhXT1cIntldmVudDogZXZlbnR9XCJcbiAgICAgICAgICBbZHJhZ0F4aXNdPVwie3g6IGV2ZW50LmRyYWdnYWJsZSwgeTogZXZlbnQuZHJhZ2dhYmxlfVwiPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzcz1cImNhbC1ldmVudFwiXG4gICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImV2ZW50LmNvbG9yPy5wcmltYXJ5XCI+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICZuZ3NwO1xuICAgICAgICAgIDxtd2wtY2FsZW5kYXItZXZlbnQtdGl0bGVcbiAgICAgICAgICAgIFtldmVudF09XCJldmVudFwiXG4gICAgICAgICAgICBbY3VzdG9tVGVtcGxhdGVdPVwiZXZlbnRUaXRsZVRlbXBsYXRlXCJcbiAgICAgICAgICAgIHZpZXc9XCJtb250aFwiXG4gICAgICAgICAgICAobXdsQ2xpY2spPVwiZXZlbnRDbGlja2VkLmVtaXQoe2V2ZW50OiBldmVudH0pXCI+XG4gICAgICAgICAgPC9td2wtY2FsZW5kYXItZXZlbnQtdGl0bGU+XG4gICAgICAgICAgJm5nc3A7XG4gICAgICAgICAgPG13bC1jYWxlbmRhci1ldmVudC1hY3Rpb25zXG4gICAgICAgICAgICBbZXZlbnRdPVwiZXZlbnRcIlxuICAgICAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImV2ZW50QWN0aW9uc1RlbXBsYXRlXCI+XG4gICAgICAgICAgPC9td2wtY2FsZW5kYXItZXZlbnQtYWN0aW9ucz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7XG4gICAgICAgIGV2ZW50czogZXZlbnRzLFxuICAgICAgICBldmVudENsaWNrZWQ6IGV2ZW50Q2xpY2tlZCxcbiAgICAgICAgaXNPcGVuOiBpc09wZW5cbiAgICAgIH1cIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBhbmltYXRpb25zOiBbY29sbGFwc2VBbmltYXRpb25dXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyT3BlbkRheUV2ZW50c0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGV2ZW50czogQ2FsZW5kYXJFdmVudFtdO1xuXG4gIEBJbnB1dCgpXG4gIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIGV2ZW50VGl0bGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBldmVudEFjdGlvbnNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KClcbiAgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8eyBldmVudDogQ2FsZW5kYXJFdmVudCB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuICB9PigpO1xuXG4gIHRyYWNrQnlFdmVudElkID0gdHJhY2tCeUV2ZW50SWQ7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERyYWdBbmREcm9wTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1kcmFnZ2FibGUtZHJvcHBhYmxlJztcbmltcG9ydCB7IENhbGVuZGFyTW9udGhWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci1tb250aC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhck1vbnRoVmlld0hlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItbW9udGgtdmlldy1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyTW9udGhDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci1tb250aC1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhck9wZW5EYXlFdmVudHNDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLW9wZW4tZGF5LWV2ZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY2FsZW5kYXItY29tbW9uLm1vZHVsZSc7XG5cbmV4cG9ydCB7XG4gIENhbGVuZGFyTW9udGhWaWV3Q29tcG9uZW50LFxuICBDYWxlbmRhck1vbnRoVmlld0JlZm9yZVJlbmRlckV2ZW50LFxuICBDYWxlbmRhck1vbnRoVmlld0V2ZW50VGltZXNDaGFuZ2VkRXZlbnRcbn0gZnJvbSAnLi9jYWxlbmRhci1tb250aC12aWV3LmNvbXBvbmVudCc7XG5leHBvcnQgeyBNb250aFZpZXdEYXkgYXMgQ2FsZW5kYXJNb250aFZpZXdEYXkgfSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5leHBvcnQgeyBjb2xsYXBzZUFuaW1hdGlvbiB9IGZyb20gJy4vY2FsZW5kYXItb3Blbi1kYXktZXZlbnRzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERyYWdBbmREcm9wTW9kdWxlLCBDYWxlbmRhckNvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENhbGVuZGFyTW9udGhWaWV3Q29tcG9uZW50LFxuICAgIENhbGVuZGFyTW9udGhDZWxsQ29tcG9uZW50LFxuICAgIENhbGVuZGFyT3BlbkRheUV2ZW50c0NvbXBvbmVudCxcbiAgICBDYWxlbmRhck1vbnRoVmlld0hlYWRlckNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRHJhZ0FuZERyb3BNb2R1bGUsXG4gICAgQ2FsZW5kYXJNb250aFZpZXdDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJNb250aENlbGxDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJPcGVuRGF5RXZlbnRzQ29tcG9uZW50LFxuICAgIENhbGVuZGFyTW9udGhWaWV3SGVhZGVyQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb250aE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgaXNJbnNpZGUgfSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBEUkFHX1RIUkVTSE9MRCA9IDE7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhckRyYWdIZWxwZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHN0YXJ0UG9zaXRpb246IENsaWVudFJlY3Q7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkcmFnQ29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgZHJhZ2dhYmxlRWxlbWVudDogSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgdGhpcy5zdGFydFBvc2l0aW9uID0gZHJhZ2dhYmxlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIHZhbGlkYXRlRHJhZyh7XG4gICAgeCxcbiAgICB5LFxuICAgIHNuYXBEcmFnZ2VkRXZlbnRzXG4gIH06IHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHNuYXBEcmFnZ2VkRXZlbnRzOiBib29sZWFuO1xuICB9KTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNXaXRoaW5UaHJlc2hvbGQgPVxuICAgICAgTWF0aC5hYnMoeCkgPiBEUkFHX1RIUkVTSE9MRCB8fCBNYXRoLmFicyh5KSA+IERSQUdfVEhSRVNIT0xEO1xuXG4gICAgaWYgKHNuYXBEcmFnZ2VkRXZlbnRzKSB7XG4gICAgICBjb25zdCBuZXdSZWN0OiBDbGllbnRSZWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGFydFBvc2l0aW9uLCB7XG4gICAgICAgIGxlZnQ6IHRoaXMuc3RhcnRQb3NpdGlvbi5sZWZ0ICsgeCxcbiAgICAgICAgcmlnaHQ6IHRoaXMuc3RhcnRQb3NpdGlvbi5yaWdodCArIHgsXG4gICAgICAgIHRvcDogdGhpcy5zdGFydFBvc2l0aW9uLnRvcCArIHksXG4gICAgICAgIGJvdHRvbTogdGhpcy5zdGFydFBvc2l0aW9uLmJvdHRvbSArIHlcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICBpc1dpdGhpblRocmVzaG9sZCAmJlxuICAgICAgICBpc0luc2lkZSh0aGlzLmRyYWdDb250YWluZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBuZXdSZWN0KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGlzV2l0aGluVGhyZXNob2xkO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgaXNJbnNpZGUgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJSZXNpemVIZWxwZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlc2l6ZUNvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHByaXZhdGUgbWluV2lkdGg/OiBudW1iZXJcbiAgKSB7fVxuXG4gIHZhbGlkYXRlUmVzaXplKHsgcmVjdGFuZ2xlIH06IHsgcmVjdGFuZ2xlOiBDbGllbnRSZWN0IH0pOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLm1pbldpZHRoICYmXG4gICAgICBNYXRoLmNlaWwocmVjdGFuZ2xlLndpZHRoKSA8IE1hdGguY2VpbCh0aGlzLm1pbldpZHRoKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBpc0luc2lkZShcbiAgICAgIHRoaXMucmVzaXplQ29udGFpbmVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHJlY3RhbmdsZVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgTE9DQUxFX0lELFxuICBJbmplY3QsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBXZWVrRGF5LFxuICBDYWxlbmRhckV2ZW50LFxuICBXZWVrVmlld0FsbERheUV2ZW50LFxuICBXZWVrVmlldyxcbiAgVmlld1BlcmlvZCxcbiAgV2Vla1ZpZXdIb3VyQ29sdW1uLFxuICBEYXlWaWV3RXZlbnQsXG4gIERheVZpZXdIb3VyU2VnbWVudCxcbiAgRGF5Vmlld0hvdXJcbn0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgUmVzaXplRXZlbnQgfSBmcm9tICdhbmd1bGFyLXJlc2l6YWJsZS1lbGVtZW50JztcbmltcG9ydCB7IENhbGVuZGFyRHJhZ0hlbHBlciB9IGZyb20gJy4uL2NvbW1vbi9jYWxlbmRhci1kcmFnLWhlbHBlci5wcm92aWRlcic7XG5pbXBvcnQgeyBDYWxlbmRhclJlc2l6ZUhlbHBlciB9IGZyb20gJy4uL2NvbW1vbi9jYWxlbmRhci1yZXNpemUtaGVscGVyLnByb3ZpZGVyJztcbmltcG9ydCB7XG4gIENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudCxcbiAgQ2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50VHlwZVxufSBmcm9tICcuLi9jb21tb24vY2FsZW5kYXItZXZlbnQtdGltZXMtY2hhbmdlZC1ldmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FsZW5kYXJVdGlscyB9IGZyb20gJy4uL2NvbW1vbi9jYWxlbmRhci11dGlscy5wcm92aWRlcic7XG5pbXBvcnQge1xuICB2YWxpZGF0ZUV2ZW50cyxcbiAgdHJhY2tCeUluZGV4LFxuICByb3VuZFRvTmVhcmVzdCxcbiAgdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlLFxuICB0cmFja0J5SG91clNlZ21lbnQsXG4gIHRyYWNrQnlIb3VyLFxuICBnZXRNaW51dGVzTW92ZWQsXG4gIGdldERlZmF1bHRFdmVudEVuZCxcbiAgZ2V0TWluaW11bUV2ZW50SGVpZ2h0SW5NaW51dGVzLFxuICBhZGREYXlzV2l0aEV4Y2x1c2lvbnMsXG4gIHRyYWNrQnlEYXlPcldlZWtFdmVudCxcbiAgaXNEcmFnZ2VkV2l0aGluUGVyaW9kLFxuICBzaG91bGRGaXJlRHJvcHBlZEV2ZW50LFxuICBnZXRXZWVrVmlld1BlcmlvZFxufSBmcm9tICcuLi9jb21tb24vdXRpbCc7XG5pbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gJy4uLy4uL2RhdGUtYWRhcHRlcnMvZGF0ZS1hZGFwdGVyJztcbmltcG9ydCB7XG4gIERyYWdFbmRFdmVudCxcbiAgRHJvcEV2ZW50LFxuICBEcmFnTW92ZUV2ZW50XG59IGZyb20gJ2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZSc7XG5pbXBvcnQgeyBQbGFjZW1lbnRBcnJheSB9IGZyb20gJ3Bvc2l0aW9uaW5nJztcblxuZXhwb3J0IGludGVyZmFjZSBXZWVrVmlld0FsbERheUV2ZW50UmVzaXplIHtcbiAgb3JpZ2luYWxPZmZzZXQ6IG51bWJlcjtcbiAgb3JpZ2luYWxTcGFuOiBudW1iZXI7XG4gIGVkZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYWxlbmRhcldlZWtWaWV3QmVmb3JlUmVuZGVyRXZlbnQgZXh0ZW5kcyBXZWVrVmlldyB7XG4gIGhlYWRlcjogV2Vla0RheVtdO1xufVxuXG4vKipcbiAqIFNob3dzIGFsbCBldmVudHMgb24gYSBnaXZlbiB3ZWVrLiBFeGFtcGxlIHVzYWdlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIDxtd2wtY2FsZW5kYXItd2Vlay12aWV3XG4gKiAgW3ZpZXdEYXRlXT1cInZpZXdEYXRlXCJcbiAqICBbZXZlbnRzXT1cImV2ZW50c1wiPlxuICogPC9td2wtY2FsZW5kYXItd2Vlay12aWV3PlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ213bC1jYWxlbmRhci13ZWVrLXZpZXcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjYWwtd2Vlay12aWV3XCI+XG4gICAgICA8bXdsLWNhbGVuZGFyLXdlZWstdmlldy1oZWFkZXJcbiAgICAgICAgW2RheXNdPVwiZGF5c1wiXG4gICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImhlYWRlclRlbXBsYXRlXCJcbiAgICAgICAgKGRheUhlYWRlckNsaWNrZWQpPVwiZGF5SGVhZGVyQ2xpY2tlZC5lbWl0KCRldmVudClcIlxuICAgICAgICAoZXZlbnREcm9wcGVkKT1cImV2ZW50RHJvcHBlZCh7ZHJvcERhdGE6ICRldmVudH0sICRldmVudC5uZXdTdGFydCwgdHJ1ZSlcIj5cbiAgICAgIDwvbXdsLWNhbGVuZGFyLXdlZWstdmlldy1oZWFkZXI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY2FsLWFsbC1kYXktZXZlbnRzXCJcbiAgICAgICAgI2FsbERheUV2ZW50c0NvbnRhaW5lclxuICAgICAgICAqbmdJZj1cInZpZXcuYWxsRGF5RXZlbnRSb3dzLmxlbmd0aCA+IDBcIlxuICAgICAgICBtd2xEcm9wcGFibGVcbiAgICAgICAgKGRyYWdFbnRlcik9XCJldmVudERyYWdFbnRlciA9IGV2ZW50RHJhZ0VudGVyICsgMVwiXG4gICAgICAgIChkcmFnTGVhdmUpPVwiZXZlbnREcmFnRW50ZXIgPSBldmVudERyYWdFbnRlciAtIDFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbC1kYXktY29sdW1uc1wiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiY2FsLXRpbWUtbGFiZWwtY29sdW1uXCJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFsbERheUV2ZW50c0xhYmVsVGVtcGxhdGVcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImNhbC1kYXktY29sdW1uXCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBkYXkgb2YgZGF5czsgdHJhY2tCeTp0cmFja0J5V2Vla0RheUhlYWRlckRhdGVcIlxuICAgICAgICAgICAgbXdsRHJvcHBhYmxlXG4gICAgICAgICAgICBkcmFnT3ZlckNsYXNzPVwiY2FsLWRyYWctb3ZlclwiXG4gICAgICAgICAgICAoZHJvcCk9XCJldmVudERyb3BwZWQoJGV2ZW50LCBkYXkuZGF0ZSwgdHJ1ZSlcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgZXZlbnRSb3cgb2Ygdmlldy5hbGxEYXlFdmVudFJvd3M7IHRyYWNrQnk6dHJhY2tCeUluZGV4XCJcbiAgICAgICAgICAjZXZlbnRSb3dDb250YWluZXJcbiAgICAgICAgICBjbGFzcz1cImNhbC1ldmVudHMtcm93XCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGFsbERheUV2ZW50IG9mIGV2ZW50Um93LnJvdzsgdHJhY2tCeTp0cmFja0J5RGF5T3JXZWVrRXZlbnRcIlxuICAgICAgICAgICAgI2V2ZW50XG4gICAgICAgICAgICBjbGFzcz1cImNhbC1ldmVudC1jb250YWluZXJcIlxuICAgICAgICAgICAgW2NsYXNzLmNhbC1kcmFnZ2FibGVdPVwiYWxsRGF5RXZlbnQuZXZlbnQuZHJhZ2dhYmxlICYmIGFsbERheUV2ZW50UmVzaXplcy5zaXplID09PSAwXCJcbiAgICAgICAgICAgIFtjbGFzcy5jYWwtc3RhcnRzLXdpdGhpbi13ZWVrXT1cIiFhbGxEYXlFdmVudC5zdGFydHNCZWZvcmVXZWVrXCJcbiAgICAgICAgICAgIFtjbGFzcy5jYWwtZW5kcy13aXRoaW4td2Vla109XCIhYWxsRGF5RXZlbnQuZW5kc0FmdGVyV2Vla1wiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJhbGxEYXlFdmVudC5ldmVudD8uY3NzQ2xhc3NcIlxuICAgICAgICAgICAgW3N0eWxlLndpZHRoLiVdPVwiKDEwMCAvIGRheXMubGVuZ3RoKSAqIGFsbERheUV2ZW50LnNwYW5cIlxuICAgICAgICAgICAgW3N0eWxlLm1hcmdpbkxlZnQuJV09XCIoMTAwIC8gZGF5cy5sZW5ndGgpICogYWxsRGF5RXZlbnQub2Zmc2V0XCJcbiAgICAgICAgICAgIG13bFJlc2l6YWJsZVxuICAgICAgICAgICAgW3Jlc2l6ZVNuYXBHcmlkXT1cIntsZWZ0OiBkYXlDb2x1bW5XaWR0aCwgcmlnaHQ6IGRheUNvbHVtbldpZHRofVwiXG4gICAgICAgICAgICBbdmFsaWRhdGVSZXNpemVdPVwidmFsaWRhdGVSZXNpemVcIlxuICAgICAgICAgICAgKHJlc2l6ZVN0YXJ0KT1cImFsbERheUV2ZW50UmVzaXplU3RhcnRlZChldmVudFJvd0NvbnRhaW5lciwgYWxsRGF5RXZlbnQsICRldmVudClcIlxuICAgICAgICAgICAgKHJlc2l6aW5nKT1cImFsbERheUV2ZW50UmVzaXppbmcoYWxsRGF5RXZlbnQsICRldmVudCwgZGF5Q29sdW1uV2lkdGgpXCJcbiAgICAgICAgICAgIChyZXNpemVFbmQpPVwiYWxsRGF5RXZlbnRSZXNpemVFbmRlZChhbGxEYXlFdmVudClcIlxuICAgICAgICAgICAgbXdsRHJhZ2dhYmxlXG4gICAgICAgICAgICBkcmFnQWN0aXZlQ2xhc3M9XCJjYWwtZHJhZy1hY3RpdmVcIlxuICAgICAgICAgICAgW2Ryb3BEYXRhXT1cIntldmVudDogYWxsRGF5RXZlbnQuZXZlbnQsIGNhbGVuZGFySWQ6IGNhbGVuZGFySWR9XCJcbiAgICAgICAgICAgIFtkcmFnQXhpc109XCJ7XG4gICAgICAgICAgICAgIHg6IGFsbERheUV2ZW50LmV2ZW50LmRyYWdnYWJsZSAmJiBhbGxEYXlFdmVudFJlc2l6ZXMuc2l6ZSA9PT0gMCxcbiAgICAgICAgICAgICAgeTogIXNuYXBEcmFnZ2VkRXZlbnRzICYmIGFsbERheUV2ZW50LmV2ZW50LmRyYWdnYWJsZSAmJiBhbGxEYXlFdmVudFJlc2l6ZXMuc2l6ZSA9PT0gMFxuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICBbZHJhZ1NuYXBHcmlkXT1cInNuYXBEcmFnZ2VkRXZlbnRzID8ge3g6IGRheUNvbHVtbldpZHRofSA6IHt9XCJcbiAgICAgICAgICAgIFt2YWxpZGF0ZURyYWddPVwidmFsaWRhdGVEcmFnXCJcbiAgICAgICAgICAgIChkcmFnUG9pbnRlckRvd24pPVwiZHJhZ1N0YXJ0ZWQoZXZlbnRSb3dDb250YWluZXIsIGV2ZW50KVwiXG4gICAgICAgICAgICAoZHJhZ0VuZCk9XCJkcmFnRW5kZWQoYWxsRGF5RXZlbnQsICRldmVudCwgZGF5Q29sdW1uV2lkdGgpXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwiY2FsLXJlc2l6ZS1oYW5kbGUgY2FsLXJlc2l6ZS1oYW5kbGUtYmVmb3JlLXN0YXJ0XCJcbiAgICAgICAgICAgICAgKm5nSWY9XCJhbGxEYXlFdmVudC5ldmVudD8ucmVzaXphYmxlPy5iZWZvcmVTdGFydCAmJiAhYWxsRGF5RXZlbnQuc3RhcnRzQmVmb3JlV2Vla1wiXG4gICAgICAgICAgICAgIG13bFJlc2l6ZUhhbmRsZVxuICAgICAgICAgICAgICBbcmVzaXplRWRnZXNdPVwieyBsZWZ0OiB0cnVlIH1cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG13bC1jYWxlbmRhci13ZWVrLXZpZXctZXZlbnRcbiAgICAgICAgICAgICAgW3dlZWtFdmVudF09XCJhbGxEYXlFdmVudFwiXG4gICAgICAgICAgICAgIFt0b29sdGlwUGxhY2VtZW50XT1cInRvb2x0aXBQbGFjZW1lbnRcIlxuICAgICAgICAgICAgICBbdG9vbHRpcFRlbXBsYXRlXT1cInRvb2x0aXBUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgIFt0b29sdGlwQXBwZW5kVG9Cb2R5XT1cInRvb2x0aXBBcHBlbmRUb0JvZHlcIlxuICAgICAgICAgICAgICBbY3VzdG9tVGVtcGxhdGVdPVwiZXZlbnRUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgIFtldmVudFRpdGxlVGVtcGxhdGVdPVwiZXZlbnRUaXRsZVRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgW2V2ZW50QWN0aW9uc1RlbXBsYXRlXT1cImV2ZW50QWN0aW9uc1RlbXBsYXRlXCJcbiAgICAgICAgICAgICAgKGV2ZW50Q2xpY2tlZCk9XCJldmVudENsaWNrZWQuZW1pdCh7ZXZlbnQ6IGFsbERheUV2ZW50LmV2ZW50fSlcIj5cbiAgICAgICAgICAgIDwvbXdsLWNhbGVuZGFyLXdlZWstdmlldy1ldmVudD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJjYWwtcmVzaXplLWhhbmRsZSBjYWwtcmVzaXplLWhhbmRsZS1hZnRlci1lbmRcIlxuICAgICAgICAgICAgICAqbmdJZj1cImFsbERheUV2ZW50LmV2ZW50Py5yZXNpemFibGU/LmFmdGVyRW5kICYmICFhbGxEYXlFdmVudC5lbmRzQWZ0ZXJXZWVrXCJcbiAgICAgICAgICAgICAgbXdsUmVzaXplSGFuZGxlXG4gICAgICAgICAgICAgIFtyZXNpemVFZGdlc109XCJ7IHJpZ2h0OiB0cnVlIH1cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImNhbC10aW1lLWV2ZW50c1wiXG4gICAgICAgIG13bERyb3BwYWJsZVxuICAgICAgICAoZHJhZ0VudGVyKT1cImV2ZW50RHJhZ0VudGVyID0gZXZlbnREcmFnRW50ZXIgKyAxXCJcbiAgICAgICAgKGRyYWdMZWF2ZSk9XCJldmVudERyYWdFbnRlciA9IGV2ZW50RHJhZ0VudGVyIC0gMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLXRpbWUtbGFiZWwtY29sdW1uXCIgKm5nSWY9XCJ2aWV3LmhvdXJDb2x1bW5zLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaG91ciBvZiB2aWV3LmhvdXJDb2x1bW5zWzBdLmhvdXJzOyB0cmFja0J5OnRyYWNrQnlIb3VyOyBsZXQgb2RkID0gb2RkXCJcbiAgICAgICAgICAgIGNsYXNzPVwiY2FsLWhvdXJcIlxuICAgICAgICAgICAgW2NsYXNzLmNhbC1ob3VyLW9kZF09XCJvZGRcIj5cbiAgICAgICAgICAgIDxtd2wtY2FsZW5kYXItd2Vlay12aWV3LWhvdXItc2VnbWVudFxuICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgc2VnbWVudCBvZiBob3VyLnNlZ21lbnRzOyB0cmFja0J5OnRyYWNrQnlIb3VyU2VnbWVudFwiXG4gICAgICAgICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwiaG91clNlZ21lbnRIZWlnaHRcIlxuICAgICAgICAgICAgICBbc2VnbWVudF09XCJzZWdtZW50XCJcbiAgICAgICAgICAgICAgW3NlZ21lbnRIZWlnaHRdPVwiaG91clNlZ21lbnRIZWlnaHRcIlxuICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJob3VyU2VnbWVudFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgW2lzVGltZUxhYmVsXT1cInRydWVcIj5cbiAgICAgICAgICAgIDwvbXdsLWNhbGVuZGFyLXdlZWstdmlldy1ob3VyLXNlZ21lbnQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJjYWwtZGF5LWNvbHVtbnNcIlxuICAgICAgICAgIFtjbGFzcy5jYWwtcmVzaXplLWFjdGl2ZV09XCJ0aW1lRXZlbnRSZXNpemVzLnNpemUgPiAwXCJcbiAgICAgICAgICAjZGF5Q29sdW1ucz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImNhbC1kYXktY29sdW1uXCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjb2x1bW4gb2Ygdmlldy5ob3VyQ29sdW1uczsgdHJhY2tCeTp0cmFja0J5SG91ckNvbHVtblwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgdGltZUV2ZW50IG9mIGNvbHVtbi5ldmVudHM7IHRyYWNrQnk6dHJhY2tCeURheU9yV2Vla0V2ZW50XCJcbiAgICAgICAgICAgICAgI2V2ZW50XG4gICAgICAgICAgICAgIGNsYXNzPVwiY2FsLWV2ZW50LWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgIFtjbGFzcy5jYWwtZHJhZ2dhYmxlXT1cInRpbWVFdmVudC5ldmVudC5kcmFnZ2FibGUgJiYgdGltZUV2ZW50UmVzaXplcy5zaXplID09PSAwXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmNhbC1zdGFydHMtd2l0aGluLWRheV09XCIhdGltZUV2ZW50LnN0YXJ0c0JlZm9yZURheVwiXG4gICAgICAgICAgICAgIFtjbGFzcy5jYWwtZW5kcy13aXRoaW4tZGF5XT1cIiF0aW1lRXZlbnQuZW5kc0FmdGVyRGF5XCJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwidGltZUV2ZW50LmV2ZW50LmNzc0NsYXNzXCJcbiAgICAgICAgICAgICAgW2hpZGRlbl09XCJ0aW1lRXZlbnQuaGVpZ2h0ID09PSAwICYmIHRpbWVFdmVudC53aWR0aCA9PT0gMFwiXG4gICAgICAgICAgICAgIFtzdHlsZS50b3AucHhdPVwidGltZUV2ZW50LnRvcFwiXG4gICAgICAgICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwidGltZUV2ZW50LmhlaWdodFwiXG4gICAgICAgICAgICAgIFtzdHlsZS5sZWZ0LiVdPVwidGltZUV2ZW50LmxlZnRcIlxuICAgICAgICAgICAgICBbc3R5bGUud2lkdGguJV09XCJ0aW1lRXZlbnQud2lkdGhcIlxuICAgICAgICAgICAgICBtd2xSZXNpemFibGVcbiAgICAgICAgICAgICAgW3Jlc2l6ZVNuYXBHcmlkXT1cIntsZWZ0OiBkYXlDb2x1bW5XaWR0aCwgcmlnaHQ6IGRheUNvbHVtbldpZHRoLCB0b3A6IGV2ZW50U25hcFNpemUgfHwgaG91clNlZ21lbnRIZWlnaHQsIGJvdHRvbTogZXZlbnRTbmFwU2l6ZSB8fCBob3VyU2VnbWVudEhlaWdodH1cIlxuICAgICAgICAgICAgICBbdmFsaWRhdGVSZXNpemVdPVwidmFsaWRhdGVSZXNpemVcIlxuICAgICAgICAgICAgICBbYWxsb3dOZWdhdGl2ZVJlc2l6ZXNdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIChyZXNpemVTdGFydCk9XCJ0aW1lRXZlbnRSZXNpemVTdGFydGVkKGRheUNvbHVtbnMsIHRpbWVFdmVudCwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgIChyZXNpemluZyk9XCJ0aW1lRXZlbnRSZXNpemluZyh0aW1lRXZlbnQsICRldmVudClcIlxuICAgICAgICAgICAgICAocmVzaXplRW5kKT1cInRpbWVFdmVudFJlc2l6ZUVuZGVkKHRpbWVFdmVudClcIlxuICAgICAgICAgICAgICBtd2xEcmFnZ2FibGVcbiAgICAgICAgICAgICAgZHJhZ0FjdGl2ZUNsYXNzPVwiY2FsLWRyYWctYWN0aXZlXCJcbiAgICAgICAgICAgICAgW2Ryb3BEYXRhXT1cIntldmVudDogdGltZUV2ZW50LmV2ZW50LCBjYWxlbmRhcklkOiBjYWxlbmRhcklkfVwiXG4gICAgICAgICAgICAgIFtkcmFnQXhpc109XCJ7XG4gICAgICAgICAgICAgICAgeDogdGltZUV2ZW50LmV2ZW50LmRyYWdnYWJsZSAmJiB0aW1lRXZlbnRSZXNpemVzLnNpemUgPT09IDAsXG4gICAgICAgICAgICAgICAgeTogdGltZUV2ZW50LmV2ZW50LmRyYWdnYWJsZSAmJiB0aW1lRXZlbnRSZXNpemVzLnNpemUgPT09IDBcbiAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgIFtkcmFnU25hcEdyaWRdPVwic25hcERyYWdnZWRFdmVudHMgPyB7eDogZGF5Q29sdW1uV2lkdGgsIHk6IGV2ZW50U25hcFNpemUgfHwgaG91clNlZ21lbnRIZWlnaHR9IDoge31cIlxuICAgICAgICAgICAgICBbZ2hvc3REcmFnRW5hYmxlZF09XCIhc25hcERyYWdnZWRFdmVudHNcIlxuICAgICAgICAgICAgICBbdmFsaWRhdGVEcmFnXT1cInZhbGlkYXRlRHJhZ1wiXG4gICAgICAgICAgICAgIChkcmFnUG9pbnRlckRvd24pPVwiZHJhZ1N0YXJ0ZWQoZGF5Q29sdW1ucywgZXZlbnQsIHRpbWVFdmVudClcIlxuICAgICAgICAgICAgICAoZHJhZ2dpbmcpPVwiZHJhZ01vdmUodGltZUV2ZW50LCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgKGRyYWdFbmQpPVwiZHJhZ0VuZGVkKHRpbWVFdmVudCwgJGV2ZW50LCBkYXlDb2x1bW5XaWR0aCwgdHJ1ZSlcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FsLXJlc2l6ZS1oYW5kbGUgY2FsLXJlc2l6ZS1oYW5kbGUtYmVmb3JlLXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cInRpbWVFdmVudC5ldmVudD8ucmVzaXphYmxlPy5iZWZvcmVTdGFydCAmJiAhdGltZUV2ZW50LnN0YXJ0c0JlZm9yZURheVwiXG4gICAgICAgICAgICAgICAgbXdsUmVzaXplSGFuZGxlXG4gICAgICAgICAgICAgICAgW3Jlc2l6ZUVkZ2VzXT1cIntcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICB0b3A6IHRydWVcbiAgICAgICAgICAgICAgICB9XCI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8bXdsLWNhbGVuZGFyLXdlZWstdmlldy1ldmVudFxuICAgICAgICAgICAgICAgIFt3ZWVrRXZlbnRdPVwidGltZUV2ZW50XCJcbiAgICAgICAgICAgICAgICBbdG9vbHRpcFBsYWNlbWVudF09XCJ0b29sdGlwUGxhY2VtZW50XCJcbiAgICAgICAgICAgICAgICBbdG9vbHRpcFRlbXBsYXRlXT1cInRvb2x0aXBUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgW3Rvb2x0aXBBcHBlbmRUb0JvZHldPVwidG9vbHRpcEFwcGVuZFRvQm9keVwiXG4gICAgICAgICAgICAgICAgW3Rvb2x0aXBEaXNhYmxlZF09XCJkcmFnQWN0aXZlIHx8IHRpbWVFdmVudFJlc2l6ZXMuc2l6ZSA+IDBcIlxuICAgICAgICAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJldmVudFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICBbZXZlbnRUaXRsZVRlbXBsYXRlXT1cImV2ZW50VGl0bGVUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgW2V2ZW50QWN0aW9uc1RlbXBsYXRlXT1cImV2ZW50QWN0aW9uc1RlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAoZXZlbnRDbGlja2VkKT1cImV2ZW50Q2xpY2tlZC5lbWl0KHtldmVudDogdGltZUV2ZW50LmV2ZW50fSlcIj5cbiAgICAgICAgICAgICAgPC9td2wtY2FsZW5kYXItd2Vlay12aWV3LWV2ZW50PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjYWwtcmVzaXplLWhhbmRsZSBjYWwtcmVzaXplLWhhbmRsZS1hZnRlci1lbmRcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwidGltZUV2ZW50LmV2ZW50Py5yZXNpemFibGU/LmFmdGVyRW5kICYmICF0aW1lRXZlbnQuZW5kc0FmdGVyRGF5XCJcbiAgICAgICAgICAgICAgICBtd2xSZXNpemVIYW5kbGVcbiAgICAgICAgICAgICAgICBbcmVzaXplRWRnZXNdPVwie1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBib3R0b206IHRydWVcbiAgICAgICAgICAgICAgICB9XCI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGhvdXIgb2YgY29sdW1uLmhvdXJzOyB0cmFja0J5OnRyYWNrQnlIb3VyOyBsZXQgb2RkID0gb2RkXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJjYWwtaG91clwiXG4gICAgICAgICAgICAgIFtjbGFzcy5jYWwtaG91ci1vZGRdPVwib2RkXCI+XG4gICAgICAgICAgICAgIDxtd2wtY2FsZW5kYXItd2Vlay12aWV3LWhvdXItc2VnbWVudFxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBzZWdtZW50IG9mIGhvdXIuc2VnbWVudHM7IHRyYWNrQnk6dHJhY2tCeUhvdXJTZWdtZW50XCJcbiAgICAgICAgICAgICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cImhvdXJTZWdtZW50SGVpZ2h0XCJcbiAgICAgICAgICAgICAgICBbc2VnbWVudF09XCJzZWdtZW50XCJcbiAgICAgICAgICAgICAgICBbc2VnbWVudEhlaWdodF09XCJob3VyU2VnbWVudEhlaWdodFwiXG4gICAgICAgICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxuICAgICAgICAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJob3VyU2VnbWVudFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAobXdsQ2xpY2spPVwiaG91clNlZ21lbnRDbGlja2VkLmVtaXQoe2RhdGU6IHNlZ21lbnQuZGF0ZX0pXCJcbiAgICAgICAgICAgICAgICBtd2xEcm9wcGFibGVcbiAgICAgICAgICAgICAgICBbZHJhZ092ZXJDbGFzc109XCIhZHJhZ0FjdGl2ZSB8fCAhc25hcERyYWdnZWRFdmVudHMgPyAnY2FsLWRyYWctb3ZlcicgOiBudWxsXCJcbiAgICAgICAgICAgICAgICBkcmFnQWN0aXZlQ2xhc3M9XCJjYWwtZHJhZy1hY3RpdmVcIlxuICAgICAgICAgICAgICAgIChkcm9wKT1cImV2ZW50RHJvcHBlZCgkZXZlbnQsIHNlZ21lbnQuZGF0ZSwgZmFsc2UpXCI+XG4gICAgICAgICAgICAgIDwvbXdsLWNhbGVuZGFyLXdlZWstdmlldy1ob3VyLXNlZ21lbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcldlZWtWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2aWV3IGRhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHZpZXdEYXRlOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBldmVudHMgdG8gZGlzcGxheSBvbiB2aWV3XG4gICAqIFRoZSBzY2hlbWEgaXMgYXZhaWxhYmxlIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0bGV3aXM5Mi9jYWxlbmRhci11dGlscy9ibG9iL2M1MTY4OTk4NWY1OWEyNzE5NDBlMzBiYzRlMmM0ZTFmZWUzZmNiNWMvc3JjL2NhbGVuZGFyVXRpbHMudHMjTDQ5LUw2M1xuICAgKi9cbiAgQElucHV0KClcbiAgZXZlbnRzOiBDYWxlbmRhckV2ZW50W10gPSBbXTtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgZGF5IGluZGV4ZXMgKDAgPSBzdW5kYXksIDEgPSBtb25kYXkgZXRjKSB0aGF0IHdpbGwgYmUgaGlkZGVuIG9uIHRoZSB2aWV3XG4gICAqL1xuICBASW5wdXQoKVxuICBleGNsdWRlRGF5czogbnVtYmVyW10gPSBbXTtcblxuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IHdoZW4gZW1pdHRlZCBvbiB3aWxsIHJlLXJlbmRlciB0aGUgY3VycmVudCB2aWV3XG4gICAqL1xuICBASW5wdXQoKVxuICByZWZyZXNoOiBTdWJqZWN0PGFueT47XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhbGUgdXNlZCB0byBmb3JtYXQgZGF0ZXNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGxvY2FsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcGxhY2VtZW50IG9mIHRoZSBldmVudCB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKVxuICB0b29sdGlwUGxhY2VtZW50OiBQbGFjZW1lbnRBcnJheSA9ICdhdXRvJztcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgZXZlbnQgdG9vbHRpcHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogV2hldGhlciB0byBhcHBlbmQgdG9vbHRpcHMgdG8gdGhlIGJvZHkgb3IgbmV4dCB0byB0aGUgdHJpZ2dlciBlbGVtZW50XG4gICAqL1xuICBASW5wdXQoKVxuICB0b29sdGlwQXBwZW5kVG9Cb2R5OiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGhlIHN0YXJ0IG51bWJlciBvZiB0aGUgd2Vla1xuICAgKi9cbiAgQElucHV0KClcbiAgd2Vla1N0YXJ0c09uOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSB0byByZXBsYWNlIHRoZSBoZWFkZXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHdlZWsgdmlldyBldmVudHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGV2ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgZXZlbnQgdGl0bGVzXG4gICAqL1xuICBASW5wdXQoKVxuICBldmVudFRpdGxlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgZXZlbnQgYWN0aW9uc1xuICAgKi9cbiAgQElucHV0KClcbiAgZXZlbnRBY3Rpb25zVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFRoZSBwcmVjaXNpb24gdG8gZGlzcGxheSBldmVudHMuXG4gICAqIGBkYXlzYCB3aWxsIHJvdW5kIGV2ZW50IHN0YXJ0IGFuZCBlbmQgZGF0ZXMgdG8gdGhlIG5lYXJlc3QgZGF5IGFuZCBgbWludXRlc2Agd2lsbCBub3QgZG8gdGhpcyByb3VuZGluZ1xuICAgKi9cbiAgQElucHV0KClcbiAgcHJlY2lzaW9uOiAnZGF5cycgfCAnbWludXRlcycgPSAnZGF5cyc7XG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGRheSBpbmRleGVzICgwID0gc3VuZGF5LCAxID0gbW9uZGF5IGV0YykgdGhhdCBpbmRpY2F0ZSB3aGljaCBkYXlzIGFyZSB3ZWVrZW5kc1xuICAgKi9cbiAgQElucHV0KClcbiAgd2Vla2VuZERheXM6IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHNuYXAgZXZlbnRzIHRvIGEgZ3JpZCB3aGVuIGRyYWdnaW5nXG4gICAqL1xuICBASW5wdXQoKVxuICBzbmFwRHJhZ2dlZEV2ZW50czogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2Ygc2VnbWVudHMgaW4gYW4gaG91ci4gTXVzdCBiZSA8PSA2XG4gICAqL1xuICBASW5wdXQoKVxuICBob3VyU2VnbWVudHM6IG51bWJlciA9IDI7XG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgaW4gcGl4ZWxzIG9mIGVhY2ggaG91ciBzZWdtZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBob3VyU2VnbWVudEhlaWdodDogbnVtYmVyID0gMzA7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgc3RhcnQgaG91cnMgaW4gMjQgaG91ciB0aW1lLiBNdXN0IGJlIDAtMjNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRheVN0YXJ0SG91cjogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogVGhlIGRheSBzdGFydCBtaW51dGVzLiBNdXN0IGJlIDAtNTlcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRheVN0YXJ0TWludXRlOiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF5IGVuZCBob3VycyBpbiAyNCBob3VyIHRpbWUuIE11c3QgYmUgMC0yM1xuICAgKi9cbiAgQElucHV0KClcbiAgZGF5RW5kSG91cjogbnVtYmVyID0gMjM7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgZW5kIG1pbnV0ZXMuIE11c3QgYmUgMC01OVxuICAgKi9cbiAgQElucHV0KClcbiAgZGF5RW5kTWludXRlOiBudW1iZXIgPSA1OTtcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIHRvIHJlcGxhY2UgdGhlIGhvdXIgc2VnbWVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaG91clNlZ21lbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogVGhlIGdyaWQgc2l6ZSB0byBzbmFwIHJlc2l6aW5nIGFuZCBkcmFnZ2luZyBvZiBob3VybHkgZXZlbnRzIHRvXG4gICAqL1xuICBASW5wdXQoKVxuICBldmVudFNuYXBTaXplOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIGFsbCBkYXkgZXZlbnRzIGxhYmVsIHRleHRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGFsbERheUV2ZW50c0xhYmVsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgZGF5cyBpbiBhIHdlZWsuIENhbiBiZSB1c2VkIHRvIGNyZWF0ZSBhIHNob3J0ZXIgb3IgbG9uZ2VyIHdlZWsgdmlldy5cbiAgICogVGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayB3aWxsIGFsd2F5cyBiZSB0aGUgYHZpZXdEYXRlYFxuICAgKi9cbiAgQElucHV0KClcbiAgZGF5c0luV2VlazogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIGhlYWRlciB3ZWVrIGRheSBpcyBjbGlja2VkLiBBZGRpbmcgYSBgY3NzQ2xhc3NgIHByb3BlcnR5IG9uIGAkZXZlbnQuZGF5YCB3aWxsIGFkZCB0aGF0IGNsYXNzIHRvIHRoZSBoZWFkZXIgZWxlbWVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGRheUhlYWRlckNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBkYXk6IFdlZWtEYXk7XG4gIH0+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBldmVudCB0aXRsZSBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZXZlbnRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG4gIH0+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGFuIGV2ZW50IGlzIHJlc2l6ZWQgb3IgZHJhZ2dlZCBhbmQgZHJvcHBlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGV2ZW50VGltZXNDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEFuIG91dHB1dCB0aGF0IHdpbGwgYmUgY2FsbGVkIGJlZm9yZSB0aGUgdmlldyBpcyByZW5kZXJlZCBmb3IgdGhlIGN1cnJlbnQgd2Vlay5cbiAgICogSWYgeW91IGFkZCB0aGUgYGNzc0NsYXNzYCBwcm9wZXJ0eSB0byBhIGRheSBpbiB0aGUgaGVhZGVyIGl0IHdpbGwgYWRkIHRoYXQgY2xhc3MgdG8gdGhlIGNlbGwgZWxlbWVudCBpbiB0aGUgdGVtcGxhdGVcbiAgICovXG4gIEBPdXRwdXQoKVxuICBiZWZvcmVWaWV3UmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxDYWxlbmRhcldlZWtWaWV3QmVmb3JlUmVuZGVyRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGFuIGhvdXIgc2VnbWVudCBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgaG91clNlZ21lbnRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZGF0ZTogRGF0ZTtcbiAgfT4oKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZGF5czogV2Vla0RheVtdO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB2aWV3OiBXZWVrVmlldztcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcmVmcmVzaFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBhbGxEYXlFdmVudFJlc2l6ZXM6IE1hcDxcbiAgICBXZWVrVmlld0FsbERheUV2ZW50LFxuICAgIFdlZWtWaWV3QWxsRGF5RXZlbnRSZXNpemVcbiAgPiA9IG5ldyBNYXAoKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdGltZUV2ZW50UmVzaXplczogTWFwPENhbGVuZGFyRXZlbnQsIFJlc2l6ZUV2ZW50PiA9IG5ldyBNYXAoKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZXZlbnREcmFnRW50ZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBkcmFnQWN0aXZlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHZhbGlkYXRlRHJhZzogKGFyZ3M6IGFueSkgPT4gYm9vbGVhbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdmFsaWRhdGVSZXNpemU6IChhcmdzOiBhbnkpID0+IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGRheUNvbHVtbldpZHRoOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNhbGVuZGFySWQgPSBTeW1ib2woJ2FuZ3VsYXIgY2FsZW5kYXIgd2VlayB2aWV3IGlkJyk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHRyYWNrQnlJbmRleCA9IHRyYWNrQnlJbmRleDtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlID0gdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB0cmFja0J5SG91clNlZ21lbnQgPSB0cmFja0J5SG91clNlZ21lbnQ7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHRyYWNrQnlIb3VyID0gdHJhY2tCeUhvdXI7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHRyYWNrQnlEYXlPcldlZWtFdmVudCA9IHRyYWNrQnlEYXlPcldlZWtFdmVudDtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdHJhY2tCeUhvdXJDb2x1bW4gPSAoaW5kZXg6IG51bWJlciwgY29sdW1uOiBXZWVrVmlld0hvdXJDb2x1bW4pID0+XG4gICAgY29sdW1uLmhvdXJzWzBdID8gY29sdW1uLmhvdXJzWzBdLnNlZ21lbnRzWzBdLmRhdGUudG9JU09TdHJpbmcoKSA6IGNvbHVtbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgdXRpbHM6IENhbGVuZGFyVXRpbHMsXG4gICAgQEluamVjdChMT0NBTEVfSUQpIGxvY2FsZTogc3RyaW5nLFxuICAgIHByaXZhdGUgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyXG4gICkge1xuICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbiA9IHRoaXMucmVmcmVzaC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2hBbGwoKTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgY2hhbmdlcy52aWV3RGF0ZSB8fFxuICAgICAgY2hhbmdlcy5leGNsdWRlRGF5cyB8fFxuICAgICAgY2hhbmdlcy53ZWVrZW5kRGF5cyB8fFxuICAgICAgY2hhbmdlcy5kYXlzSW5XZWVrXG4gICAgKSB7XG4gICAgICB0aGlzLnJlZnJlc2hIZWFkZXIoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5ldmVudHMpIHtcbiAgICAgIHZhbGlkYXRlRXZlbnRzKHRoaXMuZXZlbnRzKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjaGFuZ2VzLnZpZXdEYXRlIHx8XG4gICAgICBjaGFuZ2VzLmRheVN0YXJ0SG91ciB8fFxuICAgICAgY2hhbmdlcy5kYXlTdGFydE1pbnV0ZSB8fFxuICAgICAgY2hhbmdlcy5kYXlFbmRIb3VyIHx8XG4gICAgICBjaGFuZ2VzLmRheUVuZE1pbnV0ZSB8fFxuICAgICAgY2hhbmdlcy5ob3VyU2VnbWVudHMgfHxcbiAgICAgIGNoYW5nZXMud2Vla1N0YXJ0c09uIHx8XG4gICAgICBjaGFuZ2VzLndlZWtlbmREYXlzIHx8XG4gICAgICBjaGFuZ2VzLmV4Y2x1ZGVEYXlzIHx8XG4gICAgICBjaGFuZ2VzLmhvdXJTZWdtZW50SGVpZ2h0IHx8XG4gICAgICBjaGFuZ2VzLmV2ZW50cyB8fFxuICAgICAgY2hhbmdlcy5kYXlzSW5XZWVrXG4gICAgKSB7XG4gICAgICB0aGlzLnJlZnJlc2hCb2R5KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzaXplU3RhcnRlZChldmVudHNDb250YWluZXI6IEhUTUxFbGVtZW50LCBtaW5XaWR0aD86IG51bWJlcikge1xuICAgIHRoaXMuZGF5Q29sdW1uV2lkdGggPSB0aGlzLmdldERheUNvbHVtbldpZHRoKGV2ZW50c0NvbnRhaW5lcik7XG4gICAgY29uc3QgcmVzaXplSGVscGVyOiBDYWxlbmRhclJlc2l6ZUhlbHBlciA9IG5ldyBDYWxlbmRhclJlc2l6ZUhlbHBlcihcbiAgICAgIGV2ZW50c0NvbnRhaW5lcixcbiAgICAgIG1pbldpZHRoXG4gICAgKTtcbiAgICB0aGlzLnZhbGlkYXRlUmVzaXplID0gKHsgcmVjdGFuZ2xlIH0pID0+XG4gICAgICByZXNpemVIZWxwZXIudmFsaWRhdGVSZXNpemUoeyByZWN0YW5nbGUgfSk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdGltZUV2ZW50UmVzaXplU3RhcnRlZChcbiAgICBldmVudHNDb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHRpbWVFdmVudDogRGF5Vmlld0V2ZW50LFxuICAgIHJlc2l6ZUV2ZW50OiBSZXNpemVFdmVudFxuICApOiB2b2lkIHtcbiAgICB0aGlzLnRpbWVFdmVudFJlc2l6ZXMuc2V0KHRpbWVFdmVudC5ldmVudCwgcmVzaXplRXZlbnQpO1xuICAgIHRoaXMucmVzaXplU3RhcnRlZChldmVudHNDb250YWluZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHRpbWVFdmVudFJlc2l6aW5nKHRpbWVFdmVudDogRGF5Vmlld0V2ZW50LCByZXNpemVFdmVudDogUmVzaXplRXZlbnQpIHtcbiAgICB0aGlzLnRpbWVFdmVudFJlc2l6ZXMuc2V0KHRpbWVFdmVudC5ldmVudCwgcmVzaXplRXZlbnQpO1xuICAgIGNvbnN0IGFkanVzdGVkRXZlbnRzID0gbmV3IE1hcDxDYWxlbmRhckV2ZW50LCBDYWxlbmRhckV2ZW50PigpO1xuXG4gICAgY29uc3QgdGVtcEV2ZW50cyA9IFsuLi50aGlzLmV2ZW50c107XG5cbiAgICB0aGlzLnRpbWVFdmVudFJlc2l6ZXMuZm9yRWFjaCgobGFzdFJlc2l6ZUV2ZW50LCBldmVudCkgPT4ge1xuICAgICAgY29uc3QgbmV3RXZlbnREYXRlcyA9IHRoaXMuZ2V0VGltZUV2ZW50UmVzaXplZERhdGVzKFxuICAgICAgICBldmVudCxcbiAgICAgICAgbGFzdFJlc2l6ZUV2ZW50XG4gICAgICApO1xuICAgICAgY29uc3QgYWRqdXN0ZWRFdmVudCA9IHsgLi4uZXZlbnQsIC4uLm5ld0V2ZW50RGF0ZXMgfTtcbiAgICAgIGFkanVzdGVkRXZlbnRzLnNldChhZGp1c3RlZEV2ZW50LCBldmVudCk7XG4gICAgICBjb25zdCBldmVudEluZGV4ID0gdGVtcEV2ZW50cy5pbmRleE9mKGV2ZW50KTtcbiAgICAgIHRlbXBFdmVudHNbZXZlbnRJbmRleF0gPSBhZGp1c3RlZEV2ZW50O1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZXN0b3JlT3JpZ2luYWxFdmVudHModGVtcEV2ZW50cywgYWRqdXN0ZWRFdmVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHRpbWVFdmVudFJlc2l6ZUVuZGVkKHRpbWVFdmVudDogRGF5Vmlld0V2ZW50KSB7XG4gICAgdGhpcy52aWV3ID0gdGhpcy5nZXRXZWVrVmlldyh0aGlzLmV2ZW50cyk7XG4gICAgY29uc3QgbGFzdFJlc2l6ZUV2ZW50ID0gdGhpcy50aW1lRXZlbnRSZXNpemVzLmdldCh0aW1lRXZlbnQuZXZlbnQpO1xuICAgIHRoaXMudGltZUV2ZW50UmVzaXplcy5kZWxldGUodGltZUV2ZW50LmV2ZW50KTtcbiAgICBjb25zdCBuZXdFdmVudERhdGVzID0gdGhpcy5nZXRUaW1lRXZlbnRSZXNpemVkRGF0ZXMoXG4gICAgICB0aW1lRXZlbnQuZXZlbnQsXG4gICAgICBsYXN0UmVzaXplRXZlbnRcbiAgICApO1xuICAgIHRoaXMuZXZlbnRUaW1lc0NoYW5nZWQuZW1pdCh7XG4gICAgICBuZXdTdGFydDogbmV3RXZlbnREYXRlcy5zdGFydCxcbiAgICAgIG5ld0VuZDogbmV3RXZlbnREYXRlcy5lbmQsXG4gICAgICBldmVudDogdGltZUV2ZW50LmV2ZW50LFxuICAgICAgdHlwZTogQ2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50VHlwZS5SZXNpemVcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBhbGxEYXlFdmVudFJlc2l6ZVN0YXJ0ZWQoXG4gICAgYWxsRGF5RXZlbnRzQ29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBhbGxEYXlFdmVudDogV2Vla1ZpZXdBbGxEYXlFdmVudCxcbiAgICByZXNpemVFdmVudDogUmVzaXplRXZlbnRcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5hbGxEYXlFdmVudFJlc2l6ZXMuc2V0KGFsbERheUV2ZW50LCB7XG4gICAgICBvcmlnaW5hbE9mZnNldDogYWxsRGF5RXZlbnQub2Zmc2V0LFxuICAgICAgb3JpZ2luYWxTcGFuOiBhbGxEYXlFdmVudC5zcGFuLFxuICAgICAgZWRnZTogdHlwZW9mIHJlc2l6ZUV2ZW50LmVkZ2VzLmxlZnQgIT09ICd1bmRlZmluZWQnID8gJ2xlZnQnIDogJ3JpZ2h0J1xuICAgIH0pO1xuICAgIHRoaXMucmVzaXplU3RhcnRlZChcbiAgICAgIGFsbERheUV2ZW50c0NvbnRhaW5lcixcbiAgICAgIHRoaXMuZ2V0RGF5Q29sdW1uV2lkdGgoYWxsRGF5RXZlbnRzQ29udGFpbmVyKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgYWxsRGF5RXZlbnRSZXNpemluZyhcbiAgICBhbGxEYXlFdmVudDogV2Vla1ZpZXdBbGxEYXlFdmVudCxcbiAgICByZXNpemVFdmVudDogUmVzaXplRXZlbnQsXG4gICAgZGF5V2lkdGg6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50UmVzaXplOiBXZWVrVmlld0FsbERheUV2ZW50UmVzaXplID0gdGhpcy5hbGxEYXlFdmVudFJlc2l6ZXMuZ2V0KFxuICAgICAgYWxsRGF5RXZlbnRcbiAgICApO1xuXG4gICAgaWYgKHJlc2l6ZUV2ZW50LmVkZ2VzLmxlZnQpIHtcbiAgICAgIGNvbnN0IGRpZmY6IG51bWJlciA9IE1hdGgucm91bmQoK3Jlc2l6ZUV2ZW50LmVkZ2VzLmxlZnQgLyBkYXlXaWR0aCk7XG4gICAgICBhbGxEYXlFdmVudC5vZmZzZXQgPSBjdXJyZW50UmVzaXplLm9yaWdpbmFsT2Zmc2V0ICsgZGlmZjtcbiAgICAgIGFsbERheUV2ZW50LnNwYW4gPSBjdXJyZW50UmVzaXplLm9yaWdpbmFsU3BhbiAtIGRpZmY7XG4gICAgfSBlbHNlIGlmIChyZXNpemVFdmVudC5lZGdlcy5yaWdodCkge1xuICAgICAgY29uc3QgZGlmZjogbnVtYmVyID0gTWF0aC5yb3VuZCgrcmVzaXplRXZlbnQuZWRnZXMucmlnaHQgLyBkYXlXaWR0aCk7XG4gICAgICBhbGxEYXlFdmVudC5zcGFuID0gY3VycmVudFJlc2l6ZS5vcmlnaW5hbFNwYW4gKyBkaWZmO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBhbGxEYXlFdmVudFJlc2l6ZUVuZGVkKGFsbERheUV2ZW50OiBXZWVrVmlld0FsbERheUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudFJlc2l6ZTogV2Vla1ZpZXdBbGxEYXlFdmVudFJlc2l6ZSA9IHRoaXMuYWxsRGF5RXZlbnRSZXNpemVzLmdldChcbiAgICAgIGFsbERheUV2ZW50XG4gICAgKTtcblxuICAgIGNvbnN0IGFsbERheUV2ZW50UmVzaXppbmdCZWZvcmVTdGFydCA9IGN1cnJlbnRSZXNpemUuZWRnZSA9PT0gJ2xlZnQnO1xuICAgIGxldCBkYXlzRGlmZjogbnVtYmVyO1xuICAgIGlmIChhbGxEYXlFdmVudFJlc2l6aW5nQmVmb3JlU3RhcnQpIHtcbiAgICAgIGRheXNEaWZmID0gYWxsRGF5RXZlbnQub2Zmc2V0IC0gY3VycmVudFJlc2l6ZS5vcmlnaW5hbE9mZnNldDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5c0RpZmYgPSBhbGxEYXlFdmVudC5zcGFuIC0gY3VycmVudFJlc2l6ZS5vcmlnaW5hbFNwYW47XG4gICAgfVxuXG4gICAgYWxsRGF5RXZlbnQub2Zmc2V0ID0gY3VycmVudFJlc2l6ZS5vcmlnaW5hbE9mZnNldDtcbiAgICBhbGxEYXlFdmVudC5zcGFuID0gY3VycmVudFJlc2l6ZS5vcmlnaW5hbFNwYW47XG5cbiAgICBsZXQgbmV3U3RhcnQ6IERhdGUgPSBhbGxEYXlFdmVudC5ldmVudC5zdGFydDtcbiAgICBsZXQgbmV3RW5kOiBEYXRlID0gYWxsRGF5RXZlbnQuZXZlbnQuZW5kIHx8IGFsbERheUV2ZW50LmV2ZW50LnN0YXJ0O1xuICAgIGlmIChhbGxEYXlFdmVudFJlc2l6aW5nQmVmb3JlU3RhcnQpIHtcbiAgICAgIG5ld1N0YXJ0ID0gdGhpcy5kYXRlQWRhcHRlci5hZGREYXlzKG5ld1N0YXJ0LCBkYXlzRGlmZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0VuZCA9IHRoaXMuZGF0ZUFkYXB0ZXIuYWRkRGF5cyhuZXdFbmQsIGRheXNEaWZmKTtcbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50VGltZXNDaGFuZ2VkLmVtaXQoe1xuICAgICAgbmV3U3RhcnQsXG4gICAgICBuZXdFbmQsXG4gICAgICBldmVudDogYWxsRGF5RXZlbnQuZXZlbnQsXG4gICAgICB0eXBlOiBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnRUeXBlLlJlc2l6ZVxuICAgIH0pO1xuICAgIHRoaXMuYWxsRGF5RXZlbnRSZXNpemVzLmRlbGV0ZShhbGxEYXlFdmVudCk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZ2V0RGF5Q29sdW1uV2lkdGgoZXZlbnRSb3dDb250YWluZXI6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihldmVudFJvd0NvbnRhaW5lci5vZmZzZXRXaWR0aCAvIHRoaXMuZGF5cy5sZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGV2ZW50RHJvcHBlZChcbiAgICBkcm9wRXZlbnQ6IERyb3BFdmVudDx7IGV2ZW50PzogQ2FsZW5kYXJFdmVudDsgY2FsZW5kYXJJZD86IHN5bWJvbCB9PixcbiAgICBkYXRlOiBEYXRlLFxuICAgIGFsbERheTogYm9vbGVhblxuICApOiB2b2lkIHtcbiAgICBpZiAoc2hvdWxkRmlyZURyb3BwZWRFdmVudChkcm9wRXZlbnQsIGRhdGUsIGFsbERheSwgdGhpcy5jYWxlbmRhcklkKSkge1xuICAgICAgdGhpcy5ldmVudFRpbWVzQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgdHlwZTogQ2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50VHlwZS5Ecm9wLFxuICAgICAgICBldmVudDogZHJvcEV2ZW50LmRyb3BEYXRhLmV2ZW50LFxuICAgICAgICBuZXdTdGFydDogZGF0ZSxcbiAgICAgICAgYWxsRGF5XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZHJhZ1N0YXJ0ZWQoXG4gICAgZXZlbnRzQ29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBldmVudDogSFRNTEVsZW1lbnQsXG4gICAgZGF5RXZlbnQ/OiBEYXlWaWV3RXZlbnRcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5kYXlDb2x1bW5XaWR0aCA9IHRoaXMuZ2V0RGF5Q29sdW1uV2lkdGgoZXZlbnRzQ29udGFpbmVyKTtcbiAgICBjb25zdCBkcmFnSGVscGVyOiBDYWxlbmRhckRyYWdIZWxwZXIgPSBuZXcgQ2FsZW5kYXJEcmFnSGVscGVyKFxuICAgICAgZXZlbnRzQ29udGFpbmVyLFxuICAgICAgZXZlbnRcbiAgICApO1xuICAgIHRoaXMudmFsaWRhdGVEcmFnID0gKHsgeCwgeSB9KSA9PlxuICAgICAgdGhpcy5hbGxEYXlFdmVudFJlc2l6ZXMuc2l6ZSA9PT0gMCAmJlxuICAgICAgdGhpcy50aW1lRXZlbnRSZXNpemVzLnNpemUgPT09IDAgJiZcbiAgICAgIGRyYWdIZWxwZXIudmFsaWRhdGVEcmFnKHtcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgc25hcERyYWdnZWRFdmVudHM6IHRoaXMuc25hcERyYWdnZWRFdmVudHNcbiAgICAgIH0pO1xuICAgIHRoaXMuZHJhZ0FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5ldmVudERyYWdFbnRlciA9IDA7XG4gICAgaWYgKCF0aGlzLnNuYXBEcmFnZ2VkRXZlbnRzICYmIGRheUV2ZW50KSB7XG4gICAgICB0aGlzLnZpZXcuaG91ckNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICBjb25zdCBsaW5rZWRFdmVudCA9IGNvbHVtbi5ldmVudHMuZmluZChcbiAgICAgICAgICBjb2x1bW5FdmVudCA9PlxuICAgICAgICAgICAgY29sdW1uRXZlbnQuZXZlbnQgPT09IGRheUV2ZW50LmV2ZW50ICYmIGNvbHVtbkV2ZW50ICE9PSBkYXlFdmVudFxuICAgICAgICApO1xuICAgICAgICAvLyBoaWRlIGFueSBsaW5rZWQgZXZlbnRzIHdoaWxlIGRyYWdnaW5nXG4gICAgICAgIGlmIChsaW5rZWRFdmVudCkge1xuICAgICAgICAgIGxpbmtlZEV2ZW50LndpZHRoID0gMDtcbiAgICAgICAgICBsaW5rZWRFdmVudC5oZWlnaHQgPSAwO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZHJhZ01vdmUoZGF5RXZlbnQ6IERheVZpZXdFdmVudCwgZHJhZ0V2ZW50OiBEcmFnTW92ZUV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc25hcERyYWdnZWRFdmVudHMpIHtcbiAgICAgIGNvbnN0IG5ld0V2ZW50VGltZXMgPSB0aGlzLmdldERyYWdNb3ZlZEV2ZW50VGltZXMoXG4gICAgICAgIGRheUV2ZW50LFxuICAgICAgICBkcmFnRXZlbnQsXG4gICAgICAgIHRoaXMuZGF5Q29sdW1uV2lkdGgsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgICBjb25zdCBvcmlnaW5hbEV2ZW50ID0gZGF5RXZlbnQuZXZlbnQ7XG4gICAgICBjb25zdCBhZGp1c3RlZEV2ZW50ID0geyAuLi5vcmlnaW5hbEV2ZW50LCAuLi5uZXdFdmVudFRpbWVzIH07XG4gICAgICBjb25zdCB0ZW1wRXZlbnRzID0gdGhpcy5ldmVudHMubWFwKGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50ID09PSBvcmlnaW5hbEV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGFkanVzdGVkRXZlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJlc3RvcmVPcmlnaW5hbEV2ZW50cyhcbiAgICAgICAgdGVtcEV2ZW50cyxcbiAgICAgICAgbmV3IE1hcChbW2FkanVzdGVkRXZlbnQsIG9yaWdpbmFsRXZlbnRdXSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGRyYWdFbmRlZChcbiAgICB3ZWVrRXZlbnQ6IFdlZWtWaWV3QWxsRGF5RXZlbnQgfCBEYXlWaWV3RXZlbnQsXG4gICAgZHJhZ0VuZEV2ZW50OiBEcmFnRW5kRXZlbnQsXG4gICAgZGF5V2lkdGg6IG51bWJlcixcbiAgICB1c2VZID0gZmFsc2VcbiAgKTogdm9pZCB7XG4gICAgdGhpcy52aWV3ID0gdGhpcy5nZXRXZWVrVmlldyh0aGlzLmV2ZW50cyk7XG4gICAgdGhpcy5kcmFnQWN0aXZlID0gZmFsc2U7XG4gICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSB0aGlzLmdldERyYWdNb3ZlZEV2ZW50VGltZXMoXG4gICAgICB3ZWVrRXZlbnQsXG4gICAgICBkcmFnRW5kRXZlbnQsXG4gICAgICBkYXlXaWR0aCxcbiAgICAgIHVzZVlcbiAgICApO1xuICAgIGlmIChcbiAgICAgIHRoaXMuZXZlbnREcmFnRW50ZXIgPiAwICYmXG4gICAgICBpc0RyYWdnZWRXaXRoaW5QZXJpb2Qoc3RhcnQsIGVuZCwgdGhpcy52aWV3LnBlcmlvZClcbiAgICApIHtcbiAgICAgIHRoaXMuZXZlbnRUaW1lc0NoYW5nZWQuZW1pdCh7XG4gICAgICAgIG5ld1N0YXJ0OiBzdGFydCxcbiAgICAgICAgbmV3RW5kOiBlbmQsXG4gICAgICAgIGV2ZW50OiB3ZWVrRXZlbnQuZXZlbnQsXG4gICAgICAgIHR5cGU6IENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudFR5cGUuRHJhZyxcbiAgICAgICAgYWxsRGF5OiAhdXNlWVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoSGVhZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuZGF5cyA9IHRoaXMudXRpbHMuZ2V0V2Vla1ZpZXdIZWFkZXIoe1xuICAgICAgdmlld0RhdGU6IHRoaXMudmlld0RhdGUsXG4gICAgICB3ZWVrU3RhcnRzT246IHRoaXMud2Vla1N0YXJ0c09uLFxuICAgICAgZXhjbHVkZWQ6IHRoaXMuZXhjbHVkZURheXMsXG4gICAgICB3ZWVrZW5kRGF5czogdGhpcy53ZWVrZW5kRGF5cyxcbiAgICAgIC4uLmdldFdlZWtWaWV3UGVyaW9kKFxuICAgICAgICB0aGlzLmRhdGVBZGFwdGVyLFxuICAgICAgICB0aGlzLnZpZXdEYXRlLFxuICAgICAgICB0aGlzLndlZWtTdGFydHNPbixcbiAgICAgICAgdGhpcy5leGNsdWRlRGF5cyxcbiAgICAgICAgdGhpcy5kYXlzSW5XZWVrXG4gICAgICApXG4gICAgfSk7XG4gICAgdGhpcy5lbWl0QmVmb3JlVmlld1JlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoQm9keSgpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXcgPSB0aGlzLmdldFdlZWtWaWV3KHRoaXMuZXZlbnRzKTtcbiAgICB0aGlzLmVtaXRCZWZvcmVWaWV3UmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoSGVhZGVyKCk7XG4gICAgdGhpcy5yZWZyZXNoQm9keSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0QmVmb3JlVmlld1JlbmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kYXlzICYmIHRoaXMudmlldykge1xuICAgICAgdGhpcy5iZWZvcmVWaWV3UmVuZGVyLmVtaXQoe1xuICAgICAgICBoZWFkZXI6IHRoaXMuZGF5cyxcbiAgICAgICAgLi4udGhpcy52aWV3XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFdlZWtWaWV3KGV2ZW50czogQ2FsZW5kYXJFdmVudFtdKSB7XG4gICAgcmV0dXJuIHRoaXMudXRpbHMuZ2V0V2Vla1ZpZXcoe1xuICAgICAgZXZlbnRzLFxuICAgICAgdmlld0RhdGU6IHRoaXMudmlld0RhdGUsXG4gICAgICB3ZWVrU3RhcnRzT246IHRoaXMud2Vla1N0YXJ0c09uLFxuICAgICAgZXhjbHVkZWQ6IHRoaXMuZXhjbHVkZURheXMsXG4gICAgICBwcmVjaXNpb246IHRoaXMucHJlY2lzaW9uLFxuICAgICAgYWJzb2x1dGVQb3NpdGlvbmVkRXZlbnRzOiB0cnVlLFxuICAgICAgaG91clNlZ21lbnRzOiB0aGlzLmhvdXJTZWdtZW50cyxcbiAgICAgIGRheVN0YXJ0OiB7XG4gICAgICAgIGhvdXI6IHRoaXMuZGF5U3RhcnRIb3VyLFxuICAgICAgICBtaW51dGU6IHRoaXMuZGF5U3RhcnRNaW51dGVcbiAgICAgIH0sXG4gICAgICBkYXlFbmQ6IHtcbiAgICAgICAgaG91cjogdGhpcy5kYXlFbmRIb3VyLFxuICAgICAgICBtaW51dGU6IHRoaXMuZGF5RW5kTWludXRlXG4gICAgICB9LFxuICAgICAgc2VnbWVudEhlaWdodDogdGhpcy5ob3VyU2VnbWVudEhlaWdodCxcbiAgICAgIHdlZWtlbmREYXlzOiB0aGlzLndlZWtlbmREYXlzLFxuICAgICAgLi4uZ2V0V2Vla1ZpZXdQZXJpb2QoXG4gICAgICAgIHRoaXMuZGF0ZUFkYXB0ZXIsXG4gICAgICAgIHRoaXMudmlld0RhdGUsXG4gICAgICAgIHRoaXMud2Vla1N0YXJ0c09uLFxuICAgICAgICB0aGlzLmV4Y2x1ZGVEYXlzLFxuICAgICAgICB0aGlzLmRheXNJbldlZWtcbiAgICAgIClcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RHJhZ01vdmVkRXZlbnRUaW1lcyhcbiAgICB3ZWVrRXZlbnQ6IFdlZWtWaWV3QWxsRGF5RXZlbnQgfCBEYXlWaWV3RXZlbnQsXG4gICAgZHJhZ0VuZEV2ZW50OiBEcmFnRW5kRXZlbnQgfCBEcmFnTW92ZUV2ZW50LFxuICAgIGRheVdpZHRoOiBudW1iZXIsXG4gICAgdXNlWTogYm9vbGVhblxuICApIHtcbiAgICBjb25zdCBkYXlzRHJhZ2dlZCA9IHJvdW5kVG9OZWFyZXN0KGRyYWdFbmRFdmVudC54LCBkYXlXaWR0aCkgLyBkYXlXaWR0aDtcbiAgICBjb25zdCBtaW51dGVzTW92ZWQgPSB1c2VZXG4gICAgICA/IGdldE1pbnV0ZXNNb3ZlZChcbiAgICAgICAgICBkcmFnRW5kRXZlbnQueSxcbiAgICAgICAgICB0aGlzLmhvdXJTZWdtZW50cyxcbiAgICAgICAgICB0aGlzLmhvdXJTZWdtZW50SGVpZ2h0LFxuICAgICAgICAgIHRoaXMuZXZlbnRTbmFwU2l6ZVxuICAgICAgICApXG4gICAgICA6IDA7XG5cbiAgICBjb25zdCBzdGFydCA9IHRoaXMuZGF0ZUFkYXB0ZXIuYWRkTWludXRlcyhcbiAgICAgIHRoaXMuZGF0ZUFkYXB0ZXIuYWRkRGF5cyh3ZWVrRXZlbnQuZXZlbnQuc3RhcnQsIGRheXNEcmFnZ2VkKSxcbiAgICAgIG1pbnV0ZXNNb3ZlZFxuICAgICk7XG4gICAgbGV0IGVuZDogRGF0ZTtcbiAgICBpZiAod2Vla0V2ZW50LmV2ZW50LmVuZCkge1xuICAgICAgZW5kID0gdGhpcy5kYXRlQWRhcHRlci5hZGRNaW51dGVzKFxuICAgICAgICB0aGlzLmRhdGVBZGFwdGVyLmFkZERheXMod2Vla0V2ZW50LmV2ZW50LmVuZCwgZGF5c0RyYWdnZWQpLFxuICAgICAgICBtaW51dGVzTW92ZWRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3RhcnQsIGVuZCB9O1xuICB9XG5cbiAgcHJpdmF0ZSByZXN0b3JlT3JpZ2luYWxFdmVudHMoXG4gICAgdGVtcEV2ZW50czogQ2FsZW5kYXJFdmVudFtdLFxuICAgIGFkanVzdGVkRXZlbnRzOiBNYXA8Q2FsZW5kYXJFdmVudCwgQ2FsZW5kYXJFdmVudD5cbiAgKSB7XG4gICAgdGhpcy52aWV3ID0gdGhpcy5nZXRXZWVrVmlldyh0ZW1wRXZlbnRzKTtcbiAgICBjb25zdCBhZGp1c3RlZEV2ZW50c0FycmF5ID0gdGVtcEV2ZW50cy5maWx0ZXIoZXZlbnQgPT5cbiAgICAgIGFkanVzdGVkRXZlbnRzLmhhcyhldmVudClcbiAgICApO1xuICAgIHRoaXMudmlldy5ob3VyQ29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICBhZGp1c3RlZEV2ZW50c0FycmF5LmZvckVhY2goYWRqdXN0ZWRFdmVudCA9PiB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsRXZlbnQgPSBhZGp1c3RlZEV2ZW50cy5nZXQoYWRqdXN0ZWRFdmVudCk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nQ29sdW1uRXZlbnQgPSBjb2x1bW4uZXZlbnRzLmZpbmQoXG4gICAgICAgICAgY29sdW1uRXZlbnQgPT4gY29sdW1uRXZlbnQuZXZlbnQgPT09IGFkanVzdGVkRXZlbnRcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nQ29sdW1uRXZlbnQpIHtcbiAgICAgICAgICAvLyByZXN0b3JlIHRoZSBvcmlnaW5hbCBldmVudCBzbyB0cmFja0J5IGtpY2tzIGluIGFuZCB0aGUgZG9tIGlzbid0IGNoYW5nZWRcbiAgICAgICAgICBleGlzdGluZ0NvbHVtbkV2ZW50LmV2ZW50ID0gb3JpZ2luYWxFdmVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBhZGQgYSBkdW1teSBldmVudCB0byB0aGUgZHJvcCBzbyBpZiB0aGUgZXZlbnQgd2FzIHJlbW92ZWQgZnJvbSB0aGUgb3JpZ2luYWwgY29sdW1uIHRoZSBkcmFnIGRvZXNuJ3QgZW5kIGVhcmx5XG4gICAgICAgICAgY29sdW1uLmV2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgIGV2ZW50OiBvcmlnaW5hbEV2ZW50LFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgc3RhcnRzQmVmb3JlRGF5OiBmYWxzZSxcbiAgICAgICAgICAgIGVuZHNBZnRlckRheTogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgYWRqdXN0ZWRFdmVudHMuY2xlYXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGltZUV2ZW50UmVzaXplZERhdGVzKFxuICAgIGNhbGVuZGFyRXZlbnQ6IENhbGVuZGFyRXZlbnQsXG4gICAgcmVzaXplRXZlbnQ6IFJlc2l6ZUV2ZW50XG4gICkge1xuICAgIGNvbnN0IG1pbmltdW1FdmVudEhlaWdodCA9IGdldE1pbmltdW1FdmVudEhlaWdodEluTWludXRlcyhcbiAgICAgIHRoaXMuaG91clNlZ21lbnRzLFxuICAgICAgdGhpcy5ob3VyU2VnbWVudEhlaWdodFxuICAgICk7XG4gICAgY29uc3QgbmV3RXZlbnREYXRlcyA9IHtcbiAgICAgIHN0YXJ0OiBjYWxlbmRhckV2ZW50LnN0YXJ0LFxuICAgICAgZW5kOiBnZXREZWZhdWx0RXZlbnRFbmQoXG4gICAgICAgIHRoaXMuZGF0ZUFkYXB0ZXIsXG4gICAgICAgIGNhbGVuZGFyRXZlbnQsXG4gICAgICAgIG1pbmltdW1FdmVudEhlaWdodFxuICAgICAgKVxuICAgIH07XG4gICAgY29uc3QgeyBlbmQsIC4uLmV2ZW50V2l0aG91dEVuZCB9ID0gY2FsZW5kYXJFdmVudDtcbiAgICBjb25zdCBzbWFsbGVzdFJlc2l6ZXMgPSB7XG4gICAgICBzdGFydDogdGhpcy5kYXRlQWRhcHRlci5hZGRNaW51dGVzKFxuICAgICAgICBuZXdFdmVudERhdGVzLmVuZCxcbiAgICAgICAgbWluaW11bUV2ZW50SGVpZ2h0ICogLTFcbiAgICAgICksXG4gICAgICBlbmQ6IGdldERlZmF1bHRFdmVudEVuZChcbiAgICAgICAgdGhpcy5kYXRlQWRhcHRlcixcbiAgICAgICAgZXZlbnRXaXRob3V0RW5kLFxuICAgICAgICBtaW5pbXVtRXZlbnRIZWlnaHRcbiAgICAgIClcbiAgICB9O1xuXG4gICAgaWYgKHJlc2l6ZUV2ZW50LmVkZ2VzLmxlZnQpIHtcbiAgICAgIGNvbnN0IGRheXNEaWZmID0gTWF0aC5yb3VuZChcbiAgICAgICAgK3Jlc2l6ZUV2ZW50LmVkZ2VzLmxlZnQgLyB0aGlzLmRheUNvbHVtbldpZHRoXG4gICAgICApO1xuICAgICAgY29uc3QgbmV3U3RhcnQgPSB0aGlzLmRhdGVBZGFwdGVyLmFkZERheXMobmV3RXZlbnREYXRlcy5zdGFydCwgZGF5c0RpZmYpO1xuICAgICAgaWYgKG5ld1N0YXJ0IDwgc21hbGxlc3RSZXNpemVzLnN0YXJ0KSB7XG4gICAgICAgIG5ld0V2ZW50RGF0ZXMuc3RhcnQgPSBuZXdTdGFydDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0V2ZW50RGF0ZXMuc3RhcnQgPSBzbWFsbGVzdFJlc2l6ZXMuc3RhcnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZXNpemVFdmVudC5lZGdlcy5yaWdodCkge1xuICAgICAgY29uc3QgZGF5c0RpZmYgPSBNYXRoLnJvdW5kKFxuICAgICAgICArcmVzaXplRXZlbnQuZWRnZXMucmlnaHQgLyB0aGlzLmRheUNvbHVtbldpZHRoXG4gICAgICApO1xuICAgICAgY29uc3QgbmV3RW5kID0gdGhpcy5kYXRlQWRhcHRlci5hZGREYXlzKG5ld0V2ZW50RGF0ZXMuZW5kLCBkYXlzRGlmZik7XG4gICAgICBpZiAobmV3RW5kID4gc21hbGxlc3RSZXNpemVzLmVuZCkge1xuICAgICAgICBuZXdFdmVudERhdGVzLmVuZCA9IG5ld0VuZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0V2ZW50RGF0ZXMuZW5kID0gc21hbGxlc3RSZXNpemVzLmVuZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVzaXplRXZlbnQuZWRnZXMudG9wKSB7XG4gICAgICBjb25zdCBtaW51dGVzTW92ZWQgPSBnZXRNaW51dGVzTW92ZWQoXG4gICAgICAgIHJlc2l6ZUV2ZW50LmVkZ2VzLnRvcCBhcyBudW1iZXIsXG4gICAgICAgIHRoaXMuaG91clNlZ21lbnRzLFxuICAgICAgICB0aGlzLmhvdXJTZWdtZW50SGVpZ2h0LFxuICAgICAgICB0aGlzLmV2ZW50U25hcFNpemVcbiAgICAgICk7XG4gICAgICBjb25zdCBuZXdTdGFydCA9IHRoaXMuZGF0ZUFkYXB0ZXIuYWRkTWludXRlcyhcbiAgICAgICAgbmV3RXZlbnREYXRlcy5zdGFydCxcbiAgICAgICAgbWludXRlc01vdmVkXG4gICAgICApO1xuICAgICAgaWYgKG5ld1N0YXJ0IDwgc21hbGxlc3RSZXNpemVzLnN0YXJ0KSB7XG4gICAgICAgIG5ld0V2ZW50RGF0ZXMuc3RhcnQgPSBuZXdTdGFydDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0V2ZW50RGF0ZXMuc3RhcnQgPSBzbWFsbGVzdFJlc2l6ZXMuc3RhcnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZXNpemVFdmVudC5lZGdlcy5ib3R0b20pIHtcbiAgICAgIGNvbnN0IG1pbnV0ZXNNb3ZlZCA9IGdldE1pbnV0ZXNNb3ZlZChcbiAgICAgICAgcmVzaXplRXZlbnQuZWRnZXMuYm90dG9tIGFzIG51bWJlcixcbiAgICAgICAgdGhpcy5ob3VyU2VnbWVudHMsXG4gICAgICAgIHRoaXMuaG91clNlZ21lbnRIZWlnaHQsXG4gICAgICAgIHRoaXMuZXZlbnRTbmFwU2l6ZVxuICAgICAgKTtcbiAgICAgIGNvbnN0IG5ld0VuZCA9IHRoaXMuZGF0ZUFkYXB0ZXIuYWRkTWludXRlcyhcbiAgICAgICAgbmV3RXZlbnREYXRlcy5lbmQsXG4gICAgICAgIG1pbnV0ZXNNb3ZlZFxuICAgICAgKTtcbiAgICAgIGlmIChuZXdFbmQgPiBzbWFsbGVzdFJlc2l6ZXMuZW5kKSB7XG4gICAgICAgIG5ld0V2ZW50RGF0ZXMuZW5kID0gbmV3RW5kO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RXZlbnREYXRlcy5lbmQgPSBzbWFsbGVzdFJlc2l6ZXMuZW5kO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXdFdmVudERhdGVzO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50LCBXZWVrRGF5IH0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItd2Vlay12aWV3LWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICAjZGVmYXVsdFRlbXBsYXRlXG4gICAgICBsZXQtZGF5cz1cImRheXNcIlxuICAgICAgbGV0LWxvY2FsZT1cImxvY2FsZVwiXG4gICAgICBsZXQtZGF5SGVhZGVyQ2xpY2tlZD1cImRheUhlYWRlckNsaWNrZWRcIlxuICAgICAgbGV0LWV2ZW50RHJvcHBlZD1cImV2ZW50RHJvcHBlZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbC1kYXktaGVhZGVyc1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJjYWwtaGVhZGVyXCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgZGF5IG9mIGRheXM7IHRyYWNrQnk6dHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlXCJcbiAgICAgICAgICBbY2xhc3MuY2FsLXBhc3RdPVwiZGF5LmlzUGFzdFwiXG4gICAgICAgICAgW2NsYXNzLmNhbC10b2RheV09XCJkYXkuaXNUb2RheVwiXG4gICAgICAgICAgW2NsYXNzLmNhbC1mdXR1cmVdPVwiZGF5LmlzRnV0dXJlXCJcbiAgICAgICAgICBbY2xhc3MuY2FsLXdlZWtlbmRdPVwiZGF5LmlzV2Vla2VuZFwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiZGF5LmNzc0NsYXNzXCJcbiAgICAgICAgICAobXdsQ2xpY2spPVwiZGF5SGVhZGVyQ2xpY2tlZC5lbWl0KHtkYXk6IGRheX0pXCJcbiAgICAgICAgICBtd2xEcm9wcGFibGVcbiAgICAgICAgICBkcmFnT3ZlckNsYXNzPVwiY2FsLWRyYWctb3ZlclwiXG4gICAgICAgICAgKGRyb3ApPVwiZXZlbnREcm9wcGVkLmVtaXQoe2V2ZW50OiAkZXZlbnQuZHJvcERhdGEuZXZlbnQsIG5ld1N0YXJ0OiBkYXkuZGF0ZX0pXCI+XG4gICAgICAgICAgPGI+e3sgZGF5LmRhdGUgfCBjYWxlbmRhckRhdGU6J3dlZWtWaWV3Q29sdW1uSGVhZGVyJzpsb2NhbGUgfX08L2I+PGJyPlxuICAgICAgICAgIDxzcGFuPnt7IGRheS5kYXRlIHwgY2FsZW5kYXJEYXRlOid3ZWVrVmlld0NvbHVtblN1YkhlYWRlcic6bG9jYWxlIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntkYXlzOiBkYXlzLCBsb2NhbGU6IGxvY2FsZSwgZGF5SGVhZGVyQ2xpY2tlZDogZGF5SGVhZGVyQ2xpY2tlZCwgZXZlbnREcm9wcGVkOiBldmVudERyb3BwZWR9XCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcldlZWtWaWV3SGVhZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZGF5czogV2Vla0RheVtdO1xuXG4gIEBJbnB1dCgpXG4gIGxvY2FsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKVxuICBkYXlIZWFkZXJDbGlja2VkOiBFdmVudEVtaXR0ZXI8eyBkYXk6IFdlZWtEYXkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBkYXk6IFdlZWtEYXk7XG4gIH0+KCk7XG5cbiAgQE91dHB1dCgpXG4gIGV2ZW50RHJvcHBlZDogRXZlbnRFbWl0dGVyPHtcbiAgICBldmVudDogQ2FsZW5kYXJFdmVudDtcbiAgICBuZXdTdGFydDogRGF0ZTtcbiAgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7IG5ld1N0YXJ0OiBEYXRlIH0+KCk7XG5cbiAgdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlID0gdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlO1xufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2Vla1ZpZXdBbGxEYXlFdmVudCwgRGF5Vmlld0V2ZW50IH0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgUGxhY2VtZW50QXJyYXkgfSBmcm9tICdwb3NpdGlvbmluZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ213bC1jYWxlbmRhci13ZWVrLXZpZXctZXZlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgI2RlZmF1bHRUZW1wbGF0ZVxuICAgICAgbGV0LXdlZWtFdmVudD1cIndlZWtFdmVudFwiXG4gICAgICBsZXQtdG9vbHRpcFBsYWNlbWVudD1cInRvb2x0aXBQbGFjZW1lbnRcIlxuICAgICAgbGV0LWV2ZW50Q2xpY2tlZD1cImV2ZW50Q2xpY2tlZFwiXG4gICAgICBsZXQtdG9vbHRpcFRlbXBsYXRlPVwidG9vbHRpcFRlbXBsYXRlXCJcbiAgICAgIGxldC10b29sdGlwQXBwZW5kVG9Cb2R5PVwidG9vbHRpcEFwcGVuZFRvQm9keVwiXG4gICAgICBsZXQtdG9vbHRpcERpc2FibGVkPVwidG9vbHRpcERpc2FibGVkXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY2FsLWV2ZW50XCJcbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJ3ZWVrRXZlbnQuZXZlbnQuY29sb3I/LnNlY29uZGFyeVwiXG4gICAgICAgIFtzdHlsZS5ib3JkZXJDb2xvcl09XCJ3ZWVrRXZlbnQuZXZlbnQuY29sb3I/LnByaW1hcnlcIlxuICAgICAgICBbbXdsQ2FsZW5kYXJUb29sdGlwXT1cIiF0b29sdGlwRGlzYWJsZWQgPyAod2Vla0V2ZW50LmV2ZW50LnRpdGxlIHwgY2FsZW5kYXJFdmVudFRpdGxlOid3ZWVrVG9vbHRpcCc6d2Vla0V2ZW50LmV2ZW50KSA6ICcnXCJcbiAgICAgICAgW3Rvb2x0aXBQbGFjZW1lbnRdPVwidG9vbHRpcFBsYWNlbWVudFwiXG4gICAgICAgIFt0b29sdGlwRXZlbnRdPVwid2Vla0V2ZW50LmV2ZW50XCJcbiAgICAgICAgW3Rvb2x0aXBUZW1wbGF0ZV09XCJ0b29sdGlwVGVtcGxhdGVcIlxuICAgICAgICBbdG9vbHRpcEFwcGVuZFRvQm9keV09XCJ0b29sdGlwQXBwZW5kVG9Cb2R5XCJcbiAgICAgICAgKG13bENsaWNrKT1cImV2ZW50Q2xpY2tlZC5lbWl0KClcIj5cbiAgICAgICAgPG13bC1jYWxlbmRhci1ldmVudC1hY3Rpb25zXG4gICAgICAgICAgW2V2ZW50XT1cIndlZWtFdmVudC5ldmVudFwiXG4gICAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImV2ZW50QWN0aW9uc1RlbXBsYXRlXCI+XG4gICAgICAgIDwvbXdsLWNhbGVuZGFyLWV2ZW50LWFjdGlvbnM+XG4gICAgICAgICZuZ3NwO1xuICAgICAgICA8bXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlXG4gICAgICAgICAgW2V2ZW50XT1cIndlZWtFdmVudC5ldmVudFwiXG4gICAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImV2ZW50VGl0bGVUZW1wbGF0ZVwiXG4gICAgICAgICAgdmlldz1cIndlZWtcIj5cbiAgICAgICAgPC9td2wtY2FsZW5kYXItZXZlbnQtdGl0bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7XG4gICAgICAgIHdlZWtFdmVudDogd2Vla0V2ZW50LFxuICAgICAgICB0b29sdGlwUGxhY2VtZW50OiB0b29sdGlwUGxhY2VtZW50LFxuICAgICAgICBldmVudENsaWNrZWQ6IGV2ZW50Q2xpY2tlZCxcbiAgICAgICAgdG9vbHRpcFRlbXBsYXRlOiB0b29sdGlwVGVtcGxhdGUsXG4gICAgICAgIHRvb2x0aXBBcHBlbmRUb0JvZHk6IHRvb2x0aXBBcHBlbmRUb0JvZHksXG4gICAgICAgIHRvb2x0aXBEaXNhYmxlZDogdG9vbHRpcERpc2FibGVkXG4gICAgICB9XCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcldlZWtWaWV3RXZlbnRDb21wb25lbnQge1xuICBASW5wdXQoKVxuICB3ZWVrRXZlbnQ6IFdlZWtWaWV3QWxsRGF5RXZlbnQgfCBEYXlWaWV3RXZlbnQ7XG5cbiAgQElucHV0KClcbiAgdG9vbHRpcFBsYWNlbWVudDogUGxhY2VtZW50QXJyYXk7XG5cbiAgQElucHV0KClcbiAgdG9vbHRpcEFwcGVuZFRvQm9keTogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICB0b29sdGlwRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgZXZlbnRUaXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIGV2ZW50QWN0aW9uc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KClcbiAgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXZWVrVmlld0hvdXJDb2x1bW4gfSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ213bC1jYWxlbmRhci13ZWVrLXZpZXctaG91ci1zZWdtZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGVcbiAgICAgICNkZWZhdWx0VGVtcGxhdGVcbiAgICAgIGxldC1zZWdtZW50PVwic2VnbWVudFwiXG4gICAgICBsZXQtbG9jYWxlPVwibG9jYWxlXCJcbiAgICAgIGxldC1zZWdtZW50SGVpZ2h0PVwic2VnbWVudEhlaWdodFwiXG4gICAgICBsZXQtaXNUaW1lTGFiZWw9XCJpc1RpbWVMYWJlbFwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImNhbC1ob3VyLXNlZ21lbnRcIlxuICAgICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cInNlZ21lbnRIZWlnaHRcIlxuICAgICAgICBbY2xhc3MuY2FsLWhvdXItc3RhcnRdPVwic2VnbWVudC5pc1N0YXJ0XCJcbiAgICAgICAgW2NsYXNzLmNhbC1hZnRlci1ob3VyLXN0YXJ0XT1cIiFzZWdtZW50LmlzU3RhcnRcIlxuICAgICAgICBbbmdDbGFzc109XCJzZWdtZW50LmNzc0NsYXNzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtdGltZVwiICpuZ0lmPVwiaXNUaW1lTGFiZWxcIj5cbiAgICAgICAgICB7eyBzZWdtZW50LmRhdGUgfCBjYWxlbmRhckRhdGU6J3dlZWtWaWV3SG91cic6bG9jYWxlIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICBzZWdtZW50OiBzZWdtZW50LFxuICAgICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgICAgc2VnbWVudEhlaWdodDogc2VnbWVudEhlaWdodCxcbiAgICAgICAgaXNUaW1lTGFiZWw6IGlzVGltZUxhYmVsXG4gICAgICB9XCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcldlZWtWaWV3SG91clNlZ21lbnRDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBzZWdtZW50OiBXZWVrVmlld0hvdXJDb2x1bW47XG5cbiAgQElucHV0KClcbiAgc2VnbWVudEhlaWdodDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGxvY2FsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGlzVGltZUxhYmVsOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZXNpemFibGVNb2R1bGUgfSBmcm9tICdhbmd1bGFyLXJlc2l6YWJsZS1lbGVtZW50JztcbmltcG9ydCB7IERyYWdBbmREcm9wTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1kcmFnZ2FibGUtZHJvcHBhYmxlJztcbmltcG9ydCB7IENhbGVuZGFyV2Vla1ZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLXdlZWstdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJXZWVrVmlld0hlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItd2Vlay12aWV3LWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJXZWVrVmlld0V2ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci13ZWVrLXZpZXctZXZlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL2NhbGVuZGFyLWNvbW1vbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJXZWVrVmlld0hvdXJTZWdtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci13ZWVrLXZpZXctaG91ci1zZWdtZW50LmNvbXBvbmVudCc7XG5cbmV4cG9ydCB7XG4gIENhbGVuZGFyV2Vla1ZpZXdDb21wb25lbnQsXG4gIENhbGVuZGFyV2Vla1ZpZXdCZWZvcmVSZW5kZXJFdmVudFxufSBmcm9tICcuL2NhbGVuZGFyLXdlZWstdmlldy5jb21wb25lbnQnO1xuZXhwb3J0IHtcbiAgV2Vla1ZpZXdBbGxEYXlFdmVudCBhcyBDYWxlbmRhcldlZWtWaWV3QWxsRGF5RXZlbnQsXG4gIFdlZWtWaWV3QWxsRGF5RXZlbnRSb3cgYXMgQ2FsZW5kYXJXZWVrVmlld0FsbERheUV2ZW50Um93LFxuICBHZXRXZWVrVmlld0FyZ3MgYXMgQ2FsZW5kYXJHZXRXZWVrVmlld0FyZ3Ncbn0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuZXhwb3J0IHsgZ2V0V2Vla1ZpZXdQZXJpb2QgfSBmcm9tICcuLi9jb21tb24vdXRpbCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVzaXphYmxlTW9kdWxlLFxuICAgIERyYWdBbmREcm9wTW9kdWxlLFxuICAgIENhbGVuZGFyQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENhbGVuZGFyV2Vla1ZpZXdDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJXZWVrVmlld0hlYWRlckNvbXBvbmVudCxcbiAgICBDYWxlbmRhcldlZWtWaWV3RXZlbnRDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJXZWVrVmlld0hvdXJTZWdtZW50Q29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBSZXNpemFibGVNb2R1bGUsXG4gICAgRHJhZ0FuZERyb3BNb2R1bGUsXG4gICAgQ2FsZW5kYXJXZWVrVmlld0NvbXBvbmVudCxcbiAgICBDYWxlbmRhcldlZWtWaWV3SGVhZGVyQ29tcG9uZW50LFxuICAgIENhbGVuZGFyV2Vla1ZpZXdFdmVudENvbXBvbmVudCxcbiAgICBDYWxlbmRhcldlZWtWaWV3SG91clNlZ21lbnRDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcldlZWtNb2R1bGUge31cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBMT0NBTEVfSUQsXG4gIEluamVjdCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FsZW5kYXJFdmVudCxcbiAgRGF5VmlldyxcbiAgRGF5Vmlld0hvdXIsXG4gIERheVZpZXdIb3VyU2VnbWVudCxcbiAgRGF5Vmlld0V2ZW50LFxuICBWaWV3UGVyaW9kLFxuICBXZWVrVmlld0FsbERheUV2ZW50XG59IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmVzaXplRXZlbnQgfSBmcm9tICdhbmd1bGFyLXJlc2l6YWJsZS1lbGVtZW50JztcbmltcG9ydCB7IENhbGVuZGFyRHJhZ0hlbHBlciB9IGZyb20gJy4uL2NvbW1vbi9jYWxlbmRhci1kcmFnLWhlbHBlci5wcm92aWRlcic7XG5pbXBvcnQgeyBDYWxlbmRhclJlc2l6ZUhlbHBlciB9IGZyb20gJy4uL2NvbW1vbi9jYWxlbmRhci1yZXNpemUtaGVscGVyLnByb3ZpZGVyJztcbmltcG9ydCB7XG4gIENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudCxcbiAgQ2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50VHlwZVxufSBmcm9tICcuLi9jb21tb24vY2FsZW5kYXItZXZlbnQtdGltZXMtY2hhbmdlZC1ldmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FsZW5kYXJVdGlscyB9IGZyb20gJy4uL2NvbW1vbi9jYWxlbmRhci11dGlscy5wcm92aWRlcic7XG5pbXBvcnQge1xuICB2YWxpZGF0ZUV2ZW50cyxcbiAgdHJhY2tCeUV2ZW50SWQsXG4gIHRyYWNrQnlIb3VyLFxuICB0cmFja0J5SG91clNlZ21lbnQsXG4gIGdldE1pbnV0ZXNNb3ZlZCxcbiAgZ2V0RGVmYXVsdEV2ZW50RW5kLFxuICBnZXRNaW5pbXVtRXZlbnRIZWlnaHRJbk1pbnV0ZXMsXG4gIHRyYWNrQnlEYXlPcldlZWtFdmVudCxcbiAgaXNEcmFnZ2VkV2l0aGluUGVyaW9kLFxuICBzaG91bGRGaXJlRHJvcHBlZEV2ZW50XG59IGZyb20gJy4uL2NvbW1vbi91dGlsJztcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vZGF0ZS1hZGFwdGVycy9kYXRlLWFkYXB0ZXInO1xuaW1wb3J0IHsgRHJhZ0VuZEV2ZW50IH0gZnJvbSAnYW5ndWxhci1kcmFnZ2FibGUtZHJvcHBhYmxlJztcbmltcG9ydCB7IFBsYWNlbWVudEFycmF5IH0gZnJvbSAncG9zaXRpb25pbmcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyRGF5Vmlld0JlZm9yZVJlbmRlckV2ZW50IHtcbiAgYm9keToge1xuICAgIGhvdXJHcmlkOiBEYXlWaWV3SG91cltdO1xuICAgIGFsbERheUV2ZW50czogQ2FsZW5kYXJFdmVudFtdO1xuICB9O1xuICBwZXJpb2Q6IFZpZXdQZXJpb2Q7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgaW50ZXJmYWNlIERheVZpZXdFdmVudFJlc2l6ZSB7XG4gIG9yaWdpbmFsVG9wOiBudW1iZXI7XG4gIG9yaWdpbmFsSGVpZ2h0OiBudW1iZXI7XG4gIGVkZ2U6IHN0cmluZztcbn1cblxuLyoqXG4gKiBTaG93cyBhbGwgZXZlbnRzIG9uIGEgZ2l2ZW4gZGF5LiBFeGFtcGxlIHVzYWdlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIDxtd2wtY2FsZW5kYXItZGF5LXZpZXdcbiAqICBbdmlld0RhdGVdPVwidmlld0RhdGVcIlxuICogIFtldmVudHNdPVwiZXZlbnRzXCI+XG4gKiA8L213bC1jYWxlbmRhci1kYXktdmlldz5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItZGF5LXZpZXcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjYWwtZGF5LXZpZXdcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJjYWwtYWxsLWRheS1ldmVudHNcIlxuICAgICAgICBtd2xEcm9wcGFibGVcbiAgICAgICAgZHJhZ092ZXJDbGFzcz1cImNhbC1kcmFnLW92ZXJcIlxuICAgICAgICBkcmFnQWN0aXZlQ2xhc3M9XCJjYWwtZHJhZy1hY3RpdmVcIlxuICAgICAgICAoZHJvcCk9XCJldmVudERyb3BwZWQoJGV2ZW50LCB2aWV3LnBlcmlvZC5zdGFydCwgdHJ1ZSlcIj5cbiAgICAgICAgPG13bC1jYWxlbmRhci1kYXktdmlldy1ldmVudFxuICAgICAgICAgICpuZ0Zvcj1cImxldCBldmVudCBvZiB2aWV3LmFsbERheUV2ZW50czsgdHJhY2tCeTp0cmFja0J5RXZlbnRJZFwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiZXZlbnQuY3NzQ2xhc3NcIlxuICAgICAgICAgIFtkYXlFdmVudF09XCJ7ZXZlbnQ6IGV2ZW50fVwiXG4gICAgICAgICAgW3Rvb2x0aXBQbGFjZW1lbnRdPVwidG9vbHRpcFBsYWNlbWVudFwiXG4gICAgICAgICAgW3Rvb2x0aXBUZW1wbGF0ZV09XCJ0b29sdGlwVGVtcGxhdGVcIlxuICAgICAgICAgIFt0b29sdGlwQXBwZW5kVG9Cb2R5XT1cInRvb2x0aXBBcHBlbmRUb0JvZHlcIlxuICAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJldmVudFRlbXBsYXRlXCJcbiAgICAgICAgICBbZXZlbnRUaXRsZVRlbXBsYXRlXT1cImV2ZW50VGl0bGVUZW1wbGF0ZVwiXG4gICAgICAgICAgW2V2ZW50QWN0aW9uc1RlbXBsYXRlXT1cImV2ZW50QWN0aW9uc1RlbXBsYXRlXCJcbiAgICAgICAgICAoZXZlbnRDbGlja2VkKT1cImV2ZW50Q2xpY2tlZC5lbWl0KHtldmVudDogZXZlbnR9KVwiXG4gICAgICAgICAgW2NsYXNzLmNhbC1kcmFnZ2FibGVdPVwiIXNuYXBEcmFnZ2VkRXZlbnRzICYmIGV2ZW50LmRyYWdnYWJsZVwiXG4gICAgICAgICAgbXdsRHJhZ2dhYmxlXG4gICAgICAgICAgZHJhZ0FjdGl2ZUNsYXNzPVwiY2FsLWRyYWctYWN0aXZlXCJcbiAgICAgICAgICBbZHJvcERhdGFdPVwie2V2ZW50OiBldmVudCwgY2FsZW5kYXJJZDogY2FsZW5kYXJJZH1cIlxuICAgICAgICAgIFtkcmFnQXhpc109XCJ7eDogIXNuYXBEcmFnZ2VkRXZlbnRzICYmIGV2ZW50LmRyYWdnYWJsZSwgeTogIXNuYXBEcmFnZ2VkRXZlbnRzICYmIGV2ZW50LmRyYWdnYWJsZX1cIj5cbiAgICAgICAgPC9td2wtY2FsZW5kYXItZGF5LXZpZXctZXZlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJjYWwtaG91ci1yb3dzXCJcbiAgICAgICAgI2RheUV2ZW50c0NvbnRhaW5lclxuICAgICAgICBtd2xEcm9wcGFibGVcbiAgICAgICAgKGRyYWdFbnRlcik9XCJldmVudERyYWdFbnRlciA9IGV2ZW50RHJhZ0VudGVyICsgMVwiXG4gICAgICAgIChkcmFnTGVhdmUpPVwiZXZlbnREcmFnRW50ZXIgPSBldmVudERyYWdFbnRlciAtIDFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudHNcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAjZXZlbnRcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBkYXlFdmVudCBvZiB2aWV3Py5ldmVudHM7IHRyYWNrQnk6dHJhY2tCeURheUV2ZW50XCJcbiAgICAgICAgICAgIGNsYXNzPVwiY2FsLWV2ZW50LWNvbnRhaW5lclwiXG4gICAgICAgICAgICBbY2xhc3MuY2FsLWRyYWdnYWJsZV09XCJkYXlFdmVudC5ldmVudC5kcmFnZ2FibGVcIlxuICAgICAgICAgICAgW2NsYXNzLmNhbC1zdGFydHMtd2l0aGluLWRheV09XCIhZGF5RXZlbnQuc3RhcnRzQmVmb3JlRGF5XCJcbiAgICAgICAgICAgIFtjbGFzcy5jYWwtZW5kcy13aXRoaW4tZGF5XT1cIiFkYXlFdmVudC5lbmRzQWZ0ZXJEYXlcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwiZGF5RXZlbnQuZXZlbnQuY3NzQ2xhc3NcIlxuICAgICAgICAgICAgbXdsUmVzaXphYmxlXG4gICAgICAgICAgICBbcmVzaXplU25hcEdyaWRdPVwie3RvcDogZXZlbnRTbmFwU2l6ZSB8fCBob3VyU2VnbWVudEhlaWdodCwgYm90dG9tOiBldmVudFNuYXBTaXplIHx8IGhvdXJTZWdtZW50SGVpZ2h0fVwiXG4gICAgICAgICAgICBbdmFsaWRhdGVSZXNpemVdPVwidmFsaWRhdGVSZXNpemVcIlxuICAgICAgICAgICAgKHJlc2l6ZVN0YXJ0KT1cInJlc2l6ZVN0YXJ0ZWQoZGF5RXZlbnQsICRldmVudCwgZGF5RXZlbnRzQ29udGFpbmVyKVwiXG4gICAgICAgICAgICAocmVzaXppbmcpPVwicmVzaXppbmcoZGF5RXZlbnQsICRldmVudClcIlxuICAgICAgICAgICAgKHJlc2l6ZUVuZCk9XCJyZXNpemVFbmRlZChkYXlFdmVudClcIlxuICAgICAgICAgICAgbXdsRHJhZ2dhYmxlXG4gICAgICAgICAgICBkcmFnQWN0aXZlQ2xhc3M9XCJjYWwtZHJhZy1hY3RpdmVcIlxuICAgICAgICAgICAgW2Ryb3BEYXRhXT1cIntldmVudDogZGF5RXZlbnQuZXZlbnQsIGNhbGVuZGFySWQ6IGNhbGVuZGFySWR9XCJcbiAgICAgICAgICAgIFtkcmFnQXhpc109XCJ7eDogIXNuYXBEcmFnZ2VkRXZlbnRzICYmIGRheUV2ZW50LmV2ZW50LmRyYWdnYWJsZSAmJiBjdXJyZW50UmVzaXplcy5zaXplID09PSAwLCB5OiBkYXlFdmVudC5ldmVudC5kcmFnZ2FibGUgJiYgY3VycmVudFJlc2l6ZXMuc2l6ZSA9PT0gMH1cIlxuICAgICAgICAgICAgW2RyYWdTbmFwR3JpZF09XCJzbmFwRHJhZ2dlZEV2ZW50cyA/IHt5OiBldmVudFNuYXBTaXplIHx8IGhvdXJTZWdtZW50SGVpZ2h0fSA6IHt9XCJcbiAgICAgICAgICAgIFt2YWxpZGF0ZURyYWddPVwidmFsaWRhdGVEcmFnXCJcbiAgICAgICAgICAgIChkcmFnUG9pbnRlckRvd24pPVwiZHJhZ1N0YXJ0ZWQoZXZlbnQsIGRheUV2ZW50c0NvbnRhaW5lcilcIlxuICAgICAgICAgICAgKGRyYWdFbmQpPVwiZHJhZ0VuZGVkKGRheUV2ZW50LCAkZXZlbnQpXCJcbiAgICAgICAgICAgIFtzdHlsZS5tYXJnaW5Ub3AucHhdPVwiZGF5RXZlbnQudG9wXCJcbiAgICAgICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwiZGF5RXZlbnQuaGVpZ2h0XCJcbiAgICAgICAgICAgIFtzdHlsZS5tYXJnaW5MZWZ0LnB4XT1cImRheUV2ZW50LmxlZnQgKyA3MFwiXG4gICAgICAgICAgICBbc3R5bGUud2lkdGgucHhdPVwiZGF5RXZlbnQud2lkdGggLSAxXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwiY2FsLXJlc2l6ZS1oYW5kbGUgY2FsLXJlc2l6ZS1oYW5kbGUtYmVmb3JlLXN0YXJ0XCJcbiAgICAgICAgICAgICAgKm5nSWY9XCJkYXlFdmVudC5ldmVudD8ucmVzaXphYmxlPy5iZWZvcmVTdGFydCAmJiAhZGF5RXZlbnQuc3RhcnRzQmVmb3JlRGF5XCJcbiAgICAgICAgICAgICAgbXdsUmVzaXplSGFuZGxlXG4gICAgICAgICAgICAgIFtyZXNpemVFZGdlc109XCJ7IHRvcDogdHJ1ZSB9XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxtd2wtY2FsZW5kYXItZGF5LXZpZXctZXZlbnRcbiAgICAgICAgICAgICAgW2RheUV2ZW50XT1cImRheUV2ZW50XCJcbiAgICAgICAgICAgICAgW3Rvb2x0aXBQbGFjZW1lbnRdPVwidG9vbHRpcFBsYWNlbWVudFwiXG4gICAgICAgICAgICAgIFt0b29sdGlwVGVtcGxhdGVdPVwidG9vbHRpcFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgW3Rvb2x0aXBBcHBlbmRUb0JvZHldPVwidG9vbHRpcEFwcGVuZFRvQm9keVwiXG4gICAgICAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJldmVudFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgW2V2ZW50VGl0bGVUZW1wbGF0ZV09XCJldmVudFRpdGxlVGVtcGxhdGVcIlxuICAgICAgICAgICAgICBbZXZlbnRBY3Rpb25zVGVtcGxhdGVdPVwiZXZlbnRBY3Rpb25zVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAoZXZlbnRDbGlja2VkKT1cImV2ZW50Q2xpY2tlZC5lbWl0KHtldmVudDogZGF5RXZlbnQuZXZlbnR9KVwiPlxuICAgICAgICAgICAgPC9td2wtY2FsZW5kYXItZGF5LXZpZXctZXZlbnQ+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwiY2FsLXJlc2l6ZS1oYW5kbGUgY2FsLXJlc2l6ZS1oYW5kbGUtYWZ0ZXItZW5kXCJcbiAgICAgICAgICAgICAgKm5nSWY9XCJkYXlFdmVudC5ldmVudD8ucmVzaXphYmxlPy5hZnRlckVuZCAmJiAhZGF5RXZlbnQuZW5kc0FmdGVyRGF5XCJcbiAgICAgICAgICAgICAgbXdsUmVzaXplSGFuZGxlXG4gICAgICAgICAgICAgIFtyZXNpemVFZGdlc109XCJ7IGJvdHRvbTogdHJ1ZSB9XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtaG91clwiICpuZ0Zvcj1cImxldCBob3VyIG9mIGhvdXJzOyB0cmFja0J5OnRyYWNrQnlIb3VyXCIgW3N0eWxlLm1pbldpZHRoLnB4XT1cInZpZXc/LndpZHRoICsgNzBcIj5cbiAgICAgICAgICA8bXdsLWNhbGVuZGFyLWRheS12aWV3LWhvdXItc2VnbWVudFxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IHNlZ21lbnQgb2YgaG91ci5zZWdtZW50czsgdHJhY2tCeTp0cmFja0J5SG91clNlZ21lbnRcIlxuICAgICAgICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJob3VyU2VnbWVudEhlaWdodFwiXG4gICAgICAgICAgICBbc2VnbWVudF09XCJzZWdtZW50XCJcbiAgICAgICAgICAgIFtzZWdtZW50SGVpZ2h0XT1cImhvdXJTZWdtZW50SGVpZ2h0XCJcbiAgICAgICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJob3VyU2VnbWVudFRlbXBsYXRlXCJcbiAgICAgICAgICAgIChtd2xDbGljayk9XCJob3VyU2VnbWVudENsaWNrZWQuZW1pdCh7ZGF0ZTogc2VnbWVudC5kYXRlfSlcIlxuICAgICAgICAgICAgbXdsRHJvcHBhYmxlXG4gICAgICAgICAgICBkcmFnT3ZlckNsYXNzPVwiY2FsLWRyYWctb3ZlclwiXG4gICAgICAgICAgICBkcmFnQWN0aXZlQ2xhc3M9XCJjYWwtZHJhZy1hY3RpdmVcIlxuICAgICAgICAgICAgKGRyb3ApPVwiZXZlbnREcm9wcGVkKCRldmVudCwgc2VnbWVudC5kYXRlLCBmYWxzZSlcIj5cbiAgICAgICAgICA8L213bC1jYWxlbmRhci1kYXktdmlldy1ob3VyLXNlZ21lbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJEYXlWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2aWV3IGRhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHZpZXdEYXRlOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBldmVudHMgdG8gZGlzcGxheSBvbiB2aWV3XG4gICAqIFRoZSBzY2hlbWEgaXMgYXZhaWxhYmxlIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0bGV3aXM5Mi9jYWxlbmRhci11dGlscy9ibG9iL2M1MTY4OTk4NWY1OWEyNzE5NDBlMzBiYzRlMmM0ZTFmZWUzZmNiNWMvc3JjL2NhbGVuZGFyVXRpbHMudHMjTDQ5LUw2M1xuICAgKi9cbiAgQElucHV0KClcbiAgZXZlbnRzOiBDYWxlbmRhckV2ZW50W10gPSBbXTtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBzZWdtZW50cyBpbiBhbiBob3VyLiBNdXN0IGJlIDw9IDZcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhvdXJTZWdtZW50czogbnVtYmVyID0gMjtcblxuICAvKipcbiAgICogVGhlIGhlaWdodCBpbiBwaXhlbHMgb2YgZWFjaCBob3VyIHNlZ21lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhvdXJTZWdtZW50SGVpZ2h0OiBudW1iZXIgPSAzMDtcblxuICAvKipcbiAgICogVGhlIGRheSBzdGFydCBob3VycyBpbiAyNCBob3VyIHRpbWUuIE11c3QgYmUgMC0yM1xuICAgKi9cbiAgQElucHV0KClcbiAgZGF5U3RhcnRIb3VyOiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF5IHN0YXJ0IG1pbnV0ZXMuIE11c3QgYmUgMC01OVxuICAgKi9cbiAgQElucHV0KClcbiAgZGF5U3RhcnRNaW51dGU6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgZW5kIGhvdXJzIGluIDI0IGhvdXIgdGltZS4gTXVzdCBiZSAwLTIzXG4gICAqL1xuICBASW5wdXQoKVxuICBkYXlFbmRIb3VyOiBudW1iZXIgPSAyMztcblxuICAvKipcbiAgICogVGhlIGRheSBlbmQgbWludXRlcy4gTXVzdCBiZSAwLTU5XG4gICAqL1xuICBASW5wdXQoKVxuICBkYXlFbmRNaW51dGU6IG51bWJlciA9IDU5O1xuXG4gIC8qKlxuICAgKiBUaGUgd2lkdGggaW4gcGl4ZWxzIG9mIGVhY2ggZXZlbnQgb24gdGhlIHZpZXdcbiAgICovXG4gIEBJbnB1dCgpXG4gIGV2ZW50V2lkdGg6IG51bWJlciA9IDE1MDtcblxuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IHdoZW4gZW1pdHRlZCBvbiB3aWxsIHJlLXJlbmRlciB0aGUgY3VycmVudCB2aWV3XG4gICAqL1xuICBASW5wdXQoKVxuICByZWZyZXNoOiBTdWJqZWN0PGFueT47XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhbGUgdXNlZCB0byBmb3JtYXQgZGF0ZXNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGxvY2FsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZ3JpZCBzaXplIHRvIHNuYXAgcmVzaXppbmcgYW5kIGRyYWdnaW5nIG9mIGV2ZW50cyB0b1xuICAgKi9cbiAgQElucHV0KClcbiAgZXZlbnRTbmFwU2l6ZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgcGxhY2VtZW50IG9mIHRoZSBldmVudCB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKVxuICB0b29sdGlwUGxhY2VtZW50OiBQbGFjZW1lbnRBcnJheSA9ICdhdXRvJztcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgZXZlbnQgdG9vbHRpcHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogV2hldGhlciB0byBhcHBlbmQgdG9vbHRpcHMgdG8gdGhlIGJvZHkgb3IgbmV4dCB0byB0aGUgdHJpZ2dlciBlbGVtZW50XG4gICAqL1xuICBASW5wdXQoKVxuICB0b29sdGlwQXBwZW5kVG9Cb2R5OiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIHRvIHJlcGxhY2UgdGhlIGhvdXIgc2VnbWVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaG91clNlZ21lbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciBkYXkgdmlldyBldmVudHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGV2ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgZXZlbnQgdGl0bGVzXG4gICAqL1xuICBASW5wdXQoKVxuICBldmVudFRpdGxlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgZXZlbnQgYWN0aW9uc1xuICAgKi9cbiAgQElucHV0KClcbiAgZXZlbnRBY3Rpb25zVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc25hcCBldmVudHMgdG8gYSBncmlkIHdoZW4gZHJhZ2dpbmdcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNuYXBEcmFnZ2VkRXZlbnRzOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYW4gZXZlbnQgdGl0bGUgaXMgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGV2ZW50Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuICB9PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiBob3VyIHNlZ21lbnQgaXMgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGhvdXJTZWdtZW50Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIGRhdGU6IERhdGU7XG4gIH0+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGFuIGV2ZW50IGlzIHJlc2l6ZWQgb3IgZHJhZ2dlZCBhbmQgZHJvcHBlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGV2ZW50VGltZXNDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEFuIG91dHB1dCB0aGF0IHdpbGwgYmUgY2FsbGVkIGJlZm9yZSB0aGUgdmlldyBpcyByZW5kZXJlZCBmb3IgdGhlIGN1cnJlbnQgZGF5LlxuICAgKiBJZiB5b3UgYWRkIHRoZSBgY3NzQ2xhc3NgIHByb3BlcnR5IHRvIGFuIGhvdXIgZ3JpZCBzZWdtZW50IGl0IHdpbGwgYWRkIHRoYXQgY2xhc3MgdG8gdGhlIGhvdXIgc2VnbWVudCBpbiB0aGUgdGVtcGxhdGVcbiAgICovXG4gIEBPdXRwdXQoKVxuICBiZWZvcmVWaWV3UmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxDYWxlbmRhckRheVZpZXdCZWZvcmVSZW5kZXJFdmVudD4oKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgaG91cnM6IERheVZpZXdIb3VyW10gPSBbXTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdmlldzogRGF5VmlldztcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgd2lkdGg6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHJlZnJlc2hTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY3VycmVudFJlc2l6ZXM6IE1hcDxEYXlWaWV3RXZlbnQsIERheVZpZXdFdmVudFJlc2l6ZT4gPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGV2ZW50RHJhZ0VudGVyID0gMDtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY2FsZW5kYXJJZCA9IFN5bWJvbCgnYW5ndWxhciBjYWxlbmRhciBkYXkgdmlldyBpZCcpO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB2YWxpZGF0ZURyYWc6IChhcmdzOiBhbnkpID0+IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHZhbGlkYXRlUmVzaXplOiAoYXJnczogYW55KSA9PiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB0cmFja0J5RXZlbnRJZCA9IHRyYWNrQnlFdmVudElkO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB0cmFja0J5SG91ciA9IHRyYWNrQnlIb3VyO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB0cmFja0J5SG91clNlZ21lbnQgPSB0cmFja0J5SG91clNlZ21lbnQ7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHRyYWNrQnlEYXlFdmVudCA9IHRyYWNrQnlEYXlPcldlZWtFdmVudDtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgdXRpbHM6IENhbGVuZGFyVXRpbHMsXG4gICAgQEluamVjdChMT0NBTEVfSUQpIGxvY2FsZTogc3RyaW5nLFxuICAgIHByaXZhdGUgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyXG4gICkge1xuICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbiA9IHRoaXMucmVmcmVzaC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2hBbGwoKTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIGNoYW5nZXMudmlld0RhdGUgfHxcbiAgICAgIGNoYW5nZXMuZGF5U3RhcnRIb3VyIHx8XG4gICAgICBjaGFuZ2VzLmRheVN0YXJ0TWludXRlIHx8XG4gICAgICBjaGFuZ2VzLmRheUVuZEhvdXIgfHxcbiAgICAgIGNoYW5nZXMuZGF5RW5kTWludXRlIHx8XG4gICAgICBjaGFuZ2VzLmhvdXJTZWdtZW50c1xuICAgICkge1xuICAgICAgdGhpcy5yZWZyZXNoSG91ckdyaWQoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5ldmVudHMpIHtcbiAgICAgIHZhbGlkYXRlRXZlbnRzKHRoaXMuZXZlbnRzKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjaGFuZ2VzLnZpZXdEYXRlIHx8XG4gICAgICBjaGFuZ2VzLmV2ZW50cyB8fFxuICAgICAgY2hhbmdlcy5kYXlTdGFydEhvdXIgfHxcbiAgICAgIGNoYW5nZXMuZGF5U3RhcnRNaW51dGUgfHxcbiAgICAgIGNoYW5nZXMuZGF5RW5kSG91ciB8fFxuICAgICAgY2hhbmdlcy5kYXlFbmRNaW51dGUgfHxcbiAgICAgIGNoYW5nZXMuZXZlbnRXaWR0aFxuICAgICkge1xuICAgICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICAgIH1cbiAgfVxuXG4gIGV2ZW50RHJvcHBlZChcbiAgICBkcm9wRXZlbnQ6IHsgZHJvcERhdGE/OiB7IGV2ZW50PzogQ2FsZW5kYXJFdmVudDsgY2FsZW5kYXJJZD86IHN5bWJvbCB9IH0sXG4gICAgZGF0ZTogRGF0ZSxcbiAgICBhbGxEYXk6IGJvb2xlYW5cbiAgKTogdm9pZCB7XG4gICAgaWYgKHNob3VsZEZpcmVEcm9wcGVkRXZlbnQoZHJvcEV2ZW50LCBkYXRlLCBhbGxEYXksIHRoaXMuY2FsZW5kYXJJZCkpIHtcbiAgICAgIHRoaXMuZXZlbnRUaW1lc0NoYW5nZWQuZW1pdCh7XG4gICAgICAgIHR5cGU6IENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudFR5cGUuRHJvcCxcbiAgICAgICAgZXZlbnQ6IGRyb3BFdmVudC5kcm9wRGF0YS5ldmVudCxcbiAgICAgICAgbmV3U3RhcnQ6IGRhdGUsXG4gICAgICAgIGFsbERheVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVzaXplU3RhcnRlZChcbiAgICBldmVudDogRGF5Vmlld0V2ZW50LFxuICAgIHJlc2l6ZUV2ZW50OiBSZXNpemVFdmVudCxcbiAgICBkYXlFdmVudHNDb250YWluZXI6IEhUTUxFbGVtZW50XG4gICk6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudFJlc2l6ZXMuc2V0KGV2ZW50LCB7XG4gICAgICBvcmlnaW5hbFRvcDogZXZlbnQudG9wLFxuICAgICAgb3JpZ2luYWxIZWlnaHQ6IGV2ZW50LmhlaWdodCxcbiAgICAgIGVkZ2U6IHR5cGVvZiByZXNpemVFdmVudC5lZGdlcy50b3AgIT09ICd1bmRlZmluZWQnID8gJ3RvcCcgOiAnYm90dG9tJ1xuICAgIH0pO1xuICAgIGNvbnN0IHJlc2l6ZUhlbHBlcjogQ2FsZW5kYXJSZXNpemVIZWxwZXIgPSBuZXcgQ2FsZW5kYXJSZXNpemVIZWxwZXIoXG4gICAgICBkYXlFdmVudHNDb250YWluZXJcbiAgICApO1xuICAgIHRoaXMudmFsaWRhdGVSZXNpemUgPSAoeyByZWN0YW5nbGUgfSkgPT5cbiAgICAgIHJlc2l6ZUhlbHBlci52YWxpZGF0ZVJlc2l6ZSh7IHJlY3RhbmdsZSB9KTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlc2l6aW5nKGV2ZW50OiBEYXlWaWV3RXZlbnQsIHJlc2l6ZUV2ZW50OiBSZXNpemVFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRSZXNpemU6IERheVZpZXdFdmVudFJlc2l6ZSA9IHRoaXMuY3VycmVudFJlc2l6ZXMuZ2V0KGV2ZW50KTtcbiAgICBpZiAocmVzaXplRXZlbnQuZWRnZXMudG9wKSB7XG4gICAgICBldmVudC50b3AgPSBjdXJyZW50UmVzaXplLm9yaWdpbmFsVG9wICsgK3Jlc2l6ZUV2ZW50LmVkZ2VzLnRvcDtcbiAgICAgIGV2ZW50LmhlaWdodCA9IGN1cnJlbnRSZXNpemUub3JpZ2luYWxIZWlnaHQgLSArcmVzaXplRXZlbnQuZWRnZXMudG9wO1xuICAgIH0gZWxzZSBpZiAocmVzaXplRXZlbnQuZWRnZXMuYm90dG9tKSB7XG4gICAgICBldmVudC5oZWlnaHQgPSBjdXJyZW50UmVzaXplLm9yaWdpbmFsSGVpZ2h0ICsgK3Jlc2l6ZUV2ZW50LmVkZ2VzLmJvdHRvbTtcbiAgICB9XG4gIH1cblxuICByZXNpemVFbmRlZChkYXlFdmVudDogRGF5Vmlld0V2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudFJlc2l6ZTogRGF5Vmlld0V2ZW50UmVzaXplID0gdGhpcy5jdXJyZW50UmVzaXplcy5nZXQoZGF5RXZlbnQpO1xuXG4gICAgY29uc3QgcmVzaXppbmdCZWZvcmVTdGFydCA9IGN1cnJlbnRSZXNpemUuZWRnZSA9PT0gJ3RvcCc7XG4gICAgbGV0IHBpeGVsc01vdmVkOiBudW1iZXI7XG4gICAgaWYgKHJlc2l6aW5nQmVmb3JlU3RhcnQpIHtcbiAgICAgIHBpeGVsc01vdmVkID0gZGF5RXZlbnQudG9wIC0gY3VycmVudFJlc2l6ZS5vcmlnaW5hbFRvcDtcbiAgICB9IGVsc2Uge1xuICAgICAgcGl4ZWxzTW92ZWQgPSBkYXlFdmVudC5oZWlnaHQgLSBjdXJyZW50UmVzaXplLm9yaWdpbmFsSGVpZ2h0O1xuICAgIH1cblxuICAgIGRheUV2ZW50LnRvcCA9IGN1cnJlbnRSZXNpemUub3JpZ2luYWxUb3A7XG4gICAgZGF5RXZlbnQuaGVpZ2h0ID0gY3VycmVudFJlc2l6ZS5vcmlnaW5hbEhlaWdodDtcblxuICAgIGNvbnN0IG1pbnV0ZXNNb3ZlZCA9IGdldE1pbnV0ZXNNb3ZlZChcbiAgICAgIHBpeGVsc01vdmVkLFxuICAgICAgdGhpcy5ob3VyU2VnbWVudHMsXG4gICAgICB0aGlzLmhvdXJTZWdtZW50SGVpZ2h0LFxuICAgICAgdGhpcy5ldmVudFNuYXBTaXplXG4gICAgKTtcblxuICAgIGxldCBuZXdTdGFydDogRGF0ZSA9IGRheUV2ZW50LmV2ZW50LnN0YXJ0O1xuICAgIGxldCBuZXdFbmQ6IERhdGUgPSBnZXREZWZhdWx0RXZlbnRFbmQoXG4gICAgICB0aGlzLmRhdGVBZGFwdGVyLFxuICAgICAgZGF5RXZlbnQuZXZlbnQsXG4gICAgICBnZXRNaW5pbXVtRXZlbnRIZWlnaHRJbk1pbnV0ZXModGhpcy5ob3VyU2VnbWVudHMsIHRoaXMuaG91clNlZ21lbnRIZWlnaHQpXG4gICAgKTtcbiAgICBpZiAocmVzaXppbmdCZWZvcmVTdGFydCkge1xuICAgICAgbmV3U3RhcnQgPSB0aGlzLmRhdGVBZGFwdGVyLmFkZE1pbnV0ZXMobmV3U3RhcnQsIG1pbnV0ZXNNb3ZlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0VuZCA9IHRoaXMuZGF0ZUFkYXB0ZXIuYWRkTWludXRlcyhuZXdFbmQsIG1pbnV0ZXNNb3ZlZCk7XG4gICAgfVxuXG4gICAgdGhpcy5ldmVudFRpbWVzQ2hhbmdlZC5lbWl0KHtcbiAgICAgIG5ld1N0YXJ0LFxuICAgICAgbmV3RW5kLFxuICAgICAgZXZlbnQ6IGRheUV2ZW50LmV2ZW50LFxuICAgICAgdHlwZTogQ2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50VHlwZS5SZXNpemVcbiAgICB9KTtcbiAgICB0aGlzLmN1cnJlbnRSZXNpemVzLmRlbGV0ZShkYXlFdmVudCk7XG4gIH1cblxuICBkcmFnU3RhcnRlZChldmVudDogSFRNTEVsZW1lbnQsIGRheUV2ZW50c0NvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBkcmFnSGVscGVyOiBDYWxlbmRhckRyYWdIZWxwZXIgPSBuZXcgQ2FsZW5kYXJEcmFnSGVscGVyKFxuICAgICAgZGF5RXZlbnRzQ29udGFpbmVyLFxuICAgICAgZXZlbnRcbiAgICApO1xuICAgIHRoaXMudmFsaWRhdGVEcmFnID0gKHsgeCwgeSB9KSA9PlxuICAgICAgdGhpcy5jdXJyZW50UmVzaXplcy5zaXplID09PSAwICYmXG4gICAgICBkcmFnSGVscGVyLnZhbGlkYXRlRHJhZyh7XG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIHNuYXBEcmFnZ2VkRXZlbnRzOiB0aGlzLnNuYXBEcmFnZ2VkRXZlbnRzXG4gICAgICB9KTtcbiAgICB0aGlzLmV2ZW50RHJhZ0VudGVyID0gMDtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGRyYWdFbmRlZChkYXlFdmVudDogRGF5Vmlld0V2ZW50LCBkcmFnRW5kRXZlbnQ6IERyYWdFbmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmV2ZW50RHJhZ0VudGVyID4gMCkge1xuICAgICAgbGV0IG1pbnV0ZXNNb3ZlZCA9IGdldE1pbnV0ZXNNb3ZlZChcbiAgICAgICAgZHJhZ0VuZEV2ZW50LnksXG4gICAgICAgIHRoaXMuaG91clNlZ21lbnRzLFxuICAgICAgICB0aGlzLmhvdXJTZWdtZW50SGVpZ2h0LFxuICAgICAgICB0aGlzLmV2ZW50U25hcFNpemVcbiAgICAgICk7XG4gICAgICBsZXQgbmV3U3RhcnQ6IERhdGUgPSB0aGlzLmRhdGVBZGFwdGVyLmFkZE1pbnV0ZXMoXG4gICAgICAgIGRheUV2ZW50LmV2ZW50LnN0YXJ0LFxuICAgICAgICBtaW51dGVzTW92ZWRcbiAgICAgICk7XG4gICAgICBpZiAoZHJhZ0VuZEV2ZW50LnkgPCAwICYmIG5ld1N0YXJ0IDwgdGhpcy52aWV3LnBlcmlvZC5zdGFydCkge1xuICAgICAgICBtaW51dGVzTW92ZWQgKz0gdGhpcy5kYXRlQWRhcHRlci5kaWZmZXJlbmNlSW5NaW51dGVzKFxuICAgICAgICAgIHRoaXMudmlldy5wZXJpb2Quc3RhcnQsXG4gICAgICAgICAgbmV3U3RhcnRcbiAgICAgICAgKTtcbiAgICAgICAgbmV3U3RhcnQgPSB0aGlzLnZpZXcucGVyaW9kLnN0YXJ0O1xuICAgICAgfVxuICAgICAgbGV0IG5ld0VuZDogRGF0ZTtcbiAgICAgIGlmIChkYXlFdmVudC5ldmVudC5lbmQpIHtcbiAgICAgICAgbmV3RW5kID0gdGhpcy5kYXRlQWRhcHRlci5hZGRNaW51dGVzKGRheUV2ZW50LmV2ZW50LmVuZCwgbWludXRlc01vdmVkKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0RyYWdnZWRXaXRoaW5QZXJpb2QobmV3U3RhcnQsIG5ld0VuZCwgdGhpcy52aWV3LnBlcmlvZCkpIHtcbiAgICAgICAgdGhpcy5ldmVudFRpbWVzQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgICBuZXdTdGFydCxcbiAgICAgICAgICBuZXdFbmQsXG4gICAgICAgICAgZXZlbnQ6IGRheUV2ZW50LmV2ZW50LFxuICAgICAgICAgIHR5cGU6IENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudFR5cGUuRHJhZ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hIb3VyR3JpZCgpOiB2b2lkIHtcbiAgICB0aGlzLmhvdXJzID0gdGhpcy51dGlscy5nZXREYXlWaWV3SG91ckdyaWQoe1xuICAgICAgdmlld0RhdGU6IHRoaXMudmlld0RhdGUsXG4gICAgICBob3VyU2VnbWVudHM6IHRoaXMuaG91clNlZ21lbnRzLFxuICAgICAgZGF5U3RhcnQ6IHtcbiAgICAgICAgaG91cjogdGhpcy5kYXlTdGFydEhvdXIsXG4gICAgICAgIG1pbnV0ZTogdGhpcy5kYXlTdGFydE1pbnV0ZVxuICAgICAgfSxcbiAgICAgIGRheUVuZDoge1xuICAgICAgICBob3VyOiB0aGlzLmRheUVuZEhvdXIsXG4gICAgICAgIG1pbnV0ZTogdGhpcy5kYXlFbmRNaW51dGVcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmVtaXRCZWZvcmVWaWV3UmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hWaWV3KCk6IHZvaWQge1xuICAgIHRoaXMudmlldyA9IHRoaXMudXRpbHMuZ2V0RGF5Vmlldyh7XG4gICAgICBldmVudHM6IHRoaXMuZXZlbnRzLFxuICAgICAgdmlld0RhdGU6IHRoaXMudmlld0RhdGUsXG4gICAgICBob3VyU2VnbWVudHM6IHRoaXMuaG91clNlZ21lbnRzLFxuICAgICAgZGF5U3RhcnQ6IHtcbiAgICAgICAgaG91cjogdGhpcy5kYXlTdGFydEhvdXIsXG4gICAgICAgIG1pbnV0ZTogdGhpcy5kYXlTdGFydE1pbnV0ZVxuICAgICAgfSxcbiAgICAgIGRheUVuZDoge1xuICAgICAgICBob3VyOiB0aGlzLmRheUVuZEhvdXIsXG4gICAgICAgIG1pbnV0ZTogdGhpcy5kYXlFbmRNaW51dGVcbiAgICAgIH0sXG4gICAgICBldmVudFdpZHRoOiB0aGlzLmV2ZW50V2lkdGgsXG4gICAgICBzZWdtZW50SGVpZ2h0OiB0aGlzLmhvdXJTZWdtZW50SGVpZ2h0XG4gICAgfSk7XG4gICAgdGhpcy5lbWl0QmVmb3JlVmlld1JlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoQWxsKCk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaEhvdXJHcmlkKCk7XG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0QmVmb3JlVmlld1JlbmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ob3VycyAmJiB0aGlzLnZpZXcpIHtcbiAgICAgIHRoaXMuYmVmb3JlVmlld1JlbmRlci5lbWl0KHtcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIGhvdXJHcmlkOiB0aGlzLmhvdXJzLFxuICAgICAgICAgIGFsbERheUV2ZW50czogdGhpcy52aWV3LmFsbERheUV2ZW50c1xuICAgICAgICB9LFxuICAgICAgICBwZXJpb2Q6IHRoaXMudmlldy5wZXJpb2RcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERheVZpZXdIb3VyU2VnbWVudCB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXdsLWNhbGVuZGFyLWRheS12aWV3LWhvdXItc2VnbWVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICAjZGVmYXVsdFRlbXBsYXRlXG4gICAgICBsZXQtc2VnbWVudD1cInNlZ21lbnRcIlxuICAgICAgbGV0LWxvY2FsZT1cImxvY2FsZVwiXG4gICAgICBsZXQtc2VnbWVudEhlaWdodD1cInNlZ21lbnRIZWlnaHRcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJjYWwtaG91ci1zZWdtZW50XCJcbiAgICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJzZWdtZW50SGVpZ2h0XCJcbiAgICAgICAgW2NsYXNzLmNhbC1ob3VyLXN0YXJ0XT1cInNlZ21lbnQuaXNTdGFydFwiXG4gICAgICAgIFtjbGFzcy5jYWwtYWZ0ZXItaG91ci1zdGFydF09XCIhc2VnbWVudC5pc1N0YXJ0XCJcbiAgICAgICAgW25nQ2xhc3NdPVwic2VnbWVudC5jc3NDbGFzc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLXRpbWVcIj5cbiAgICAgICAgICB7eyBzZWdtZW50LmRhdGUgfCBjYWxlbmRhckRhdGU6J2RheVZpZXdIb3VyJzpsb2NhbGUgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7XG4gICAgICAgIHNlZ21lbnQ6IHNlZ21lbnQsXG4gICAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgICBzZWdtZW50SGVpZ2h0OiBzZWdtZW50SGVpZ2h0XG4gICAgICB9XCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckRheVZpZXdIb3VyU2VnbWVudENvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHNlZ21lbnQ6IERheVZpZXdIb3VyU2VnbWVudDtcblxuICBASW5wdXQoKVxuICBzZWdtZW50SGVpZ2h0OiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgbG9jYWxlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXlWaWV3RXZlbnQgfSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyBQbGFjZW1lbnRBcnJheSB9IGZyb20gJ3Bvc2l0aW9uaW5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXdsLWNhbGVuZGFyLWRheS12aWV3LWV2ZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGVcbiAgICAgICNkZWZhdWx0VGVtcGxhdGVcbiAgICAgIGxldC1kYXlFdmVudD1cImRheUV2ZW50XCJcbiAgICAgIGxldC10b29sdGlwUGxhY2VtZW50PVwidG9vbHRpcFBsYWNlbWVudFwiXG4gICAgICBsZXQtZXZlbnRDbGlja2VkPVwiZXZlbnRDbGlja2VkXCJcbiAgICAgIGxldC10b29sdGlwVGVtcGxhdGU9XCJ0b29sdGlwVGVtcGxhdGVcIlxuICAgICAgbGV0LXRvb2x0aXBBcHBlbmRUb0JvZHk9XCJ0b29sdGlwQXBwZW5kVG9Cb2R5XCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY2FsLWV2ZW50XCJcbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJkYXlFdmVudC5ldmVudC5jb2xvcj8uc2Vjb25kYXJ5XCJcbiAgICAgICAgW3N0eWxlLmJvcmRlckNvbG9yXT1cImRheUV2ZW50LmV2ZW50LmNvbG9yPy5wcmltYXJ5XCJcbiAgICAgICAgW213bENhbGVuZGFyVG9vbHRpcF09XCJkYXlFdmVudC5ldmVudC50aXRsZSB8IGNhbGVuZGFyRXZlbnRUaXRsZTonZGF5VG9vbHRpcCc6ZGF5RXZlbnQuZXZlbnRcIlxuICAgICAgICBbdG9vbHRpcFBsYWNlbWVudF09XCJ0b29sdGlwUGxhY2VtZW50XCJcbiAgICAgICAgW3Rvb2x0aXBFdmVudF09XCJkYXlFdmVudC5ldmVudFwiXG4gICAgICAgIFt0b29sdGlwVGVtcGxhdGVdPVwidG9vbHRpcFRlbXBsYXRlXCJcbiAgICAgICAgW3Rvb2x0aXBBcHBlbmRUb0JvZHldPVwidG9vbHRpcEFwcGVuZFRvQm9keVwiXG4gICAgICAgIChtd2xDbGljayk9XCJldmVudENsaWNrZWQuZW1pdCgpXCI+XG4gICAgICAgIDxtd2wtY2FsZW5kYXItZXZlbnQtYWN0aW9uc1xuICAgICAgICAgIFtldmVudF09XCJkYXlFdmVudC5ldmVudFwiXG4gICAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImV2ZW50QWN0aW9uc1RlbXBsYXRlXCI+XG4gICAgICAgIDwvbXdsLWNhbGVuZGFyLWV2ZW50LWFjdGlvbnM+XG4gICAgICAgICZuZ3NwO1xuICAgICAgICA8bXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlXG4gICAgICAgICAgW2V2ZW50XT1cImRheUV2ZW50LmV2ZW50XCJcbiAgICAgICAgICBbY3VzdG9tVGVtcGxhdGVdPVwiZXZlbnRUaXRsZVRlbXBsYXRlXCJcbiAgICAgICAgICB2aWV3PVwiZGF5XCI+XG4gICAgICAgIDwvbXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICBkYXlFdmVudDogZGF5RXZlbnQsXG4gICAgICAgIHRvb2x0aXBQbGFjZW1lbnQ6IHRvb2x0aXBQbGFjZW1lbnQsXG4gICAgICAgIGV2ZW50Q2xpY2tlZDogZXZlbnRDbGlja2VkLFxuICAgICAgICB0b29sdGlwVGVtcGxhdGU6IHRvb2x0aXBUZW1wbGF0ZSxcbiAgICAgICAgdG9vbHRpcEFwcGVuZFRvQm9keTogdG9vbHRpcEFwcGVuZFRvQm9keVxuICAgICAgfVwiPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJEYXlWaWV3RXZlbnRDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBkYXlFdmVudDogRGF5Vmlld0V2ZW50O1xuXG4gIEBJbnB1dCgpXG4gIHRvb2x0aXBQbGFjZW1lbnQ6IFBsYWNlbWVudEFycmF5O1xuXG4gIEBJbnB1dCgpXG4gIHRvb2x0aXBBcHBlbmRUb0JvZHk6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgZXZlbnRUaXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIGV2ZW50QWN0aW9uc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KClcbiAgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVzaXphYmxlTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1yZXNpemFibGUtZWxlbWVudCc7XG5pbXBvcnQgeyBEcmFnQW5kRHJvcE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZSc7XG5pbXBvcnQgeyBDYWxlbmRhckRheVZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLWRheS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhckRheVZpZXdIb3VyU2VnbWVudENvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItZGF5LXZpZXctaG91ci1zZWdtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhckRheVZpZXdFdmVudENvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItZGF5LXZpZXctZXZlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL2NhbGVuZGFyLWNvbW1vbi5tb2R1bGUnO1xuXG5leHBvcnQge1xuICBDYWxlbmRhckRheVZpZXdDb21wb25lbnQsXG4gIENhbGVuZGFyRGF5Vmlld0JlZm9yZVJlbmRlckV2ZW50XG59IGZyb20gJy4vY2FsZW5kYXItZGF5LXZpZXcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZXNpemFibGVNb2R1bGUsXG4gICAgRHJhZ0FuZERyb3BNb2R1bGUsXG4gICAgQ2FsZW5kYXJDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2FsZW5kYXJEYXlWaWV3Q29tcG9uZW50LFxuICAgIENhbGVuZGFyRGF5Vmlld0hvdXJTZWdtZW50Q29tcG9uZW50LFxuICAgIENhbGVuZGFyRGF5Vmlld0V2ZW50Q29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBSZXNpemFibGVNb2R1bGUsXG4gICAgRHJhZ0FuZERyb3BNb2R1bGUsXG4gICAgQ2FsZW5kYXJEYXlWaWV3Q29tcG9uZW50LFxuICAgIENhbGVuZGFyRGF5Vmlld0hvdXJTZWdtZW50Q29tcG9uZW50LFxuICAgIENhbGVuZGFyRGF5Vmlld0V2ZW50Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJEYXlNb2R1bGUge31cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FsZW5kYXJDb21tb25Nb2R1bGUsXG4gIENhbGVuZGFyTW9kdWxlQ29uZmlnLFxuICBDYWxlbmRhckV2ZW50VGl0bGVGb3JtYXR0ZXIsXG4gIENhbGVuZGFyRGF0ZUZvcm1hdHRlclxufSBmcm9tICcuL2NvbW1vbi9jYWxlbmRhci1jb21tb24ubW9kdWxlJztcbmltcG9ydCB7IENhbGVuZGFyTW9udGhNb2R1bGUgfSBmcm9tICcuL21vbnRoL2NhbGVuZGFyLW1vbnRoLm1vZHVsZSc7XG5pbXBvcnQgeyBDYWxlbmRhcldlZWtNb2R1bGUgfSBmcm9tICcuL3dlZWsvY2FsZW5kYXItd2Vlay5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJEYXlNb2R1bGUgfSBmcm9tICcuL2RheS9jYWxlbmRhci1kYXkubW9kdWxlJztcbmltcG9ydCB7IENhbGVuZGFyVXRpbHMgfSBmcm9tICcuL2NvbW1vbi9jYWxlbmRhci11dGlscy5wcm92aWRlcic7XG5cbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uL2NhbGVuZGFyLWNvbW1vbi5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9tb250aC9jYWxlbmRhci1tb250aC5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi93ZWVrL2NhbGVuZGFyLXdlZWsubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vZGF5L2NhbGVuZGFyLWRheS5tb2R1bGUnO1xuXG4vKipcbiAqIFRoZSBtYWluIG1vZHVsZSBvZiB0aGlzIGxpYnJhcnkuIEV4YW1wbGUgdXNhZ2U6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2FsZW5kZXJNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWNhbGVuZGFyJztcbiAqXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgQ2FsZW5kZXJNb2R1bGUuZm9yUm9vdCgpXG4gKiAgIF1cbiAqIH0pXG4gKiBjbGFzcyBNeU1vZHVsZSB7fVxuICogYGBgXG4gKlxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ2FsZW5kYXJDb21tb25Nb2R1bGUsXG4gICAgQ2FsZW5kYXJNb250aE1vZHVsZSxcbiAgICBDYWxlbmRhcldlZWtNb2R1bGUsXG4gICAgQ2FsZW5kYXJEYXlNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENhbGVuZGFyQ29tbW9uTW9kdWxlLFxuICAgIENhbGVuZGFyTW9udGhNb2R1bGUsXG4gICAgQ2FsZW5kYXJXZWVrTW9kdWxlLFxuICAgIENhbGVuZGFyRGF5TW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBkYXRlQWRhcHRlcjogUHJvdmlkZXIsXG4gICAgY29uZmlnOiBDYWxlbmRhck1vZHVsZUNvbmZpZyA9IHt9XG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ2FsZW5kYXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgZGF0ZUFkYXB0ZXIsXG4gICAgICAgIGNvbmZpZy5ldmVudFRpdGxlRm9ybWF0dGVyIHx8IENhbGVuZGFyRXZlbnRUaXRsZUZvcm1hdHRlcixcbiAgICAgICAgY29uZmlnLmRhdGVGb3JtYXR0ZXIgfHwgQ2FsZW5kYXJEYXRlRm9ybWF0dGVyLFxuICAgICAgICBjb25maWcudXRpbHMgfHwgQ2FsZW5kYXJVdGlsc1xuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZUV2ZW50cyIsInZhbGlkYXRlRXZlbnRzV2l0aG91dExvZyIsInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBWUEsSUFBYUEsZ0JBQWMsR0FBRyxV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

/***/ }),

/***/ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js ***!
  \***************************************************************************************/
/*! exports provided: DragAndDropModule, ɵc, ɵd, ɵb, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropModule", function() { return DragAndDropModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return DraggableHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return DraggableScrollContainerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DraggableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DroppableDirective; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DraggableHelper = /** @class */ (function () {
    function DraggableHelper() {
        this.currentDrag = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    DraggableHelper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DraggableHelper.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function DraggableHelper_Factory() { return new DraggableHelper(); }, token: DraggableHelper, providedIn: "root" });
    return DraggableHelper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DraggableScrollContainerDirective = /** @class */ (function () {
    function DraggableScrollContainerDirective(elementRef) {
        this.elementRef = elementRef;
    }
    DraggableScrollContainerDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[mwlDraggableScrollContainer]'
                },] }
    ];
    /** @nocollapse */
    DraggableScrollContainerDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    return DraggableScrollContainerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DraggableDirective = /** @class */ (function () {
    /**
     * @hidden
     */
    function DraggableDirective(element, renderer, draggableHelper, zone, vcr, scrollContainer, document) {
        this.element = element;
        this.renderer = renderer;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.vcr = vcr;
        this.scrollContainer = scrollContainer;
        this.document = document;
        /**
         * The axis along which the element is draggable
         */
        this.dragAxis = { x: true, y: true };
        /**
         * Snap all drags to an x / y grid
         */
        this.dragSnapGrid = {};
        /**
         * Show a ghost element that shows the drag when dragging
         */
        this.ghostDragEnabled = true;
        /**
         * Show the original element when ghostDragEnabled is true
         */
        this.showOriginalElementWhileDragging = false;
        /**
         * The cursor to use when dragging the element
         */
        this.dragCursor = '';
        /**
         * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
         */
        this.dragPointerDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called when the element has started to be dragged.
         * Only called after at least one mouse or touch move event.
         * If you call $event.cancelDrag$.emit() it will cancel the current drag
         */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called after the ghost element has been created
         */
        this.ghostElementCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called when the element is being dragged
         */
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called after the element is dragged
         */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @hidden
         */
        this.pointerDown$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * @hidden
         */
        this.pointerMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * @hidden
         */
        this.pointerUp$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.eventListenerSubscriptions = {};
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    /**
     * @return {?}
     */
    DraggableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.checkEventListeners();
        /** @type {?} */
        var pointerDragged$ = this.pointerDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return _this.canDrag(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (pointerDownEvent) {
            // fix for https://github.com/mattlewis92/angular-draggable-droppable/issues/61
            // stop mouse events propagating up the chain
            if (pointerDownEvent.event.stopPropagation) {
                pointerDownEvent.event.stopPropagation();
            }
            /** @type {?} */
            var globalDragStyle = _this.renderer.createElement('style');
            _this.renderer.setAttribute(globalDragStyle, 'type', 'text/css');
            _this.renderer.appendChild(globalDragStyle, _this.renderer.createText("\n          body * {\n           -moz-user-select: none;\n           -ms-user-select: none;\n           -webkit-user-select: none;\n           user-select: none;\n          }\n        "));
            _this.document.head.appendChild(globalDragStyle);
            /** @type {?} */
            var startScrollPosition = _this.getScrollPosition();
            /** @type {?} */
            var scrollContainerScroll$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
                /** @type {?} */
                var scrollContainer = _this.scrollContainer
                    ? _this.scrollContainer.elementRef.nativeElement
                    : 'window';
                return _this.renderer.listen(scrollContainer, 'scroll', function (e) {
                    return observer.next(e);
                });
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(startScrollPosition), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this.getScrollPosition(); }));
            /** @type {?} */
            var currentDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            /** @type {?} */
            var cancelDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
            _this.zone.run(function () {
                _this.dragPointerDown.next({ x: 0, y: 0 });
            });
            /** @type {?} */
            var dragComplete$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(_this.pointerUp$, _this.pointerDown$, cancelDrag$, _this.destroy$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
            /** @type {?} */
            var pointerMove = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(_this.pointerMove$, scrollContainerScroll$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__read"])(_a, 2), pointerMoveEvent = _b[0], scroll = _b[1];
                return {
                    currentDrag$: currentDrag$,
                    transformX: pointerMoveEvent.clientX - pointerDownEvent.clientX,
                    transformY: pointerMoveEvent.clientY - pointerDownEvent.clientY,
                    clientX: pointerMoveEvent.clientX,
                    clientY: pointerMoveEvent.clientY,
                    scrollLeft: scroll.left,
                    scrollTop: scroll.top
                };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (moveData) {
                if (_this.dragSnapGrid.x) {
                    moveData.transformX =
                        Math.round(moveData.transformX / _this.dragSnapGrid.x) *
                            _this.dragSnapGrid.x;
                }
                if (_this.dragSnapGrid.y) {
                    moveData.transformY =
                        Math.round(moveData.transformY / _this.dragSnapGrid.y) *
                            _this.dragSnapGrid.y;
                }
                return moveData;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (moveData) {
                if (!_this.dragAxis.x) {
                    moveData.transformX = 0;
                }
                if (!_this.dragAxis.y) {
                    moveData.transformY = 0;
                }
                return moveData;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (moveData) {
                /** @type {?} */
                var scrollX = moveData.scrollLeft - startScrollPosition.left;
                /** @type {?} */
                var scrollY = moveData.scrollTop - startScrollPosition.top;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, moveData, { x: moveData.transformX + scrollX, y: moveData.transformY + scrollY });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_a) {
                var x = _a.x, y = _a.y;
                return !_this.validateDrag || _this.validateDrag({ x: x, y: y });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(dragComplete$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
            /** @type {?} */
            var dragStarted$ = pointerMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
            /** @type {?} */
            var dragEnded$ = pointerMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeLast"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
            dragStarted$.subscribe(function () {
                _this.zone.run(function () {
                    _this.dragStart.next({ cancelDrag$: cancelDrag$ });
                });
                _this.renderer.addClass(_this.element.nativeElement, _this.dragActiveClass);
                if (_this.ghostDragEnabled) {
                    /** @type {?} */
                    var rect = _this.element.nativeElement.getBoundingClientRect();
                    /** @type {?} */
                    var clone_1 = /** @type {?} */ (_this.element.nativeElement.cloneNode(true));
                    if (!_this.showOriginalElementWhileDragging) {
                        _this.renderer.setStyle(_this.element.nativeElement, 'visibility', 'hidden');
                    }
                    if (_this.ghostElementAppendTo) {
                        _this.ghostElementAppendTo.appendChild(clone_1);
                    }
                    else {
                        /** @type {?} */ ((_this.element.nativeElement.parentNode)).insertBefore(clone_1, _this.element.nativeElement.nextSibling);
                    }
                    _this.ghostElement = clone_1;
                    _this.setElementStyles(clone_1, {
                        position: 'fixed',
                        top: rect.top + "px",
                        left: rect.left + "px",
                        width: rect.width + "px",
                        height: rect.height + "px",
                        cursor: _this.dragCursor,
                        margin: '0'
                    });
                    if (_this.ghostElementTemplate) {
                        /** @type {?} */
                        var viewRef_1 = _this.vcr.createEmbeddedView(_this.ghostElementTemplate);
                        clone_1.innerHTML = '';
                        viewRef_1.rootNodes
                            .filter(function (node) { return node instanceof Node; })
                            .forEach(function (node) {
                            clone_1.appendChild(node);
                        });
                        dragEnded$.subscribe(function () {
                            _this.vcr.remove(_this.vcr.indexOf(viewRef_1));
                        });
                    }
                    _this.zone.run(function () {
                        _this.ghostElementCreated.emit();
                    });
                    dragEnded$.subscribe(function () {
                        /** @type {?} */ ((clone_1.parentElement)).removeChild(clone_1);
                        _this.ghostElement = null;
                        _this.renderer.setStyle(_this.element.nativeElement, 'visibility', '');
                    });
                }
                _this.draggableHelper.currentDrag.next(currentDrag$);
            });
            dragEnded$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (dragEndData) {
                /** @type {?} */
                var dragEndData$ = cancelDrag$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["count"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (calledCount) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, dragEndData, { dragCancelled: calledCount > 0 })); }));
                cancelDrag$.complete();
                return dragEndData$;
            }))
                .subscribe(function (_a) {
                var x = _a.x, y = _a.y, dragCancelled = _a.dragCancelled;
                _this.zone.run(function () {
                    _this.dragEnd.next({ x: x, y: y, dragCancelled: dragCancelled });
                });
                _this.renderer.removeClass(_this.element.nativeElement, _this.dragActiveClass);
                currentDrag$.complete();
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(dragComplete$, dragEnded$)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
                .subscribe(function () {
                _this.document.head.removeChild(globalDragStyle);
            });
            return pointerMove;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(pointerDragged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return [, value]; })), pointerDragged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])()))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__read"])(_a, 2), previous = _b[0], next = _b[1];
            if (!previous) {
                return true;
            }
            return previous.x !== next.x || previous.y !== next.y;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__read"])(_a, 2), previous = _b[0], next = _b[1];
            return next;
        }))
            .subscribe(function (_a) {
            var x = _a.x, y = _a.y, currentDrag$ = _a.currentDrag$, clientX = _a.clientX, clientY = _a.clientY, transformX = _a.transformX, transformY = _a.transformY;
            _this.zone.run(function () {
                _this.dragging.next({ x: x, y: y });
            });
            if (_this.ghostElement) {
                /** @type {?} */
                var transform = "translate(" + transformX + "px, " + transformY + "px)";
                _this.setElementStyles(_this.ghostElement, {
                    transform: transform,
                    '-webkit-transform': transform,
                    '-ms-transform': transform,
                    '-moz-transform': transform,
                    '-o-transform': transform
                });
            }
            currentDrag$.next({
                clientX: clientX,
                clientY: clientY,
                dropData: _this.dropData
            });
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DraggableDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["dragAxis"]) {
            this.checkEventListeners();
        }
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribeEventListeners();
        this.pointerDown$.complete();
        this.pointerMove$.complete();
        this.pointerUp$.complete();
        this.destroy$.next();
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.checkEventListeners = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var canDrag = this.canDrag();
        /** @type {?} */
        var hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;
        if (canDrag && !hasEventListeners) {
            this.zone.runOutsideAngular(function () {
                _this.eventListenerSubscriptions.mousedown = _this.renderer.listen(_this.element.nativeElement, 'mousedown', function (event) {
                    _this.onMouseDown(event);
                });
                _this.eventListenerSubscriptions.mouseup = _this.renderer.listen('document', 'mouseup', function (event) {
                    _this.onMouseUp(event);
                });
                _this.eventListenerSubscriptions.touchstart = _this.renderer.listen(_this.element.nativeElement, 'touchstart', function (event) {
                    _this.onTouchStart(event);
                });
                _this.eventListenerSubscriptions.touchend = _this.renderer.listen('document', 'touchend', function (event) {
                    _this.onTouchEnd(event);
                });
                _this.eventListenerSubscriptions.touchcancel = _this.renderer.listen('document', 'touchcancel', function (event) {
                    _this.onTouchEnd(event);
                });
                _this.eventListenerSubscriptions.mouseenter = _this.renderer.listen(_this.element.nativeElement, 'mouseenter', function () {
                    _this.onMouseEnter();
                });
                _this.eventListenerSubscriptions.mouseleave = _this.renderer.listen(_this.element.nativeElement, 'mouseleave', function () {
                    _this.onMouseLeave();
                });
            });
        }
        else if (!canDrag && hasEventListeners) {
            this.unsubscribeEventListeners();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (!this.eventListenerSubscriptions.mousemove) {
            this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove', function (mouseMoveEvent) {
                _this.pointerMove$.next({
                    event: mouseMoveEvent,
                    clientX: mouseMoveEvent.clientX,
                    clientY: mouseMoveEvent.clientY
                });
            });
        }
        this.pointerDown$.next({
            event: event,
            clientX: event.clientX,
            clientY: event.clientY
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onMouseUp = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.eventListenerSubscriptions.mousemove) {
            this.eventListenerSubscriptions.mousemove();
            delete this.eventListenerSubscriptions.mousemove;
        }
        this.pointerUp$.next({
            event: event,
            clientX: event.clientX,
            clientY: event.clientY
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onTouchStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (!this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove = this.renderer.listen('document', 'touchmove', function (touchMoveEvent) {
                _this.pointerMove$.next({
                    event: touchMoveEvent,
                    clientX: touchMoveEvent.targetTouches[0].clientX,
                    clientY: touchMoveEvent.targetTouches[0].clientY
                });
            });
        }
        this.pointerDown$.next({
            event: event,
            clientX: event.touches[0].clientX,
            clientY: event.touches[0].clientY
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onTouchEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove();
            delete this.eventListenerSubscriptions.touchmove;
        }
        this.pointerUp$.next({
            event: event,
            clientX: event.changedTouches[0].clientX,
            clientY: event.changedTouches[0].clientY
        });
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.onMouseEnter = /**
     * @return {?}
     */
    function () {
        this.setCursor(this.dragCursor);
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        this.setCursor('');
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.canDrag = /**
     * @return {?}
     */
    function () {
        return this.dragAxis.x || this.dragAxis.y;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DraggableDirective.prototype.setCursor = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.unsubscribeEventListeners = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.eventListenerSubscriptions).forEach(function (type) {
            (/** @type {?} */ (_this)).eventListenerSubscriptions[type]();
            delete (/** @type {?} */ (_this)).eventListenerSubscriptions[type];
        });
    };
    /**
     * @param {?} element
     * @param {?} styles
     * @return {?}
     */
    DraggableDirective.prototype.setElementStyles = /**
     * @param {?} element
     * @param {?} styles
     * @return {?}
     */
    function (element, styles) {
        var _this = this;
        Object.keys(styles).forEach(function (key) {
            _this.renderer.setStyle(element, key, styles[key]);
        });
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.getScrollPosition = /**
     * @return {?}
     */
    function () {
        if (this.scrollContainer) {
            return {
                top: this.scrollContainer.elementRef.nativeElement.scrollTop,
                left: this.scrollContainer.elementRef.nativeElement.scrollLeft
            };
        }
        else {
            return {
                top: window.pageYOffset || document.documentElement.scrollTop,
                left: window.pageXOffset || document.documentElement.scrollLeft
            };
        }
    };
    DraggableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[mwlDraggable]'
                },] }
    ];
    /** @nocollapse */
    DraggableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: DraggableHelper },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
        { type: DraggableScrollContainerDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ]; };
    DraggableDirective.propDecorators = {
        dropData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dragAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dragSnapGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        ghostDragEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        showOriginalElementWhileDragging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        validateDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dragCursor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dragActiveClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        ghostElementAppendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        ghostElementTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dragPointerDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        ghostElementCreated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        dragging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return DraggableDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} clientX
 * @param {?} clientY
 * @param {?} rect
 * @return {?}
 */
function isCoordinateWithinRectangle(clientX, clientY, rect) {
    return (clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom);
}
var DroppableDirective = /** @class */ (function () {
    function DroppableDirective(element, draggableHelper, zone, renderer, scrollContainer) {
        this.element = element;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.renderer = renderer;
        this.scrollContainer = scrollContainer;
        /**
         * Called when a draggable element starts overlapping the element
         */
        this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called when a draggable element stops overlapping the element
         */
        this.dragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called when a draggable element is moved over the element
         */
        this.dragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called when a draggable element is dropped on this element
         */
        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    DroppableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe(function (drag$) {
            _this.renderer.addClass(_this.element.nativeElement, _this.dragActiveClass);
            /** @type {?} */
            var droppableElement = {
                updateCache: true
            };
            /** @type {?} */
            var deregisterScrollListener = _this.renderer.listen(_this.scrollContainer
                ? _this.scrollContainer.elementRef.nativeElement
                : 'window', 'scroll', function () {
                droppableElement.updateCache = true;
            });
            /** @type {?} */
            var currentDragDropData;
            /** @type {?} */
            var overlaps$ = drag$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                var clientX = _a.clientX, clientY = _a.clientY, dropData = _a.dropData;
                currentDragDropData = dropData;
                if (droppableElement.updateCache) {
                    droppableElement.rect = _this.element.nativeElement.getBoundingClientRect();
                    if (_this.scrollContainer) {
                        droppableElement.scrollContainerRect = _this.scrollContainer.elementRef.nativeElement.getBoundingClientRect();
                    }
                    droppableElement.updateCache = false;
                }
                /** @type {?} */
                var isWithinElement = isCoordinateWithinRectangle(clientX, clientY, /** @type {?} */ (droppableElement.rect));
                if (droppableElement.scrollContainerRect) {
                    return (isWithinElement &&
                        isCoordinateWithinRectangle(clientX, clientY, /** @type {?} */ (droppableElement.scrollContainerRect)));
                }
                else {
                    return isWithinElement;
                }
            }));
            /** @type {?} */
            var overlapsChanged$ = overlaps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            /** @type {?} */
            var dragOverActive; // TODO - see if there's a way of doing this via rxjs
            overlapsChanged$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (overlapsNow) { return overlapsNow; }))
                .subscribe(function () {
                dragOverActive = true;
                _this.renderer.addClass(_this.element.nativeElement, _this.dragOverClass);
                _this.zone.run(function () {
                    _this.dragEnter.next({
                        dropData: currentDragDropData
                    });
                });
            });
            overlaps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (overlapsNow) { return overlapsNow; })).subscribe(function () {
                _this.zone.run(function () {
                    _this.dragOver.next({
                        dropData: currentDragDropData
                    });
                });
            });
            overlapsChanged$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__read"])(_a, 2), didOverlap = _b[0], overlapsNow = _b[1];
                return didOverlap && !overlapsNow;
            }))
                .subscribe(function () {
                dragOverActive = false;
                _this.renderer.removeClass(_this.element.nativeElement, _this.dragOverClass);
                _this.zone.run(function () {
                    _this.dragLeave.next({
                        dropData: currentDragDropData
                    });
                });
            });
            drag$.subscribe({
                complete: function () {
                    deregisterScrollListener();
                    _this.renderer.removeClass(_this.element.nativeElement, _this.dragActiveClass);
                    if (dragOverActive) {
                        _this.renderer.removeClass(_this.element.nativeElement, _this.dragOverClass);
                        _this.zone.run(function () {
                            _this.drop.next({
                                dropData: currentDragDropData
                            });
                        });
                    }
                }
            });
        });
    };
    /**
     * @return {?}
     */
    DroppableDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.currentDragSubscription) {
            this.currentDragSubscription.unsubscribe();
        }
    };
    DroppableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[mwlDroppable]'
                },] }
    ];
    /** @nocollapse */
    DroppableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: DraggableHelper },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: DraggableScrollContainerDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
    ]; };
    DroppableDirective.propDecorators = {
        dragOverClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dragActiveClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dragEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        dragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        dragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        drop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return DroppableDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DragAndDropModule = /** @class */ (function () {
    function DragAndDropModule() {
    }
    DragAndDropModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        DraggableDirective,
                        DroppableDirective,
                        DraggableScrollContainerDirective
                    ],
                    exports: [
                        DraggableDirective,
                        DroppableDirective,
                        DraggableScrollContainerDirective
                    ]
                },] }
    ];
    return DragAndDropModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1kcmFnZ2FibGUtZHJvcHBhYmxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLWRyYWdnYWJsZS1kcm9wcGFibGUvbGliL2RyYWdnYWJsZS1oZWxwZXIucHJvdmlkZXIudHMiLCJuZzovL2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZS9saWIvZHJhZ2dhYmxlLXNjcm9sbC1jb250YWluZXIuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWRyYWdnYWJsZS1kcm9wcGFibGUvbGliL2RyYWdnYWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZS9saWIvZHJvcHBhYmxlLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1kcmFnZ2FibGUtZHJvcHBhYmxlL2xpYi9kcmFnLWFuZC1kcm9wLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VycmVudERyYWdEYXRhIHtcbiAgY2xpZW50WDogbnVtYmVyO1xuICBjbGllbnRZOiBudW1iZXI7XG4gIGRyb3BEYXRhOiBhbnk7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUhlbHBlciB7XG4gIGN1cnJlbnREcmFnID0gbmV3IFN1YmplY3Q8U3ViamVjdDxDdXJyZW50RHJhZ0RhdGE+PigpO1xufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xEcmFnZ2FibGVTY3JvbGxDb250YWluZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVTY3JvbGxDb250YWluZXJEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHt9XG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIE9uSW5pdCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxuICBOZ1pvbmUsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEluamVjdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIE9wdGlvbmFsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSwgbWVyZ2UsIFJlcGxheVN1YmplY3QsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHRha2VVbnRpbCxcbiAgdGFrZSxcbiAgdGFrZUxhc3QsXG4gIHBhaXJ3aXNlLFxuICBzaGFyZSxcbiAgZmlsdGVyLFxuICBjb3VudCxcbiAgc3RhcnRXaXRoXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1cnJlbnREcmFnRGF0YSwgRHJhZ2dhYmxlSGVscGVyIH0gZnJvbSAnLi9kcmFnZ2FibGUtaGVscGVyLnByb3ZpZGVyJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERyYWdnYWJsZVNjcm9sbENvbnRhaW5lckRpcmVjdGl2ZSB9IGZyb20gJy4vZHJhZ2dhYmxlLXNjcm9sbC1jb250YWluZXIuZGlyZWN0aXZlJztcblxuZXhwb3J0IGludGVyZmFjZSBDb29yZGluYXRlcyB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyYWdBeGlzIHtcbiAgeDogYm9vbGVhbjtcbiAgeTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTbmFwR3JpZCB7XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ1BvaW50ZXJEb3duRXZlbnQgZXh0ZW5kcyBDb29yZGluYXRlcyB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIERyYWdTdGFydEV2ZW50IHtcbiAgY2FuY2VsRHJhZyQ6IFJlcGxheVN1YmplY3Q8dm9pZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ01vdmVFdmVudCBleHRlbmRzIENvb3JkaW5hdGVzIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ0VuZEV2ZW50IGV4dGVuZHMgQ29vcmRpbmF0ZXMge1xuICBkcmFnQ2FuY2VsbGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBWYWxpZGF0ZURyYWcgPSAoY29vcmRpbmF0ZXM6IENvb3JkaW5hdGVzKSA9PiBib29sZWFuO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50ZXJFdmVudCB7XG4gIGNsaWVudFg6IG51bWJlcjtcbiAgY2xpZW50WTogbnVtYmVyO1xuICBldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQ7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xEcmFnZ2FibGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIGFuIG9iamVjdCBvZiBkYXRhIHlvdSBjYW4gcGFzcyB0byB0aGUgZHJvcCBldmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZHJvcERhdGE6IGFueTtcblxuICAvKipcbiAgICogVGhlIGF4aXMgYWxvbmcgd2hpY2ggdGhlIGVsZW1lbnQgaXMgZHJhZ2dhYmxlXG4gICAqL1xuICBASW5wdXQoKVxuICBkcmFnQXhpczogRHJhZ0F4aXMgPSB7IHg6IHRydWUsIHk6IHRydWUgfTtcblxuICAvKipcbiAgICogU25hcCBhbGwgZHJhZ3MgdG8gYW4geCAvIHkgZ3JpZFxuICAgKi9cbiAgQElucHV0KClcbiAgZHJhZ1NuYXBHcmlkOiBTbmFwR3JpZCA9IHt9O1xuXG4gIC8qKlxuICAgKiBTaG93IGEgZ2hvc3QgZWxlbWVudCB0aGF0IHNob3dzIHRoZSBkcmFnIHdoZW4gZHJhZ2dpbmdcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdob3N0RHJhZ0VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBvcmlnaW5hbCBlbGVtZW50IHdoZW4gZ2hvc3REcmFnRW5hYmxlZCBpcyB0cnVlXG4gICAqL1xuICBASW5wdXQoKVxuICBzaG93T3JpZ2luYWxFbGVtZW50V2hpbGVEcmFnZ2luZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBbGxvdyBjdXN0b20gYmVoYXZpb3VyIHRvIGNvbnRyb2wgd2hlbiB0aGUgZWxlbWVudCBpcyBkcmFnZ2VkXG4gICAqL1xuICBASW5wdXQoKVxuICB2YWxpZGF0ZURyYWc6IFZhbGlkYXRlRHJhZztcblxuICAvKipcbiAgICogVGhlIGN1cnNvciB0byB1c2Ugd2hlbiBkcmFnZ2luZyB0aGUgZWxlbWVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZHJhZ0N1cnNvcjogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIFRoZSBjc3MgY2xhc3MgdG8gYXBwbHkgd2hlbiB0aGUgZWxlbWVudCBpcyBiZWluZyBkcmFnZ2VkXG4gICAqL1xuICBASW5wdXQoKVxuICBkcmFnQWN0aXZlQ2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGVsZW1lbnQgdGhlIGdob3N0IGVsZW1lbnQgd2lsbCBiZSBhcHBlbmRlZCB0by4gRGVmYXVsdCBpcyBuZXh0IHRvIHRoZSBkcmFnZ2VkIGVsZW1lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdob3N0RWxlbWVudEFwcGVuZFRvOiBIVE1MRWxlbWVudDtcblxuICAvKipcbiAgICogQW4gbmctdGVtcGxhdGUgdG8gYmUgaW5zZXJ0ZWQgaW50byB0aGUgcGFyZW50IGVsZW1lbnQgb2YgdGhlIGdob3N0IGVsZW1lbnQuIEl0IHdpbGwgb3ZlcndyaXRlIGFueSBjaGlsZCBub2Rlcy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdob3N0RWxlbWVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBjYW4gYmUgZHJhZ2dlZCBhbG9uZyBvbmUgYXhpcyBhbmQgaGFzIHRoZSBtb3VzZSBvciBwb2ludGVyIGRldmljZSBwcmVzc2VkIG9uIGl0XG4gICAqL1xuICBAT3V0cHV0KClcbiAgZHJhZ1BvaW50ZXJEb3duID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnUG9pbnRlckRvd25FdmVudD4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGVsZW1lbnQgaGFzIHN0YXJ0ZWQgdG8gYmUgZHJhZ2dlZC5cbiAgICogT25seSBjYWxsZWQgYWZ0ZXIgYXQgbGVhc3Qgb25lIG1vdXNlIG9yIHRvdWNoIG1vdmUgZXZlbnQuXG4gICAqIElmIHlvdSBjYWxsICRldmVudC5jYW5jZWxEcmFnJC5lbWl0KCkgaXQgd2lsbCBjYW5jZWwgdGhlIGN1cnJlbnQgZHJhZ1xuICAgKi9cbiAgQE91dHB1dCgpXG4gIGRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ1N0YXJ0RXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCBhZnRlciB0aGUgZ2hvc3QgZWxlbWVudCBoYXMgYmVlbiBjcmVhdGVkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZ2hvc3RFbGVtZW50Q3JlYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGVsZW1lbnQgaXMgYmVpbmcgZHJhZ2dlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGRyYWdnaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnTW92ZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaXMgZHJhZ2dlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdFbmRFdmVudD4oKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcG9pbnRlckRvd24kID0gbmV3IFN1YmplY3Q8UG9pbnRlckV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwb2ludGVyTW92ZSQgPSBuZXcgU3ViamVjdDxQb2ludGVyRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHBvaW50ZXJVcCQgPSBuZXcgU3ViamVjdDxQb2ludGVyRXZlbnQ+KCk7XG5cbiAgcHJpdmF0ZSBldmVudExpc3RlbmVyU3Vic2NyaXB0aW9uczoge1xuICAgIG1vdXNlbW92ZT86ICgpID0+IHZvaWQ7XG4gICAgbW91c2Vkb3duPzogKCkgPT4gdm9pZDtcbiAgICBtb3VzZXVwPzogKCkgPT4gdm9pZDtcbiAgICBtb3VzZWVudGVyPzogKCkgPT4gdm9pZDtcbiAgICBtb3VzZWxlYXZlPzogKCkgPT4gdm9pZDtcbiAgICB0b3VjaHN0YXJ0PzogKCkgPT4gdm9pZDtcbiAgICB0b3VjaG1vdmU/OiAoKSA9PiB2b2lkO1xuICAgIHRvdWNoZW5kPzogKCkgPT4gdm9pZDtcbiAgICB0b3VjaGNhbmNlbD86ICgpID0+IHZvaWQ7XG4gIH0gPSB7fTtcblxuICBwcml2YXRlIGdob3N0RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGRyYWdnYWJsZUhlbHBlcjogRHJhZ2dhYmxlSGVscGVyLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgc2Nyb2xsQ29udGFpbmVyOiBEcmFnZ2FibGVTY3JvbGxDb250YWluZXJEaXJlY3RpdmUsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55XG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIGNvbnN0IHBvaW50ZXJEcmFnZ2VkJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5wb2ludGVyRG93biQucGlwZShcbiAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmNhbkRyYWcoKSksXG4gICAgICBtZXJnZU1hcCgocG9pbnRlckRvd25FdmVudDogUG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIC8vIGZpeCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL21hdHRsZXdpczkyL2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZS9pc3N1ZXMvNjFcbiAgICAgICAgLy8gc3RvcCBtb3VzZSBldmVudHMgcHJvcGFnYXRpbmcgdXAgdGhlIGNoYWluXG4gICAgICAgIGlmIChwb2ludGVyRG93bkV2ZW50LmV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgIHBvaW50ZXJEb3duRXZlbnQuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYWNrIHRvIHByZXZlbnQgdGV4dCBnZXR0aW5nIHNlbGVjdGVkIGluIHNhZmFyaSB3aGlsZSBkcmFnZ2luZ1xuICAgICAgICBjb25zdCBnbG9iYWxEcmFnU3R5bGU6IEhUTUxTdHlsZUVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3N0eWxlJ1xuICAgICAgICApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShnbG9iYWxEcmFnU3R5bGUsICd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgZ2xvYmFsRHJhZ1N0eWxlLFxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dChgXG4gICAgICAgICAgYm9keSAqIHtcbiAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGApXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChnbG9iYWxEcmFnU3R5bGUpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0U2Nyb2xsUG9zaXRpb24gPSB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCk7XG5cbiAgICAgICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyU2Nyb2xsJCA9IG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcbiAgICAgICAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSB0aGlzLnNjcm9sbENvbnRhaW5lclxuICAgICAgICAgICAgPyB0aGlzLnNjcm9sbENvbnRhaW5lci5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgICAgIDogJ3dpbmRvdyc7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIubGlzdGVuKHNjcm9sbENvbnRhaW5lciwgJ3Njcm9sbCcsIGUgPT5cbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZSlcbiAgICAgICAgICApO1xuICAgICAgICB9KS5waXBlKFxuICAgICAgICAgIHN0YXJ0V2l0aChzdGFydFNjcm9sbFBvc2l0aW9uKSxcbiAgICAgICAgICBtYXAoKCkgPT4gdGhpcy5nZXRTY3JvbGxQb3NpdGlvbigpKVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnREcmFnJCA9IG5ldyBTdWJqZWN0PEN1cnJlbnREcmFnRGF0YT4oKTtcbiAgICAgICAgY29uc3QgY2FuY2VsRHJhZyQgPSBuZXcgUmVwbGF5U3ViamVjdDx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZHJhZ1BvaW50ZXJEb3duLm5leHQoeyB4OiAwLCB5OiAwIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkcmFnQ29tcGxldGUkID0gbWVyZ2UoXG4gICAgICAgICAgdGhpcy5wb2ludGVyVXAkLFxuICAgICAgICAgIHRoaXMucG9pbnRlckRvd24kLFxuICAgICAgICAgIGNhbmNlbERyYWckLFxuICAgICAgICAgIHRoaXMuZGVzdHJveSRcbiAgICAgICAgKS5waXBlKHNoYXJlKCkpO1xuXG4gICAgICAgIGNvbnN0IHBvaW50ZXJNb3ZlID0gY29tYmluZUxhdGVzdDxcbiAgICAgICAgICBQb2ludGVyRXZlbnQsXG4gICAgICAgICAgeyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH1cbiAgICAgICAgPih0aGlzLnBvaW50ZXJNb3ZlJCwgc2Nyb2xsQ29udGFpbmVyU2Nyb2xsJCkucGlwZShcbiAgICAgICAgICBtYXAoKFtwb2ludGVyTW92ZUV2ZW50LCBzY3JvbGxdKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBjdXJyZW50RHJhZyQsXG4gICAgICAgICAgICAgIHRyYW5zZm9ybVg6IHBvaW50ZXJNb3ZlRXZlbnQuY2xpZW50WCAtIHBvaW50ZXJEb3duRXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtWTogcG9pbnRlck1vdmVFdmVudC5jbGllbnRZIC0gcG9pbnRlckRvd25FdmVudC5jbGllbnRZLFxuICAgICAgICAgICAgICBjbGllbnRYOiBwb2ludGVyTW92ZUV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgIGNsaWVudFk6IHBvaW50ZXJNb3ZlRXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgICAgc2Nyb2xsTGVmdDogc2Nyb2xsLmxlZnQsXG4gICAgICAgICAgICAgIHNjcm9sbFRvcDogc2Nyb2xsLnRvcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtYXAobW92ZURhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ1NuYXBHcmlkLngpIHtcbiAgICAgICAgICAgICAgbW92ZURhdGEudHJhbnNmb3JtWCA9XG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChtb3ZlRGF0YS50cmFuc2Zvcm1YIC8gdGhpcy5kcmFnU25hcEdyaWQueCkgKlxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1NuYXBHcmlkLng7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRyYWdTbmFwR3JpZC55KSB7XG4gICAgICAgICAgICAgIG1vdmVEYXRhLnRyYW5zZm9ybVkgPVxuICAgICAgICAgICAgICAgIE1hdGgucm91bmQobW92ZURhdGEudHJhbnNmb3JtWSAvIHRoaXMuZHJhZ1NuYXBHcmlkLnkpICpcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdTbmFwR3JpZC55O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbW92ZURhdGE7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWFwKG1vdmVEYXRhID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnQXhpcy54KSB7XG4gICAgICAgICAgICAgIG1vdmVEYXRhLnRyYW5zZm9ybVggPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ0F4aXMueSkge1xuICAgICAgICAgICAgICBtb3ZlRGF0YS50cmFuc2Zvcm1ZID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1vdmVEYXRhO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1hcChtb3ZlRGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxYID0gbW92ZURhdGEuc2Nyb2xsTGVmdCAtIHN0YXJ0U2Nyb2xsUG9zaXRpb24ubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFkgPSBtb3ZlRGF0YS5zY3JvbGxUb3AgLSBzdGFydFNjcm9sbFBvc2l0aW9uLnRvcDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLm1vdmVEYXRhLFxuICAgICAgICAgICAgICB4OiBtb3ZlRGF0YS50cmFuc2Zvcm1YICsgc2Nyb2xsWCxcbiAgICAgICAgICAgICAgeTogbW92ZURhdGEudHJhbnNmb3JtWSArIHNjcm9sbFlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlsdGVyKFxuICAgICAgICAgICAgKHsgeCwgeSB9KSA9PiAhdGhpcy52YWxpZGF0ZURyYWcgfHwgdGhpcy52YWxpZGF0ZURyYWcoeyB4LCB5IH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0YWtlVW50aWwoZHJhZ0NvbXBsZXRlJCksXG4gICAgICAgICAgc2hhcmUoKVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGRyYWdTdGFydGVkJCA9IHBvaW50ZXJNb3ZlLnBpcGUoXG4gICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICBzaGFyZSgpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGRyYWdFbmRlZCQgPSBwb2ludGVyTW92ZS5waXBlKFxuICAgICAgICAgIHRha2VMYXN0KDEpLFxuICAgICAgICAgIHNoYXJlKClcbiAgICAgICAgKTtcblxuICAgICAgICBkcmFnU3RhcnRlZCQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0Lm5leHQoeyBjYW5jZWxEcmFnJCB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIHRoaXMuZHJhZ0FjdGl2ZUNsYXNzXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmICh0aGlzLmdob3N0RHJhZ0VuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xvbmVOb2RlKFxuICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNob3dPcmlnaW5hbEVsZW1lbnRXaGlsZURyYWdnaW5nKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknLFxuICAgICAgICAgICAgICAgICdoaWRkZW4nXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmdob3N0RWxlbWVudEFwcGVuZFRvKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2hvc3RFbGVtZW50QXBwZW5kVG8uYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZSEuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgIGNsb25lLFxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50Lm5leHRTaWJsaW5nXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ2hvc3RFbGVtZW50ID0gY2xvbmU7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0RWxlbWVudFN0eWxlcyhjbG9uZSwge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgdG9wOiBgJHtyZWN0LnRvcH1weGAsXG4gICAgICAgICAgICAgIGxlZnQ6IGAke3JlY3QubGVmdH1weGAsXG4gICAgICAgICAgICAgIHdpZHRoOiBgJHtyZWN0LndpZHRofXB4YCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtyZWN0LmhlaWdodH1weGAsXG4gICAgICAgICAgICAgIGN1cnNvcjogdGhpcy5kcmFnQ3Vyc29yLFxuICAgICAgICAgICAgICBtYXJnaW46ICcwJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmdob3N0RWxlbWVudFRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZpZXdSZWYgPSB0aGlzLnZjci5jcmVhdGVFbWJlZGRlZFZpZXcoXG4gICAgICAgICAgICAgICAgdGhpcy5naG9zdEVsZW1lbnRUZW1wbGF0ZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjbG9uZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgdmlld1JlZi5yb290Tm9kZXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKG5vZGUgPT4gbm9kZSBpbnN0YW5jZW9mIE5vZGUpXG4gICAgICAgICAgICAgICAgLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgICBjbG9uZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgZHJhZ0VuZGVkJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudmNyLnJlbW92ZSh0aGlzLnZjci5pbmRleE9mKHZpZXdSZWYpKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmdob3N0RWxlbWVudENyZWF0ZWQuZW1pdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRyYWdFbmRlZCQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgY2xvbmUucGFyZW50RWxlbWVudCEucmVtb3ZlQ2hpbGQoY2xvbmUpO1xuICAgICAgICAgICAgICB0aGlzLmdob3N0RWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknLFxuICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmRyYWdnYWJsZUhlbHBlci5jdXJyZW50RHJhZy5uZXh0KGN1cnJlbnREcmFnJCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRyYWdFbmRlZCRcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIG1lcmdlTWFwKGRyYWdFbmREYXRhID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZHJhZ0VuZERhdGEkID0gY2FuY2VsRHJhZyQucGlwZShcbiAgICAgICAgICAgICAgICBjb3VudCgpLFxuICAgICAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICAgICAgbWFwKGNhbGxlZENvdW50ID0+ICh7XG4gICAgICAgICAgICAgICAgICAuLi5kcmFnRW5kRGF0YSxcbiAgICAgICAgICAgICAgICAgIGRyYWdDYW5jZWxsZWQ6IGNhbGxlZENvdW50ID4gMFxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjYW5jZWxEcmFnJC5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICByZXR1cm4gZHJhZ0VuZERhdGEkO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgICAgLnN1YnNjcmliZSgoeyB4LCB5LCBkcmFnQ2FuY2VsbGVkIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRyYWdFbmQubmV4dCh7IHgsIHksIGRyYWdDYW5jZWxsZWQgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoXG4gICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgICB0aGlzLmRyYWdBY3RpdmVDbGFzc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGN1cnJlbnREcmFnJC5jb21wbGV0ZSgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIG1lcmdlKGRyYWdDb21wbGV0ZSQsIGRyYWdFbmRlZCQpXG4gICAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZChnbG9iYWxEcmFnU3R5bGUpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwb2ludGVyTW92ZTtcbiAgICAgIH0pLFxuICAgICAgc2hhcmUoKVxuICAgICk7XG5cbiAgICBtZXJnZShcbiAgICAgIHBvaW50ZXJEcmFnZ2VkJC5waXBlKFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBtYXAodmFsdWUgPT4gWywgdmFsdWVdKVxuICAgICAgKSxcbiAgICAgIHBvaW50ZXJEcmFnZ2VkJC5waXBlKHBhaXJ3aXNlKCkpXG4gICAgKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoW3ByZXZpb3VzLCBuZXh0XSkgPT4ge1xuICAgICAgICAgIGlmICghcHJldmlvdXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcHJldmlvdXMueCAhPT0gbmV4dC54IHx8IHByZXZpb3VzLnkgIT09IG5leHQueTtcbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgoW3ByZXZpb3VzLCBuZXh0XSkgPT4gbmV4dClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICh7IHgsIHksIGN1cnJlbnREcmFnJCwgY2xpZW50WCwgY2xpZW50WSwgdHJhbnNmb3JtWCwgdHJhbnNmb3JtWSB9KSA9PiB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nLm5leHQoeyB4LCB5IH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICh0aGlzLmdob3N0RWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3RyYW5zZm9ybVh9cHgsICR7dHJhbnNmb3JtWX1weClgO1xuICAgICAgICAgICAgdGhpcy5zZXRFbGVtZW50U3R5bGVzKHRoaXMuZ2hvc3RFbGVtZW50LCB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybSxcbiAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogdHJhbnNmb3JtLFxuICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHRyYW5zZm9ybSxcbiAgICAgICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogdHJhbnNmb3JtLFxuICAgICAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogdHJhbnNmb3JtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudERyYWckLm5leHQoe1xuICAgICAgICAgICAgY2xpZW50WCxcbiAgICAgICAgICAgIGNsaWVudFksXG4gICAgICAgICAgICBkcm9wRGF0YTogdGhpcy5kcm9wRGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmRyYWdBeGlzKSB7XG4gICAgICB0aGlzLmNoZWNrRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLnBvaW50ZXJEb3duJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMucG9pbnRlck1vdmUkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5wb2ludGVyVXAkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgY29uc3QgY2FuRHJhZzogYm9vbGVhbiA9IHRoaXMuY2FuRHJhZygpO1xuICAgIGNvbnN0IGhhc0V2ZW50TGlzdGVuZXJzOiBib29sZWFuID1cbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMpLmxlbmd0aCA+IDA7XG5cbiAgICBpZiAoY2FuRHJhZyAmJiAhaGFzRXZlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMubW91c2Vkb3duID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ21vdXNlZG93bicsXG4gICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZXVwID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAnbW91c2V1cCcsXG4gICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMudG91Y2hzdGFydCA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaFN0YXJ0KGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaGVuZCA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICdkb2N1bWVudCcsXG4gICAgICAgICAgJ3RvdWNoZW5kJyxcbiAgICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaEVuZChldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMudG91Y2hjYW5jZWwgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICd0b3VjaGNhbmNlbCcsXG4gICAgICAgICAgKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hFbmQoZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLm1vdXNlZW50ZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAnbW91c2VlbnRlcicsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlRW50ZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZWxlYXZlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ21vdXNlbGVhdmUnLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZUxlYXZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghY2FuRHJhZyAmJiBoYXNFdmVudExpc3RlbmVycykge1xuICAgICAgdGhpcy51bnN1YnNjcmliZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZW1vdmUpIHtcbiAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMubW91c2Vtb3ZlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICdkb2N1bWVudCcsXG4gICAgICAgICdtb3VzZW1vdmUnLFxuICAgICAgICAobW91c2VNb3ZlRXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLnBvaW50ZXJNb3ZlJC5uZXh0KHtcbiAgICAgICAgICAgIGV2ZW50OiBtb3VzZU1vdmVFdmVudCxcbiAgICAgICAgICAgIGNsaWVudFg6IG1vdXNlTW92ZUV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICBjbGllbnRZOiBtb3VzZU1vdmVFdmVudC5jbGllbnRZXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMucG9pbnRlckRvd24kLm5leHQoe1xuICAgICAgZXZlbnQsXG4gICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZW1vdmUpIHtcbiAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMubW91c2Vtb3ZlKCk7XG4gICAgICBkZWxldGUgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZW1vdmU7XG4gICAgfVxuICAgIHRoaXMucG9pbnRlclVwJC5uZXh0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFlcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25Ub3VjaFN0YXJ0KGV2ZW50OiBUb3VjaEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLnRvdWNobW92ZSkge1xuICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaG1vdmUgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgJ3RvdWNobW92ZScsXG4gICAgICAgICh0b3VjaE1vdmVFdmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMucG9pbnRlck1vdmUkLm5leHQoe1xuICAgICAgICAgICAgZXZlbnQ6IHRvdWNoTW92ZUV2ZW50LFxuICAgICAgICAgICAgY2xpZW50WDogdG91Y2hNb3ZlRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICAgICAgY2xpZW50WTogdG91Y2hNb3ZlRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMucG9pbnRlckRvd24kLm5leHQoe1xuICAgICAgZXZlbnQsXG4gICAgICBjbGllbnRYOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICBjbGllbnRZOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFlcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25Ub3VjaEVuZChldmVudDogVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLnRvdWNobW92ZSkge1xuICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaG1vdmUoKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLnRvdWNobW92ZTtcbiAgICB9XG4gICAgdGhpcy5wb2ludGVyVXAkLm5leHQoe1xuICAgICAgZXZlbnQsXG4gICAgICBjbGllbnRYOiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgY2xpZW50WTogZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1vdXNlRW50ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDdXJzb3IodGhpcy5kcmFnQ3Vyc29yKTtcbiAgfVxuXG4gIHByaXZhdGUgb25Nb3VzZUxlYXZlKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q3Vyc29yKCcnKTtcbiAgfVxuXG4gIHByaXZhdGUgY2FuRHJhZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnQXhpcy54IHx8IHRoaXMuZHJhZ0F4aXMueTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q3Vyc29yKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnY3Vyc29yJywgdmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZUV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMpLmZvckVhY2godHlwZSA9PiB7XG4gICAgICAodGhpcyBhcyBhbnkpLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zW3R5cGVdKCk7XG4gICAgICBkZWxldGUgKHRoaXMgYXMgYW55KS5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9uc1t0eXBlXTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RWxlbWVudFN0eWxlcyhcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBzdHlsZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgKSB7XG4gICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsZW1lbnQsIGtleSwgc3R5bGVzW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTY3JvbGxQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogdGhpcy5zY3JvbGxDb250YWluZXIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCxcbiAgICAgICAgbGVmdDogdGhpcy5zY3JvbGxDb250YWluZXIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnRcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICAgIGxlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgT25Jbml0LFxuICBFbGVtZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBOZ1pvbmUsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIE9wdGlvbmFsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgcGFpcndpc2UsIGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlSGVscGVyIH0gZnJvbSAnLi9kcmFnZ2FibGUtaGVscGVyLnByb3ZpZGVyJztcbmltcG9ydCB7IERyYWdnYWJsZVNjcm9sbENvbnRhaW5lckRpcmVjdGl2ZSB9IGZyb20gJy4vZHJhZ2dhYmxlLXNjcm9sbC1jb250YWluZXIuZGlyZWN0aXZlJztcblxuZnVuY3Rpb24gaXNDb29yZGluYXRlV2l0aGluUmVjdGFuZ2xlKFxuICBjbGllbnRYOiBudW1iZXIsXG4gIGNsaWVudFk6IG51bWJlcixcbiAgcmVjdDogQ2xpZW50UmVjdFxuKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgY2xpZW50WCA+PSByZWN0LmxlZnQgJiZcbiAgICBjbGllbnRYIDw9IHJlY3QucmlnaHQgJiZcbiAgICBjbGllbnRZID49IHJlY3QudG9wICYmXG4gICAgY2xpZW50WSA8PSByZWN0LmJvdHRvbVxuICApO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3BFdmVudDxUID0gYW55PiB7XG4gIGRyb3BEYXRhOiBUO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXdsRHJvcHBhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgRHJvcHBhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogQWRkZWQgdG8gdGhlIGVsZW1lbnQgd2hlbiBhbiBlbGVtZW50IGlzIGRyYWdnZWQgb3ZlciBpdFxuICAgKi9cbiAgQElucHV0KClcbiAgZHJhZ092ZXJDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBZGRlZCB0byB0aGUgZWxlbWVudCBhbnkgdGltZSBhIGRyYWdnYWJsZSBlbGVtZW50IGlzIGJlaW5nIGRyYWdnZWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRyYWdBY3RpdmVDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIGRyYWdnYWJsZSBlbGVtZW50IHN0YXJ0cyBvdmVybGFwcGluZyB0aGUgZWxlbWVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGRyYWdFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIGRyYWdnYWJsZSBlbGVtZW50IHN0b3BzIG92ZXJsYXBwaW5nIHRoZSBlbGVtZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgZHJhZ0xlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgZHJhZ2dhYmxlIGVsZW1lbnQgaXMgbW92ZWQgb3ZlciB0aGUgZWxlbWVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGRyYWdPdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgZHJhZ2dhYmxlIGVsZW1lbnQgaXMgZHJvcHBlZCBvbiB0aGlzIGVsZW1lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBkcm9wID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wRXZlbnQ+KCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8tb3V0cHV0LW5hbWVkLWFmdGVyLXN0YW5kYXJkLWV2ZW50XG5cbiAgY3VycmVudERyYWdTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgZHJhZ2dhYmxlSGVscGVyOiBEcmFnZ2FibGVIZWxwZXIsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgc2Nyb2xsQ29udGFpbmVyOiBEcmFnZ2FibGVTY3JvbGxDb250YWluZXJEaXJlY3RpdmVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY3VycmVudERyYWdTdWJzY3JpcHRpb24gPSB0aGlzLmRyYWdnYWJsZUhlbHBlci5jdXJyZW50RHJhZy5zdWJzY3JpYmUoXG4gICAgICBkcmFnJCA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgdGhpcy5kcmFnQWN0aXZlQ2xhc3NcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZHJvcHBhYmxlRWxlbWVudDoge1xuICAgICAgICAgIHJlY3Q/OiBDbGllbnRSZWN0O1xuICAgICAgICAgIHVwZGF0ZUNhY2hlOiBib29sZWFuO1xuICAgICAgICAgIHNjcm9sbENvbnRhaW5lclJlY3Q/OiBDbGllbnRSZWN0O1xuICAgICAgICB9ID0ge1xuICAgICAgICAgIHVwZGF0ZUNhY2hlOiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZGVyZWdpc3RlclNjcm9sbExpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgdGhpcy5zY3JvbGxDb250YWluZXJcbiAgICAgICAgICAgID8gdGhpcy5zY3JvbGxDb250YWluZXIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XG4gICAgICAgICAgICA6ICd3aW5kb3cnLFxuICAgICAgICAgICdzY3JvbGwnLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGRyb3BwYWJsZUVsZW1lbnQudXBkYXRlQ2FjaGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgY3VycmVudERyYWdEcm9wRGF0YTogYW55O1xuICAgICAgICBjb25zdCBvdmVybGFwcyQgPSBkcmFnJC5waXBlKFxuICAgICAgICAgIG1hcCgoeyBjbGllbnRYLCBjbGllbnRZLCBkcm9wRGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50RHJhZ0Ryb3BEYXRhID0gZHJvcERhdGE7XG4gICAgICAgICAgICBpZiAoZHJvcHBhYmxlRWxlbWVudC51cGRhdGVDYWNoZSkge1xuICAgICAgICAgICAgICBkcm9wcGFibGVFbGVtZW50LnJlY3QgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgZHJvcHBhYmxlRWxlbWVudC5zY3JvbGxDb250YWluZXJSZWN0ID0gdGhpcy5zY3JvbGxDb250YWluZXIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRyb3BwYWJsZUVsZW1lbnQudXBkYXRlQ2FjaGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGlzV2l0aGluRWxlbWVudCA9IGlzQ29vcmRpbmF0ZVdpdGhpblJlY3RhbmdsZShcbiAgICAgICAgICAgICAgY2xpZW50WCxcbiAgICAgICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICAgICAgZHJvcHBhYmxlRWxlbWVudC5yZWN0IGFzIENsaWVudFJlY3RcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoZHJvcHBhYmxlRWxlbWVudC5zY3JvbGxDb250YWluZXJSZWN0KSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgaXNXaXRoaW5FbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgaXNDb29yZGluYXRlV2l0aGluUmVjdGFuZ2xlKFxuICAgICAgICAgICAgICAgICAgY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgIGNsaWVudFksXG4gICAgICAgICAgICAgICAgICBkcm9wcGFibGVFbGVtZW50LnNjcm9sbENvbnRhaW5lclJlY3QgYXMgQ2xpZW50UmVjdFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBpc1dpdGhpbkVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBvdmVybGFwc0NoYW5nZWQkID0gb3ZlcmxhcHMkLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG5cbiAgICAgICAgbGV0IGRyYWdPdmVyQWN0aXZlOiBib29sZWFuOyAvLyBUT0RPIC0gc2VlIGlmIHRoZXJlJ3MgYSB3YXkgb2YgZG9pbmcgdGhpcyB2aWEgcnhqc1xuXG4gICAgICAgIG92ZXJsYXBzQ2hhbmdlZCRcbiAgICAgICAgICAucGlwZShmaWx0ZXIob3ZlcmxhcHNOb3cgPT4gb3ZlcmxhcHNOb3cpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgZHJhZ092ZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAgIHRoaXMuZHJhZ092ZXJDbGFzc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRyYWdFbnRlci5uZXh0KHtcbiAgICAgICAgICAgICAgICBkcm9wRGF0YTogY3VycmVudERyYWdEcm9wRGF0YVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIG92ZXJsYXBzJC5waXBlKGZpbHRlcihvdmVybGFwc05vdyA9PiBvdmVybGFwc05vdykpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRyYWdPdmVyLm5leHQoe1xuICAgICAgICAgICAgICBkcm9wRGF0YTogY3VycmVudERyYWdEcm9wRGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG92ZXJsYXBzQ2hhbmdlZCRcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIHBhaXJ3aXNlKCksXG4gICAgICAgICAgICBmaWx0ZXIoKFtkaWRPdmVybGFwLCBvdmVybGFwc05vd10pID0+IGRpZE92ZXJsYXAgJiYgIW92ZXJsYXBzTm93KVxuICAgICAgICAgIClcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGRyYWdPdmVyQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKFxuICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICAgdGhpcy5kcmFnT3ZlckNsYXNzXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZHJhZ0xlYXZlLm5leHQoe1xuICAgICAgICAgICAgICAgIGRyb3BEYXRhOiBjdXJyZW50RHJhZ0Ryb3BEYXRhXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZHJhZyQuc3Vic2NyaWJlKHtcbiAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgZGVyZWdpc3RlclNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKFxuICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICAgdGhpcy5kcmFnQWN0aXZlQ2xhc3NcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoZHJhZ092ZXJBY3RpdmUpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdPdmVyQ2xhc3NcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wLm5leHQoe1xuICAgICAgICAgICAgICAgICAgZHJvcERhdGE6IGN1cnJlbnREcmFnRHJvcERhdGFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudERyYWdTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuY3VycmVudERyYWdTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFnZ2FibGVEaXJlY3RpdmUgfSBmcm9tICcuL2RyYWdnYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRHJvcHBhYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wcGFibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IERyYWdnYWJsZVNjcm9sbENvbnRhaW5lckRpcmVjdGl2ZSB9IGZyb20gJy4vZHJhZ2dhYmxlLXNjcm9sbC1jb250YWluZXIuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRHJhZ2dhYmxlRGlyZWN0aXZlLFxuICAgIERyb3BwYWJsZURpcmVjdGl2ZSxcbiAgICBEcmFnZ2FibGVTY3JvbGxDb250YWluZXJEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIERyYWdnYWJsZURpcmVjdGl2ZSxcbiAgICBEcm9wcGFibGVEaXJlY3RpdmUsXG4gICAgRHJhZ2dhYmxlU2Nyb2xsQ29udGFpbmVyRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRHJhZ0FuZERyb3BNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OzJCQWFnQixJQUFJLE9BQU8sRUFBNEI7OztnQkFKdEQsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OzBCQVhEOzs7Ozs7O0FDQUE7SUFNRSwyQ0FBbUIsVUFBbUM7UUFBbkMsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7S0FBSTs7Z0JBSjNELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO2lCQUMxQzs7OztnQkFKbUIsVUFBVTs7NENBQTlCOzs7Ozs7Ozs7OztJQ3VNRSw0QkFDVSxTQUNBLFVBQ0EsaUJBQ0EsTUFDQSxLQUNZLGVBQWtELEVBQzVDLFFBQWE7UUFOL0IsWUFBTyxHQUFQLE9BQU87UUFDUCxhQUFRLEdBQVIsUUFBUTtRQUNSLG9CQUFlLEdBQWYsZUFBZTtRQUNmLFNBQUksR0FBSixJQUFJO1FBQ0osUUFBRyxHQUFILEdBQUc7UUFDUyxvQkFBZSxHQUFmLGVBQWUsQ0FBbUM7UUFDNUMsYUFBUSxHQUFSLFFBQVEsQ0FBSzs7Ozt3QkEzSHBC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

/***/ }),

/***/ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js ***!
  \***********************************************************************************/
/*! exports provided: ResizableDirective, ResizeHandleDirective, ResizableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizableDirective", function() { return ResizableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeHandleDirective", function() { return ResizeHandleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizableModule", function() { return ResizableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} value1
 * @param {?} value2
 * @param {?=} precision
 * @return {?}
 */
function isNumberCloseTo(value1, value2, precision) {
    if (precision === void 0) { precision = 3; }
    /** @type {?} */
    var diff = Math.abs(value1 - value2);
    return diff < precision;
}
/**
 * @param {?} startingRect
 * @param {?} edges
 * @param {?} clientX
 * @param {?} clientY
 * @return {?}
 */
function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
    /** @type {?} */
    var newBoundingRect = {
        top: startingRect.top,
        bottom: startingRect.bottom,
        left: startingRect.left,
        right: startingRect.right
    };
    if (edges.top) {
        newBoundingRect.top += clientY;
    }
    if (edges.bottom) {
        newBoundingRect.bottom += clientY;
    }
    if (edges.left) {
        newBoundingRect.left += clientX;
    }
    if (edges.right) {
        newBoundingRect.right += clientX;
    }
    newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
    newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
    return newBoundingRect;
}
/**
 * @param {?} element
 * @param {?} ghostElementPositioning
 * @return {?}
 */
function getElementRect(element, ghostElementPositioning) {
    /** @type {?} */
    var translateX = 0;
    /** @type {?} */
    var translateY = 0;
    /** @type {?} */
    var style = element.nativeElement.style;
    /** @type {?} */
    var transformProperties = [
        'transform',
        '-ms-transform',
        '-moz-transform',
        '-o-transform'
    ];
    /** @type {?} */
    var transform = transformProperties
        .map(function (property) { return style[property]; })
        .find(function (value) { return !!value; });
    if (transform && transform.includes('translate')) {
        translateX = transform.replace(/.*translate\((.*)px, (.*)px\).*/, '$1');
        translateY = transform.replace(/.*translate\((.*)px, (.*)px\).*/, '$2');
    }
    if (ghostElementPositioning === 'absolute') {
        return {
            height: element.nativeElement.offsetHeight,
            width: element.nativeElement.offsetWidth,
            top: element.nativeElement.offsetTop - translateY,
            bottom: element.nativeElement.offsetHeight +
                element.nativeElement.offsetTop -
                translateY,
            left: element.nativeElement.offsetLeft - translateX,
            right: element.nativeElement.offsetWidth +
                element.nativeElement.offsetLeft -
                translateX
        };
    }
    else {
        /** @type {?} */
        var boundingRect = element.nativeElement.getBoundingClientRect();
        return {
            height: boundingRect.height,
            width: boundingRect.width,
            top: boundingRect.top - translateY,
            bottom: boundingRect.bottom - translateY,
            left: boundingRect.left - translateX,
            right: boundingRect.right - translateX,
            scrollTop: element.nativeElement.scrollTop,
            scrollLeft: element.nativeElement.scrollLeft
        };
    }
}
/**
 * @param {?} __0
 * @return {?}
 */
function isWithinBoundingY(_a) {
    var clientY = _a.clientY, rect = _a.rect;
    return clientY >= rect.top && clientY <= rect.bottom;
}
/**
 * @param {?} __0
 * @return {?}
 */
function isWithinBoundingX(_a) {
    var clientX = _a.clientX, rect = _a.rect;
    return clientX >= rect.left && clientX <= rect.right;
}
/**
 * @param {?} __0
 * @return {?}
 */
function getResizeEdges(_a) {
    var clientX = _a.clientX, clientY = _a.clientY, elm = _a.elm, allowedEdges = _a.allowedEdges, cursorPrecision = _a.cursorPrecision;
    /** @type {?} */
    var elmPosition = elm.nativeElement.getBoundingClientRect();
    /** @type {?} */
    var edges = {};
    if (allowedEdges.left &&
        isNumberCloseTo(clientX, elmPosition.left, cursorPrecision) &&
        isWithinBoundingY({ clientY: clientY, rect: elmPosition })) {
        edges.left = true;
    }
    if (allowedEdges.right &&
        isNumberCloseTo(clientX, elmPosition.right, cursorPrecision) &&
        isWithinBoundingY({ clientY: clientY, rect: elmPosition })) {
        edges.right = true;
    }
    if (allowedEdges.top &&
        isNumberCloseTo(clientY, elmPosition.top, cursorPrecision) &&
        isWithinBoundingX({ clientX: clientX, rect: elmPosition })) {
        edges.top = true;
    }
    if (allowedEdges.bottom &&
        isNumberCloseTo(clientY, elmPosition.bottom, cursorPrecision) &&
        isWithinBoundingX({ clientX: clientX, rect: elmPosition })) {
        edges.bottom = true;
    }
    return edges;
}
/** @type {?} */
var DEFAULT_RESIZE_CURSORS = Object.freeze({
    topLeft: 'nw-resize',
    topRight: 'ne-resize',
    bottomLeft: 'sw-resize',
    bottomRight: 'se-resize',
    leftOrRight: 'col-resize',
    topOrBottom: 'row-resize'
});
/**
 * @param {?} edges
 * @param {?} cursors
 * @return {?}
 */
function getResizeCursor(edges, cursors) {
    if (edges.left && edges.top) {
        return cursors.topLeft;
    }
    else if (edges.right && edges.top) {
        return cursors.topRight;
    }
    else if (edges.left && edges.bottom) {
        return cursors.bottomLeft;
    }
    else if (edges.right && edges.bottom) {
        return cursors.bottomRight;
    }
    else if (edges.left || edges.right) {
        return cursors.leftOrRight;
    }
    else if (edges.top || edges.bottom) {
        return cursors.topOrBottom;
    }
    else {
        return '';
    }
}
/**
 * @param {?} __0
 * @return {?}
 */
function getEdgesDiff(_a) {
    var edges = _a.edges, initialRectangle = _a.initialRectangle, newRectangle = _a.newRectangle;
    /** @type {?} */
    var edgesDiff = {};
    Object.keys(edges).forEach(function (edge) {
        edgesDiff[edge] = (newRectangle[edge] || 0) - (initialRectangle[edge] || 0);
    });
    return edgesDiff;
}
/** @type {?} */
var RESIZE_ACTIVE_CLASS = 'resize-active';
/** @type {?} */
var RESIZE_LEFT_HOVER_CLASS = 'resize-left-hover';
/** @type {?} */
var RESIZE_RIGHT_HOVER_CLASS = 'resize-right-hover';
/** @type {?} */
var RESIZE_TOP_HOVER_CLASS = 'resize-top-hover';
/** @type {?} */
var RESIZE_BOTTOM_HOVER_CLASS = 'resize-bottom-hover';
/** @type {?} */
var RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
/** @type {?} */
var MOUSE_MOVE_THROTTLE_MS = 50;
/**
 * Place this on an element to make it resizable. For example:
 *
 * ```html
 * <div
 *   mwlResizable
 *   [resizeEdges]="{bottom: true, right: true, top: true, left: true}"
 *   [enableGhostResize]="true">
 * </div>
 * ```
 */
var ResizableDirective = /** @class */ (function () {
    /**
     * @hidden
     */
    function ResizableDirective(renderer, elm, zone) {
        this.renderer = renderer;
        this.elm = elm;
        this.zone = zone;
        /**
         * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
         */
        this.resizeEdges = {};
        /**
         * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
         */
        this.enableGhostResize = false;
        /**
         * A snap grid that resize events will be locked to.
         *
         * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
         */
        this.resizeSnapGrid = {};
        /**
         * The mouse cursors that will be set on the resize edges
         */
        this.resizeCursors = DEFAULT_RESIZE_CURSORS;
        /**
         * Mouse over thickness to active cursor.
         */
        this.resizeCursorPrecision = 3;
        /**
         * Define the positioning of the ghost element (can be fixed or absolute)
         */
        this.ghostElementPositioning = 'fixed';
        /**
         * Allow elements to be resized to negative dimensions
         */
        this.allowNegativeResizes = false;
        /**
         * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
         */
        this.resizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
         */
        this.resizing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
         */
        this.resizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @hidden
         */
        this.mouseup = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * @hidden
         */
        this.mousedown = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * @hidden
         */
        this.mousemove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    ResizableDirective.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        // TODO - use some fancy Observable.merge's for this
        this.pointerEventListeners.pointerDown
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            _this.mousedown.next({ clientX: clientX, clientY: clientY });
        });
        this.pointerEventListeners.pointerMove
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY, event = _a.event;
            _this.mousemove.next({ clientX: clientX, clientY: clientY, event: event });
        });
        this.pointerEventListeners.pointerUp
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            _this.mouseup.next({ clientX: clientX, clientY: clientY });
        });
        /** @type {?} */
        var currentResize;
        /** @type {?} */
        var removeGhostElement = function () {
            if (currentResize && currentResize.clonedNode) {
                _this.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);
                _this.renderer.setStyle(_this.elm.nativeElement, 'visibility', 'inherit');
            }
        };
        /** @type {?} */
        var mouseMove = this.mousemove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        mouseMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return !!currentResize; })).subscribe(function (_a) {
            var event = _a.event;
            event.preventDefault();
        });
        mouseMove
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(MOUSE_MOVE_THROTTLE_MS))
            .subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            /** @type {?} */
            var resizeEdges = getResizeEdges({
                clientX: clientX,
                clientY: clientY,
                elm: _this.elm,
                allowedEdges: _this.resizeEdges,
                cursorPrecision: _this.resizeCursorPrecision
            });
            /** @type {?} */
            var resizeCursors = Object.assign({}, DEFAULT_RESIZE_CURSORS, _this.resizeCursors);
            if (currentResize) {
                /** @type {?} */
                var cursor = getResizeCursor(currentResize.edges, resizeCursors);
                _this.renderer.setStyle(document.body, 'cursor', cursor);
            }
            else {
                /** @type {?} */
                var cursor = getResizeCursor(resizeEdges, resizeCursors);
                _this.renderer.setStyle(_this.elm.nativeElement, 'cursor', cursor);
            }
            _this.setElementClass(_this.elm, RESIZE_ACTIVE_CLASS, !!currentResize);
            _this.setElementClass(_this.elm, RESIZE_LEFT_HOVER_CLASS, resizeEdges.left === true);
            _this.setElementClass(_this.elm, RESIZE_RIGHT_HOVER_CLASS, resizeEdges.right === true);
            _this.setElementClass(_this.elm, RESIZE_TOP_HOVER_CLASS, resizeEdges.top === true);
            _this.setElementClass(_this.elm, RESIZE_BOTTOM_HOVER_CLASS, resizeEdges.bottom === true);
        });
        /** @type {?} */
        var mousedrag = this.mousedown
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (startCoords) {
            /**
             * @param {?} moveCoords
             * @return {?}
             */
            function getDiff(moveCoords) {
                return {
                    clientX: moveCoords.clientX - startCoords.clientX,
                    clientY: moveCoords.clientY - startCoords.clientY
                };
            }
            /** @type {?} */
            var getSnapGrid = function () {
                /** @type {?} */
                var snapGrid = { x: 1, y: 1 };
                if (currentResize) {
                    if (_this.resizeSnapGrid.left && currentResize.edges.left) {
                        snapGrid.x = +_this.resizeSnapGrid.left;
                    }
                    else if (_this.resizeSnapGrid.right &&
                        currentResize.edges.right) {
                        snapGrid.x = +_this.resizeSnapGrid.right;
                    }
                    if (_this.resizeSnapGrid.top && currentResize.edges.top) {
                        snapGrid.y = +_this.resizeSnapGrid.top;
                    }
                    else if (_this.resizeSnapGrid.bottom &&
                        currentResize.edges.bottom) {
                        snapGrid.y = +_this.resizeSnapGrid.bottom;
                    }
                }
                return snapGrid;
            };
            /**
             * @param {?} coords
             * @param {?} snapGrid
             * @return {?}
             */
            function getGrid(coords, snapGrid) {
                return {
                    x: Math.ceil(coords.clientX / snapGrid.x),
                    y: Math.ceil(coords.clientY / snapGrid.y)
                };
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(mouseMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (coords) { return [, coords]; })), mouseMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])()))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), previousCoords = _b[0], newCoords = _b[1];
                return [
                    previousCoords ? getDiff(previousCoords) : previousCoords,
                    getDiff(newCoords)
                ];
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), previousCoords = _b[0], newCoords = _b[1];
                if (!previousCoords) {
                    return true;
                }
                /** @type {?} */
                var snapGrid = getSnapGrid();
                /** @type {?} */
                var previousGrid = getGrid(previousCoords, snapGrid);
                /** @type {?} */
                var newGrid = getGrid(newCoords, snapGrid);
                return (previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y);
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), newCoords = _b[1];
                /** @type {?} */
                var snapGrid = getSnapGrid();
                return {
                    clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
                    clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
                };
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(_this.mouseup, _this.mousedown)));
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return !!currentResize; }));
        mousedrag
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            return getNewBoundingRectangle(/** @type {?} */ ((currentResize)).startingRect, /** @type {?} */ ((currentResize)).edges, clientX, clientY);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (newBoundingRect) {
            return (_this.allowNegativeResizes ||
                !!(newBoundingRect.height &&
                    newBoundingRect.width &&
                    newBoundingRect.height > 0 &&
                    newBoundingRect.width > 0));
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (newBoundingRect) {
            return _this.validateResize
                ? _this.validateResize({
                    rectangle: newBoundingRect,
                    edges: getEdgesDiff({
                        edges: /** @type {?} */ ((currentResize)).edges,
                        initialRectangle: /** @type {?} */ ((currentResize)).startingRect,
                        newRectangle: newBoundingRect
                    })
                })
                : true;
        }))
            .subscribe(function (newBoundingRect) {
            if (currentResize && currentResize.clonedNode) {
                _this.renderer.setStyle(currentResize.clonedNode, 'height', newBoundingRect.height + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'width', newBoundingRect.width + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'top', newBoundingRect.top + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'left', newBoundingRect.left + "px");
            }
            _this.zone.run(function () {
                _this.resizing.emit({
                    edges: getEdgesDiff({
                        edges: /** @type {?} */ ((currentResize)).edges,
                        initialRectangle: /** @type {?} */ ((currentResize)).startingRect,
                        newRectangle: newBoundingRect
                    }),
                    rectangle: newBoundingRect
                });
            }); /** @type {?} */
            ((currentResize)).currentRect = newBoundingRect;
        });
        this.mousedown
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY, edges = _a.edges;
            return (edges ||
                getResizeEdges({
                    clientX: clientX,
                    clientY: clientY,
                    elm: _this.elm,
                    allowedEdges: _this.resizeEdges,
                    cursorPrecision: _this.resizeCursorPrecision
                }));
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (edges) {
            return Object.keys(edges).length > 0;
        }))
            .subscribe(function (edges) {
            if (currentResize) {
                removeGhostElement();
            }
            /** @type {?} */
            var startingRect = getElementRect(_this.elm, _this.ghostElementPositioning);
            currentResize = {
                edges: edges,
                startingRect: startingRect,
                currentRect: startingRect
            };
            if (_this.enableGhostResize) {
                currentResize.clonedNode = _this.elm.nativeElement.cloneNode(true);
                /** @type {?} */
                var resizeCursors = Object.assign({}, DEFAULT_RESIZE_CURSORS, _this.resizeCursors);
                _this.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);
                _this.renderer.setStyle(_this.elm.nativeElement, 'visibility', 'hidden');
                _this.renderer.setStyle(currentResize.clonedNode, 'position', _this.ghostElementPositioning);
                _this.renderer.setStyle(currentResize.clonedNode, 'left', currentResize.startingRect.left + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'top', currentResize.startingRect.top + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'height', currentResize.startingRect.height + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'width', currentResize.startingRect.width + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));
                _this.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS); /** @type {?} */
                ((currentResize.clonedNode)).scrollTop = /** @type {?} */ (currentResize.startingRect
                    .scrollTop); /** @type {?} */
                ((currentResize.clonedNode)).scrollLeft = /** @type {?} */ (currentResize.startingRect
                    .scrollLeft);
            }
            _this.zone.run(function () {
                _this.resizeStart.emit({
                    edges: getEdgesDiff({
                        edges: edges,
                        initialRectangle: startingRect,
                        newRectangle: startingRect
                    }),
                    rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
                });
            });
        });
        this.mouseup.subscribe(function () {
            if (currentResize) {
                _this.renderer.removeClass(_this.elm.nativeElement, RESIZE_ACTIVE_CLASS);
                _this.renderer.setStyle(document.body, 'cursor', '');
                _this.renderer.setStyle(_this.elm.nativeElement, 'cursor', '');
                _this.zone.run(function () {
                    _this.resizeEnd.emit({
                        edges: getEdgesDiff({
                            edges: /** @type {?} */ ((currentResize)).edges,
                            initialRectangle: /** @type {?} */ ((currentResize)).startingRect,
                            newRectangle: /** @type {?} */ ((currentResize)).currentRect
                        }),
                        rectangle: /** @type {?} */ ((currentResize)).currentRect
                    });
                });
                removeGhostElement();
                currentResize = null;
            }
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    ResizableDirective.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.mousedown.complete();
        this.mouseup.complete();
        this.mousemove.complete();
        this.destroy$.next();
    };
    /**
     * @param {?} elm
     * @param {?} name
     * @param {?} add
     * @return {?}
     */
    ResizableDirective.prototype.setElementClass = /**
     * @param {?} elm
     * @param {?} name
     * @param {?} add
     * @return {?}
     */
    function (elm, name, add) {
        if (add) {
            this.renderer.addClass(elm.nativeElement, name);
        }
        else {
            this.renderer.removeClass(elm.nativeElement, name);
        }
    };
    ResizableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[mwlResizable]'
                },] }
    ];
    /** @nocollapse */
    ResizableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    ResizableDirective.propDecorators = {
        validateResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        resizeEdges: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        enableGhostResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        resizeSnapGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        resizeCursors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        resizeCursorPrecision: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        ghostElementPositioning: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        allowNegativeResizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        resizeStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        resizing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        resizeEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return ResizableDirective;
}());
var PointerEventListeners = /** @class */ (function () {
    function PointerEventListeners(renderer, zone) {
        this.pointerDown = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            /** @type {?} */
            var unsubscribeMouseDown;
            /** @type {?} */
            var unsubscribeTouchStart;
            zone.runOutsideAngular(function () {
                unsubscribeMouseDown = renderer.listen('document', 'mousedown', function (event) {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event: event
                    });
                });
                unsubscribeTouchStart = renderer.listen('document', 'touchstart', function (event) {
                    observer.next({
                        clientX: event.touches[0].clientX,
                        clientY: event.touches[0].clientY,
                        event: event
                    });
                });
            });
            return function () {
                unsubscribeMouseDown();
                unsubscribeTouchStart();
            };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            /** @type {?} */
            var unsubscribeMouseMove;
            /** @type {?} */
            var unsubscribeTouchMove;
            zone.runOutsideAngular(function () {
                unsubscribeMouseMove = renderer.listen('document', 'mousemove', function (event) {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event: event
                    });
                });
                unsubscribeTouchMove = renderer.listen('document', 'touchmove', function (event) {
                    observer.next({
                        clientX: event.targetTouches[0].clientX,
                        clientY: event.targetTouches[0].clientY,
                        event: event
                    });
                });
            });
            return function () {
                unsubscribeMouseMove();
                unsubscribeTouchMove();
            };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            /** @type {?} */
            var unsubscribeMouseUp;
            /** @type {?} */
            var unsubscribeTouchEnd;
            /** @type {?} */
            var unsubscribeTouchCancel;
            zone.runOutsideAngular(function () {
                unsubscribeMouseUp = renderer.listen('document', 'mouseup', function (event) {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event: event
                    });
                });
                unsubscribeTouchEnd = renderer.listen('document', 'touchend', function (event) {
                    observer.next({
                        clientX: event.changedTouches[0].clientX,
                        clientY: event.changedTouches[0].clientY,
                        event: event
                    });
                });
                unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', function (event) {
                    observer.next({
                        clientX: event.changedTouches[0].clientX,
                        clientY: event.changedTouches[0].clientY,
                        event: event
                    });
                });
            });
            return function () {
                unsubscribeMouseUp();
                unsubscribeTouchEnd();
                unsubscribeTouchCancel();
            };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    }
    /**
     * @param {?} renderer
     * @param {?} zone
     * @return {?}
     */
    PointerEventListeners.getInstance = /**
     * @param {?} renderer
     * @param {?} zone
     * @return {?}
     */
    function (renderer, zone) {
        if (!PointerEventListeners.instance) {
            PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
        }
        return PointerEventListeners.instance;
    };
    return PointerEventListeners;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
 *
 * For example
 *
 * ```html
 * <div mwlResizable>
 *   <div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"></div>
 * </div>
 * ```
 */
var ResizeHandleDirective = /** @class */ (function () {
    function ResizeHandleDirective(renderer, element, zone, resizable) {
        this.renderer = renderer;
        this.element = element;
        this.zone = zone;
        this.resizable = resizable;
        /**
         * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
         */
        this.resizeEdges = {};
        this.eventListeners = {};
    }
    /**
     * @return {?}
     */
    ResizeHandleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribeEventListeners();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    ResizeHandleDirective.prototype.onMousedown = /**
     * @hidden
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    function (event, clientX, clientY) {
        var _this = this;
        event.preventDefault();
        this.zone.runOutsideAngular(function () {
            if (!_this.eventListeners.touchmove) {
                _this.eventListeners.touchmove = _this.renderer.listen(_this.element.nativeElement, 'touchmove', function (touchMoveEvent) {
                    _this.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
                });
            }
            if (!_this.eventListeners.mousemove) {
                _this.eventListeners.mousemove = _this.renderer.listen(_this.element.nativeElement, 'mousemove', function (mouseMoveEvent) {
                    _this.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
                });
            }
            _this.resizable.mousedown.next({
                clientX: clientX,
                clientY: clientY,
                edges: _this.resizeEdges
            });
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    ResizeHandleDirective.prototype.onMouseup = /**
     * @hidden
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    function (clientX, clientY) {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.unsubscribeEventListeners();
            _this.resizable.mouseup.next({
                clientX: clientX,
                clientY: clientY,
                edges: _this.resizeEdges
            });
        });
    };
    /**
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    ResizeHandleDirective.prototype.onMousemove = /**
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    function (event, clientX, clientY) {
        this.resizable.mousemove.next({
            clientX: clientX,
            clientY: clientY,
            edges: this.resizeEdges,
            event: event
        });
    };
    /**
     * @return {?}
     */
    ResizeHandleDirective.prototype.unsubscribeEventListeners = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.eventListeners).forEach(function (type) {
            (/** @type {?} */ (_this)).eventListeners[type]();
            delete _this.eventListeners[type];
        });
    };
    ResizeHandleDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[mwlResizeHandle]'
                },] }
    ];
    /** @nocollapse */
    ResizeHandleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: ResizableDirective }
    ]; };
    ResizeHandleDirective.propDecorators = {
        resizeEdges: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['touchstart', [
                        '$event',
                        '$event.touches[0].clientX',
                        '$event.touches[0].clientY'
                    ],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mousedown', ['$event', '$event.clientX', '$event.clientY'],] }],
        onMouseup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['touchend', [
                        '$event.changedTouches[0].clientX',
                        '$event.changedTouches[0].clientY'
                    ],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['touchcancel', [
                        '$event.changedTouches[0].clientX',
                        '$event.changedTouches[0].clientY'
                    ],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mouseup', ['$event.clientX', '$event.clientY'],] }]
    };
    return ResizeHandleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ResizableModule = /** @class */ (function () {
    function ResizableModule() {
    }
    ResizableModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [ResizableDirective, ResizeHandleDirective],
                    exports: [ResizableDirective, ResizeHandleDirective]
                },] }
    ];
    return ResizableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yZXNpemFibGUtZWxlbWVudC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci1yZXNpemFibGUtZWxlbWVudC9yZXNpemFibGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLXJlc2l6YWJsZS1lbGVtZW50L3Jlc2l6ZS1oYW5kbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLXJlc2l6YWJsZS1lbGVtZW50L3Jlc2l6YWJsZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBJbnB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIE5nWm9uZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUsIE9ic2VydmVyLCBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBtYXAsXG4gIG1lcmdlTWFwLFxuICB0YWtlVW50aWwsXG4gIGZpbHRlcixcbiAgcGFpcndpc2UsXG4gIHRha2UsXG4gIHNoYXJlLFxuICBhdWRpdFRpbWVcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRWRnZXMgfSBmcm9tICcuL2ludGVyZmFjZXMvZWRnZXMuaW50ZXJmYWNlJztcbmltcG9ydCB7IEJvdW5kaW5nUmVjdGFuZ2xlIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2JvdW5kaW5nLXJlY3RhbmdsZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgUmVzaXplRXZlbnQgfSBmcm9tICcuL2ludGVyZmFjZXMvcmVzaXplLWV2ZW50LmludGVyZmFjZSc7XG5cbmludGVyZmFjZSBQb2ludGVyRXZlbnRDb29yZGluYXRlIHtcbiAgY2xpZW50WDogbnVtYmVyO1xuICBjbGllbnRZOiBudW1iZXI7XG4gIGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudDtcbn1cblxuaW50ZXJmYWNlIENvb3JkaW5hdGUge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXJDbG9zZVRvKFxuICB2YWx1ZTE6IG51bWJlcixcbiAgdmFsdWUyOiBudW1iZXIsXG4gIHByZWNpc2lvbjogbnVtYmVyID0gM1xuKTogYm9vbGVhbiB7XG4gIGNvbnN0IGRpZmY6IG51bWJlciA9IE1hdGguYWJzKHZhbHVlMSAtIHZhbHVlMik7XG4gIHJldHVybiBkaWZmIDwgcHJlY2lzaW9uO1xufVxuXG5mdW5jdGlvbiBnZXROZXdCb3VuZGluZ1JlY3RhbmdsZShcbiAgc3RhcnRpbmdSZWN0OiBCb3VuZGluZ1JlY3RhbmdsZSxcbiAgZWRnZXM6IEVkZ2VzLFxuICBjbGllbnRYOiBudW1iZXIsXG4gIGNsaWVudFk6IG51bWJlclxuKTogQm91bmRpbmdSZWN0YW5nbGUge1xuICBjb25zdCBuZXdCb3VuZGluZ1JlY3Q6IEJvdW5kaW5nUmVjdGFuZ2xlID0ge1xuICAgIHRvcDogc3RhcnRpbmdSZWN0LnRvcCxcbiAgICBib3R0b206IHN0YXJ0aW5nUmVjdC5ib3R0b20sXG4gICAgbGVmdDogc3RhcnRpbmdSZWN0LmxlZnQsXG4gICAgcmlnaHQ6IHN0YXJ0aW5nUmVjdC5yaWdodFxuICB9O1xuXG4gIGlmIChlZGdlcy50b3ApIHtcbiAgICBuZXdCb3VuZGluZ1JlY3QudG9wICs9IGNsaWVudFk7XG4gIH1cbiAgaWYgKGVkZ2VzLmJvdHRvbSkge1xuICAgIG5ld0JvdW5kaW5nUmVjdC5ib3R0b20gKz0gY2xpZW50WTtcbiAgfVxuICBpZiAoZWRnZXMubGVmdCkge1xuICAgIG5ld0JvdW5kaW5nUmVjdC5sZWZ0ICs9IGNsaWVudFg7XG4gIH1cbiAgaWYgKGVkZ2VzLnJpZ2h0KSB7XG4gICAgbmV3Qm91bmRpbmdSZWN0LnJpZ2h0ICs9IGNsaWVudFg7XG4gIH1cbiAgbmV3Qm91bmRpbmdSZWN0LmhlaWdodCA9IG5ld0JvdW5kaW5nUmVjdC5ib3R0b20gLSBuZXdCb3VuZGluZ1JlY3QudG9wO1xuICBuZXdCb3VuZGluZ1JlY3Qud2lkdGggPSBuZXdCb3VuZGluZ1JlY3QucmlnaHQgLSBuZXdCb3VuZGluZ1JlY3QubGVmdDtcblxuICByZXR1cm4gbmV3Qm91bmRpbmdSZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50UmVjdChcbiAgZWxlbWVudDogRWxlbWVudFJlZixcbiAgZ2hvc3RFbGVtZW50UG9zaXRpb25pbmc6IHN0cmluZ1xuKTogQm91bmRpbmdSZWN0YW5nbGUge1xuICBsZXQgdHJhbnNsYXRlWCA9IDA7XG4gIGxldCB0cmFuc2xhdGVZID0gMDtcbiAgY29uc3Qgc3R5bGUgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGU7XG4gIGNvbnN0IHRyYW5zZm9ybVByb3BlcnRpZXMgPSBbXG4gICAgJ3RyYW5zZm9ybScsXG4gICAgJy1tcy10cmFuc2Zvcm0nLFxuICAgICctbW96LXRyYW5zZm9ybScsXG4gICAgJy1vLXRyYW5zZm9ybSdcbiAgXTtcbiAgY29uc3QgdHJhbnNmb3JtID0gdHJhbnNmb3JtUHJvcGVydGllc1xuICAgIC5tYXAocHJvcGVydHkgPT4gc3R5bGVbcHJvcGVydHldKVxuICAgIC5maW5kKHZhbHVlID0+ICEhdmFsdWUpO1xuICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybS5pbmNsdWRlcygndHJhbnNsYXRlJykpIHtcbiAgICB0cmFuc2xhdGVYID0gdHJhbnNmb3JtLnJlcGxhY2UoLy4qdHJhbnNsYXRlXFwoKC4qKXB4LCAoLiopcHhcXCkuKi8sICckMScpO1xuICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2Zvcm0ucmVwbGFjZSgvLip0cmFuc2xhdGVcXCgoLiopcHgsICguKilweFxcKS4qLywgJyQyJyk7XG4gIH1cblxuICBpZiAoZ2hvc3RFbGVtZW50UG9zaXRpb25pbmcgPT09ICdhYnNvbHV0ZScpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgd2lkdGg6IGVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgIHRvcDogZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAtIHRyYW5zbGF0ZVksXG4gICAgICBib3R0b206XG4gICAgICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgK1xuICAgICAgICBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wIC1cbiAgICAgICAgdHJhbnNsYXRlWSxcbiAgICAgIGxlZnQ6IGVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0IC0gdHJhbnNsYXRlWCxcbiAgICAgIHJpZ2h0OlxuICAgICAgICBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggK1xuICAgICAgICBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdCAtXG4gICAgICAgIHRyYW5zbGF0ZVhcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGJvdW5kaW5nUmVjdDogQm91bmRpbmdSZWN0YW5nbGUgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogYm91bmRpbmdSZWN0LmhlaWdodCxcbiAgICAgIHdpZHRoOiBib3VuZGluZ1JlY3Qud2lkdGgsXG4gICAgICB0b3A6IGJvdW5kaW5nUmVjdC50b3AgLSB0cmFuc2xhdGVZLFxuICAgICAgYm90dG9tOiBib3VuZGluZ1JlY3QuYm90dG9tIC0gdHJhbnNsYXRlWSxcbiAgICAgIGxlZnQ6IGJvdW5kaW5nUmVjdC5sZWZ0IC0gdHJhbnNsYXRlWCxcbiAgICAgIHJpZ2h0OiBib3VuZGluZ1JlY3QucmlnaHQgLSB0cmFuc2xhdGVYLFxuICAgICAgc2Nyb2xsVG9wOiBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgICAgc2Nyb2xsTGVmdDogZWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnRcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzV2l0aGluQm91bmRpbmdZKHtcbiAgY2xpZW50WSxcbiAgcmVjdFxufToge1xuICBjbGllbnRZOiBudW1iZXI7XG4gIHJlY3Q6IENsaWVudFJlY3Q7XG59KTogYm9vbGVhbiB7XG4gIHJldHVybiBjbGllbnRZID49IHJlY3QudG9wICYmIGNsaWVudFkgPD0gcmVjdC5ib3R0b207XG59XG5cbmZ1bmN0aW9uIGlzV2l0aGluQm91bmRpbmdYKHtcbiAgY2xpZW50WCxcbiAgcmVjdFxufToge1xuICBjbGllbnRYOiBudW1iZXI7XG4gIHJlY3Q6IENsaWVudFJlY3Q7XG59KTogYm9vbGVhbiB7XG4gIHJldHVybiBjbGllbnRYID49IHJlY3QubGVmdCAmJiBjbGllbnRYIDw9IHJlY3QucmlnaHQ7XG59XG5cbmZ1bmN0aW9uIGdldFJlc2l6ZUVkZ2VzKHtcbiAgY2xpZW50WCxcbiAgY2xpZW50WSxcbiAgZWxtLFxuICBhbGxvd2VkRWRnZXMsXG4gIGN1cnNvclByZWNpc2lvblxufToge1xuICBjbGllbnRYOiBudW1iZXI7XG4gIGNsaWVudFk6IG51bWJlcjtcbiAgZWxtOiBFbGVtZW50UmVmO1xuICBhbGxvd2VkRWRnZXM6IEVkZ2VzO1xuICBjdXJzb3JQcmVjaXNpb246IG51bWJlcjtcbn0pOiBFZGdlcyB7XG4gIGNvbnN0IGVsbVBvc2l0aW9uOiBDbGllbnRSZWN0ID0gZWxtLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IGVkZ2VzOiBFZGdlcyA9IHt9O1xuXG4gIGlmIChcbiAgICBhbGxvd2VkRWRnZXMubGVmdCAmJlxuICAgIGlzTnVtYmVyQ2xvc2VUbyhjbGllbnRYLCBlbG1Qb3NpdGlvbi5sZWZ0LCBjdXJzb3JQcmVjaXNpb24pICYmXG4gICAgaXNXaXRoaW5Cb3VuZGluZ1koeyBjbGllbnRZLCByZWN0OiBlbG1Qb3NpdGlvbiB9KVxuICApIHtcbiAgICBlZGdlcy5sZWZ0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChcbiAgICBhbGxvd2VkRWRnZXMucmlnaHQgJiZcbiAgICBpc051bWJlckNsb3NlVG8oY2xpZW50WCwgZWxtUG9zaXRpb24ucmlnaHQsIGN1cnNvclByZWNpc2lvbikgJiZcbiAgICBpc1dpdGhpbkJvdW5kaW5nWSh7IGNsaWVudFksIHJlY3Q6IGVsbVBvc2l0aW9uIH0pXG4gICkge1xuICAgIGVkZ2VzLnJpZ2h0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChcbiAgICBhbGxvd2VkRWRnZXMudG9wICYmXG4gICAgaXNOdW1iZXJDbG9zZVRvKGNsaWVudFksIGVsbVBvc2l0aW9uLnRvcCwgY3Vyc29yUHJlY2lzaW9uKSAmJlxuICAgIGlzV2l0aGluQm91bmRpbmdYKHsgY2xpZW50WCwgcmVjdDogZWxtUG9zaXRpb24gfSlcbiAgKSB7XG4gICAgZWRnZXMudG9wID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChcbiAgICBhbGxvd2VkRWRnZXMuYm90dG9tICYmXG4gICAgaXNOdW1iZXJDbG9zZVRvKGNsaWVudFksIGVsbVBvc2l0aW9uLmJvdHRvbSwgY3Vyc29yUHJlY2lzaW9uKSAmJlxuICAgIGlzV2l0aGluQm91bmRpbmdYKHsgY2xpZW50WCwgcmVjdDogZWxtUG9zaXRpb24gfSlcbiAgKSB7XG4gICAgZWRnZXMuYm90dG9tID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNpemVDdXJzb3JzIHtcbiAgdG9wTGVmdDogc3RyaW5nO1xuICB0b3BSaWdodDogc3RyaW5nO1xuICBib3R0b21MZWZ0OiBzdHJpbmc7XG4gIGJvdHRvbVJpZ2h0OiBzdHJpbmc7XG4gIGxlZnRPclJpZ2h0OiBzdHJpbmc7XG4gIHRvcE9yQm90dG9tOiBzdHJpbmc7XG59XG5cbmNvbnN0IERFRkFVTFRfUkVTSVpFX0NVUlNPUlM6IFJlc2l6ZUN1cnNvcnMgPSBPYmplY3QuZnJlZXplKHtcbiAgdG9wTGVmdDogJ253LXJlc2l6ZScsXG4gIHRvcFJpZ2h0OiAnbmUtcmVzaXplJyxcbiAgYm90dG9tTGVmdDogJ3N3LXJlc2l6ZScsXG4gIGJvdHRvbVJpZ2h0OiAnc2UtcmVzaXplJyxcbiAgbGVmdE9yUmlnaHQ6ICdjb2wtcmVzaXplJyxcbiAgdG9wT3JCb3R0b206ICdyb3ctcmVzaXplJ1xufSk7XG5cbmZ1bmN0aW9uIGdldFJlc2l6ZUN1cnNvcihlZGdlczogRWRnZXMsIGN1cnNvcnM6IFJlc2l6ZUN1cnNvcnMpOiBzdHJpbmcge1xuICBpZiAoZWRnZXMubGVmdCAmJiBlZGdlcy50b3ApIHtcbiAgICByZXR1cm4gY3Vyc29ycy50b3BMZWZ0O1xuICB9IGVsc2UgaWYgKGVkZ2VzLnJpZ2h0ICYmIGVkZ2VzLnRvcCkge1xuICAgIHJldHVybiBjdXJzb3JzLnRvcFJpZ2h0O1xuICB9IGVsc2UgaWYgKGVkZ2VzLmxlZnQgJiYgZWRnZXMuYm90dG9tKSB7XG4gICAgcmV0dXJuIGN1cnNvcnMuYm90dG9tTGVmdDtcbiAgfSBlbHNlIGlmIChlZGdlcy5yaWdodCAmJiBlZGdlcy5ib3R0b20pIHtcbiAgICByZXR1cm4gY3Vyc29ycy5ib3R0b21SaWdodDtcbiAgfSBlbHNlIGlmIChlZGdlcy5sZWZ0IHx8IGVkZ2VzLnJpZ2h0KSB7XG4gICAgcmV0dXJuIGN1cnNvcnMubGVmdE9yUmlnaHQ7XG4gIH0gZWxzZSBpZiAoZWRnZXMudG9wIHx8IGVkZ2VzLmJvdHRvbSkge1xuICAgIHJldHVybiBjdXJzb3JzLnRvcE9yQm90dG9tO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRFZGdlc0RpZmYoe1xuICBlZGdlcyxcbiAgaW5pdGlhbFJlY3RhbmdsZSxcbiAgbmV3UmVjdGFuZ2xlXG59OiB7XG4gIGVkZ2VzOiBFZGdlcztcbiAgaW5pdGlhbFJlY3RhbmdsZTogQm91bmRpbmdSZWN0YW5nbGU7XG4gIG5ld1JlY3RhbmdsZTogQm91bmRpbmdSZWN0YW5nbGU7XG59KTogRWRnZXMge1xuICBjb25zdCBlZGdlc0RpZmY6IEVkZ2VzID0ge307XG4gIE9iamVjdC5rZXlzKGVkZ2VzKS5mb3JFYWNoKGVkZ2UgPT4ge1xuICAgIGVkZ2VzRGlmZltlZGdlXSA9IChuZXdSZWN0YW5nbGVbZWRnZV0gfHwgMCkgLSAoaW5pdGlhbFJlY3RhbmdsZVtlZGdlXSB8fCAwKTtcbiAgfSk7XG4gIHJldHVybiBlZGdlc0RpZmY7XG59XG5cbmNvbnN0IFJFU0laRV9BQ1RJVkVfQ0xBU1M6IHN0cmluZyA9ICdyZXNpemUtYWN0aXZlJztcbmNvbnN0IFJFU0laRV9MRUZUX0hPVkVSX0NMQVNTOiBzdHJpbmcgPSAncmVzaXplLWxlZnQtaG92ZXInO1xuY29uc3QgUkVTSVpFX1JJR0hUX0hPVkVSX0NMQVNTOiBzdHJpbmcgPSAncmVzaXplLXJpZ2h0LWhvdmVyJztcbmNvbnN0IFJFU0laRV9UT1BfSE9WRVJfQ0xBU1M6IHN0cmluZyA9ICdyZXNpemUtdG9wLWhvdmVyJztcbmNvbnN0IFJFU0laRV9CT1RUT01fSE9WRVJfQ0xBU1M6IHN0cmluZyA9ICdyZXNpemUtYm90dG9tLWhvdmVyJztcbmNvbnN0IFJFU0laRV9HSE9TVF9FTEVNRU5UX0NMQVNTOiBzdHJpbmcgPSAncmVzaXplLWdob3N0LWVsZW1lbnQnO1xuXG5leHBvcnQgY29uc3QgTU9VU0VfTU9WRV9USFJPVFRMRV9NUzogbnVtYmVyID0gNTA7XG5cbi8qKlxuICogUGxhY2UgdGhpcyBvbiBhbiBlbGVtZW50IHRvIG1ha2UgaXQgcmVzaXphYmxlLiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGBodG1sXG4gKiA8ZGl2XG4gKiAgIG13bFJlc2l6YWJsZVxuICogICBbcmVzaXplRWRnZXNdPVwie2JvdHRvbTogdHJ1ZSwgcmlnaHQ6IHRydWUsIHRvcDogdHJ1ZSwgbGVmdDogdHJ1ZX1cIlxuICogICBbZW5hYmxlR2hvc3RSZXNpemVdPVwidHJ1ZVwiPlxuICogPC9kaXY+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bFJlc2l6YWJsZV0nXG59KVxuZXhwb3J0IGNsYXNzIFJlc2l6YWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgZWFjaCByZXNpemUgZXZlbnQuIFJldHVybiBgdHJ1ZWAgdG8gYWxsb3cgdGhlIHJlc2l6ZSBldmVudCB0byBwcm9wYWdhdGUgb3IgYGZhbHNlYCB0byBjYW5jZWwgaXRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHZhbGlkYXRlUmVzaXplOiAocmVzaXplRXZlbnQ6IFJlc2l6ZUV2ZW50KSA9PiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgZWRnZXMgdGhhdCBhbiBlbGVtZW50IGNhbiBiZSByZXNpemVkIGZyb20uIFBhc3MgYW4gb2JqZWN0IGxpa2UgYHt0b3A6IHRydWUsIGJvdHRvbTogZmFsc2V9YC4gQnkgZGVmYXVsdCBubyBlZGdlcyBjYW4gYmUgcmVzaXplZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHJlc2l6ZUVkZ2VzOiBFZGdlcyA9IHt9O1xuXG4gIC8qKlxuICAgKiBTZXQgdG8gYHRydWVgIHRvIGVuYWJsZSBhIHRlbXBvcmFyeSByZXNpemluZyBlZmZlY3Qgb2YgdGhlIGVsZW1lbnQgaW4gYmV0d2VlbiB0aGUgYHJlc2l6ZVN0YXJ0YCBhbmQgYHJlc2l6ZUVuZGAgZXZlbnRzLlxuICAgKi9cbiAgQElucHV0KClcbiAgZW5hYmxlR2hvc3RSZXNpemU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQSBzbmFwIGdyaWQgdGhhdCByZXNpemUgZXZlbnRzIHdpbGwgYmUgbG9ja2VkIHRvLlxuICAgKlxuICAgKiBlLmcuIHRvIG9ubHkgYWxsb3cgdGhlIGVsZW1lbnQgdG8gYmUgcmVzaXplZCBldmVyeSAxMHB4IHNldCBpdCB0byBge2xlZnQ6IDEwLCByaWdodDogMTB9YFxuICAgKi9cbiAgQElucHV0KClcbiAgcmVzaXplU25hcEdyaWQ6IEVkZ2VzID0ge307XG5cbiAgLyoqXG4gICAqIFRoZSBtb3VzZSBjdXJzb3JzIHRoYXQgd2lsbCBiZSBzZXQgb24gdGhlIHJlc2l6ZSBlZGdlc1xuICAgKi9cbiAgQElucHV0KClcbiAgcmVzaXplQ3Vyc29yczogUmVzaXplQ3Vyc29ycyA9IERFRkFVTFRfUkVTSVpFX0NVUlNPUlM7XG5cbiAgLyoqXG4gICAqIE1vdXNlIG92ZXIgdGhpY2tuZXNzIHRvIGFjdGl2ZSBjdXJzb3IuXG4gICAqL1xuICBASW5wdXQoKVxuICByZXNpemVDdXJzb3JQcmVjaXNpb246IG51bWJlciA9IDM7XG5cbiAgLyoqXG4gICAqIERlZmluZSB0aGUgcG9zaXRpb25pbmcgb2YgdGhlIGdob3N0IGVsZW1lbnQgKGNhbiBiZSBmaXhlZCBvciBhYnNvbHV0ZSlcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdob3N0RWxlbWVudFBvc2l0aW9uaW5nOiAnZml4ZWQnIHwgJ2Fic29sdXRlJyA9ICdmaXhlZCc7XG5cbiAgLyoqXG4gICAqIEFsbG93IGVsZW1lbnRzIHRvIGJlIHJlc2l6ZWQgdG8gbmVnYXRpdmUgZGltZW5zaW9uc1xuICAgKi9cbiAgQElucHV0KClcbiAgYWxsb3dOZWdhdGl2ZVJlc2l6ZXM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIG1vdXNlIGlzIHByZXNzZWQgYW5kIGEgcmVzaXplIGV2ZW50IGlzIGFib3V0IHRvIGJlZ2luLiBgJGV2ZW50YCBpcyBhIGBSZXNpemVFdmVudGAgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlc2l6ZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxSZXNpemVFdmVudD4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIGFzIHRoZSBtb3VzZSBpcyBkcmFnZ2VkIGFmdGVyIGEgcmVzaXplIGV2ZW50IGhhcyBiZWd1bi4gYCRldmVudGAgaXMgYSBgUmVzaXplRXZlbnRgIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoKVxuICByZXNpemluZyA9IG5ldyBFdmVudEVtaXR0ZXI8UmVzaXplRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCBhZnRlciB0aGUgbW91c2UgaXMgcmVsZWFzZWQgYWZ0ZXIgYSByZXNpemUgZXZlbnQuIGAkZXZlbnRgIGlzIGEgYFJlc2l6ZUV2ZW50YCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVzaXplRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxSZXNpemVFdmVudD4oKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHVibGljIG1vdXNldXAgPSBuZXcgU3ViamVjdDx7XG4gICAgY2xpZW50WDogbnVtYmVyO1xuICAgIGNsaWVudFk6IG51bWJlcjtcbiAgICBlZGdlcz86IEVkZ2VzO1xuICB9PigpO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwdWJsaWMgbW91c2Vkb3duID0gbmV3IFN1YmplY3Q8e1xuICAgIGNsaWVudFg6IG51bWJlcjtcbiAgICBjbGllbnRZOiBudW1iZXI7XG4gICAgZWRnZXM/OiBFZGdlcztcbiAgfT4oKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHVibGljIG1vdXNlbW92ZSA9IG5ldyBTdWJqZWN0PHtcbiAgICBjbGllbnRYOiBudW1iZXI7XG4gICAgY2xpZW50WTogbnVtYmVyO1xuICAgIGVkZ2VzPzogRWRnZXM7XG4gICAgZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50O1xuICB9PigpO1xuXG4gIHByaXZhdGUgcG9pbnRlckV2ZW50TGlzdGVuZXJzOiBQb2ludGVyRXZlbnRMaXN0ZW5lcnM7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgZWxtOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lXG4gICkge1xuICAgIHRoaXMucG9pbnRlckV2ZW50TGlzdGVuZXJzID0gUG9pbnRlckV2ZW50TGlzdGVuZXJzLmdldEluc3RhbmNlKFxuICAgICAgcmVuZGVyZXIsXG4gICAgICB6b25lXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBUT0RPIC0gdXNlIHNvbWUgZmFuY3kgT2JzZXJ2YWJsZS5tZXJnZSdzIGZvciB0aGlzXG4gICAgdGhpcy5wb2ludGVyRXZlbnRMaXN0ZW5lcnMucG9pbnRlckRvd25cbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHsgY2xpZW50WCwgY2xpZW50WSB9KSA9PiB7XG4gICAgICAgIHRoaXMubW91c2Vkb3duLm5leHQoeyBjbGllbnRYLCBjbGllbnRZIH0pO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLnBvaW50ZXJFdmVudExpc3RlbmVycy5wb2ludGVyTW92ZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoeyBjbGllbnRYLCBjbGllbnRZLCBldmVudCB9KSA9PiB7XG4gICAgICAgIHRoaXMubW91c2Vtb3ZlLm5leHQoeyBjbGllbnRYLCBjbGllbnRZLCBldmVudCB9KTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5wb2ludGVyRXZlbnRMaXN0ZW5lcnMucG9pbnRlclVwXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCh7IGNsaWVudFgsIGNsaWVudFkgfSkgPT4ge1xuICAgICAgICB0aGlzLm1vdXNldXAubmV4dCh7IGNsaWVudFgsIGNsaWVudFkgfSk7XG4gICAgICB9KTtcblxuICAgIGxldCBjdXJyZW50UmVzaXplOiB7XG4gICAgICBlZGdlczogRWRnZXM7XG4gICAgICBzdGFydGluZ1JlY3Q6IEJvdW5kaW5nUmVjdGFuZ2xlO1xuICAgICAgY3VycmVudFJlY3Q6IEJvdW5kaW5nUmVjdGFuZ2xlO1xuICAgICAgY2xvbmVkTm9kZT86IEhUTUxFbGVtZW50O1xuICAgIH0gfCBudWxsO1xuXG4gICAgY29uc3QgcmVtb3ZlR2hvc3RFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRSZXNpemUgJiYgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlKSB7XG4gICAgICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChcbiAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsbS5uYXRpdmVFbGVtZW50LCAndmlzaWJpbGl0eScsICdpbmhlcml0Jyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG1vdXNlTW92ZTogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5tb3VzZW1vdmUucGlwZShzaGFyZSgpKTtcblxuICAgIG1vdXNlTW92ZS5waXBlKGZpbHRlcigoKSA9PiAhIWN1cnJlbnRSZXNpemUpKS5zdWJzY3JpYmUoKHsgZXZlbnQgfSkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIG1vdXNlTW92ZVxuICAgICAgLnBpcGUoYXVkaXRUaW1lKE1PVVNFX01PVkVfVEhST1RUTEVfTVMpKVxuICAgICAgLnN1YnNjcmliZSgoeyBjbGllbnRYLCBjbGllbnRZIH0pID0+IHtcbiAgICAgICAgY29uc3QgcmVzaXplRWRnZXM6IEVkZ2VzID0gZ2V0UmVzaXplRWRnZXMoe1xuICAgICAgICAgIGNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICBlbG06IHRoaXMuZWxtLFxuICAgICAgICAgIGFsbG93ZWRFZGdlczogdGhpcy5yZXNpemVFZGdlcyxcbiAgICAgICAgICBjdXJzb3JQcmVjaXNpb246IHRoaXMucmVzaXplQ3Vyc29yUHJlY2lzaW9uXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZXNpemVDdXJzb3JzOiBSZXNpemVDdXJzb3JzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7fSxcbiAgICAgICAgICBERUZBVUxUX1JFU0laRV9DVVJTT1JTLFxuICAgICAgICAgIHRoaXMucmVzaXplQ3Vyc29yc1xuICAgICAgICApO1xuICAgICAgICBpZiAoY3VycmVudFJlc2l6ZSkge1xuICAgICAgICAgIGNvbnN0IGN1cnNvcjogc3RyaW5nID0gZ2V0UmVzaXplQ3Vyc29yKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5lZGdlcyxcbiAgICAgICAgICAgIHJlc2l6ZUN1cnNvcnNcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ2N1cnNvcicsIGN1cnNvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgY3Vyc29yOiBzdHJpbmcgPSBnZXRSZXNpemVDdXJzb3IocmVzaXplRWRnZXMsIHJlc2l6ZUN1cnNvcnMpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbG0ubmF0aXZlRWxlbWVudCwgJ2N1cnNvcicsIGN1cnNvcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbG0sIFJFU0laRV9BQ1RJVkVfQ0xBU1MsICEhY3VycmVudFJlc2l6ZSk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudENsYXNzKFxuICAgICAgICAgIHRoaXMuZWxtLFxuICAgICAgICAgIFJFU0laRV9MRUZUX0hPVkVSX0NMQVNTLFxuICAgICAgICAgIHJlc2l6ZUVkZ2VzLmxlZnQgPT09IHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50Q2xhc3MoXG4gICAgICAgICAgdGhpcy5lbG0sXG4gICAgICAgICAgUkVTSVpFX1JJR0hUX0hPVkVSX0NMQVNTLFxuICAgICAgICAgIHJlc2l6ZUVkZ2VzLnJpZ2h0ID09PSB0cnVlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudENsYXNzKFxuICAgICAgICAgIHRoaXMuZWxtLFxuICAgICAgICAgIFJFU0laRV9UT1BfSE9WRVJfQ0xBU1MsXG4gICAgICAgICAgcmVzaXplRWRnZXMudG9wID09PSB0cnVlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudENsYXNzKFxuICAgICAgICAgIHRoaXMuZWxtLFxuICAgICAgICAgIFJFU0laRV9CT1RUT01fSE9WRVJfQ0xBU1MsXG4gICAgICAgICAgcmVzaXplRWRnZXMuYm90dG9tID09PSB0cnVlXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgIGNvbnN0IG1vdXNlZHJhZzogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5tb3VzZWRvd25cbiAgICAgIC5waXBlKFxuICAgICAgICBtZXJnZU1hcChzdGFydENvb3JkcyA9PiB7XG4gICAgICAgICAgZnVuY3Rpb24gZ2V0RGlmZihtb3ZlQ29vcmRzOiB7IGNsaWVudFg6IG51bWJlcjsgY2xpZW50WTogbnVtYmVyIH0pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGNsaWVudFg6IG1vdmVDb29yZHMuY2xpZW50WCAtIHN0YXJ0Q29vcmRzLmNsaWVudFgsXG4gICAgICAgICAgICAgIGNsaWVudFk6IG1vdmVDb29yZHMuY2xpZW50WSAtIHN0YXJ0Q29vcmRzLmNsaWVudFlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZ2V0U25hcEdyaWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzbmFwR3JpZDogQ29vcmRpbmF0ZSA9IHsgeDogMSwgeTogMSB9O1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudFJlc2l6ZSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5yZXNpemVTbmFwR3JpZC5sZWZ0ICYmIGN1cnJlbnRSZXNpemUuZWRnZXMubGVmdCkge1xuICAgICAgICAgICAgICAgIHNuYXBHcmlkLnggPSArdGhpcy5yZXNpemVTbmFwR3JpZC5sZWZ0O1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplU25hcEdyaWQucmlnaHQgJiZcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVzaXplLmVkZ2VzLnJpZ2h0XG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHNuYXBHcmlkLnggPSArdGhpcy5yZXNpemVTbmFwR3JpZC5yaWdodDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICh0aGlzLnJlc2l6ZVNuYXBHcmlkLnRvcCAmJiBjdXJyZW50UmVzaXplLmVkZ2VzLnRvcCkge1xuICAgICAgICAgICAgICAgIHNuYXBHcmlkLnkgPSArdGhpcy5yZXNpemVTbmFwR3JpZC50b3A7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemVTbmFwR3JpZC5ib3R0b20gJiZcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVzaXplLmVkZ2VzLmJvdHRvbVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzbmFwR3JpZC55ID0gK3RoaXMucmVzaXplU25hcEdyaWQuYm90dG9tO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzbmFwR3JpZDtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZnVuY3Rpb24gZ2V0R3JpZChcbiAgICAgICAgICAgIGNvb3JkczogeyBjbGllbnRYOiBudW1iZXI7IGNsaWVudFk6IG51bWJlciB9LFxuICAgICAgICAgICAgc25hcEdyaWQ6IENvb3JkaW5hdGVcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHg6IE1hdGguY2VpbChjb29yZHMuY2xpZW50WCAvIHNuYXBHcmlkLngpLFxuICAgICAgICAgICAgICB5OiBNYXRoLmNlaWwoY29vcmRzLmNsaWVudFkgLyBzbmFwR3JpZC55KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbWVyZ2UoXG4gICAgICAgICAgICBtb3VzZU1vdmUucGlwZSh0YWtlKDEpKS5waXBlKG1hcChjb29yZHMgPT4gWywgY29vcmRzXSkpLFxuICAgICAgICAgICAgbW91c2VNb3ZlLnBpcGUocGFpcndpc2UoKSlcbiAgICAgICAgICApXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgbWFwKChbcHJldmlvdXNDb29yZHMsIG5ld0Nvb3Jkc10pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb29yZHMgPyBnZXREaWZmKHByZXZpb3VzQ29vcmRzKSA6IHByZXZpb3VzQ29vcmRzLFxuICAgICAgICAgICAgICAgICAgZ2V0RGlmZihuZXdDb29yZHMpXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBmaWx0ZXIoKFtwcmV2aW91c0Nvb3JkcywgbmV3Q29vcmRzXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcHJldmlvdXNDb29yZHMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHNuYXBHcmlkOiBDb29yZGluYXRlID0gZ2V0U25hcEdyaWQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0dyaWQ6IENvb3JkaW5hdGUgPSBnZXRHcmlkKFxuICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb29yZHMsXG4gICAgICAgICAgICAgICAgICBzbmFwR3JpZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3R3JpZDogQ29vcmRpbmF0ZSA9IGdldEdyaWQobmV3Q29vcmRzLCBzbmFwR3JpZCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgcHJldmlvdXNHcmlkLnggIT09IG5ld0dyaWQueCB8fCBwcmV2aW91c0dyaWQueSAhPT0gbmV3R3JpZC55XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBtYXAoKFssIG5ld0Nvb3Jkc10pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzbmFwR3JpZDogQ29vcmRpbmF0ZSA9IGdldFNuYXBHcmlkKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIGNsaWVudFg6XG4gICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQobmV3Q29vcmRzLmNsaWVudFggLyBzbmFwR3JpZC54KSAqIHNuYXBHcmlkLngsXG4gICAgICAgICAgICAgICAgICBjbGllbnRZOlxuICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKG5ld0Nvb3Jkcy5jbGllbnRZIC8gc25hcEdyaWQueSkgKiBzbmFwR3JpZC55XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbChtZXJnZSh0aGlzLm1vdXNldXAsIHRoaXMubW91c2Vkb3duKSkpO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnBpcGUoZmlsdGVyKCgpID0+ICEhY3VycmVudFJlc2l6ZSkpO1xuXG4gICAgbW91c2VkcmFnXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCh7IGNsaWVudFgsIGNsaWVudFkgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiBnZXROZXdCb3VuZGluZ1JlY3RhbmdsZShcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUhLnN0YXJ0aW5nUmVjdCxcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUhLmVkZ2VzLFxuICAgICAgICAgICAgY2xpZW50WCxcbiAgICAgICAgICAgIGNsaWVudFlcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigobmV3Qm91bmRpbmdSZWN0OiBCb3VuZGluZ1JlY3RhbmdsZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLmFsbG93TmVnYXRpdmVSZXNpemVzIHx8XG4gICAgICAgICAgICAhIShcbiAgICAgICAgICAgICAgbmV3Qm91bmRpbmdSZWN0LmhlaWdodCAmJlxuICAgICAgICAgICAgICBuZXdCb3VuZGluZ1JlY3Qud2lkdGggJiZcbiAgICAgICAgICAgICAgbmV3Qm91bmRpbmdSZWN0LmhlaWdodCA+IDAgJiZcbiAgICAgICAgICAgICAgbmV3Qm91bmRpbmdSZWN0LndpZHRoID4gMFxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChuZXdCb3VuZGluZ1JlY3Q6IEJvdW5kaW5nUmVjdGFuZ2xlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVSZXNpemVcbiAgICAgICAgICAgID8gdGhpcy52YWxpZGF0ZVJlc2l6ZSh7XG4gICAgICAgICAgICAgICAgcmVjdGFuZ2xlOiBuZXdCb3VuZGluZ1JlY3QsXG4gICAgICAgICAgICAgICAgZWRnZXM6IGdldEVkZ2VzRGlmZih7XG4gICAgICAgICAgICAgICAgICBlZGdlczogY3VycmVudFJlc2l6ZSEuZWRnZXMsXG4gICAgICAgICAgICAgICAgICBpbml0aWFsUmVjdGFuZ2xlOiBjdXJyZW50UmVzaXplIS5zdGFydGluZ1JlY3QsXG4gICAgICAgICAgICAgICAgICBuZXdSZWN0YW5nbGU6IG5ld0JvdW5kaW5nUmVjdFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IHRydWU7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChuZXdCb3VuZGluZ1JlY3Q6IEJvdW5kaW5nUmVjdGFuZ2xlKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50UmVzaXplICYmIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGUsXG4gICAgICAgICAgICAnaGVpZ2h0JyxcbiAgICAgICAgICAgIGAke25ld0JvdW5kaW5nUmVjdC5oZWlnaHR9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgJ3dpZHRoJyxcbiAgICAgICAgICAgIGAke25ld0JvdW5kaW5nUmVjdC53aWR0aH1weGBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGUsXG4gICAgICAgICAgICAndG9wJyxcbiAgICAgICAgICAgIGAke25ld0JvdW5kaW5nUmVjdC50b3B9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgJ2xlZnQnLFxuICAgICAgICAgICAgYCR7bmV3Qm91bmRpbmdSZWN0LmxlZnR9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVzaXppbmcuZW1pdCh7XG4gICAgICAgICAgICBlZGdlczogZ2V0RWRnZXNEaWZmKHtcbiAgICAgICAgICAgICAgZWRnZXM6IGN1cnJlbnRSZXNpemUhLmVkZ2VzLFxuICAgICAgICAgICAgICBpbml0aWFsUmVjdGFuZ2xlOiBjdXJyZW50UmVzaXplIS5zdGFydGluZ1JlY3QsXG4gICAgICAgICAgICAgIG5ld1JlY3RhbmdsZTogbmV3Qm91bmRpbmdSZWN0XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHJlY3RhbmdsZTogbmV3Qm91bmRpbmdSZWN0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGN1cnJlbnRSZXNpemUhLmN1cnJlbnRSZWN0ID0gbmV3Qm91bmRpbmdSZWN0O1xuICAgICAgfSk7XG5cbiAgICB0aGlzLm1vdXNlZG93blxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoeyBjbGllbnRYLCBjbGllbnRZLCBlZGdlcyB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGVkZ2VzIHx8XG4gICAgICAgICAgICBnZXRSZXNpemVFZGdlcyh7XG4gICAgICAgICAgICAgIGNsaWVudFgsXG4gICAgICAgICAgICAgIGNsaWVudFksXG4gICAgICAgICAgICAgIGVsbTogdGhpcy5lbG0sXG4gICAgICAgICAgICAgIGFsbG93ZWRFZGdlczogdGhpcy5yZXNpemVFZGdlcyxcbiAgICAgICAgICAgICAgY3Vyc29yUHJlY2lzaW9uOiB0aGlzLnJlc2l6ZUN1cnNvclByZWNpc2lvblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoZWRnZXM6IEVkZ2VzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGVkZ2VzKS5sZW5ndGggPiAwO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoZWRnZXM6IEVkZ2VzKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50UmVzaXplKSB7XG4gICAgICAgICAgcmVtb3ZlR2hvc3RFbGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRpbmdSZWN0OiBCb3VuZGluZ1JlY3RhbmdsZSA9IGdldEVsZW1lbnRSZWN0KFxuICAgICAgICAgIHRoaXMuZWxtLFxuICAgICAgICAgIHRoaXMuZ2hvc3RFbGVtZW50UG9zaXRpb25pbmdcbiAgICAgICAgKTtcbiAgICAgICAgY3VycmVudFJlc2l6ZSA9IHtcbiAgICAgICAgICBlZGdlcyxcbiAgICAgICAgICBzdGFydGluZ1JlY3QsXG4gICAgICAgICAgY3VycmVudFJlY3Q6IHN0YXJ0aW5nUmVjdFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5lbmFibGVHaG9zdFJlc2l6ZSkge1xuICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSA9IHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgIGNvbnN0IHJlc2l6ZUN1cnNvcnM6IFJlc2l6ZUN1cnNvcnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBERUZBVUxUX1JFU0laRV9DVVJTT1JTLFxuICAgICAgICAgICAgdGhpcy5yZXNpemVDdXJzb3JzXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGVcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgJ3Zpc2liaWxpdHknLFxuICAgICAgICAgICAgJ2hpZGRlbidcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGUsXG4gICAgICAgICAgICAncG9zaXRpb24nLFxuICAgICAgICAgICAgdGhpcy5naG9zdEVsZW1lbnRQb3NpdGlvbmluZ1xuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSxcbiAgICAgICAgICAgICdsZWZ0JyxcbiAgICAgICAgICAgIGAke2N1cnJlbnRSZXNpemUuc3RhcnRpbmdSZWN0LmxlZnR9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgJ3RvcCcsXG4gICAgICAgICAgICBgJHtjdXJyZW50UmVzaXplLnN0YXJ0aW5nUmVjdC50b3B9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgJ2hlaWdodCcsXG4gICAgICAgICAgICBgJHtjdXJyZW50UmVzaXplLnN0YXJ0aW5nUmVjdC5oZWlnaHR9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgJ3dpZHRoJyxcbiAgICAgICAgICAgIGAke2N1cnJlbnRSZXNpemUuc3RhcnRpbmdSZWN0LndpZHRofXB4YFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSxcbiAgICAgICAgICAgICdjdXJzb3InLFxuICAgICAgICAgICAgZ2V0UmVzaXplQ3Vyc29yKGN1cnJlbnRSZXNpemUuZWRnZXMsIHJlc2l6ZUN1cnNvcnMpXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgUkVTSVpFX0dIT1NUX0VMRU1FTlRfQ0xBU1NcbiAgICAgICAgICApO1xuICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSEuc2Nyb2xsVG9wID0gY3VycmVudFJlc2l6ZS5zdGFydGluZ1JlY3RcbiAgICAgICAgICAgIC5zY3JvbGxUb3AgYXMgbnVtYmVyO1xuICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSEuc2Nyb2xsTGVmdCA9IGN1cnJlbnRSZXNpemUuc3RhcnRpbmdSZWN0XG4gICAgICAgICAgICAuc2Nyb2xsTGVmdCBhcyBudW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZXNpemVTdGFydC5lbWl0KHtcbiAgICAgICAgICAgIGVkZ2VzOiBnZXRFZGdlc0RpZmYoe1xuICAgICAgICAgICAgICBlZGdlcyxcbiAgICAgICAgICAgICAgaW5pdGlhbFJlY3RhbmdsZTogc3RhcnRpbmdSZWN0LFxuICAgICAgICAgICAgICBuZXdSZWN0YW5nbGU6IHN0YXJ0aW5nUmVjdFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByZWN0YW5nbGU6IGdldE5ld0JvdW5kaW5nUmVjdGFuZ2xlKHN0YXJ0aW5nUmVjdCwge30sIDAsIDApXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLm1vdXNldXAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmIChjdXJyZW50UmVzaXplKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbG0ubmF0aXZlRWxlbWVudCwgUkVTSVpFX0FDVElWRV9DTEFTUyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ2N1cnNvcicsICcnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsbS5uYXRpdmVFbGVtZW50LCAnY3Vyc29yJywgJycpO1xuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlc2l6ZUVuZC5lbWl0KHtcbiAgICAgICAgICAgIGVkZ2VzOiBnZXRFZGdlc0RpZmYoe1xuICAgICAgICAgICAgICBlZGdlczogY3VycmVudFJlc2l6ZSEuZWRnZXMsXG4gICAgICAgICAgICAgIGluaXRpYWxSZWN0YW5nbGU6IGN1cnJlbnRSZXNpemUhLnN0YXJ0aW5nUmVjdCxcbiAgICAgICAgICAgICAgbmV3UmVjdGFuZ2xlOiBjdXJyZW50UmVzaXplIS5jdXJyZW50UmVjdFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByZWN0YW5nbGU6IGN1cnJlbnRSZXNpemUhLmN1cnJlbnRSZWN0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZW1vdmVHaG9zdEVsZW1lbnQoKTtcbiAgICAgICAgY3VycmVudFJlc2l6ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5tb3VzZWRvd24uY29tcGxldGUoKTtcbiAgICB0aGlzLm1vdXNldXAuY29tcGxldGUoKTtcbiAgICB0aGlzLm1vdXNlbW92ZS5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFbGVtZW50Q2xhc3MoZWxtOiBFbGVtZW50UmVmLCBuYW1lOiBzdHJpbmcsIGFkZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChhZGQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxtLm5hdGl2ZUVsZW1lbnQsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsbS5uYXRpdmVFbGVtZW50LCBuYW1lKTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgUG9pbnRlckV2ZW50TGlzdGVuZXJzIHtcbiAgcHVibGljIHBvaW50ZXJEb3duOiBPYnNlcnZhYmxlPFBvaW50ZXJFdmVudENvb3JkaW5hdGU+O1xuXG4gIHB1YmxpYyBwb2ludGVyTW92ZTogT2JzZXJ2YWJsZTxQb2ludGVyRXZlbnRDb29yZGluYXRlPjtcblxuICBwdWJsaWMgcG9pbnRlclVwOiBPYnNlcnZhYmxlPFBvaW50ZXJFdmVudENvb3JkaW5hdGU+O1xuXG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBQb2ludGVyRXZlbnRMaXN0ZW5lcnM7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcblxuICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgem9uZTogTmdab25lXG4gICk6IFBvaW50ZXJFdmVudExpc3RlbmVycyB7XG4gICAgaWYgKCFQb2ludGVyRXZlbnRMaXN0ZW5lcnMuaW5zdGFuY2UpIHtcbiAgICAgIFBvaW50ZXJFdmVudExpc3RlbmVycy5pbnN0YW5jZSA9IG5ldyBQb2ludGVyRXZlbnRMaXN0ZW5lcnMoXG4gICAgICAgIHJlbmRlcmVyLFxuICAgICAgICB6b25lXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gUG9pbnRlckV2ZW50TGlzdGVuZXJzLmluc3RhbmNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXI6IFJlbmRlcmVyMiwgem9uZTogTmdab25lKSB7XG4gICAgdGhpcy5wb2ludGVyRG93biA9IG5ldyBPYnNlcnZhYmxlKFxuICAgICAgKG9ic2VydmVyOiBPYnNlcnZlcjxQb2ludGVyRXZlbnRDb29yZGluYXRlPikgPT4ge1xuICAgICAgICBsZXQgdW5zdWJzY3JpYmVNb3VzZURvd246ICgpID0+IHZvaWQ7XG4gICAgICAgIGxldCB1bnN1YnNjcmliZVRvdWNoU3RhcnQ6ICgpID0+IHZvaWQ7XG5cbiAgICAgICAgem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmVNb3VzZURvd24gPSByZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICAgJ21vdXNlZG93bicsXG4gICAgICAgICAgICAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7XG4gICAgICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgICAgICAgICAgIGV2ZW50XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICB1bnN1YnNjcmliZVRvdWNoU3RhcnQgPSByZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICAgJ3RvdWNoc3RhcnQnLFxuICAgICAgICAgICAgKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoe1xuICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICAgICAgICAgICAgICBjbGllbnRZOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFksXG4gICAgICAgICAgICAgICAgZXZlbnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICB1bnN1YnNjcmliZU1vdXNlRG93bigpO1xuICAgICAgICAgIHVuc3Vic2NyaWJlVG91Y2hTdGFydCgpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICkucGlwZShzaGFyZSgpKTtcblxuICAgIHRoaXMucG9pbnRlck1vdmUgPSBuZXcgT2JzZXJ2YWJsZShcbiAgICAgIChvYnNlcnZlcjogT2JzZXJ2ZXI8UG9pbnRlckV2ZW50Q29vcmRpbmF0ZT4pID0+IHtcbiAgICAgICAgbGV0IHVuc3Vic2NyaWJlTW91c2VNb3ZlOiAoKSA9PiB2b2lkO1xuICAgICAgICBsZXQgdW5zdWJzY3JpYmVUb3VjaE1vdmU6ICgpID0+IHZvaWQ7XG5cbiAgICAgICAgem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmVNb3VzZU1vdmUgPSByZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICAgJ21vdXNlbW92ZScsXG4gICAgICAgICAgICAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7XG4gICAgICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgICAgICAgICAgIGV2ZW50XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICB1bnN1YnNjcmliZVRvdWNoTW92ZSA9IHJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICAgICdkb2N1bWVudCcsXG4gICAgICAgICAgICAndG91Y2htb3ZlJyxcbiAgICAgICAgICAgIChldmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHtcbiAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZLFxuICAgICAgICAgICAgICAgIGV2ZW50XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmVNb3VzZU1vdmUoKTtcbiAgICAgICAgICB1bnN1YnNjcmliZVRvdWNoTW92ZSgpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICkucGlwZShzaGFyZSgpKTtcblxuICAgIHRoaXMucG9pbnRlclVwID0gbmV3IE9ic2VydmFibGUoXG4gICAgICAob2JzZXJ2ZXI6IE9ic2VydmVyPFBvaW50ZXJFdmVudENvb3JkaW5hdGU+KSA9PiB7XG4gICAgICAgIGxldCB1bnN1YnNjcmliZU1vdXNlVXA6ICgpID0+IHZvaWQ7XG4gICAgICAgIGxldCB1bnN1YnNjcmliZVRvdWNoRW5kOiAoKSA9PiB2b2lkO1xuICAgICAgICBsZXQgdW5zdWJzY3JpYmVUb3VjaENhbmNlbDogKCkgPT4gdm9pZDtcblxuICAgICAgICB6b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICB1bnN1YnNjcmliZU1vdXNlVXAgPSByZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICAgJ21vdXNldXAnLFxuICAgICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoe1xuICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgICAgICBldmVudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdW5zdWJzY3JpYmVUb3VjaEVuZCA9IHJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICAgICdkb2N1bWVudCcsXG4gICAgICAgICAgICAndG91Y2hlbmQnLFxuICAgICAgICAgICAgKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoe1xuICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSxcbiAgICAgICAgICAgICAgICBldmVudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdW5zdWJzY3JpYmVUb3VjaENhbmNlbCA9IHJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICAgICdkb2N1bWVudCcsXG4gICAgICAgICAgICAndG91Y2hjYW5jZWwnLFxuICAgICAgICAgICAgKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoe1xuICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSxcbiAgICAgICAgICAgICAgICBldmVudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlTW91c2VVcCgpO1xuICAgICAgICAgIHVuc3Vic2NyaWJlVG91Y2hFbmQoKTtcbiAgICAgICAgICB1bnN1YnNjcmliZVRvdWNoQ2FuY2VsKCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgKS5waXBlKHNoYXJlKCkpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBIb3N0TGlzdGVuZXIsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgT25EZXN0cm95LFxuICBOZ1pvbmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNpemFibGVEaXJlY3RpdmUgfSBmcm9tICcuL3Jlc2l6YWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRWRnZXMgfSBmcm9tICcuL2ludGVyZmFjZXMvZWRnZXMuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBBbiBlbGVtZW50IHBsYWNlZCBpbnNpZGUgYSBgbXdsUmVzaXphYmxlYCBkaXJlY3RpdmUgdG8gYmUgdXNlZCBhcyBhIGRyYWcgYW5kIHJlc2l6ZSBoYW5kbGVcbiAqXG4gKiBGb3IgZXhhbXBsZVxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgbXdsUmVzaXphYmxlPlxuICogICA8ZGl2IG13bFJlc2l6ZUhhbmRsZSBbcmVzaXplRWRnZXNdPVwie2JvdHRvbTogdHJ1ZSwgcmlnaHQ6IHRydWV9XCI+PC9kaXY+XG4gKiA8L2Rpdj5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXdsUmVzaXplSGFuZGxlXSdcbn0pXG5leHBvcnQgY2xhc3MgUmVzaXplSGFuZGxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFRoZSBgRWRnZXNgIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBlZGdlcyBvZiB0aGUgcGFyZW50IGVsZW1lbnQgdGhhdCBkcmFnZ2luZyB0aGUgaGFuZGxlIHdpbGwgdHJpZ2dlciBhIHJlc2l6ZSBvblxuICAgKi9cbiAgQElucHV0KClcbiAgcmVzaXplRWRnZXM6IEVkZ2VzID0ge307XG5cbiAgcHJpdmF0ZSBldmVudExpc3RlbmVyczoge1xuICAgIHRvdWNobW92ZT86ICgpID0+IHZvaWQ7XG4gICAgbW91c2Vtb3ZlPzogKCkgPT4gdm9pZDtcbiAgICBba2V5OiBzdHJpbmddOiAoKCkgPT4gdm9pZCkgfCB1bmRlZmluZWQ7XG4gIH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcmVzaXphYmxlOiBSZXNpemFibGVEaXJlY3RpdmVcbiAgKSB7fVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmVFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBbXG4gICAgJyRldmVudCcsXG4gICAgJyRldmVudC50b3VjaGVzWzBdLmNsaWVudFgnLFxuICAgICckZXZlbnQudG91Y2hlc1swXS5jbGllbnRZJ1xuICBdKVxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCcsICckZXZlbnQuY2xpZW50WCcsICckZXZlbnQuY2xpZW50WSddKVxuICBvbk1vdXNlZG93bihcbiAgICBldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQsXG4gICAgY2xpZW50WDogbnVtYmVyLFxuICAgIGNsaWVudFk6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZXZlbnRMaXN0ZW5lcnMudG91Y2htb3ZlKSB7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMudG91Y2htb3ZlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ3RvdWNobW92ZScsXG4gICAgICAgICAgKHRvdWNoTW92ZUV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2Vtb3ZlKFxuICAgICAgICAgICAgICB0b3VjaE1vdmVFdmVudCxcbiAgICAgICAgICAgICAgdG91Y2hNb3ZlRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICAgICAgICB0b3VjaE1vdmVFdmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmV2ZW50TGlzdGVuZXJzLm1vdXNlbW92ZSkge1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLm1vdXNlbW92ZSA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICdtb3VzZW1vdmUnLFxuICAgICAgICAgIChtb3VzZU1vdmVFdmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlbW92ZShcbiAgICAgICAgICAgICAgbW91c2VNb3ZlRXZlbnQsXG4gICAgICAgICAgICAgIG1vdXNlTW92ZUV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgIG1vdXNlTW92ZUV2ZW50LmNsaWVudFlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXNpemFibGUubW91c2Vkb3duLm5leHQoe1xuICAgICAgICBjbGllbnRYLFxuICAgICAgICBjbGllbnRZLFxuICAgICAgICBlZGdlczogdGhpcy5yZXNpemVFZGdlc1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hlbmQnLCBbXG4gICAgJyRldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYJyxcbiAgICAnJGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFknXG4gIF0pXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgW1xuICAgICckZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCcsXG4gICAgJyRldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZJ1xuICBdKVxuICBASG9zdExpc3RlbmVyKCdtb3VzZXVwJywgWyckZXZlbnQuY2xpZW50WCcsICckZXZlbnQuY2xpZW50WSddKVxuICBvbk1vdXNldXAoY2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy51bnN1YnNjcmliZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLnJlc2l6YWJsZS5tb3VzZXVwLm5leHQoe1xuICAgICAgICBjbGllbnRYLFxuICAgICAgICBjbGllbnRZLFxuICAgICAgICBlZGdlczogdGhpcy5yZXNpemVFZGdlc1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uTW91c2Vtb3ZlKFxuICAgIGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCxcbiAgICBjbGllbnRYOiBudW1iZXIsXG4gICAgY2xpZW50WTogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIHRoaXMucmVzaXphYmxlLm1vdXNlbW92ZS5uZXh0KHtcbiAgICAgIGNsaWVudFgsXG4gICAgICBjbGllbnRZLFxuICAgICAgZWRnZXM6IHRoaXMucmVzaXplRWRnZXMsXG4gICAgICBldmVudFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZUV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZXZlbnRMaXN0ZW5lcnMpLmZvckVhY2godHlwZSA9PiB7XG4gICAgICAodGhpcyBhcyBhbnkpLmV2ZW50TGlzdGVuZXJzW3R5cGVdKCk7XG4gICAgICBkZWxldGUgdGhpcy5ldmVudExpc3RlbmVyc1t0eXBlXTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc2l6YWJsZURpcmVjdGl2ZSB9IGZyb20gJy4vcmVzaXphYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBSZXNpemVIYW5kbGVEaXJlY3RpdmUgfSBmcm9tICcuL3Jlc2l6ZS1oYW5kbGUuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbUmVzaXphYmxlRGlyZWN0aXZlLCBSZXNpemVIYW5kbGVEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbUmVzaXphYmxlRGlyZWN0aXZlLCBSZXNpemVIYW5kbGVEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIFJlc2l6YWJsZU1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQXFDQSx5QkFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLFNBQXFCO0lBQXJCLDBCQUFBLEVBQUEsYUFBcUI7O0lBRXJCLElBQU0sSUFBSSxHQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLE9BQU8sSUFBSSxHQUFHLFNBQVMsQ0FBQztDQUN6Qjs7Ozs7Ozs7QUFFRCxpQ0FDRSxZQUErQixFQUMvQixLQUFZLEVBQ1osT0FBZSxFQUNmLE9BQWU7O0lBRWYsSUFBTSxlQUFlLEdBQXNCO1FBQ3pDLEdBQUcsRUFBRSxZQUFZLENBQUMsR0FBRztRQUNyQixNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU07UUFDM0IsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJO1FBQ3ZCLEtBQUssRUFBRSxZQUFZLENBQUMsS0FBSztLQUMxQixDQUFDO0lBRUYsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQ2IsZUFBZSxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUM7S0FDaEM7SUFDRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDaEIsZUFBZSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUM7S0FDbkM7SUFDRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUU7UUFDZCxlQUFlLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQztLQUNqQztJQUNELElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtRQUNmLGVBQWUsQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDO0tBQ2xDO0lBQ0QsZUFBZSxDQUFD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

/***/ }),

/***/ "./node_modules/calendar-utils/calendar-utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/calendar-utils/calendar-utils.js ***!
  \*******************************************************/
/*! exports provided: DAYS_OF_WEEK, SECONDS_IN_DAY, getWeekViewEventOffset, getEventsInPeriod, getWeekViewHeader, getDifferenceInDaysWithExclusions, getWeekView, getMonthView, getDayView, getDayViewHourGrid, EventValidationErrorMessage, validateEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function() { return DAYS_OF_WEEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECONDS_IN_DAY", function() { return SECONDS_IN_DAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekViewEventOffset", function() { return getWeekViewEventOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventsInPeriod", function() { return getEventsInPeriod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekViewHeader", function() { return getWeekViewHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDifferenceInDaysWithExclusions", function() { return getDifferenceInDaysWithExclusions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekView", function() { return getWeekView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthView", function() { return getMonthView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayView", function() { return getDayView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayViewHourGrid", function() { return getDayViewHourGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventValidationErrorMessage", function() { return EventValidationErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEvents", function() { return validateEvents; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var DAYS_OF_WEEK;
(function (DAYS_OF_WEEK) {
    DAYS_OF_WEEK[DAYS_OF_WEEK["SUNDAY"] = 0] = "SUNDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["MONDAY"] = 1] = "MONDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["TUESDAY"] = 2] = "TUESDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["WEDNESDAY"] = 3] = "WEDNESDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["THURSDAY"] = 4] = "THURSDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["FRIDAY"] = 5] = "FRIDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["SATURDAY"] = 6] = "SATURDAY";
})(DAYS_OF_WEEK || (DAYS_OF_WEEK = {}));
var DEFAULT_WEEKEND_DAYS = [
    DAYS_OF_WEEK.SUNDAY,
    DAYS_OF_WEEK.SATURDAY
];
var DAYS_IN_WEEK = 7;
var HOURS_IN_DAY = 24;
var MINUTES_IN_HOUR = 60;
var SECONDS_IN_DAY = 60 * 60 * 24;
function getExcludedSeconds(dateAdapter, _a) {
    var startDate = _a.startDate, seconds = _a.seconds, excluded = _a.excluded, _b = _a.precision, precision = _b === void 0 ? 'days' : _b;
    if (excluded.length < 1) {
        return 0;
    }
    var addSeconds = dateAdapter.addSeconds, getDay = dateAdapter.getDay, addDays = dateAdapter.addDays;
    var endDate = addSeconds(startDate, seconds - 1);
    var dayStart = getDay(startDate);
    var dayEnd = getDay(endDate);
    var result = 0; // Calculated in seconds
    var current = startDate;
    var _loop_1 = function () {
        var day = getDay(current);
        if (excluded.some(function (excludedDay) { return excludedDay === day; })) {
            result += calculateExcludedSeconds(dateAdapter, {
                dayStart: dayStart,
                dayEnd: dayEnd,
                day: day,
                precision: precision,
                startDate: startDate,
                endDate: endDate
            });
        }
        current = addDays(current, 1);
    };
    while (current < endDate) {
        _loop_1();
    }
    return result;
}
function calculateExcludedSeconds(dateAdapter, _a) {
    var precision = _a.precision, day = _a.day, dayStart = _a.dayStart, dayEnd = _a.dayEnd, startDate = _a.startDate, endDate = _a.endDate;
    var differenceInSeconds = dateAdapter.differenceInSeconds, endOfDay = dateAdapter.endOfDay, startOfDay = dateAdapter.startOfDay;
    if (precision === 'minutes') {
        if (day === dayStart) {
            return differenceInSeconds(endOfDay(startDate), startDate) + 1;
        }
        else if (day === dayEnd) {
            return differenceInSeconds(endDate, startOfDay(endDate)) + 1;
        }
    }
    return SECONDS_IN_DAY;
}
function getWeekViewEventSpan(dateAdapter, _a) {
    var event = _a.event, offset = _a.offset, startOfWeekDate = _a.startOfWeekDate, excluded = _a.excluded, _b = _a.precision, precision = _b === void 0 ? 'days' : _b, totalDaysInView = _a.totalDaysInView;
    var max = dateAdapter.max, differenceInSeconds = dateAdapter.differenceInSeconds, addDays = dateAdapter.addDays, endOfDay = dateAdapter.endOfDay, differenceInDays = dateAdapter.differenceInDays;
    var span = SECONDS_IN_DAY;
    var begin = max(event.start, startOfWeekDate);
    if (event.end) {
        switch (precision) {
            case 'minutes':
                span = differenceInSeconds(event.end, begin);
                break;
            default:
                span =
                    differenceInDays(addDays(endOfDay(event.end), 1), begin) *
                        SECONDS_IN_DAY;
                break;
        }
    }
    var offsetSeconds = offset * SECONDS_IN_DAY;
    var totalLength = offsetSeconds + span;
    // the best way to detect if an event is outside the week-view
    // is to check if the total span beginning (from startOfWeekDay or event start) exceeds the total days in the view
    var secondsInView = totalDaysInView * SECONDS_IN_DAY;
    if (totalLength > secondsInView) {
        span = secondsInView - offsetSeconds;
    }
    span -= getExcludedSeconds(dateAdapter, {
        startDate: begin,
        seconds: span,
        excluded: excluded,
        precision: precision
    });
    return span / SECONDS_IN_DAY;
}
function getWeekViewEventOffset(dateAdapter, _a) {
    var event = _a.event, startOfWeekDate = _a.startOfWeek, _b = _a.excluded, excluded = _b === void 0 ? [] : _b, _c = _a.precision, precision = _c === void 0 ? 'days' : _c;
    var differenceInDays = dateAdapter.differenceInDays, startOfDay = dateAdapter.startOfDay, differenceInSeconds = dateAdapter.differenceInSeconds;
    if (event.start < startOfWeekDate) {
        return 0;
    }
    var offset = 0;
    switch (precision) {
        case 'days':
            offset =
                differenceInDays(startOfDay(event.start), startOfWeekDate) *
                    SECONDS_IN_DAY;
            break;
        case 'minutes':
            offset = differenceInSeconds(event.start, startOfWeekDate);
            break;
    }
    offset -= getExcludedSeconds(dateAdapter, {
        startDate: startOfWeekDate,
        seconds: offset,
        excluded: excluded,
        precision: precision
    });
    return Math.abs(offset / SECONDS_IN_DAY);
}
function isEventIsPeriod(dateAdapter, _a) {
    var event = _a.event, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
    var isSameSecond = dateAdapter.isSameSecond;
    var eventStart = event.start;
    var eventEnd = event.end || event.start;
    if (eventStart > periodStart && eventStart < periodEnd) {
        return true;
    }
    if (eventEnd > periodStart && eventEnd < periodEnd) {
        return true;
    }
    if (eventStart < periodStart && eventEnd > periodEnd) {
        return true;
    }
    if (isSameSecond(eventStart, periodStart) ||
        isSameSecond(eventStart, periodEnd)) {
        return true;
    }
    if (isSameSecond(eventEnd, periodStart) ||
        isSameSecond(eventEnd, periodEnd)) {
        return true;
    }
    return false;
}
function getEventsInPeriod(dateAdapter, _a) {
    var events = _a.events, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
    return events.filter(function (event) {
        return isEventIsPeriod(dateAdapter, { event: event, periodStart: periodStart, periodEnd: periodEnd });
    });
}
function getWeekDay(dateAdapter, _a) {
    var date = _a.date, _b = _a.weekendDays, weekendDays = _b === void 0 ? DEFAULT_WEEKEND_DAYS : _b;
    var startOfDay = dateAdapter.startOfDay, isSameDay = dateAdapter.isSameDay, getDay = dateAdapter.getDay;
    var today = startOfDay(new Date());
    return {
        date: date,
        isPast: date < today,
        isToday: isSameDay(date, today),
        isFuture: date > today,
        isWeekend: weekendDays.indexOf(getDay(date)) > -1
    };
}
function getWeekViewHeader(dateAdapter, _a) {
    var viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _b = _a.excluded, excluded = _b === void 0 ? [] : _b, weekendDays = _a.weekendDays, _c = _a.viewStart, viewStart = _c === void 0 ? dateAdapter.startOfWeek(viewDate, { weekStartsOn: weekStartsOn }) : _c, _d = _a.viewEnd, viewEnd = _d === void 0 ? dateAdapter.addDays(viewStart, DAYS_IN_WEEK) : _d;
    var addDays = dateAdapter.addDays, getDay = dateAdapter.getDay;
    var days = [];
    var date = viewStart;
    while (date < viewEnd) {
        if (!excluded.some(function (e) { return getDay(date) === e; })) {
            days.push(getWeekDay(dateAdapter, { date: date, weekendDays: weekendDays }));
        }
        date = addDays(date, 1);
    }
    return days;
}
function getDifferenceInDaysWithExclusions(dateAdapter, _a) {
    var date1 = _a.date1, date2 = _a.date2, excluded = _a.excluded;
    var date = date1;
    var diff = 0;
    while (date < date2) {
        if (excluded.indexOf(dateAdapter.getDay(date)) === -1) {
            diff++;
        }
        date = dateAdapter.addDays(date, 1);
    }
    return diff;
}
function getAllDayWeekEvents(dateAdapter, _a) {
    var events = _a.events, excluded = _a.excluded, precision = _a.precision, absolutePositionedEvents = _a.absolutePositionedEvents, viewStart = _a.viewStart, viewEnd = _a.viewEnd, eventsInPeriod = _a.eventsInPeriod;
    var differenceInSeconds = dateAdapter.differenceInSeconds, differenceInDays = dateAdapter.differenceInDays;
    var maxRange = getDifferenceInDaysWithExclusions(dateAdapter, {
        date1: viewStart,
        date2: viewEnd,
        excluded: excluded
    });
    var totalDaysInView = differenceInDays(viewEnd, viewStart) + 1;
    var eventsMapped = eventsInPeriod
        .filter(function (event) { return event.allDay; })
        .map(function (event) {
        var offset = getWeekViewEventOffset(dateAdapter, {
            event: event,
            startOfWeek: viewStart,
            excluded: excluded,
            precision: precision
        });
        var span = getWeekViewEventSpan(dateAdapter, {
            event: event,
            offset: offset,
            startOfWeekDate: viewStart,
            excluded: excluded,
            precision: precision,
            totalDaysInView: totalDaysInView
        });
        return { event: event, offset: offset, span: span };
    })
        .filter(function (e) { return e.offset < maxRange; })
        .filter(function (e) { return e.span > 0; })
        .map(function (entry) { return ({
        event: entry.event,
        offset: entry.offset,
        span: entry.span,
        startsBeforeWeek: entry.event.start < viewStart,
        endsAfterWeek: (entry.event.end || entry.event.start) > viewEnd
    }); })
        .sort(function (itemA, itemB) {
        var startSecondsDiff = differenceInSeconds(itemA.event.start, itemB.event.start);
        if (startSecondsDiff === 0) {
            return differenceInSeconds(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
        }
        return startSecondsDiff;
    });
    var allDayEventRows = [];
    var allocatedEvents = [];
    eventsMapped.forEach(function (event, index) {
        if (allocatedEvents.indexOf(event) === -1) {
            allocatedEvents.push(event);
            var rowSpan_1 = event.span + event.offset;
            var otherRowEvents = eventsMapped
                .slice(index + 1)
                .filter(function (nextEvent) {
                if (nextEvent.offset >= rowSpan_1 &&
                    rowSpan_1 + nextEvent.span <= totalDaysInView &&
                    allocatedEvents.indexOf(nextEvent) === -1) {
                    var nextEventOffset = nextEvent.offset - rowSpan_1;
                    if (!absolutePositionedEvents) {
                        nextEvent.offset = nextEventOffset;
                    }
                    rowSpan_1 += nextEvent.span + nextEventOffset;
                    allocatedEvents.push(nextEvent);
                    return true;
                }
            });
            allDayEventRows.push({
                row: [event].concat(otherRowEvents)
            });
        }
    });
    return allDayEventRows;
}
function getWeekViewHourGrid(dateAdapter, _a) {
    var events = _a.events, viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd, weekStartsOn = _a.weekStartsOn, excluded = _a.excluded, weekendDays = _a.weekendDays, segmentHeight = _a.segmentHeight, viewStart = _a.viewStart, viewEnd = _a.viewEnd;
    var dayViewHourGrid = getDayViewHourGrid(dateAdapter, {
        viewDate: viewDate,
        hourSegments: hourSegments,
        dayStart: dayStart,
        dayEnd: dayEnd
    });
    var weekDays = getWeekViewHeader(dateAdapter, {
        viewDate: viewDate,
        weekStartsOn: weekStartsOn,
        excluded: excluded,
        weekendDays: weekendDays,
        viewStart: viewStart,
        viewEnd: viewEnd
    });
    var setHours = dateAdapter.setHours, setMinutes = dateAdapter.setMinutes, getHours = dateAdapter.getHours, getMinutes = dateAdapter.getMinutes;
    return weekDays.map(function (day) {
        var dayView = getDayView(dateAdapter, {
            events: events,
            viewDate: day.date,
            hourSegments: hourSegments,
            dayStart: dayStart,
            dayEnd: dayEnd,
            segmentHeight: segmentHeight,
            eventWidth: 1
        });
        var hours = dayViewHourGrid.map(function (hour) {
            var segments = hour.segments.map(function (segment) {
                var date = setMinutes(setHours(day.date, getHours(segment.date)), getMinutes(segment.date));
                return __assign({}, segment, { date: date });
            });
            return __assign({}, hour, { segments: segments });
        });
        return {
            hours: hours,
            date: day.date,
            events: dayView.events.map(function (event) {
                var overLappingEvents = getOverLappingDayViewEvents(dayView.events, event.top, event.top + event.height);
                var columnCount = Math.max.apply(Math, overLappingEvents.map(function (iEvent) { return iEvent.left + 1; }));
                var width = 100 / columnCount;
                return __assign({}, event, { left: event.left * width, width: width });
            })
        };
    });
}
function getWeekView(dateAdapter, _a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.precision, precision = _d === void 0 ? 'days' : _d, _e = _a.absolutePositionedEvents, absolutePositionedEvents = _e === void 0 ? false : _e, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd, weekendDays = _a.weekendDays, segmentHeight = _a.segmentHeight, _f = _a.viewStart, viewStart = _f === void 0 ? dateAdapter.startOfWeek(viewDate, { weekStartsOn: weekStartsOn }) : _f, _g = _a.viewEnd, viewEnd = _g === void 0 ? dateAdapter.endOfWeek(viewDate, { weekStartsOn: weekStartsOn }) : _g;
    if (!events) {
        events = [];
    }
    var startOfDay = dateAdapter.startOfDay, endOfDay = dateAdapter.endOfDay;
    viewStart = startOfDay(viewStart);
    viewEnd = endOfDay(viewEnd);
    var eventsInPeriod = getEventsInPeriod(dateAdapter, {
        events: events,
        periodStart: viewStart,
        periodEnd: viewEnd
    });
    var header = getWeekViewHeader(dateAdapter, {
        viewDate: viewDate,
        weekStartsOn: weekStartsOn,
        excluded: excluded,
        weekendDays: weekendDays,
        viewStart: viewStart,
        viewEnd: viewEnd
    });
    return {
        allDayEventRows: getAllDayWeekEvents(dateAdapter, {
            events: events,
            excluded: excluded,
            precision: precision,
            absolutePositionedEvents: absolutePositionedEvents,
            viewStart: viewStart,
            viewEnd: viewEnd,
            eventsInPeriod: eventsInPeriod
        }),
        period: {
            events: eventsInPeriod,
            start: header[0].date,
            end: endOfDay(header[header.length - 1].date)
        },
        hourColumns: getWeekViewHourGrid(dateAdapter, {
            events: events,
            viewDate: viewDate,
            hourSegments: hourSegments,
            dayStart: dayStart,
            dayEnd: dayEnd,
            weekStartsOn: weekStartsOn,
            excluded: excluded,
            weekendDays: weekendDays,
            segmentHeight: segmentHeight,
            viewStart: viewStart,
            viewEnd: viewEnd
        })
    };
}
function getMonthView(dateAdapter, _a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.viewStart, viewStart = _d === void 0 ? dateAdapter.startOfMonth(viewDate) : _d, _e = _a.viewEnd, viewEnd = _e === void 0 ? dateAdapter.endOfMonth(viewDate) : _e, weekendDays = _a.weekendDays;
    if (!events) {
        events = [];
    }
    var startOfWeek = dateAdapter.startOfWeek, endOfWeek = dateAdapter.endOfWeek, differenceInDays = dateAdapter.differenceInDays, startOfDay = dateAdapter.startOfDay, addHours = dateAdapter.addHours, endOfDay = dateAdapter.endOfDay, isSameMonth = dateAdapter.isSameMonth, getDay = dateAdapter.getDay, getMonth = dateAdapter.getMonth;
    var start = startOfWeek(viewStart, { weekStartsOn: weekStartsOn });
    var end = endOfWeek(viewEnd, { weekStartsOn: weekStartsOn });
    var eventsInMonth = getEventsInPeriod(dateAdapter, {
        events: events,
        periodStart: start,
        periodEnd: end
    });
    var initialViewDays = [];
    var previousDate;
    var _loop_2 = function (i) {
        // hacky fix for https://github.com/mattlewis92/angular-calendar/issues/173
        var date;
        if (previousDate) {
            date = startOfDay(addHours(previousDate, HOURS_IN_DAY));
            if (previousDate.getTime() === date.getTime()) {
                // DST change, so need to add 25 hours
                /* istanbul ignore next */
                date = startOfDay(addHours(previousDate, HOURS_IN_DAY + 1));
            }
            previousDate = date;
        }
        else {
            date = previousDate = start;
        }
        if (!excluded.some(function (e) { return getDay(date) === e; })) {
            var day = getWeekDay(dateAdapter, {
                date: date,
                weekendDays: weekendDays
            });
            var eventsInPeriod = getEventsInPeriod(dateAdapter, {
                events: eventsInMonth,
                periodStart: startOfDay(date),
                periodEnd: endOfDay(date)
            });
            day.inMonth = isSameMonth(date, viewDate);
            day.events = eventsInPeriod;
            day.badgeTotal = eventsInPeriod.length;
            initialViewDays.push(day);
        }
    };
    for (var i = 0; i < differenceInDays(end, start) + 1; i++) {
        _loop_2(i);
    }
    var days = [];
    var totalDaysVisibleInWeek = DAYS_IN_WEEK - excluded.length;
    if (totalDaysVisibleInWeek < DAYS_IN_WEEK) {
        for (var i = 0; i < initialViewDays.length; i += totalDaysVisibleInWeek) {
            var row = initialViewDays.slice(i, i + totalDaysVisibleInWeek);
            var isRowInMonth = row.some(function (day) { return getMonth(day.date) === getMonth(viewDate); });
            if (isRowInMonth) {
                days = days.concat(row);
            }
        }
    }
    else {
        days = initialViewDays;
    }
    var rows = Math.floor(days.length / totalDaysVisibleInWeek);
    var rowOffsets = [];
    for (var i = 0; i < rows; i++) {
        rowOffsets.push(i * totalDaysVisibleInWeek);
    }
    return {
        rowOffsets: rowOffsets,
        totalDaysVisibleInWeek: totalDaysVisibleInWeek,
        days: days,
        period: {
            start: days[0].date,
            end: endOfDay(days[days.length - 1].date),
            events: eventsInMonth
        }
    };
}
function getOverLappingDayViewEvents(events, top, bottom) {
    return events.filter(function (previousEvent) {
        var previousEventTop = previousEvent.top;
        var previousEventBottom = previousEvent.top + previousEvent.height;
        if (top < previousEventBottom && previousEventBottom < bottom) {
            return true;
        }
        else if (top < previousEventTop && previousEventTop < bottom) {
            return true;
        }
        else if (previousEventTop <= top && bottom <= previousEventBottom) {
            return true;
        }
        return false;
    });
}
function getDayView(dateAdapter, _a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd, eventWidth = _a.eventWidth, segmentHeight = _a.segmentHeight;
    if (!events) {
        events = [];
    }
    var setMinutes = dateAdapter.setMinutes, setHours = dateAdapter.setHours, startOfDay = dateAdapter.startOfDay, startOfMinute = dateAdapter.startOfMinute, endOfDay = dateAdapter.endOfDay, differenceInMinutes = dateAdapter.differenceInMinutes;
    var startOfView = setMinutes(setHours(startOfDay(viewDate), dayStart.hour), dayStart.minute);
    var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), dayEnd.hour), dayEnd.minute);
    var previousDayEvents = [];
    var eventsInPeriod = getEventsInPeriod(dateAdapter, {
        events: events.filter(function (event) { return !event.allDay; }),
        periodStart: startOfView,
        periodEnd: endOfView
    });
    var dayViewEvents = eventsInPeriod
        .sort(function (eventA, eventB) {
        return eventA.start.valueOf() - eventB.start.valueOf();
    })
        .map(function (event) {
        var eventStart = event.start;
        var eventEnd = event.end || eventStart;
        var startsBeforeDay = eventStart < startOfView;
        var endsAfterDay = eventEnd > endOfView;
        var hourHeightModifier = (hourSegments * segmentHeight) / MINUTES_IN_HOUR;
        var top = 0;
        if (eventStart > startOfView) {
            top += differenceInMinutes(eventStart, startOfView);
        }
        top *= hourHeightModifier;
        var startDate = startsBeforeDay ? startOfView : eventStart;
        var endDate = endsAfterDay ? endOfView : eventEnd;
        var height = differenceInMinutes(endDate, startDate);
        if (!event.end) {
            height = segmentHeight;
        }
        else {
            height *= hourHeightModifier;
        }
        var bottom = top + height;
        var overlappingPreviousEvents = getOverLappingDayViewEvents(previousDayEvents, top, bottom);
        var left = 0;
        while (overlappingPreviousEvents.some(function (previousEvent) { return previousEvent.left === left; })) {
            left += eventWidth;
        }
        var dayEvent = {
            event: event,
            height: height,
            width: eventWidth,
            top: top,
            left: left,
            startsBeforeDay: startsBeforeDay,
            endsAfterDay: endsAfterDay
        };
        previousDayEvents.push(dayEvent);
        return dayEvent;
    });
    var width = Math.max.apply(Math, dayViewEvents.map(function (event) { return event.left + event.width; }));
    var allDayEvents = getEventsInPeriod(dateAdapter, {
        events: events.filter(function (event) { return event.allDay; }),
        periodStart: startOfDay(startOfView),
        periodEnd: endOfDay(endOfView)
    });
    return {
        events: dayViewEvents,
        width: width,
        allDayEvents: allDayEvents,
        period: {
            events: eventsInPeriod,
            start: startOfView,
            end: endOfView
        }
    };
}
function getDayViewHourGrid(dateAdapter, _a) {
    var viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd;
    var setMinutes = dateAdapter.setMinutes, setHours = dateAdapter.setHours, startOfDay = dateAdapter.startOfDay, startOfMinute = dateAdapter.startOfMinute, endOfDay = dateAdapter.endOfDay, addMinutes = dateAdapter.addMinutes, addHours = dateAdapter.addHours;
    var hours = [];
    var startOfView = setMinutes(setHours(startOfDay(viewDate), dayStart.hour), dayStart.minute);
    var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), dayEnd.hour), dayEnd.minute);
    var segmentDuration = MINUTES_IN_HOUR / hourSegments;
    var startOfViewDay = startOfDay(viewDate);
    for (var i = 0; i < HOURS_IN_DAY; i++) {
        var segments = [];
        for (var j = 0; j < hourSegments; j++) {
            var date = addMinutes(addHours(startOfViewDay, i), j * segmentDuration);
            if (date >= startOfView && date < endOfView) {
                segments.push({
                    date: date,
                    isStart: j === 0
                });
            }
        }
        if (segments.length > 0) {
            hours.push({ segments: segments });
        }
    }
    return hours;
}
var EventValidationErrorMessage;
(function (EventValidationErrorMessage) {
    EventValidationErrorMessage["NotArray"] = "Events must be an array";
    EventValidationErrorMessage["StartPropertyMissing"] = "Event is missing the `start` property";
    EventValidationErrorMessage["StartPropertyNotDate"] = "Event `start` property should be a javascript date object. Do `new Date(event.start)` to fix it.";
    EventValidationErrorMessage["EndPropertyNotDate"] = "Event `end` property should be a javascript date object. Do `new Date(event.end)` to fix it.";
    EventValidationErrorMessage["EndsBeforeStart"] = "Event `start` property occurs after the `end`";
})(EventValidationErrorMessage || (EventValidationErrorMessage = {}));
function validateEvents(events, log) {
    var isValid = true;
    function isError(msg, event) {
        log(msg, event);
        isValid = false;
    }
    if (!Array.isArray(events)) {
        log(EventValidationErrorMessage.NotArray, events);
        return false;
    }
    events.forEach(function (event) {
        if (!event.start) {
            isError(EventValidationErrorMessage.StartPropertyMissing, event);
        }
        else if (!(event.start instanceof Date)) {
            isError(EventValidationErrorMessage.StartPropertyNotDate, event);
        }
        if (event.end) {
            if (!(event.end instanceof Date)) {
                isError(EventValidationErrorMessage.EndPropertyNotDate, event);
            }
            if (event.start > event.end) {
                isError(EventValidationErrorMessage.EndsBeforeStart, event);
            }
        }
    });
    return isValid;
}
//# sourceMappingURL=calendar-utils.js.map

/***/ }),

/***/ "./node_modules/positioning/dist/positioning.js":
/*!******************************************************!*\
  !*** ./node_modules/positioning/dist/positioning.js ***!
  \******************************************************/
/*! exports provided: Positioning, positionElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return Positioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return positionElements; });
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.getAllStyles = function (element) { return window.getComputedStyle(element); };
    Positioning.prototype.getStyle = function (element, prop) { return this.getAllStyles(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split('-')[0] || 'top';
        var placementSecondary = placement.split('-')[1] || 'center';
        var targetElPosition = {
            'height': targetElBCR.height || targetElement.offsetHeight,
            'width': targetElBCR.width || targetElement.offsetWidth,
            'top': 0,
            'bottom': targetElBCR.height || targetElement.offsetHeight,
            'left': 0,
            'right': targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top =
                    hostElPosition.top - (targetElement.offsetHeight + parseFloat(targetElStyles.marginBottom));
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height;
                break;
            case 'left':
                targetElPosition.left =
                    hostElPosition.left - (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width;
                break;
        }
        switch (placementSecondary) {
            case 'top':
                targetElPosition.top = hostElPosition.top;
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                targetElPosition.left = hostElPosition.left;
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    targetElPosition.left = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
                }
                else {
                    targetElPosition.top = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
                }
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    // get the availble placements of the target element in the viewport dependeing on the host element
    Positioning.prototype.getAvailablePlacements = function (hostElement, targetElement) {
        var availablePlacements = [];
        var hostElemClientRect = hostElement.getBoundingClientRect();
        var targetElemClientRect = targetElement.getBoundingClientRect();
        var html = document.documentElement;
        var windowHeight = window.innerHeight || html.clientHeight;
        var windowWidth = window.innerWidth || html.clientWidth;
        var hostElemClientRectHorCenter = hostElemClientRect.left + hostElemClientRect.width / 2;
        var hostElemClientRectVerCenter = hostElemClientRect.top + hostElemClientRect.height / 2;
        // left: check if target width can be placed between host left and viewport start and also height of target is
        // inside viewport
        if (targetElemClientRect.width < hostElemClientRect.left) {
            // check for left only
            if (hostElemClientRectVerCenter > targetElemClientRect.height / 2 &&
                windowHeight - hostElemClientRectVerCenter > targetElemClientRect.height / 2) {
                availablePlacements.splice(availablePlacements.length, 1, 'left');
            }
            // check for left-top and left-bottom
            this.setSecondaryPlacementForLeftRight(hostElemClientRect, targetElemClientRect, 'left', availablePlacements);
        }
        // top: target height is less than host top
        if (targetElemClientRect.height < hostElemClientRect.top) {
            if (hostElemClientRectHorCenter > targetElemClientRect.width / 2 &&
                windowWidth - hostElemClientRectHorCenter > targetElemClientRect.width / 2) {
                availablePlacements.splice(availablePlacements.length, 1, 'top');
            }
            this.setSecondaryPlacementForTopBottom(hostElemClientRect, targetElemClientRect, 'top', availablePlacements);
        }
        // right: check if target width can be placed between host right and viewport end and also height of target is
        // inside viewport
        if (windowWidth - hostElemClientRect.right > targetElemClientRect.width) {
            // check for right only
            if (hostElemClientRectVerCenter > targetElemClientRect.height / 2 &&
                windowHeight - hostElemClientRectVerCenter > targetElemClientRect.height / 2) {
                availablePlacements.splice(availablePlacements.length, 1, 'right');
            }
            // check for right-top and right-bottom
            this.setSecondaryPlacementForLeftRight(hostElemClientRect, targetElemClientRect, 'right', availablePlacements);
        }
        // bottom: check if there is enough space between host bottom and viewport end for target height
        if (windowHeight - hostElemClientRect.bottom > targetElemClientRect.height) {
            if (hostElemClientRectHorCenter > targetElemClientRect.width / 2 &&
                windowWidth - hostElemClientRectHorCenter > targetElemClientRect.width / 2) {
                availablePlacements.splice(availablePlacements.length, 1, 'bottom');
            }
            this.setSecondaryPlacementForTopBottom(hostElemClientRect, targetElemClientRect, 'bottom', availablePlacements);
        }
        return availablePlacements;
    };
    /**
     * check if secondary placement for left and right are available i.e. left-top, left-bottom, right-top, right-bottom
     * primaryplacement: left|right
     * availablePlacementArr: array in which available placemets to be set
     */
    Positioning.prototype.setSecondaryPlacementForLeftRight = function (hostElemClientRect, targetElemClientRect, primaryPlacement, availablePlacementArr) {
        var html = document.documentElement;
        // check for left-bottom
        if (targetElemClientRect.height <= hostElemClientRect.bottom) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-bottom');
        }
        if ((window.innerHeight || html.clientHeight) - hostElemClientRect.top >= targetElemClientRect.height) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-top');
        }
    };
    /**
     * check if secondary placement for top and bottom are available i.e. top-left, top-right, bottom-left, bottom-right
     * primaryplacement: top|bottom
     * availablePlacementArr: array in which available placemets to be set
     */
    Positioning.prototype.setSecondaryPlacementForTopBottom = function (hostElemClientRect, targetElemClientRect, primaryPlacement, availablePlacementArr) {
        var html = document.documentElement;
        // check for left-bottom
        if ((window.innerWidth || html.clientWidth) - hostElemClientRect.left >= targetElemClientRect.width) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-left');
        }
        if (targetElemClientRect.width <= hostElemClientRect.right) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-right');
        }
    };
    return Positioning;
}());

var positionService = new Positioning();
/*
 * Accept the placement array and applies the appropriate placement dependent on the viewport.
 * Returns the applied placement.
 * In case of auto placement, placements are selected in order
 *   'top', 'bottom', 'left', 'right',
 *   'top-left', 'top-right',
 *   'bottom-left', 'bottom-right',
 *   'left-top', 'left-bottom',
 *   'right-top', 'right-bottom'.
 * */
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var placementVals = Array.isArray(placement) ? placement : [placement];
    // replace auto placement with other placements
    var hasAuto = placementVals.findIndex(function (val) { return val === 'auto'; });
    if (hasAuto >= 0) {
        ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top',
            'left-bottom', 'right-top', 'right-bottom',
        ].forEach(function (obj) {
            if (placementVals.find(function (val) { return val.search('^' + obj) !== -1; }) == null) {
                placementVals.splice(hasAuto++, 1, obj);
            }
        });
    }
    // coordinates where to position
    var topVal = 0, leftVal = 0;
    var appliedPlacement;
    // get available placements
    var availablePlacements = positionService.getAvailablePlacements(hostElement, targetElement);
    var _loop_1 = function (item, index) {
        // check if passed placement is present in the available placement or otherwise apply the last placement in the
        // passed placement list
        if ((availablePlacements.find(function (val) { return val === item; }) != null) || (placementVals.length === index + 1)) {
            appliedPlacement = item;
            var pos = positionService.positionElements(hostElement, targetElement, item, appendToBody);
            topVal = pos.top;
            leftVal = pos.left;
            return "break";
        }
    };
    // iterate over all the passed placements
    for (var _i = 0, _a = toItemIndexes(placementVals); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b.item, index = _b.index;
        var state_1 = _loop_1(item, index);
        if (state_1 === "break")
            break;
    }
    targetElement.style.top = topVal + "px";
    targetElement.style.left = leftVal + "px";
    return appliedPlacement;
}
// function to get index and item of an array
function toItemIndexes(a) {
    return a.map(function (item, index) { return ({ item: item, index: index }); });
}
//# sourceMappingURL=positioning.js.map

/***/ }),

/***/ "./src/app/service/EventsSerive/events-serivce.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/EventsSerive/events-serivce.service.ts ***!
  \****************************************************************/
/*! exports provided: EventsSerivceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsSerivceService", function() { return EventsSerivceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsSerivceService = /** @class */ (function () {
    function EventsSerivceService(_httpClient) {
        this._httpClient = _httpClient;
        this.port = "10.21.1.65:8000";
        this.urlGetallApplyLeave = "http://" + this.port + "/api/leave_request";
        this.urlCreateApplyLeave = "http://" + this.port + "/api/leave_request";
        this.urlGetAllEvents = "http://" + this.port + "/api/events";
        this.urlCreateEventOneTimes = "http://" + this.port + "/api/events";
    }
    // get all apply leave data
    EventsSerivceService.prototype.getApplyLeaveData = function () {
        return this._httpClient.get(this.urlGetallApplyLeave)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // get all events data
    EventsSerivceService.prototype.getAllEvents = function () {
        return this._httpClient.get(this.urlGetAllEvents)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // create events one times
    EventsSerivceService.prototype.addEventOneTimes = function () {
        return this._httpClient.post(this.urlCreateEventOneTimes, {
            "event_title": "Testing the API_HUNG",
            "event_type_id": 2,
            "from_date": '2018-10-10 11:10:10',
            "to_date": '2018-10-10 11:10:10',
            "is_recurring": 1
        });
    };
    // create apply leave
    EventsSerivceService.prototype.createApplyLeave = function () {
        return this._httpClient.post(this.urlCreateApplyLeave, {
            "leave_status": 1,
            "emp_id": 'SE62533',
            "leave_type": 3,
            "date_applied": 4,
            "leave_from_date": '2018-10-10 11:10:10',
            "leave_to_date": '2018-10-14 11:10:10'
        });
    };
    EventsSerivceService.prototype.handleError = function (err) {
        var errorMess = "";
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly
            errorMess = 'An error occurred: ${err.error.message }';
        }
        else {
            errorMess = 'Server return code: ${err.status}, error message is: ${err.message}';
        }
        console.error(errorMess || err.body.error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMess);
    };
    EventsSerivceService.prototype.addEvent = function (event) {
        return this._httpClient.post(this.urlCreateApplyLeave, event)
            .subscribe(function (data) {
            console.log("POST Request is successful ", data);
        }, function (error) {
            console.log("Error", error);
        });
    };
    EventsSerivceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EventsSerivceService);
    return EventsSerivceService;
}());



/***/ })

}]);
//# sourceMappingURL=calendar-calendar-module~components-main-content-main-content-module.js.map