const tabs = document.querySelectorAll('.tab')

tabs.forEach(tab => {
  tab.addEventListener('click', function () {
    if (tab.classList.contains('selected')) {
      return
    }

    selectTab(tab)
    displayTabsInfo(tab)
  })
}) 

function selectTab(tab) {
  const tabSelected = document.querySelector('.tab.selected')
  tabSelected.classList.remove('selected')
  tab.classList.add('selected')
}

function displayTabsInfo(tab) {
  const infoDisplayed = document.querySelector('.info.selected')
  infoDisplayed.classList.remove('selected')

  const idOfTabToOpen = `info-${tab.id}`

  const openingTab = document.getElementById(idOfTabToOpen)
  openingTab.classList.add('selected')
}
