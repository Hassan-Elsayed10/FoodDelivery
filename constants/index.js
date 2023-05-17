export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg",
    },
    {
        id: 2,
        name: 'Burger',
        image: "https://media-cdn.tripadvisor.com/media/photo-s/09/e0/58/4f/nurd-berger.jpg",
    },
    {
        id: 3,
        name: 'Italian',
        image: "https://insanelygoodrecipes.com/wp-content/uploads/2020/03/Lasagna-1024x536.png",
    },
    {
        id: 4,
        name: 'Chinese',
        image: "https://media.cnn.com/api/v1/images/stellar/prod/220921081409-16-chinese-foods-steamed-fish-head.jpg?c=original&q=w_1280,c_fill",
    },
    {
        id: 5,
        name: 'Noodles',
        image: "https://lindseyeatsla.com/wp-content/uploads/2021/11/LindseyEats_Spicy_Garlic_Noodles-3.jpg",
    },
    {
        id: 6,
        name: 'Sweets',
        image: "https://www.seriouseats.com/thmb/ron7VooQZSYi-Au83gyOQbKCdbU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2014__09__20140903-turkish-sweets-baklava-robyn-lee-10-bc9b8a4dd4884d4fa465469548c19437.jpg",
    },

]


export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'soft and tender fried chicken',
    restaurants: [
        {
            id: 1,
            name: 'Bazooka',
            image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/at%2Farchive%2F0716e0ca369a57b31b821ea090891e90fce7123e",
            description: 'Hot and spicy chiken',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'chiken',
                    description: 'spicy chiken',
                    price: 30,
                    image: "https://i.ndtvimg.com/i/2018-04/chicken_620x330_81522925651.jpg"
                },
                {
                    id: 2,
                    name: 'Chicken',
                    description: 'Creamy Tuscan Chicken ',
                    price: 45,
                    image: "https://hips.hearstapps.com/hmg-prod/images/20191011-creamy-tuscan-chicken-delish-ehg-2521-1571259466.jpg?crop=0.668xw:1.00xh;0.160xw,0&resize=1200:*"
                },
                {
                    id: 3,
                    name: 'Chicken',
                    description: 'Roast Chicken',
                    price: 50,
                    image: "https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/1:1/w_4318,h_4318,c_limit/RoastChicken_RECIPE_080420_37993.jpg"
                },
            ]

        },
        {
            id: 2,
            name: ' Zack',
            image: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/c53b9e71-1653-4822-9c1f-6a22851ff473.jpg",
            description: 'Fried Chicken',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Big Zack sandwich',
                    description: 'cheezy garlic pizza',
                    price: 100,
                    image: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/c53b9e71-1653-4822-9c1f-6a22851ff473.jpg"
                },
                {
                    id: 2,
                    name: 'Firebird Sandwich',
                    description: 'cheezy garlic pizza',
                    price: 120,
                    image: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/7c699409-0de9-4b6a-aa72-ab742d3e75f2.jpg"
                },
                {
                    id: 3,
                    name: 'Classic Bite Sandwich',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/e377b967-1669-4553-9c9d-88295b7e0cfe.jpg"
                },
            ]

        },
        {
            id: 3,
            name: 'Mcdonalds',
            image: "https://www.mcdonalds.eg/Cms_Data/Contents/En/Media/images/logo20.png",
            description: 'Discover our delicious menu featuring a wide selection of sandwiches, snacks, drinks and more.',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Mix 2 Meal ',
                    description: 'Pick two! Choose among the tasty Cheeseburger, the delicious Chicken MACDO or the juicy Beefburger + Fries + Drink.                   ',
                    price: 220,
                    image: "https://www.mcdonalds.eg/Cms_Data/Contents/En/Media/images/Menu/large-Image/M2M-700x474.png"
                },
                {
                    id: 2,
                    name: 'Double Big Tasty®                   ',
                    description: 'When one Big Tasty just isn’t enough, go for the Double Big Tasty. Its not only one but two juicy beef',
                    price: 110,
                    image: "https://www.mcdonalds.eg/Cms_Data/Contents/En/Media/images/Menu/large-Image/Double-Big-Tasty.png"
                },
                {
                    id: 3,
                    name: 'Grand Share Box                   ',
                    description: 'Share and enjoy our iconic items at a great price! Pick 2 sandwiches from the juicy Big Tasty®',
                    price: 320,
                    image: "https://www.mcdonalds.eg/Cms_Data/Contents/En/Media/images/Menu/large-Image/Grand-Share.png"
                },
            ]

        }
    ]
}