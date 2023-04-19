
class  traficSupportPage{

    homePageText(searchtext){
        cy.get('[class="central-textlogo__image sprite svg-Wikipedia_wordmark"]')
    }
    entertext(searchtext){
        return cy.get('[name="search"]').type(searchtext);
     }
     clickSearch(){
		return cy.get('[type="submit"]').click();  
	}
    getTextHeading() {
        return cy.get('[id="firstHeading"]')
    }
    clickText(){
		return cy.get('[type="submit"]').click();  
	}
    findAndClickSearch(searchtext){
        cy.get('[id="typeahead-suggestions"]').contains(searchtext).click()
    }   
    ///new
    homePageCookies(){
        cy.get('[class="cmp-container first-load"]') //gdpr-intro first-layer
    }
    homePageCookiesAccept(){
        cy.get('[id="uc-btn-accept-banner"]')
    }
    homePageMyAccount(){
        cy.get('[class="page-account-label"]')
    }
    homeHeaderImage() 
    {
        cy.get('[class="page-logo-img"]')
    }
    homePageHeaderImage(){
        cy.get('[class="page-logo-img"]')
    }
    accordionItemContent(){
        cy.get('[class="accordion-item-content"]')
    }
    calculatorHeadLineText(){
        cy.get('[class="calculator-headline"]')
    }
    ageTextbox(myAge){
        cy.get('[name="age"]').type(myAge); 
    }
    selectSituationGroup(situationGroupText){
        cy.get('[name="situationGroup"]').select(situationGroupText)
    }
    jetztVergleichenButtonClick(){
        cy.get('[class="page-button"]').click()
    }
    selectVersicherungen(){
        cy.get('[class="accordion-toggle-label icn-a-angle-down-outlined"]').within(() => {
            cy.contains('Versicherungen').click().wait(1000)
        })
    }
    selectprivathaftpflicht(){
        cy.get('[href="/privathaftpflicht/"]').eq(1).click()
    }
    clickSubmit() {
        cy.get('[type="submit"]').eq(1).click().wait(2000)
    }
    selectDateofBirth(birthDate) {
        cy.get('[class="su-calendar-input input"]').clear()
        cy.get('[class="su-calendar-input input"]').type(birthDate)
    }
    enterPostCode(zipCode) {
        cy.get('[id="prestep_postcode"]').type(zipCode).wait(2000)
    }
    clickJetztVergleichen() {
        cy.get('[class="next"]').within(() => {
            cy.contains('Jetzt vergleichen').click({force:true})
          })
    }
    clickLoadButton() {
        cy.get('[class="button load-more-button"]').click().wait(1000)
    } 
    openTrafficDetails() {
        cy.get('[class="product"]').eq(0).within(() => {
            cy.contains('Tarifdetails').click().wait(5000)
          })
    } 
    getProduct() {
        cy.get('[class="product"]').eq(0)
    } 
    
}

module.exports = traficSupportPage;