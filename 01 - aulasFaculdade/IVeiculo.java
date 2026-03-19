// Implementacao sem heranca

class cachorro {
    String nome;
    int idade;

    public void latir() {
        System.out.println("Au au");
    }
}

class Gato {
    String nome;
    int idade;

    public void miar() {
        System.out.println("Miau!");

    }
}

// Implementacao com heranca

class animal {
    String nome;
    int idade;
}

class dog extends animal {
    public void latir() {
        System.out.println("Au");
    }
}

class cat extends animal {
    public void miar() {
        System.out.println("Miau");
    }

}

// Superclasse

class veiculo {
    String modelo;
    int ano;

    public void ligar() {
        System.out.println("Gire a chave");
    }

    public void desligar() {
        System.out.println("Retir a chave");
    }
}

class carro extends veiculo {

    public void ligar() {
        System.out.println("Gire a chave");
    }
}

class moto extends veiculo {

    public void ligar() {
        System.out.println("Aperte o botao");
    }
}


// interface

public interface IVeiculo {
    public void ligar ();
    public void desligar();
    public void abastecer (litros: dobule);
}

class Moto implements IVeiculo {
    public void ligar (){
        System.out.println("Aperte o Botáo");
    }
}