const projects = [
      {
  title: "legofi.py",
  description: "Nearest Color distance script to convert image to lego-compatible mosaics based on colors that lego bricks are available in.",
  url: "https://github.com/smlederer/legofi",
  image: "img/lego.jpg",
  tags: ["Python", "PIL", "BeautifulSoup"]
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
  description: "Strategy game where you take up the role as a tavern barkeep having to fend off monsters at night.",
  url: "https://samldrr.itch.io/defendinn",
  image: "img/defendinn.jpg",
  tags: ["Godot","GDscript"]
  },
    {
  title: "STARSHIP HIJACKERS",
  description: "A space-themed action game where players must hijack starships where the controls are in a foreign language.",
  url: "https://zombz.itch.io/starship-hijackers",
  image: "img/starship.png",
  tags: ["Godot","GDscript"]
  },
    {
    title: "SMOGON DATA MINING",
    description: "Explorations in data mining and visualizations of smogon.com/stats data to reveal edges in competitive teambuilding",
    url: "",
    image: "img/pkmn.jpg",
    tags: ["Python","Polars","Matplot","ETL"],
    wip: true
  },
  {
    title: "WAVE FUNCTION COLLAPSE GENERATION",
    description: "Implementing WFC for randomized tile generation in the Godot game engine",
    url: "",
    image: "img/wfc.jpg",
    tags: ["GDscript"],
    wip: true
  },
  {
    title: "FANTASY FOOTBALL DATA MINING",
    description: "Data mining and analysis tools for fantasy football, extracting insights from player statistics to inform draft and trade decisions.",
    url: "",
    image: "img/draft.jpg",
    tags: ["Python", "great_tables Library","Pandas", "ETL"],
    wip: true
  },
];

const container = document.getElementById("projects");

projects.forEach(project => {
  const isWip = project.wip || !project.url;
  const card = document.createElement(isWip ? "div" : "a");
  card.className = "card";
  
  if (!isWip) {
    card.href = project.url;
    card.target = "_blank";
    card.rel = "noopener";
  } else {
    card.classList.add("wip");
  }

  card.innerHTML = `
    <div class="card-image">
      ${isWip ? '<span class="wip-badge">Under Construction</span>' : ''}
      <img src="${project.image}" alt="${project.title} preview" loading="lazy" />
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
