import { PrismaClient } from '@prisma/client'

import { PrismaProductRepository } from '@/repositories/prisma/prisma-product-repository'

const prisma = new PrismaClient()

const products = [
  {
    name: 'Minimalist Watch',
    price: 149.99,
    image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Accessories',
  },
  {
    name: 'Modern Chair',
    price: 249.99,
    image: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Furniture',
  },
  {
    name: 'Ceramic Vase',
    price: 89.99,
    image: 'https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Home Decor',
  },
  {
    name: 'Leather Bag',
    price: 199.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Accessories',
  },
  {
    name: 'Smart Speaker',
    price: 129.99,
    image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
  },
  {
    name: 'Wooden Desk',
    price: 349.99,
    image: 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Furniture',
  },
  {
    name: 'Pendant Light',
    price: 179.99,
    image: 'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Lighting',
  },
  {
    name: 'Wireless Headphones',
    price: 199.99,
    image: 'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
  },
  {
    name: 'Wall Art',
    price: 129.99,
    image: 'https://images.pexels.com/photos/1674049/pexels-photo-1674049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Home Decor',
  },
  {
    name: 'Ceramic Plates Set',
    price: 89.99,
    image: 'https://images.pexels.com/photos/6270663/pexels-photo-6270663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Kitchen',
  },
  {
    name: 'Slim Laptop',
    price: 999.99,
    image: 'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
  },
  {
    name: 'Coffee Table',
    price: 299.99,
    image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Furniture',
  },
]

async function seedProducts() {
  await prisma.product.deleteMany()

  const prismaProductRepository = new PrismaProductRepository()

  for (let i = 0; i < 10; i++) {
    for (const productData of products) {
      await prismaProductRepository.create(productData)
    }
  }

  console.log('Products seeded successfully!')
}

seedProducts()
