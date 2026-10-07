/**
 * Accessor member fixture.
 * @tag accessor-members
 */
export class AccessorMembers extends HTMLElement {
  /**
   * Read-only computed label.
   * @returns {string}
   */
  get label() {
    return "ready";
  }

  /**
   * Read/write value.
   * @returns {string}
   */
  get value() {
    return this._value;
  }

  /** @param {string} value */
  set value(value) {
    this._value = value;
  }

  _value = "";
}

customElements.define("accessor-members", AccessorMembers);
