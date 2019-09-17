// ES6 Constructor
class PhoneTemplate {
    // 定義基本屬性
    constructor (brand, modal, withCamera) {
      this.brand = brand;
      this.modal = modal;
      this.withCamera = withCamera || false;
    }
    
    // 原型方法
    takePhoto () {
      if (this.withCamera) {
        console.log(this.modal + ' 照相');
      } else {
        console.log(this.modal + ' 這台沒有照相功he能');
      }
    }
    callSomeone (someone) {
      console.log('打通電話給 ' + someone);
    }
  };
  var sonyPhone = new PhoneTemplate('Sony', 'Z100', true);
  var nokiaPhone = new PhoneTemplate('Nokia', '3310', false);