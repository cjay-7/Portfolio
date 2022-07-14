function customSort(sortName, sortOrder, data) {
    var order = sortOrder === 'desc' ? -1 : 1
    data.sort(function (a, b) {
      var aa = +((a[sortName] + '').replace(/[^\d]/g, ''))
      var bb = +((b[sortName] + '').replace(/[^\d]/g, ''))
      if (aa < bb) {
        return order * -1
      }
      if (aa > bb) {
        return order
      }
      return 0
    })
  }

async function loadBlogContent(url, table) {
  const cardheader = table.querySelector("userId");
  const iden = table.querySelector("iden");
  const blog_title = table.querySelector("title");
  const blog_body = table.querySelector("body");
  const response = await fetch(url);
  const { userId , id , title , body } = await response.json();
}

loadBlogContent("https://jsonplaceholder.typicode.com/posts", document.querySelector("blog-column") )


function result() {
      var name = document.getElementById("name").value;
      var date = document.getElementById("date").value;
      var form_title = document.getElementById("form_title").value;
      var text = document.getElementById("text").value;
      var occupation1 = document.getElementById("occupation1").value;
      var occupation2 = document.getElementById("occupation2").value;
      var occupation3 = document.getElementById("occupation3").value;
      var male = document.getElementById("male").value;
      var female = document.getElementById("female").value;
      var rather_not_say = document.getElementById("rather_not_say").value;

      console.log(name);
      console.log(date);
      console.log(form_title);
      console.log(text);
      console.log(occupation1);
      console.log(occupation2 );
      console.log(occupation3 );
      console.log(male);
      console.log(female);
      console.log(rather_not_say);


   }
