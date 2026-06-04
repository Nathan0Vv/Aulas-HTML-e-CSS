package Aula6_22_05.atv4;

public class tipagemForte {
    String nome; public tipagemForte(String nome) {
        this.nome = nome;
    }

    public void saudacao() {
        System.out.println("Olá, meu nome é " + nome);
    }
    public static void main(String[] args) {
        tipagemForte pessoa = new tipagemForte("Carlos");
        pessoa.saudacao();
    }
}


