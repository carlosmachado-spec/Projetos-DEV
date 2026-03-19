class media {

    public static void main(String[] args) {
        alunoNota objeto = new alunoNota(); 

        objeto.lerNome();
        objeto.teste = 9;
        objeto.prova = 7;

        System.out.println(objeto.obterMedia());
    }
}
