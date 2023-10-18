const carSchema = require('../models/car');


/**
 * car data insertion
 */
async function dataInsertion(){
    try{
        for(let i = 1; i <= 500; i++){
            let newEvenObject =   {
                "newcardetails": {
                    "mileage": '15.31 to 16.92',
                    "dimensions": '4312mm X 1790mm X 1650mm',
                    "price": '1210000',
                    "transmission": 'Manual',
                    "engine": '1498cc',
                    "power": '119.35bhp',
                    "torque": '145Nm'
                },
                "type": 'admin',
                "version": 'new',
                "carname": 'Honda Elevate',
                "variant": 'V MT',
                "manufacturingyear": '2023-01-01 00:00:00',
                "maker": 'Honda',
                "fuel": 'Petrol',
                "airbags": 2,
                "noofcylinders": 4,
                "bodytype": 'Compact SUV',
                "groundclearance": '220 mm',
                "description": "Always ready for your adventures, by making you move freely. Honda Elevate allows you to express your unique style, the true manifestation of 'Urban Freestyler'.",
                "photos": [
                'https://res.cloudinary.com/djfbnzspr/image/upload/v1695239719/elevate-exterior-right-front-three-quarter-18_qtwe4i.webp',
                'https://res.cloudinary.com/djfbnzspr/image/upload/v1695239790/Honda-Elevate-Side-View_maxamd.webp',
                'https://res.cloudinary.com/djfbnzspr/image/upload/v1695239718/honda-elevate-dashboard5_jyvvtz.webp',
                'https://res.cloudinary.com/djfbnzspr/image/upload/v1695239719/Rear-scaled_rhhxwq.webp',
                'https://res.cloudinary.com/djfbnzspr/image/upload/v1695239721/b837e295-39b8-41d3-ad10-222593577b46_Honda-Elevate-gets-good-recline-angle-for-the-rear-seats-which-while-get-rear-seatbelt-reminders-but-only-offer-a-lap-belt-for-middle-passenger._1_rjdw1m.jpg',
                'https://res.cloudinary.com/djfbnzspr/image/upload/v1695239721/elevate-bootspace_gzbm8t.webp'
                ],
                "userid": '6509f123b0453d6053e3f9d5'
            }

            let newOddObject = {
                "type": "admin",
                "version": "new",
                "carname": "Honda Amaze",
                "variant": "S 1.2 Petrol MT",
                "manufacturingyear": "2023-01-01 00:00:00",
                "maker": "Honda",
                "fuel": "Petrol",
                "airbags": 2,
                "noofcylinders": 4,
                "bodytype": "Compact Sedan",
                "groundclearance": "170 mm",
                "description": "The 2021 Honda Amaze is essentially a facelifted version of the outgoing model. Armed with a mild makeover and a longer list of features, this sedan makes sense to those who are looking for a premium, safe, comfortable and spacious compact sedan that's fuel-efficient too.",
                "newcardetails": {
                  "mileage": "18.3 to 18.6",
                  "dimensions": "3995mm X 1695mm X 1498 mm",
                  "price": "7810000",
                  "transmission": "Manual",
                  "engine": "1199cc",
                  "power": "90bhp",
                  "torque": "200Nm"
                },
                "photos": [
                  "https://res.cloudinary.com/djfbnzspr/image/upload/v1695233821/amaze-facelift-exterior-left-front-three-quarter-2_ev5a0y.webp",
                  "https://res.cloudinary.com/djfbnzspr/image/upload/v1695233821/amaze-facelift-exterior-left-rear-three-quarter_rls4kn.webp",
                  "https://res.cloudinary.com/djfbnzspr/image/upload/v1695233821/amaze-facelift-exterior-front-view-3_vevw2d.webp",
                  "https://res.cloudinary.com/djfbnzspr/image/upload/v1695233821/amaze-facelift-exterior-left-side-view_wzq51i.webp",
                  "https://res.cloudinary.com/djfbnzspr/image/upload/v1695233822/amaze-facelift-interior-dashboard-2_j2y4hh.webp",
                  "https://res.cloudinary.com/djfbnzspr/image/upload/v1695233821/amaze-facelift-exterior-left-side-view_wzq51i.webp"
                ],
                "userid": "6509f123b0453d6053e3f9d5"
            }

            let oldCarObject = {
                "type": "customer",
                "version": "old",
                "carname": "Honda Amaze",
                "variant": "S 1.2 Petrol MT",
                "manufacturingyear": "2023-01-01 00:00:00",
                "maker": "Honda",
                "fuel": "Petrol",
                "airbags": 2,
                "noofcylinders": 4,
                "bodytype": "Compact Sedan",
                "groundclearance": "170 mm",
                "description": "The 2021 Honda Amaze is essentially a facelifted version of the outgoing model. Armed with a mild makeover and a longer list of features, this sedan makes sense to those who are looking for a premium, safe, comfortable and spacious compact sedan that's fuel-efficient too.",
                "customercardetails": {
                  "owner": "FirstName MiddleName LastName",
                  "purchasedate": "2023-02-01 00:00:00",
                  "expectedprice": "6 Lakhs",
                  "accidentcase": true,
                  "paperavailability": true
                },
                "photos": [
                  "https://res.cloudinary.com/djfbnzspr/image/upload/v1695236692/U3G5YG8_316f99fc2aed426fa51bd8593ae88dcc_1_30898212_rintxg.webp",
                  "https://res.cloudinary.com/djfbnzspr/image/upload/v1695236692/9C9GQ7K_316f99fc2aed426fa51bd8593ae88dcc_1_30898213_m6suan.webp",
                  "https://res.cloudinary.com/djfbnzspr/image/upload/v1695236691/DCLKWOY_316f99fc2aed426fa51bd8593ae88dcc_1_30898214_pqd4vt.webp",
                  "https://res.cloudinary.com/djfbnzspr/image/upload/v1695236689/MJFZYRP_316f99fc2aed426fa51bd8593ae88dcc_1_30898215_pyryhh.webp",
                  "https://res.cloudinary.com/djfbnzspr/image/upload/v1695236689/V7F815D_316f99fc2aed426fa51bd8593ae88dcc_1_30898216_zgrtnr.webp",
                  "https://res.cloudinary.com/djfbnzspr/image/upload/v1695236688/LDLIBSO_316f99fc2aed426fa51bd8593ae88dcc_1_30898217_ysmtxe.webp",
                  "https://res.cloudinary.com/djfbnzspr/image/upload/v1695236688/8RGE36U_316f99fc2aed426fa51bd8593ae88dcc_1_30898218_ypymr8.webp",
                  "https://res.cloudinary.com/djfbnzspr/image/upload/v1695236688/KFXFWAW_316f99fc2aed426fa51bd8593ae88dcc_1_30898219_mrkhgv.webp",
                  "https://res.cloudinary.com/djfbnzspr/image/upload/v1695236688/BRLC8WW_316f99fc2aed426fa51bd8593ae88dcc_1_30898220_ysat7q.webp",
                  "https://res.cloudinary.com/djfbnzspr/image/upload/v1695236693/BX1519X_316f99fc2aed426fa51bd8593ae88dcc_1_30898221_tmcnqz.webp"
                ],
                "userid": "650a08e9a9f31133e386973e"
            }

            let obj = {};
            ( i%2 == 0 ) ? obj = newEvenObject : obj = newOddObject;

            let carInstance = new carSchema(oldCarObject);
            await carInstance.save();
            console.log("Added Car Successfully, ", i);
        }
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {dataInsertion};

