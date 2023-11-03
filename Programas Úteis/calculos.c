#include <stdio.h>

int main(){



int contador1;
int contador2;
int contador3;
float valor;
float Imax1=0;
float Imin1=300;
float soma=0;

contador3=0;

while(contador3< 200){

    contador1=0;
    contador2=0;
    Imax1=0;
    Imin1=300;
    soma=0;



    printf("var fase1 = [");
    while(contador1<=95){
            scanf("%f", &valor);
            printf("%.2f", valor);
            if(valor>Imax1)Imax1=valor;
            if(Imin1>valor)Imin1=valor;
            soma = soma + valor;
            if(contador1!=95)printf(",");
            else printf("]\n");


        contador1++;
    }
            printf("setFase1(fase1); localStorage.setItem('fase1', JSON.stringify(fase1));\n");
            printf("setImax1(%.2f);\n", Imax1);
            printf("setmin1(%.2f);\n", Imin1);
            printf("setPot1max(%.2f)\n",Imax1*127/1000);
            printf("setPot1min(%.2f);\n", Imin1*127/1000);
            printf("setPTotal1(%.2f);\n", soma*127/1000/96/4);




contador1=0;
    contador2=0;
    Imax1=0;
    Imin1=300;
    soma=0;

    printf("var fase2 = [");
    while(contador2<=95){

           scanf("%f", &valor);
            printf("%.2f", valor);
            if(valor>Imax1)Imax1=valor;
            if(Imin1>valor)Imin1=valor;
            soma = soma + valor;
            if(contador2!=95)printf(",");
            else printf("]\n");



        contador2++;
    }

    printf("setFase2(fase2); localStorage.setItem('fase2', JSON.stringify(fase2));\n");
            printf("setImax2(%.2f);\n", Imax1);
            printf("setmin2(%.2f);\n", Imin1);
            printf("setPot2max(%.2f)\n",Imax1*127/1000);
            printf("setPot2min(%.2f);\n", Imin1*127/1000);
            printf("setPTotal2(%.2f);\n", soma*127/1000/96/4);




    contador3++;
}







return 0;
}
