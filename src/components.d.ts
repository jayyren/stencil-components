/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface MyComponent {
      'first': string;
      'last': string;
    }
  }

  interface HTMLMyComponentElement extends StencilComponents.MyComponent, HTMLStencilElement {}

  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
  }
  interface ElementTagNameMap {
    'my-component': HTMLMyComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-component': JSXElements.MyComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface MyComponentAttributes extends HTMLAttributes {
      'first'?: string;
      'last'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface UiModal {
      'content': string;
      'open': () => void;
      'title': string;
    }
  }

  interface HTMLUiModalElement extends StencilComponents.UiModal, HTMLStencilElement {}

  var HTMLUiModalElement: {
    prototype: HTMLUiModalElement;
    new (): HTMLUiModalElement;
  };
  interface HTMLElementTagNameMap {
    'ui-modal': HTMLUiModalElement;
  }
  interface ElementTagNameMap {
    'ui-modal': HTMLUiModalElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ui-modal': JSXElements.UiModalAttributes;
    }
  }
  namespace JSXElements {
    export interface UiModalAttributes extends HTMLAttributes {
      'content'?: string;
      'title'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface OuterBox {

    }
  }

  interface HTMLOuterBoxElement extends StencilComponents.OuterBox, HTMLStencilElement {}

  var HTMLOuterBoxElement: {
    prototype: HTMLOuterBoxElement;
    new (): HTMLOuterBoxElement;
  };
  interface HTMLElementTagNameMap {
    'outer-box': HTMLOuterBoxElement;
  }
  interface ElementTagNameMap {
    'outer-box': HTMLOuterBoxElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'outer-box': JSXElements.OuterBoxAttributes;
    }
  }
  namespace JSXElements {
    export interface OuterBoxAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface UiBackdrop {

    }
  }

  interface HTMLUiBackdropElement extends StencilComponents.UiBackdrop, HTMLStencilElement {}

  var HTMLUiBackdropElement: {
    prototype: HTMLUiBackdropElement;
    new (): HTMLUiBackdropElement;
  };
  interface HTMLElementTagNameMap {
    'ui-backdrop': HTMLUiBackdropElement;
  }
  interface ElementTagNameMap {
    'ui-backdrop': HTMLUiBackdropElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ui-backdrop': JSXElements.UiBackdropAttributes;
    }
  }
  namespace JSXElements {
    export interface UiBackdropAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;