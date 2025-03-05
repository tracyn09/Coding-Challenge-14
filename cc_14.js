//Task 2
function addSupportTicket(Name, Issue, PriorityLevel) {
    const container= document.getElementById(`ticketContainer`)

//Creating Support Ticker
const ticket = document.createElement(`div`) 
ticket.setAttribute(`class`, `ticket`)
ticket.setAttribute(`id`, `ticket_`+ Date.now())

//Header for customer name
const ticketName = document.createElement(`h3`)
ticketName.textContent = Name

//Paragraph for issue desciription
const ticketIssue = document.createElement(`p`)
ticketIssue.textContent = `Issue: ${Issue}`

//Label for priority level
const priorityLabel = document.createElement(`p`)
priorityLabel.textContent = `Priority: ${PriorityLevel}`

//Resolve button
const resolveButton = document.createElement(`button`)
resolveButton.textContent = `Resolve`
resolveButton.addEventListener(`click`,function() {
    ticket.remove()})

//Appending to ticket
ticket.appendChild(ticketName)
ticket.appendChild(ticketIssue)
ticket.appendChild(priorityLabel)
ticket.appendChild(resolveButton)

//Append ticket to ticket container
ticketContainer.appendChild(ticket)
}

//Test Case for Task 2
window.onload = function() {
    addSupportTicket(`Marvin Guerrero`, `Delayed delivery`, `Low`)
    addSupportTicket(`Teresa Nguyen`, `Damaged product`, `Medium`)
    addSupportTicket(`Joseph Tornincaso`, `Missing items`, `High`)
}
