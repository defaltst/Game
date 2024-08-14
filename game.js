function update(){
    const elemTD = document.querySelectorAll('td');
    elemTD.forEach(td => {
        if(pla === 0){
            td.classList.add('red-shadow');
            td.classList.remove('yellow-shadow');
        }
        else{
            td.classList.add('yellow-shadow');
            td.classList.remove('red-shadow');
        }
    });
}
function check(pos,fil,who){
    let con = 0;
    //columna
    for(i = 7; i >= 1; i--){
        if(con == 4) return 1;
        if(who == 1 && col[i][fil] == 'r') con ++;
        else if(who == 0 && col[i][fil] == 'y') con ++;
        else con = 0;
    }

    //diagonal abajo 
    let aux = fil;
    con = 1;
    for(i = pos; i <= 7; i++){
        if(aux > 6) break;
        if(con == 4) return 1;
        if(who == 1 && col[i][aux] == 'r') con ++;
        else if(who == 0 && col[i][aux] == 'y') con ++;
        else con = 0;
        aux ++;
    }

    //diagonal arriba
    aux = fil;
    con = 1;
    for(i = pos; i >= 1; i--){
        if(aux > 6) break;
        if(con == 4) return 1;
        if(who == 1 && col[i][aux] == 'r') con ++;
        else if(who == 0 && col[i][aux] == 'y') con ++;
        else con = 0;
        aux ++;
    }
    aux = fil;
    con = 1;
    for(i = pos; i <= 7; i++){
        if(aux < 1) break;
        if(con == 4) return 1;
        if(who == 1 && col[i][aux] == 'r') con ++;
        else if(who == 0 && col[i][aux] == 'y') con ++;
        else con = 0;
        aux --;
    }

    //horizontal
    con = 0;
    for(i = 1; i <= 6; i++){
        if(con == 4) return 1;
        if(who == 1 && col[pos][i] == 'r') con ++;
        else if(who == 0 && col[pos][i] == 'y') con ++;
        else con = 0;
    }
    con = 0;
    for(i = 6; i >= 1; i--){
        if(con == 4) return 1;
        if(who == 1 && col[pos][i] == 'r') con ++;
        else if(who == 0 && col[pos][i] == 'y') con ++;
        else con = 0;
    }

    return 0;
}
function refrescar(){
    document.getElementById("rest").addEventListener('click',function(){
        location.reload();
    });
}
function limpiar(){
    document.getElementById("clean").addEventListener('click',function(){
        document.getElementById("out-p1").textContent = "0";
        document.getElementById("out-p2").textContent = "0";
    });
}
function borrar(){
    const elemTD = document.querySelectorAll('td');
    elemTD.forEach(td => {
        td.style.backgroundColor = "";
    });
    for(i = 1; i <= 7; i++){
        for(j = 1; j <= 6; j++){
            mark[i][j] = 0;
            col[i][j] = '.';
        }
    }
}

function make(fil){
    let pos = 0;
    if(pla == 0){
        pla = 1;
        for(i = 7; i >= 1; i--){
            if(mark[i][fil] == 0){
                cord[i][fil].style.backgroundColor = "red";
                mark[i][fil] = 1;
                col[i][fil] = 'r';
                pos = i;
                if(check(pos,fil,1) == 1){
                    con_p1 ++;
                    document.getElementById("out-p1").textContent = con_p1;
                    borrar();
                    pla = 0;
                }
                update();
                break;
            }
        }
    }
    else{
        pla = 0;
        for(i = 7; i >= 1; i--){
            if(mark[i][fil] == 0){
                cord[i][fil].style.backgroundColor = "yellow";
                mark[i][fil] = 1;
                col[i][fil] = 'y';
                pos = i;
                if(check(pos,fil,0) == 1){
                    con_p2 ++;
                    document.getElementById("out-p2").textContent = con_p2;
                    borrar();
                }
                update();
                break;
            }
        }
    }
}