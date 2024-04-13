module.exports = {
  config: {
    name: "Rômeo",
    aliases: ["randomname", "Rname"],
    category: "fun",
    role: 0,
    shortDescription: "Generate a random aesthetic name",
    longDescription: {
      en: "Generate a random aesthetic name with a combination of random first names and surnames."
    },
    guide: {
      en: "Type `goatbot aestheticname` to generate a random aesthetic name."
    }
  },
  onStart: async function ({ message }) {
    const firstName = [
      "Luna",
      "Cyrus",
      "Ivy",
      "Milo",
      "Aurora",
      "Orion",
      "Willow",
      "Atlas",
      "Lola",
      "Jasper",
      "Ember",
      "River",
      "Scout",
      "Sage",
      "Zephyr",
      "Asher",
      "Ezra",
      "Rowan",
      "Silas",
      "Theo",
      "Ari",
      "Blair",
      "Eden",
      "Hazel",
      "Iris",
      "Juno",
      "Nova",
      "Quinn",
      "Seraphina",
      "Zephyr"
    ];
    const lastName = [
      "Everly",
      "Wilder",
      "Haven",
      "Fletcher",
      "Delilah",
      "Fox",
      "Indigo",
      "Winter",
      "Nova",
      "Ryder",
      "Bloom",
      "Brook",
      "Ember",
      "Evergreen",
      "Gale",
      "Horizon",
      "Lake",
      "Meadow",
      "Mist",
      "Rain",
      "Sage",
      "Skye",
      "Songbird",
      "Storm",
      "Wren",
      "Zephyr",
      "Aether",
      "Aster",
      "Cosmos",
      "Luna",
      "Orion",
      "Phoenix",
      "Solaris"
    ];
    const randomFirstName =
      firstName[Math.floor(Math.random() * firstName.length)];
    const randomLastName =
      lastName[Math.floor(Math.random() * lastName.length)];
    const aestheticName = `${randomFirstName} ${randomLastName}`;
    message.reply(`lele bikh de raha hu 😏: ${aestheticName}`);
  }
};

