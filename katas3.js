const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
function showresults(x,y){
    const element = document.createElement('div')
    element.id=y
    document.body.appendChild(element)
    element.innerHTML= x.toString()
}

function kata1() {
    let contar25 = [];
    for(let i=1; i<=25 ; i++){
        contar25.push(i)
    }
    return contar25
}
showresults(kata1(),'Contando25')

function kata2() {
    let contar25Rev = [];
    for(let i =25; i>=1 ;i--){
        contar25Rev.push(i)
    }
    return contar25Rev
}
showresults(kata2(),'Contando25Reverso')

function kata3() {
    let contar25neg = [];
    for(let i=-1 ; i>= -25 ; i=i-1){
        contar25neg.push(i)
    }
    return contar25neg
}
showresults(kata3(),'Contando25Negativo')

function kata4() {
    let contar25RevNeg = [];
    for(let i = -25; i<=-1; i=i+1){
        contar25RevNeg.push(i)
    }
    return contar25RevNeg    
}
showresults(kata4(),'Contando25RevNegativo')

function kata5() {
    let impar25 = [];
    for(let i =25; i>= -25 ; i--){
        if(i%2==1){
            impar25.push(i)
        }
    }
    return impar25
}
showresults(kata5(),'ContandoImpar25')

function kata6() {
    let divpor3 = [];
    for(let i = 3; i<=100; i++){
        if(i%3==0){
            divpor3.push(i)
        }
    }
    return divpor3
}
showresults(kata6(),'ContandoDivisível3')

function kata7() {
    let divpor7 = [];
    for(let i = 7 ; i<=100 ; i++){
        if(i%7==0){
            divpor7.push(i)
        }
    }
    return divpor7
}
showresults(kata7(),'ContandoDivisível7')

function kata8() {
    let divpor7ou3 = [];
    for(let i =100; i>=3; i--){
        if(i%3==0 || i%7==0){
            divpor7ou3.push(i)            
        }
    }
    return divpor7ou3
}
showresults(kata8(),'ContagemRegreDe7e3')
function kata9() {
    let imparDivPor5 = [];
    for(let i = 5; i<=100; i++){
        if(i%2==1 && i%5==0){
            imparDivPor5.push(i)
        }
    }
    return imparDivPor5
}
showresults(kata9(),'ImparDivi5')

function kata10() {
    let elementos20 = sampleArray;
    for(let i = 469; i<= sampleArray.length; i++){
        elementos20.push(i)
        
    }
    return elementos20
}
showresults(kata10(),'Elementos20')

function kata11() {
    let pares = [];
    for(let i = 0; i<=sampleArray.length; i++){
        if (sampleArray[i]%2 == 0) {
            pares.push(sampleArray[i])
        }
    }
    return pares
}
showresults(kata11(),'ParesSampleArray')
function kata12() {
    let impares = [];
    for(let i = 0; i<= sampleArray.length; i++){
        if(sampleArray[i]%2==1){
            impares.push(sampleArray[i])
        }
    }
    return impares
}
showresults(kata12(),'ImparesSampleArray')

function kata13() {
    let div8 = [];
    for(let i = 0; i<=sampleArray.length; i++){
        if(sampleArray[i]%8==0){
            div8.push(sampleArray[i])
        }
    }
    return div8
}
showresults(kata13(),'DivPor8')
function kata14() {
    let quad = [];
    for(let i = 0 ; i<sampleArray.length; i++){
        if(i*i===i**2){
            quad.push(sampleArray[i]*sampleArray[i])
        }
    }
    return quad
}
showresults(kata14(),'Quadrado')

function kata15() {
    let total = 0;
    for(let i = 1; i<= 20; i++){
        total=total + i;
            
        }
    return total
}
showresults(kata15(),'SomaTotal')

function kata16() {
    let totalSample = 0;
    for(let i= 0; i<sampleArray.length; i++){
        totalSample=totalSample + sampleArray[i]
    }
    return totalSample
}
showresults(kata16(), 'SomaTotalSample')

function kata17() {
    let menorNumero = sampleArray[0];
    for(let i = 0 ; i< sampleArray.length ; i++){
        if(menorNumero>sampleArray[i]){
            menorNumero=sampleArray[i]
        }
    }
    return menorNumero

}
showresults(kata17(),'MenorNumero')

function kata18() {
    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    let maiorNumero = 0;
    for(let i = 0 ; i< sampleArray.length ; i++){
        if(maiorNumero<sampleArray[i]){
            maiorNumero=sampleArray[i]
        }
    }
    return maiorNumero
    
}
showresults(kata18(),'MaiorNumero')

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
