// prisma/seed.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Cleanup
  await prisma.booking.deleteMany();
  await prisma.appointmentService.deleteMany();
  await prisma.barber.deleteMany();
  await prisma.service.deleteMany();

  console.log("🧹 Old data cleared.");

  // BARBERS
  const barbers = [
    { name: "Harry", specialty: "Hair Stylist", speedFactor: 1.1, isActive: true },
    { name: "Liam", specialty: "Beard Expert", speedFactor: 0.9, isActive: true },
    { name: "Jackson", specialty: "Hair Stylist", speedFactor: 1.1, isActive: true },
    { name: "David", specialty: "HairCut Specialist", speedFactor: 0.8, isActive: true },
    { name: "Paul", specialty: "HairCut", speedFactor: 1.0, isActive: true },
    { name: "Max", specialty: "HairCut", speedFactor: 1.0, isActive: true },
    { name: "Charlie", specialty: "Beard Expert", speedFactor: 0.9, isActive: true },
    { name: "Ava", specialty: "HairColor Expert", speedFactor: 0.9, isActive: true },
    { name: "Olivia", specialty: "Hair Stylist", speedFactor: 0.8, isActive: true },
  ];

  await prisma.barber.createMany({ data: barbers });
  console.log("💈 Added 9 barbers.");

  // SERVICES
  const services = [
    { name: "Hair Styling", baseDurationMinutes: 30, category: "hair-styling", isActive: true },
    { name: "Haircut", baseDurationMinutes: 25, category: "haircut", isActive: true },
    { name: "Beard Trim", baseDurationMinutes: 15, category: "beard", isActive: true },
    { name: "Hair Color", baseDurationMinutes: 45, category: "hair-color", isActive: true },
  ];

  await prisma.service.createMany({ data: services });
  console.log("✂️ Added 4 services.");

  console.log("🌱 Seeding complete!");
}

main()
  .catch((err) => {
    console.error("❌ Seed Error:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
