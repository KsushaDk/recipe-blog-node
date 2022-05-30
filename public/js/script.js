let addIngredientsBtn = document.getElementById('addIngredientsBtn')
let ingredientList = document.querySelector('.ingredientList')
let ingredeintDiv = document.querySelectorAll('.ingredeintDiv')[0]
const deleteBtn = document.querySelector('.btn-delete')


addIngredientsBtn.addEventListener('click', function () {
  let newIngredients = ingredeintDiv.cloneNode(true)
  let input = newIngredients.getElementsByTagName('input')[0]
  input.value = ''
  ingredientList.appendChild(newIngredients)
})

// deleteBtn.addEventListener('click', (e) => {
//   const id = e.target?.dataset?.id || null
//   if (id) {
//     fetch(`/recipe/${id}`, {
//       method: 'DELETE',
//     }).then(() => {
//       window.location.reload()
//     })
//   }
// })
// console.log(deleteBtn)
