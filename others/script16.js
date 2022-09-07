//部落格新增文章

var title = document.getElementById('title')
var content = document.getElementById('content')
var btn = document.getElementById('btn')
var list = document.getElementById('list')

btn.addEventListener('click', function () {
  console.log(title.value)
  console.log(content.value)
  console.log(list.innerHTML)

  list.innerHTML =
    list.innerHTML +//Esc下面的點
    ` 
    <div class="article">
        <h2>${title.value}</h2>
        <p>${content.value}</p>
    </div>`;
    title.value=""
    content.value=""
})
