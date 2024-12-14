module.exports = {
    apps: [
      {
        name: "artsa-bot",
        script: "bot.js",
        cwd: "/var/www/apps/artsa",
        watch: true, 
        env: {
          NODE_ENV: "production",
        },
      }
    ],
  };
  