
#include <LiquidCrystal_I2C.h>


LiquidCrystal_I2C LCD = LiquidCrystal_I2C(0x27, 16, 2);


int pinSCT = 15;
int tensao =127;
int potencia;
int memoria;


void setup() {
  Serial.begin(115200);
  pinMode(pinSCT, INPUT);
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
  
  double corrente = 141.42 *(memoria - 1980.00) /2096;
  LCD.clear();
  LCD.setCursor(0,0);
  LCD.print("Cor. = ");
  LCD.print(corrente);
  LCD.print(" A");
  delay(1000);
  LCD.setCursor(0, 1);
  LCD.print(memoria);
  delay(250);
  LCD.print(".");
  delay(250);
  LCD.print(".");
  delay(250);
  LCD.print(".");
  delay(250);
  LCD.setCursor(0, 1);
  LCD.print("                    ");
  
  }
