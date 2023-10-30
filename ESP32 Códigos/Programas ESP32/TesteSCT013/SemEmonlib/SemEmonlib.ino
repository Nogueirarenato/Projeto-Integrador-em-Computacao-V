
#include <LiquidCrystal_I2C.h>


LiquidCrystal_I2C LCD = LiquidCrystal_I2C(0x27, 16, 2);


int pinSCT = 15;
int pinSCT2 = 25;
int tensao =127;
int potencia;
int memoria;
int memoria2;


void setup() {
  Serial.begin(115200);
  pinMode(pinSCT, INPUT);
  pinMode(pinSCT2, INPUT);
  LCD.init();
  LCD.backlight();
  LCD.setCursor(0, 0);
  LCD.print("Ola Mundo");
  LCD.setCursor(0, 1);
  LCD.print("Univesp ");
 delay(1000);
 LCD.clear();

}

void loop() {
  

  memoria = 0;

  for(int i=0; i<300; i++){
    int valorAnalogico = analogRead(pinSCT);
    if(memoria < valorAnalogico){memoria = valorAnalogico;};
    delay(10);
  }

memoria2 = 0;

  for(int i=0; i<300; i++){
    int valorAnalogico2 = analogRead(pinSCT2);
    if(memoria2 < valorAnalogico2){memoria2 = valorAnalogico2;};
    delay(10);
  }

  
  double corrente = 141.42 *(memoria - 1963.00) /(4096-1963.00)/1.4142135623730;
  double corrente2 = 141.42 *(memoria2 - 1950.00) /(4096-1950.00)/1.4142135623730;
  LCD.clear();
  LCD.setCursor(0,0);
  LCD.print("Cor. = ");
  LCD.print(corrente);
  //LCD.print(memoria);
  LCD.print(" A");
  LCD.setCursor(0,1);
  LCD.print("Cor. = ");
  LCD.print(corrente2);
  //LCD.print(memoria2);
  LCD.print(" A");
  delay(1000);
  
  
  }
