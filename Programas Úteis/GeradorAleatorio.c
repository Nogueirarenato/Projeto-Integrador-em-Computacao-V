#include <stdio.h>
#include <conio.h>
#include <stdlib.h>
int main(void)
{
  int i;

  printf("Gerando 10 valores aleatorios:\n\n");

  for (i = 0; i < 10; i++)
  {
    /* gerando valores aleatórios entre zero e 100 */
    printf("data: ['%.d','%d','%d','%d','%d','%d','%d','%d','%d','%d','%d','%d','%d','%d','%d','%d','%d','%d','%d','%d','%d','%d','%d','%d','%d' ]\n", rand() % 10, rand() % 10, rand() % 10, rand() % 10, rand() % 10, rand() % 10, rand() % 10, rand() % 10, rand() % 10, rand() % 10, rand() % 10, rand() % 10, rand() % 10, rand() % 10, rand() % 10, rand() % 10, rand() % 10, rand() % 10, rand() % 10, rand() % 10, rand() % 10, rand() % 10, rand() % 10, rand() % 10);
  }

  getch();
  return 0;
}
