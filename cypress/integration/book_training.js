describe('Workout booking app', () => {
  it('Book workout on this and next week', () => {
    cy.visit(Cypress.env('login_url'))
    login(Cypress.env('FIZIKA_EMAIL'),Cypress.env('FIZIKA_PASSWORD'))
    selectWorkout(Cypress.env('workout'))
	book()
	goToNextWeek()
    book()
  })
})

function login(email,password){
	cy.get('[name="Login"]')
      .type(email)
      .should('have.value', email)
    cy.get('[name="Password"]')
      .type(password)
      .should('have.value', password)
    cy.get('#confirm').click()
}

function selectWorkout(workoutName){
    cy.contains('Все программы').click()
    cy.wait(1000)
    cy.get('[name="search"]').type(workoutName + '{enter}')
}

function book(){
	cy.wait(1000)
    cy.contains('Участвовать').click({force: true})
}

function goToNextWeek(){
	cy.get('.glyphicon-cp-button-right-1').click()
}