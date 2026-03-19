import java.util.Scanner;

public class aluno {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        String name;
        System.out.println("Digite o nome do aluno");
        name = teclado.next();
        double nota1, nota2, media;

        System.out.println("Digite a primeira nota do aluno " + name);
        nota1 = teclado.nextDouble();

        System.out.println("Digite a segunda nota do aluno " + name);
        nota2 = teclado.nextDouble();

        media = (nota1 + nota2) / 2;
        if (media >= 6) {
            System.out.println("A media do aluno " + name + " é " + media + " o aluno aprovou");
        } else {
            System.out.println("A media do aluno " + name + " é " + media + " o aluno reprovou");
        }
    }
}
