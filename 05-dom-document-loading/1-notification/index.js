export default class NotificationMessage {
  static existMessage;

  constructor(
    message = '', {
      duration = 1000,
      type = 'success'
    } = {}) {
    this.message = message;
    this.duration = duration;
    this.type = type;

    this.render();
  }

  render() {
    const notificationMessage = document.createElement('div');

    notificationMessage.innerHTML = this.pattern;

    this.element = notificationMessage.firstElementChild;
  }

  get pattern() {
    return `<div class="notification ${this.type}" style="--value:${this.duration + 'ms'}">
              <div class="timer"></div>
              <div class="inner-wrapper">
                <div class="notification-header">Notification</div>
                <div class="notification-body">
                  ${this.message}
                </div>
              </div>
            </div>`;
  }

  show(target) {
    const parentElement = target ?? document.body;

    if (NotificationMessage.existMessage) {
      NotificationMessage.existMessage.remove();
    }

    NotificationMessage.existMessage = this.element;
    parentElement.append(this.element);
    setTimeout(() => this.remove(), this.duration);
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    if (this.element) {
      this.remove();
      this.element = null;
    }
  }
}
