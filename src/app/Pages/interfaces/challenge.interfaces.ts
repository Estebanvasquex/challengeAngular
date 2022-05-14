export interface Users {
    nombre      : string;
    apellido    : string;
    correo      : string;
    cedula      : number;
}

export interface Cuentas {
    cedula  : number;
    cuenta  : number
}

export interface Products {
    cedula          : number;
    creditoAgil     : boolean;
    tarjetaCredito  : boolean;
    cuentaAhorro    : boolean;
    creditoVivienda : boolean;   
    
}

export interface Transacciones {
        cuenta      : number;
        creditoAgil :{
        comercio    :string;
        monto       : number;
        estado      : string;
        fechaHora   : Date;
    }
}

export interface Users {
    name: string;
    last: string;
    mail: string;
    id:   string;
}


export interface Acouns {
    acount:    string;
    acounName: string;
    id:        string;
    userId:    string;
}

export interface Transactions {
    date:        Date;
    description: string;
    mount:       number;
    tipo:        string;
    id:          string;
    acounId:     string;
}