const projects = [
      {
  title: "LEGO-FI [LINK WIP]",
  description: "Nearest Color distance calculator script to convert image to lego tiles based on available colors on Bricklink.com",
  url: "",
  image: "img/lego.jpg",
  tags: ["Python", "PIL", "BeautifulSoup"]
  /*https://discordpy.readthedocs.io/en/stable/*/
  },
  {
    title: "SMOGON DATA MINING [LINK WIP]",
    description: "Explorations in data mining and visualizations of smogon.com/stats data to reveal edges in competitive teambuilding",
    url: "",
    image: "img/pkmn.jpg",
    tags: ["Python","Polars","Matplot","ETL"]
  },
  {
    title: "WAVE FUNCTION COLLAPSE GENERATION [LINK WIP]",
    description: "Implementing WFC for randomized tile generation in the Godot game engine",
    url: "",
    image: "img/wfc.jpg",
    tags: ["GDscript"]
  },
  {
    title: "FANTASY FOOTBALL DATA MINING [LINK WIP]",
    description: "Minimal REST API starter with authentication.",
    url: "",
    image: "img/draft.jpg",
    tags: ["Python", "great_tables Library","Pandas", "ETL"]
  },
  {
  title: "DOMINION DISCORD HELPER BOT",
  description: "Discord bot that would handle game set up allowing for participants to each have the ability to ban a card",
  url: "https://github.com/smlederer/dominion_discord_bot_v2",
  image: "img/dom_bot.png",
  tags: ["Python", "Discord.py API","Python Image Libary"]
  /*https://discordpy.readthedocs.io/en/stable/*/
  },
    {
  title: "DEFEND'INN",
  description: "Discord bot that would handle game set up allowing for participants to each have the ability to ban a card",
  url: "https://samldrr.itch.io/defendinn",
  image: "img/defendinn.jpg",
  tags: ["Godot","GDscript"]
  },
    {
  title: "STARSHIP HIJACKERS",
  description: "Discord bot that would handle game set up allowing for participants to each have the ability to ban a card",
  url: "https://zombz.itch.io/starship-hijackers",
  image: "img/starship.png",
  tags: ["Godot","GDscript"]
  /*https://discordpy.readthedocs.io/en/stable/*/
  },
];

const container = document.getElementById("projects");

projects.forEach(project => {
  const card = document.createElement("a");
  card.className = "card";
  card.href = project.url;
  card.target = "_blank";
  card.rel = "noopener";

  card.innerHTML = `
    <div class="card-image">
      <img src="${project.image}" alt="${project.title} preview" />
    </div>
    <div class="card-content">
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <div class="tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </div>
  `;

  container.appendChild(card);
});
