function Test1() {
    var count = 0;
    function AddCount() {
        count++;
        console.log(count);
    }

    return AddCount;
}


// var InitCount = Test1();
// InitCount();//1
// InitCount();//2
// InitCount();//3
// InitCount();//4
// InitCount();//5


// var InitCount2 = Test1();
// InitCount2();//1


function ExchangeRate(country) {//_country
    var _country = "";
    var _exchangeRate = 0;
    switch (country) {//_country
        case "TW":
            _country = "台幣";
            _exchangeRate = 1;
            break;
        case "JP":
            _country = "日幣";
            _exchangeRate = 0.3;
            break;
    }

    return function(value) {
        console.log(`${_country}轉換台幣為:${value * _exchangeRate}`);
    }
}

var JPDConversionTW = ExchangeRate('JP');
var TWDConversionTW = ExchangeRate('TW');
JPDConversionTW(200);
TWDConversionTW(100);
