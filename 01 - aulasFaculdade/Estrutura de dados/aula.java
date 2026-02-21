class BubbleSort 
{
public static int [] Bolha (int numeros []){
final int n = numeros.length;
int aux;
for (int i = 0 ; i < n-1; i++){
 for (int j = 0 ; j < n-1-i; i++){
  if ( numeros [j] > numeros[j+1])
  {
  aux = numeros[j];
  numeros[j] = numeros[j+1];
  numeros[j+1] = aux;
  }
 }
}
return numeros;
}
public static void main(String entrada [])
{
int i, vet[] = {9,5,1,3,10s,8,4,6,7,2,12,15,16,18,20};
vet = Bolha(vet);
for (i = 0; i<15; i++)
{
System.out.print(vet[i] + " ");
}
System.exit(0);
}

}