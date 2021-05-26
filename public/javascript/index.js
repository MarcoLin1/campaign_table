// pop-up
const tableBody = document.querySelector('.table_body')

tableBody.addEventListener('click', function(event) {
  if(event.target.matches('.cell__action__icon')) {
    event.target.nextElementSibling.classList.toggle('hidden')
  }
})

// dark mode
const darkModeToggle = document.querySelector('#sidebar__darkmode__toggle')

darkModeToggle.addEventListener('change', function(event) {
  if(event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
})

// check checkbox (single)
tableBody.addEventListener('change', function(event) {
  if(event.target.checked) {
    event.target.parentElement.parentElement.classList.add('table__row--checked')
  } else {
    if (!event.target.checked) {
      event.target.parentElement.parentElement.classList.remove('table__row--checked')  
    }
  }
})

// check checkbox (all)
const tableHeader = document.querySelector('.table__header')

tableHeader.addEventListener('change', function(event) {
  const tableRow = document.querySelectorAll('.table__row')
  if (event.target.checked) {
    tableRow.forEach(item => {
      if (item.classList.contains('.table__header')) return
      item.classList.add('table__row--checked')
      item.querySelector('input').checked = "checked"
    })
  } else {
    tableRow.forEach(item => {
      if (item.classList.contains('.table__header')) return
      item.classList.remove('table__row--checked')
      item.querySelector('input').checked = ''
    })
  }
})
