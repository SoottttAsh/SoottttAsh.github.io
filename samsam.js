// 折叠菜单逻辑
document.addEventListener('DOMContentLoaded', ()=>{
  const side = document.getElementById('side-menu');
  const main = document.getElementById('main-content');
  const btn  = document.getElementById('toggle-btn');

  btn.addEventListener('click', ()=>{
    side.classList.toggle('collapsed');
    main.classList.toggle('collapsed');
  });
});