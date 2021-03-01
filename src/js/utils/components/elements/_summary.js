export const Summary = (filterItem) => {
  const summary = document.createElement('summary')
  const summaryText = document.createTextNode(filterItem)

  summary.appendChild(summaryText)

  return summary
}
