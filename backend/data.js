import bcrypt from 'bcryptjs'

const data = {
  users:[
      {
        name: "Fatih",
        email: "dmrbs.fd@gmail.com",
        password: bcrypt.hashSync('1234'),
        isAdmin: true
      },
      {
        name: "Merve",
        email: "merveserin160@gmail.com",
        password: bcrypt.hashSync('1234'),
        isAdmin: false
      }
  ],
    products: [
        {
           // _id: '1',
            name: 'I-Phone 13 Pro',
            slug: 'iphone-13-pro',
            category: 'Phones',
            image: '/images/product1.png', // 679px × 829px
            price: 20.000,
            countInStock: 10,
            brand: 'Apple',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality phone',
          },
          {
            //_id: '2',
            name: 'HP Laptop',
            slug: 'hp-laptop',
            category: 'Laptops',
            image: '/images/2.png',
            price: 8.000,
            countInStock: 20,
            brand: 'HP',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
          },
          {
            //_id: '3',
            name: 'Canon Camera',
            slug: 'canon-camera',
            category: 'Cameras',
            image: '/images/3.png',
            price: 25,
            countInStock: 15,
            brand: 'Canon',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
          },
          {
            //_id: '4',
            name: 'Adidas Fit Jacket',
            slug: 'adidas-fit-jacket',
            category: 'Clothes',
            image: '/images/4.png',
            price: 65,
            countInStock: 0,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
          },
    ]
    
}

export default data;