const product = [
  {
    "id": 0, 
    "imageUrl": "http://filearchive.cnews.ru/mrtest/images/goods_gallery/204/200204_gal.jpg", 
    "name": "Motorola XOOM\u2122 with Wi-Fi", 
    "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
    "display": {
      "screenResolution": "WXGA (1200 x 800)", 
      "screenSize": "10.1 inches", 
      "touchScreen": true
    },
    "comments": [
      {  
        "productId": 0,
        "description": "salut mon arrivé en super état et paquets jour d'achat pour se faire prendre 26 jour merci", 
        "id": 0,
        "date": "14:00 22.08.2010"
      }
    ]
  }, 
  {
      "id": 1, 
      "imageUrl": "https://stylus.ua/thumbs/390x390/25/ba/134134.jpeg", 
      "name": "MOTOROLA XOOM\u2122", 
      "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb).",
      "display": {
        "screenResolution": "WXGA (1200 x 800)", 
        "screenSize": "10.1 inches", 
        "touchScreen": true
    },
    "comments": [
      {  
        "productId": 1,
        "description": "I received it fast and it's so good big thanks to the store", 
        "id": 1,
        "date": "14:00 22.08.2015"
      }
    ]
  }, 
  {
    "id": 2, 
    "carrier": "AT&T", 
    "imageUrl": "https://t.niora.net/media/motorola_atrix_4g__89d5.jpg", 
    "name": "MOTOROLA ATRIX\u2122 4G", 
    "snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone.",
    "display": {
      "screenResolution": "QHD (960 x 540)", 
      "screenSize": "4.0 inches", 
      "touchScreen": true
    },
    "comments": [
      {  
        "productId": 2,
        "description": "Seller shipped fast, nice price. Well packed air bag. Went three weeks", 
        "id": 2,
        "date": "14:00 22.08.2019"
      }
    ]
  }, 
  {
    "id": 3, 
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/816LjG8LeXL._AC_SX679_.jpg", 
    "name": "Dell Streak 7", 
    "snippet": "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around.",
    "display": {
      "screenResolution": "WVGA (800 x 480)", 
      "screenSize": "7.0 inches", 
      "touchScreen": true
    },
    "comments": [
      {  
        "productId": 2,
        "description": "Seller shipped fast, nice price. Well packed air bag. Went three weeks", 
        "id": 2,
        "date": "14:00 22.08.2019"
      }
    ]
  }, 
  {
    "id": 4, 
    "imageUrl": "https://t.niora.net/media/samsung_i100_gem__179c.jpg", 
    "name": "Samsung Gem\u2122", 
    "snippet": "The Samsung Gem\u2122 brings you everything that you would expect and more from a touch display smart phone \u2013 more apps, more features and a more affordable price.",
    "display": {
      "screenResolution": "WQVGA (400 x 240)", 
      "screenSize": "3.2 inches", 
      "touchScreen": true
    },
    "comments": [
      {  
        "productId": 4,
        "description": "iUEWHOIUYFH 2KHIU23 I`  2P3EWQSKGa l ", 
        "id": 4,
        "date": "14:00 22.08.2015"
      },
      {  
        "productId": 4,
        "description": "fewfqwerewrewrqewrweqr  e wq rew ", 
        "id": 6,
        "date": "14:00 22.04.2015"
      },
      {  
        "productId": 4,
        "description": "uyooyuk utykuyt kyuk yuk yuk  ", 
        "id": 7,
        "date": "14:00 22.05.2015"
      }
    ]
  }, 
  {
    "id": 5,
    "imageUrl": "https://idev-swift.ru/wp-content/uploads/planshet-dell-venue-8-pro.jpg", 
    "name": "Dell Venue", 
    "snippet": "The Dell Venue; Your Personal Express Lane to Everything",
    "display": {
      "screenResolution": "WVGA (800 x 480)", 
      "screenSize": "4.1 inches", 
      "touchScreen": true
    },
    "comments": [
      {  
        "productId": 5,
        "description": " uytiuyi hky idyrghgfh gf hr hgfhfgh ", 
        "id": 5,
        "date": "14:00 22.08.2013"
      }
    ]
  }
];
localStorage.setItem('products', JSON.stringify(product));

const raw = localStorage.getItem('products');
export const products = JSON.parse(raw);
