import java.util.Scanner;
class alunoNota {
    String nome;
    double teste, prova;

    public void lerNome() {
        Scanner keyboard = new Scanner(System.in);
        this.nome = keyboard.nextLine();
        keyboard.close();
    }

    double obterMedia() {
        return (teste + prova) / 2;

    }
}
