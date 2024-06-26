import { PrismaClient } from '@prisma/client'
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient()

async function main() {
  // await prisma.todo.createMany({
  //   data: Array.from({ length: 25 }, () => ({
  //     title: faker.lorem.text(),
  //     body: faker.lorem.paragraph(),
  //   }))
  // })


  // await prisma.user.createMany({
  //   data: Array.from({ length: 25 }, () => ({
  //     name: faker.internet.userName(),
  //     email: faker.internet.email(),
  //     address: {
  //       street: faker.location.streetName(),
  //       city:   faker.location.city(),
  //       state:  faker.location.state(),
  //       zip:    faker.location.zipCode()
  //     },
  //   }))
  // })
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })