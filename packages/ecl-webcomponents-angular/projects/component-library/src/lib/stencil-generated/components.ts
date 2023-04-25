/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@ecl/ecl-webcomponents';


@ProxyCmp({
  inputs: ['clickedItem', 'eclScript', 'styleClass', 'theme', 'withUtils']
})
@Component({
  selector: 'ecl-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['clickedItem', 'eclScript', 'styleClass', 'theme', 'withUtils'],
})
export class EclAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclAccordion extends Components.EclAccordion {}


@ProxyCmp({
  inputs: ['expanded', 'label', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-accordion-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['expanded', 'label', 'styleClass', 'theme'],
})
export class EclAccordionItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclAccordionItem extends Components.EclAccordionItem {}


@ProxyCmp({
  inputs: ['bannerTitle', 'centered', 'credit', 'ctaClicked', 'ctaLabel', 'ctaLink', 'external', 'fullWidth', 'image', 'size', 'styleClass', 'theme', 'variant']
})
@Component({
  selector: 'ecl-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['bannerTitle', 'centered', 'credit', 'ctaClicked', 'ctaLabel', 'ctaLink', 'external', 'fullWidth', 'image', 'size', 'styleClass', 'theme', 'variant'],
})
export class EclBanner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclBanner extends Components.EclBanner {}


@ProxyCmp({
  inputs: ['author', 'image', 'imageAlt', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-blockquote',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['author', 'image', 'imageAlt', 'styleClass', 'theme'],
})
export class EclBlockquote {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclBlockquote extends Components.EclBlockquote {}


@ProxyCmp({
  inputs: ['eclScript', 'minItemsRight', 'styleClass', 'theme', 'variant']
})
@Component({
  selector: 'ecl-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['eclScript', 'minItemsRight', 'styleClass', 'theme', 'variant'],
})
export class EclBreadcrumb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclBreadcrumb extends Components.EclBreadcrumb {}


@ProxyCmp({
  inputs: ['buttonAriaLabel', 'currentPage', 'ellipsis', 'path', 'styleClass', 'theme', 'variant']
})
@Component({
  selector: 'ecl-breadcrumb-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['buttonAriaLabel', 'currentPage', 'ellipsis', 'path', 'styleClass', 'theme', 'variant'],
})
export class EclBreadcrumbItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclBreadcrumbItem extends Components.EclBreadcrumbItem {}


@ProxyCmp({
  inputs: ['styleClass', 'theme', 'type', 'variant']
})
@Component({
  selector: 'ecl-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['styleClass', 'theme', 'type', 'variant'],
})
export class EclButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclButton extends Components.EclButton {}


@ProxyCmp({
  inputs: ['image', 'imageAlt', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['image', 'imageAlt', 'styleClass', 'theme'],
})
export class EclCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclCard extends Components.EclCard {}


@ProxyCmp({
  inputs: ['carouselId', 'counterLabel', 'eclScript', 'slidesNumber', 'srNavigation', 'srNext', 'srPause', 'srPlay', 'srPrevious', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['carouselId', 'counterLabel', 'eclScript', 'slidesNumber', 'srNavigation', 'srNext', 'srPause', 'srPlay', 'srPrevious', 'styleClass', 'theme'],
})
export class EclCarousel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclCarousel extends Components.EclCarousel {}


@ProxyCmp({
  inputs: ['ariaLabel', 'bannerTitle', 'bannerVariant', 'centered', 'ctaLabel', 'ctaLink', 'image', 'size', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-carousel-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'bannerTitle', 'bannerVariant', 'centered', 'ctaLabel', 'ctaLink', 'image', 'size', 'styleClass', 'theme'],
})
export class EclCarouselItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclCarouselItem extends Components.EclCarouselItem {}


@ProxyCmp({
  inputs: ['eclScript', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-category-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['eclScript', 'styleClass', 'theme'],
})
export class EclCategoryFilter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclCategoryFilter extends Components.EclCategoryFilter {}


@ProxyCmp({
  inputs: ['expanded', 'label', 'lastClicked', 'level', 'path', 'styleClass', 'subItems', 'theme']
})
@Component({
  selector: 'ecl-category-filter-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['expanded', 'label', 'lastClicked', 'level', 'path', 'styleClass', 'subItems', 'theme'],
})
export class EclCategoryFilterItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclCategoryFilterItem extends Components.EclCategoryFilterItem {}


@ProxyCmp({
  inputs: ['hasDescription', 'hasLabels', 'hasLinks', 'hasLists', 'hasSecondaryLinks', 'hasTitle', 'metaPrimary', 'metaSecondary', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-content-block',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hasDescription', 'hasLabels', 'hasLinks', 'hasLists', 'hasSecondaryLinks', 'hasTitle', 'metaPrimary', 'metaSecondary', 'styleClass', 'theme'],
})
export class EclContentBlock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclContentBlock extends Components.EclContentBlock {}


@ProxyCmp({
  inputs: ['image', 'imageAlt', 'imagePosition', 'imageSize', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-content-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['image', 'imageAlt', 'imagePosition', 'imageSize', 'styleClass', 'theme'],
})
export class EclContentItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclContentItem extends Components.EclContentItem {}


@ProxyCmp({
  inputs: ['dateTime', 'day', 'month', 'monthFull', 'styleClass', 'theme', 'variant', 'year']
})
@Component({
  selector: 'ecl-date-block',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dateTime', 'day', 'month', 'monthFull', 'styleClass', 'theme', 'variant', 'year'],
})
export class EclDateBlock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclDateBlock extends Components.EclDateBlock {}


@ProxyCmp({
  inputs: ['dateFormat', 'defaultValue', 'disabled', 'hasChanged', 'inputId', 'invalid', 'isFocused', 'name', 'placeholder', 'required', 'styleClass', 'theme', 'type', 'yearRange']
})
@Component({
  selector: 'ecl-datepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dateFormat', 'defaultValue', 'disabled', 'hasChanged', 'inputId', 'invalid', 'isFocused', 'name', 'placeholder', 'required', 'styleClass', 'theme', 'type', 'yearRange'],
})
export class EclDatepicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inputFocus', 'inputBlur', 'inputChange']);
  }
}


export declare interface EclDatepicker extends Components.EclDatepicker {

  inputFocus: EventEmitter<CustomEvent<FocusEvent>>;

  inputBlur: EventEmitter<CustomEvent<FocusEvent>>;

  inputChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['styleClass', 'theme', 'variant']
})
@Component({
  selector: 'ecl-description-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['styleClass', 'theme', 'variant'],
})
export class EclDescriptionList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclDescriptionList extends Components.EclDescriptionList {}


@ProxyCmp({
  inputs: ['items', 'styleClass', 'theme', 'type']
})
@Component({
  selector: 'ecl-description-list-definition',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['items', 'styleClass', 'theme', 'type'],
})
export class EclDescriptionListDefinition {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclDescriptionListDefinition extends Components.EclDescriptionListDefinition {}


@ProxyCmp({
  inputs: ['styleClass', 'theme']
})
@Component({
  selector: 'ecl-description-list-term',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['styleClass', 'theme'],
})
export class EclDescriptionListTerm {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclDescriptionListTerm extends Components.EclDescriptionListTerm {}


@ProxyCmp({
  inputs: ['eclScript', 'isExpanded', 'labelCollapsed', 'labelExpanded', 'styleClass', 'theme', 'withUtils']
})
@Component({
  selector: 'ecl-expandable',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['eclScript', 'isExpanded', 'labelCollapsed', 'labelExpanded', 'styleClass', 'theme', 'withUtils'],
})
export class EclExpandable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclExpandable extends Components.EclExpandable {}


@ProxyCmp({
  inputs: ['columns', 'displayIcons', 'styleClass', 'theme', 'withUtils']
})
@Component({
  selector: 'ecl-fact-figures',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['columns', 'displayIcons', 'styleClass', 'theme', 'withUtils'],
})
export class EclFactFigures {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclFactFigures extends Components.EclFactFigures {}


@ProxyCmp({
  inputs: ['icon', 'iconTransform', 'itemTitle', 'styleClass', 'theme', 'value']
})
@Component({
  selector: 'ecl-fact-figures-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'iconTransform', 'itemTitle', 'styleClass', 'theme', 'value'],
})
export class EclFactFiguresItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclFactFiguresItem extends Components.EclFactFiguresItem {}


@ProxyCmp({
  inputs: ['defaultContainerClass', 'eclScript', 'image', 'itemTitle', 'mediaCaption', 'position', 'styleClass', 'theme', 'variant', 'withUtils']
})
@Component({
  selector: 'ecl-featured-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['defaultContainerClass', 'eclScript', 'image', 'itemTitle', 'mediaCaption', 'position', 'styleClass', 'theme', 'variant', 'withUtils'],
})
export class EclFeaturedItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclFeaturedItem extends Components.EclFeaturedItem {}


@ProxyCmp({
  inputs: ['ariaLabel', 'detailMeta', 'downloadLabel', 'downloadLink', 'eclScript', 'fileTitle', 'image', 'imageAlt', 'labels', 'language', 'meta', 'styleClass', 'taxonomies', 'taxonomiesLabel', 'theme', 'variant']
})
@Component({
  selector: 'ecl-file',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'detailMeta', 'downloadLabel', 'downloadLink', 'eclScript', 'fileTitle', 'image', 'imageAlt', 'labels', 'language', 'meta', 'styleClass', 'taxonomies', 'taxonomiesLabel', 'theme', 'variant'],
})
export class EclFile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclFile extends Components.EclFile {}


@ProxyCmp({
  inputs: ['others', 'styleClass', 'theme', 'toggleLabel']
})
@Component({
  selector: 'ecl-file-translations',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['others', 'styleClass', 'theme', 'toggleLabel'],
})
export class EclFileTranslations {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclFileTranslations extends Components.EclFileTranslations {}


@ProxyCmp({
  inputs: ['downloadLabel', 'downloadLink', 'fileTitle', 'language', 'meta', 'styleClass', 'theme', 'variant']
})
@Component({
  selector: 'ecl-file-translations-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['downloadLabel', 'downloadLink', 'fileTitle', 'language', 'meta', 'styleClass', 'theme', 'variant'],
})
export class EclFileTranslationsItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclFileTranslationsItem extends Components.EclFileTranslationsItem {}


@ProxyCmp({
  inputs: ['buttonChooseLabel', 'buttonReplaceLabel', 'defaultValue', 'disabled', 'eclScript', 'helperId', 'helperText', 'inputClass', 'inputId', 'invalid', 'label', 'multiple', 'name', 'placeholder', 'required', 'styleClass', 'theme', 'type', 'width', 'withUtils']
})
@Component({
  selector: 'ecl-file-upload',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['buttonChooseLabel', 'buttonReplaceLabel', 'defaultValue', 'disabled', 'eclScript', 'helperId', 'helperText', 'inputClass', 'inputId', 'invalid', 'label', 'multiple', 'name', 'placeholder', 'required', 'styleClass', 'theme', 'type', 'width', 'withUtils'],
})
export class EclFileUpload {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclFileUpload extends Components.EclFileUpload {}


@ProxyCmp({
  inputs: ['helperId', 'helperText', 'invalid', 'invalidIcon', 'invalidText', 'label', 'labelClass', 'name', 'optionalText', 'required', 'requiredText', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-form-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['helperId', 'helperText', 'invalid', 'invalidIcon', 'invalidText', 'label', 'labelClass', 'name', 'optionalText', 'required', 'requiredText', 'styleClass', 'theme'],
})
export class EclFormGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclFormGroup extends Components.EclFormGroup {}


@ProxyCmp({
  inputs: ['closeLabel', 'counterLabel', 'counterSeparator', 'description', 'downloadLabel', 'eclScript', 'footerLinkLabel', 'footerLinkPath', 'meta', 'nextLabel', 'prevLabel', 'shareLabel', 'slidesNumber', 'styleClass', 'theme', 'viewAllLabel']
})
@Component({
  selector: 'ecl-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closeLabel', 'counterLabel', 'counterSeparator', 'description', 'downloadLabel', 'eclScript', 'footerLinkLabel', 'footerLinkPath', 'meta', 'nextLabel', 'prevLabel', 'shareLabel', 'slidesNumber', 'styleClass', 'theme', 'viewAllLabel'],
})
export class EclGallery {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclGallery extends Components.EclGallery {}


@ProxyCmp({
  inputs: ['icon', 'imageAlt', 'mediaHref', 'mediaIframeHref', 'mediaSharePath', 'meta', 'styleClass', 'theme', 'type']
})
@Component({
  selector: 'ecl-gallery-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'imageAlt', 'mediaHref', 'mediaIframeHref', 'mediaSharePath', 'meta', 'styleClass', 'theme', 'type'],
})
export class EclGalleryItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclGalleryItem extends Components.EclGalleryItem {}


@ProxyCmp({
  inputs: ['bannerTitle', 'centered', 'credit', 'ctaLabel', 'ctaLink', 'external', 'fullWidth', 'image', 'styleClass', 'theme', 'variant']
})
@Component({
  selector: 'ecl-hero-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['bannerTitle', 'centered', 'credit', 'ctaLabel', 'ctaLink', 'external', 'fullWidth', 'image', 'styleClass', 'theme', 'variant'],
})
export class EclHeroBanner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclHeroBanner extends Components.EclHeroBanner {}


@ProxyCmp({
  inputs: ['color', 'icon', 'path', 'size', 'sprite', 'styleClass', 'theme', 'transform']
})
@Component({
  selector: 'ecl-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'icon', 'path', 'size', 'sprite', 'styleClass', 'theme', 'transform'],
})
export class EclIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclIcon extends Components.EclIcon {}


@ProxyCmp({
  inputs: ['eclScript', 'inpageId', 'inpageTitle', 'styleClass', 'theme', 'withUtils']
})
@Component({
  selector: 'ecl-inpage-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['eclScript', 'inpageId', 'inpageTitle', 'styleClass', 'theme', 'withUtils'],
})
export class EclInpageNavigation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclInpageNavigation extends Components.EclInpageNavigation {}


@ProxyCmp({
  inputs: ['path', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-inpage-navigation-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['path', 'styleClass', 'theme'],
})
export class EclInpageNavigationItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclInpageNavigationItem extends Components.EclInpageNavigationItem {}


@ProxyCmp({
  inputs: ['defaultValue', 'disabled', 'eclScript', 'hasChanged', 'helperId', 'helperText', 'inputClass', 'inputId', 'invalid', 'isFocused', 'label', 'name', 'placeholder', 'required', 'styleClass', 'theme', 'type', 'width']
})
@Component({
  selector: 'ecl-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['defaultValue', 'disabled', 'eclScript', 'hasChanged', 'helperId', 'helperText', 'inputClass', 'inputId', 'invalid', 'isFocused', 'label', 'name', 'placeholder', 'required', 'styleClass', 'theme', 'type', 'width'],
})
export class EclInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inputFocus', 'inputBlur', 'inputChange']);
  }
}


export declare interface EclInput extends Components.EclInput {

  inputFocus: EventEmitter<CustomEvent<FocusEvent>>;

  inputBlur: EventEmitter<CustomEvent<FocusEvent>>;

  inputChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['styleClass', 'theme', 'variant']
})
@Component({
  selector: 'ecl-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['styleClass', 'theme', 'variant'],
})
export class EclLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclLabel extends Components.EclLabel {}


@ProxyCmp({
  inputs: ['active', 'langCode', 'language', 'path', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-language-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'langCode', 'language', 'path', 'styleClass', 'theme'],
})
export class EclLanguageItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclLanguageItem extends Components.EclLanguageItem {}


@ProxyCmp({
  inputs: ['ariaLabel', 'external', 'name', 'path', 'styleClass', 'theme', 'titleAttr', 'variant']
})
@Component({
  selector: 'ecl-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'external', 'name', 'path', 'styleClass', 'theme', 'titleAttr', 'variant'],
})
export class EclLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclLink extends Components.EclLink {}


@ProxyCmp({
  inputs: ['column', 'styleClass', 'theme', 'variant', 'zebra']
})
@Component({
  selector: 'ecl-list-illustration',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['column', 'styleClass', 'theme', 'variant', 'zebra'],
})
export class EclListIllustration {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclListIllustration extends Components.EclListIllustration {}


@ProxyCmp({
  inputs: ['icon', 'image', 'imageAlt', 'itemTitle', 'squareImage', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-list-illustration-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'image', 'imageAlt', 'itemTitle', 'squareImage', 'styleClass', 'theme'],
})
export class EclListIllustrationItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclListIllustrationItem extends Components.EclListIllustrationItem {}


@ProxyCmp({
  inputs: ['alt', 'description', 'eclScript', 'embeddedMedia', 'fullWidth', 'image', 'ratio', 'sources', 'styleClass', 'theme', 'tracks', 'withUtils']
})
@Component({
  selector: 'ecl-media-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'description', 'eclScript', 'embeddedMedia', 'fullWidth', 'image', 'ratio', 'sources', 'styleClass', 'theme', 'tracks', 'withUtils'],
})
export class EclMediaContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclMediaContainer extends Components.EclMediaContainer {}


@ProxyCmp({
  inputs: ['closeLabel', 'eclScript', 'messageTitle', 'styleClass', 'theme', 'variant', 'withClose']
})
@Component({
  selector: 'ecl-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closeLabel', 'eclScript', 'messageTitle', 'styleClass', 'theme', 'variant', 'withClose'],
})
export class EclMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclMessage extends Components.EclMessage {}


@ProxyCmp({
  inputs: ['column', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-navigation-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['column', 'styleClass', 'theme'],
})
export class EclNavigationList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclNavigationList extends Components.EclNavigationList {}


@ProxyCmp({
  inputs: ['border', 'image', 'imageAlt', 'itemTitle', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-navigation-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['border', 'image', 'imageAlt', 'itemTitle', 'styleClass', 'theme'],
})
export class EclNavigationListItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclNavigationListItem extends Components.EclNavigationListItem {}


@ProxyCmp({
  inputs: ['counterLabel', 'eclScript', 'srNext', 'srPause', 'srPrev', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-news-ticker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['counterLabel', 'eclScript', 'srNext', 'srPause', 'srPrev', 'styleClass', 'theme'],
})
export class EclNewsTicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclNewsTicker extends Components.EclNewsTicker {}


@ProxyCmp({
  inputs: ['path', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-news-ticker-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['path', 'styleClass', 'theme'],
})
export class EclNewsTickerItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclNewsTickerItem extends Components.EclNewsTickerItem {}


@ProxyCmp({
  inputs: ['bannerTitle', 'centered', 'credit', 'ctaLabel', 'ctaLink', 'external', 'fullWidth', 'image', 'styleClass', 'theme', 'variant']
})
@Component({
  selector: 'ecl-page-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['bannerTitle', 'centered', 'credit', 'ctaLabel', 'ctaLink', 'external', 'fullWidth', 'image', 'styleClass', 'theme', 'variant'],
})
export class EclPageBanner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclPageBanner extends Components.EclPageBanner {}


@ProxyCmp({
  inputs: ['headerTitle', 'image', 'meta', 'overlay', 'styleClass', 'theme', 'thumbnail', 'thumbnailAlt', 'variant']
})
@Component({
  selector: 'ecl-page-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['headerTitle', 'image', 'meta', 'overlay', 'styleClass', 'theme', 'thumbnail', 'thumbnailAlt', 'variant'],
})
export class EclPageHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclPageHeader extends Components.EclPageHeader {}


@ProxyCmp({
  inputs: ['styleClass', 'theme']
})
@Component({
  selector: 'ecl-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['styleClass', 'theme'],
})
export class EclPagination {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclPagination extends Components.EclPagination {}


@ProxyCmp({
  inputs: ['ariaLabel', 'current', 'next', 'path', 'previous', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-pagination-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'current', 'next', 'path', 'previous', 'styleClass', 'theme'],
})
export class EclPaginationItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclPaginationItem extends Components.EclPaginationItem {}


@ProxyCmp({
  inputs: ['image', 'imageAlt', 'imgClass', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-picture',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['image', 'imageAlt', 'imgClass', 'styleClass', 'theme'],
})
export class EclPicture {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclPicture extends Components.EclPicture {}


@ProxyCmp({
  inputs: ['eclScript', 'icon', 'iconSize', 'iconSprite', 'itemId', 'list', 'styleClass', 'theme', 'toggleLabel']
})
@Component({
  selector: 'ecl-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['eclScript', 'icon', 'iconSize', 'iconSprite', 'itemId', 'list', 'styleClass', 'theme', 'toggleLabel'],
})
export class EclPopover {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclPopover extends Components.EclPopover {}


@ProxyCmp({
  inputs: ['icon', 'iconSize', 'iconSprite', 'path', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-popover-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'iconSize', 'iconSprite', 'path', 'styleClass', 'theme'],
})
export class EclPopoverItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclPopoverItem extends Components.EclPopoverItem {}


@ProxyCmp({
  inputs: ['defaultValue', 'disabled', 'eclScript', 'hasChanged', 'helperId', 'helperText', 'inputClass', 'inputId', 'invalid', 'isFocused', 'label', 'max', 'min', 'name', 'placeholder', 'required', 'step', 'styleClass', 'theme', 'valueLabel', 'width']
})
@Component({
  selector: 'ecl-range',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['defaultValue', 'disabled', 'eclScript', 'hasChanged', 'helperId', 'helperText', 'inputClass', 'inputId', 'invalid', 'isFocused', 'label', 'max', 'min', 'name', 'placeholder', 'required', 'step', 'styleClass', 'theme', 'valueLabel', 'width'],
})
export class EclRange {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inputFocus', 'inputBlur', 'inputChange']);
  }
}


export declare interface EclRange extends Components.EclRange {

  inputFocus: EventEmitter<CustomEvent<FocusEvent>>;

  inputBlur: EventEmitter<CustomEvent<FocusEvent>>;

  inputChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['disabled', 'required', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-rating-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'required', 'styleClass', 'theme'],
})
export class EclRatingField {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclRatingField extends Components.EclRatingField {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'hasChanged', 'icon', 'iconFilled', 'isFocused', 'itemId', 'label', 'name', 'required', 'styleClass', 'theme', 'value']
})
@Component({
  selector: 'ecl-rating-star',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'hasChanged', 'icon', 'iconFilled', 'isFocused', 'itemId', 'label', 'name', 'required', 'styleClass', 'theme', 'value'],
})
export class EclRatingStar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inputFocus', 'inputBlur', 'inputChange']);
  }
}


export declare interface EclRatingStar extends Components.EclRatingStar {

  inputFocus: EventEmitter<CustomEvent<FocusEvent>>;

  inputBlur: EventEmitter<CustomEvent<FocusEvent>>;

  inputChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['buttonAriaLabel', 'buttonLabel', 'disabled', 'helperId', 'helperText', 'inputId', 'invalid', 'invalidText', 'label', 'name', 'placeholder', 'required', 'styleClass', 'theme', 'type', 'width']
})
@Component({
  selector: 'ecl-search-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['buttonAriaLabel', 'buttonLabel', 'disabled', 'helperId', 'helperText', 'inputId', 'invalid', 'invalidText', 'label', 'name', 'placeholder', 'required', 'styleClass', 'theme', 'type', 'width'],
})
export class EclSearchForm {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclSearchForm extends Components.EclSearchForm {}


@ProxyCmp({
  inputs: ['disabled', 'eclScript', 'hasChanged', 'invalid', 'isFocused', 'multiple', 'multipleAllText', 'multipleClearAllText', 'multipleCloseText', 'multiplePlaceholder', 'multipleSearchNoResultsText', 'multipleSearchText', 'name', 'required', 'selectId', 'styleClass', 'theme', 'width']
})
@Component({
  selector: 'ecl-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'eclScript', 'hasChanged', 'invalid', 'isFocused', 'multiple', 'multipleAllText', 'multipleClearAllText', 'multipleCloseText', 'multiplePlaceholder', 'multipleSearchNoResultsText', 'multipleSearchText', 'name', 'required', 'selectId', 'styleClass', 'theme', 'width'],
})
export class EclSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inputFocus', 'inputBlur', 'inputChange']);
  }
}


export declare interface EclSelect extends Components.EclSelect {

  inputFocus: EventEmitter<CustomEvent<FocusEvent>>;

  inputBlur: EventEmitter<CustomEvent<FocusEvent>>;

  inputChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['closeLabel', 'eclScript', 'euLabel', 'langCode', 'language', 'languageAriaLabel', 'languageBlock', 'languageId', 'languageTitle', 'loginBlock', 'loginLink', 'loginText', 'logoAlt', 'logoTitle', 'nonEuLabel', 'searchBlock', 'searchPlaceholder', 'searchText', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-site-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closeLabel', 'eclScript', 'euLabel', 'langCode', 'language', 'languageAriaLabel', 'languageBlock', 'languageId', 'languageTitle', 'loginBlock', 'loginLink', 'loginText', 'logoAlt', 'logoTitle', 'nonEuLabel', 'searchBlock', 'searchPlaceholder', 'searchText', 'styleClass', 'theme'],
})
export class EclSiteHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclSiteHeader extends Components.EclSiteHeader {}


@ProxyCmp({
  inputs: ['description', 'styleClass', 'theme', 'variant']
})
@Component({
  selector: 'ecl-social-media-follow',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['description', 'styleClass', 'theme', 'variant'],
})
export class EclSocialMediaFollow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclSocialMediaFollow extends Components.EclSocialMediaFollow {}


@ProxyCmp({
  inputs: ['icon', 'sharePath', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-social-media-follow-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'sharePath', 'styleClass', 'theme'],
})
export class EclSocialMediaFollowItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclSocialMediaFollowItem extends Components.EclSocialMediaFollowItem {}


@ProxyCmp({
  inputs: ['description', 'styleClass', 'theme', 'variant']
})
@Component({
  selector: 'ecl-social-media-share',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['description', 'styleClass', 'theme', 'variant'],
})
export class EclSocialMediaShare {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclSocialMediaShare extends Components.EclSocialMediaShare {}


@ProxyCmp({
  inputs: ['icon', 'sharePath', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-social-media-share-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'sharePath', 'styleClass', 'theme'],
})
export class EclSocialMediaShareItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclSocialMediaShareItem extends Components.EclSocialMediaShareItem {}


@ProxyCmp({
  inputs: ['centered', 'overlay', 'size', 'styleClass', 'theme', 'variant', 'visible']
})
@Component({
  selector: 'ecl-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['centered', 'overlay', 'size', 'styleClass', 'theme', 'variant', 'visible'],
})
export class EclSpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclSpinner extends Components.EclSpinner {}


@ProxyCmp({
  inputs: ['external', 'styleClass', 'theme', 'toBeRemoved', 'variant']
})
@Component({
  selector: 'ecl-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['external', 'styleClass', 'theme', 'toBeRemoved', 'variant'],
})
export class EclTag {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclTag extends Components.EclTag {}


@ProxyCmp({
  inputs: ['disabled', 'hasChanged', 'invalid', 'isFocused', 'name', 'placeholder', 'required', 'rows', 'styleClass', 'textareaId', 'theme', 'width']
})
@Component({
  selector: 'ecl-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'hasChanged', 'invalid', 'isFocused', 'name', 'placeholder', 'required', 'rows', 'styleClass', 'textareaId', 'theme', 'width'],
})
export class EclTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inputFocus', 'inputBlur', 'inputChange']);
  }
}


export declare interface EclTextarea extends Components.EclTextarea {

  inputFocus: EventEmitter<CustomEvent<FocusEvent>>;

  inputBlur: EventEmitter<CustomEvent<FocusEvent>>;

  inputChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['eclScript', 'styleClass', 'theme']
})
@Component({
  selector: 'ecl-timeline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['eclScript', 'styleClass', 'theme'],
})
export class EclTimeline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclTimeline extends Components.EclTimeline {}


@ProxyCmp({
  inputs: ['itemTitle', 'label', 'styleClass', 'theme', 'type']
})
@Component({
  selector: 'ecl-timeline-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['itemTitle', 'label', 'styleClass', 'theme', 'type'],
})
export class EclTimelineItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EclTimelineItem extends Components.EclTimelineItem {}


