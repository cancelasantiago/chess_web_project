/*
NOTAS:
1) posy son los numeros
2) posx son las letras
*/

//clases de las fichas
//----------------------------------------------------------------------- 
class Torre{
    constructor(id, color, posy, posx){
        this.id = id;
        this.color = color;
        this.pos = [posy, posx];
        this.primer_mov = true;
        if (this.color == 'blanco'){
            this.img = '/Images/Torre.png'
        }
        else{
            this.img = '/Images/TorreNegra.png'
        }
    }
}
class Caballo{
    constructor(id, color, posy, posx){
        this.id = id;
        this.color = color;
        this.pos = [posy, posx];
        if (this.color == 'blanco'){
            this.img = '/Images/Caballo.png'
        }
        else{
            this.img = '/Images/CaballoNegro.png'
        }
    }
}
class Alfil{
    constructor(id, color, posy, posx){
        this.id = id;
        this.color = color;
        this.pos = [posy, posx];
        if (this.color == 'blanco'){
            this.img = '/Images/Alfil.png'
        }
        else{
            this.img = '/Images/AlfilNegro.png'
        }
    }
}
class Queen{
    constructor(id, color, posy, posx){
        this.id = id;
        this.color = color;
        this.pos = [posy, posx];
        if (this.color == 'blanco'){
            this.img = '/Images/Reina.png'
        }
        else{
            this.img = '/Images/ReinaNegra.png'
        }
    }
}
class Rey{
    constructor(id, color, posy, posx){
        this.id = id;
        this.color = color;
        this.pos = [posy, posx];
        this.primer_mov = true;
        if (this.color == 'blanco'){
            this.img = '/Images/Rey.png'
        }
        else{
            this.img = '/Images/ReyNegro.png'
        }
    }
}
class Peon{
    constructor(id, color, posy, posx){
        this.id = id;
        this.color = color;
        this.pos = [posy, posx];
        this.primer_mov = true;
        
        if (this.color == 'blanco'){
            this.img = '/Images/Peon.png'
        }
        else{
            this.img = '/Images/PeonNegro.png'
        }
    }
}
//----------------------------------------------------------------------- 
//inicializo las fichas
//----------------------------------------------------------------------- 
var torre_blanca_i = new Torre('izq','blanco', 0, 0);
var torre_blanca_d = new Torre('der', 'blanco', 0, 7);
var caballo_blanco_i = new Caballo('der', 'blanco', 0, 1);
var caballo_blanco_d = new Caballo('der', 'blanco', 0, 6);
var alfil_blanco_i = new Alfil('izq', 'blanco', 0, 2);
var alfil_blanco_d = new Alfil('der', 'blanco', 0, 5);
var queen_blanca = new Queen('queen', 'blanco', 0, 3);
var rey_blanco = new Rey('rey', 'blanco', 0, 4);
var peon_blanco_0 = new Peon('0', 'blanco', 1, 0);
var peon_blanco_1 = new Peon('1', 'blanco', 1, 1);
var peon_blanco_2 = new Peon('2', 'blanco', 1, 2);
var peon_blanco_3 = new Peon('3', 'blanco', 1, 3);
var peon_blanco_4 = new Peon('4', 'blanco', 1, 4);
var peon_blanco_5 = new Peon('5', 'blanco', 1, 5);
var peon_blanco_6 = new Peon('6', 'blanco', 1, 6);
var peon_blanco_7 = new Peon('7', 'blanco', 1, 7);

var torre_negra_i = new Torre('izq','negro', 0, 7);
var torre_negra_d = new Torre('der', 'negro', 7, 7);
var caballo_negro_i = new Caballo('der', 'negro', 7, 1);
var caballo_negro_d = new Caballo('der', 'negro', 7, 6);
var alfil_negro_i = new Alfil('izq', 'negro', 7, 2);
var alfil_negro_d = new Alfil('der', 'negro', 7, 5);
var queen_negra = new Queen('queen', 'negro', 7, 3);
var rey_negro = new Rey('rey', 'negro', 7, 4);
var peon_negro_0 = new Peon('0', 'negro', 6, 0);
var peon_negro_1 = new Peon('1', 'negro', 6, 1);
var peon_negro_2 = new Peon('2', 'negro', 6, 2);
var peon_negro_3 = new Peon('3', 'negro', 6, 3);
var peon_negro_4 = new Peon('4', 'negro', 6, 4);
var peon_negro_5 = new Peon('5', 'negro', 6, 5);
var peon_negro_6 = new Peon('6', 'negro', 6, 6);
var peon_negro_7 = new Peon('7', 'negro', 6, 7);
//----------------------------------------------------------------------- 
//cargo las tablas
//----------------------------------------------------------------------- 
//tabla de fichas
var table = [[torre_blanca_i, caballo_blanco_i, alfil_blanco_i, queen_blanca, rey_blanco, alfil_blanco_d, caballo_blanco_d, torre_blanca_d],
            [peon_blanco_0, peon_blanco_1, peon_blanco_2, peon_blanco_3, peon_blanco_4, peon_blanco_5, peon_blanco_6, peon_blanco_7],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [peon_negro_0, peon_negro_1, peon_negro_2, peon_negro_3, peon_negro_4, peon_negro_5, peon_negro_6, peon_negro_7],
            [torre_negra_i, caballo_negro_i, alfil_negro_i, queen_negra, rey_negro, alfil_negro_d, caballo_negro_d, torre_negra_d]];

//tabla de movimientos
//esta hecha para iluminar los casilleros a donde se puede mover una ficha.
var table_movs = 
            [[0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0]];

//tabla de cruces
//esta hecha para marcar con una cruz las piezas que se puede comer cada ficha
var table_cruces = 
            [[0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0]];

//tabla de turnos
//1 es mi turno, 2 no es mi turno
var table_turns = 
            [[1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [2,2,2,2,2,2,2,2],
            [2,2,2,2,2,2,2,2]];

//----------------------------------------------------------------------- 
//funciones
//----------------------------------------------------------------------- 
function remover_ficha(posx, posy){
    var id_img = 'img_'+posx+'_'+posy; //obtengo el id de la imagen de la ficha
    var img_div = document.getElementById(id_img); //obtengo el elemento
    img_div.remove(); //lo elimino y asi desaparece del tablero
    //en la funcion "posicionar_ficha" es donde se saca la ficha del tablero
}

//funcion para mover una ficha desde su posicion hasta (posx, posy)
function posicionar_ficha(ficha, posx, posy){
    var aux_y = ficha.pos[0]; //posicion actual de la ficha en y
    var aux_x = ficha.pos[1]; //posicion actual de la ficha en x

    //creo el elemento imagen a colocar en la posicion destino (posx, posy)
    var img_element = document.createElement("img");
    img_element.setAttribute("src", ficha.img);
    img_element.setAttribute("id", "img_"+posx+"_"+posy);
    img_element.setAttribute("class", "pieza");
    img_element.setAttribute("onclick", "posibles_movs("+posx+','+posy+")");

    //coloco la imagen en el div correspondiente
    //crear funcion para esto
    var id_div = 'box_'+posx+'_'+posy;
    var div_objetivo = document.getElementById(id_div);
    div_objetivo.appendChild(img_element);

    //remuevo la imagen en donde estaba originalmente la ficha
    remover_ficha(ficha.pos[1], ficha.pos[0]);

    //reseteo la tabla de movimientos posibles
    /*table_movs[ficha.pos[1]][ficha.pos[0]] = 0;
    table_movs[posx][posy] = 1;*/
    reset_table_mov(table_movs);
    
    //registro el movimiento en la tabla de turnos
    table_turns[posy][posx] = table_turns[ficha.pos[0]][ficha.pos[1]]
    table_turns[ficha.pos[0]][ficha.pos[1]] = 0;

    //agrego a la tabla de fichas a la pieza en la casilla destino y la saco de la casilla origen
    table[posy][posx] = table[ficha.pos[0]][ficha.pos[1]];
    table[posy][posx].primer_mov = false; //saco el primer movimiento del peon, torre o rey para que no puedan moverse dos lugares o hacer enrroque
    table[posy][posx].pos = [posy,posx];

    table[aux_y][aux_x] = 0;

    //una vez me muevo invierto los turnos
    change_turn(table_turns);
}

//funcion para agregar las cruces a las fichas que se me es posible comer
function set_table_cruces(posx_cruz, posy_cruz, posx_ficha, posy_ficha){
    //posx_cruz y posy_cruz son las coordenadas a poner la cruz
    //se pasa de a una ya que esta funcion es invocada en un for, y po cada iteración se pasa las casillas en donde es posible comer
    if ((table[posy_cruz][posx_cruz]!=0)){
        var ficha = table[posy_ficha][posx_ficha]; //obtengo la ficha que soy
        var ficha_a_comer = table[posy_cruz][posx_cruz]; //obtengo la ficha a comer
        if ((ficha.color == 'blanco') && (ficha_a_comer.color == 'negro')){ //si son de colores opuestos tengo permitido comer
            table_cruces[posx_cruz][posy_cruz] = 1;
            var id_div = 'box_'+posx_cruz+'_'+posy_cruz; //id del div en donde voy a colocar la cruz
            var div_objetivo = document.getElementById(id_div); //div en donde voy a colocar la cruz
            
            //creo la imagen de la cruz y la coloco en el div
            var img_cruz = document.createElement("img");
            img_cruz.setAttribute("src",'/Images/Cruz.png');
            img_cruz.setAttribute("id", "cruz_"+posx_cruz+"_"+posy_cruz);
            img_cruz.setAttribute("class", "cruz")
            img_cruz.setAttribute("onclick", "comer("+posx_ficha+","+posy_ficha+","+posx_cruz+","+posy_cruz+")");
            div_objetivo.append(img_cruz);
        }
    }
}

//funcion que cambia el turno del jugador
function change_turn(table_turns){
    for (var i=0; i<8; i++){
        for (var j = 0; j<8; j++){
            if ((table_turns[i][j]) == 1){
                table_turns[i][j] = 2;
            } else if (table_turns[i][j] == 2){
                table_turns[i][j] = 1;
            }
        }
    }
}

//funcion comer
//quizas esta al pedo
function comer(posx, posy, posx_a_comer, posy_a_comer){
    remover_ficha(posx_a_comer, posy_a_comer);

    var ficha = table[posy][posx];
    posicionar_ficha(ficha, posx_a_comer, posy_a_comer);
}

//setea la tablas de los posibles movimientos de una ficha
function set_table_mov(posx, posy, pos_fichax, pos_fichay){
    //obtengo el div objetivo
    //son varios puesto que esta funcion esta incluida dentro de un for
    var id = 'box_'+posx+'_'+posy;
    var targetDiv = document.getElementById(id);

    //seteo en uno el casillero correspondiente
    table_movs[posx][posy] = 1;

    //creo un div blanco transparente para que simule la iluminacion de los casillero posibles a donde puedo ir
    var mov = document.createElement("div");
    mov.setAttribute("class", "mov_box");
    mov.setAttribute("id", "mov_box_"+posx+"_"+posy);
    mov.setAttribute("onclick", "mover("+pos_fichax+","+pos_fichay+","+posx+","+posy+")");
    targetDiv.append(mov);
}

//reseteo la tabla de movimientos
function reset_table_mov(table_movs){
    //recorro toda la tabla con los dos for
    for (var i=0; i<8; i++){
        for (var j = 0; j<8; j++){
            if ((table_movs[i][j]) == 1){
                //remuevo los divs que me iluminan los casilleros
                var id_mov = 'mov_box_'+i+'_'+j;
                var childDiv = document.getElementById(id_mov);
                table_movs[i][j] = 0;
                if (childDiv != null){
                    childDiv.remove();
                }
            }
            if((table_cruces[i][j] == 1)){
                //remuevo las cruces
                table_cruces[i][j] = 0;
                var id_cruz = 'cruz_'+i+'_'+j;
                var child_img = document.getElementById(id_cruz);
                child_img.remove();
            }
        }
    }
}

//funcion para inicializar la tabla con las fichas
function cargar_tabla(table, id){
    //obtengo el div
    var targetDiv = document.getElementById(id);
    var j = parseInt(id.charAt(4), 10); //saco la coordenada en x
    var i = parseInt(id.charAt(6), 10); //saco la coordenada en y
    if (table[i][j] != 0){ //si la tabla no es vacia en esta posicion
        //la tabla tiene las x e y invertidas
        var img = document.createElement("img");
        img.setAttribute("src", table[i][j].img);
        img.setAttribute("id", "img_"+j+"_"+i);
        img.setAttribute("class", "pieza");
        img.setAttribute("onclick", "posibles_movs("+posx+','+posy+")")
        targetDiv.appendChild(img);
    }
}

//funcion que me devuelve un array con los casilleros a los que se me es posible moverme con cierta ficha
function casilleros(ficha){
    //saco las posicion de la ficha
    var posx = ficha.pos[1];
    var posy = ficha.pos[0];

   
    //obtengo el nombre para comparar en el switch
    var clase = ficha.constructor.name;
    var ret = [];
    if (table_turns[posy][posx] == 1){
        switch (clase){
            case 'Torre':
                var i, j, k, l;
                i = j = k = l = 1;
                while (posx + i != 8 && table[posy][posx + i] == 0){
                    ret.push([posx+i, posy]);
                    i = i+1;
                }
                while (posx - j >= 0 && table[posy][posx - j] == 0){
                    ret.push([posx-j, posy]);
                    j = j+1;
                }
                while (posy + k != 8 && table[posy+k][posx] == 0){
                    ret.push([posx, posy+k]);
                    k = k+1;
                }
                while (posy - l >= 0 && table[posy-l][posx] == 0){
                    ret.push([posx, posy-l]);
                    l = l+1;
                }
                if (posx+i != 8 && table[posy][posx+i] != 0){
                    set_table_cruces(posx+i, posy, posx, posy);
                }
                if (posx-j >= 0 && table[posy][posx-j] != 0){
                    set_table_cruces(posx-j, posy, posx, posy);
                }
                if (posy+k != 8 && table[posy+k][posx] != 0){
                    set_table_cruces(posx, posy+k, posx, posy);
                }
                if (posy-l >= 0 && table[posy-l][posx] != 0){
                    set_table_cruces(posx, posy-l, posx, posy);
                }
            break;
            case 'Caballo':
                if (posx+2 < 8){
                    if (posy+1 < 8){
                        if (table[posy+1][posx+2] == 0){
                            ret.push([posx+2, posy+1]);
                        }
                        else{
                            set_table_cruces(posx+2, posy+1, posx, posy);
                        }
                    }
                    if (posy-1 >= 0){
                        if (table[posy-1][posx+2] == 0){
                            ret.push([posx+2, posy-1]);
                        }
                        else{
                            set_table_cruces(posx+2, posy-1, posx, posy);
                        }
                    }
                }
                if (posy+2 < 8){
                    if (posx+1 < 8){
                        if (table[posy+2][posx+1] == 0){
                            ret.push([posx+1, posy+2]);
                        }
                        else{
                            set_table_cruces(posx+1, posy+2, posx, posy);
                        }
                    }
                    if (posx-1 >= 0){
                        if (table[posy+2][posx-1] == 0){
                            ret.push([posx-1, posy+2])
                        }
                        else{
                            set_table_cruces(posx-1, posy+2, posx, posy);
                        }
                    }
                }
                if (posx-2 >= 0){
                    if (posy-1 >= 0){
                        if (table[posy-1][posx-2] == 0){
                            ret.push([posx-2, posy-1]);
                        }
                        else{
                            set_table_cruces(posx-2, posy-1, posx, posy);
                        }
                    }
                    if (posy+1 < 8){
                        if (table[posy+1][posx-2] == 0){
                            ret.push([posx-2, posy+1]);
                        }
                        else{
                            set_table_cruces(posx-2, posy+1, posx, posy);
                        }
                    }
                }
                if (posy-2 >= 0){
                    if (posx-1 >= 0){
                        if (table[posy-2][posx-1] == 0){
                            ret.push([posx-1, posy-2]);
                        }
                        else{
                            set_table_cruces(posx-1, posy-2, posx, posy);
                        }
                    }
                    if (posx+1 < 8){
                        if (table[posy-2][posx+1] == 0){
                            ret.push([posx+1, posy-2]);
                        }
                        else{
                            set_table_cruces(posx+1, posy-2, posx, posy);
                        }
                    }
                }
            break;
            case 'Alfil':
                var i, j, k, l;
                i = j = k = l = 1;
                while (posx + i != 8 && posy + i != 8 && table[posy + i][posx + i] == 0){
                    ret.push([posx+i, posy+i]);
                    i = i+1;
                }
                while (posx - j >= 0 && posy - j >= 0 && table[posy - j][posx - j] == 0){
                    ret.push([posx-j, posy-j]);
                    j = j+1;
                }
                while (posx + k != 8 && posy - k >= 0 && table[posy - k][posx + k] == 0){
                    ret.push([posx+k, posy-k]);
                    k = k+1;
                }
                while (posx - l >= 0 && posy + l != 8 && table[posy + l][posx - l] == 0){
                    ret.push([posx-l, posy+l]);
                    l = l+1;
                }
                if (posy+i != 8 && posx+i != 8 && table[posy+i][posx+i] != 0){
                    set_table_cruces(posx+i, posy+i, posx, posy);
                }
                if (posy-j >= 0 && posx-j >= 0 && table[posy-j][posx-j] != 0){
                    set_table_cruces(posx-j, posy-j, posx, posy);
                }
                if (posy-k >= 0 && posx+k != 8 && table[posy-k][posx+k] != 0){
                    set_table_cruces(posx+k, posy-k, posx, posy);
                }
                if (posy+l != 8 && posx-l >= 0 && table[posy+l][posx-l] != 0){
                    set_table_cruces(posx-l, posy+l, posx, posy);
                }
            break;
            case 'Queen':
                var i, j, k, l;
                i = j = k = l = 1;
                while (posx + i != 8 && table[posy][posx + i] == 0){
                    ret.push([posx+i, posy]);
                    i = i+1;
                }
                while (posx - j >= 0 && table[posy][posx - j] == 0){
                    ret.push([posx-j, posy]);
                    j = j+1;
                }
                while (posy + k != 8 && table[posy+k][posx] == 0){
                    ret.push([posx, posy+k]);
                    k = k+1;
                }
                while (posy - l >= 0 && table[posy-l][posx] == 0){
                    ret.push([posx, posy-l]);
                    l = l+1;
                }
                var i2, j2, k2, l2;
                i2 = j2 = k2 = l2 = 1;
                while (posx + i2 != 8 && posy + i2 != 8 && table[posy + i2][posx + i2] == 0){
                    ret.push([posx+i2, posy+i2]);
                    i2 = i2+1;
                }
                while (posx - j2 >= 0 && posy - j2 >= 0 && table[posy - j2][posx - j2] == 0){
                    ret.push([posx-j2, posy-j2]);
                    j2 = j2+1;
                }
                while (posx + k2 != 8 && posy - k2 >= 0 && table[posy - k2][posx + k2] == 0){
                    ret.push([posx+k2, posy-k2]);
                    k2 = k2+1;
                }
                while (posx - l2 >= 0 && posy + l2 != 8 && table[posy + l2][posx - l2] == 0){
                    ret.push([posx-l2, posy+l2]);
                    l2 = l2+1;
                }
                if (posy+i2 != 8 && posx+i2 != 8 && table[posy+i2][posx+i2] != 0){
                    set_table_cruces(posx+i2, posy+i2, posx, posy);
                }
                if (posy-j2 >= 0 && posx-j2 >= 0 && table[posy-j2][posx-j2] != 0){
                    set_table_cruces(posx-j2, posy-j2, posx, posy);
                }
                if (posy-k2 >= 0 && posx+k2 != 8 && table[posy-k2][posx+k2] != 0){
                    set_table_cruces(posx+k2, posy-k2, posx, posy);
                }
                if (posy+l2 != 8 && posx-l2 >= 0 && table[posy+l2][posx-l2] != 0){
                    set_table_cruces(posx-l2, posy+l2, posx, posy);
                }
                if (posx+i != 8 && table[posy][posx+i] != 0){
                    set_table_cruces(posx+i, posy, posx, posy);
                }
                if (posx-j >= 0 && table[posy][posx-j] != 0){
                    set_table_cruces(posx-j, posy, posx, posy);
                }
                if (posy+k != 8 && table[posy+k][posx] != 0){
                    set_table_cruces(posx, posy+k, posx, posy);
                }
                if (posy-l >= 0 && table[posy-l][posx] != 0){
                    set_table_cruces(posx, posy-l, posx, posy);
                }
            break;
            case 'Rey':
                if (ficha.color == 'blanco'){
                    //enrroque
                    if((ficha.primer_mov == true) && (table[0][0]!=0) && (table[0][0].constructor.name == 'Torre') && (table[0][0].primer_mov == true)){
                        if ((table[0][1] == 0) && (table[0][2] == 0) && (table[0][3] == 0)){
                            ret.push([1, 0], [2, 0]);
                        }
                    }
                    if((ficha.primer_mov == true) && (table[0][7]!=0) && (table[0][7].constructor.name == 'Torre') && (table[0][7].primer_mov == true)){
                        if ((table[0][5] == 0) && (table[0][6] == 0)){
                            ret.push( [6, 0]);
                        }
                    }
                    //movimientos
                    //falta implementar el jaque y jaque mate
                    if (posx+1 < 8){
                        if (table[posy][posx+1] == 0){
                            ret.push([posx+1, posy]);
                        }
                        else{
                            set_table_cruces(posx+1, posy, posx, posy);
                        }
                        if (posy+1 < 8){
                            if (table[posy+1][posx+1] == 0){
                                ret.push([posx+1, posy+1]);
                            }
                            else{
                                set_table_cruces(posx+1, posy+1, posx, posy);
                            }
                        }
                        if (posy-1 >=0){
                            if (table[posy-1][posx+1] == 0){
                                ret.push([posx+1, posy-1]);
                            }
                            else{
                                set_table_cruces(posx+1, posy-1, posx, posy);
                            }
                        }
                    }
                    if (posx-1 >= 0){
                        if (table[posy][posx-1] == 0){
                            ret.push([posx-1, posy]);
                        }
                        else{
                            set_table_cruces(posx-1, posy, posx, posy);
                        }
                        if (posy+1 < 8){
                            if (table[posy+1][posx-1] == 0){
                                ret.push([posx-1, posy+1]);
                            }
                            else{
                                set_table_cruces(posx-1, posy+1, posx, posy);
                            }
                        }
                        if (posy-1 >= 0){
                            if (table[posy-1][posx-1] == 0){
                                ret.push([posx-1, posy-1]);
                            }
                            else{
                                set_table_cruces(posx-1, posy-1, posx, posy);
                            }
                        }
                    }
                    if (posy+1 < 8){
                        if (table[posy+1][posx] == 0){
                            ret.push([posx, posy+1]);
                        }
                        else{
                            set_table_cruces(posx, posy+1, posx, posy);
                        }
                    }
                    if (posy-1 >= 0){
                        if (table[posy-1][posx] == 0){
                            ret.push([posx, posy-1]);
                        }
                        else{
                            set_table_cruces(posx, posy-1, posx, posy);
                        }
                    }
                }
                else{
                }
            break;
            case ('Peon'):
                if (ficha.color == 'blanco'){
                    if ((ficha.primer_mov == true) && (table[posy+1][posx]==0) && (table[posy+2][posx]==0)){
                        ret = [[posx, posy+1], [posx,posy+2]];
                    }
                    else if ((ficha.primer_mov == true) && (table[posy+1][posx]==0) && (table[posy+2][posx]!=0)){
                        ret = [[posx, posy+1]];
                    }
                    else if ((ficha.primer_mov == true) && (table[posy+1][posx]!=0) && (table[posy+2][posx]!=0)){
                        ret = [];
                    }
                    else if ((ficha.primer_mov == false) && (table[posy+1][posx]==0)){
                        ret = [[posx, posy+1]];
                    }
                    else if ((ficha.primer_mov == false) && (table[posy+1][posx]!=0)){
                        ret = [];
                    }
                    else if ((posy+1 == 7)){
                        //elegir pieza
                    }
                    //para comer fichas
                    if (posx-1>=0 && posy+1<8){
                        if (table[posy+1][posx+1] != 0){
                            var ficha_a_comer = table[posy+1][posx+1];
                            if (ficha_a_comer.color == 'negro'){
                                //ret.push([posx+1, posy+1]);
                                set_table_cruces(posx+1, posy+1, posx, posy)
                            }
                        }
                        if (table[posy+1][posx-1] != 0){
                            var ficha_a_comer = table[posy+1][posx-1];
                            if (ficha_a_comer.color == 'negro'){
                                //ret.push([posx-1, posy+1]);
                                set_table_cruces(posx-1, posy+1, posx, posy)
                            }
                        }
                    }
                    return ret;
                }
                else{
                    if ((ficha.primer_mov == true) && (table[posy-1][posx]==0) && (table[posy-2][posx]==0)){
                        ret = [[posx, posy-1], [posx,posy-2]];
                
                    }
                    else if ((ficha.primer_mov == true) && (table[posy-1][posx]==0) && (table[posy-2][posx]!=0)){
                        ret = [[posx, posy-1]];
                    }
                    else if ((ficha.primer_mov == true) && (table[posy-1][posx]!=0) && (table[posy-2][posx]!=0)){
                        ret = [];
                    }
                    else if ((ficha.primer_mov == false) && (table[posy-1][posx]==0)){
                        ret = [[posx, posy-1]];
                    }
                    else if ((ficha.primer_mov == false) && (table[posy-1][posx]!=0)){
                        ret = [];
                    }
                    else if ((posy-1 == 0)){
                        //elegir pieza
                    }
                }
            break;
        }
    }
    return ret; 
}

//funcion para mover
function mover(pos_inix, pos_iniy, pos_finalx, pos_finaly){
    var ficha = table[pos_iniy][pos_inix];
    posicionar_ficha(ficha, pos_finalx, pos_finaly);
}

function posibles_movs(posx, posy){
    reset_table_mov(table_movs);
    var ficha = table[posy][posx];
    var aux = casilleros(ficha);
    for (var i = 0; i<aux.length; i++){
        set_table_mov(aux[i][0], aux[i][1], posx, posy);
    }
}