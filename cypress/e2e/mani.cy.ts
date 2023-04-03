describe('first', { tags: '@mani' }, () => {
  it('try grep', () => {
    cy.visit('/')

    cy.get('body').then((body) => {
      console.log(body.find('label:contains(Readonly)'))
      body.append('<h1>This is append to body </h1>')


     body.find('h1').each($el=>{
      console.log($el.toString)
      
     })
     });
     



 


  });
})
