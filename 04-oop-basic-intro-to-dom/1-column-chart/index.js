
export default class ColumnChart {
  chartHeight = 50;
  elements = {};

  constructor({
                data = [],
                label = '',
                link = '',
                value = 0
              } = {}) {
    this.data = data;
    this.label = label;
    this.link = link;
    this.value = value;

    this.render();
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = this.pattern;

    this.element = element.firstElementChild;

    if (this.data.length) {
      this.element.classList.remove('column-chart_loading');
    }

    this.elements = this.getElements(this.element);
  }

  get pattern() {
    return `
      <div class="column-chart column-chart_loading " style="--chart-height: ${this.chartHeight}">
        <div class="column-chart__title">
          Total ${this.label}
          ${this.getLink()}
        </div>
        <div class="column-chart__container">
          <div data-element="header" class="column-chart__header">
            ${this.value}
          </div>
          <div data-element="body" class="column-chart__chart">
            ${this.getColumn(this.data)}
          </div>
        </div>
      </div>
    `;
  }

  getLink() {
    return this.link ? `<a class="column-chart__link" href="${this.link}">View all</a>` : '';
  }

  getColumn(data) {
    const max = Math.max(...data);
    const dimension = this.chartHeight / max;

    return data.map(item => {
      const percent = (item / max * 100).toFixed(0);
      return `<div style="--value: ${Math.floor(item * dimension)}" data-tooltip="${percent}%"></div>`;
    }).join('');
  }

  remove () {
    this.element.remove();
  }

  getElements(element) {
    const elements = element.querySelectorAll('[data-element]');

    return [...elements].reduce((accum, subElement) => {
      accum[subElement.dataset.element] = subElement;

      return accum;
    }, {});
  }

  update(data) {
    this.elements.body.innerHTML = this.getColumn(data);
  }

  destroy() {
    this.remove();
    this.element = null;
    this.elements = {};
  }
}
