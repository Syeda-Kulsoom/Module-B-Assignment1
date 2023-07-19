var a = {
    mobiles:{
        Samsung:{
            SamsungA10:{
                name: 'SamsungA10',
                ram:'4gb',
                rom:'64gb',
                camera:'13',
                price:'22,000PKR'
            },
            SamsungA20:{
                name:'SamsungA20',
                ram: '4gb',
                rom: '64gb',
                camera: '18',
                price: '28,000'
            },
            SamsungA30:{
                name: 'SamsungA30',
                ram:'4gb',
                rom: '64gb',
                camera: '25',
                price: '29,000'
            },
        },
        Iphone:{
            Iphone11:{
                name:'Iphone11' ,
                ram: '4gb' ,
                rom: '64gb',
                camera: '12',
                price: '100,000',

            },
            Iphone12:{
                name:'Iphone12' ,
                ram:'4gb' ,
                rom:'64gb' ,
                camera:'12' ,
                price:'150,000' ,

            },
            Iphone13:{
                name:'Iphone13' ,
                ram:'6gb' ,
                rom: '128gb',
                camera:'24' ,
                price:'200,000' ,

            },
        },
        Oppo:{
            OppoV20:{
                name:'OppoV20',
                ram:'8gb',
                rom:'128gb',
                camera:'64',
                price: '54,999'
            },
            OppoF19:{
                name:'OppoF19',
                ram:'6gb',
                rom:'128gb',
                camera:'48',
                price: '36,999'
            },
            OppoF11:{
                name:'OppoF11',
                ram:'4gb',
                rom:'64gb',
                camera:'48',
                price: '35,999'
            },
        },
        Vivo:{
            VivoY20:{
                name: 'VivoY20',
                ram:'4gb',
                rom:'64gb',
                camera:'13',
                price:'26,999'
            },
            VivoY21:{
                name: 'VivoY21',
                ram:'4gb',
                rom:'64gb',
                camera:'13',
                price:'43,999'
            },
            VivoY55:{
                name: 'VivoY55',
                ram:'8gb',
                rom:'12gb',
                camera:'50',
                price:'64,999'
            },
        }
    }
}

var companyName = document.getElementById('company');
var modelName = document.getElementById('model')


function getFeatures(){
    console.log(a.mobiles[companyName.value][modelName.value])  
}
