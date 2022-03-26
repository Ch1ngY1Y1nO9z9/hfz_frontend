require("babel-register")({
    presets: ["es2015", "react"]
  });
  
  const router = require('./src/Routes').default;
  const Sitemap = require('react-router-sitemap').default;
  
  (
      new Sitemap(router)
          .build('https://holofightz.surai.xyz')
          .save('./public/sitemap.xml')
  );