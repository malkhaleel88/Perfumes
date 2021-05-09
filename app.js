// This is my first websites and it is about Perfumes //

alert ("Welcome to Perfumes World")

var Brand = prompt('Choose form the list your favourite brand please ? \n 1-Christian Dior \n 2-CAROLINA HERRERA \n 3-HUGO BOSS' )

function userperfume(){
 while(Brand !== 'Christian Dior' && Brand !== 'CAROLINA HERRERA' && Brand !== 'HUGO BOSS'){
 Brand = prompt('Try from the list please ? \n 1-Christian Dior \n 2-CAROLINA HERRERA \n 3-HUGO BOSS' )
 }
 return userperfume
}


var Rate = prompt('How you rate your brand ? \n 1-5')

var getrate = function(){
 for(i=1; i<=Rate; i++){
  if(Brand === 'Christian Dior'){
  document.write('<img src="https://s3images.coroflot.com/user_files/individual_files/723615_ss5mbpxpjmmcajmcrtxsihppn.jpg">' + i)
  }else if(Brand === 'CAROLINA HERRERA'){
  document.write('<img src="https://www.brodheim.pt/media/2470/imagens-marcas-logos-08.png">' + i)
  }else if(Brand === 'HUGO BOSS'){
  document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiVTNQjQGDx6NKtsTR4AfF5YBG1DCjeWZDmI2USMqO17U3oRwum0D4PlTHM_xoCp5E8uc&usqp=CAU">' + i)
  }
 }
 return getrate()
}
confirm("Thank you") 