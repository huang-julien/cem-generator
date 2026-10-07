/**
 * Standard tags fixture.
 * @tag standard-tags-element
 * @summary Compact summary for quick docs.
 * @deprecated Use BetterElement instead.
 * @attr {boolean} disabled - disables the element
 * @attribute {string} mode - mode description
 * @slot - default slot description
 * @slot container - named slot description
 * @cssprop {<color>} --text-color - Controls text color
 * @cssproperty {<length>} [--background-color=red] - Controls background color
 * @cssprop --font - Controls font shorthand
 * @cssprop {<length> | <percentage>} --size-range - Controls size range
 * @cssprop {<length>+} --spacing-list - Controls spacing list
 * @cssprop {<color>#} --paint-list - Controls paint list
 * @cssprop {*} --any-token - Controls arbitrary token
 * @cssprop {small | medium | large} --scale-token - Controls scale token
 * @cssprop {string} --typed-string - Should drop TypeScript string
 * @cssprop {Color} --typed-color - Should drop TypeScript type
 * @cssprop {'a' | 'b'} --typed-union - Should drop TypeScript union
 * @cssprop {number[]} --typed-array - Should drop TypeScript array
 * @cssprop {Array<string>} --typed-generic - Should drop TypeScript generic
 * @csspart bar - Styles the color of bar
 * @cssState open - reflects internal open state
 * @fires custom-event - emitted when work is done
 * @event {{ item: StandardTagsElement }} typed-event - typed event example
 * @prop {string} externalTitle - property from JSDoc only
 * @since 2.0.0
 * @license MIT
 * @status beta - not ready for production
 * @dependency icon
 * @dependency button
 */
export class StandardTagsElement extends HTMLElement {
  static get observedAttributes() {
    return ["disabled", "mode"];
  }

  /**
   * @summary Displayed user-facing name
   * @attribute
   * @default fallback-name
   */
  displayName;

  /**
   * @summary Runs action
   * @deprecated Use runV2 instead.
   * @group actions
   */
  doWork(input, ...rest) {
    return input + String(rest.length);
  }

  /**
   * @attr temp-hidden
   * @internal
   */
  hiddenProp;

  /**
   * @summary Hidden internal counter (ES private field).
   */
  #internalCount = 0;

  /**
   * @summary Internal flag (underscore-prefixed, standard member).
   */
  _internalFlag = true;

  /** @summary Auto-detected default from initializer. */
  counter = 3;

  /** @summary Auto-detected default from string literal initializer. */
  label = "primary";

  /** @summary Increments the private counter. */
  #increment() {
    this.#internalCount += 1;
  }
}

customElements.define("standard-tags-element", StandardTagsElement);
