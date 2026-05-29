package Aula6_22_05.atv5;

public class tipagemForte extends Thread {
    public void run() {
        System.out.println("Tarefa em segundo plano em Java!");
    }
    
    public static void main(String[] args) {
        tipagemForte tarefa = new tipagemForte();
        tarefa.start(); // Inicia a thread
    }
}


