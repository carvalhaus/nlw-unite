import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: 'c8c71e3a-fa98-4f76-b80c-34d11a69983c',
            title: 'Unite Summit',
            slug: 'unit-summit',
            details: 'Um evento para apaixonados por tecnologia!',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})