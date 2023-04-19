
    const traficSupportPage = require("../pageobject/traficSupportPage");
    const sel = new traficSupportPage()
    
    
class  assertions{

    validateHomePage(){
        cy.contains('Stromvergleich').should('exist')
  //  sel.homeHeaderImage().should('exits')
//    sel.homePageCookies().contains('My account').should('exists')//It should contain text to ensure its in home page
 
 }
 validatePrivathaftpflichtExists() {
    //Privathaftpflicht personal information page shoould appear
    cy.contains('Privathaftpflicht').should('exist')
    cy.contains('Persönliche Angaben').should('exist')
 //   cy.get('[class="form-type personalInformation formgroup-validation-none"]').should('have.text', 'Persönliche Angaben')
 }


 validateProcessingMessage() {
    cy.contains('Ihre Ergebnisse werden ermittelt.').should('exist')
 }
 validateAtleastFiveTariffsAppears() {
    cy.get('[class="product-list comparison-footer-is-open"]').find('product').its('length').should('be.gte', 5)
} 
validateTwentyTariffsAppears() {
    cy.get('[class="product-list comparison-footer-is-open"]').find('product').its('length').should('equal', 20)
}
validateTariffsGreaterThanOne() {
    cy.get('[class="product-list comparison-footer-is-open"]').find('product').its('length').should('be.gte', 1)
}    
 validateAvailableTariffsforMySelection() {   
    cy.get('[class="product"]').eq(0).within(() => {
    cy.contains('PREIS-LEISTUNGSSIEGER').should('exist')
    cy.get('[class="product-group product-group-logo"]').should('exist')
    cy.contains('Getsafe Digital GmbH Comfort').should('exist')
    cy.get('[class="comparison"]').should('exist')
    cy.get('[name="productIndex"]').should('exist')
    cy.contains('Tarif vergleichen').should('exist')
    cy.contains('Deckungssumme: 20 Mio. € ').should('exist')
    cy.contains('Personenschäden: 15 Mio. € ').should('exist')
    cy.contains('Schlüsselverlust Miete: 10.000 € ').should('exist')
    cy.contains('Selbstbeteiligung: 0 €').should('exist')
    cy.contains('Mindestvertragslaufzeit: 1 Jahr').should('exist')
    cy.contains('Tarifdetails').should('exist')
    cy.contains('Zum Online-Antrag').should('exist')  
  })
 }
 validateTotalTraficCount(totalTrafficCount) {
   cy.get('[class="results-container"]').within(() => {
      cy.contains(totalTrafficCount+' Tarif').should('exist')
   })

  //Validate total number of tariffs displayed matches the total listed number of tariffs above result
  cy.get('[class="product-list comparison-footer-is-open"]').find('product').its('length').should('eq', parseInt(totalTrafficCount))
  //both are equal to totalTrafficCount
}  
validateLoadButtonNotAppearOnLastPage() {
   cy.wait(1000)
   cy.log('Button Not Found. Pagination Ended')
   cy.get('[class="button load-more-button"]').should('not.exist')
}  
 validateTrafficResultListPageAppear() {   
    cy.get('[class="product"]').eq(0).within(() => {
    cy.contains('PREIS-LEISTUNGSSIEGER').should('exist')
    cy.get('[class="product-group product-group-logo"]').should('exist')
    cy.contains('Getsafe Digital GmbH Comfort').should('exist')
  })
 }
 validateTariffPriceOfTheFirstTariff() {   
  
   var a = '29,16 €'
   cy.get('[class="product"]').eq(0).within(() => {
    
      cy.get('[class="price"]').should($el => expect($el.text().trim()).to.include(a.trim()));
    // cy.get('[class="price"]').should($el => expect($el.text().trim()).equal('29,16 €'));

      cy.pause()
/*
   
      expect(cy.get('[class="price"]').text().trim()).to.eq(trim(a))
      cy.pause()


    cy.get('[class="price"]').should('exist')
   // cy.contains('\n 29,16 €\n **').should('exist')
    cy.get('[class="price"]').should('include.text', trim(a))
   */
})
 }
 ValidateTariffDetailsSections1() {   
    //Validate “Wich­tigs­te Leis­tun­gen", “Allgemein“, „ Tätigkeiten und Hobbys“
    cy.get('[class="detail-container"]').eq(0).within(() => {
      cy.get('[class="navigation"]').should('have.text','Wich­tigs­te Leis­tun­gen')
      cy.get('[class="navigation"]').should('have.text','All­ge­mein')
      cy.get('[class="navigation"]').should('have.text','Tä­tig­kei­ten und Hob­bys')
 })
 } 
 ValidateTariffDetailsSections2() {   
    // “Miete & Immobilien” and “Dokumente”
    cy.get('[class="detail-container"]').eq(0).within(() => {
      cy.get('[class="navigation"]').should('have.text','Miete & Im­mo­bi­li­en')
      cy.get('[class="navigation"]').should('have.text','Do­kumen­te')
 })
 } 
 //ZUM ONLINE-ANTRAG button appear
 ValidateZUMONLINENTRAGButtonAppear() {
   cy.get('[class="product"]').eq(0).within(() => {
      cy.contains('Zum Online-Antrag').should('exist')
    })
 } 
}
module.exports = assertions;