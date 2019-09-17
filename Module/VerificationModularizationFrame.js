; (function (global, $, factory) {
    // 'new' an object
    var Verification = function (addErrorMsg, showErrorMsg) {
        return new Verification.init(addErrorMsg, showErrorMsg);
    }

    // prototype holds methods (to save memory space)
    Verification.prototype = {
        Push: function (verification) {
            if (factory.IVerification.prototype.isPrototypeOf(verification)) {
                this.verificationsArray.push(verification);
            }
            else {
                throw "傳入非驗證模組";
            }
        },

        Verify: function () {
            var self = this;
            self.hasError = false;
            $.each(self.verificationsArray, function () {
                if (this.Check) {
                    var errorObject = this.Check();
                    if (errorObject) {
                        self.hasError = true;
                        if (Array.isArray(errorObject)) {
                            for (var data in errorObject) {
                                self.addErrorMsg(errorObject[data].ErrorMsg, errorObject[data].Element);
                            }
                        }
                        else {
                            self.addErrorMsg(errorObject.ErrorMsg, errorObject.Element);
                        }
                    }
                }
            });

            if (self.hasError) {
                self.Show();
                return false;
            }
            return true;
        },
        Show: function () {
            this.showErrorMsg();
        },
    };

    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    Verification.init = function (addErrorMsg, showErrorMsg) {
        var self = this;
        self.verificationsArray = [];
        self.hasError = false;

        self.addErrorMsg = addErrorMsg || '';
        self.showErrorMsg = showErrorMsg || '';
    }

    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Verification.init.prototype = Verification.prototype;

    // attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers
    global.Verification = global.$V = Verification;

    global.$NotNull = factory.NotNull;
    global.$MaxLength = factory.MaxLength;
    global.$RegExpFormat = factory.RegExpFormat;
    global.$ENameRegExp = factory.ENameRegExp;

}(global, '', function () {
    var Verification = function () { }

    ///Verify Interface
    Verification.IVerification = function (errorMsg, element) {
        var self = this;
        self.ErrorMsg = errorMsg;
        self.Element = element;
    }

    ///定義Factory
    Verification.NotNull = function (errorMsg, element) {
        return new Verification.checkNotNull(errorMsg, element);
    }
    Verification.MaxLength = function (errorMsg, element) {
        return new Verification.CheckMaxLength(errorMsg, element);
    }
    Verification.RegExpFormat = function (errorMsg, element, regExp) {
        return new Verification.CheckRegularExpressionFormat(errorMsg, element, regExp);
    }
    Verification.ENameRegExp = function (errorMsg, element) {
        return new Verification.CheckEnglishNameRegularExpressionFormat(errorMsg, element);
    }

    ///---錯誤動作---
    ///檢查是否為空
    Verification.checkNotNull = function (errorMsg, element) {
        Verification.IVerification.apply(this, [errorMsg, element]);
    }
    Verification.checkNotNull.prototype = Object.create(Verification.IVerification.prototype);
    Verification.checkNotNull.prototype.Check = function () {
        if (typeof (this.Element) === "object") {
            var addError = true;
            if (this.Element.attr('type') === "radio") {
                $.each(this.Element, function (item) {
                    if (this.checked) {
                        addError = false;
                        return this;
                    }
                });
            }
            else {
                if (this.Element.is('input')) {
                    this.Element.val($.trim(this.Element.val()));
                }
                if (this.Element.val().length > 0) {
                    addError = false;
                }
            }

            if (addError) {
                return this;
            }
        }
    };

    ///檢查最大長度
    Verification.CheckMaxLength = function (errorMsg, element, maxLength) {
        Verification.IVerification.apply(this, [errorMsg, element]);
        this.MaxLength = maxLength;
    }
    Verification.CheckMaxLength.prototype = Object.create(Verification.IVerification.prototype);
    Verification.CheckMaxLength.prototype.Check = function () {
        if (typeof (this.Element) === "object" && this.Element.attr('maxlength')) {
            var strLength = this.Element.attr('tmplength') || this.Element.val().length;
            var maxLength = this.MaxLength || this.Element.attr('maxlength');
            this.Element.val($.trim(this.Element.val()));
            if (+strLength > +maxLength) {
                return this;
            }
        }
    };

    ///正規化檢查
    Verification.CheckRegularExpressionFormat = function (errorMsg, element, regExp) {
        Verification.IVerification.apply(this, [errorMsg, element]);
        this.RegExp = regExp;
    }
    Verification.CheckRegularExpressionFormat.prototype = Object.create(Verification.IVerification.prototype);
    Verification.CheckRegularExpressionFormat.prototype.Check = function () {
        var outThis = this;
        var checkIndex = 1;
        var errors = [];//驗證錯誤element
        if (typeof (this.Element) === "object") {
            $.each(this.Element, function () {
                if ($(this).val().length > 0) {
                    $(this).val($.trim($(this).val()));
                    if (!outThis.RegExp.test($(this).val())) {
                        if (outThis.Element.length == 1) {
                            errors.push(outThis);
                        }
                        else {
                            errors.push(Verification.RegExpFormat("第" + checkIndex + "筆 " + outThis.ErrorMsg, $(this)));
                        }
                    }
                }
                checkIndex++;
            });
            return (errors.length > 0) ? errors : false;
        }
    };

    ///英文名子檢查
    Verification.CheckEnglishNameRegularExpressionFormat = function (errorMsg, element) {
        Verification.CheckRegularExpressionFormat.apply(this, [errorMsg, element, /^[a-zA-Z]+$/]);
    }
    Verification.CheckEnglishNameRegularExpressionFormat.prototype = Object.create(Verification.CheckRegularExpressionFormat.prototype);
    Verification.CheckEnglishNameRegularExpressionFormat.prototype.Check = function () {
        var outThis = this;
        var checkIndex = 1;
        var errors = [];//驗證錯誤element
        if (typeof (this.Element) === "object") {
            $.each(this.Element, function () {
                if ($(this).val().length > 0) {
                    $(this).val($.trim($(this).val()));
                    var self = this;
                    $.each($(this).val().split(" "), function () {
                        if (!outThis.RegExp.test(this)) {
                            if (outThis.Element.length == 1) {
                                errors.push(outThis);
                            }
                            else {
                                errors.push(Verification.RegExpFormat("第" + checkIndex + "筆 " + outThis.ErrorMsg, $(self)));
                            }
                            return;
                        }
                    });
                }
                checkIndex++;
            });
            return (errors.length > 0) ? errors : false;
        }
    };

    return Verification;
}()));