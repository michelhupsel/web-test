Feature('listar pets');

Scenario('test something',  ({ I }) => {
    I.amOnPage('/');
    I.waitForElement('#operations-pet-getPetById')
    I.click('#operations-pet-getPetById')
    I.waitForElement('.try-out__btn')
    I.click('.try-out__btn')
    I.click('//*[@id="operations-pet-getPetById"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr/td[2]/input')
    I.fillField('//*[@id="operations-pet-getPetById"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr/td[2]/input','1')
    I.click('//*[@id="operations-pet-getPetById"]/div[2]/div/div[3]/button')
    I.waitForElement('//*[@id="operations-pet-getPetById"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]')


    
});
