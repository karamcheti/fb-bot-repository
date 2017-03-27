var CONFIG = {
    //Facebook API token
    accessToken: "EAASCjVtzg1gBAMUxbQIlYHzbAHJZAu05YlFmo7yhhBORZCp29SVZCQ1ncZAZCV8YCSlDSgjCgzjmxMwRZAjCCeoZAdZClayCKK7kigtQ6g96klYH71yt7f8pJH1TR3tnqVkvjiAGVa5LI6Q9ynJLaPyl5Kjxvj5DKPPJlqDOfZBDLFAZDZD",

    //WIT NPL engine API token
    witToken: "KSI6XZM3GIB4344SUTCOTHGNKPSD226Y",

    port: 8080,
    ssl: {
        key: "",
        cert: "",
        ca: ""
    },

    isFirebaseDB : false,

    //Application token to verify with Facebook API
    verifyToken: "botdemo", //it can any string you want, but should match to facebook webhook token 

    listenPort: 443,

    //Set default messages 
    defaultAuthMsg: "User not authorized, kindly try again with different credentials.",
    defaultQueryMsg: "Will be glad to help you. Kindly write to us keplerlab@sapient.com",
    
    //firebase API token
    firebase : {
        apiKey: "AIzaSyDN9EYO8Dlg8wjX8V7YebcA878-TEEmDJA",
        authDomain: "botdemo-a4c02.firebaseapp.com",
        databaseURL: "https://botdemo-a4c02.firebaseio.com",
        storageBucket: "botdemo-a4c02.appspot.com",
        messagingSenderId: "958286739360",
        serviceAccount : {
	"type": "service_account",
	"project_id": "botdemo-a4c02",
  	"private_key_id": "f5e3bae611f2f4be71510c363a09299f53649e78",
  	"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDK//N6WcVvaJNt\n/Fx/Bp4/DERx5s8hue/m/Fxq4O4ym9k+tFwHIuGW1DJ0p+r6FsJJN18tvpMGtpsw\nO009Aj7HAxfB3Bzhgydhv05JWZS1gWw3XkhLrgtjAGJXHggVOINeXQAAPfIos0//\ne8bxseQp0YYNAjJmVhTR96xRR+E8+JfuvXg/oEkzwXrW/SA+YQtnbcuZWXXXBISt\n5TAYbW+dzh43cz2BqTArflje7cfJOytAF/eSX+vkO+dA0GKraqJUmsyLRbVFGZku\nDyFPISNSJ9SwQiHeJjY6dKoX5Z8zhA0JG+M8h8gGNex1q8Vl/aT8v1mMQNCw7Is0\nBGiI3pzrAgMBAAECggEAHWa8yPe/lMc8sy1d6Df5K4CHWUfosCXSDU53xDMXzNSt\nvls5CP+QVNwfAq5fZiFtulT+wA1eFhbUm0O7iB6PIRvdkQJkXHU2ev3OROlolHFO\nTyakqfFnTMt9csiyuwAYZs5pdZ+DN0nhSEuRIOh292eVVsT+r7vAADkzCAK1KLNG\nZ+C8fqvrYnyMIjPtL0hSO1E2BjsylJYgutIJ/UabLbxwQWwlFdV2ELovbJkBiO5q\nfDM5NNnpK/DdzxbieYsmj+tk47NVqjldny0Jh3FhXwjj9Roz9F6wYUnKsq0IvFBy\nqEI9AIfUkLt9B/rVL0BzGBqLQobpchfOAvIQraCPoQKBgQD4NOWIcy/iWaQiNLGJ\nYaYMCbf6TJzAfR5DHuGxD0lvyklONU/iMuzqDlrYuk1+MagaVcX/oSJq9LdJRfSf\nr7ZE8ZGSw4oL2qixstDM71PYeV8rq/RSA7bc1hkBCQ5kkEra2I97ikCMe8ESuY/M\nVJo6o7w5bYYCwn7qzZucrNuWtwKBgQDRX62+1j64qxSlJ6I71SNihI/qV9DcMaQX\nBzm8+jyxEHtD7fQlNMaGdZgB2Rkp7k/DtdgiOrsFlBajzoA8qSHcR3lKokrj2EoS\nS5i22yN3f4F8hDEWVm0QP/GdSVGwaBK15Hf7T1RdSs48Wgy6+wNWstUT5pLIFCcR\n7ICl5NMXbQKBgHRWZtfEFcekeJhH1ocsK+Ysj/1T940JmCuhx+tz3Nn3GND9kAnY\nEM/MFqzK9hOWNtLRLVMaNcWoGljP308Rzv8Vs0P1Pzk7LiLMS64i50vp57/Sg1wF\nvapY97NSiVp9f3iAVRB0xriSMPcT3uDJLtkZcdoBCfU1MMPhx3RyWSKVAoGAUTDv\nKV/fdrExElJqQRWH4T5SqKdhIOJHJX7xzuyi+G7RvifaU0tB6QZU6fKMJYx6dgRg\nSfXIbINevCrp45wau1ckG+MPc4d+QdX65H3aJQ7W4bhJaMYfCPwi78Fs4iGZj9uH\nA3dh2cOWciThZujMBKTYqBzzso7OD89MnAg+K4kCgYAjjy08DGVZ+R36ilAa4FHt\nbOvgAt1XnCBKCC2/H4ExEZMAb7muIy/cPCwnGJeQM/1VXymjJc7NOIFBeRfEsYSH\nLZzyDdjuRC8uE6JRFIpoGxcw5s/5DngAJ/egE/1E1ccIJSULprPdVmW52UXsuALe\nznqj5vMnn0JzZLFQtBkppg==\n-----END PRIVATE KEY-----\n",
 	 "client_email": "firebase-adminsdk-ofabd@botdemo-a4c02.iam.gserviceaccount.com",
  	"client_id": "100831611918166186264",
  	"auth_uri": "https://accounts.google.com/o/oauth2/auth",
  	"token_uri": "https://accounts.google.com/o/oauth2/token",
  	"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
 	 "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ofabd%40botdemo-a4c02.iam.gserviceaccount.com"
        } //Firebase private key
    },

    //chatbot key mapping (Mapping between user response and next questions to ask from end user) 
    keyMapped: {
        "welcome_greeting": "welcome_greeting",
        "select_menu": "select_menu",
        "see_menu": "see_menu",
        "make_reservation": "select_restaurant",
        "restaurant_1": "no_of_people",
        "restaurant_2": "no_of_people",
        "restaurant_3": "no_of_people",
        "no_of_people": "no_of_people",
        "day_and_time": "day_and_time",
        "reservation_length": "reservation_length",

        "30_min": "special_request",
        "60_min": "special_request",
        "90_min": "special_request",
        "general_dining": "confirmation",
        "romatic_dinner": "confirmation",
        "private_party": "confirmation",
        "confirm_reservation": "receipt",
        "cancel_reservation": "cancel_greeting",
        "receipt": "feedback",
        "one_star": "comments",

        "three_star": "comments",
        "five_star": "comments",
        "comments": "thanks_greeting",
        "order_takeout": "meal_options",
        "by_favourite": "select_restaurant_cousine",
        "by_cousine": "cousine_type",
        "pizza": "select_restaurant_cousine",
        "burger": "select_restaurant_cousine",
        "sub": "select_restaurant_cousine",
        "restaurant_cousine_1": "pre_order",
        
        "restaurant_cousine_2": "pre_order",
        "restaurant_cousine_3": "pre_order",
        "restaurant_cousine_4": "pre_order",
        "restaurant_cousine_5": "pre_order",
        "select_restaurant_cousine": "pre_order",
        "my_favourite_order": "select_meal",
        "my_custom_order": "select_meal",
        "meal_1": "other_items",
        "meal_2": "other_items",
        "meal_3": "other_items",
        "meal_4": "other_items",
        
        "meal_5": "other_items",
        "meal_6": "other_items",
        "drinks": "drinks",
        "fries": "fries",
        "no_thanks": "confirmation_order",
        "beer": "confirmation_order",
        "wine": "confirmation_order",
        "soft_drink": "confirmation_order",
        "thick_cut": "confirmation_order",
        "house_cut": "confirmation_order",
        "twice_fried": "confirmation_order",
        "confirm_order": "receipt_order",
        "cancel_order": "cancel_greeting",
        "estimation": "feedback",
    }
};
module.exports = CONFIG;
