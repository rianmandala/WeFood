import '../views/component/app-toast';

const TOAST = document.createElement('app-toast');
let autoCloseToast;
const ToastHelper = {
  init({ message, background }) {
    // eslint-disable-next-line no-param-reassign
    TOAST.attributeToast = {
      message,
      background,
    };
    if (!document.querySelector('app-toast')) {
      document.body.appendChild(TOAST);
    }

    this._openToast();
    if (autoCloseToast) {
      clearTimeout(autoCloseToast);
    }
    autoCloseToast = setTimeout(() => {
      this._closeToast();
      clearTimeout(autoCloseToast);
    }, 2000);
  },

  _openToast() {
    if (this._isToastOpen()) {
      this._closeToast();
    }
    document.querySelector('app-toast .toast').classList.remove('close');
    document.querySelector('app-toast .toast').classList.add('open');
  },

  _closeToast() {
    document.querySelector('app-toast .toast').classList.remove('open');
    document.querySelector('app-toast .toast').classList.add('close');
  },

  _isToastOpen() {
    return document.querySelector('app-toast .open');
  },
};

export default ToastHelper;
