class CallController {
  #currentCall = null;

  #callHistory = [];

  constructor() {
    this.#trackCallStatus();
  }

  startCall(phoneNumber, abName, id) {
    console.log('startCall start');
    if (this.#currentCall) {
      console.warn('You currently no call!');
      return this.#currentCall;
    }

    this.#currentCall = new Call(phoneNumber, abName, id);
  }

  #endCall() {
    if (!this.#currentCall) {
      console.warn('Currect call is not exist 404');
      return null;
    }

    this.#callHistory.push(Object.freeze(this.#currentCall));
    this.#currentCall = null;
  }

  endCallByCaller() {
    if (!this.#currentCall) {
      console.warn('Currect call is not exist 404');
      return null;
    }

    this.#currentCall.endCallOutside();
    this.#callHistory.push(Object.freeze(this.#currentCall));
    this.#currentCall = null;
  }

  #trackCallStatus() {
    Call.addChangeStatusListener((callStatus) => {
      if (callStatus === Call.CALL_STATUSES.disconnect || callStatus === Call.CALL_STATUSES.rejected) {
        this.#endCall();
      }
    });
  }

  get currentCall() {
    return this.#currentCall;
  }

  get callHistory() {
    return this.#callHistory;
  }
}

// const callController = new CallController();
//
// callController.startCall('1111');
// callController.endCallByCaller()
// callController.startCall('1111')
// callController.endCallByCaller()
// callController.startCall('1111')
// callController.endCallByCaller()
// callController.startCall('1111')
// callController.endCallByCaller()
// console.log('----------------------------------')
// callController.startCall('1111')
