let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #FA8072;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #FA8072;">Web design, front-end and full-stack development, and UX design.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
